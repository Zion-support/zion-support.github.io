<<<<<<< HEAD


import { supabase } from "@/integrations/supabase/client",

=======
=======
import { supabase } from "@/integrations/supabase/client",


import { supabase } from "@/integrations/supabase/client";
import { supabase } from "@/integrations/supabase/client",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {supabase} from "@/integrations/supabase/client";
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
/**
 * Checks if the profiles table exists and creates it if it doesn't
 * This is a utility function that can be called when the app starts
 */

export const ensureProfilesTableExists = async () => {
  try {
    // Try to execute a simple query to check if the table exists
<<<<<<< HEAD

    const { error } = await supabase && supabase.rpc('exec', { 
      sql: `SELECT EXISTS (
        SELECT FROM information_schema && information_schema.tables 
        WHERE table_schema = 'public' 

        AND table_name = 'profiles'

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      ),`


    // If there's an error, log it and proceed with table creation
    if (error) {
      console && console.warn("Error checking if profiles table exists, attempting to create it:", error)
    }
    // Attempt to create the table and related objects
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public && public.profiles (
        id UUID PRIMARY KEY REFERENCES auth && auth.users(id) ON DELETE CASCADE;
=======
import { supabase } from '@/integrations / supabase / client';
/**;
* Checks if the profiles table exists and creates it if it doesn't;
* This is a utility function that can be called when the app starts;
*/;
export const ensureProfilesTableExists = async () => {
  try {
    // Try to execute a simple query to check if the table exists;
    const { error } = await supabase.rpc ('exec', {
      sql: `SELECT EXISTS (
        SELECT FROM information_schema.tables;
        WHERE table_schema = 'public';
        AND table_name = 'profiles'), `;
    });
;
    // If there's an error, log it and proceed with table creation;
    // Check condition
if ( {) {
  $2
}
      console.warn ("Error checking if profiles table exists, attempting to create it:", error);
    }
    // Attempt to create the table and related objects;
    const createTableQuery = `;
      CREATE TABLE IF NOT EXISTS public.profiles (
<<<<<<< HEAD

      ALTER TABLE public && public.profiles ENABLE ROW LEVEL SECURITY;
      

=======
=======
    const { error } = await supabase.rpc('exec', {
      sql: `SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = 'profiles'
      ),`;
    });
      ),`
    });
    }),
    
    // If there's an error, log it and proceed with table creation
    if (error) {
      console.warn("Error checking if profiles table exists, attempting to create it:", error)
    }
    // Attempt to create the table and related objects
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public.profiles (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
        display_name TEXT,
        user_type TEXT,
        profile_complete BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
        bio TEXT,
        avatar_url TEXT,
        headline TEXT
<<<<<<< HEAD

=======
      );
      -- Create RLS policies
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      ),
      
      -- Create RLS policies
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY,
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE;
        display_name TEXT;
        user_type TEXT;
        profile_complete BOOLEAN DEFAULT FALSE;
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now ());
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now ());
        bio TEXT;
        avatar_url TEXT;
      ALTER TABLE public && public.profiles ENABLE ROW LEVEL SECURITY;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      -- Create policies
      DO $$
      BEGIN
        IF NOT EXISTS (
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          SELECT FROM pg_catalog && pg_catalog.pg_policies 
          SELECT FROM pg_catalog.pg_policies
          WHERE policyname = 'Users can view their own profile'
          AND tablename = 'profiles'
        ) THEN
          CREATE POLICY "Users can view their own profile" 
            ON public && public.profiles FOR SELECT 
            USING (auth && auth.uid() = id);
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        headline TEXT);
;
      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
;
      -- Create policies;
      DO $$;
      BEGIN;
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies;
          WHERE policyname = 'Users can view their own profile';
          AND tablename = 'profiles') THEN;
          CREATE POLICY "Users can view their own profile";
            ON public.profiles FOR SELECT;
            USING (auth.uid () = id);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        END IF;
      END;
      $$;
<<<<<<< HEAD


