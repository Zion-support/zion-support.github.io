<<<<<<< HEAD
// import {createClient} AuthError; AuthApiError } from '@supabase/supabase-js' import type {NextApiRequest} NextApiResponse } from' 'next' import type {User} Session } from' '@supabase/supabase-js' // Define expected request body structure interface LoginRequestBody {/* TODO: Fix JSX expression */}
  r: string} // console.error(errorMessage)} throw new Error(errorMessage)} const supabase = createClient(supabaseUrl) serviceKey); return res.status(405).json({/* TODO: Fix JSX expression */})
=======
// import {createClient} AuthError; AuthApiError } from '@supabase/supabase-js' import type {NextApiRequest} NextApiResponse } from' 'next' import type {User} Session } from' '@supabase/supabase-js' // Define expected request body structure interface LoginRequestBody {/* TODO: Fix JSX expression */};
  r: string} // // console.error removed for production
} throw new Error(errorMessage)} const supabase = createClient(supabaseUrl) serviceKey); return res.status(405).json({/* TODO: Fix JSX expression */})
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  r: `Method ${req.method} Not Allowed` })} try {const { email} password } = req.body as LoginRequestBody; if (!email || !password) {} // Attempt to sign in with Supabase const {data} error } = await supabase.auth.signInWithPassword({email) password} }); if (error) {}'
`