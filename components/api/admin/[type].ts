import type { NextApiRequest, NextApiResponse } from 'next';

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

    sort;
    order: (order as any) || 'desc';
    page: page ? Number(page) : 0;
    pageSize: pageSize ? Number(pageSize) : 20;

    filters;

    format: (format as any) || undefined}
}

function toCsv(rows: any[]): string {
  if (!rows.length) return '';

  const headers = null;
      return res.status(200).json({ ok: true })

    }
  }

return res.status(405).json({ error: 'Method not allowed' });

}return res.status (200) .send (toCsv (data || []) );
}return res.status (200) .send (toCsv (pageItems) );
}
