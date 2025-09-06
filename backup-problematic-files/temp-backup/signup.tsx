import Link from \'next/link\'; import Head from \'next/head\'; export default function Signup() { return ( <> <Head> <title>Sign Up - Zion Tech Group</title> <meta name=\"description\" content=\"Create your Zion Tech Group account to access our services and solutions.\" /> <meta name=\"keywords\" content=\"signup,register,account creation,new user,registration\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white\"> <div className=\"max-w-md mx-auto px-4 py-16\"> <div className=\"text-center mb-8\"> <h1 className=\"text-3xl font-bold mb-4\">Sign Up</h1> <p className=\"text-slate-300\">Create your account to get started</p> </div> <div className=\"bg-slate-900/60 rounded-lg border border-white/10 p-8\"> <form className=\"space-y-6\"> <div> <label htmlFor=\"name\" className=\"block text-sm font-medium mb-2\"> Full Name </label> <input type=\"text\" id=\"name\" className=\"w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500\" placeholder=\"Enter your full name\" /> </div> <div> <label htmlFor=\"email\" className=\"block text-sm font-medium mb-2\"> Email Address </label> <input type=\"email\" id=\"email\" className=\"w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500\" placeholder=\"Enter your email\" /> </div> <div> <label htmlFor=\"password\" className=\"block text-sm font-medium mb-2\"> Password </label> <input type=\"password\" id=\"password\" className=\"w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500\" placeholder=\"Create a password\" /> </div> <div> <label htmlFor=\"confirmPassword\" className=\"block text-sm font-medium mb-2\"> Confirm Password </label> <input type=\"password\" id=\"confirmPassword\" className=\"w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500\" placeholder=\"Confirm your password\" /> </div> <button type=\"submit\" className=\"w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors\" > Create Account </button> </form> <div className=\"mt-6 text-center\"> <p className=\"text-slate-400\"> Already have an account?{\' \'} <Link href=\"/login\" className=\"text-blue-400 \"hover\": text-blue-300\"> Login </Link> </p> </div> </div> </div> </main> </> )}
import React from 'react';

interface SignupProps {
  className?: string;
}

const Signup: React.FC<SignupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Signup</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
