import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-100" />
        <h3 className="text-2xl font-bold mb-2">Welcome to Zion Insights!</h3>
        <p className="text-green-100">
          You're now subscribed to our weekly newsletter with the latest AI and IT insights.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl font-bold mb-2">Stay Ahead with Zion Insights</h3>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Get weekly insights on AI trends, cloud strategies, and digital transformation delivered straight to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-zion-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-zion-blue border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
        
        <p className="text-white/70 text-sm text-center mt-4">
          Join 10,000+ professionals. Unsubscribe anytime.
        </p>
      </form>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-white">10K+</div>
          <div className="text-white/70 text-sm">Subscribers</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white">Weekly</div>
          <div className="text-white/70 text-sm">Updates</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white">Zero</div>
          <div className="text-white/70 text-sm">Spam</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white">Free</div>
          <div className="text-white/70 text-sm">Forever</div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;