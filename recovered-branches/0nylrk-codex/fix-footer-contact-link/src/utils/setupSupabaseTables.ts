




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
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
      ),`;
    });
      ),`
    });
    }),
    
    // If there's an error, log it and proceed with table creation
    if (error) {
      console && console.warn("Error checking if profiles table exists, attempting to create it:", error)
    }
    // Attempt to create the table and related objects
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public && public.profiles (
        id UUID PRIMARY KEY REFERENCES auth && auth.users(id) ON DELETE CASCADE;

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
      
      -- Check if trigger exists before creating it
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN
          CREATE TRIGGER on_auth_user_created
            AFTER INSERT ON auth.users
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(),
        END IF,
      END
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



  await ensureProfilesTableExists();
};
