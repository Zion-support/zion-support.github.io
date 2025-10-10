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
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubscribe) {
        onSubscribe(email);
      }
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubscribed) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You for Subscribing!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              You'll receive our latest insights and updates soon.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                    Subscribing...
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {buttonText}
          </div>
        </div>
      </div>
    </div>
  );
};
