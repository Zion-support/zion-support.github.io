'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Star, Users, Clock, Award } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  benefits?: string[];
  onSubscribe?: (email: string) => void;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = 'Stay Updated with Our Latest Insights',
  description = 'Get exclusive access to AI trends, industry news, and expert insights delivered directly to your inbox.',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe Now',
  benefits = [
    'Weekly AI insights and trends',
    'Exclusive industry reports',
    'Early access to new features',
    'No spam, unsubscribe anytime'
  ],
  onSubscribe
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Call the onSubscribe callback if provided
      if (onSubscribe) {
        onSubscribe(email);
      }
      
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Subscribers',
      description: 'Join our growing community'
    },
    {
      icon: Clock,
      value: 'Weekly',
      label: 'Updates',
      description: 'Fresh content delivered regularly'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by our readers'
    },
    {
      icon: Award,
      value: '100%',
      label: 'Free',
      description: 'No cost, just valuable insights'
    }
  ];

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Welcome to Our Community!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for subscribing! You'll receive our latest insights and updates soon.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      {buttonText}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-cyan-400 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;
