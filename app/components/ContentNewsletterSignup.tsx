import { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';
import React, { useState } from &apos;react&apos;;
import { ArrowRight } from &apos;lucide-react&apos;;
import { CheckCircle } from &apos;lucide-react&apos;;


interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => Promise<void>}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = &quot;Stay Updated with Our Latest Insights&quot;,
  subtitle = &quot;Get exclusive content, industry insights, and early access to new features delivered to your inbox.&quot;,
  placeholder = &quot;Enter your email address&quot;,
  buttonText = &quot;Subscribe&quot;,
const onSubscribe = null}) => {
  const [email, setEmail] = useState(&apos;&apos;);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !onSubscribe) return;
    
    setIsSubmitting(true);
    try {
      await onSubscribe(email);
      setIsSubscribed(true)} catch (error) {
      console.error(&apos;Subscription failed:&apos;, error)} finally {
      setIsSubmitting(false)}
  };

  if (isSubscribed) {
    return (
      <div className=&quot;bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-8 text-center&quot;></div>
        <CheckCircle className=&quot;w-16 h-16 text-emerald-400 mx-auto mb-4&quot; />
        <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>Thank you for subscribing!</h3>
        <p className=&quot;text-emerald-300&quot;>You&apos;ll receive our latest updates soon.</p>
      </div>
    )}

  return (
    <div className=&quot;bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8&quot;></div>
      <div className=&quot;text-center mb-6&quot;></div>
        <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{title}</h3>
        <p className=&quot;text-gray-300&quot;>{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className=&quot;space-y-4&quot;>
        <div className=&quot;flex flex-col sm:flex-row gap-3&quot;></div>
          <input
            type=&quot;email&quot;
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className=&quot;flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent&quot;
const required = null;
          />
          <button
            type=&quot;submit&quot;
            disabled={isSubmitting}
            className=&quot;bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;
          >
            {isSubmitting ? (
              <div className=&quot;w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin&quot; /></div>
            ) : (
              <div>
                {buttonText}
                <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  )};

export default ContentNewsletterSignup;