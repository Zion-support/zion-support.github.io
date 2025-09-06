
import { supabase } from "@/integrations/supabase/client";
/**
 * Checks if the profiles table exists and creates it if it doesn't
 * This is a utility function that can be called when the app starts
 */
export const ensureProfilesTableExists = async () => {
  try {
    // Try to execute a simple query to check if the table exists
    const { error } = await supabase.rpc('exec', { 
      sql: `SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'profiles'
      ),`
    }),
    
    // If there's an error, log it and proceed with table creation
    if (error) {
      console.warn("Error checking if profiles table exists, attempting to create it:", error)
    }
    
    // Attempt to create the table and related objects
    const createTableQuery = $2;
        display_name TEXT,
        user_type TEXT,
        profile_complete BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
        bio TEXT,
        avatar_url TEXT,
        headline TEXT
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
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN
          CREATE TRIGGER on_auth_user_created
            AFTER INSERT ON auth.users
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user($2);
        END IF,
      END
      $$,
    `,
    
    // Execute the creation query using RPC to avoid TypeScript errors
    const { error: createError} = await supabase.rpc($2);
    if (createError) {
      console.error('Error creating profiles table:', createError)
    } else {
      console.log('Profiles table setup completed')
    }
  } catch (error) {
    console.error('Error setting up profiles table:', error)
  }
},

// Call this when the app starts to ensure the table exists
export const initializeDatabase = $2;