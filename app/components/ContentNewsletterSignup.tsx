import React, { useState } from 'react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-white mb-4">Thank You for Subscribing!</h2>
          <p className="text-white/90">You'll receive our latest AI insights and tech updates.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with AI Innovation
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI technology, industry trends, and exclusive offers delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            required
          />
          <button 
            type="submit"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Subscribe
          </button>
        </form>
        <p className="text-white/70 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;
