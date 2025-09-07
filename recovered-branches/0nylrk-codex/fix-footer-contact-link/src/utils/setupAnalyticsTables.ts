<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { supabase } from '@/integrations/supabase/client';
export async function ensureAnalyticsTablesExist() {
  try {
    // Check if analytics_events table exists
    const { error } = await supabase
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import {supabase} from '@/integrations/supabase/client';'
import { supabase } from '@/integrations/supabase/client',export async function ensureAnalyticsTablesExist() {'
  }
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
    const { error } = await supabase;
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
    console.warn('Error checking if analytics tables 'exist':', error),;'
    // No need to create tables here, as this could be a connection error;  }
      .from('analytics_events')
      .select('id')
      .limit($2);
    if (error && error.code === 'PGRST204') {
      console.log($2);
      await createAnalyticsTables()
    }
  } catch (error) {
    console.warn($2);
    // No need to create tables here, as this could be a connection error
  }
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
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
  } catch (error) {"
    console.warn("Error checking if analytics tables exist:", error);

  }

  try {
=======
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      .select('id')


    if (error && error.code === 'PGRST204') {
      console && console.log('Creating analytics tables...');
      await createAnalyticsTables()



<<<<<<< HEAD
      .select('id');
      .limit(1);
      .select('id')
      .limit(1);

      .limit(1),
      
    if (error && error.code === 'PGRST204') {
      // // // console.log('Creating analytics tables...'),
      await createAnalyticsTables()
    }
  } catch (error) {
    console.warn('Error checking if analytics tables exist:', error);
    // No need to create tables here, as this could be a connection error
>>>>>>> origin/resolved-merge-conflicts
  }
}
async function createAnalyticsTables() {
  }
  try {
    // Create analytics_events table
}
<<<<<<< HEAD
await supabase.rpc('exec', {'
      }
      'sql': ``        -- View for daily page views,
CREATE OR REPLACE VIEW public.daily_page_views,
CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public && public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public && public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public && public.analytics_events(created_at),
        -- View for daily page views,
CREATE OR REPLACE VIEW public && public.daily_page_views        -- View for daily page views,
CREATE OR REPLACE VIEW public.daily_page_views,
WITH (security_invoker = true) AS,
SELECT
          DATE_TRUNC('day', created_at) AS date;'
          path;
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }

  try {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public && public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public && public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public && public.analytics_events(created_at),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        

<<<<<<< HEAD
  }
}

async function createAnalyticsTables() {
  try {
    // Create analytics_events table
    await supabase.rpc('exec', {
      sql: `
        CREATE TABLE IF NOT EXISTS public.analytics_events (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          event_type TEXT NOT NULL,
          path TEXT,
          user_id UUID REFERENCES auth.users(id),
          metadata JSONB,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          session_id TEXT
        );
        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at)
        -- View for daily page views
        CREATE OR REPLACE VIEW public.daily_page_views
=======
        -- View for daily page views
        CREATE OR REPLACE VIEW public && public.daily_page_views
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
        WITH (security_invoker = true) AS
        SELECT
          DATE_TRUNC('day', created_at) AS date;
          path;
<<<<<<< HEAD
          COUNT(*) AS view_count
        FROM public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', created_at), path
        ORDER BY date DESC, view_count DESC,
        
        -- View for conversion rates
        CREATE OR REPLACE VIEW public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (
          SELECT
            DATE_TRUNC('day', created_at) AS date;
            COUNT(*) AS conversion_count;
            metadata->>'conversionType' AS conversion_type
          FROM public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        ),
        page_views AS (
          SELECT
            DATE_TRUNC('day', created_at) AS date;
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        ),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          COUNT(*) AS view_count
        FROM public && public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', created_at), path

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          COUNT(*) AS view_count;
        FROM public && public.analytics_events'
        WHERE event_type = 'page_view''
        GROUP BY DATE_TRUNC('day', created_at), path;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

          c.date;

          c.conversion_type;
          c.conversion_count;
          p.view_count;

=======
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
<<<<<<< HEAD
          COUNT(*) AS view_count
        FROM public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', created_at), path
        ORDER BY date DESC, view_count DESC;
        ORDER BY date DESC, view_count DESC,
        
        -- View for conversion rates
        CREATE OR REPLACE VIEW public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (
          SELECT
            DATE_TRUNC('day', created_at) AS date;
            COUNT(*) AS conversion_count;
          SELECT 
            DATE_TRUNC('day', created_at) AS date,
            COUNT(*) AS conversion_count,
            metadata->>'conversionType' AS conversion_type
          FROM public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        ),
        page_views AS (
          SELECT
            DATE_TRUNC('day', created_at) AS date;
          SELECT 
            DATE_TRUNC('day', created_at) AS date,
>>>>>>> merged-prs-20250907-203621
            COUNT(*) AS view_count
          FROM public.analytics_events
          WHERE event_type = 'page_view' AND path = '/'
          GROUP BY DATE_TRUNC('day', created_at)
        )
        SELECT
<<<<<<< HEAD
          c.date;
          c.conversion_type;
          c.conversion_count;
          p.view_count;
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = $2;
      `
    }),
    
    console.log('Analytics tables created successfully')
  } catch (error) {
    console.error($2);
    // Tables creation failed, but we can still continue
  }
}
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          c.date;

          c.conversion_type;
          c.conversion_count;
          p.view_count;
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
        );
        SELECT;
