import React, { useState } from 'react';

const EnhancedNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-6 right-6 text-4xl animate-bounce">📧</div>
      <div className="absolute bottom-6 left-6 text-3xl animate-pulse">🎁</div>
      
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <span className="text-4xl">📬</span>
          <h2 className="text-4xl font-bold text-white">Stay Ahead of the Curve</h2>
          <span className="text-4xl">📬</span>
        </div>
        
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Get exclusive access to the latest technology breakthroughs, innovation insights, 
          and industry trends delivered directly to your inbox. Join 50,000+ tech enthusiasts!
        </p>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="text-lg font-bold text-white mb-2">Weekly Insights</h3>
            <p className="text-white/80 text-sm">Latest tech breakthroughs and trends</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl mb-2">🎁</div>
            <h3 className="text-lg font-bold text-white mb-2">Exclusive Content</h3>
            <p className="text-white/80 text-sm">Premium reports and case studies</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl mb-2">💡</div>
            <h3 className="text-lg font-bold text-white mb-2">Early Access</h3>
            <p className="text-white/80 text-sm">Be first to know about new features</p>
          </div>
        </div>
        
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Subscribe Now
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6 max-w-md mx-auto">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-2">Welcome Aboard!</h3>
            <p className="text-white/90">
              Thank you for subscribing! Check your email for a special welcome gift.
            </p>
          </div>
        )}
        
        {/* Social Proof */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/80">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👥</span>
            <span>50,000+ Subscribers</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⭐</span>
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏆</span>
            <span>Industry Leader</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsletterSignup;