<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
export const quoteRequestService = {
  // Get all quote requests (for admin)
  getAll: async() => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select(`
        *,
        talent: talent_id(
          display_name
        )
      `)
      .order($2);
    if (error) throw error,
    
    // Format the data to include talent_name
    return data.map((item: any) => ({
      ...item,
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  },
  
  // Get quote requests for a specific talent
  getByTalentId: async(talentId: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
      .order($2);
    if (error) throw error,
    return data as QuoteRequest[]
  },
  
=======
<<<<<<< HEAD
<<<<<<< HEAD
import {supabase} from "@/integrations/supabase/client";"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";"
import { supabase } from '@/integrations / supabase / client';'
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";"
import { supabase } from "@/integrations/supabase/client";"
import { supabase } from "@/integrations/supabase/client","
import type { QuoteRequest, QuoteStatus } from "@/types/quotes","
    return data && data.map(("item": any) => ({
      .select(`;`        *;
      .select(``        *
        }
        "talent":talent_id (
=======
import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
export const quoteRequestService = {
  // Get all quote requests (for admin);
  get_all: async () => {
    const { data, error } = await supabase;
      .from ('quote_requests');
      .select (`;
        *;
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { supabase } from "@/integrations/supabase/client";
import {supabase} from "@/integrations/supabase/client";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { supabase } from "@/integrations/supabase/client",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",
<<<<<<< HEAD
=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const quoteRequestService = {
  // Get all quote requests (for admin)
  getAll: async () => {
    const { data, error } = await supabase
      .from('quote_requests')
<<<<<<< HEAD
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
=======

      .select(`
        *,

        talent:talent_id (

    return data && data.map((item: any) => ({

<<<<<<< HEAD
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
>>>>>>> origin/chore/fix-lint-and-merge
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      .order('created_at', { ascending: false }),
    
    if (error) throw error,
    
    // Format the data to include talent_name
    return data.map((item: any) => ({
<<<<<<< HEAD
      ...item,
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  },
  
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
...item,
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[]
  },
=======
  



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Get quote requests for a specific talent
  getByTalentId: async (talentId: string) => {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
<<<<<<< HEAD
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as QuoteRequest[]
  }
=======

<<<<<<< HEAD
.order('created_at', { ascending: false });
    if (error) throw error;
    return data as QuoteRequest[]
  }
<<<<<<< HEAD
  // Archive/Unarchive a quote request,
"toggleArchive": async ("id": string, "isArchived": boolean) => {
}
      .from('quote_requests')'
      .update({ "is_archived": isArchived })
      .eq('id', id)'
      .select();
    if (error) throw error;
return data[0] as QuoteRequest;
  }
  // Delete a quote request,
"delete": async ("id": string) => {
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      .order('created_at', { ascending: false }),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    
=======
      .order('created_at', { ascending: false }),
    if (error) throw error,
    return data as QuoteRequest[]
  },
<<<<<<< HEAD
=======
  
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
      ...data,
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest
  },
  
  // Update quote request status
  updateStatus: async(id: string, status: QuoteStatus) => {
    const updates: any = $2;
=======
      ...data;
      talent_name: data.talent?.display_name |'Unknown Talent'} as QuoteRequest
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> origin/chore/fix-lint-and-merge
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
    return data as QuoteRequest[]
  },

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
<<<<<<< HEAD
export const quoteRequestService = {;
  // Get all quote requests (for admin);
  }
  "getAll": async () => {;
    }
      .from('quote_requests');'
      .select(`;`        *,;
        "talent":talent_id (;
=======

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
>>>>>>> origin/chore/fix-lint-and-merge
          display_name;
        );

  // Get quote requests for a specific talent;
  getByTalentId: async (talentId: string) => {
    const { data, error } = await supabase;
      .from('quote_requests')
      .select('*')
      .eq('talent_id', talentId)
    return data as QuoteRequest[]
  },

  // Get a single quote request by id;
  getById: async (id: string) => {
          display_name;)
        )`;
      `)
      .eq('id', id)
      .single();
    if (error) throw error;
    return {
  // TODO: Implement
}
      ...data;
      talent_name: data.talent?.display_name |'Unknown Talent'} as QuoteRequest;
;
  // Get quote requests for a specific talent;
  getByTalentId: async (talent_id: string) => {
      .select ('*');
      .eq ('talent_id', talent_id);
      .order ('created_at', { ascending: false });
    // Check condition;
if (throw error) {
  $2;
    return data as QuoteRequest[];
  // Get a single quote request by id;
      .from ('quote_requests');`;
        talent: talent_id (,
  talent_name: data && data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;

  // Update quote request status;)
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
    // If marking as responded, set replied_at;
    if (status === 'responded') {
      updates && updates.replied_at = new Date().toISOString()
    // If marking as in_review and viewed_at is null, set viewed_at;
    if (status === 'in_review') {
      const { data } = await supabase;
        .select('viewed_at')

      if (!data && data.viewed_at) {
        updates && updates.viewed_at = new Date().toISOString()

      .update(updates)
      .select();
    return data[0] as QuoteRequest;
  // Archive/Unarchive a quote request;
  toggleArchive: async (id: string, isArchived: boolean) => {
      .update({ is_archived: isArchived })
  // Delete a quote request;
  delete: async (id: string) => {
    const { error } = await supabase;
      .delete()
      .eq('id', id);
    return true;

      .single(),
  // TODO: Implement
      ...data,
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;
  // Update quote request status;
    const updates: any = { status },
    // If marking as responded, set replied_at;
      updates.replied_at = new Date().toISOString()
  // TODO: Implement
}
      ...data,'
      talent_name: data.talent?.display_name || 'Unknown Talent'} as QuoteRequest;'
  },
  // Update quote request status;
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status },
    // If marking as responded, set replied_at;'
    if (status === 'responded') {'
      updates.replied_at = new Date().toISOString()'
import { supabase } from "@/integrations/supabase/client",;""
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;"
export const quoteRequestService = {;
  // Get all quote requests (for admin);
  getAll: async () => {;
      .from('quote_requests');`;
      .select(`;
        *,;
        talent:talent_id (;
        );`;
pr-12325
      `);
      .order('created_at', { ascending: false }),;
    if (error) throw error,;
    // Format the data to include talent_name;
    return data.map((item: any) => ({;
      ...item,;
      ...item,;)
pr-12325
      talent_name: item.talent?.display_name || 'Unknown Talent'})) as QuoteRequest[];
  },;
  // Get quote requests for a specific talent;
<<<<<<< HEAD
  "getByTalentId": async ("talentId": string) => {;
    }
=======
  getByTalentId: async (talentId: string) => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .select('*');
      .eq('talent_id', talentId);
      .order('created_at', { ascending: false }),;
    const { data, error } = await supabase;"
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
  "getById": async ("id": string) => {;
    }
      .from('quote_requests');'
      .select(`;`        *,;
        "talent":talent_id (;
=======

  getById: async (id: string) => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .select(`;
        *,;
        talent:talent_id (;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
  "updateStatus": async ("id": string, "status": QuoteStatus) => {;
    }
=======
  updateStatus: async (id: string, status: QuoteStatus) => {;}
    const updates: any = { status },;
>>>>>>> origin/chore/fix-lint-and-merge
    // If marking as responded, set replied_at;
    if (status === 'responded') {;
      updates.replied_at = new Date().toISOString();
    }
;
    // If marking as in_review and viewed_at is null, set viewed_at;
<<<<<<< HEAD
    if (status === 'in_review') {;'
      }
        .from('quote_requests');'
        .select('viewed_at');'
=======
    if (status === 'in_review') {;
      const { data } = await supabase;
        .from('quote_requests');
        .select('viewed_at');
        .eq('id', id);

    // If marking as responded, set replied_at;'
    if (status === 'responded') {;'
      updates.replied_at = new Date().toISOString();
    }
;
    // If marking as in_review and viewed_at is null, set viewed_at;'
    if (status === 'in_review') {;'
      const { data } = await supabase;'
        .from('quote_requests');''
        .select('viewed_at');''
>>>>>>> origin/chore/fix-lint-and-merge
        .eq('id', id);'

        .single(),;
      if (!data.viewed_at) {;}
        updates.viewed_at = new Date().toISOString();}
      }
    }
;
<<<<<<< HEAD
      .from('quote_requests');'
=======
    const { data, error } = await supabase;
      .from('quote_requests');
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
  "toggleArchive": async ("id": string, "isArchived": boolean) => {;
    }
=======

  toggleArchive: async (id: string, isArchived: boolean) => {;
    const { data, error } = await supabase;
      .from('quote_requests');
      .update({ is_archived: isArchived });
      .eq('id', id);
    const { data, error } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
      .from('quote_requests');'
      .update({ is_archived: isArchived });'
      .eq('id', id);'

      .select(),;
    if (error) throw error,;
    return data[0] as QuoteRequest;
  },;
  // Delete a quote request;
<<<<<<< HEAD
  "delete": async ("id": string) => {;
    }
      .from('quote_requests');'
=======

  delete: async (id: string) => {;
    const { error } = await supabase;
      .from('quote_requests');
>>>>>>> origin/chore/fix-lint-and-merge
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

<<<<<<< HEAD
=======
      talent_name: data && data.talent?.display_name || 'Unknown Talent'} as QuoteRequest
  };
  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Update quote request status
  updateStatus: async (id: string, status: QuoteStatus) => {
    const updates: any = { status }
    // If marking as responded, set replied_at
    if (status === 'responded') {
<<<<<<< HEAD
      updates && updates.replied_at = new Date().toISOString()    }
    // If marking as in_review and viewed_at is null, set viewed_at
    if (status === 'in_review') {
      const { data } = await supabase
        .from('quote_requests')
        .select('viewed_at')
        .eq('id', id)
        .single();      }

=======
<<<<<<< HEAD
      updates.replied_at = new Date().toISOString()
=======
      updates && updates.replied_at = new Date().toISOString()
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      
      if (!data.viewed_at) {
        updates.viewed_at = new Date().toISOString()
=======
<<<<<<< HEAD
      if (!data.viewed_at) {
        updates.viewed_at = new Date().toISOString()
=======

      
      if (!data && data.viewed_at) {
        updates && updates.viewed_at = new Date().toISOString()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    }
<<<<<<< HEAD
=======
    
    const { data, error } = await supabase
>>>>>>> origin/chore/fix-lint-and-merge
      .from('quote_requests')
      .update(updates)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0] as QuoteRequest
  };
  
  // Archive/Unarchive a quote request
<<<<<<< HEAD
  toggleArchive: async(id: string, isArchived: boolean) => {
=======
  toggleArchive: async (id: string, isArchived: boolean) => {
    const { data, error } = await supabase
>>>>>>> origin/chore/fix-lint-and-merge
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  },;
  // Archive/Unarchive a quote request;
  toggleArchive: async (id: string, isArchived: boolean) => {;
    const { data, error } = await supabase;'
      .from('quote_requests');
      .update({ is_archived: isArchived });'
      .eq('id', id);
      .select(),;
    if (error) throw error,;
=======
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
    
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  }
};
  }
};
=======
<<<<<<< HEAD
};
  }
};
  }
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
