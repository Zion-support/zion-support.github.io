import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg p-6 text-center">
        <div className="text-zion-cyan text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-white mb-2">Thank you for subscribing!</h3>
        <p className="text-zion-slate-light">
          You'll receive our latest updates and insights directly in your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
      <p className="text-zion-slate-light mb-6">
        Subscribe to our newsletter for the latest tech insights, project updates, and industry trends.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
          required
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-zion-cyan hover:bg-zion-cyan/80 disabled:opacity-50"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      <p className="text-xs text-zion-slate-light mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;