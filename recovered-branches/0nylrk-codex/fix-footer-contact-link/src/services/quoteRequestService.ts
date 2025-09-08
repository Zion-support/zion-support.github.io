<<<<<<< HEAD


=======

import {supabase} from "@/integrations/supabase/client";"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";"
import { supabase } from '@/integrations / supabase / client';'
import type { QuoteRequest, QuoteStatus } from '@/types / quotes';'
import { supabase } from '@/integrations/supabase/client';'
import {supabase} from '@/integrations/supabase/client';'
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';'
import { supabase } from '@/integrations/supabase/client','
import type { QuoteRequest, QuoteStatus } from '@/types/quotes','
    return data && data.map(('item': any) => ({
      .select(`;`        *;
      .select(``        *
        }
        'talent':talent_id (
          display_name
        )
      `)`      .select(``        *,
        'talent':talent_id (
        'talent':talent_id (
    return data && data.map(('item': any) => ({
      .order('created_at', { 'ascending': false });'

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {supabase} from "@/integrations/supabase/client";

import type { QuoteRequest, QuoteStatus } from "@/types/quotes";

import type { QuoteRequest, QuoteStatus } from "@/types / quotes";

export const quoteRequestService = {};
  // Get all quote requests (for admin);
  get_all: async () => {}
    const { data, error } = await supabase;'
      .from ('quote_requests');
      .select (`;
        *;

import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",

export const quoteRequestService = {

  // Get all quote requests (for admin)
  getAll: async () => {}
    const { data, error } = await supabase'
      .from('quote_requests')

import {supabase} from "@/integrations/supabase/client";

import type { QuoteRequest, QuoteStatus } from "@/types/quotes";

import { supabase } from '@/integrations / supabase / client';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";

<<<<<<< HEAD





=======

export const quoteRequestService = {
  // Get all quote requests (for admin);
  get_all: async () => {
    const { data, error } = await supabase;
      .from ('quote_requests');
      .select (`;
        *;


import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",

>>>>>>> origin/cursor/delete-old-data-records-6bba
export const quoteRequestService = {
  // Get all quote requests (for admin)
  getAll: async () => {
    const { data, error } = await supabase
      .from('quote_requests')
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      .select(`
        *,

        talent:talent_id (

    return data && data.map((item: any) => ({

<<<<<<< HEAD

=======
.select(`;
import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",;
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;

    return data && data.map((item: any) => ({

      .select(`;
        *;
      .select(`
        *,
        talent:talent_id (
          display_name
        )
      `)

import { supabase } from "@/integrations/supabase/client";""
import {supabase} from "@/integrations/supabase/client";""
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";""
import { supabase } from "@/integrations/supabase/client",""
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",""
import { supabase } from '@/integrations / supabase / client';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";"
export const quoteRequestService = {
  // Get all quote requests (for admin);
  get_all: async () => {
    const { data, error } = await supabase;"
      .from ('quote_requests');
      .select (`;
        *;

import type { QuoteRequest, QuoteStatus } from "@/types/quotes","
export const quoteRequestService = {)
  // Get all quote requests (for admin)
  getAll: async () => {
      .from('quote_requests')`;
pr-12325
    const { data, error } = await supabase;"
      .from('quote_requests')'

      .select(`
        *,
        talent:talent_id (

        talent:talent_id (
    return data && data.map((item: any) => ({

      .order('created_at', { ascending: false });
    if (error) throw error;
    // Format the data to include talent_name,
return data.map(('item': any) => ({
      ...item;
    }
    'talent_name': item.talent?.display_name |'Unknown Talent'})) as QuoteRequest[]'
  }
.select(`;
import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",;
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;

    return data && data.map((item: any) => ({

      .select(`;
        *;
      .select(`
        *,
        talent:talent_id (
          display_name
        )
      `)

import { supabase } from "@/integrations/supabase/client";""
import {supabase} from "@/integrations/supabase/client";""
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";""
import { supabase } from "@/integrations/supabase/client",""
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",""
import { supabase } from '@/integrations / supabase / client';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";"
export const quoteRequestService = {
  // Get all quote requests (for admin);
  get_all: async () => {
    const { data, error } = await supabase;"
      .from ('quote_requests');
      .select (`;
        *;

import type { QuoteRequest, QuoteStatus } from "@/types/quotes","
export const quoteRequestService = {)
  // Get all quote requests (for admin)
  getAll: async () => {
      .from('quote_requests')`;
pr-12325
    const { data, error } = await supabase;"
      .from('quote_requests')'

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
)
    return data && data.map((item: any) => ({
>>>>>>> origin/cursor/delete-old-data-records-6bba
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    
    // Format the data to include talent_name
    return data.map((item: any) => ({
<<<<<<< HEAD



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

  





=======
      ...item,
      'talent_name': item && item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]'
  };

...item,
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Get quote requests for a specific talent
  getByTalentId: async (talentId: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
<<<<<<< HEAD



    

  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
    // If marking as responded, set replied_at
    if (status === 'responded') {
=======
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as QuoteRequest[]
  }
.order('created_at', { ascending: false });
    if (error) throw error;
    return data as QuoteRequest[]
  }
  // Archive/Unarchive a quote request,
"toggleArchive": async ("id": string, "isArchived": boolean) => {
}
const { data } = await supabase;
        .from('quote_requests')'
        .select('viewed_at')'
        .eq('id', id)'
        .single();      }
    }
const { data, error } = await supabase;
      .from('quote_requests')'
      .update(updates)
      .eq('id', id)'
      .select();
    if (error) throw error;
return data[0] as QuoteRequest;
  }
  // Archive/Unarchive a quote request,
'toggleArchive': async ('id': string, 'isArchived': boolean) => {
}
const { data, error } = await supabase;
      .from('quote_requests')'
      .update({ 'is_archived': isArchived })
      .eq('id', id)'
      .select();
    if (error) throw error;
return data[0] as QuoteRequest;
  }
  // Delete a quote request,
'delete': async ('id': string) => {
}
const { error } = await supabase;
      .from('quote_requests')'
      .delete()
      .eq('id', id);'
    if (error) throw error;
return true;
  }
}
      .single(),
    

  // Get a single quote request by id
  getById: async(id: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select(`
        *,
        talent: talent_id(
        talent:talent_id (
          display_name
        )
      `)
      .eq('id', id)
      .single($2);

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

      talent_name: item && item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  };

    if (error) throw error,
    
    return {
      ...data
      }
      'talent_name': data.talent?.display_name || 'Unknown Talent'} as QuoteRequest'
  },
  // Update quote request status,
'updateStatus': async ('id': string, 'status': QuoteStatus) => {
}
const 'updates': any = { status },;
    // If marking as responded, set replied_at,
if (status === 'responded') {'
      }

  // Get a single quote request by id
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('quote_requests')

      .select(`
        *,
        talent:talent_id (
          display_name;
        )`
      `)'
      .eq('id', id)

  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status },
    // If marking as responded, set replied_at
    if (status === 'responded') {
      updates.replied_at = new Date().toISOString()
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';'
export const quoteRequestService = {;
  // Get all quote requests (for admin);
  }
  'getAll': async () => {;
    }
    const { data, error } = await supabase;
      .from('quote_requests');'
      .select(`;`        *,;
        'talent':talent_id (;
          display_name;
        );
      `);`      .order('created_at', { 'ascending': false }),;'
    if (error) throw error,;
    // Format the data to include talent_name;
    return data.map(('item': any) => ({;
      ...item,;
      }
      'talent_name': item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[];'
  },;
  // Get quote requests for a specific talent;
  'getByTalentId': async ('talentId': string) => {;
    }
    const { data, error } = await supabase;
      .from('quote_requests');'

      .select(`;
        *,;
        talent:talent_id (;
          display_name;)
        );
      `);'
      .order('created_at', { ascending: false }),;'
    if (error) throw error,;
    // Format the data to include talent_name;

    return data.map((item: any) => ({;
      ...item,;)'
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[];'
  },;
  // Get quote requests for a specific talent;
  getByTalentId: async (talentId: string) => {;
    const { data, error } = await supabase;'
      .from('quote_requests');''
      .select('*');''
      .eq('talent_id', talentId);''
      .order('created_at', { ascending: false }),;'

    if (error) throw error,;

    return data as QuoteRequest[];
  },;
  // Get a single quote request by id;
  "getById": async ("id": string) => {;
    }
      .from('quote_requests');'
      .select(`;`        *,;
        "talent":talent_id (;
          display_name;
        );
      `);
      .eq('id', id);
      .single(),;
    if (error) throw error,;
    return {;
      ...data,;
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;
    const { data, error } = await supabase;'
      .from('quote_requests');'

      .select(`;
        *,;
        talent:talent_id (;
          display_name;)
        );
      `);'
      .eq('id', id);'
      .single(),;
    if (error) throw error,;

    return {;
      ...data,;'
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;'

  },;
      .from('quote_requests');
      .select('*');
      .eq('talent_id', talentId);
  // Get a single quote request by id;
  getById: async (id: string) => {;
      .single(),;
    return {;
      ...data,;
pr-12325
  // Update quote request status;
  "updateStatus": async ("id": string, "status": QuoteStatus) => {;
    }
    // If marking as responded, set replied_at;
    if (status === 'responded') {;
      updates.replied_at = new Date().toISOString();
    }
;
    // If marking as in_review and viewed_at is null, set viewed_at;
    if (status === 'in_review') {;'
      }
        .from('quote_requests');'
        .select('viewed_at');'
        .eq('id', id);'

        .single(),;
      if (!data.viewed_at) {;}
        updates.viewed_at = new Date().toISOString();}
      }
    }
;
      .from('quote_requests');'
      .update(updates);
      .eq('id', id);
    const { data, error } = await supabase;'
      .from('quote_requests');'
      .update(updates);'
      .eq('id', id);'
      .select(),;
    if (error) throw error,;
    return data[0] as QuoteRequest;
  },;
  // Archive/Unarchive a quote request;
  "toggleArchive": async ("id": string, "isArchived": boolean) => {;
    }
      .from('quote_requests');'
      .update({ is_archived: isArchived });'
      .eq('id', id);'

      .select(),;
    if (error) throw error,;
    return data[0] as QuoteRequest;
  },;
  // Delete a quote request;
  "delete": async ("id": string) => {;
    }
      .from('quote_requests');'
      .delete();
      .eq('id', id),;
    if (error) throw error;
    return true;
    // If marking as in_review and viewed_at is null, set viewed_at;
    if (status === 'in_review') {;
        .select('viewed_at');
      if (!data.viewed_at) {;
        updates.viewed_at = new Date().toISOString();
      .update(updates);
      .select(),;
  // Archive/Unarchive a quote request;
  toggleArchive: async (id: string, isArchived: boolean) => {;
      .update({ is_archived: isArchived });
  // Delete a quote request;
  delete: async (id: string) => {;
      .delete();
      .eq('id', id),;

  getById: async (id: string) => {
    const { data, error } = await supabase;
      .from ('quote_requests');

      .select (`;
        *;
        talent:talent_id (
>>>>>>> origin/cursor/delete-old-data-records-6bba


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

    }
    
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {
      const { data } = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single();

<<<<<<< HEAD

      }
    }

    
    const { data, error } = await supabase

=======
      
      if (!data.viewed_at) {
        updates.viewed_at = new Date().toISOString()
      }
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
      .from('quote_requests')
      .update(updates)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0] as QuoteRequest
  };
  
  // Archive/Unarchive a quote request
<<<<<<< HEAD

  toggleArchive: async (id: string, isArchived: boolean) => {
    const { data, error } = await supabase

=======
  toggleArchive: async(id: string, isArchived: boolean) => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


    // If marking as responded, set replied_at
    if (status === 'responded') {
      updates.replied_at = new Date().toISOString()


=======

import { supabase } from "@/integrations/supabase/client",;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    if (error) throw error,
    return data as QuoteRequest[]
  },

  // Get a single quote request by id
          display_name);
      `);
  // Get a single quote request by id;
          display_name);`;
      .eq ('id', id);
      .single ();
    // Check condition;
  // TODO: Implement
  // Update quote request status;
  update_status: async (id: string, status: QuoteStatus) => {
    // If marking as responded, set replied_at;
    // Check condition;
if ( {) {
      updates.replied_at = new Date ().toISOString ();
    // If marking as in_review and viewed_at is null, set viewed_at;
    // Check condition;
        .select ('viewed_at');
      // Check condition;
        updates.viewed_at = new Date ().toISOString ();
      .update (updates);

      .select ();
;
    // Check condition
if (throw error) {
  $2
}
<<<<<<< HEAD

=======
    return data[0] as QuoteRequest;
  }
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return data[0] as QuoteRequest;
  },;
  // Delete a quote request;
  delete: async (id: string) => {;
    const { error } = await supabase;'
      .from('quote_requests');
      .delete();'
      .eq('id', id),;
    if (error) throw error;

    if (error) throw error,
    return data as QuoteRequest[]
  },

  // Get a single quote request by id
          display_name);
      `);
  // Get a single quote request by id;
          display_name);`;
      .eq ('id', id);
      .single ();
    // Check condition;
  // TODO: Implement
  // Update quote request status;
  update_status: async (id: string, status: QuoteStatus) => {
    // If marking as responded, set replied_at;
    // Check condition;
if ( {) {
      updates.replied_at = new Date ().toISOString ();
    // If marking as in_review and viewed_at is null, set viewed_at;
    // Check condition;
        .select ('viewed_at');
      // Check condition;
        updates.viewed_at = new Date ().toISOString ();
      .update (updates);

      .select ();
;
    // Check condition
if (throw error) {
  $2
}
    return data[0] as QuoteRequest;
  }
;
    // Check condition;
  // Delete a quote request;
      .delete ();
    // Check condition;
`;
pr-12325
if (throw error) {
  $2;
}
    return true;
  }
}
;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
  }
};
  }

};
>>>>>>> origin/cursor/delete-old-data-records-6bba
