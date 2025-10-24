<<<<<<< HEAD
=======
import Footer from './Footer';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
<<<<<<< HEAD
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  }>;
  onSubscribe?: (email: string) => void;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  features = [
    { icon: Star, text: "Exclusive content" },
    { icon: Users, text: "Industry insights" },
    { icon: Globe, text: "Global updates" },
    { icon: Zap, text: "Early access" }
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
=======
    icon: React.ComponentType<{ className?: string }>
    text: string}>
  onSubscribe?: (email: string) => void}constContentNewsletterSignup: React.FC<ContentNewsletterSignupProp s>= ({,
  title= &quot;Stay Updated with Our LatestInsights&quot;
  subtitle= &quot;Get exclusive content, industry insights, and early access to new features delivered to yourinbox.&quot;
  placeholder= &quot;Enter your emailaddress&quot;
  buttonText= &quot;Subscribe&quot;
  features= [
    { icon: Star, text: &quot;Exclusive content&quot,
  },
  {
    icon: Users, text: &quot;Industry insights&quot,
  },
  {
    icon: Globe, text: &quot;Global updates&quot,
  },
  {
    icon: Zap, text: &quot;Early access&quot,
    }
  ]
  onSubscribe
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {,
    e.preventDefault()
    if (!email) return setIsLoadin g(true)
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
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

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Successfully Subscribed!</h3>
        <p className="text-cyan-100">Thank you for subscribing to our newsletter.</p>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-300 text-lg">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
=======
    <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8"> </form><div className="flex flex-col sm: flex-row gap-4">,
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-600 hover: bg-emerald-700 disabled:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center",
            >{isLoading ? 'Subscribing...' : buttonText}
              </button><ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </form>
        
        {isSubscribed && (
          <div className="mt-4 p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg"> </div><p className="text-emerald-400 flex items-center justify-center"> </p><CheckCircle className="h-5 w-5 mr-2" />Thank you for subscribing!
            </CheckCircle></p>
          </div>
        )}
        
        <div className="grid grid-cols-2 md: grid-cols-4 gap-4 mt-8">,
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-300"> </div><feature.icon className="h-5 w-5 text-emerald-400" /> </feature><span className="text-sm">{feature.text}</span>
            </div>
          ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;