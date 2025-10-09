'use client';
import React from 'react';
import { Smartphone, Code, Zap, Target, BarChart, Cloud, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MobileDevelopmentPage: React.FC = () => {
  const features = [
    {
      title: 'iOS/Android Apps',
      description: 'Native mobile applications for iOS and Android platforms',
      icon: Smartphone,
      benefits: ['Native performance', 'Platform optimization', 'App store compliance']
    },
    {
      title: 'Cross-platform Development',
      description: 'Single codebase applications for multiple platforms',
      icon: Code,
      benefits: ['Code reusability', 'Faster development', 'Consistent experience']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design for optimal mobile experience',
      icon: Target,
      benefits: ['User research', 'Wireframing', 'Prototyping']
    },
    {
      title: 'App Store Optimization',
      description: 'Optimize your app for better visibility and downloads',
      icon: BarChart,
      benefits: ['ASO strategy', 'Keyword optimization', 'Performance tracking']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Mobile App Development - Zion Tech Group"
        description="Professional mobile app development services for iOS, Android, and cross-platform solutions. Custom mobile applications with modern UI/UX design."
        keywords={['mobile app development', 'iOS apps', 'Android apps', 'cross-platform', 'mobile UI/UX', 'app store optimization']}
        canonicalUrl="https://ziontechgroup.com/mobile-development"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create powerful mobile applications for iOS, Android, and cross-platform solutions. 
              From concept to app store, we deliver mobile apps that users love.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$1,500/month</div>
            <p className="text-gray-300">Complete mobile app development</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Development Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-pink-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Build Your Mobile App Today</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our mobile apps have achieved 4.8+ star ratings and millions of downloads. 
                Let's create the perfect mobile experience for your users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your App
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MobileDevelopmentPage;