'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the email to your backend
      console.log('Newsletter signup:', email);
      
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest News
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI, technology trends, and industry updates delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  disabled={status === 'loading'}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </form>

          {message && (
            <div className={`mt-4 flex items-center justify-center ${
              status === 'success' ? 'text-green-300' : 'text-red-300'
            }`}>
              {status === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-2" />
              )}
              {message}
            </div>
          )}

          <div className="mt-6 text-sm text-white/80">
            <p>We respect your privacy. Unsubscribe at any time.</p>
            <p className="mt-2">
              By subscribing, you agree to our{' '}
              <a href="/privacy" className="text-white hover:text-cyan-300 underline">
                Privacy Policy
              </a>
              {' '}and{' '}
              <a href="/terms" className="text-white hover:text-cyan-300 underline">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;