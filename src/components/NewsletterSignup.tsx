import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to our community!</h3>
        <p className="text-white/90">
          You're now subscribed to our weekly insights newsletter.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light rounded-2xl p-8 text-center">
      <div className="flex items-center justify-center mb-4">
        <Mail className="w-12 h-12 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Curve</h3>
      <p className="text-white/90 mb-6 max-w-2xl mx-auto">
        Get exclusive insights on AI, cloud computing, and cybersecurity delivered to your inbox. 
        Join 10,000+ tech leaders who trust our expertise.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="bg-white text-zion-blue-light px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-zion-blue-light border-t-transparent rounded-full animate-spin"></div>
              Subscribing...
            </>
          ) : (
            <>
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
      
      <p className="text-white/70 text-sm mt-4">
        No spam. Unsubscribe anytime. We respect your privacy.
      </p>
    </div>
  );
}