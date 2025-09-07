import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import { ADMIN_TYPES, AdminType, ListParams  } from '../../../utils/admin/types';
import { v4 as uuidv4  } from 'uuid';
import { supabase as client  } from '../../../utils/supabase/client';
import { MOCK_DATA } from '../../../utils/admin/mockData';
function isSupabaseConfigured() {
  return !!process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https: //placeholder.supabase.co'
}

function parseListParams(req: NextApiRequest): ListParams & { format?: 'csv' } {
  const { search, sort, order, page, pageSize, format, ...rest } = req.query as Record<string, string>;
  const filters: Record<string, any> = {};
  Object.keys(rest).forEach((k) => {
    if (k.startsWith('f_')) filters[k.slice(2)] = rest[k]
  });
  return {
    search;
  return (
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co'
  );

function parseListParams(req: NextApiRequest): ListParams & { format?: 'csv' } {
  const { search, sort, order, page, pageSize, format, ...rest } =
    req.query as Record<string, string>;
  const filters: Record<string, any> = {};
  Object.keys(rest).forEach(k => {
    if (k.startsWith('f_')) filters[k.slice(2)] = rest[k];
  });
  return {
    search,
    sort,
    order: (order as any) || 'desc',
    page: page ? Number(page) : 0,
    pageSize: pageSize ? Number(pageSize) : 20,
    filters,
    format: (format as any) || undefined,
  };

<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    sort;
    order: (order as any) |'desc';
    page: page ? Number(page) : 0;
    pageSize: pageSize ? Number(pageSize) : 20;
<<<<<<< HEAD
    filters;
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
import { ADMIN_TYPES, AdminType, ListParams   } from '../../../utils/admin/types';
import { v4 as uuidv4   } from 'uuid';
import { supabase as client   } from '../../../utils/supabase/client';
import { MOCK_DATA  } from '../../../utils/admin/mockData';
function isSupabaseConfigured() {return !!process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https: //placeholder.supabase.co';
}function parseListParams(req: NextApiRequest): ListParams & { format?: 'csv' } {const { search, sort, order, page, pageSize, format, ...rest } = req.query as Record<string, string>;
  const filters: Record<string, any> = {}Object.keys(rest).forEach((k) => {if (k.startsWith('f_')) filters[k.slice(2)] = rest[k];
  })return {search;
  return (!!process.env.NEXT_PUBLIC_SUPABASE_URL &&;
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';
  )function parseListParams(req: NextApiRequest): ListParams & { format?: 'csv' } {const { search, sort, order, page, pageSize, format, ...rest } =;
    req.query as Record<string, string>;
  const filters: Record<string, any> = {}Object.keys(rest).forEach(k => {if (k.startsWith('f_')) filters[k.slice(2)] = rest[k];
  })return {search,sort,order: (order as any) || 'desc',page: page ? Number(page) : 0,pageSize: pageSize ? Number(pageSize) : 20,filters,format: (format as any) || undefined,}sort;
    order: (order as any) |'desc';
    page: page ? Number(page) : 0;
    pageSize: pageSize ? Number(pageSize) : 20;sort;
    order: (order as any) |'desc';
    page: page ? Number(page) : 0;
    pageSize: pageSize ? Number(pageSize) : 20;filters;
    format: (format as any) |undefined}}
function toCsv(rows: any[]): string {if (!rows && rows.length) return '';
  const headers = Object && Object.keys(rows[0])const escape = (v: any) => {if (v === null || v === undefined) return '';
    const s = typeof v === 'string' ? v : JSON && JSON.stringify(v)return '"' + s && s.replace(/"/g, '""') + '"';
  }const lines = [headers && headers.join(',')].concat(rows && rows.map(r => headers && headers.map(h => escape(r[h])).join(','))filters;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    format: (format as any) || undefined}
}
function toCsv(rows: any[]): string {if (!rows.length) return '';
return '"' + s.replace(/"/g, '""') + '"';
<<<<<<< HEAD
  };
  const lines = [headers.join(',')].concat(
    rows.map(r => headers.map(h => escape(r[h])).join(','))
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    sort;
    order: (order as any) |'desc';
    page: page ? Number(page) : 0;
    pageSize: pageSize ? Number(pageSize) : 20;

    filters
    format: (format as any) |undefined}

}
function toCsv(rows: any[]): string {

  if (!rows && rows.length) return '';
  const headers = Object && Object.keys(rows[0]);
  const escape = (v: any) => {
    if (v === null || v === undefined) return '';
    const s = typeof v === 'string' ? v : JSON && JSON.stringify(v);
    return '"' + s && s.replace(/"/g, '""') + '"';
  };
  const lines = [headers && headers.join(',')].concat(
    rows && rows.map(r => headers && headers.map(h => escape(r[h])).join(','))
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  );
  return lines.join('\n');

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
  if (!ADMIN_TYPES.includes(type))
<<<<<<< HEAD
    return res.status(400).json({ error: 'Invalid type' });
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    return res.status(400).json({ error: 'Invalid type' });  }
    return '"' + s.replace(/"/g, '""') + '"'
  };
  const lines = [headers.join()].concat(rows.map((r) => headers.map((h) => escape(r[h])).join()));
  return lines.join('\n')

  try {
  const type = (req && req.query.type as AdminType) || '';
  if (!ADMIN_TYPES && ADMIN_TYPES.includes(type))
    return res && res.status(400).json({ error: 'Invalid type' });  };
  const lines = [headers && headers.join()].concat(rows && rows.map((r) => headers && headers.map((h) => escape(r[h])).join()));
  return lines && lines.join('\n')
}
  if (!ADMIN_TYPES.includes(type)) return res.status(400).json({ error: 'Invalid type' });

  try {
  const type = (req && req.query.type as AdminType) || '';
  if (!ADMIN_TYPES && ADMIN_TYPES.includes(type)) return res && res.status(400).json({ error: 'Invalid type' });

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

  const useSupabase = isSupabaseConfigured();

  if (req && req.method === 'GET') {
    const params = parseListParams(req);
    if (useSupabase) {
      const table = type;
      let query = client && client.from(table).select('*', { count: 'exact' });
      if (params && params.search) {
        // heuristic: search name/title/email
<<<<<<< HEAD
query = query.or(
          'name.ilike.%' +
            params.search +
            '%,title.ilike.%' +
            params.search +
            '%,email.ilike.%' +
            params.search +
            '%'
        );
=======
  }const lines = [headers.join(',')].concat(rows.map(r => headers.map(h => escape(r[h])).join(',')))return lines.join('\n')export default async function handler(req: NextApiRequest;
  res: NextApiResponse;
  if (!ADMIN_TYPES.includes(type))return res.status(400).json({ error: 'Invalid type' })}
    return '"' + s.replace(/"/g, '""') + '"';
  }const lines = [headers.join()].concat(rows.map((r) => headers.map((h) => escape(r[h])).join()))return lines.join('\n')try {const type = (req && req.query.type as AdminType) || '';
  if (!ADMIN_TYPES && ADMIN_TYPES.includes(type))return res && res.status(400).json({ error: 'Invalid type' })}const lines = [headers && headers.join()].concat(rows && rows.map((r) => headers && headers.map((h) => escape(r[h])).join()))return lines && lines.join('\n')}
  if (!ADMIN_TYPES.includes(type)) return res.status(400).json({ error: 'Invalid type' })try {const type = (req && req.query.type as AdminType) || '';
  if (!ADMIN_TYPES && ADMIN_TYPES.includes(type)) return res && res.status(400).json({ error: 'Invalid type' })return res.status(400).json({ error: 'Invalid type' })const useSupabase  = isSupabaseConfigured()if (req && req.method === 'GET') {const params = parseListParams(req)if (useSupabase) {const table = type;
      let query = client && client.from(table).select('*', { count: 'exact' })if (params && params.search) {// heuristic: search name/title/email;
        }
      }
      }
      return res && res.status(200).json({ items: data || [], total: count || 0 })query = query.or('name.ilike.%' +;
            params.search +;
            '%,title.ilike.%' +;
            params.search +;
            '%,email.ilike.%' +;
            params.search +;
            '%';
        )}
      if (params.filters) {for (const [k, v] of Object.entries(params.filters)) {if (v !== undefined) query = query.eq(k, v)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      }
      if (params.sort)query = query.order(params.sort, { ascending: params.order === 'asc' })const from = params.page * params.pageSize;
      const to = from + params.pageSize - 1;
<<<<<<< HEAD
      const { data, error, count } = await query.range(from, to);
      if (error) return res.status(500).json({ error: error.message });
      if (params.format === 'csv') {
res.setHeader('Content-Type', 'text/csv');
        res.setHeader(
          'Content-Disposition'
          `attachment; filename="${type}.csv"`
        );
        return res.status(200).send(toCsv(data || []));
      }
      return res.status(200).json({ items: data |[], total: count |0 });
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        }
      }
      }
      return res && res.status(200).json({ items: data || [], total: count || 0 });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    } else {
      // fallback
      const all = (MOCK_DATA[type] |[]).slice();
      let filtered = all;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      if (params.search) {
        const s = params.search.toLowerCase();
filtered = filtered.filter(r =>
          JSON.stringify(r).toLowerCase().includes(s)
        );
      }
      if (params.filters) {
        for (const [k, v] of Object.entries(params.filters)) {
          filtered = filtered.filter(
            (r: any) => String((r as any)[k]) === String(v)
          );
        }
      }
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      if (params.sort) {
        filtered.sort((a: any, b: any) => {
      }
      // Check condition
if ( {) {
  $2
}
        filtered.sort ((array: any, boolean: any) => {
          const av = (a as any)[params.sort!];
          const bv = (b as any)[params.sort!];
<<<<<<< HEAD
return (
            (av > bv ? 1 : av < bv ? -1 : 0) * (params.order === 'asc' ? 1 : -1)
          );
        });
      }
      const total = filtered.length;
      const start = params.page * params.pageSize;
      const end = start + params.pageSize;
      const pageItems = filtered.slice(start, end);
      if (params.format === 'csv') {
res.setHeader('Content-Type', 'text/csv');
        res.setHeader(
          'Content-Disposition'
          `attachment; filename="${type}.csv"`
        );
        return res.status(200).send(toCsv(pageItems));
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          return (
            (av > bv ? 1 : av < bv ? -1 : 0) * (params.order === 'asc' ? 1 : -1));        });          return (av > bv ? 1 : av < bv ? -1 : 0) * (params.order === 'asc' ? 1 : -1);

        });
      }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      return res.status(200).json({ items: pageItems, total });
    }
  }

      id: string;
=======
      const { data, error, count } = await query.range(from, to)if (error) return res.status(500).json({ error: error.message })if (params.format === 'csv') {res.setHeader('Content-Type', 'text/csv')res.setHeader('Content-Disposition';
          `attachment; filename="${type}.csv"`;
        )return res.status(200).send(toCsv(data || []))}
      return res.status(200).json({ items: data |[], total: count |0 })} else {// fallback;
      const all = (MOCK_DATA[type] |[]).slice()let filtered  = all;if (params.search) {const s = params.search.toLowerCase()filtered = filtered.filter(r =>;
          JSON.stringify(r).toLowerCase().includes(s))}
      if (params.filters) {for (const [k, v] of Object.entries(params.filters)) {filtered = filtered.filter((r: any) => String((r as any)[k]) === String(v))}
      }if (params.sort) {filtered.sort((a: any, b: any) => {}
      // Check condition;
if ( {) {$2;
}
        filtered.sort ((array: any, boolean: any) => {const av = (a as any)[params.sort!];
          const bv  = (b as any)[params.sort!];return ((av > bv ? 1 : av < bv ? -1 : 0) * (params.order === 'asc' ? 1 : -1))})return (av > bv ? 1 : av < bv ? -1 : 0) * (params.order === 'asc' ? 1 : -1)})}return ((av > bv ? 1 : av < bv ? -1 : 0) * (params.order === 'asc' ? 1 : -1))})}
      const total = filtered.length;
      const start = params.page * params.pageSize;
      const end = start + params.pageSize;
      const pageItems = filtered.slice(start, end)if (params.format === 'csv') {res.setHeader('Content-Type', 'text/csv')res.setHeader('Content-Disposition';
          `attachment; filename="${type}.csv"`;
        )return res.status(200).send(toCsv(pageItems))return res.status(200).json({ items: pageItems, total })}
  }id: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      updates: Record<string, any>;
    }
    if (!id) return res.status(400).json({ error: 'Missing id' })return res.status(200).json({ items: pageItems, total })}
  }if (req.method === 'PATCH') {const { id, updates } = req.body as {id: string;
      updates: Record<string, any>;
<<<<<<< HEAD
<<<<<<< HEAD
    };
    if (!id) return res && res.status(400).json({ error: 'Missing id' });
    if (useSupabase) {
      const { data, error } = await client
        .from(type)
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select('*')
        .single();
      if (error) return res && res.status(500).json({ error: error && error.message });
      return res && res.status(200).json({ item: data });
    } else {
      const updated = {
        ...list[idx],
        ...updates,
        updated_at: new Date().toISOString(),
      };
      list[idx] = updated as any;
<<<<<<< HEAD
      return res.status(200).json({ item: updated });
origin/cursor/automate-test-improve-and-merge-code-2533
=======

      return res.status(200).json({ item: updated });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    }
  }
      return res.status(200).json({ item: updated });    }

    }

  }

  if (req.method === 'DELETE') {
    const id = (req.query.id as string) |'';
    if (!id) return res.status(400).json({ error: 'Missing id' });
    if (useSupabase) {
      const { error } = await client.from(type).delete().eq('id', id);
      if (error) return res.status(500).json({ error: error.message });
<<<<<<< HEAD
return res.status(200).json({ ok: true });
    } else {
      const list = MOCK_DATA[type] || [];
      const idx = list.findIndex((r: any) => r.id === id);
      if (idx === -1) return res.status(404).json({ error: 'Not found' });
      list.splice(idx, 1);
      return res.status(200).json({ ok: true });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}return res.status (200) .send (toCsv (data || []) );
}return res.status (200) .send (toCsv (pageItems) );
    }
  }
