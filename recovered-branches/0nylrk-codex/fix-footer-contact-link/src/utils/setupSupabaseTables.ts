<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client";
import { supabase } from "@/integrations/supabase/client",
=======
<<<<<<< HEAD
<<<<<<< HEAD


import { supabase } from "@/integrations/supabase/client",

=======
=======
import { supabase } from "@/integrations/supabase/client",


import { supabase } from "@/integrations/supabase/client";
import { supabase } from "@/integrations/supabase/client",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {supabase} from "@/integrations/supabase/client";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {supabase} from "@/integrations/supabase/client";
import { supabase } from "@/integrations/supabase/client",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { supabase } from "@/integrations/supabase/client";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
/**
<<<<<<< HEAD
=======
import {supabase} from "@/integrations/supabase/client";
import { supabase } from "@/integrations/supabase/client",/**
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {supabase} from "@/integrations/supabase/client";
import { supabase } from "@/integrations/supabase/client",/**
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
 * Checks if the profiles table exists and creates it if it doesn't
 * This is a utility function that can be called when the app starts
=======
 * Checks if the profiles table exists and creates it if it doesn't;
 * This is a utility function that can be called when the app starts;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */

export const ensureProfilesTableExists = async () => {}
  try {}
    // Try to execute a simple query to check if the table exists"
    const { error } = await supabase.rpc("exec", {}
      sql: `SELECT EXISTS (
        SELECT FROM information_schema && information_schema.tables '
        WHERE table_schema = 'public' 
<<<<<<< HEAD

        AND table_name = 'profiles'
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      ),`

=======
      ),`,
=======
'
        AND table_name = 'profiles'`
      ),`,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // If there's an error, log it and proceed with table creation
    if (error) {
      console.warn(
=======

'
    // If there's an error, log it and proceed with table creation;
    if (error) {}
      console.warn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        "Error checking if profiles table exists, attempting to create it:",
        error,
      );
    }

    // Attempt to create the table and related objects;`
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public && public.profiles (
<<<<<<< HEAD
        id UUID PRIMARY KEY REFERENCES auth && auth.users(id) ON DELETE CASCADE;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
        id UUID PRIMARY KEY REFERENCES auth && auth.users(id) ON DELETE CASCADE;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
      ALTER TABLE public && public.profiles ENABLE ROW LEVEL SECURITY;
      
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
        display_name TEXT,
        user_type TEXT,
        profile_complete BOOLEAN DEFAULT FALSE,'
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),'
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
        bio TEXT,
        avatar_url TEXT,
<<<<<<< HEAD
        headline TEXT
=======
        headline TEXT;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      ),
      
      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY,
      

        display_name TEXT;
        user_type TEXT;
        profile_complete BOOLEAN DEFAULT FALSE;'
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now ());'
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE ('utc', now ());
        bio TEXT;
<<<<<<< HEAD
<<<<<<< HEAD
        avatar_url TEXT;
<<<<<<< HEAD
<<<<<<< HEAD
      ALTER TABLE public && public.profiles ENABLE ROW LEVEL SECURITY;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      -- Create policies
=======

      -- Create policies;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      DO $$
      BEGIN;
        IF NOT EXISTS (

          SELECT FROM pg_catalog && pg_catalog.pg_policies;
          SELECT FROM pg_catalog.pg_policies'
          WHERE policyname = 'Users can view their own profile''
          AND tablename = 'profiles'
<<<<<<< HEAD
        ) THEN
<<<<<<< HEAD
=======
          CREATE POLICY "Users can view their own profile" 
            ON public && public.profiles FOR SELECT 
            USING (auth && auth.uid() = id);

=======
=======
        ) THEN"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

        END IF;
      END;
      $$;


<<<<<<< HEAD
=======
          CREATE POLICY "Users can view their own profile"
            ON public.profiles FOR SELECT
            USING (auth.uid() = id);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        END IF;
      END;
      $$;
"
          CREATE POLICY "Users can view their own profile" 
<<<<<<< HEAD
=======
        avatar_url TEXT;          CREATE POLICY "Users can view their own profile" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        avatar_url TEXT;          CREATE POLICY "Users can view their own profile" 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            ON public.profiles FOR SELECT 
