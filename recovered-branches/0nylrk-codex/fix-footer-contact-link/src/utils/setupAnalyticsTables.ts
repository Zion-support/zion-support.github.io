

<<<<<<< HEAD
import {supabase} from '@/integrations/supabase/client';

import { supabase } from '@/integrations/supabase/client',

=======
import { supabase } from '@/integrations/supabase/client',

=======
import {supabase} from '@/integrations/supabase/client';
=======
import { supabase } from '@/integrations/supabase/client',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export async function ensureAnalyticsTablesExist() {
  try {
    // Check if analytics_events table exists
    const { error } = await supabase
      .from('analytics_events')

<<<<<<< HEAD
=======

      .select('id')


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (error && error.code === 'PGRST204') {
      console && console.log('Creating analytics tables...');
      await createAnalyticsTables()

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { supabase } from '@/integrations/supabase/client',;
export async function ensureAnalyticsTablesExist() {;
  try {;
    // Check if analytics_events table exists;
    const { error } = await supabase;
      .from('analytics_events');
      .select('id');
      .limit(1),;
    if (error && error.code === 'PGRST204') {;
      // // // console.log('Creating analytics tables...'),;
      await createAnalyticsTables();
    }
  } catch (error) {;
    console.warn('Error checking if analytics tables exist:', error),;
    // No need to create tables here, as this could be a connection error;

<<<<<<< HEAD
  }
}

=======


  }
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
async function createAnalyticsTables() {
  try {
    // Create analytics_events table
    await supabase && supabase.rpc('exec', {
      sql: `
        CREATE TABLE IF NOT EXISTS public && public.analytics_events (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4();
          event_type TEXT NOT NULL;
          path TEXT;
          user_id UUID REFERENCES auth && auth.users(id);
          metadata JSONB;
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
          session_id TEXT
<<<<<<< HEAD

=======


        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public && public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public && public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public && public.analytics_events(created_at),
        

        -- View for daily page views
        CREATE OR REPLACE VIEW public && public.daily_page_views
        WITH (security_invoker = true) AS
        SELECT
          DATE_TRUNC('day', created_at) AS date;
          path;
=======

        ),

        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type),
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id),
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at),
        
        -- View for daily page views
        CREATE OR REPLACE VIEW public.daily_page_views
        WITH (security_invoker = true) AS
        SELECT 
          DATE_TRUNC('day', created_at) AS date,
          path,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          COUNT(*) AS view_count
        FROM public && public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', created_at), path

<<<<<<< HEAD
=======

        ORDER BY date DESC, view_count DESC,
        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        -- View for conversion rates
        CREATE OR REPLACE VIEW public && public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (

<<<<<<< HEAD
=======

          SELECT 
            DATE_TRUNC('day', created_at) AS date,
            COUNT(*) AS conversion_count,


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            metadata->>'conversionType' AS conversion_type
          FROM public && public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        );
        page_views AS (

<<<<<<< HEAD
=======

          SELECT 
            DATE_TRUNC('day', created_at) AS date,


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            COUNT(*) AS view_count
          FROM public && public.analytics_events
          WHERE event_type = 'page_view' AND path = '/'
          GROUP BY DATE_TRUNC('day', created_at)
        )

<<<<<<< HEAD
=======
import {supabase} from '@/integrations / supabase / client';
export async /**
 * ensureAnalyticsTablesExist - Function description
 */
function ensureAnalyticsTablesExist() {
  try {
    // Check if analytics_events table exists;
    const { error } = await supabase;
      .from ('analytics_events');
      .select ('id');
      .limit (1);
;
    // Check condition
if ( {) {
  $2
}
      console.log ('Creating analytics tables...');
      await createAnalyticsTables ();
    }
  } catch (error) {
    console.warn ('Error checking if analytics tables exist:', error);
    // No need to create tables here, as this could be a connection error;
  }
}
async /**
 * createAnalyticsTables - Function description
 */
function createAnalyticsTables() {
  try {
    // Create analytics_events table;
    await supabase.rpc ('exec', {
      sql: `;
        CREATE TABLE IF NOT EXISTS public.analytics_events (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4 ();
          event_type TEXT NOT NULL;
          path TEXT;
          user_id UUID REFERENCES auth.users (id);
          metadata JSONB;
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW ();
          session_id TEXT);
;
        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events (event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events (user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events (created_at),
        -- View for daily page views;
        CREATE OR REPLACE VIEW public.daily_page_views;
        WITH (security_invoker = true) AS;
        SELECT;
          DATE_TRUNC ('day', created_at) AS date;
          path;
          COUNT (*) AS view_count;
        FROM public.analytics_events;
        WHERE event_type = 'page_view';
        GROUP BY DATE_TRUNC ('day', created_at), path;
        ORDER BY date DESC, view_count DESC;
;
        -- View for conversion rates;
        CREATE OR REPLACE VIEW public.conversion_rates;
        WITH (security_invoker = true) AS;
        WITH conversions AS (
          SELECT;
            DATE_TRUNC ('day', created_at) AS date;
            COUNT (*) AS conversion_count;
            metadata->>'conversion_type' AS conversion_type;
          FROM public.analytics_events;
          WHERE event_type = 'conversion';
          GROUP BY DATE_TRUNC ('day', created_at), metadata->>'conversion_type');
        page_views AS (
          SELECT;
            DATE_TRUNC ('day', created_at) AS date;
            COUNT (*) AS view_count;
          FROM public.analytics_events;
          WHERE event_type = 'page_view' AND path = '/';
          GROUP BY DATE_TRUNC ('day', created_at));
        SELECT;

          c.date;
          c.conversion_type;
          c.conversion_count;
          p.view_count;

        SELECT 
          c && c.date;
          c && c.conversion_type;
          c && c.conversion_count;
          p && p.view_count;
          ROUND((c && c.conversion_count::numeric / NULLIF(p && p.view_count, 0)) * 100, 2) AS conversion_rate

        FROM conversions c
        LEFT JOIN page_views p ON c && c.date = p && p.date
        ORDER BY c && c.date DESC;
      `
    });

    
    console && console.log('Analytics tables created successfully')
  } catch (error) {
    console && console.error('Error creating analytics tables:', error);

    // Tables creation failed, but we can still continue
=======
          ROUND ((c.conversion_count::numeric / NULLIF (p.view_count, 0)) * 100, 2) AS conversion_rate;
        FROM conversions c;
        LEFT JOIN page_views p ON c.date = p.date;
        ORDER BY c.date DESC;
      `;
    });
;
    console.log ('Analytics tables created successfully');
  } catch (error) {
    console.error ('Error creating analytics tables:', error);
    // Tables creation failed, but we can still continue;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
=======

        SELECT 
          c.date,
          c.conversion_type,
          c.conversion_count,
          p.view_count,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date
        ORDER BY c.date DESC,
      `

<<<<<<< HEAD
;
async function createAnalyticsTables() {;
  try {;
    // Create analytics_events table;
    await supabase.rpc('exec', {;
      sql: `;
        CREATE TABLE IF NOT EXISTS public.analytics_events (;
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),;
          event_type TEXT NOT NULL,;
          path TEXT,;
          user_id UUID REFERENCES auth.users(id),;
          metadata JSONB,;
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),;
          session_id TEXT;
        ),;
        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type),;
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id),;
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at),;
        -- View for daily page views;
        CREATE OR REPLACE VIEW public.daily_page_views;
        WITH (security_invoker = true) AS;
        SELECT;
          DATE_TRUNC('day', created_at) AS date,;
          path,;
          COUNT(*) AS view_count;
        FROM public.analytics_events;
        WHERE event_type = 'page_view';
        GROUP BY DATE_TRUNC('day', created_at), path;
        ORDER BY date DESC, view_count DESC,;
        -- View for conversion rates;
        CREATE OR REPLACE VIEW public.conversion_rates;
        WITH (security_invoker = true) AS;
        WITH conversions AS (;
          SELECT;
            DATE_TRUNC('day', created_at) AS date,;
            COUNT(*) AS conversion_count,;
            metadata->>'conversionType' AS conversion_type;
          FROM public.analytics_events;
          WHERE event_type = 'conversion';
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType';
        ),;
        page_views AS (;
          SELECT;
            DATE_TRUNC('day', created_at) AS date,;
            COUNT(*) AS view_count;
          FROM public.analytics_events;
          WHERE event_type = 'page_view' AND path = '/';
          GROUP BY DATE_TRUNC('day', created_at);
        );
        SELECT;
          c.date,;
          c.conversion_type,;
          c.conversion_count,;
          p.view_count,;
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate;
        FROM conversions c;
        LEFT JOIN page_views p ON c.date = p.date;
        ORDER BY c.date DESC,;
      `;
    });
    // // // console.log('Analytics tables created successfully');
  } catch (error) {;
    console.error('Error creating analytics tables:', error);
    // Tables creation failed, but we can still continue;
  }
}
;

=======
    }),
    
    // // // console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error),
    // Tables creation failed, but we can still continue

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