return res.status(405).json({ error: 'Method not allowed' });
}return res.status (200) .send (toCsv (data |[]) );
}return res.status (200) .send (toCsv (pageItems) );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    }if (!id) return res && res.status(400).json({ error: 'Missing id' })if (useSupabase) {const { data, error } = await client;
        .from(type).update({ ...updates, updated_at: new Date().toISOString() }).eq('id', id).select('*').single()if (error) return res && res.status(500).json({ error: error && error.message })return res && res.status(200).json({ item: data })} else {const updated = {...list[idx],...updates,updated_at: new Date().toISOString(),}list[idx] = updated as any;return res.status(200).json({ item: updated })}
  }
      return res.status(200).json({ item: updated })}}}if (req.method === 'DELETE') {const id = (req.query.id as string) |'';
    if (!id) return res.status(400).json({ error: 'Missing id' })if (useSupabase) {const { error } = await client.from(type).delete().eq('id', id)if (error) return res.status(500).json({ error: error.message })return res.status(200).json({ item: updated })}}}if (req.method === 'DELETE') {const id = (req.query.id as string) |'';
    if (!id) return res.status(400).json({ error: 'Missing id' })if (useSupabase) {const { error } = await client && client.from(type).delete().eq('id', id)if (error) return res && res.status(500).json({ error: error && error.message })return res && res.status(200).json({ ok: true })const list = MOCK_DATA[type] || [];
      const idx = list.findIndex((r: any) => r.id === id),if (idx === -1) return res.status(404).json({ error: 'Not found' })list.splice(idx, 1)return res.status(200).json({ ok: true })}
  }return res && res.status(405).json({ error: 'Method not allowed' })}return res && res.status (200) .send (toCsv (data || []) )}return res && res.status (200) .send (toCsv (pageItems) )return res.status(405).json({ error: 'Method not allowed' })}
      const start = params.page * params.page_size;
      const end = start + params.page_size;
      const page_items = filtered.slice (start, end)// Check condition;
