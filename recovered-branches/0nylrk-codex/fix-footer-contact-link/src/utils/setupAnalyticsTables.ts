

import { supabase } from '@/integrations/supabase/client';

export async function ensureAnalyticsTablesExist() {
  try {
    // Check if analytics_events table exists
    const { error } = await supabase
      .from('analytics_events')
      .select('id')
      .limit(1);

    if (error && error.code;

    // Tables creation failed, but we can still continue
  }
}
;