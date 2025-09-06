
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
=======
import {supabase} from "@/integrations/supabase/client";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
=======
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======

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


>>>>>>> main
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const quoteRequestService = {
  // Get all quote requests (for admin)
  getAll: async () => {
    const { data, error } = await supabase
      .from('quote_requests')
<<<<<<< HEAD
<<<<<<< HEAD
      .select(`;
        *;
=======
      .select(`
        *,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        talent:talent_id (
          display_name
        )
      `)
<<<<<<< HEAD
      .order('created_at', { ascending: false });
    if (error) throw error;
    // Format the data to include talent_name
    return data.map((item: any) => ({
      ...item
      talent_name: item.talent?.display_name |'Unknown Talent'})) as QuoteRequest[]
  }
=======
=======

      .select(`
        *,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        talent:talent_id (

    return data && data.map((item: any) => ({
=======

>>>>>>> main
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    
    // Format the data to include talent_name
    return data.map((item: any) => ({
<<<<<<< HEAD
      ...item,
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

      ...item,
      talent_name: item && item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  };
  



>>>>>>> main
  // Get quote requests for a specific talent
  getByTalentId: async (talentId: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
<<<<<<< HEAD
<<<<<<< HEAD
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as QuoteRequest[]
  }
=======
=======


>>>>>>> main
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    return data as QuoteRequest[]
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
      .single();
    if (error) throw error;
    return {
      ...data;
      talent_name: data.talent?.display_name |'Unknown Talent'} as QuoteRequest
  }
=======


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
  

>>>>>>> main
  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
    // If marking as responded, set replied_at
    if (status === 'responded') {
<<<<<<< HEAD
      updates.replied_at = new Date().toISOString()
=======
      updates && updates.replied_at = new Date().toISOString()
>>>>>>> main
    }
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {
      const { data } = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single();
<<<<<<< HEAD
      if (!data.viewed_at) {
        updates.viewed_at = new Date().toISOString()
=======

      
      if (!data && data.viewed_at) {
        updates && updates.viewed_at = new Date().toISOString()

>>>>>>> main
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

=======
<<<<<<< HEAD
=======
          display_name);
      `);
      .eq ('id', id);
      .single ();
;
    // Check condition
if (throw error) {
  $2
}
    return {
      ...data;
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;
  }
;
  // Update quote request status;
  update_status: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
;
    // If marking as responded, set replied_at;
    // Check condition
if ( {) {
  $2
}
      updates.replied_at = new Date ().toISOString ();
    }
    // If marking as in_review and viewed_at is null, set viewed_at;
    // Check condition
if ( {) {
  $2
}
      const { data } = await supabase;
        .from ('quote_requests');
        .select ('viewed_at');
        .eq ('id', id);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        updates.viewed_at = new Date ().toISOString ();
      }
    }
    const { data, error } = await supabase;
      .from ('quote_requests');
      .update (updates);
      .eq ('id', id);
      .select ();
;
    // Check condition
if (throw error) {
  $2
}
    return data[0] as QuoteRequest;
=======

>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
    
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {
      const { data } = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single();
      
      if (!data.viewed_at) {
        updates.viewed_at = new Date().toISOString()
      }
    }
    
    const { data, error } = await supabase
      .from('quote_requests')
      .update(updates)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0] as QuoteRequest
  };
  
  // Archive/Unarchive a quote request
  toggleArchive: async (id: string, isArchived: boolean) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .update({ is_archived: isArchived })
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0] as QuoteRequest
  };
  
  // Delete a quote request
  delete: async (id: string) => {
    const { error } = await supabase
      .from('quote_requests')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { supabase } from "@/integrations/supabase/client",;
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;
export const quoteRequestService = {;
  // Get all quote requests (for admin);
  getAll: async () => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .select(`;
        *,;
        talent:talent_id (;
          display_name;
        );
      `);
      .order('created_at', { ascending: false }),;
    if (error) throw error,;
    // Format the data to include talent_name;
    return data.map((item: any) => ({;
      ...item,;
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[];
  },;
  // Get quote requests for a specific talent;
  getByTalentId: async (talentId: string) => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .select('*');
      .eq('talent_id', talentId);
      .order('created_at', { ascending: false }),;
    if (error) throw error,;
    return data as QuoteRequest[];
  },;
  // Get a single quote request by id;
  getById: async (id: string) => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .select(`;
        *,;
        talent:talent_id (;
          display_name;
        );
      `);
      .eq('id', id);
      .single(),;
    if (error) throw error,;
    return {;
      ...data,;
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;
  },;
  // Update quote request status;
  updateStatus: async (id: string, status: QuoteStatus) => {;
    const updates: any = { status },;
    // If marking as responded, set replied_at;
    if (status === 'responded') {;
      updates.replied_at = new Date().toISOString();
    }
;
    // If marking as in_review and viewed_at is null, set viewed_at;
    if (status === 'in_review') {;
      const { data } = await supabase;
        .from('quote_requests');
        .select('viewed_at');
        .eq('id', id);
        .single(),;
      if (!data.viewed_at) {;
        updates.viewed_at = new Date().toISOString();
      }
    }
;
    const { data, error } = await supabase;
      .from('quote_requests');
      .update(updates);
      .eq('id', id);
      .select(),;
    if (error) throw error,;
    return data[0] as QuoteRequest;
  },;
  // Archive/Unarchive a quote request;
  toggleArchive: async (id: string, isArchived: boolean) => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .update({ is_archived: isArchived });
      .eq('id', id);
      .select(),;
    if (error) throw error,;
    return data[0] as QuoteRequest;
  },;
  // Delete a quote request;
  delete: async (id: string) => {;
    const { error } = await supabase;
      .from('quote_requests');
      .delete();
      .eq('id', id),;
    if (error) throw error;
    return true;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
;
  // Archive / Unarchive a quote request;
  toggle_archive: async (id: string, is_archived: boolean) => {
    const { data, error } = await supabase;
      .from ('quote_requests');
      .update ({ is_archived: is_archived });
      .eq ('id', id);
      .select ();
;
    // Check condition
if (throw error) {
  $2
}
    return data[0] as QuoteRequest;
  }
;
  // Delete a quote request;
  delete: async (id: string) => {
    const { error } = await supabase;
      .from ('quote_requests');
      .delete ();
      .eq ('id', id);
;
    // Check condition
if (throw error) {
  $2
}
    return true;
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
