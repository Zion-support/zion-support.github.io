 // Signup checking functionality // If IP address is provided, check for rapid signups from same IP if (ipAddress) {
  try {
  const {
  data: recentSignups, error 
}= await supabase .from ('profiles') .select ('created at') .eq ('ip address', ipAddress) .gte ('created at', new Date (Date.now () - 24 * 60 * 60 * 1000) .toISOString () ) // Last 24 hours 