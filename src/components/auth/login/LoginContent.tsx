import React from 'react';
import { LoginForm } from './LoginForm';

export function LoginContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-zion-slate-light">Sign in to your Zion Tech Group account</p>
        </div>
        
        <div className="bg-zion-blue-dark/80 backdrop-blur-sm rounded-2xl p-8 border border-zion-blue-light/30 shadow-2xl">
          <LoginForm />
        </div>
        
        <div className="text-center mt-6">
          <p className="text-zion-slate-light">
            Don't have an account?{' '}
            <a href="/signup" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}