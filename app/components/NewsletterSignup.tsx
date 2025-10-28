<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "NewsletterSignup | Zion Tech Group",
  description: "Professional newslettersignup services by Zion Tech Group",
  keywords: "newslettersignup, technology, services",
  openGraph: {
    title: "NewsletterSignup | Zion Tech Group",
    description: "Professional newslettersignup services by Zion Tech Group",
    type: "website",
  },
};

export default function NewsletterSignupPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              NewsletterSignup
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional newslettersignup services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our NewsletterSignup Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive newslettersignup solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your newslettersignup needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored newslettersignup solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your newslettersignup services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
=======
import React, { useState } from 'react';

interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
  onSubscribe?: (email: string) => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ onSubscribe, className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (onSubscribe) {
        await onSubscribe(email);
      }
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`newsletter-signup ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          aria-label="Email address for newsletter subscription"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`mt-2 text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
