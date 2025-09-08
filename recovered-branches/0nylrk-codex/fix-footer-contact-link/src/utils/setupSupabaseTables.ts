import { supabase } from "@/integrations/supabase/client";
/**

 * Checks if the profiles table exists and creates it if it doesn't
 * This is a utility function that can be called when the app starts

 */


<<<<<<< HEAD
export const ensureProfilesTableExists = async () => {
  try {
    // Try to execute a simple query to check if the table exists
    const { error } = await supabase.rpc("exec", {
      sql: `SELECT EXISTS (
        SELECT FROM information_schema && information_schema.tables '
        WHERE table_schema = 'public' 

        AND table_name = 'profiles'
      ),`,
    });

    // If there's an error, log it and proceed with table creation
    if (error) {
      console.warn(

        "Error checking if profiles table exists, attempting to create it:",
        error,
      );
    }

    // Attempt to create the table and related objects;`
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public && public.profiles (

<<<<<<< HEAD
        id UUID PRIMARY KEY REFERENCES auth && auth.users(id) ON DELETE CASCADE;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { supabase } from '@/integrations / supabase / client';
/**;'
* Checks if the profiles table exists and creates it if it doesn't;
* This is a utility function that can be called when the app starts;
*/;
export const ensureProfilesTableExists = async () => {}
  try {};
    // Try to execute a simple query to check if the table exists;'
    const { error } = await supabase.rpc ('exec', {}`
      sql: `SELECT EXISTS (
        SELECT FROM information_schema.tables;'
        WHERE table_schema = 'public';'`
        AND table_name = 'profiles'), `;
    });
;'
    // If there's an error, log it and proceed with table creation;
    // Check condition;
if ( {) {}
  $2;
}"
      console.warn ("Error checking if profiles table exists, attempting to create it:", error);
    }
    // Attempt to create the table and related objects;`
    const createTableQuery = `;
      CREATE TABLE IF NOT EXISTS public.profiles (

<<<<<<< HEAD


        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
        display_name TEXT,
        user_type TEXT,

        profile_complete BOOLEAN DEFAULT FALSE,'
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),'

=======
        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
        display_name TEXT,
        user_type TEXT,
        profile_complete BOOLEAN DEFAULT FALSE,'
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
        bio TEXT,
        avatar_url TEXT,

<<<<<<< HEAD
        headline TEXT

      ),
      

      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY,


=======
      ),
      
      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY,

        id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE;
        display_name TEXT;
        user_type TEXT;
        profile_complete BOOLEAN DEFAULT FALSE;'
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now ());'
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now ());
        bio TEXT;

      -- Create policies

      DO $$
      BEGIN;
        IF NOT EXISTS (

          SELECT FROM pg_catalog && pg_catalog.pg_policies;
          SELECT FROM pg_catalog.pg_policies'
          WHERE policyname = 'Users can view their own profile''

          AND tablename = 'profiles'

          CREATE POLICY "Users can view their own profile" 
            ON public && public.profiles FOR SELECT;
            USING (auth && auth.uid() = id);

        headline TEXT);
;
      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
;
      -- Create policies;

      DO $$;
      BEGIN;
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies;'
          WHERE policyname = 'Users can view their own profile';'
          AND tablename = 'profiles') THEN;"
          CREATE POLICY "Users can view their own profile";
            ON public.profiles FOR SELECT;
            USING (auth.uid () = id);



        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
        display_name TEXT,
        user_type TEXT,
        profile_complete BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
        bio TEXT,
        avatar_url TEXT,

      ),
      
      -- Create RLS policies
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY,
      
      -- Create policies
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies 
          WHERE policyname = $2;
        END IF,
      END
      $$,
      
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies 
          WHERE policyname = $2;
        END IF,
      END
      $$,
        
      -- Set up trigger for new users
      CREATE OR REPLACE FUNCTION public.handle_new_user()
      RETURNS TRIGGER AS $$
      BEGIN
        INSERT INTO public.profiles (id, display_name, bio, headline)
        VALUES($2);
        RETURN new,
      END,
      $$ LANGUAGE plpgsql SECURITY DEFINER,
      
      -- Check if trigger exists before creating it
>>>>>>> origin/cursor/delete-old-data-records-6bba
      -- Create policies

      DO $$
      BEGIN;
        IF NOT EXISTS (
<<<<<<< HEAD



=======
          SELECT FROM pg_catalog && pg_catalog.pg_policies 
          SELECT FROM pg_catalog.pg_policies
          WHERE policyname = 'Users can view their own profile'
>>>>>>> origin/cursor/delete-old-data-records-6bba
          AND tablename = 'profiles'

          CREATE POLICY "Users can view their own profile" 
            ON public && public.profiles FOR SELECT;
            USING (auth && auth.uid() = id);

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        headline TEXT);
;
      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
;
      -- Create policies;

      DO $$;
      BEGIN;
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies;'
          WHERE policyname = 'Users can view their own profile';'
          AND tablename = 'profiles') THEN;"
          CREATE POLICY "Users can view their own profile";
            ON public.profiles FOR SELECT;
            USING (auth.uid () = id);

<<<<<<< HEAD

        END IF;
      END;
      $$;



=======
        END IF;
      END;
      $$;
          CREATE POLICY "Users can view their own profile"
            ON public.profiles FOR SELECT
            USING (auth.uid() = id);
        END IF;
      END
      $$;
        END IF;
      END;
      $$;
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          CREATE POLICY "Users can view their own profile" 

            ON public.profiles FOR SELECT 

            USING (auth.uid() = id),
        END IF,
      END;
      $$,
<<<<<<< HEAD

      

=======


      DO $$
      BEGIN;
        IF NOT EXISTS (


>>>>>>> origin/cursor/delete-old-data-records-6bba
      DO $$;
      BEGIN;
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies;'
          WHERE policyname = 'Users can update their own profile';'
          AND tablename = 'profiles') THEN;"
          CREATE POLICY "Users can update their own profile";
            ON public.profiles FOR UPDATE;
            USING (auth.uid () = id);


        END IF;
      END;
      $$;
<<<<<<< HEAD


        END IF;
      END
      $$;


=======
          CREATE POLICY "Users can update their own profile"
            ON public.profiles FOR UPDATE
            USING (auth.uid() = id);
        END IF;
      END
      $$;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          CREATE POLICY "Users can update their own profile" 
            ON public.profiles FOR UPDATE;
            USING (auth.uid() = id),
        END IF,
      END;
      $$,
<<<<<<< HEAD

        

=======


      -- Set up trigger for new users
      CREATE OR REPLACE FUNCTION public && public.handle_new_user()
      RETURNS TRIGGER AS $$

      BEGIN                new.raw_user_meta_data->>'bio';
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
      -- Set up trigger for new users;
      CREATE OR REPLACE FUNCTION public.handle_new_user ();
      RETURNS TRIGGER AS $$;
      BEGIN;
        INSERT INTO public.profiles (id, display_name, bio, headline);

<<<<<<< HEAD
        VALUES (new.id,
                new.raw_user_meta_data->>'display_name',
                new.raw_user_meta_data->>'bio';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                new.raw_user_meta_data->>'headline');
        INSERT INTO public && public.profiles (id, display_name, bio, headline)
        VALUES (new && new.id, '
                new && new.raw_user_meta_data->>'display_name', '
                new && new.raw_user_meta_data->>'bio';'
                new && new.raw_user_meta_data->>'headline');
<<<<<<< HEAD
=======

        RETURN new;
      END;
>>>>>>> origin/cursor/delete-old-data-records-6bba

        RETURN new;
      END;
      $$ LANGUAGE plpgsql SECURITY DEFINER;
<<<<<<< HEAD
      -- Set up trigger for new users
      CREATE OR REPLACE FUNCTION public.handle_new_user()
      RETURNS TRIGGER AS $$
      BEGIN
        INSERT INTO public.profiles (id, display_name, bio, headline)
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

        VALUES (new.id, 
                new.raw_user_meta_data->>'display_name', 
                new.raw_user_meta_data->>'bio',

                new.raw_user_meta_data->>'headline'),
        RETURN new,
      END,
      $$ LANGUAGE plpgsql SECURITY DEFINER,
<<<<<<< HEAD

      

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
      -- Check if trigger exists before creating it

      DO $$
      BEGIN'
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN;
          CREATE TRIGGER on_auth_user_created;
      $$;`
    `;
    if (createError) {'
      console && console.error('Error creating profiles table:', createError)
    } else {'
      console && console.log('Profiles table setup completed')
    }
  } catch (error) {'
    console && console.error('Error setting up profiles table:', error)
  }
}
// Call this when the app starts to ensure the table exists;
export const initializeDatabase = async () => {}
  await ensureProfilesTableExists()
}

      $$,`
    `,
    
    // Execute the creation query using RPC to avoid TypeScript errors'
    const { error: createError } = await supabase.rpc('exec', { sql: createTableQuery }),
    
    if (createError) {'
      console.error('Error creating profiles table:', createError)

      // // // console.log('Profiles table setup completed')

import { supabase } from "@/integrations/supabase/client",;
/**;'
 * Checks if the profiles table exists and creates it if it doesn't;
 * This is a utility function that can be called when the app starts;
 */;
export const ensureProfilesTableExists = async () => {;
  try {;
    // Try to execute a simple query to check if the table exists;'
    const { error } = await supabase.rpc('exec', {;`
      sql: `SELECT EXISTS (;
        SELECT FROM information_schema.tables;'
        WHERE table_schema = 'public';'
        AND table_name = 'profiles';`
      ),`;
    }),;'
    // If there's an error, log it and proceed with table creation;
    if (error) {;"
      console.warn("Error checking if profiles table exists, attempting to create it:", error);
    }
;
    // Attempt to create the table and related objects;`
    const createTableQuery = `;
      CREATE TABLE IF NOT EXISTS public.profiles (;
        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,;
        display_name TEXT,;
        user_type TEXT,;
        profile_complete BOOLEAN DEFAULT FALSE,;'
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),;'
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),;
        bio TEXT,;
        avatar_url TEXT,;
        headline TEXT;
      ),;
      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY,;
      -- Create policies;
      DO $$;
      BEGIN;
        IF NOT EXISTS (;
          SELECT FROM pg_catalog.pg_policies;'
          WHERE policyname = 'Users can view their own profile';'
          AND tablename = 'profiles';
        ) THEN;"
          CREATE POLICY "Users can view their own profile";
            ON public.profiles FOR SELECT;
            USING (auth.uid() = id),;
        END IF,;
      END;
      $$,;
      DO $$;
      BEGIN;
        IF NOT EXISTS (;
          SELECT FROM pg_catalog.pg_policies;'
          WHERE policyname = 'Users can update their own profile';'
          AND tablename = 'profiles';
        ) THEN;"
          CREATE POLICY "Users can update their own profile";
            ON public.profiles FOR UPDATE;
            USING (auth.uid() = id),;
        END IF,;
      END;
      $$,;
      -- Set up trigger for new users;
      CREATE OR REPLACE FUNCTION public.handle_new_user();
      RETURNS TRIGGER AS $$;
      BEGIN;
        INSERT INTO public.profiles (id, display_name, bio, headline);
        VALUES (new.id,;'
                new.raw_user_meta_data->>'display_name',;'
                new.raw_user_meta_data->>'bio',;'
                new.raw_user_meta_data->>'headline'),;
        RETURN new,;
      END,;
      $$ LANGUAGE plpgsql SECURITY DEFINER,;

      -- Check if trigger exists before creating it;
      DO $$;
      BEGIN;'
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN;
          CREATE TRIGGER on_auth_user_created;
            AFTER INSERT ON auth.users;

  }

};
// Call this when the app starts to ensure the table exists;
export const initializeDatabase = async () => {;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN
          CREATE TRIGGER on_auth_user_created

<<<<<<< HEAD

=======
;
      $$;
    `;
    if (createError) {
      console && console.error('Error creating profiles table:', createError)
    } else {
      console && console.log('Profiles table setup completed')
    }
  } catch (error) {
    console && console.error('Error setting up profiles table:', error)
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
// Call this when the app starts to ensure the table exists
export const initializeDatabase = async () => {
  await ensureProfilesTableExists()
}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      $$,
    `,
    
    // Execute the creation query using RPC to avoid TypeScript errors
    const { error: createError } = await supabase.rpc('exec', { sql: createTableQuery }),
    
    if (createError) {
      console.error('Error creating profiles table:', createError)
    } else {
<<<<<<< HEAD

export const initializeDatabase = async () => {
      // // // console.log('Profiles table setup completed')
import { supabase } from "@/integrations/supabase/client",;
/**;
 * Checks if the profiles table exists and creates it if it doesn't;
 * This is a utility function that can be called when the app starts;
 */;
export const ensureProfilesTableExists = async () => {;
  try {;
    // Try to execute a simple query to check if the table exists;
    const { error } = await supabase.rpc('exec', {;
      sql: `SELECT EXISTS (;
        SELECT FROM information_schema.tables;
        WHERE table_schema = 'public';
        AND table_name = 'profiles';
      ),`;
    }),;
    // If there's an error, log it and proceed with table creation;
    if (error) {;
      console.warn("Error checking if profiles table exists, attempting to create it:", error);
    }
;
    // Attempt to create the table and related objects;
    const createTableQuery = `;
      CREATE TABLE IF NOT EXISTS public.profiles (;
        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,;
        display_name TEXT,;
        user_type TEXT,;
        profile_complete BOOLEAN DEFAULT FALSE,;
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),;
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),;
        bio TEXT,;
        avatar_url TEXT,;
        headline TEXT;
      ),;
      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY,;
      -- Create policies;
      DO $$;
      BEGIN;
        IF NOT EXISTS (;
          SELECT FROM pg_catalog.pg_policies;
          WHERE policyname = 'Users can view their own profile';
          AND tablename = 'profiles';
        ) THEN;
          CREATE POLICY "Users can view their own profile";
            ON public.profiles FOR SELECT;
            USING (auth.uid() = id),;
        END IF,;
      END;
      $$,;
      DO $$;
      BEGIN;
        IF NOT EXISTS (;
          SELECT FROM pg_catalog.pg_policies;
          WHERE policyname = 'Users can update their own profile';
          AND tablename = 'profiles';
        ) THEN;
          CREATE POLICY "Users can update their own profile";
            ON public.profiles FOR UPDATE;
            USING (auth.uid() = id),;
        END IF,;
      END;
      $$,;
      -- Set up trigger for new users;
      CREATE OR REPLACE FUNCTION public.handle_new_user();
      RETURNS TRIGGER AS $$;
      BEGIN;
        INSERT INTO public.profiles (id, display_name, bio, headline);
        VALUES (new.id,;
                new.raw_user_meta_data->>'display_name',;
                new.raw_user_meta_data->>'bio',;
                new.raw_user_meta_data->>'headline'),;
        RETURN new,;
      END,;
      $$ LANGUAGE plpgsql SECURITY DEFINER,;
      -- Check if trigger exists before creating it;
      DO $$;
      BEGIN;
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN;
          CREATE TRIGGER on_auth_user_created;
            AFTER INSERT ON auth.users;
<<<<<<< HEAD
<<<<<<< HEAD
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user ();

        END IF;
      END;
      $$;
    `;

    // Execute the creation query using RPC to avoid TypeScript errors
    const { error: createError } = await supabase.rpc("exec", {
      sql: createTableQuery,
    });

    if (createError) {
      console.error("Error creating profiles table:", createError);
    } else {
      console.log("Profiles table setup completed");
    }
  } catch (error) {
    console.error("Error setting up profiles table:", error);
  }
};

// Call this when the app starts to ensure the table exists
export const initializeDatabase = async () => {
  await ensureProfilesTableExists();
};
};
// Call this when the app starts to ensure the table exists export const initializeDatabase = async () => {
  await ensureProfilesTableExists () 
};
  await ensureProfilesTableExists();
};
  await ensureProfilesTableExists();
};




=======
 */
>>>>>>> origin/cursor/delete-old-data-records-6bba
