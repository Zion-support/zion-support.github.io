import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Star, 
  Zap, 
  Brain,
  ArrowRight,
  Gift,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

const EnhancedNewsletterSignup2025: React.FC = () => {
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

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Exclusive Tech Updates",
      description: "Get first access to breakthrough technologies"
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: "AI Insights",
      description: "Weekly AI trends and industry analysis"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: "Market Intelligence",
      description: "Stay ahead with market predictions"
    },
    {
      icon: <Gift className="w-6 h-6 text-pink-400" />,
      title: "Special Offers",
      description: "Exclusive discounts and early access"
    }
  ];

  const stats = [
    { number: "50K+", label: "Subscribers", icon: <Users className="w-5 h-5" /> },
    { number: "99%", label: "Satisfaction", icon: <Award className="w-5 h-5" /> },
    { number: "Weekly", label: "Updates", icon: <Mail className="w-5 h-5" /> }
  ];

  if (isSubscribed) {
    return (
      <div className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-green-900">
        <div className="container mx-auto px-4">
          <divdiv
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to the Future! 🚀
            </h2>
            
            <p className="text-xl text-green-100 mb-8">
              Thank you for subscribing! You'll receive exclusive updates about revolutionary 
              technologies and breakthrough innovations.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's Next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-100">Confirmation email sent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-100">Weekly tech insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-100">Exclusive early access</span>
                </div>
              </div>
            </div>
          </divdiv>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <divdiv
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              <span>STAY AHEAD OF THE CURVE</span>
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">
              Get Exclusive Access to
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Tech
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join our community of forward-thinking innovators and get exclusive access 
              to breakthrough technologies, market insights, and special offers.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <divdiv
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </divdiv>
              ))}
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              {stats.map((stat, index) => (
                <divdiv
                  key={index}
                  className="text-center"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </divdiv>
              ))}
            </div>
          </divdiv>

          {/* Signup Form */}
          <divdiv
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Join the Revolution
              </h3>
              <p className="text-gray-300">
                Get instant access to exclusive content and updates
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Subscribe Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                By subscribing, you agree to our privacy policy and terms of service.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">No spam</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Unsubscribe anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Secure</span>
                </div>
              </div>
            </div>
          </divdiv>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsletterSignup2025;