if ( {) {$2;
}
        res.set_header ('Content - Type', 'text / csv')res.set_header ('Content - Disposition',`attachment; filename="${type}.csv"`)return res.status (200).send (to_csv (page_items))return res.status (200).json ({ items: page_items, total })}
  }
  // Check condition;
if ( {) {$2;
}
    const { id, updates } = req.body as {id: string;
      updates: Record < string, any>;
    }
    if (return res.status (400).json ({ error: 'Missing id' })) {$2;
}
    // Check condition;
if ( {) {$2;
}
      const { data, error } = await client;
        .from (type).update ({ ...updates, updated_at: new Date ().toISOString () }).eq ('id', id).select ('*').single ()if (return res.status (500).json ({ error: error.message })) {$2;
}
      return res.status (200).json ({ item: data })} else {const list = MOCK_DATA[type] || [];
      const idx = list.find_index ((r: any) => r.id === id),if (return res.status (404).json ({ error: 'Not found' })) {$2;
}
      const updated = {...list[idx],...updates,updated_at: new Date ().toISOString (),}
      list[idx] = updated as any;
      return res.status (200).json ({ item: updated })}      return res.status (200).json ({ item: updated })}
  }
  // Check condition;
if ( {) {$2;
}
    const id = (req.query.id as string) || '';
    if (return res.status (400).json ({ error: 'Missing id' })) {$2;
}
    // Check condition;
if ( {) {$2;
}
      const { error } = await client.from (type).delete ().eq ('id', id)if (return res.status (500).json ({ error: error.message })) {$2;
}
      return res.status (200).json ({ ok: true })const list = MOCK_DATA[type] || [];
      const idx = list.find_index ((r: any) => r.id === id)if (return res.status (404).json ({ error: 'Not found' })) {$2;
}
      list.splice (idx, 1)return res.status (200).json ({ ok: true })}
  }
  return res.status (405).json ({ error: 'Method not allowed' })}return res.status (200) .send (to_csv (data || []) )}return res.status (200) .send (to_csv (page_items) )return res.status (200).json ({ ok: true })}
  }
