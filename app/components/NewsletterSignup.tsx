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
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 mx-auto mb-4 text-white/90" />
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-white/90">
          Get the latest updates on AI technology, IT solutions, and industry insights.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {status === 'loading' ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"></div>
                Subscribing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </>
            )}
          </button>
        </div>

        {message && (
          <div className={`flex items-center space-x-2 text-sm ${
            status === 'success' ? 'text-green-200' : 'text-red-200'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
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
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
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
    </div>);
  }

  return content;
};

export default NewsletterSignup;