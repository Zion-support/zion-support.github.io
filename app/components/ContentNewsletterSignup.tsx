'use client';
import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Star, Zap, Shield } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: Star,
      title: 'Exclusive AI Insights',
      description: 'Get the latest AI trends and industry updates'
    },
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Be the first to know about new features and services'
    },
    {
      icon: Shield,
      title: 'Security Tips',
      description: 'Weekly cybersecurity tips and best practices'
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-16" aria-labelledby="newsletter-success"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-2 xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2 xl p-8 cyber-card"></div>
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" /></CheckCircl>
              <h2 id="newsletter-success" className="text-3 xl font-bold text-white mb-4"></h2></<<<h2>Welcome</h2></<<h2>to</h2> Zion Tech Group!<p className="text-white/90 text-lg mb-6"></p></<<<p>Thank</p></<<p>you</p> for subscribing! You'll receive our latest updates and exclusive content.<button
                onClick={() =>setIsSubscribed(false)}</button></<<<butto>className</butto></butto>="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-all duration-300"
              ></<<<button>Subscribe</button></<<button>Another</button></<button>Email</button>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16" aria-labelledby="newsletter-heading"></sectio>
      <div className="container mx-auto px-4"></div>
        <div className="max-w-4 xl mx-auto"></div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2 xl p-8 md:p-12 cyber-card"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">{/* Content */}</div>
              <div></div>
                <h2 id="newsletter-heading" className="text-3 xl md:text-4 xl font-bold text-white mb-4 neon-text"></h2></<<<h2>Stay</h2></<<h2>Updated</h2><p className="text-gray-300 text-lg mb-6 leading-relaxed">Join thousands of professionals who trust us for the latest in AI and IT solutions.</p></<<<p>Get</p></<<p>exclusive</p> insights, early access to new features, and expert tips delivered to your inbox.<div className="space-y-4 mb-8">{benefits.map((benefit, index) => (</div>
                    <div key={index} className="flex items-start space-x-3"></div>
                      <div className="p-2 bg-cyan-500/20 rounded-lg"></div>
                        <benefit.icon className="w-5 h-5 text-cyan-400" /></benefi>
                      </div>
                      <div></div>
                        <h3 className="font-semibold text-white mb-1"></h>{benefit.title}<p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400"></div>
                  <div className="flex items-center space-x-1"></div>
                    <Shield className="w-4 h-4" /></Shiel>
                    <span>100% Secure</spa>
                  </div>
                  <div className="flex items-center space-x-1"></div>
                    <Mail className="w-4 h-4" /></Mai>
                    <<<<span>Weekly</span></<<span>Updates</span></span>
                  </div>
                  <div className="flex items-center space-x-1"></div>
                    <CheckCircle className="w-4 h-4" /></CheckCircl>
                    <<<<span>Easy</span></<<span>Unsubscribe</span></span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-slate-700/50 rounded-xl p-6"></div>
                <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h>

                <form onSubmit={handleSubmit} className="space-y-4"></for>
                  <div></div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label><input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) =>setEmail(e.target.value)}</input></<<<inpu>placeholder</inpu></inpu>="Enter your email address"
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      required</input>
                    /><button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >{isLoading ? (</butto>
                      <>{}</>{}{}
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div><<<<span>Subscribing</span></span>...</span>
                      
                    ) : (
                      <>{}</>{}{}
                        <Send className="w-5 h-5" /></Sen>
                        <<<<span>Subscribe</span></<<span>Now</span></span>
                      
                    )}
                  <p className="text-xs text-gray-400 mt-4 text-center">By subscribing, you agree to our Privacy Policy and Terms of Service.</p></<<<p>You</p></<<p>can</p> unsubscribe at any time.</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;