return res.status (405).json ({ error: 'Method not allowed' })}return res.status (200) .send (to_csv (data || []) )}return res.status (200) .send (to_csv (page_items) )return res.status(200).json({ items: pageItems, total })}
  }if (req.method === 'PATCH') {}return res.status(200).json({ ok: true })} else {const list = MOCK_DATA[type] || [];
      const idx = list.findIndex((r: any) => r.id === id)if (idx === -1) return res.status(404).json({ error: 'Not found' })list.splice(idx, 1)return res.status(200).json({ ok: true })}
  }return res.status(405).json({ error: 'Method not allowed' })}return res.status (200) .send (toCsv (data || []) )}return res.status (200) .send (toCsv (pageItems) )}
  }
<<<<<<< HEAD
return res.status(405).json({ error: 'Method not allowed' })}return res.status (200) .send (toCsv (data |[]) )}return res.status (200) .send (toCsv (pageItems) )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



      return res.status(200).json({ item: updated });    }

    }

  }

  if (req.method === 'DELETE') {
    const id = (req.query.id as string) |'';
    if (!id) return res.status(400).json({ error: 'Missing id' });
    if (useSupabase) {
      const { error } = await client && client.from(type).delete().eq('id', id);
      if (error) return res && res.status(500).json({ error: error && error.message });
      return res && res.status(200).json({ ok: true });
      const list = MOCK_DATA[type] || [];
      const idx = list.findIndex((r: any) => r.id === id),
      if (idx === -1) return res.status(404).json({ error: 'Not found' });
      list.splice(idx, 1);
      return res.status(200).json({ ok: true })
    }
  }

  return res && res.status(405).json({ error: 'Method not allowed' });

}return res && res.status (200) .send (toCsv (data || []) );
}return res && res.status (200) .send (toCsv (pageItems) );


  return res.status(405).json({ error: 'Method not allowed' });
}
      const start = params.page * params.page_size;
      const end = start + params.page_size;
      const page_items = filtered.slice (start, end);
      // Check condition
