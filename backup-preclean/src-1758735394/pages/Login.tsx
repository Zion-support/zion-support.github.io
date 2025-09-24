import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Login() {
  return (
    <>
      <SEO 
        title="Login - Zion Tech Group" 
        description="Sign in to your Zion Tech Group account." 
        keywords="login, sign in, account, Zion Tech Group"
        url="https://ziontechgroup.com/login"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Login</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Sign in to your account
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white rounded-lg focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white rounded-lg focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-zion-cyan text-zion-blue-dark py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}