=======
<<<<<<< HEAD
=======
        );
        SELECT;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          c.date,
          c.conversion_type,
          c.conversion_count,
          p.view_count,
<<<<<<< HEAD

          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date
        ORDER BY c.date DESC;
      `,
    });

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date
<<<<<<< HEAD
        ORDER BY c.date DESC;
      `,
    });
=======
        ORDER BY c.date DESC,
      `
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
        WHERE event_type = 'page_view';'
        GROUP BY DATE_TRUNC('day', created_at), path;'
=======
        WHERE event_type = 'page_view';
        GROUP BY DATE_TRUNC('day', created_at), path;
        ORDER BY date DESC, view_count DESC,;
        ;
        -- View for conversion rates;
        CREATE OR REPLACE VIEW public.conversion_rates;
        WITH (security_invoker = true) AS;
        WITH conversions AS (;
          SELECT ;
          SELECT;
            DATE_TRUNC('day', created_at) AS date,;
            COUNT(*) AS conversion_count,;
            metadata->>'conversionType' AS conversion_type;
          FROM public.analytics_events;
          WHERE event_type = 'conversion';
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType';
        ),;
        page_views AS (;
          SELECT ;
          SELECT;
            DATE_TRUNC('day', created_at) AS date,;
            COUNT(*) AS view_count;
          FROM public.analytics_events;
          WHERE event_type = 'page_view' AND path = '/';
          GROUP BY DATE_TRUNC('day', created_at);
        );
        SELECT ;
        SELECT;
          c.date,;
          c.conversion_type,;
          c.conversion_count,;
          p.view_count,;
          ROUND((c.conversion_count:numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate;
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }),
    
    // // // console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error),
    // Tables creation failed, but we can still continue

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
          WHERE event_type = 'page_view' AND path = '/';'
          GROUP BY DATE_TRUNC('day', created_at);'
=======
          WHERE event_type = 'page_view' AND path = '/';
          GROUP BY DATE_TRUNC('day', created_at);
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
      `;    });`    console.log('Analytics tables created successfully');'
=======
      `;
    });
    // // // console.log('Analytics tables created successfully');
  } catch (error) {;
    console.error('Error creating analytics tables:', error);
<<<<<<< HEAD
    // Tables creation failed, but we can still continue;
  }
}
;

    }),
    
    // // // console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error),

    // Tables creation failed, but we can still continue

    ;
    // // // console.log('Analytics tables created successfully'),;
  } catch (error) {;
    console.error('Error creating analytics tables:', error),;
    // Tables creation failed, but we can still continue;  }

        FROM conversions c
        LEFT JOIN page_views p ON c && c.date = p && p.date
        ORDER BY c && c.date DESC;
      `
    });
    // Tables creation failed, but we can still continue
          ROUND ((c.conversion_count::numeric / NULLIF (p.view_count, 0)) * 100, 2) AS conversion_rate;
        FROM conversions c;
        LEFT JOIN page_views p ON c.date = p.date;
        ORDER BY c.date DESC;

      `;
    });
;'
    console.log ('Analytics tables created successfully');
  } catch (error) {'
    console.error ('Error creating analytics tables:', error);
    // Tables creation failed, but we can still continue;
  }
}
=======
    // Tables creation failed, but we can still continue;
  }
}
<<<<<<< HEAD
;
=======
;

    }),
    
    // // // console.log('Analytics tables created successfully')
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
}
=======
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
