'use client';
import React from 'react';
import { Users, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const ITSupportPage: React.FC = () => {
  const supportServices = [
    {
      title: '24/7 Help Desk Support',
      description: 'Round-the-clock technical support to resolve issues quickly and minimize downtime.',
      features: ['24/7 Availability', 'Multi-channel Support', 'Remote Assistance', 'Issue Tracking', 'Knowledge Base'],
      benefits: ['Minimal downtime', 'Quick resolution', 'User satisfaction', 'Productivity maintenance']
    },
    {
      title: 'System Maintenance',
      description: 'Proactive maintenance and updates to keep your systems running smoothly and securely.',
      features: ['Regular Updates', 'Security Patches', 'Performance Optimization', 'Backup Management', 'Health Checks'],
      benefits: ['System reliability', 'Security assurance', 'Optimal performance', 'Preventive care']
    },
    {
      title: 'Hardware Management',
      description: 'Complete hardware lifecycle management from procurement to disposal.',
      features: ['Asset Management', 'Procurement Support', 'Installation', 'Maintenance', 'Disposal'],
      benefits: ['Cost optimization', 'Asset tracking', 'Reliable hardware', 'Compliance']
    },
    {
      title: 'Software Support',
      description: 'Comprehensive software support including installation, configuration, and troubleshooting.',
      features: ['Software Installation', 'Configuration', 'License Management', 'Updates', 'Troubleshooting'],
      benefits: ['Software optimization', 'License compliance', 'User training', 'Issue resolution']
    },
    {
      title: 'Remote Monitoring',
      description: 'Proactive monitoring of your IT infrastructure to identify and resolve issues before they impact business.',
      features: ['Real-time Monitoring', 'Alert Management', 'Performance Tracking', 'Capacity Planning', 'Reporting'],
      benefits: ['Proactive support', 'Issue prevention', 'Performance insights', 'Business continuity']
    },
    {
      title: 'User Training',
      description: 'Comprehensive training programs to help your team make the most of your IT systems.',
      features: ['Onboarding Training', 'Software Training', 'Security Awareness', 'Best Practices', 'Documentation'],
      benefits:['Improved productivity', 'Reduced support tickets', 'Better security', 'User confidence']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="IT Support & Maintenance Services - 24/7 Help Desk | Zion Tech Group"
        description="Comprehensive IT support services including 24/7 help desk, system maintenance, hardware management, and user training. Keep your IT infrastructure running smoothly."
        keywords={['IT support', 'help desk', 'system maintenance', 'hardware management', 'remote monitoring', 'user training']}
        canonicalUrl="https://ziontechgroup.com/it-support"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              IT Support & Maintenance
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Keep your IT infrastructure running smoothly with comprehensive support and maintenance services
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our IT support experts provide 24/7 assistance, proactive maintenance, and comprehensive 
              management services to ensure your technology infrastructure operates at peak performance.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-slate-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Support Levels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Support Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🥉</div>
                <h3 className="text-xl font-bold text-white mb-3">Basic Support</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-4">$800/month</div>
                <ul className="text-gray-300 text-sm space-y-2 text-left">
                  <li>• Business hours support</li>
                  <li>• Email and phone support</li>
                  <li>• Basic troubleshooting</li>
                  <li>• Software updates</li>
                  <li>• Monthly health checks</li>
                </ul>
              </div>
              <div className="cyber-card p-6 text-center ring-2 ring-cyan-400">
                <div className="text-4xl mb-4">🥈</div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Support</h3>
                <div className="text-2xl font-bold text-purple-400 mb-4">$1,200/month</div>
                <ul className="text-gray-300 text-sm space-y-2 text-left">
                  <li>• 24/7 support coverage</li>
                  <li>• Remote monitoring</li>
                  <li>• Proactive maintenance</li>
                  <li>• Hardware management</li>
                  <li>• User training sessions</li>
                </ul>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🥇</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Support</h3>
                <div className="text-2xl font-bold text-green-400 mb-4">$1,800/month</div>
                <ul className="text-gray-300 text-sm space-y-2 text-left">
                  <li>• Dedicated support team</li>
                  <li>• On-site support</li>
                  <li>• Custom solutions</li>
                  <li>• Priority response</li>
                  <li>• Strategic IT consulting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Support Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Support Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;5min</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">First Call Resolution</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Coverage</div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Need Reliable IT Support?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how our IT support services can keep your technology running smoothly and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Support Quote
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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

export default ITSupportPage;