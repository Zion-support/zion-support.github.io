
import type {_QuoteRequest, _QuoteStatus} from "@/types/quotes";

export const _quoteRequestService = {_// Get all quote requests (for admin)
  getAll: async () => {
    const { data, _error} = await supabase
      .from('quote_requests')
      .select(`
        *,
        talent:talent_id (
          display_name
        )
      `)
      .order('created_at', {_ascending: false});
    
    if (error) throw error;
    
    // Format the data to include talent_name
    return data.map(_(item: unknown) => ({_...item, _talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[];
  },
  
  // Get quote requests for a specific talent
  getByTalentId: async (_talentId: string) => {_const { data, _error} = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
      .order('created_at', {_ascending: false});
    
    if (error) throw error;
    return data as QuoteRequest[];
  },
  
  // Get a single quote request by id
  getById: async (_id: string) => {_const { data, _error} = await supabase
      .from('quote_requests')
      .select(`
        *,
        talent:talent_id (
          display_name
        )
      `)
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    return {_...data, _talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;
  },
  
  // Update quote request status
  updateStatus: async (_id: string, _status: QuoteStatus) => {_const updates: unknown = { status};
    
    // If marking as responded, set replied_at
    if (status === 'responded') {_updates.replied_at = new Date().toISOString();}
    
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {_const { data} = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single();
      
      if (!data.viewed_at) {_updates.viewed_at = new Date().toISOString();}
    }
    
    const {_data, _error} = await supabase
      .from('quote_requests')
      .update(updates)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0] as QuoteRequest;
  },
  
  // Archive/Unarchive a quote request
  toggleArchive: async (_id: string, _isArchived: boolean) => {_const { data, _error} = await supabase
      .from('quote_requests')
      .update({_is_archived: isArchived})
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0] as QuoteRequest;
  },
  
  // Delete a quote request
  delete: async (_id: string) => {_const { error} = await supabase
      .from('quote_requests')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
};
