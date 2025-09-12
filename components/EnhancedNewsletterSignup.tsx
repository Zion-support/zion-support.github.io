import React, { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'hero' | 'sidebar';
  showBenefits?: boolean;
  showTestimonials?: boolean;
  className?: string;
}

export default function EnhancedNewsletterSignup({
  variant = 'default',
  showBenefits = true,
  showTestimonials = true,
  className = ''
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          container: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16',
          title: 'text-4xl md:text-5xl font-bold mb-4',
          subtitle: 'text-xl md:text-2xl mb-8 opacity-90',
          form: 'max-w-md mx-auto',
          input: 'w-full px-6 py-4 rounded-lg text-gray-900 text-lg',
          button: 'bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg'
        };
      case 'compact':
        return {
          container: 'bg-gray-50 py-8',
          title: 'text-2xl font-bold text-gray-900 mb-2',
          subtitle: 'text-gray-600 mb-6',
          form: 'flex flex-col sm:flex-row gap-4 max-w-lg',
          input: 'flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900',
          button: 'bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
        };
      case 'sidebar':
        return {
          container: 'bg-white border border-gray-200 p-6 rounded-lg',
          title: 'text-lg font-semibold text-gray-900 mb-2',
          subtitle: 'text-sm text-gray-600 mb-4',
          form: 'space-y-3',
          input: 'w-full px-3 py-2 rounded border border-gray-300 text-gray-900 text-sm',
          button: 'w-full bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors text-sm'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-indigo-50 to-purple-50 py-12',
          title: 'text-3xl font-bold text-gray-900 mb-4',
          subtitle: 'text-lg text-gray-600 mb-8',
          form: 'max-w-lg mx-auto',
          input: 'w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900',
          button: 'bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
        };
    }
  };

  const styles = getVariantStyles();

  if (isSubscribed) {
    return (
      <div className={`${styles.container} ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className={`${styles.title} text-green-600`}>
            Welcome to the AI Revolution!
          </h2>
          <p className={`${styles.subtitle} text-green-700`}>
            You're now part of 50,000+ AI professionals getting exclusive insights, case studies, and implementation guides.
          </p>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg max-w-2xl mx-auto mt-6">
            <h3 className="text-lg font-semibold mb-3">What happens next?</h3>
            <ul className="text-sm space-y-2 text-left">
              <li>• You'll receive our weekly AI insights newsletter</li>
              <li>• Get early access to new case studies and guides</li>
              <li>• Invitations to exclusive AI strategy webinars</li>
              <li>• Direct access to our AI implementation templates</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className={styles.title}>
            Stay Ahead of the AI Revolution
          </h2>
          <p className={styles.subtitle}>
            Join 50,000+ AI professionals getting exclusive insights, case studies, and implementation guides delivered weekly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Newsletter Form */}
          <div className={styles.form}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={styles.input}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.button} w-full disabled:opacity-50`}
              >
                {isSubmitting ? 'Subscribing...' : 'Get Free AI Insights'}
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3 text-center">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>

          {/* Benefits or Testimonials */}
          <div className="space-y-6">
            {showBenefits && (
              <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">What you'll get:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Weekly AI insights and trend analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Exclusive case studies from Fortune 500 companies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Free access to AI implementation templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Invitations to exclusive AI strategy webinars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Early access to new AI tools and resources</span>
                  </li>
                </ul>
              </div>
            )}

            {showTestimonials && (
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <p className="text-sm italic mb-2">
                    "The AI insights newsletter has been invaluable for our enterprise transformation. We've implemented 3 strategies that delivered 200% ROI."
                  </p>
                  <div className="text-xs font-semibold">- Sarah Chen, CTO at TechCorp</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <p className="text-sm italic mb-2">
                    "Best AI newsletter I've subscribed to. The case studies are incredibly detailed and actionable."
                  </p>
                  <div className="text-xs font-semibold">- Michael Rodriguez, AI Director</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold">50,000+</div>
            <div className="text-sm opacity-75">Subscribers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm opacity-75">Open Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">400%</div>
            <div className="text-sm opacity-75">Avg ROI</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Weekly</div>
            <div className="text-sm opacity-75">Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}