'use client';
import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Star, Zap, Shield } from 'lucide-react';

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
      text: 'Exclusive AI insights and tips',
      color: 'text-yellow-400'
    },
    {
      icon: Zap,
      text: 'Early access to new features',
      color: 'text-cyan-400'
    },
    {
      icon: Shield,
      text: 'Industry security updates',
      color: 'text-green-400'
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card-enhanced holographic-card quantum-field p-8 md:p-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Welcome to the Future!
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                You've successfully subscribed to our newsletter. Get ready for cutting-edge AI insights and exclusive updates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 text-left">
                      <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                      <span className="text-gray-300">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card-enhanced holographic-card quantum-field p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Stay Ahead with AI Insights
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join 10,000+ professionals who get exclusive AI insights, industry updates, and early access to new features.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="cyber-button px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                      <span className="text-gray-300 text-sm">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </form>

            {/* Social proof */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">Trusted by leading companies</p>
                <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
                  <div className="text-2xl font-bold text-white">Microsoft</div>
                  <div className="text-2xl font-bold text-white">Google</div>
                  <div className="text-2xl font-bold text-white">Amazon</div>
                  <div className="text-2xl font-bold text-white">IBM</div>
                  <div className="text-2xl font-bold text-white">Oracle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;