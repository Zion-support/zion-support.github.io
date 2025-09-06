 //Get all quote requests (for admin) getAll: async () => {
  const {
  data, error 
}= await supabase .from ('quote requests') .select (`*;
talent:talent id (display name) `) if (error) throw error;
//Format the data to include talent name 
};
//Get quote requests for a specific talent getByTalentId: async (talentId: string) => {
  const {
  data, error 
}= await supabase .from ('quote requests') .select ('*') .eq ('talent id', talentId) if (error) throw error;
return data as QuoteRequest[] 
};
//Get a single quote request by id getById: async (id: string) => {
  const {
  data, error 
}= await supabase .from ('quote requests') .select (`*;
talent: talent id (display name) `) .eq ('id', id) .single ();
if (error) throw error;
//If marking as in review and viewed at is null, set viewed at if (status === 'in review') {
  const {
  data 
}= await supabase .from ('quote requests') .select ('viewed at') .eq ('id', id) .single ();
}const {
  data, error 
}= await supabase .from ('quote requests') .update (updates) .eq ('id', id) .select ();
if (error) throw error;
return data[0] as QuoteRequest 
};
//Archive/Unarchive a quote request toggleArchive: async (id: string, isArchived: boolean) => {
  const {
  data, error 
}= await supabase .from ('quote requests') .update ({
  is archived: isArchived 
}) .eq ('id', id) .select ();
if (error) throw error;
return data[0] as QuoteRequest 
};
// Delete a quote request delete: async (id: string) => {
  const {
  error 
}= await supabase .from ('quote requests') .delete () .eq ('id', id);
if (error) throw error;
return true;
}
};
