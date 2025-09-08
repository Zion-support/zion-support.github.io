

}

    const controller = new AbortController ();
    const id = set_timeout (() => controller.abort (), 3000);
    await fetch ('https://clients3.google.com / generate_204', {
      mode: 'no - cors',
      signal: controller.signal});
    clear_timeout (id);
    return true;
  } catch {
    return false;
  }
}
    throw new Error ('No internet connection');





import {createClient} from '@supabase/supabase-js';

export const getFromProfiles = () => supabase && supabase.from('profiles');
    // Log the original error for debugging;
    console.error ('Supabase fetch failed:', err);
    throw new Error ('Failed to connect to Supabase');



export const supabase = createClient(supabaseUrl, supabaseAnonKey, {;
  global: { fetch: safeFetch }



export const getFromProfiles = () => supabase.from('profiles');
      mode:'no-cors',;
      signal:controller.signal}),;
    clearTimeout(id),;
    return true,;
  } catch {;
    return false,;
  }
},;
;
// Custom fetch wrapper to provide clearer errors when network requests fail;
export const safeFetch:typeof fetch = async (input, init) => {;
  if (!(await checkOnline())) {;
    throw new Error('No internet connection'),;
  }
  try {;
    return await fetch(input, init),;
  } catch (err) {;
    // Log the original error for debugging;
    console.error('Supabase fetch failed:', err),;
    throw new Error('Failed to connect to Supabase'),;
  }
},;

export const getFromProfiles = () => supabase.from('profiles'),; 
});
// Helper function to get profiles table;
export const getFromProfiles = () => supabase.from('profiles');




