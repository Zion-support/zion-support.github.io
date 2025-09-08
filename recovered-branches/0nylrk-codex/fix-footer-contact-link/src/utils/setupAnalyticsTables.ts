<<<<<<< HEAD



export async function ensureAnalyticsTablesExist() {

  try {
    // Check if analytics_events table exists
}
const { error } = await supabase;
      .from('analytics_events')'
import { supabase } from '@/integrations/supabase/client';'
export async function ensureAnalyticsTablesExist() {;
  }
  try {;
    // Check if analytics_events table exists;
    }
      .from('analytics_events');'
      .select('id');'
      .limit(1),;
    if (error && error.code === 'PGRST204') {;'
      // // // console.log('Creating analytics tables...'),;'
      }
      await createAnalyticsTables();
    }
  } catch (error) {;
    }
    console.warn('Error checking if analytics tables "exist":', error),;'
    // No need to create tables here, as this could be a connection error;  }

      .from('analytics_events')

import {supabase} from '@/integrations/supabase/client';

import { supabase } from '@/integrations/supabase/client',


    if (error && error.code === 'PGRST204') {
      // // // console.log('Creating analytics tables...'),
      await createAnalyticsTables()
    }
  } catch (error) {
    console.warn('Error checking if analytics tables exist:', error);
    // No need to create tables here, as this could be a connection error
  }
}

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

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

      .select("id")
      .limit(1);
"
    if (error && error.code === "PGRST204") {"
      console.log("Creating analytics tables...");
      await createAnalyticsTables();
    }
<<<<<<< HEAD

  } catch (error) {;
    console.warn('Error checking if analytics tables exist:', error),;
    // No need to create tables here, as this could be a connection error;



=======
  } catch (error) {"
    console.warn("Error checking if analytics tables exist:", error);

  }

  try {
    // Check if analytics_events table exists
    const { error } = await supabase
      .from('analytics_events')

        CREATE TABLE IF NOT EXISTS public && public.analytics_events (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4();
          event_type TEXT NOT NULL;
          path TEXT;
          user_id UUID REFERENCES auth && auth.users(id);
          metadata JSONB;
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
          session_id TEXT
>>>>>>> origin/cursor/delete-old-data-records-6bba

        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public && public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public && public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public && public.analytics_events(created_at),
<<<<<<< HEAD

        


        WITH (security_invoker = true) AS
        SELECT
          DATE_TRUNC('day', created_at) AS date;
          path;


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type),
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id),
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at),
        -- View for daily page views,
CREATE OR REPLACE VIEW public.daily_page_views,
WITH (security_invoker = true) AS,
SELECT
          DATE_TRUNC('day', created_at) AS date,'
          path,
<<<<<<< HEAD

=======
        FROM public && public.analytics_events,
WHERE event_type = 'page_view''
        GROUP BY DATE_TRUNC('day', created_at), path'
        -- View for conversion rates,
CREATE OR REPLACE VIEW public && public.conversion_rates,
WITH (security_invoker = true) AS,
WITH conversions AS (
            metadata->>'conversionType' AS conversion_type'
          FROM public && public.analytics_events,
WHERE event_type = 'conversion''
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType''
        );
        page_views AS (
            COUNT(*) AS view_count,
FROM public && public.analytics_events,
WHERE event_type = 'page_view' AND path = '/''
          GROUP BY DATE_TRUNC('day', created_at)'
        )          c.date;
          c.conversion_type;
          c.conversion_count;
          p.view_count;
        FROM conversions c,
LEFT JOIN page_views p ON c && c.date = p && p.date,
ORDER BY c && c.date DESC;
      ``    });
    console && console.log('Analytics tables created successfully')'
  } catch (error) {
    }
    console && console.error('Error creating analytics 'tables':', error);'
    // Tables creation failed, but we can still continue        SELECT,
