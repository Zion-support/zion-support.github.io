<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {supabase} from "@/integrations/supabase/client";

=======


import { supabase } from "@/integrations/supabase/client";"
import {supabase} from "@/integrations/supabase/client";"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";"
import { supabase } from "@/integrations/supabase/client","
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",


";
import {supabase} from "@/integrations/supabase/client";

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { supabase } from '@/integrations / supabase / client';
=======
import { supabase } from '@/integrations / supabase / client';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";


export const quoteRequestService = {};
  // Get all quote requests (for admin);
  get_all: async () => {}
    const { data, error } = await supabase;'
      .from ('quote_requests');
      .select (`;
        *;




<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
=======
import { supabase } from '@/integrations / supabase / client';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {supabase} from "@/integrations/supabase/client";

import type { QuoteRequest, QuoteStatus } from "@/types/quotes";

import { supabase } from '@/integrations / supabase / client';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const quoteRequestService = {
=======
export const quoteRequestService = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  // Get all quote requests (for admin)
  getAll: async () => {}
    const { data, error } = await supabase'
      .from('quote_requests')
<<<<<<< HEAD
<<<<<<< HEAD

        talent:talent_id (
          display_name
        )
      `)
=======
<<<<<<< HEAD
<<<<<<< HEAD

      .select(`
        *,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        talent:talent_id (

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return data && data.map((item: any) => ({

      .select(`;
        *;
      .select(`
        *,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      ...item,
=======

        talent:talent_id (

    return data && data.map((item: any) => ({}
'
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    ;
    // Format the data to include talent_name;
    return data.map((item: any) => ({}
      ...item,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      talent_name: item && item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  };
  

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
<<<<<<< HEAD



  // Get quote requests for a specific talent;
  getByTalentId: async (talentId: string) => {}
    const { data, error } = await supabase'
      .from('quote_requests')'
      .select('*')'
      .eq('talent_id', talentId)
'
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    return data as QuoteRequest[]
  },
  

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Get a single quote request by id
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
=======
  // Get a single quote request by id;
  getById: async (id: string) => {}
    const { data, error } = await supabase'
      .from('quote_requests')`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      .select(`
        *,
        talent:talent_id (
          display_name;
        )`
      `)'
      .eq('id', id)
<<<<<<< HEAD

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
=======
      .single();
    if (error) throw error;
    return {}
      ...data;'
      talent_name: data.talent?.display_name |'Unknown Talent'} as QuoteRequest;
  }
;
  // Get quote requests for a specific talent;
  getByTalentId: async (talent_id: string) => {}
    const { data, error } = await supabase;'
      .from ('quote_requests');'
      .select ('*');'
      .eq ('talent_id', talent_id);'
      .order ('created_at', { ascending: false });
;
    // Check condition;
if (throw error) {}
  $2;
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return data as QuoteRequest[];
  },;
  // Get a single quote request by id;
<<<<<<< HEAD
<<<<<<< HEAD
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

  }
};
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  getById: async (id: string) => {
    const { data, error } = await supabase;
      .from ('quote_requests');
=======
  getById: async (id: string) => {}
    const { data, error } = await supabase;'
      .from ('quote_requests');`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      .select (`;
        *;
        talent:talent_id (


<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
    // If marking as responded, set replied_at
    if (status === 'responded') {
      updates && updates.replied_at = new Date().toISOString()    }
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {
      const { data } = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single();      }
=======

  // Update quote request status;
  updateStatus: async (id: string, status: QuoteStatus) => {}
    const updates: any = { status }
    // If marking as responded, set replied_at'
    if (status === 'responded') {}
    }
    // If marking as in_review and viewed_at is null, set viewed_at'
    if (status === 'in_review') {}
      const { data } = await supabase'
        .from('quote_requests')'
        .select('viewed_at')'
        .eq('id', id)
        .single();



      }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
    const { data, error } = await supabase'
      .from('quote_requests')
      .update(updates)'
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0] as QuoteRequest;
  }
  // Archive/Unarchive a quote request;
  toggleArchive: async (id: string, isArchived: boolean) => {}
    const { data, error } = await supabase'
      .from('quote_requests')
      .update({ is_archived: isArchived })'
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0] as QuoteRequest;
  }
  // Delete a quote request;
  delete: async (id: string) => {}
    const { error } = await supabase'
      .from('quote_requests')
      .delete()'
      .eq('id', id);
    if (error) throw error;
    return true;
  }
}
<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      .single(),
    
    if (error) throw error,
    
    return {}
      ...data,'
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;
  },
  
  // Update quote request status;
  updateStatus: async (id: string, status: QuoteStatus) => {}
    const updates: any = { status },
    
    // If marking as responded, set replied_at'
    if (status === 'responded') {}
      updates.replied_at = new Date().toISOString()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
import { supabase } from "@/integrations/supabase/client",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;
export const quoteRequestService = {;
  // Get all quote requests (for admin);
  getAll: async () => {;
    const { data, error } = await supabase;'
      .from('quote_requests');`
      .select(`;
        *,;
        talent:talent_id (;
          display_name;
        );`
      `);'
      .order('created_at', { ascending: false }),;
    if (error) throw error,;
    // Format the data to include talent_name;
    return data.map((item: any) => ({;
      ...item,;'
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[];
  },;
  // Get quote requests for a specific talent;
  getByTalentId: async (talentId: string) => {;
    const { data, error } = await supabase;'
      .from('quote_requests');'
      .select('*');'
      .eq('talent_id', talentId);'
      .order('created_at', { ascending: false }),;
    if (error) throw error,;
    return data as QuoteRequest[];
  },;
  // Get a single quote request by id;
  getById: async (id: string) => {;
    const { data, error } = await supabase;'
      .from('quote_requests');`
      .select(`;
        *,;
        talent:talent_id (;
          display_name;
        );`
      `);'
      .eq('id', id);
      .single(),;
    if (error) throw error,;
    return {;
      ...data,;'
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;
  },;
  // Update quote request status;
  updateStatus: async (id: string, status: QuoteStatus) => {;
    const updates: any = { status },;
    // If marking as responded, set replied_at;'
    if (status === 'responded') {;
      updates.replied_at = new Date().toISOString();
    }
;
    // If marking as in_review and viewed_at is null, set viewed_at;'
    if (status === 'in_review') {;
      const { data } = await supabase;'
        .from('quote_requests');'
        .select('viewed_at');'
        .eq('id', id);
        .single(),;
      if (!data.viewed_at) {;
        updates.viewed_at = new Date().toISOString();
      }
    }
;
    const { data, error } = await supabase;'
      .from('quote_requests');
      .update(updates);'
      .eq('id', id);
      .select(),;
    if (error) throw error,;
    return data[0] as QuoteRequest;
  },;
  // Archive/Unarchive a quote request;
  toggleArchive: async (id: string, isArchived: boolean) => {;
    const { data, error } = await supabase;'
      .from('quote_requests');
      .update({ is_archived: isArchived });'
      .eq('id', id);
      .select(),;
    if (error) throw error,;
    return data[0] as QuoteRequest;
  },;
  // Delete a quote request;
  delete: async (id: string) => {;
    const { error } = await supabase;'
      .from('quote_requests');
      .delete();'
      .eq('id', id),;
    if (error) throw error;
<<<<<<< HEAD
<<<<<<< HEAD
    return true;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

          display_name);`
      `);'
      .eq ('id', id);
      .single ();
;
    // Check condition;
if (throw error) {}
  $2;
}
    return {}
      ...data;'
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;
  }
;
  // Update quote request status;
  update_status: async (id: string, status: QuoteStatus) => {}
    const updates: any = { status }
;
    // If marking as responded, set replied_at;
    // Check condition;
if ( {) {}
  $2;
}
      updates.replied_at = new Date ().toISOString ();
    }
    // If marking as in_review and viewed_at is null, set viewed_at;
    // Check condition;
if ( {) {}
  $2;
}
      const { data } = await supabase;'
        .from ('quote_requests');'
        .select ('viewed_at');'
        .eq ('id', id);
        .single ();
;
      // Check condition;
if ( {) {}
  $2;
}
        updates.viewed_at = new Date ().toISOString ();
      }
    }
    const { data, error } = await supabase;'
      .from ('quote_requests');
      .update (updates);'
      .eq ('id', id);
      .select ();
;
    // Check condition;
if (throw error) {}
  $2;
}
    return data[0] as QuoteRequest;
  }


};
<<<<<<< HEAD
  }
};
  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    return true;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    return true;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
