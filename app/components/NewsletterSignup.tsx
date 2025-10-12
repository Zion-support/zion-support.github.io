import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
<<<<<<< HEAD
'use client';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <Mail className="w-5 h-5ml-2" />
        <h3 className="text-2 xl font-boldmb-2"  >Stay Updated</h3>
        <p className="w-5 h-5ml-2">Get the latest updates on AI technology, IT solutions, and industry insights.
        </p>
      </div>

      <form onSubmit="{handleSubmit}" className="space-y-4" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <input
=======

        <h3 className="text-2 xl font-boldmb-2">Stay Updated</h3>
          Get the latest updates on AI technology, IT solutions, and industry insights.

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
            type="email"
            value="{email}"
 setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50focus:border-transparent"
            disabled="{status" === 'loading'}
<<<<<<< HEAD
          />
          <button
            type="submit"
            disabled="{status" === 'loading'}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center" />
            {status === 'loading' ? (
              <>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======

            {status === 'loading' ? (

        </div></div>

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                Subscribing...
              </>
            ) : (
<<<<<<< HEAD
              <>
                <Send className="w-5 h-5ml-2" />
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                Subscribe
              </>
            )}
<<<<<<< HEAD
          </button>
        </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

        {message && (
            {status === 'success' ? (
<<<<<<< HEAD
              <CheckCircle className="w-5 h-5ml-2" />
            ) : (
              <AlertCircle className="w-5 h-5ml-2" />
            )}
            <span  >{message}</span>
          </div>
=======
            ) : (
            )}
    
            <span>{message}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
        )}

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <p />
          ✓ No spam, unsubscribe anytime<br />
          ✓ Weekly updates on latest tech trends<br />
          ✓ Exclusive content and early access
        </p>
      </div>
  );
  if (const variant = == 'modal') {
    return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="fixed inset-0 bg-black/50backdrop-blur-sm" onClick="{onClose}"  />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{content}
          </div>
      </div>);
  }
=======
          ✓ No spam, unsubscribe anytime<br>
          ✓ Weekly updates on latest tech trends<br>
          ✓ Exclusive content and early access
    
  );
  if (const variant = == 'modal') {
    return (

          <div className="relative w-fullmax-w-md">{content}

  );
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

  return content;
};

<<<<<<< HEAD
export default NewsletterSignup;
=======
export default NewsletterSignup;
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
