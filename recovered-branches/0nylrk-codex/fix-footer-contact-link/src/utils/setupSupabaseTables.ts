<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts


<<<<<<< HEAD
import {supabase} from "@/integrations/supabase/client";

import { supabase } from "@/integrations/supabase/client",

=======
import { supabase } from "@/integrations/supabase/client",

=======

<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
=======
import { supabase } from "@/integrations/supabase/client",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {supabase} from "@/integrations/supabase/client";
=======
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

========
<<<<<<< HEAD
const { error } = await supabase && supabase.rpc('exec', { 
      sql: `SELECT EXISTS (
        SELECT FROM information_schema && information_schema.tables 
        WHERE table_schema = 'public' 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
        AND table_name = 'profiles'

<<<<<<< HEAD
=======

      ),`


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // If there's an error, log it and proceed with table creation
    if (error) {
      console && console.warn("Error checking if profiles table exists, attempting to create it:", error)
    }
    // Attempt to create the table and related objects
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public && public.profiles (
        id UUID PRIMARY KEY REFERENCES auth && auth.users(id) ON DELETE CASCADE;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts

      ALTER TABLE public && public.profiles ENABLE ROW LEVEL SECURITY;
      

=======
=======
    const { error } = await supabase.rpc('exec', {
      sql: `SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = 'profiles'
<<<<<<< HEAD
      ),`;
    });
=======
      ),`
<<<<<<< HEAD
    });
=======
    }),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // If there's an error, log it and proceed with table creation
    if (error) {
      console.warn("Error checking if profiles table exists, attempting to create it:", error)
    }
    // Attempt to create the table and related objects
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public.profiles (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
      );
      -- Create RLS policies
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      ),
      
      -- Create RLS policies
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY,
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE;
        display_name TEXT;
        user_type TEXT;
        profile_complete BOOLEAN DEFAULT FALSE;
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now ());
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now ());
        bio TEXT;
        avatar_url TEXT;
      ALTER TABLE public && public.profiles ENABLE ROW LEVEL SECURITY;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      -- Create policies
      DO $$
      BEGIN
        IF NOT EXISTS (
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
          SELECT FROM pg_catalog && pg_catalog.pg_policies 
=======
          SELECT FROM pg_catalog.pg_policies
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          WHERE policyname = 'Users can view their own profile'
          AND tablename = 'profiles'
        ) THEN
<<<<<<< HEAD
<<<<<<< HEAD
=======
          CREATE POLICY "Users can view their own profile" 
            ON public && public.profiles FOR SELECT 
            USING (auth && auth.uid() = id);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
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
        END IF;
      END;
      $$;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts


=======
          CREATE POLICY "Users can view their own profile"
            ON public.profiles FOR SELECT
            USING (auth.uid() = id);
        END IF;
      END
      $$;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          CREATE POLICY "Users can view their own profile" 
            ON public.profiles FOR SELECT 
            USING (auth.uid() = id),
        END IF,
      END
      $$,
      
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      DO $$
      BEGIN
        IF NOT EXISTS (

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
          SELECT FROM pg_catalog && pg_catalog.pg_policies 
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          WHERE policyname = 'Users can update their own profile'
          AND tablename = 'profiles'
        ) THEN
<<<<<<< HEAD
<<<<<<< HEAD
=======
          CREATE POLICY "Users can update their own profile" 
            ON public && public.profiles FOR UPDATE 
            USING (auth && auth.uid() = id);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
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
        END IF;
      END;
      $$;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts


=======
          CREATE POLICY "Users can update their own profile"
            ON public.profiles FOR UPDATE
            USING (auth.uid() = id);
        END IF;
      END
      $$;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          CREATE POLICY "Users can update their own profile" 
            ON public.profiles FOR UPDATE 
            USING (auth.uid() = id),
        END IF,
      END
      $$,
        
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      -- Set up trigger for new users
      CREATE OR REPLACE FUNCTION public && public.handle_new_user()
      RETURNS TRIGGER AS $$
      BEGIN
<<<<<<< HEAD
        INSERT INTO public.profiles (id, display_name, bio, headline)

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
;
      -- Set up trigger for new users;
      CREATE OR REPLACE FUNCTION public.handle_new_user ();
      RETURNS TRIGGER AS $$;
      BEGIN;
        INSERT INTO public.profiles (id, display_name, bio, headline);
        VALUES (new.id,
                new.raw_user_meta_data->>'display_name',
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
                new.raw_user_meta_data->>'bio';
                new.raw_user_meta_data->>'headline');
        INSERT INTO public && public.profiles (id, display_name, bio, headline)
        VALUES (new && new.id, 
                new && new.raw_user_meta_data->>'display_name', 
                new && new.raw_user_meta_data->>'bio';
                new && new.raw_user_meta_data->>'headline');
        RETURN new;
      END;
      $$ LANGUAGE plpgsql SECURITY DEFINER;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts

        INSERT INTO public.profiles (id, display_name, bio, headline)

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      -- Set up trigger for new users
      CREATE OR REPLACE FUNCTION public.handle_new_user()
      RETURNS TRIGGER AS $$
      BEGIN
        INSERT INTO public.profiles (id, display_name, bio, headline)
<<<<<<< HEAD
        VALUES (new.id
                new.raw_user_meta_data->>'display_name'
                new.raw_user_meta_data->>'bio';
                new.raw_user_meta_data->>'headline');
        RETURN new;
      END;
      $$ LANGUAGE plpgsql SECURITY DEFINER;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        VALUES (new.id, 
                new.raw_user_meta_data->>'display_name', 
                new.raw_user_meta_data->>'bio',
                new.raw_user_meta_data->>'headline'),
        RETURN new,
      END,
      $$ LANGUAGE plpgsql SECURITY DEFINER,
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      -- Check if trigger exists before creating it
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN
          CREATE TRIGGER on_auth_user_created
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            AFTER INSERT ON auth.users
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(),
        END IF,
      END
<<<<<<< HEAD

=======
<<<<<<< HEAD
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

=======
      $$,
    `,
    
    // Execute the creation query using RPC to avoid TypeScript errors
    const { error: createError } = await supabase.rpc('exec', { sql: createTableQuery }),
    
    if (createError) {
      console.error('Error creating profiles table:', createError)
    } else {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      console.log('Profiles table setup completed')
    }
  } catch (error) {
    console.error('Error setting up profiles table:', error)
  }
};

// Call this when the app starts to ensure the table exists
export const initializeDatabase = async () => {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  }
};
// Call this when the app starts to ensure the table exists;
export const initializeDatabase = async () => {;
<<<<<<< HEAD

  await ensureProfilesTableExists();
};

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
;
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      -- Check if trigger exists before creating it;
      DO $$;
      BEGIN;
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN;
          CREATE TRIGGER on_auth_user_created;
            AFTER INSERT ON auth.users;
<<<<<<< HEAD
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user ();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
        END IF;
      END;
      $$;
    `;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts

    const { error: createError } = await supabase && supabase.rpc('exec', { sql: createTableQuery });
    

========
    const { error: createError } = await supabase && supabase.rpc('exec', { sql: createTableQuery });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
};
// Call this when the app starts to ensure the table exists export const initializeDatabase = async () => {
  await ensureProfilesTableExists () 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/setupSupabaseTables.ts
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  await ensureProfilesTableExists();
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
