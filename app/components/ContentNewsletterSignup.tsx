'use client'
import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle } from 'lucide-react''use client'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  features?: Array<{



}
    icon: React.ComponentType<{ className?: string; ;};>;
    text: strin;g;};>;
  onSubscribe?: (email: string) => void}constContentNewsletterSignup:React.FC<ContentNewsletterSignupProp s>=; ;(;{;
  title= "Stay Updated with Our LatestInsights"
  subtitle= "Get exclusive content, industry insights, and early access to new features delivered to yourinbox."
  placeholder= "Enter your emailaddress"
  buttonText= "Subscribe"
  features= [
    { icon:  ;S;t;a;r, text: "Exclusive content&q;u;o;t;
  }
  {
    icon: U;s;e;r;s, text: "Industry insights&q;u;o;t;
  }
  {
    icon: G;l;o;b;e, text: "Global updates&q;u;o;t;
  }
  {
    icon:  ; ;Z;a;p, text: "Early access&q;u;o;t;
  ]
  onSubscribe
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) =;>; ;{;
    e.preventDefault();
    if (!email) return
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (onSubscribe) {
        onSubscribe(email);
      }
      setIsSubscribed(true);
      setEmail('');
    } catch(error) {";'"
console.error('Subscription failed: "'",error);
    } finally {;
setIsSubmitting(false)}"
  return(</>"
    <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-16 px-4" />,"
    <div className="max-w-4 xl mx-auto text-center" />,"
    <h1 className="text-4 xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8"></form>
          <div className="flex flex-col sm: flex-row gap-4"></d;i;v;>;
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-emerald-500 f;o;c;u;
  s: border-transparent";
              required
            /></input>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-600 hover: bg-emerald-700 disa;b;l;e;
  d: bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center";
            >
              {isLoading ? 'Subscribing...' : buttonText}</button>
              <ArrowRight className="ml-2 h-4 w-4" /  />;
            </button>
        </form>;
        {isSubscribed && (,"
    <div className="mt-4 p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg" />"
            <p className="text-emerald-400 flex items-center justify-center" / />"
              <CheckCircle className="h-5 w-5 mr-2"  />;
Thank you for subscribing!</CheckCircle>;
            </p>
          
        )}
        
        <div className="grid grid-cols-2 md: grid-cols-4 gap-4 mt-8"></d;i;v;>;
          {features.map((feature, index) => (</div>
            <div key={index} className="flex items-center space-x-2 text-gray-300"></div>
              <feature.icon className="h-5 w-5 text-emerald-400" /></feature>
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
    </>
  );
};

export default ContentNewsletterSignup;
;
}
