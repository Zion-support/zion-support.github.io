<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {supabase} from "@/integrations/supabase/client";


import type { QuoteRequest, QuoteStatus } from "@/types/quotes";


import { supabase } from '@/integrations / supabase / client';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const quoteRequestService = {
  // Get all quote requests (for admin);
  get_all: async () => {
    const { data, error } = await supabase;
      .from ('quote_requests');
      .select (`;
        *;


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export const quoteRequestService = {
  // Get all quote requests (for admin)
  getAll: async () => {
    const { data, error } = await supabase
      .from('quote_requests')
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

      .select(`
        *,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        talent:talent_id (

    return data && data.map((item: any) => ({

<<<<<<< HEAD
=======
      .select(`;
        *;
      .select(`
        *,
        talent:talent_id (
          display_name
        )
      `)
      .select(`
        *,

        talent:talent_id (

        talent:talent_id (
    return data && data.map((item: any) => ({

      .order('created_at', { ascending: false });
    if (error) throw error;
    // Format the data to include talent_name
    return data.map((item: any) => ({
      ...item
      talent_name: item.talent?.display_name |'Unknown Talent'})) as QuoteRequest[]
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    
    // Format the data to include talent_name
    return data.map((item: any) => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      ...item,
      talent_name: item && item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  };
  
<<<<<<< HEAD
=======
<<<<<<< HEAD



=======
      ...item,
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  // Get quote requests for a specific talent
  getByTalentId: async (talentId: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as QuoteRequest[]
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    return data as QuoteRequest[]
  },
  
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
  getById: async (id: string) => {
    const { data, error } = await supabase;
      .from ('quote_requests');
      .select (`;
        *;
        talent:talent_id (
<<<<<<< HEAD
=======
<<<<<<< HEAD

      talent_name: data && data.talent?.display_name || 'Unknown Talent'} as QuoteRequest
  };
  

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
    // If marking as responded, set replied_at
    if (status === 'responded') {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      updates && updates.replied_at = new Date().toISOString()
=======
      updates.replied_at = new Date().toISOString()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    }
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {
      const { data } = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

      
      if (!data && data.viewed_at) {
        updates && updates.viewed_at = new Date().toISOString()

=======
      if (!data.viewed_at) {
        updates.viewed_at = new Date().toISOString()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    return data as QuoteRequest[]
  },
  


  // Get a single quote request by id
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
  }
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
};
  }
};
  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
