=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {supabase} from "@/integrations/supabase/client";


import type { QuoteRequest, QuoteStatus } from "@/types/quotes";


import { supabase } from '@/integrations / supabase / client';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";

=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
        talent:talent_id (

        talent:talent_id (
    return data && data.map((item: any) => ({

=======      .order('created_at', { ascending: false });
    if (error) throw error;
    // Format the data to include talent_name
    return data.map((item: any) => ({
      ...item
      talent_name: item.talent?.display_name |'Unknown Talent'})) as QuoteRequest[]
  }
      .select(`
        *,
        talent:talent_id (

    return data && data.map((item: any) => ({
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    
    // Format the data to include talent_name
    return data.map((item: any) => ({
      ...item,
      talent_name: item && item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  };
  
=======  // Get quote requests for a specific talent
  getByTalentId: async (talentId: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    return data as QuoteRequest[]
  },
  

  // Get a single quote request by id
=======
          display_name);
      `);
      .order ('created_at', { ascending: false });
;
    // Check condition
if (throw error) {
  $2
}
    // Format the data to include talent_name;
    return data.map ((item: any) => ({
      ...item,
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[];
  }
=======;
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
  

      
      if (!data && data.viewed_at) {
        updates && updates.viewed_at = new Date().toISOString()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
