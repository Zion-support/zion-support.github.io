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
      // Simulate API call;
await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real app, you would make an API call here;
setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');

      // Close modal after success if it's a modal variant;
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
    <div>
      <div>
        <Mail className="w-12 h-12 mx-auto mb-4 text-white/90" />
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-white/90">
          Get the latest updates on AI technology, IT solutions, and industry insights.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input;
type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            disabled={status === 'loading'}
          />
          <button;
type="submit"
            disabled={status === 'loading'}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {status === 'loading' ? (
              <>
                <div></div>
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
          <div>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span>{message}</span>
          </div>
        )}
      </form>

      <div>
        <p>
          ✓ No spam, unsubscribe anytime<br></br>
          ✓ Weekly updates on latest tech trends<br></br>
          ✓ Exclusive content and early access
        </p>
      </div>
    </div>
  );

  if (variant === 'modal') {
    return (
    <div>
        <div>
          <div>
          <div>
            {content}
          </div>
        </div>
      </div>
    </div>);
  }

  return content;
};

export default NewsletterSignup;