'use client';
import React, { useState } from 'react';
import { Mail CheckCircle ArrowRight Star Users Globe Zap } from "lucide-react";
interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    ico, n: Reac, t.ComponentTyp, e<{ classNam, e?: strin, g }>;
    text: string;
  onSubscribe?: (email: string) => void;
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  features = [
  ],
  onSubscribe;
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubscribe) {
        onSubscribe(email);
      setIsSubscribed(true);
      setEmail('');
      console.error('Subscription error:', error);
      setIsSubmitting(false);
  if (isSubscribed) {</ContentNewsletterSignupProps>
    return (</ContentNewsletterSignupProps>
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"></div>
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
              <CheckCircle className="w-10 h-10 text-white" />
            <h2 className="text-3xl font-bold text-white mb-4"></h2>
              Thank You for Subscribing!
            <p className="text-xl text-gray-300 mb-8"></p>
              You'll receive our latest insights and updates soon.
            <button;
              onClick={() => setIsSubscribed(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"</button>
              Subscribe another email</button>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            Welcome to Our Community!
          <p className="text-xl text-blue-100 mb-8"></p>
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          <button;
            onClick={() => setIsSubscribed(false)}
            className="text-white underline hover:text-blue-200 transition-colors">
            Subscribe another email;
    );</button>
  return (</button>
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="max-w-4xl mx-auto"></div>
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
            <div className="space-y-4"></div>
                <div, key={inde, x} classNam, e="flex, items-center, space-x-3"></di, v>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"></div>
                    <feature.icon className="w-4 h-4 text-white" />
                  <span, className="tex, t-blu, e-10, 0">{featur, e.tex, t}</spa, n>
              ))}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"></div>
            <form, onSubmit={handleSubmi, t} classNam, e="spac, e-y-6">
              <div></div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address;</label>
          <form, onSubmit={handleSubmi, t} classNam, e="m, b-1, 2">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"></div>
              <div className="relative flex-1"></div>
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="email"
                  valu, e={emai, l}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholde, r={placeholde, r}
                  required;
                  className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              <button;
                type="submit"
                disable, d={isLoadin, g || !emai, l}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center">
                  <React.Fragment></React.Fragment>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
                disable, d={isSubmittin, g}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Subscribing...
                ) : (
                  <React.Fragment></React.Fragment>
                    <ArrowRight className="w-5 h-5 ml-2" />
                )}
              <p className="text-sm text-blue-200 text-center"></p>
                We respect your privacy. Unsubscribe at any time.
                    <ArrowRight className="w-4 h-4 ml-2" />
                )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
              <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                <p, className="tex, t-gra, y-300, text-s, m">{featur, e.tex, t}</p>
            ))}
  );
export default ContentNewsletterSignup;

export default ContentNewsletterSignup;
