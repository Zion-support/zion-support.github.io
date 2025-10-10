'use client';
import React, { memo } from 'react';
import { Star, Users, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const ContentShowcase: React.FC = memo(() => {
  const features = [
    {
      icon: Star,
      title: 'Proven Results',
      description: '300% average ROI across all implementations',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: '500+ Clients',
      description: 'Trusted by companies worldwide',
      color: 'text-blue-400'
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Award-winning AI solutions',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business',
      color: 'text-green-400'
    }
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
          Why Choose Zion Tech Group?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We deliver cutting-edge AI solutions that drive real business results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
            <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-slate-700/50 flex items-center justify-center`}>
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Join hundreds of companies already using our AI solutions to achieve unprecedented growth and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
          >
            <Users className="w-5 h-5 mr-2" />
            Start Your Journey
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <a
            href="/contact"
            className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
});

ContentShowcase.displayName = 'ContentShowcase';

export default ContentShowcase;