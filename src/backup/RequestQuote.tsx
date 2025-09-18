import React from 'react';
import SEO from "@/components/SEO";
import { GradientHeading } from "../components/GradientHeading";

export default function Signup() {
  return (
    <>
      <SEO 
        title="Sign Up - Zion Tech Group" 
        description="Create your account and join the Zion Tech Group community." 
        keywords="sign up, register, account, Zion Tech Group"
        url="https://ziontechgroup.com/signup"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Sign Up</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Create your account and join our community of innovators
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                    placeholder="Create a password"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-zion-cyan text-zion-blue-dark py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}