<<<<<<< HEAD
<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js';
<<<<<<< HEAD
export const supabaseUrl = null;
=======
<<<<<<< HEAD

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {createClient} from '@supabase/supabase-js';
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
}
}

export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl |!supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
<<<<<<< HEAD
=======
import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
// Utility to detect network connectivity. navigator.onLine is not reliable in
// all environments, so we also try a small request with a short timeout.
}
}

export const checkOnline = async (): Promise<boolean> => {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return false
  }
<<<<<<< HEAD
<<<<<<< HEAD
  try {
=======
  try {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000);
    await fetch('https://clients3.google.com/generate_204', {
      mode: 'no-cors'
      signal: controller.signal});
    clearTimeout(id);
    return true
  } catch {
    return false
  }
}
// Custom fetch wrapper to provide clearer errors when network requests fail
}
}

export const safeFetch: typeof fetch = async (input, init) => {
  if (!(await checkOnline())) {
    throw new Error('No internet connection')
  }
  try {
    return await fetch(input, init)
  } catch (err) {
    // Log the original error for debugging;
    console.error('Supabase fetch failed:', err);
    throw new Error('Failed to connect to Supabase')
  }
<<<<<<< HEAD
}
=======
};
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { fetch: safeFetch };
});
// Helper function to get profiles table
<<<<<<< HEAD
}
}

=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export const getFromProfiles = () => supabase.from('profiles');

=======
=======
=======
import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
}
;
// Utility to detect network connectivity. navigator.onLine is not reliable in;
// all environments, so we also try a small request with a short timeout.;
export const checkOnline = async (): Promise<boolean> => {;
  if (typeof navigator !== 'undefined' && !navigator.onLine) {;
    return false;
  }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  try {;
    const controller = new AbortController(),;
    const id = setTimeout(() => controller.abort(), 3000),;
    await fetch('https://clients3.google.com/generate_204', {;
      mode: 'no-cors',;
      signal: controller.signal}),;
    clearTimeout(id),;
    return true;
  } catch {;
    return false;
  }
},;
// Custom fetch wrapper to provide clearer errors when network requests fail;
export const safeFetch: typeof fetch = async (input, init) => {;
  if (!(await checkOnline())) {;
    throw new Error('No internet connection');
  }
  try {;
    return await fetch(input, init);
  } catch (err) {;
    // Log the original error for debugging;
    console.error('Supabase fetch failed:', err),;
    throw new Error('Failed to connect to Supabase');
  }
},;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {;
  global: { fetch: safeFetch }
});
// Helper function to get profiles table;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const getFromProfiles = () => supabase.from('profiles');
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
