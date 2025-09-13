import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Star, Zap, Brain, Target, Award, Users, TrendingUp } from 'lucide-react';

const AI2025NewsletterSignup = () => {
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
  };

  const benefits = [
    {
      icon: Brain,
      title: "Latest AI Breakthroughs",
      description: "Get exclusive access to cutting-edge AI research and developments"
    },
    {
      icon: Target,
      title: "Implementation Guides",
      description: "Step-by-step guides to implement AI in your organization"
    },
    {
      icon: Award,
      title: "Success Stories",
      description: "Real-world case studies and success metrics from industry leaders"
    },
    {
      icon: Zap,
      title: "Early Access",
      description: "Be the first to access new tools, tutorials, and resources"
    }
  ];

  const stats = [
    { label: "Subscribers", value: "50,000+", icon: Users },
    { label: "Open Rate", value: "68%", icon: TrendingUp },
    { label: "Satisfaction", value: "4.9/5", icon: Star }
  ];

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Welcome to the AI Revolution!</h3>
        <p className="text-gray-300 mb-6">
          You've successfully subscribed to our AI 2025 newsletter. Check your email for a confirmation link.
        </p>
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            <span>Email confirmed</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            <span>Welcome email sent</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-500/20 rounded-2xl overflow-hidden">
      <div className="relative p-8 lg:p-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Mail className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">AI 2025 Newsletter</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Ahead of the
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get exclusive access to the latest AI breakthroughs, implementation guides, 
              and success stories delivered directly to your inbox.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-2 mx-auto">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>
            
            <p className="text-sm text-gray-400 text-center mt-4">
              Join 50,000+ AI professionals. Unsubscribe anytime. No spam.
            </p>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center space-x-6 mt-8 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>Weekly updates</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>Exclusive content</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025NewsletterSignup;