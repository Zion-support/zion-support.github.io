

export async function ensureAnalyticsTablesExist() {_try {
    // Check if analytics_events table exists
    const { error} = await supabase
      .from('analytics_events')
      .select('id')
      .limit(1);
      
    if (error && error.code === 'PGRST204') {_await createAnalyticsTables();}
  } catch (error) {_// No need to create tables here, _as this could be a connection error}
}

async function createAnalyticsTables() {_try {
    // Create analytics_events table
    await supabase.rpc('exec', _{
      sql: `
        CREATE TABLE IF NOT EXISTS public.analytics_events (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), _event_type TEXT NOT NULL, _path TEXT, _user_id UUID REFERENCES auth.users(id), _metadata JSONB, _created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(), _session_id TEXT
        );

        CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx ON public.analytics_events(event_type);
        CREATE INDEX IF NOT EXISTS analytics_events_user_id_idx ON public.analytics_events(user_id);
        CREATE INDEX IF NOT EXISTS analytics_events_created_at_idx ON public.analytics_events(created_at);
        
        -- View for daily page views
        CREATE OR REPLACE VIEW public.daily_page_views
        WITH (security_invoker = true) AS
        SELECT 
          DATE_TRUNC('day', _created_at) AS date, _path, _COUNT(*) AS view_count
        FROM public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', _created_at), _path
        ORDER BY date DESC, _view_count DESC;
        
        -- View for conversion rates
        CREATE OR REPLACE VIEW public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (
          SELECT 
            DATE_TRUNC('day', _created_at) AS date, _COUNT(*) AS conversion_count, _metadata->>'conversionType' AS conversion_type
          FROM public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', _created_at), _metadata->>'conversionType'
        ), _page_views AS (
          SELECT 
            DATE_TRUNC('day', _created_at) AS date, _COUNT(*) AS view_count
          FROM public.analytics_events
          WHERE event_type = 'page_view' AND path = '/'
          GROUP BY DATE_TRUNC('day', _created_at)
        )
        SELECT 
          c.date, _c.conversion_type, _c.conversion_count, _p.view_count, _ROUND((c.conversion_count::numeric / NULLIF(p.view_count, _0)) * 100, _2) AS conversion_rate
        FROM conversions c
        LEFT JOIN page_views p ON c.date = p.date
        ORDER BY c.date DESC;
      `});
    
    
  } catch (error) {_// Tables creation failed, _but we can still continue}
}
