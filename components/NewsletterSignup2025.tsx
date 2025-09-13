import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Star, 
  Zap, 
  Globe, 
  Shield,
  ArrowRight,
  Users,
  TrendingUp
} from 'lucide-react';

const NewsletterSignup2025 = () => {
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
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Exclusive AI Insights",
      description: "Get early access to breakthrough AI research and applications"
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: "Global Case Studies",
      description: "Real-world success stories from companies worldwide"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Security Updates",
      description: "Latest cybersecurity trends and protection strategies"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: "Market Analysis",
      description: "Expert analysis of emerging technology markets"
    }
  ];

  const stats = [
    { label: "Subscribers", value: "50,000+", icon: <Users className="w-5 h-5" /> },
    { label: "Open Rate", value: "95%", icon: <Mail className="w-5 h-5" /> },
    { label: "Countries", value: "150+", icon: <Globe className="w-5 h-5" /> },
    { label: "Weekly Updates", value: "3x", icon: <Send className="w-5 h-5" /> }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the Future!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              You've successfully subscribed to our newsletter. Get ready for exclusive insights, breakthrough technologies, and industry-leading content delivered to your inbox.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Join Our Community
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Technology Curve
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get exclusive access to breakthrough insights, cutting-edge research, and real-world case studies from the world's most innovative companies.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-blue-200 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Signup Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Started Today
              </h3>
              <p className="text-gray-600">
                Join thousands of professionals staying ahead with our insights
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to receive weekly newsletters and understand that I can unsubscribe at any time.
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe Now
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                🔒 Your email is safe with us. We never spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup2025;