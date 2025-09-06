<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts


<<<<<<< HEAD
import {supabase} from '@/integrations/supabase/client';

import { supabase } from '@/integrations/supabase/client',

=======
import { supabase } from '@/integrations/supabase/client',

=======

<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client';
=======
import { supabase } from '@/integrations/supabase/client',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {supabase} from '@/integrations/supabase/client';
=======
import { supabase } from '@/integrations/supabase/client',
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export async function ensureAnalyticsTablesExist() {
  try {
    // Check if analytics_events table exists
    const { error } = await supabase
      .from('analytics_events')
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
      .select('id');
      .limit(1);
=======
      .select('id')
<<<<<<< HEAD
      .limit(1);

=======
      .limit(1),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (error && error.code === 'PGRST204') {
      // // // console.log('Creating analytics tables...'),
      await createAnalyticsTables()
<<<<<<< HEAD
    }
  } catch (error) {
    console.warn('Error checking if analytics tables exist:', error);
    // No need to create tables here, as this could be a connection error
<<<<<<< HEAD
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
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
        

========
<<<<<<< HEAD
CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public && public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public && public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public && public.analytics_events(created_at),
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
        -- View for daily page views
        CREATE OR REPLACE VIEW public && public.daily_page_views
=======
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
<<<<<<< HEAD
        );
        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at)
        -- View for daily page views
        CREATE OR REPLACE VIEW public.daily_page_views
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        WITH (security_invoker = true) AS
        SELECT
          DATE_TRUNC('day', created_at) AS date;
          path;
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          COUNT(*) AS view_count
        FROM public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', created_at), path
<<<<<<< HEAD
        ORDER BY date DESC, view_count DESC;
=======
        ORDER BY date DESC, view_count DESC,
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        -- View for conversion rates
        CREATE OR REPLACE VIEW public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (
<<<<<<< HEAD
          SELECT
            DATE_TRUNC('day', created_at) AS date;
            COUNT(*) AS conversion_count;
=======
          SELECT 
            DATE_TRUNC('day', created_at) AS date,
            COUNT(*) AS conversion_count,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            metadata->>'conversionType' AS conversion_type
          FROM public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        ),
        page_views AS (
<<<<<<< HEAD
          SELECT
            DATE_TRUNC('day', created_at) AS date;
=======
          SELECT 
            DATE_TRUNC('day', created_at) AS date,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            COUNT(*) AS view_count
          FROM public.analytics_events
          WHERE event_type = 'page_view' AND path = '/'
          GROUP BY DATE_TRUNC('day', created_at)
        )
<<<<<<< HEAD
        SELECT
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          c.date;
          c.conversion_type;
          c.conversion_count;
          p.view_count;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
        SELECT 
          c && c.date;
          c && c.conversion_type;
          c && c.conversion_count;
          p && p.view_count;
          ROUND((c && c.conversion_count::numeric / NULLIF(p && p.view_count, 0)) * 100, 2) AS conversion_rate
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
        FROM conversions c
        LEFT JOIN page_views p ON c && c.date = p && p.date
        ORDER BY c && c.date DESC;
      `
    });
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts

    
    console && console.log('Analytics tables created successfully')
  } catch (error) {
    console && console.error('Error creating analytics tables:', error);

========
    console && console.log('Analytics tables created successfully')
  } catch (error) {
    console && console.error('Error creating analytics tables:', error);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
}
=======

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        SELECT 
          c.date,
          c.conversion_type,
          c.conversion_count,
          p.view_count,
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date
        ORDER BY c.date DESC,
      `
<<<<<<< HEAD

<<<<<<< HEAD
========
=======

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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
<<<<<<< HEAD
    });
    console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error);

    // Tables creation failed, but we can still continue
  }
}
=======
    }),
    
    // // // console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error),
    // Tables creation failed, but we can still continue
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
async function createAnalyticsTables() {;
  try {;
    // Create analytics_events table;
    await supabase.rpc('exec', {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
      sql: `;
========
      sql:`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
      sql: `;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        CREATE TABLE IF NOT EXISTS public.analytics_events (;
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),;
          event_type TEXT NOT NULL,;
          path TEXT,;
          user_id UUID REFERENCES auth.users(id),;
          metadata JSONB,;
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),;
          session_id TEXT;
        ),;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type),;
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id),;
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at),;
        -- View for daily page views;
        CREATE OR REPLACE VIEW public.daily_page_views;
        WITH (security_invoker = true) AS;
        SELECT;
<<<<<<< HEAD
========
;
        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type),;
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id),;
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at),;
        ;
        -- View for daily page views;
        CREATE OR REPLACE VIEW public.daily_page_views;
        WITH (security_invoker = true) AS;
        SELECT ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          DATE_TRUNC('day', created_at) AS date,;
          path,;
          COUNT(*) AS view_count;
        FROM public.analytics_events;
        WHERE event_type = 'page_view';
        GROUP BY DATE_TRUNC('day', created_at), path;
        ORDER BY date DESC, view_count DESC,;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
========
        ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        -- View for conversion rates;
        CREATE OR REPLACE VIEW public.conversion_rates;
        WITH (security_invoker = true) AS;
        WITH conversions AS (;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
          SELECT;
========
          SELECT ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
          SELECT;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            DATE_TRUNC('day', created_at) AS date,;
            COUNT(*) AS conversion_count,;
            metadata->>'conversionType' AS conversion_type;
          FROM public.analytics_events;
          WHERE event_type = 'conversion';
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType';
        ),;
        page_views AS (;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
          SELECT;
========
          SELECT ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
          SELECT;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            DATE_TRUNC('day', created_at) AS date,;
            COUNT(*) AS view_count;
          FROM public.analytics_events;
          WHERE event_type = 'page_view' AND path = '/';
          GROUP BY DATE_TRUNC('day', created_at);
        );
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
        SELECT;
========
        SELECT ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
        SELECT;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          c.date,;
          c.conversion_type,;
          c.conversion_count,;
          p.view_count,;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate;
========
          ROUND((c.conversion_count:numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
          ROUND((c.conversion_count::numeric / NULLIF(p.view_count, 0)) * 100, 2) AS conversion_rate;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        FROM conversions c;
        LEFT JOIN page_views p ON c.date = p.date;
        ORDER BY c.date DESC,;
      `;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    });
    // // // console.log('Analytics tables created successfully');
  } catch (error) {;
    console.error('Error creating analytics tables:', error);
    // Tables creation failed, but we can still continue;
  }
}
;
<<<<<<< HEAD

=======
    }),
    
    // // // console.log('Analytics tables created successfully')
  } catch (error) {
    console.error('Error creating analytics tables:', error),
    // Tables creation failed, but we can still continue

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupAnalyticsTables.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
