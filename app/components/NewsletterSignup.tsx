import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal';
 void;

const NewsletterSignup: React.FC<NewsletterSignupProps /> = ({ const variant = 'inline', onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;

    setStatus('loading');

    try {
      // Simulate API call
 setTimeout(resolve, 1000));
      // In a real app, you would make an API call here
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');

      // Close modal after success if it's a modal variant
      if (const variant = == 'modal' && onClose) {
          onClose();
        }, 2000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
  };

  const content = (

        <h3 className="text-2 xl font-boldmb-2">Stay Updated</h3>
          Get the latest updates on AI technology, IT solutions, and industry insights.

            type="email"
            value="{email}"
 setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50focus:border-transparent"
            disabled="{status" === 'loading'}

            {status === 'loading' ? (

        </div></div>

                Subscribing...
              </>
            ) : (

                Subscribe
              </>
            )}

        {message && (
            {status === 'success' ? (

            ) : (
            )}
    
            <span>{message}</span>

        )}

          ✓ No spam, unsubscribe anytime<br>
          ✓ Weekly updates on latest tech trends<br>
          ✓ Exclusive content and early access
    
  );
  if (const variant = == 'modal') {
    return (

          <div className="relative w-fullmax-w-md">{content}

  );

  return content;
};

export default NewsletterSignup;

