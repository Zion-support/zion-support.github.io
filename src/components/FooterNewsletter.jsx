import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      // // console.log('Newsletter subscription:', email);
    }
  };

  if (isSubscribed) {
    return (
      <div className="text-center p-4 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
        <p className="text-zion-cyan font-medium">Thank you for subscribing!</p>
        <p className="text-zion-slate-light text-sm mt-1">
          You'll receive our latest updates soon.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
        Get the latest news on tech, AI, and marketplace opportunities delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan/20 transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}