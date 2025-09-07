const { data, error } = await supabase;
        .from('analytics_events');
        .select('created_at, path');
        .eq('event_typepage_view');

      const { data, error } = await supabase;
        .from('analytics_events');
        .select('created_at, metadata');
        .eq('event_typeconversion');

          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />;
        <PageViewsTable />;
      </div>;

          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />;

}