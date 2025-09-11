<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {supabase} from "@/integrations/supabase/client";


import type { QuoteRequest, QuoteStatus } from "@/types/quotes";


import { supabase } from '@/integrations / supabase / client';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";

<<<<<<< HEAD


<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export const quoteRequestService = {
  // Get all quote requests (for admin);
  get_all: async () => {
    const { data, error } = await supabase;
      .from ('quote_requests');
      .select (`;
        *;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const quoteRequestService = {
  // Get all quote requests (for admin)
  getAll: async () => {
    const { data, error } = await supabase
      .from('quote_requests')
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .select(`;
        *;
      .select(`
        *,
        talent:talent_id (
          display_name
        )
      `)
<<<<<<< HEAD
      .select(`
        *,

        talent:talent_id (

        talent:talent_id (
    return data && data.map((item: any) => ({

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .order('created_at', { ascending: false });
    if (error) throw error;
    // Format the data to include talent_name
    return data.map((item: any) => ({
      ...item
      talent_name: item.talent?.display_name |'Unknown Talent'})) as QuoteRequest[]
  }
<<<<<<< HEAD
=======

      .select(`
        *,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
<<<<<<< HEAD
      ...item,
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  },
  
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      ...item,
      talent_name: item && item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  };
  
<<<<<<< HEAD



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Get quote requests for a specific talent
  getByTalentId: async (talentId: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as QuoteRequest[]
  }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    return data as QuoteRequest[]
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
    // If marking as responded, set replied_at
    if (status === 'responded') {
<<<<<<< HEAD
<<<<<<< HEAD
      updates.replied_at = new Date().toISOString()
=======
      updates && updates.replied_at = new Date().toISOString()
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      updates && updates.replied_at = new Date().toISOString()
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {
      const { data } = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single();
<<<<<<< HEAD
<<<<<<< HEAD
      if (!data.viewed_at) {
        updates.viewed_at = new Date().toISOString()
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      
      if (!data && data.viewed_at) {
        updates && updates.viewed_at = new Date().toISOString()

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    return data as QuoteRequest[]
  },
  


  // Get a single quote request by id
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

import { supabase } from "@/integrations/supabase/client",;
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;
;
export const quoteRequestService = {;
  // Get all quote requests (for admin);
  getAll:async () => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .select(`;
        *,;
        talent:talent_id (;
          display_name;
        );
      `);
      .order('created_at', { ascending:false }),;
    ;
    if (error) throw error,;
    ;
    // Format the data to include talent_name;
    return data.map((item:any) => ({;
      ...item,;
      talent_name:item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[],;
  },;
  ;
  // Get quote requests for a specific talent;
  getByTalentId:async (talentId:string) => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .select('*');
      .eq('talent_id', talentId);
      .order('created_at', { ascending:false }),;
    ;
    if (error) throw error,;
    return data as QuoteRequest[],;
  },;
  ;
  // Get a single quote request by id;
  getById:async (id:string) => {;
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
    ;
    if (error) throw error,;
    ;
    return {;
      ...data,;
      talent_name:data.talent?.display_name || 'Unknown Talent'} as QuoteRequest,;
  },;
  ;
  // Update quote request status;
  updateStatus:async (id:string, status:QuoteStatus) => {;
    const updates:any = { status },;
    ;
    // If marking as responded, set replied_at;
    if (status === 'responded') {;
      updates.replied_at = new Date().toISOString(),;
    }
    ;
    // If marking as in_review and viewed_at is null, set viewed_at;
    if (status === 'in_review') {;
      const { data } = await supabase;
        .from('quote_requests');
        .select('viewed_at');
        .eq('id', id);
        .single(),;
      ;
      if (!data.viewed_at) {;
        updates.viewed_at = new Date().toISOString(),;
      }
    }
    ;
    const { data, error } = await supabase;
      .from('quote_requests');
      .update(updates);
      .eq('id', id);
      .select(),;
    ;
    if (error) throw error,;
    return data[0] as QuoteRequest,;
  },;
  ;
  // Archive/Unarchive a quote request;
  toggleArchive:async (id:string, isArchived:boolean) => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .update({ is_archived:isArchived });
      .eq('id', id);
      .select(),;
    ;
    if (error) throw error,;
    return data[0] as QuoteRequest,;
  },;
  ;
  // Delete a quote request;
  delete:async (id:string) => {;
    const { error } = await supabase;
      .from('quote_requests');
      .delete();
      .eq('id', id),;
    ;
    if (error) throw error,;
    return true,;  }
},;
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
};
  }
};
  }
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
