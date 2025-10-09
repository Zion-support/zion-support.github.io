'use client';
import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, X } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would send this to your backend
      console.log('Newsletter signup:', email);
      
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-dismissed', 'true');
  };

  // Check if newsletter was previously dismissed
  React.useEffect(() => {
    const dismissed = localStorage.getItem('newsletter-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  if (isSubmitted) {
    return (
      <section className="py-16 bg-green-50 dark:bg-green-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Thank You for Subscribing!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                You've successfully subscribed to our newsletter. You'll receive the latest updates 
                about our AI solutions, technology insights, and industry trends.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe Another Email
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss newsletter signup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated with Our Latest Solutions
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Get exclusive insights, technology trends, and early access to our newest AI solutions. 
                  Join thousands of professionals who trust our expertise.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>

                {error && (
                  <div className="mt-4 flex items-center text-red-200 bg-red-500/20 rounded-lg p-3">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
              </form>

              <div className="mt-8 text-center">
                <p className="text-white/70 text-sm">
                  By subscribing, you agree to our{' '}
                  <a href="/privacy" className="text-white underline hover:text-white/80">
                    Privacy Policy
                  </a>
                  . Unsubscribe at any time.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="text-white/80">
                  <div className="text-2xl mb-2">📧</div>
                  <div className="text-sm font-semibold">Weekly Updates</div>
                  <div className="text-xs">Latest tech insights</div>
                </div>
                <div className="text-white/80">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm font-semibold">Exclusive Content</div>
                  <div className="text-xs">Early access to solutions</div>
                </div>
                <div className="text-white/80">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="text-sm font-semibold">No Spam</div>
                  <div className="text-xs">Quality content only</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;