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