=======
            ON public.profiles FOR SELECT;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            USING (auth.uid() = id),
        END IF,
      END;
      $$,
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


      DO $$
      BEGIN;
        IF NOT EXISTS (

<<<<<<< HEAD
          SELECT FROM pg_catalog && pg_catalog.pg_policies 
<<<<<<< HEAD
=======
          SELECT FROM pg_catalog && pg_catalog.pg_policies 
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          WHERE policyname = 'Users can update their own profile'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          SELECT FROM pg_catalog && pg_catalog.pg_policies;
'
          WHERE policyname = 'Users can update their own profile''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          AND tablename = 'profiles'
        ) THEN"
          CREATE POLICY "Users can update their own profile" 
<<<<<<< HEAD
            ON public && public.profiles FOR UPDATE 
            USING (auth && auth.uid() = id);;
=======
            ON public && public.profiles FOR UPDATE;
            USING (auth && auth.uid() = id);

'
          WHERE policyname = 'Users can update their own profile''
          AND tablename = 'profiles'
        ) THEN;
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      DO $$;
      BEGIN;
        IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_policies;'
          WHERE policyname = 'Users can update their own profile';'
          AND tablename = 'profiles') THEN;"
          CREATE POLICY "Users can update their own profile";
            ON public.profiles FOR UPDATE;
            USING (auth.uid () = id);
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        END IF;
      END
      $$;        END IF;
      END;
      $$;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
          CREATE POLICY "Users can update their own profile"
            ON public.profiles FOR UPDATE
            USING (auth.uid() = id);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        END IF;
      END
      $$;
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          CREATE POLICY "Users can update their own profile" 
            ON public.profiles FOR UPDATE;
            USING (auth.uid() = id),
        END IF,
      END;
      $$,
        

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      -- Set up trigger for new users
      CREATE OR REPLACE FUNCTION public && public.handle_new_user()
      RETURNS TRIGGER AS $$
      BEGIN                new.raw_user_meta_data->>'bio';
=======
      -- Set up trigger for new users;
      CREATE OR REPLACE FUNCTION public && public.handle_new_user()
      RETURNS TRIGGER AS $$
      BEGIN;
;
      -- Set up trigger for new users;
      CREATE OR REPLACE FUNCTION public.handle_new_user ();
      RETURNS TRIGGER AS $$;
      BEGIN;
        INSERT INTO public.profiles (id, display_name, bio, headline);
        VALUES (new.id,'
                new.raw_user_meta_data->>'display_name',


'
                new.raw_user_meta_data->>'bio';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                new.raw_user_meta_data->>'headline');
        INSERT INTO public && public.profiles (id, display_name, bio, headline)
        VALUES (new && new.id, '
                new && new.raw_user_meta_data->>'display_name', '
                new && new.raw_user_meta_data->>'bio';'
                new && new.raw_user_meta_data->>'headline');
        RETURN new;
      END;
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        RETURN new;
      END;
      $$ LANGUAGE plpgsql SECURITY DEFINER;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        VALUES (new.id, 
                new.raw_user_meta_data->>'display_name', 
                new.raw_user_meta_data->>'bio',
=======
        VALUES (new.id, '
                new.raw_user_meta_data->>'display_name', '
                new.raw_user_meta_data->>'bio','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                new.raw_user_meta_data->>'headline'),
        RETURN new,
      END,
      $$ LANGUAGE plpgsql SECURITY DEFINER,
      


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      -- Check if trigger exists before creating it
=======

      -- Check if trigger exists before creating it;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      $$,`
    `,
    
    // Execute the creation query using RPC to avoid TypeScript errors'
    const { error: createError } = await supabase.rpc('exec', { sql: createTableQuery }),
    
    if (createError) {'
      console.error('Error creating profiles table:', createError)
<<<<<<< HEAD
    } else {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // // // console.log('Profiles table setup completed')
=======
    } else {'
      // // // console.log('Profiles table setup completed')";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
      $$ LANGUAGE plpgsql SECURITY DEFINER;      -- Check if trigger exists before creating it
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN
          CREATE TRIGGER on_auth_user_created  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
// Call this when the app starts to ensure the table exists;
export const initializeDatabase = async () => {;
<<<<<<< HEAD
  await ensureProfilesTableExists();
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  await ensureProfilesTableExists()
};
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      $$ LANGUAGE plpgsql SECURITY DEFINER;      -- Check if trigger exists before creating it
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN
          CREATE TRIGGER on_auth_user_created  }
};
// Call this when the app starts to ensure the table exists;
export const initializeDatabase = async () => {;

  await ensureProfilesTableExists()
};
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
