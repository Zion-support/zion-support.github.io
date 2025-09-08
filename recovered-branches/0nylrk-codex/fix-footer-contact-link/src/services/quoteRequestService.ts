











      ...item,
)
    return data && data.map((item: any) => ({
      .order('created_at', { ascending: false }),
)
    return data && data.map((item: any) => ({
)'
      .order('created_at', { ascending: false }),'
    if (error) throw error,
    // Format the data to include talent_name;
    return data.map((item: any) => ({

      ...item,)
pr-12325
      talent_name: item && item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  };

  








    

  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
    // If marking as responded, set replied_at
    if (status === 'responded') {

      }
    }

    
    const { data, error } = await supabase


  toggleArchive: async (id: string, isArchived: boolean) => {
    const { data, error } = await supabase



    // If marking as responded, set replied_at
    if (status === 'responded') {
      updates.replied_at = new Date().toISOString()



