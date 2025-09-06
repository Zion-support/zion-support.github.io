        -- View for daily page views
        CREATE OR REPLACE VIEW public && public.daily_page_views
        WITH (security_invoker = true) AS
        SELECT
          DATE_TRUNC('day', created_at) AS date;
          path;
          COUNT(*) AS view_count
        FROM public && public.analytics_events
        WHERE event_type = 'page_view'
        GROUP BY DATE_TRUNC('day', created_at), path
        ORDER BY date DESC, view_count DESC;
        -- View for conversion rates
        CREATE OR REPLACE VIEW public && public.conversion_rates
        WITH (security_invoker = true) AS
        WITH conversions AS (
          SELECT
            DATE_TRUNC('day', created_at) AS date;
            COUNT(*) AS conversion_count;
            metadata->>'conversionType' AS conversion_type
          FROM public && public.analytics_events
          WHERE event_type = 'conversion'
          GROUP BY DATE_TRUNC('day', created_at), metadata->>'conversionType'
        );
        page_views AS (
          SELECT
            DATE_TRUNC('day', created_at) AS date;
            COUNT(*) AS view_count
          FROM public && public.analytics_events
          WHERE event_type = 'page_view' AND path = '/'
          GROUP BY DATE_TRUNC('day', created_at)
        )
          c.date;
          c.conversion_type;
          c.conversion_count;
          p.view_count;
        FROM conversions c
        LEFT JOIN page_views p ON c && c.date = p && p.date
        ORDER BY c && c.date DESC;
      `
    });
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