=======
          CREATE POLICY "Users can view their own profile"
            ON public.profiles FOR SELECT
            USING (auth.uid() = id);
        END IF;
      END
      $$;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          CREATE POLICY "Users can view their own profile" 
            ON public.profiles FOR SELECT 
            USING (auth.uid() = id),
        END IF,
      END
      $$,
      
<<<<<<< HEAD


      DO $$
      BEGIN
        IF NOT EXISTS (

          SELECT FROM pg_catalog && pg_catalog.pg_policies 
=======
          SELECT FROM pg_catalog && pg_catalog.pg_policies 
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          WHERE policyname = 'Users can update their own profile'
          AND tablename = 'profiles'
        ) THEN
          CREATE POLICY "Users can update their own profile" 
            ON public && public.profiles FOR UPDATE 
            USING (auth && auth.uid() = id);
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
      DO $$;
      BEGIN;
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies;
          WHERE policyname = 'Users can update their own profile';
          AND tablename = 'profiles') THEN;
          CREATE POLICY "Users can update their own profile";
            ON public.profiles FOR UPDATE;
            USING (auth.uid () = id);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        END IF;
      END;
      $$;
<<<<<<< HEAD


=======
          CREATE POLICY "Users can update their own profile"
            ON public.profiles FOR UPDATE
            USING (auth.uid() = id);
        END IF;
      END
      $$;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          CREATE POLICY "Users can update their own profile" 
            ON public.profiles FOR UPDATE 
            USING (auth.uid() = id),
        END IF,
      END
      $$,
        

<<<<<<< HEAD

      -- Set up trigger for new users
      CREATE OR REPLACE FUNCTION public && public.handle_new_user()
      RETURNS TRIGGER AS $$
      BEGIN

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
      -- Set up trigger for new users;
      CREATE OR REPLACE FUNCTION public.handle_new_user ();
      RETURNS TRIGGER AS $$;
      BEGIN;
        INSERT INTO public.profiles (id, display_name, bio, headline);
        VALUES (new.id,
                new.raw_user_meta_data->>'display_name',
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                new.raw_user_meta_data->>'bio';
                new.raw_user_meta_data->>'headline');
=======
        INSERT INTO public && public.profiles (id, display_name, bio, headline)
        VALUES (new && new.id, 
                new && new.raw_user_meta_data->>'display_name', 
                new && new.raw_user_meta_data->>'bio';
                new && new.raw_user_meta_data->>'headline');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        RETURN new;
      END;
      $$ LANGUAGE plpgsql SECURITY DEFINER;
<<<<<<< HEAD

        INSERT INTO public.profiles (id, display_name, bio, headline)

=======
      -- Set up trigger for new users
      CREATE OR REPLACE FUNCTION public.handle_new_user()
      RETURNS TRIGGER AS $$
      BEGIN
        INSERT INTO public.profiles (id, display_name, bio, headline)
        VALUES (new.id
                new.raw_user_meta_data->>'display_name'
                new.raw_user_meta_data->>'bio';
                new.raw_user_meta_data->>'headline');
        RETURN new;
      END;
      $$ LANGUAGE plpgsql SECURITY DEFINER;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        VALUES (new.id, 
                new.raw_user_meta_data->>'display_name', 
                new.raw_user_meta_data->>'bio',
                new.raw_user_meta_data->>'headline'),
        RETURN new,
      END,
      $$ LANGUAGE plpgsql SECURITY DEFINER,
      
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      -- Check if trigger exists before creating it
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN
          CREATE TRIGGER on_auth_user_created
<<<<<<< HEAD