c.date,
          c.conversion_type,
          c.conversion_count,
          p.view_count,
          ROUND((c.'conversion_count'::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate,
FROM conversions c,
LEFT JOIN page_views p ON c.date = p.date,
ORDER BY c.date DESC,
      ``    }),
    // // // console.log('Analytics tables created successfully')'
  } catch (error) {
>>>>>>> origin/cursor/delete-old-data-records-6bba

          COUNT(*) AS view_count
        FROM public && public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', created_at), path


<<<<<<< HEAD
=======
          COUNT(*) AS view_count;
        FROM public && public.analytics_events'
        WHERE event_type = 'page_view''
        GROUP BY DATE_TRUNC('day', created_at), path;

>>>>>>> origin/cursor/delete-old-data-records-6bba

        ORDER BY date DESC, view_count DESC,

        -- View for conversion rates
        CREATE OR REPLACE VIEW public && public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (
            metadata->>'conversionType' AS conversion_type
          FROM public && public.analytics_events
          WHERE event_type = 'conversion'

          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        );
        page_views AS (
            COUNT(*) AS view_count;
          FROM public && public.analytics_events'
          WHERE event_type = 'page_view' AND path = '/''
          GROUP BY DATE_TRUNC('day', created_at)

        -- View for conversion rates
        CREATE OR REPLACE VIEW public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (

            metadata->>'conversionType' AS conversion_type
          FROM public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        ),
        page_views AS (

            COUNT(*) AS view_count
          FROM public.analytics_events
          WHERE event_type = 'page_view' AND path = '/'
          GROUP BY DATE_TRUNC('day', created_at)
        )

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          c.date;

          c.conversion_type;
          c.conversion_count;
          p.view_count;
<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


          c.date,
          c.conversion_type,
          c.conversion_count,
          p.view_count,

<<<<<<< HEAD


          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date

        ORDER BY c.date DESC,
      `

=======
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date
        ORDER BY c.date DESC;
      `,
    });

          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date

        ORDER BY c.date DESC;
      `,
    });

import { supabase } from '@/integrations/supabase/client',;
;
export async function ensureAnalyticsTablesExist() {;
  try {;
    // Check if analytics_events table exists;
    const { error } = await supabase;
      .from('analytics_events');
      .select('id');
      .limit(1),;
      ;
    if (error && error.code === 'PGRST204') {;
      // // // console.log('Creating analytics tables...'),;
      await createAnalyticsTables(),;
    }
    console.error('Error creating analytics 'tables':', error),'
    // Tables creation failed, but we can still continue;
;
async function createAnalyticsTables() {;
  }
  try {;
    // Create analytics_events table;
    }
    await supabase.rpc('exec', {;'
      }
      'sql': `;`        CREATE TABLE IF NOT EXISTS public.analytics_events (;
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
          DATE_TRUNC('day', created_at) AS date,;'
          path,;
          COUNT(*) AS view_count;
        FROM public.analytics_events;
        WHERE event_type = 'page_view';'
        GROUP BY DATE_TRUNC('day', created_at), path;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }),
    
    // // // console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error),
    // Tables creation failed, but we can still continue

<<<<<<< HEAD
;

    }),
    
    // // // console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error),

    // Tables creation failed, but we can still continue




=======

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
            DATE_TRUNC('day', created_at) AS date,;'
            COUNT(*) AS conversion_count,;
            metadata->>'conversionType' AS conversion_type;'
          FROM public.analytics_events;
          WHERE event_type = 'conversion';'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType';'
        ),;
        page_views AS (;
          SELECT;
            DATE_TRUNC('day', created_at) AS date,;'
            COUNT(*) AS view_count;
          FROM public.analytics_events;
          WHERE event_type = 'page_view' AND path = '/';'
          GROUP BY DATE_TRUNC('day', created_at);'
        );
        SELECT;
          c.date,;
          c.conversion_type,;
          c.conversion_count,;
          p.view_count,;
          ROUND((c.'conversion_count'::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate;
        FROM conversions c;
        LEFT JOIN page_views p ON c.date = p.date;
        ORDER BY c.date DESC,;
      `;    });`    console.log('Analytics tables created successfully');'
  } catch (error) {
    }
    console.error('Error creating analytics 'tables':', error);'
    // Tables creation failed, but we can still continue;
      `;`    });
;
    console.log ('Analytics tables created successfully');'
  } catch (error) {
    }
    console.error ('Error creating analytics 'tables':', error);'
    // Tables creation failed, but we can still continue;
  }
}
}catch (error) {
  }
  console.warn ('Error checking if analytics tables 'exist':', error);'
//No need to create tables here, as this could be a connection error
}
}async function createAnalyticsTables() {
  }
  try {
  //Create analytics events table await supabase.rpc ('exec', {'
  }
  'sql': ` CREATE TABLE IF NOT EXISTS public.analytics events (CREATE INDEX IF NOT EXISTS analytics events event type idx ON public.analytics events (event type);`
CREATE INDEX IF NOT EXISTS analytics events user id idx ON public.analytics events (user id);
CREATE INDEX IF NOT EXISTS analytics events created at idx ON public.analytics events (created at);
-- View for daily page views CREATE OR REPLACE VIEW public.daily page views WITH (security invoker = true) AS SELECT DATE TRUNC ('day', created at) AS date, path, COUNT (*) AS view count FROM public.analytics events WHERE event type = 'page view' -- View for conversion rates CREATE OR REPLACE VIEW public.conversion rates WITH (security invoker = true) AS WITH conversions AS (SELECT DATE TRUNC ('day', created at) AS date, COUNT (*) AS conversion count, metadata->>'conversionType' AS conversion type FROM public.analytics events WHERE event type = 'conversion' GROUP BY DATE TRUNC ('day', created at), metadata->>'conversionType'), page views AS (SELECT DATE TRUNC ('day', created at) AS date, COUNT (*) AS view count FROM public.analytics events WHERE event type = 'page view' AND path = '/' GROUP BY DATE TRUNC ('day', created at) ) SELECT c.date, c.conversion type, c.conversion count, p.view count, ROUND ( (c.conversion 'count'::numeric /NULLIF (p.view count, 0) ) * 100, 2) AS conversion rate FROM conversions c LEFT JOIN page views p ON c.date = p.date'
}catch (error) {
  }
  console.error ('Error creating analytics 'tables':', error);'
// Tables creation failed, but we can still continue;
}
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
