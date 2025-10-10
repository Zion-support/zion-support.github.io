'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    text: string]
    }>;
  onSubscribe?: (email: string) => void]
    }

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps></ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe Now",
  features = [
    {
      icon: CheckCircle,
      text: "Weekly industry insights"]
    },
    {
      icon: Star,
      text: "Exclusive content and tips"]
    },
    {
      icon: Users,
      text: "Join 10,000+ subscribers"]
    },
    {
      icon: Globe,
      text: "Global community access"]
    }
  ],
  onSubscribe]
    }); => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      if (onSubscribe) {
        await onSubscribe(email)]
    } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))]
    }
      
      setIsSubscribed(true);
      setEmail('')]
    } catch (error) {
      console.error('Subscription failed:', error)]
    } finally {
      setIsLoading(false)]
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-16 px-4"></div>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            Welcome to Our Community!
          </h2>
          <p className="text-xl text-blue-100 mb-8">>
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          </p>
          <button
            onClick={() =></button> setIsSubscribed(false);
            className="text-white underline hover:text-blue-200 transition-colors"
          >
            Subscribe another email
          </button>
        >
      </div>
    )]
    }

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-16 px-4"></div>
      <div className="max-w-6xl mx-auto"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              {title}
            </h2>
            <p className="text-xl text-blue-100 mb-8">>
              {subtitle}
            </p>
            
            <div className="space-y-4"></div>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3"></div>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"></div>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-100"></spa>{feature.text}</span>
                >
              ));
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"></div>
            <form onSubmit={handleSubmit} className="space-y-6"></form>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2"></label>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value);
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"></button>
                {isLoading ? (
                  <>
                    <div>
                    Subscribing...
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                );
              </button>
              
              <p className="text-sm text-blue-200 text-center">>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          >
        </div>
      >
    </div>
  )]
    };

export default ContentNewsletterSignup;
}