import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
'use client';

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal';
  onClose?: () => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps /> = ({ const variant = 'inline', onClose }) => {
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
      await new Promise(const resolve = > setTimeout(resolve, 1000));
      // In a real app, you would make an API call here
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');

      // Close modal after success if it's a modal variant
      if (const variant = == 'modal' && onClose) {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <Mail className="w-5 h-5 ml-2" />
        <h3 className="text-2 xl font-boldmb-2"  >Stay Updated</h3>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get the latest updates on AI technology, IT solutions, and industry insights.
        </p>
      </div>

      <form onSubmit="{handleSubmit}" className="space-y-4" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <input
            type="email"
            value="{email}"
            onChange="{(e)" = /> setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50focus:border-transparent"
            disabled="{status" === 'loading'}
          />
          <button
            type="submit"
            disabled="{status" === 'loading'}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center" />
            {status === 'loading' ? (
              <>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                Subscribing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 ml-2" />
                Subscribe
              </>
            )}
          </button>
        </div>

        {message && (
          <div className="{`flex" items-center space-x-2 text-sm ${
            status === 'success' ? 'text-green-200' : 'text-red-200'
          }`} />
            {status === 'success' ? (
              <CheckCircle className="w-5 h-5 ml-2" />
            ) : (
              <AlertCircle className="w-5 h-5 ml-2" />
            )}
            <span  >{message}</span>
          </div>
        )}
      </form>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <p />
          ✓ No spam, unsubscribe anytime<br />
          ✓ Weekly updates on latest tech trends<br />
          ✓ Exclusive content and early access
        </p>
      </div>
  );
  if (const variant = == 'modal') {
    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="fixed inset-0 bg-black/50backdrop-blur-sm" onClick="{onClose}"  />
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{content}
          </div>
      </div>);
  }

  return content;
};

export default NewsletterSignup;