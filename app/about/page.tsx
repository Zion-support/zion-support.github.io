import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon,
  UsersIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Our solutions are built with enterprise-grade security and reliability to ensure your business continuity.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring every solution is tailored to their specific needs.'
    },
    {
      icon: ChartBarIcon,
      title: 'Results',
      description: 'We measure success by the tangible impact our solutions have on your business growth and efficiency.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEOHead 
        title="About Zion Tech Group"
        description="Learn about Zion Tech Group's mission to transform businesses through innovative AI solutions, cybersecurity, and digital transformation services."
        keywords="about us, company, team, mission, AI solutions, cybersecurity, digital transformation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We are a leading technology company dedicated to transforming businesses through innovative AI solutions, 
                cybersecurity, and digital transformation services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive growth, enhance security, 
                  and accelerate digital transformation. We believe in the power of AI and technology to solve 
                  complex business challenges and create sustainable competitive advantages.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Deliver innovative solutions that exceed client expectations</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Maintain the highest standards of security and reliability</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Foster long-term partnerships with our clients</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8">
                  <RocketLaunchIcon className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-center mb-4">Innovation at Scale</h3>
                  <p className="text-gray-300 text-center">
                    We combine deep technical expertise with business acumen to deliver solutions that drive real results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our approach to client relationships and solution delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-gray-300">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a 
                href="/services"
                className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;