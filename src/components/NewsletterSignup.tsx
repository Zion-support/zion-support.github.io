import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-3">Welcome to the Future!</h3>
        <p className="text-green-100 mb-4">
          You're now subscribed to our revolutionary content updates. 
          Get ready for exclusive access to breakthrough technologies.
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="text-green-200 hover:text-white underline"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
      <div className="text-4xl mb-4">📧</div>
      <h3 className="text-2xl font-bold text-white mb-3">
        Get Exclusive Access to Revolutionary Content
      </h3>
      <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
        Be the first to discover breakthrough technologies, exclusive insights, 
        and revolutionary content that will shape the future of humanity.
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe Now'}
          </button>
        </div>
      </form>
      
      <p className="text-purple-200 text-sm mt-4">
        Join 10,000+ innovators already subscribed • No spam, ever • Unsubscribe anytime
      </p>
    </div>
  );
};

export default NewsletterSignup;