;
=======
            AFTER INSERT ON auth.users
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(),
        END IF,
      END
      $$;
    `;
    // Execute the creation query using RPC to avoid TypeScript errors
    const { error: createError } = await supabase.rpc('exec', { sql: createTableQuery });
    if (createError) {
      console.error('Error creating profiles table:', createError)
    } else {
      console.log('Profiles table setup completed')
    }
  } catch (error) {
    console.error('Error setting up profiles table:', error)
  }
}
// Call this when the app starts to ensure the table exists
export const initializeDatabase = async () => {
  await ensureProfilesTableExists()
}

      $$,
    `,
    
    // Execute the creation query using RPC to avoid TypeScript errors
    const { error: createError } = await supabase.rpc('exec', { sql: createTableQuery }),
    
    if (createError) {
      console.error('Error creating profiles table:', createError)
    } else {
      console.log('Profiles table setup completed')
    }
  } catch (error) {
    console.error('Error setting up profiles table:', error)
  }
};

// Call this when the app starts to ensure the table exists
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      -- Check if trigger exists before creating it;
      DO $$;
      BEGIN;
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN;
          CREATE TRIGGER on_auth_user_created;
            AFTER INSERT ON auth.users;
<<<<<<< HEAD
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user ();

        END IF;
      END;
      $$;
    `;

    const { error: createError } = await supabase && supabase.rpc('exec', { sql: createTableQuery });
    

    if (createError) {
      console && console.error('Error creating profiles table:', createError)
    } else {
      console && console.log('Profiles table setup completed')
    }
  } catch (error) {
    console && console.error('Error setting up profiles table:', error)
=======
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(),;
        END IF,;
      END;
      $$,;
    `,;
    // Execute the creation query using RPC to avoid TypeScript errors;
    const { error: createError } = await supabase.rpc('exec', { sql: createTableQuery }),;
    if (createError) {;
      console.error('Error creating profiles table:', createError);
    } else {;
      // // // console.log('Profiles table setup completed');
    }
  } catch (error) {;
    console.error('Error setting up profiles table:', error);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
}
// Call this when the app starts to ensure the table exists
export const initializeDatabase = async () => {
  await ensureProfilesTableExists()
}

