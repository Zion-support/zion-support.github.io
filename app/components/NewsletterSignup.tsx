'use client';
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal';
  onClose?: () => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ variant = 'inline', onClose }) => {
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

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real app, you would make an API call here
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');

      // Close modal after success if it's a modal variant
      if (variant === 'modal' && onClose) {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const content = (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Stay Updated
        </h3>
        <p className="text-gray-300">
          Get the latest news and updates from Zion Tech Group
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={status === 'loading'}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
        </button>

        {message && (
          <div className={`text-center text-sm ${
            status === 'error' ? 'text-red-400' : 'text-green-400'
          }`}>
            {status === 'error' && <AlertCircle className="inline w-4 h-4 mr-1" />}
            <span>{message}</span>
          </div>
        )}
      </form>

      <div className="mt-6 text-center text-sm text-white/80">
        <p>
          ✓ No spam, unsubscribe anytime<br />
          ✓ Weekly updates on latest tech trends<br />
          ✓ Exclusive content and early access
        </p>
      </div>
    </div>
  );

  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4 py-6">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <div className="relative w-full max-w-md">
            {content}
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default NewsletterSignup;