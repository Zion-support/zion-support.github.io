 serve (async (req) => {
  //Handle CORS preflight request if (req.method === "OPTIONS") {
  
}try {
  const supabaseClient = createClient ();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Parse the request body .from ("analytics events") .select ("event type, created at") .gte ("created at", startDate.toISOString () );
}//Group events by date and event type const eventsByDate = {
  
};
data.forEach ( (event) => {
  if (!eventsByDate[date]) {
  eventsByDate[date] = {
  date 
}
}if (!eventsByDate[date][event.event type]) {
  eventsByDate[date][event.event type] = 0 
}
});
//Convert to array for easier consumption by frontend status: 500 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
