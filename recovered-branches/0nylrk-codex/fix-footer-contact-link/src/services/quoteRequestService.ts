
import { supabase } from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";

export const quoteRequestService ={
  // Get all quote requests (for admin)
  getAll: async () => {
    const { data, error } = await supabase
      .from('quote_requests')
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
      ...item,
