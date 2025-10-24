'use client';
import React, { useState } from 'react';
import { AlertCircle, Mail, Send, CheckCircle, X } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal';
  onClose?: () => void;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = 'inline',
  onClose,
  className = ''
}) => {
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

    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would make an API call here
      setStatus('success');
      setMessage('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const isModal = variant === 'modal';

  const content = (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 ${className}`}>
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <div className="text-center mb-6">
        <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-300">
          Get the latest news and updates delivered to your inbox
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            disabled={status === 'loading'}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Subscribing...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Subscribe
            </>
          )}
        </button>

        {/* Status Message */}
        {message && (
          <div className={`p-3 rounded-lg flex items-center space-x-2 ${
            status === 'success' 
              ? 'bg-green-500/10 border border-green-500/20 text-green-300'
              : 'bg-red-500/10 border border-red-500/20 text-red-300'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="text-sm">{message}</span>
          </div>
        )}
      </form>

      <p className="text-xs text-gray-400 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="relative max-w-md w-full">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

export default NewsletterSignup;