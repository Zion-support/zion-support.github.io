"use client";
'use client';

import React{ useState } from 'react';
MailSendCheckCircleStarTrendingUpUsersZapArrowRight

export default function AI2025NewsletterSignup() {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);
  const [selectedInterestsetSelectedInterests] = useState<string[]>([]);

  const interests = [
    { id: 'ai-innovation'label: 'AI Innovation'icon: Star },
    { id: 'ai-tools'label: 'AI Tools & Utilities'icon: Zap },
    { id: 'future-tech'label: 'Future Technology'icon: TrendingUp },
    { id: 'community'label: 'Community Updates'icon: Users }
  ];

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...previnterestId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || selectedInterests.length === 0) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">
          Welcome to the Future!
        </h3>
        <p className="text-green-300 mb-6">
          You've successfully subscribed to our AI newsletter. Get ready for exclusive content
          early access to new toolsand insights into the future of technology.
        </p>
        
        <div className="bg-white/10 rounded-lg p-4 mb-6">
          <h4 className="text-white font-semibold mb-2">What's Next?</h4>
          <ul className="text-green-300 text-sm space-y-1">
            <li>• Weekly AI innovation updates</li>
            <li>• Early access to new tools and features</li>
            <li>• Exclusive research reports and predictions</li>
            <li>• Invitations to virtual events and demos</li>
          </ul>
        </div>
        
        <button 
          onClick={() => setIsSubscribed(false)}
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          Subscribe Another Email
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-2">
          Stay Ahead of the AI Revolution
        </h2>
        <p className="text-blue-100 text-lg">
          Get exclusive access to the latest AI innovationstoolsand future predictions
        </p>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Exclusive Content</h3>
            <p className="text-gray-400 text-sm">Early access to new AI tools and breakthrough research</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Future Insights</h3>
            <p className="text-gray-400 text-sm">Weekly predictions and technology trend analysis</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Community Access</h3>
            <p className="text-gray-400 text-sm">Join our exclusive community of AI innovators</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-white font-semibold mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Interests Selection */}
          <div>
            <label className="block text-white font-semibold mb-3">
              What interests you most? (Select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((interest) => (
                <button
                  key={interest.id}
                  type="button"
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 flex items-center gap-3 ${
                    selectedInterests.includes(interest.id)
                      ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                      : 'border-white/20 bg-white/5 text-gray-400 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  <interest.icon className="w-5 h-5" />
                  <span className="font-medium">{interest.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!email || selectedInterests.length === 0 || isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Subscribing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Join the AI Revolution
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>No SpamEver</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Unsubscribe Anytime</span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Join <span className="text-blue-400 font-semibold">50,000+</span> innovators already subscribed
          </p>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <span className="text-gray-400 text-sm ml-2">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}