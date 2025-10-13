import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

interface NewsletterSignupProps {
  className?: string;
  variant?: 'default' | 'compact' | 'hero';
  showTitle?: boolean;
  showDescription?: boolean;
}

export default function NewsletterSignup({ 
  className = "",
  variant = 'default',
  showTitle = true,
  showDescription = true 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setStatus('loading');
    
    try {
      // Simulate API call - replace with actual newsletter signup logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock success response
      setStatus('success');
      setMessage('Successfully subscribed! Check your email for confirmation.');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
      
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }, [email]);

  const isCompact = variant === 'compact';
  const isHero = variant === 'hero';

  return (
    <>
      <Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>
      </Helmet>
      <div className={`newsletter-signup-container ${className}`}>
        <div className={`newsletter-content ${isCompact ? 'text-center' : ''}`}>
          {showTitle && (
            <h2 className={`font-bold text-white mb-4 ${isHero ? 'text-3xl md:text-4xl' : isCompact ? 'text-xl' : 'text-2xl'}`}>
              {isHero ? (
                <>
                  Stay Ahead with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {" "}Latest Updates
                  </span>
                </>
              ) : (
                'Stay Updated'
              )}
            </h2>
          )}
          
          {showDescription && (
            <p className={`text-gray-300 mb-6 ${isCompact ? 'text-sm' : isHero ? 'text-lg' : 'text-base'}`}>
              {isHero 
                ? 'Get exclusive access to AI insights, tech trends, and industry updates delivered to your inbox.'
                : 'Subscribe to our newsletter for the latest updates, tech insights, and exclusive content.'
              }
            </p>
          )}
          
          <form onSubmit={handleSubmit} className={`newsletter-form ${isCompact ? 'max-w-md mx-auto' : ''}`}>
            <div className={`input-group ${isHero ? 'flex-col sm:flex-row gap-4' : 'flex'}`}>
              <div className={`relative flex-1 ${isHero ? 'w-full' : ''}`}>
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={status === 'loading'}
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 ${
                    isHero ? 'text-lg' : ''
                  }`}
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading' || !email.trim()}
                className={`bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed ${
                  isHero ? 'px-8 py-3 text-lg' : 'px-4'
                }`}
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
            
            {/* Status Message */}
            {message && (
              <div className={`mt-4 flex items-center space-x-2 ${
                status === 'success' ? 'text-green-400' : 'text-red-400'
              }`}>
                {status === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span className="text-sm">{message}</span>
              </div>
            )}
          </form>
          
          {!isCompact && (
            <div className="mt-6 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                Need help? Contact our team
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
        
        {isHero && (
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Weekly insights
            </div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              No spam, ever
            </div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Unsubscribe anytime
            </div>
          </div>
        )}
      </div>
    </>
  );
}
