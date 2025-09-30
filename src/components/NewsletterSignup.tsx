import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Users, Zap, Shield } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-bold text-white">Stay Updated</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Get the latest AI insights delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="flex-1 px-3 py-2 rounded-lg text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            disabled={isSubmitting || isSubmitted}
          />
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-50 flex items-center gap-1"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : isSubmitted ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <>
                <span>Join</span>
                <ArrowRight className="w-3 h-3" />
              </>
            )}
          </button>
        </form>
        {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
        {isSubmitted && (
          <p className="text-green-400 text-xs mt-2 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Successfully subscribed!
          </p>
        )}
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20 ${className}`}>
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Join the AI Revolution</h2>
            <Sparkles className="w-8 h-8 text-fuchsia-400" />
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get breakthrough AI insights, case studies, and implementation guides delivered weekly. 
            Join 50,000+ AI leaders transforming their organizations.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                disabled={isSubmitting || isSubmitted}
              />
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </form>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                50K+
              </div>
              <div className="text-gray-400 text-sm">AI Professionals</div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                Weekly
              </div>
              <div className="text-gray-400 text-sm">Insights</div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                Free
              </div>
              <div className="text-gray-400 text-sm">Premium Content</div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Join 50,000+ professionals. Unsubscribe anytime. No spam, ever.
          </p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 ${className}`}>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">Stay Ahead of AI Trends</h3>
        </div>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Get weekly insights, case studies, and breakthrough research delivered directly to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-6">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
              disabled={isSubmitting || isSubmitted}
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isSubmitted ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </div>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </form>

        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>50K+ subscribers</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4" />
            <span>Weekly updates</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            <span>No spam</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;