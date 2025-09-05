 return (<> <Head> <title>Create Account - Zion Tech Marketplace</title> <meta name="description" content="Create your Zion Tech Marketplace account" /> </Head> <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" > <div className="max-w-md w-full space-y-8" > <div> <img /> <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" > Create your account </h2> <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500 underline" > sign in if you already have an account </Link> </p> </div> <SignupForm onSuccess= {
  handleSuccess 
}/> </div> <div className="relative flex justify-center text-sm" > <span className="px-2 bg-gray-50 text-gray-500" >Or continue with</span> </div> </div> 
};
export default RegisterPage;
