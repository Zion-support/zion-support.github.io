
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",
=======
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import type { QuoteRequest, QuoteStatus } from &quot;@/types/quotes&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type {_QuoteRequest, _QuoteStatus} from "@/types/quotes";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
<<<<<<< HEAD
      .order('created_at', { ascending: false }),
=======
      .order('created_at', {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (error) throw error,
    
    // Format the data to include talent_name
<<<<<<< HEAD
    return data.map((item: any) => ({
      ...item,
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
=======
    return data.map(_(item: unknown) => ({_...item, _talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  },
  
  // Get quote requests for a specific talent
  getByTalentId: async (_talentId: string) => {_const { data, _error} = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
<<<<<<< HEAD
      .order('created_at', { ascending: false }),
=======
      .order('created_at', {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (error) throw error,
    return data as QuoteRequest[]
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
      .single(),
    
    if (error) throw error,
    
<<<<<<< HEAD
    return {
      ...data,
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest
  },
  
  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status },
    
    // If marking as responded, set replied_at
    if (status === 'responded') {
      updates.replied_at = new Date().toISOString()
    }
=======
    return {_...data, _talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;
  },
  
  // Update quote request status
  updateStatus: async (_id: string, _status: QuoteStatus) => {_const updates: unknown = { status};
    
    // If marking as responded, set replied_at
    if (status === 'responded') {_updates.replied_at = new Date().toISOString();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {_const { data} = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single(),
      
<<<<<<< HEAD
      if (!data.viewed_at) {
        updates.viewed_at = new Date().toISOString()
      }
=======
      if (!data.viewed_at) {_updates.viewed_at = new Date().toISOString();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    
    const {_data, _error} = await supabase
      .from('quote_requests')
      .update(updates)
      .eq('id', id)
      .select(),
    
    if (error) throw error,
    return data[0] as QuoteRequest
  },
  
  // Archive/Unarchive a quote request
  toggleArchive: async (_id: string, _isArchived: boolean) => {_const { data, _error} = await supabase
      .from('quote_requests')
      .update({_is_archived: isArchived})
      .eq('id', id)
      .select(),
    
    if (error) throw error,
    return data[0] as QuoteRequest
  },
  
  // Delete a quote request
  delete: async (_id: string) => {_const { error} = await supabase
      .from('quote_requests')
      .delete()
      .eq('id', id),
    
    if (error) throw error,
    return true
  }
},
