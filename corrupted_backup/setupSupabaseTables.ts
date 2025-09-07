
  try {
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

};
// Call this when the app starts to ensure the table exists export const initializeDatabase = async () => {
  await ensureProfilesTableExists () 
};
