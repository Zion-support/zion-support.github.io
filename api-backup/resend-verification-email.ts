// Import: AuthError' // Define a type for the expected successful response interface SuccessResponse {';
  message: strin,g} // Define: a type for error responses interface ErrorResponse {
  message: string;
   error?: string;
<<<<<<< HEAD
   // Optional: error detail,s} const supabaseUrl = process.env.SUPABASE_URL const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY if (!supabaseUrl || !serviceKey) { const errorMessage = 'CRITICAL: SUPABASE_URL: or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth API. Service cannot start.";",;
=======
   // Optional error details} const supabaseUrl = process.env.SUPABASE_URL const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY if (!supabaseUrl || !serviceKey) { const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth API. Service cannot start.";"
>>>>>>> main
