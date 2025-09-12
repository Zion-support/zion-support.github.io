import React, { useState } from 'react';

interface NewsletterProps {
  variant?: 'default' | 'featured' | 'minimal';
  showStats?: boolean;
  showBenefits?: boolean;
}

export default function EnhancedNewsletter({ 
  variant = 'default', 
  showStats = true, 
  showBenefits = true 
}: NewsletterProps) {
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
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
          input: 'bg-white text-gray-900 placeholder-gray-500',
          button: 'bg-white text-blue-600 hover:bg-gray-100',
          text: 'text-white',
          subtitle: 'text-white opacity-90'
        };
      case 'minimal':
        return {
          container: 'bg-gray-50',
          card: 'bg-white border border-gray-200',
          input: 'bg-white border border-gray-300',
          button: 'bg-gray-900 text-white hover:bg-gray-800',
          text: 'text-gray-900',
          subtitle: 'text-gray-600'
        };
      default:
        return {
          container: 'bg-gray-900 text-white',
          card: 'bg-white text-gray-900',
          input: 'bg-white border border-gray-300',
          button: 'bg-blue-600 text-white hover:bg-blue-700',
          text: 'text-white',
          subtitle: 'text-gray-300'
        };
    }
  };

  const styles = getVariantStyles();

  if (isSubscribed) {
    return (
      <section className={`py-16 ${styles.container}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Welcome to the AI Revolution!</h2>
            <p className="text-lg opacity-90 mb-6">
              You're now part of our exclusive community of 10,000+ AI professionals. 
              Check your email for a special welcome gift.
            </p>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="font-semibold mb-2">What's Next?</h3>
              <ul className="text-sm space-y-1 text-left">
                <li>• Weekly AI insights delivered every Tuesday</li>
                <li>• Exclusive case studies and implementation guides</li>
                <li>• Early access to new resources and tools</li>
                <li>• Invitation to our private AI community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 ${styles.container}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${styles.text}`}>
            📧 Stay Ahead with AI Insights
          </h2>
          <p className={`text-xl max-w-2xl mx-auto mb-8 ${styles.subtitle}`}>
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
          </p>
        </div>

        <div className={`${styles.card} rounded-xl shadow-lg p-8 max-w-2xl mx-auto`}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${styles.input}`}
                required
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${styles.button} ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </div>
            <p className="text-sm text-gray-500 text-center">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>

          {showBenefits && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">
                <strong>What you'll get:</strong>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>📊</span>
                  <span>Weekly AI insights & trends</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📚</span>
                  <span>Exclusive case studies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🛠️</span>
                  <span>Free resources & templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🚀</span>
                  <span>Early access to new content</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {showStats && (
          <div className="mt-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className={`text-3xl font-bold mb-2 ${styles.text}`}>10,000+</div>
                <div className={`text-sm ${styles.subtitle}`}>Subscribers</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 ${styles.text}`}>4.9/5</div>
                <div className={`text-sm ${styles.subtitle}`}>Rating</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 ${styles.text}`}>Weekly</div>
                <div className={`text-sm ${styles.subtitle}`}>Updates</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 ${styles.text}`}>Free</div>
                <div className={`text-sm ${styles.subtitle}`}>Forever</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}