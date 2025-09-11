<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client',


<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client';
import { supabase } from '@/integrations/supabase/client',
=======

import { supabase } from '@/integrations/supabase/client',

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {supabase} from '@/integrations/supabase/client';
import { supabase } from '@/integrations/supabase/client',
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


import { supabase } from '@/integrations/supabase/client',

=======
import {supabase} from '@/integrations/supabase/client';
import { supabase } from '@/integrations/supabase/client',

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export async function ensureAnalyticsTablesExist() {
  try {
    // Check if analytics_events table exists
    const { error } = await supabase
      .from('analytics_events')
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      .select('id')


    if (error && error.code === 'PGRST204') {
      console && console.log('Creating analytics tables...');
      await createAnalyticsTables()



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .select('id');
      .limit(1);
      .select('id')
      .limit(1);

      .limit(1),
      
    if (error && error.code === 'PGRST204') {
<<<<<<< HEAD
      // // // console.log('Creating analytics tables...'),
      await createAnalyticsTables()
    }
  } catch (error) {
    console.warn('Error checking if analytics tables exist:', error);
    // No need to create tables here, as this could be a connection error
  }
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console && console.log('Creating analytics tables...');
      await createAnalyticsTables()



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
}

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }
}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public && public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public && public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public && public.analytics_events(created_at),
        

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        );
        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at)
        -- View for daily page views
<<<<<<< HEAD
        CREATE OR REPLACE VIEW public.daily_page_views
=======
        -- View for daily page views
        CREATE OR REPLACE VIEW public && public.daily_page_views
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        CREATE OR REPLACE VIEW public && public.daily_page_views
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        WITH (security_invoker = true) AS
        SELECT
          DATE_TRUNC('day', created_at) AS date;
          path;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          COUNT(*) AS view_count
        FROM public && public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', created_at), path
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        ORDER BY date DESC, view_count DESC,
        


=======
        ORDER BY date DESC, view_count DESC;
        ORDER BY date DESC, view_count DESC,
        
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        -- View for conversion rates
        CREATE OR REPLACE VIEW public && public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (
<<<<<<< HEAD


          SELECT 
            DATE_TRUNC('day', created_at) AS date,
            COUNT(*) AS conversion_count,


            metadata->>'conversionType' AS conversion_type
          FROM public && public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        );
        page_views AS (


          SELECT 
            DATE_TRUNC('day', created_at) AS date,


            COUNT(*) AS view_count
          FROM public && public.analytics_events
          WHERE event_type = 'page_view' AND path = '/'
          GROUP BY DATE_TRUNC('day', created_at)
        )
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          SELECT
            DATE_TRUNC('day', created_at) AS date;
            COUNT(*) AS conversion_count;
          SELECT 
            DATE_TRUNC('day', created_at) AS date,
            COUNT(*) AS conversion_count,
            metadata->>'conversionType' AS conversion_type
<<<<<<< HEAD
          FROM public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        ),
=======
          FROM public && public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        page_views AS (
          SELECT
            DATE_TRUNC('day', created_at) AS date;
          SELECT 
            DATE_TRUNC('day', created_at) AS date,
            COUNT(*) AS view_count
<<<<<<< HEAD
          FROM public.analytics_events
=======
          FROM public && public.analytics_events
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          WHERE event_type = 'page_view' AND path = '/'
          GROUP BY DATE_TRUNC('day', created_at)
        )
        SELECT
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          c.date;
          c.conversion_type;
          c.conversion_count;
          p.view_count;
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        SELECT 
          c.date,
          c.conversion_type,
          c.conversion_count,
          p.view_count,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date
        ORDER BY c.date DESC,
      `
<<<<<<< HEAD
<<<<<<< HEAD

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
  } catch (error) {;
    console.warn('Error checking if analytics tables exist:', error),;
    // No need to create tables here, as this could be a connection error;  }
    if (error && error.code === 'PGRST204') {_await createAnalyticsTables();}
  } catch (error) {_// No need to create tables here, _as this could be a connection error}
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    });
    console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error);

    // Tables creation failed, but we can still continue
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }),
    
    // // // console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error),
    // Tables creation failed, but we can still continue
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
;
async function createAnalyticsTables() {;
  try {;
    // Create analytics_events table;
    await supabase.rpc('exec', {;
      sql:`;
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
;
        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type),;
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id),;
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at),;
        ;
        -- View for daily page views;
        CREATE OR REPLACE VIEW public.daily_page_views;
        WITH (security_invoker = true) AS;
        SELECT ;
          DATE_TRUNC('day', created_at) AS date,;
          path,;
          COUNT(*) AS view_count;
        FROM public.analytics_events;
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
    }),
    
    // // // console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error),
    // Tables creation failed, but we can still continue

    }),;
    ;
    // // // console.log('Analytics tables created successfully'),;
  } catch (error) {;
    console.error('Error creating analytics tables:', error),;
    // Tables creation failed, but we can still continue;  }
        ORDER BY c.date DESC;
      `});
    
    
  } catch (error) {_// Tables creation failed, _but we can still continue}
 //Check if analytics events table exists const {
  error 
}= await supabase .from ('analytics events') .select ('id') .limit (1);
}
}catch (error) {
  console.warn ('Error checking if analytics tables exist:', error);
//No need to create tables here, as this could be a connection error 
}
}async function createAnalyticsTables () {
  try {
  //Create analytics events table await supabase.rpc ('exec', {
  sql: ` CREATE TABLE IF NOT EXISTS public.analytics events (CREATE INDEX IF NOT EXISTS analytics events event type idx ON public.analytics events (event type);
CREATE INDEX IF NOT EXISTS analytics events user id idx ON public.analytics events (user id);
CREATE INDEX IF NOT EXISTS analytics events created at idx ON public.analytics events (created at);
-- View for daily page views CREATE OR REPLACE VIEW public.daily page views WITH (security invoker = true) AS SELECT DATE TRUNC ('day', created at) AS date, path, COUNT (*) AS view count FROM public.analytics events WHERE event type = 'page view' -- View for conversion rates CREATE OR REPLACE VIEW public.conversion rates WITH (security invoker = true) AS WITH conversions AS (SELECT DATE TRUNC ('day', created at) AS date, COUNT (*) AS conversion count, metadata->>'conversionType' AS conversion type FROM public.analytics events WHERE event type = 'conversion' GROUP BY DATE TRUNC ('day', created at), metadata->>'conversionType'), page views AS (SELECT DATE TRUNC ('day', created at) AS date, COUNT (*) AS view count FROM public.analytics events WHERE event type = 'page view' AND path = '/' GROUP BY DATE TRUNC ('day', created at) ) SELECT c.date, c.conversion type, c.conversion count, p.view count, ROUND ( (c.conversion count::numeric /NULLIF (p.view count, 0) ) * 100, 2) AS conversion rate FROM conversions c LEFT JOIN page views p ON c.date = p.date 
}catch (error) {
  console.error ('Error creating analytics tables:', error);
// Tables creation failed, but we can still continue 
}
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
