

import {supabase} from "@/integrations/supabase/client";


import type { QuoteRequest, QuoteStatus } from "@/types/quotes";


import { supabase } from '@/integrations / supabase / client';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";

export const quoteRequestService = {
  // Get all quote requests (for admin);
  get_all: async () => {
    const { data, error } = await supabase;
      .from ('quote_requests');
      .select (`;
        *;
=======


export const quoteRequestService = {
  // Get all quote requests (for admin)
  getAll: async () => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select(`;
        *;
      .select(`
        *,
        talent:talent_id (
          display_name
        )
      `)
      .order('created_at', { ascending: false });
    if (error) throw error;
    // Format the data to include talent_name
    return data.map((item: any) => ({
      ...item
      talent_name: item.talent?.display_name |'Unknown Talent'})) as QuoteRequest[]
  }
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    
    // Format the data to include talent_name
    return data.map((item: any) => ({

      ...item,
      talent_name: item && item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  };
  
  // Get quote requests for a specific talent
  getByTalentId: async (talentId: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as QuoteRequest[]
  }
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    return data as QuoteRequest[]
  },
  
  // Get a single quote request by id
  getById: async (id: string) => {
    const { data, error } = await supabase
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
    return {
      ...data;
      talent_name: data.talent?.display_name |'Unknown Talent'} as QuoteRequest
  }
;
  // Get quote requests for a specific talent;
  getByTalentId: async (talent_id: string) => {
    const { data, error } = await supabase;
      .from ('quote_requests');
      .select ('*');
      .eq ('talent_id', talent_id);
      .order ('created_at', { ascending: false });
;
    // Check condition
if (throw error) {
  $2
}
    return data as QuoteRequest[];
  }
;
  // Get a single quote request by id;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  getById: async (id: string) => {
    const { data, error } = await supabase;
      .from ('quote_requests');
      .select (`;
        *;
        talent:talent_id (

      talent_name: data && data.talent?.display_name || 'Unknown Talent'} as QuoteRequest
  };
  

  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
    // If marking as responded, set replied_at
    if (status === 'responded') {
      updates && updates.replied_at = new Date().toISOString()
    }
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {
      const { data } = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single();

      
      if (!data && data.viewed_at) {
        updates && updates.viewed_at = new Date().toISOString()

      }
    }
    const { data, error } = await supabase
      .from('quote_requests')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0] as QuoteRequest
  }
  // Archive/Unarchive a quote request
  toggleArchive: async (id: string, isArchived: boolean) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .update({ is_archived: isArchived })
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0] as QuoteRequest
  }
  // Delete a quote request
  delete: async (id: string) => {
    const { error } = await supabase
      .from('quote_requests')
      .delete()
      .eq('id', id);
    if (error) throw error;
    return true
  }
}

      .single(),
    
    if (error) throw error,
    
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
};
