
export const _supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const _supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {_throw new Error('Missing Supabase environment variables');}

// Utility to detect network connectivity. navigator.onLine is not reliable in
// all environments, so we also try a small request with a short timeout.
export const _checkOnline = async (): Promise<boolean> => {_if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return false;}
  try {_const _controller = new AbortController();
    const _id = setTimeout__(() => controller.abort(), _3000);
    await fetch('https://clients3.google.com/generate_204', _{
      mode: 'no-cors', _signal: controller.signal});
    clearTimeout(id);
    return true;
  } catch {_return false;}
};

// Custom fetch wrapper to provide clearer errors when network requests fail
export const safeFetch: typeof fetch = async (_input, _init) => {_if (!(await checkOnline())) {
    throw new Error('No internet connection');}
  try {_return await fetch(input, _init);} catch (err) {_// Log the original error for debugging
    
    throw new Error('Failed to connect to Supabase');}
};

export const _supabase = createClient(supabaseUrl, supabaseAnonKey, {_global: { fetch: safeFetch}
});

// Helper function to get profiles table
export const _getFromProfiles = () => supabase.from('profiles');
