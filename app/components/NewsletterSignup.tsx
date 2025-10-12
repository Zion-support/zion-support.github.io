<<<<<<< HEAD
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

            ) : (

                Subscribe

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

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSignup() {
  return (
    <>
      <Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>
        <meta name="description" content="Professional newsletter signup by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Newsletter Signup</h1>
          <p className="text-lg text-gray-300 mb-8">Professional newsletter signup coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