if ( {) {
  $2
}
        res.set_header ('Content - Type', 'text / csv');
        res.set_header (
          'Content - Disposition',
          `attachment; filename="${type}.csv"`);
        return res.status (200).send (to_csv (page_items));
      return res.status (200).json ({ items: page_items, total });
    }
  }
  // Check condition
if ( {) {
  $2
}
    const { id, updates } = req.body as {
      id: string;
      updates: Record < string, any>;
    }
    if (return res.status (400).json ({ error: 'Missing id' })) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      const { data, error } = await client;
        .from (type);
        .update ({ ...updates, updated_at: new Date ().toISOString () });
        .eq ('id', id);
        .select ('*');
        .single ();
      if (return res.status (500).json ({ error: error.message })) {
  $2
}
      return res.status (200).json ({ item: data });
    } else {
      const list = MOCK_DATA[type] || [];
      const idx = list.find_index ((r: any) => r.id === id),
      if (return res.status (404).json ({ error: 'Not found' })) {
  $2
}
      const updated = {
        ...list[idx],
        ...updates,
        updated_at: new Date ().toISOString (),
      }
      list[idx] = updated as any;
      return res.status (200).json ({ item: updated });    }      return res.status (200).json ({ item: updated });
    }
  }
  // Check condition
if ( {) {
  $2
}
    const id = (req.query.id as string) || '';
    if (return res.status (400).json ({ error: 'Missing id' })) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      const { error } = await client.from (type).delete ().eq ('id', id);
      if (return res.status (500).json ({ error: error.message })) {
  $2
}
      return res.status (200).json ({ ok: true });
      const list = MOCK_DATA[type] || [];
      const idx = list.find_index ((r: any) => r.id === id);
      if (return res.status (404).json ({ error: 'Not found' })) {
  $2
}
      list.splice (idx, 1);
      return res.status (200).json ({ ok: true });    }
  }
  return res.status (405).json ({ error: 'Method not allowed' });
;
}return res.status (200) .send (to_csv (data || []) );
}return res.status (200) .send (to_csv (page_items) );      return res.status (200).json ({ ok: true });
    }
  }
return res.status (405).json ({ error: 'Method not allowed' });
;
}return res.status (200) .send (to_csv (data || []) );
}return res.status (200) .send (to_csv (page_items) );
      return res.status(200).json({ items: pageItems, total })
    }
  }

  if (req.method === 'PATCH') {

}





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
return res.status(405).json({ error: 'Method not allowed' })}return res.status (200) .send (toCsv (data |[]) )}return res.status (200) .send (toCsv (pageItems) )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
