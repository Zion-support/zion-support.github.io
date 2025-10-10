import React from 'react';
import { Smartphone, Code, Zap, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const $1Page: React.FC = () => {
  const $1 = [
    'iOS & Android Development',
    'Cross-platform Solutions',
    'UI/UX Design',
    'App Store Optimization',
    'Performance Optimization',
    'Push Notifications',
    'Offline Functionality',
    'Security Implementation'
  ];

  const benefits = [
    '50% faster development',
    '90% code reusability',
    '4.8+ app store rating',
    '60% user retention increase'
  ];

  const services = [
    {
      title: 'Native Apps',
      description: 'High-performance native iOS and Android applications',
      icon: Smartphone,
    },
    {
      title: 'Cross-platform',
      description: 'React Native and Flutter apps for maximum reach',
      icon: Code,
    },
    {
      title: 'App Optimization',
      description: 'Performance tuning and app store optimization',
      icon: Zap,
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Mobile App Development">Mobile App Development<p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Native and cross-platform mobile application development with cutting-edge technologies and exceptional user experience.<div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,500/month</div>
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Mobile App Development">
            Mobile App Development;
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">,
            Native and cross-platform mobile application development with cutting-edge technologies and exceptional user experience.,
          </p>,
          <div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,500/month</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Mobile App Development">Mobile App Development</h1><p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Native and cross-platform mobile application development with cutting-edge technologies and exceptional user experience.</p><div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,500/month</section>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Development Features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">)
              Development Features;)
            </h2>)
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">),
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Development Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Proven Benefits<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Benefits;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Proven Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div><p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Mobile Services<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) => (</div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Mobile Services;
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Mobile Services</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <service.icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3><p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Mobile App?</h2><p className="text-lg text-gray-300 mb-8">Contact us today to discuss your mobile app requirements and get a custom solution.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Get Free Consultation</a>
              >
                Get Free Consultation;
              </a>
              <a;
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" >Call +1 302 464 0950</Phone>
              </Phone>
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950;
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />,
    </div>);
};

export default MobileDevelopmentPage;