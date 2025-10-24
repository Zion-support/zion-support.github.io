
import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => Promise<void>;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  onSubscribe
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !onSubscribe) return;
    
    setIsSubmitting(true);
    try {
      await onSubscribe(email);
      setIsSubscribed(true);
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank you for subscribing!</h3>
        <p className="text-emerald-300">You'll receive our latest updates soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                {buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
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