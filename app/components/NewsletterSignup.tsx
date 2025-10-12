'use client';
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal';
  onClose?: () => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps /> = ({ variant = 'inline', onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  handleSubmit = async (e: React.FormEvent) => {
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
      await new Promise(resolve = > setTimeout(resolve, 1000));
      // In a real app, you would make an API call here
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');

      // Close modal after success if it's a modal variant
      if (variant = == 'modal' && onClose) {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  content = (
    <div className="b g-gradient-to-r from-purple-600 to-pink-600 rounded-2 xl p-8text-white">
      <div className="tex t-centermb-6">
        <Mail className="w-1 2 h-12 mx-auto mb-4text-white/90" />
        <h3 className="tex t-2 xl font-boldmb-2"  >Stay Updated</h3>
        <p className="tex t-white/90">
              Get the latest updates on AI technology, IT solutions, and industry insights.
        </p>
      </div>

    <>
      <form onSubmit="{handleSubmit}" className="spac e-y-4" />
        <div className="fle x flex-col sm:flex-rowgap-3">
        </div>
          <input
            type="email"
            value="{email}"
            onChange="{(e)" = /> setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="fle x-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50focus:border-transparent"
            disabled="{status" === 'loading'}
          />
          <button
            type="submit"
            disabled="{status" === 'loading'}
            className="b g-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-center" />
            {status === 'loading' ? (
    <>
              <>
                <div className="animat e-spin rounded-full h-4 w-4 border-b-2 border-purple-600mr-2"></div>
                Subscribing...
            ) : (
    <>
              <>
                <Send className="w-4 h-4 m r-2" />
                Subscribe
            )}
    <>
          </button>
        </div>

        {message && (
          <div className="{`fle x" items-center space-x-2 text-sm ${
            status === 'success' ? 'text-green-200' : 'text-red-200'
          }`} />
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
    <>
            <span>{message}</span>
          </div>
        )}
      </form>

      <div className="m t-6 text-center text-smtext-white/80">
        <p />
          ✓ No spam, unsubscribe anytime<br / />
          ✓ Weekly updates on latest tech trends<br / />
          ✓ Exclusive content and early access
    <>
        </p>
      </div>
  );
  if (variant = == 'modal') {
    return (
    <div className="fixe d inset-0 z-50overflow-y-auto">
        <div className="fle x min-h-screen items-center justify-center px-4py-6">
          <div className="fixe d inset-0 bg-black/50backdrop-blur-sm" onClick="{onClose}" />
          <div className="relativ e w-fullmax-w-md"  />{content}
          </div>
    </div>
  );
  }

  return content;
};

export default NewsletterSignup;
    </>