
import { supabase } from "@/integrations/supabase/client";
import { supabase } from "@/integrations/supabase/client",
import {supabase} from "@/integrations/supabase/client";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { supabase } from "@/integrations/supabase/client",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
/**
 * Checks if the profiles table exists and creates it if it doesn't
 * This is a utility function that can be called when the app starts
 */

export const ensureProfilesTableExists = async () => {
  try {
    // Try to execute a simple query to check if the table exists

    const { error } = await supabase && supabase.rpc('exec', { 
      sql: `SELECT EXISTS (
        SELECT FROM information_schema && information_schema.tables 
        WHERE table_schema = 'public' 

        AND table_name = 'profiles'

    // If there's an error, log it and proceed with table creation
    if (error) {
      console && console.warn("Error checking if profiles table exists, attempting to create it:", error)
    }
    // Attempt to create the table and related objects
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public && public.profiles (
        id UUID PRIMARY KEY REFERENCES auth && auth.users(id) ON DELETE CASCADE;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      -- Create policies
      DO $$
      BEGIN
        IF NOT EXISTS (

          SELECT FROM pg_catalog && pg_catalog.pg_policies 
          WHERE policyname = 'Users can view their own profile'
          AND tablename = 'profiles'
        ) THEN
=======
          CREATE POLICY "Users can view their own profile" 
            ON public && public.profiles FOR SELECT 
            USING (auth && auth.uid() = id);

        END IF;
      END
      $$;
          CREATE POLICY "Users can view their own profile" 
            ON public.profiles FOR SELECT 
            USING (auth.uid() = id),
        END IF,
      END
      $$,
      

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        END IF;
      END
      $$;
          CREATE POLICY "Users can update their own profile" 
            ON public.profiles FOR UPDATE 
            USING (auth.uid() = id),
        END IF,
      END
      $$,
        

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        RETURN new;
      END;
      $$ LANGUAGE plpgsql SECURITY DEFINER;
        VALUES (new.id, 
                new.raw_user_meta_data->>'display_name', 
                new.raw_user_meta_data->>'bio',
                new.raw_user_meta_data->>'headline'),
        RETURN new,
      END,
      $$ LANGUAGE plpgsql SECURITY DEFINER,
      


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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
  await ensureProfilesTableExists();
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
