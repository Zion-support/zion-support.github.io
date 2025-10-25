<<<<<<< HEAD
=======
'use client';
>>>>>>> origin/main
import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ContentNewsletterSignupProps {
<<<<<<< HEAD
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  features?: Array<{}
    icon: React.ComponentType<{ className?: string }>
    text: string}>
  onSubscribe?: (email: string) => void}constContentNewsletterSignup:React.FC<ContentNewsletterSignupProp s>= ({
  title= "Stay Updated with Our LatestInsights"
  subtitle= "Get exclusive content, industry insights, and early access to new features delivered to yourinbox."
  placeholder= "Enter your emailaddress"
  buttonText= "Subscribe"
  features= [
    { icon: Star, text: "Exclusive content&quot
  },
  {
    icon: Users, text: "Industry insights&quot
  },
  {
    icon: Globe, text: "Global updates&quot
  },
  {
    icon: Zap, text: "Early access&quot,
  ]
=======
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (_email: string) => Promise<void>;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated",
  subtitle = "Get the latest insights and updates delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
>>>>>>> origin/main
  onSubscribe
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
<<<<<<< HEAD
=======
    
>>>>>>> origin/main
    try {
      if (onSubscribe) {
        await onSubscribe(email);
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
<<<<<<< HEAD
      setIsSubmitting(false),}
  return (</ContentNewsletterSignupProp>
    <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-16 px-4"></div>
      <div className="max-w-4xl mx-auto text-center"></div>
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8"></form>
          <div className="flex flex-col sm:flex-row gap-4"></div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focu,
  s:border-transparent"
              required
            /></input>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-700 disable,
  d:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              {isLoading ? 'Subscribing...' : buttonText}</button>
              <ArrowRight className="ml-2 h-4 w-4" /></ArrowRight>
            </button>
          </div>
        </form>
        
        {isSubscribed && (
          <div className="mt-4 p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg"></div>
            <p className="text-emerald-400 flex items-center justify-center"></p>
              <CheckCircle className="h-5 w-5 mr-2" />
              Thank you for subscribing!</CheckCircle>
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {features.map((feature, index) => (</div>
            <div key={index} className="flex items-center space-x-2 text-gray-300"></div>
              <feature.icon className="h-5 w-5 text-emerald-400" /></feature>
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
=======
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Our Community!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Thank you for subscribing. You'll receive our latest insights and updates soon.
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
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {subtitle}
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
              
              <p className="text-sm text-blue-200 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
>>>>>>> origin/main
        </div>
    </div>);
};

export default ContentNewsletterSignup;