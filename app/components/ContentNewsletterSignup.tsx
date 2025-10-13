import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Zap, Shield, Brain } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  }>;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Zion Tech",
  subtitle = "Get the latest insights on AI, technology trends, and exclusive offers delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe Now",
  features = [
    {
      icon: Brain,
      text: "AI insights and trends"
    },
    {
      icon: Zap,
      text: "Performance optimization tips"
    },
    {
      icon: Shield,
      text: "Security best practices"
    }
  ]
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would make an API call here
      console.log('Subscribing email:', email);
      
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
        <div className="max-w-md mx-auto">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Welcome to Zion Tech!</h3>
          <p className="text-blue-100 mb-6">
            You've successfully subscribed to our newsletter. Check your email for confirmation.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-white underline hover:text-blue-200 transition-colors"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-blue-100 mb-6 text-lg">{subtitle}</p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    {buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;