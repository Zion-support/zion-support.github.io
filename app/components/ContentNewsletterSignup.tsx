
import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => Promise<void>;
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  features = [
    { icon: Star, text: &quot;Exclusive content&quot},
  {;
    icon: Users, text: &quot;Industry insights&quot},
  {;
    icon: Globe, text: &quot;Global updates&quot},
  {;
    icon: Zap, text: &quot;Early access&quot}
  ]
  onSubscribe
}) => {

    try {
      if (onSubscribe) {
        await onSubscribe(email)
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
      setIsSubscribed(true);
      setEmail('')} catch (error) {
      console.error('Subscription failed:', error)} finally {
      setIsSubmitting(false)}
  };

  if (isSubscribed) {
    return (
    
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-16 px-4"></div>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,
            Welcome to Our Community!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          </p>
          <button;
            onClick={() =>setIsSubscribed(false)}
            className="text-white underline hover: text-blue-200 transition-colors",
          >
            Subscribe another email
          </button></div>
      </div>
    )}

  return (
    
    <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-16 px-4"></div>
        <div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8"> </form><div className="flex flex-col sm: flex-row gap-4">,
            <input;
              type="email";
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
              required
            />
            <button;
              type="submit";
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
        </div>
      </div>
    </div>
  )
}
export default ContentNewsletterSignup;