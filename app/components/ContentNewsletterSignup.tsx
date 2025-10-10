'use client';
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Mail, Send, Star, Users, Award, Clock } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    'Exclusive AI insights and trends',
    'Early access to new features',
    'Special offers and discounts',
    'Industry best practices',
    'Technical tutorials and guides',
    'Monthly tech roundups'
  ];

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Subscribers'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating'
    },
    {
      icon: Award,
      value: 'Weekly',
      label: 'Updates'
    },
    {
      icon: Clock,
      value: 'Instant',
      label: 'Delivery'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        </div><div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Welcome to Our Newsletter!</h2>
          <p className="text-xl text-white/90 mb-8">
            Thank you for subscribing. You'll receive our latest updates and insights soon.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Subscribe Another Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 py-16">
      </div><div className="container mx-auto px-4">
        </div><div className="max-w-4xl mx-auto">
          </div><div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get the latest AI insights, tech trends, and exclusive content delivered to your inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Form */}
            </div><div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Subscribe Now</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                </div><div>
                  <label className="block text-white mb-2">Email Address</label>
                  </div><div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Benefits and Stats */}
            <div className="space-y-8">
              </div><div>
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Join Our Community</h3>
                </div><div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    </div><div key={index} className="text-center">
                      <stat.icon className="w-8 h-8 text-white mx-auto mb-2" />
                      </div><div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;