<<<<<<< HEAD
=======
;
    // Execute the creation query using RPC to avoid TypeScript errors;
    const { error: create_error } = await supabase.rpc ('exec', { sql: createTableQuery });
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error creating profiles table:', create_error);
    } else {
      console.log ('Profiles table setup completed');
    }
  } catch (error) {
    console.error ('Error setting up profiles table:', error);
  }
}
;
// Call this when the app starts to ensure the table exists;
export const initialize_database = async () => {
  await ensureProfilesTableExists ();
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
;

import { supabase } from "@/integrations/supabase/client",;
;
/**;
 * Checks if the profiles table exists and creates it if it doesn't;
 * This is a utility function that can be called when the app starts;
 */;
export const ensureProfilesTableExists = async () => {;
  try {;
    // Try to execute a simple query to check if the table exists;
    const { error } = await supabase.rpc('exec', { ;
      sql:`SELECT EXISTS (;
        SELECT FROM information_schema.tables ;
        WHERE table_schema = 'public' ;
        AND table_name = 'profiles';
      ),`;
    }),;
    ;
    // If there's an error, log it and proceed with table creation;
    if (error) {;
      console.warn("Error checking if profiles table exists, attempting to create it:", error),;
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
      ;
      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY,;
      ;
      -- Create policies;
      DO $$;
      BEGIN;
        IF NOT EXISTS (;
          SELECT FROM pg_catalog.pg_policies ;
          WHERE policyname = 'Users can view their own profile';
          AND tablename = 'profiles';
        ) THEN;
          CREATE POLICY "Users can view their own profile" ;
            ON public.profiles FOR SELECT ;
            USING (auth.uid() = id),;
        END IF,;
      END;
      $$,;
      ;
      DO $$;
      BEGIN;
        IF NOT EXISTS (;
          SELECT FROM pg_catalog.pg_policies ;
          WHERE policyname = 'Users can update their own profile';
          AND tablename = 'profiles';
        ) THEN;
          CREATE POLICY "Users can update their own profile" ;
            ON public.profiles FOR UPDATE ;
            USING (auth.uid() = id),;
        END IF,;
      END;
      $$,;
        ;
      -- Set up trigger for new users;
      CREATE OR REPLACE FUNCTION public.handle_new_user();
      RETURNS TRIGGER AS $$;
      BEGIN;
        INSERT INTO public.profiles (id, display_name, bio, headline);
        VALUES (new.id, ;
                new.raw_user_meta_data->>'display_name', ;
                new.raw_user_meta_data->>'bio',;
                new.raw_user_meta_data->>'headline'),;
        RETURN new,;
      END,;
      $$ LANGUAGE plpgsql SECURITY DEFINER,;
      ;
      -- Check if trigger exists before creating it;
      DO $$;
      BEGIN;
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN;
          CREATE TRIGGER on_auth_user_created;
            AFTER INSERT ON auth.users;
        END IF;
      END;
      $$;
    `;
    const { error: createError } = await supabase && supabase.rpc('exec', { sql: createTableQuery });
    if (createError) {
      console && console.error('Error creating profiles table:', createError)
    } else {
      console && console.log('Profiles table setup completed')
    }
  } catch (error) {
    console && console.error('Error setting up profiles table:', error)
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(),;
        END IF,;
      END;
      $$,;
    `,;
    ;
    // Execute the creation query using RPC to avoid TypeScript errors;
    const { error:createError } = await supabase.rpc('exec', { sql:createTableQuery }),;
    ;
    if (createError) {;
      console.error('Error creating profiles table:', createError),;
    } else {;
      // // // console.log('Profiles table setup completed'),;
    }
  } catch (error) {;
    console.error('Error setting up profiles table:', error),;
  }
},;
;
// Call this when the app starts to ensure the table exists;
export const initializeDatabase = async () => {;
  await ensureProfilesTableExists(),;
},;   try {
  //Try to execute a simple query to check if the table exists const {
  error 
}= await supabase.rpc ('exec', {
  sql: `SELECT EXISTS (SELECT FROM information schema.tables WHERE table schema = 'public'AND table name = 'profiles' 
}display name TEXT;
user type TEXT;
profile complete BOOLEAN DEFAULT FALSE;
created at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now () );
updated at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now () );
bio TEXT;
avatar url TEXT;
headline TEXT);
-- Create RLS policies ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
-- Create policies DO $$ BEGIN IF NOT EXISTS (SELECT FROM pg catalog.pg policies WHERE policyname = 'Users can view their own profile'AND tablename = 'profiles') THEN CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid () = id);
END IF;
END $$;
DO $$ BEGIN IF NOT EXISTS (SELECT FROM pg catalog.pg policies WHERE policyname = 'Users can update their own profile'AND tablename = 'profiles') THEN CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid () = id);
END IF;
END $$;
-- Set up trigger for new users CREATE OR REPLACE FUNCTION public.handle new user () RETURNS TRIGGER AS $$ BEGIN INSERT INTO public.profiles (id, display name, bio, headline) VALUES (new.id;
new.raw user meta data->>'display name';
new.raw user meta data->>'bio';
new.raw user meta data->>'headline');
RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
-- Check if trigger exists before creating it DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg trigger WHERE tgname = 'on auth user created') THEN CREATE TRIGGER on auth user created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle new user ();
END IF;
END $$;
`;
//Execute the creation query using RPC to avoid TypeScript errors 
}
}catch (error) {
  console.error ('Error setting up profiles table:', error) 
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            AFTER INSERT ON auth.users
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(),
        END IF,
      END

      $$,
    `,
    
    // Execute the creation query using RPC to avoid TypeScript errors
    const { error: createError } = await supabase.rpc('exec', { sql: createTableQuery }),
    
    if (createError) {
      console.error('Error creating profiles table:', createError)
    } else {

  await ensureProfilesTableExists();
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
};
// Call this when the app starts to ensure the table exists export const initializeDatabase = async () => {
  await ensureProfilesTableExists () 
};
  await ensureProfilesTableExists();
};
  await ensureProfilesTableExists();
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
