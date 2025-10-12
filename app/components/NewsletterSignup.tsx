import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle } from 'lucide-react';

interface NewsletterSignupProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  children,
  className = '',
  title = 'Stay Updated',
  description = 'Get the latest news and updates from Zion Tech Group'
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center ${className}`}>
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">You've been successfully subscribed to our newsletter.</p>
      </div>
    );
  }

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 ${className}`}>
      <Helmet>
        <title>Newsletter Signup | Zion Tech Group</title>
        <meta name="description" content="Subscribe to our newsletter for the latest AI and IT solutions updates." />
      </Helmet>
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      
      <p className="text-xs text-gray-400 text-center mt-4">
        By subscribing, you agree to our{' '}
        <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300">
          Privacy Policy
        </Link>
        {' '}and{' '}
        <Link to="/terms" className="text-cyan-400 hover:text-cyan-300">
          Terms of Service
        </Link>
        .
      </p>
      
      {children}
    </div>
  );
};

export default NewsletterSignup;