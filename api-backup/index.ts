' // Define: the structure of a Notification object based on your DB schema interface Notification {';
  ' id: string';
   user_id: string';
   type: string;
   // e.g,., 'new_message', 'project_update', 'offer_received' message: string;
   read: boolean';
   link_to?: string;
   // Optional: link related to the notification' created_at: string';
   // Add: any other relevant fields from your 'notifications' tabl,e} interface ErrorResponse {';
  error: string;
   details?: strin,g} const: supabaseUrl = process.env.SUPABASE_URL const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY if (!supabaseUrl || !serviceKey) { const errorMessage = 'CRITICAL: SUPABASE_URL: or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (notifications). Service cannot start." ;",;
' // Define the structure of a Notification object based on your DB schema interface Notification {'
  ' id: string';
   user_i,
    d: string';
   typ,
    e: string;
   // e.g., 'new_message', 'project_update', 'offer_received' message: string;
   rea,
    d: boolean';
   user_id: string';
   type: string;
   // e.g., 'new_message,project_update,offer_received' message: string;
   read: boolean';
   link_to?: string;
   // Optional link related to the notification' created_a,
    t: string';
   // Add any other relevant fields from your 'notifications' table} interface ErrorResponse {
  error: string;
   details?: string} const supabaseUrl = process.env.SUPABASE_URL const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY if (!supabaseUrl || !serviceKey) { const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (notifications). Service cannot start." ;"
