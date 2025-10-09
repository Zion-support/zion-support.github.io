'use client';
import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would make an API call here
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="cyber-card p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4 neon-text">
          Stay Ahead with AI Innovations
        </h2>
        
        <p className="text-lg text-gray-300 mb-8">
          Get exclusive insights, updates, and early access to our latest AI solutions. 
          Join 10,000+ professionals who trust us for cutting-edge technology updates.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                disabled={status === 'loading'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="cyber-button px-6 py-3 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Status Message */}
          {message && (
            <div className={`flex items-center justify-center space-x-2 p-3 rounded-lg ${
              status === 'success' 
                ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                : 'bg-red-500/20 text-red-400 border border-red-400/30'
            }`}>
              {status === 'success' ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span className="text-sm">{message}</span>
            </div>
          )}
        </form>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-400">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Unsubscribe anytime</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Weekly updates</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cyan-400/20">
          <p className="text-sm text-gray-400">
            By subscribing, you agree to our{' '}
            <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;