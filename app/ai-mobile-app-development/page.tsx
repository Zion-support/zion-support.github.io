'use client';
import React from 'react';
import { Smartphone, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const MobileAppDevelopmentPage: React.FC = () => {
  const mobileServices = [
    {
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and SwiftUI for optimal performance and user experience.',
      features: ['Native Performance', 'Swift/SwiftUI', 'App Store Optimization', 'Push Notifications', 'In-App Purchases'],
      benefits: ['Superior performance', 'Native UI/UX', 'App Store presence', 'iOS ecosystem integration']
    },
    {
      title: 'Android App Development',
      description: 'Native Android applications built with Kotlin and Jetpack Compose for modern Android development.',
      features: ['Kotlin Development', 'Jetpack Compose', 'Material Design', 'Google Play Optimization', 'Android APIs'],
      benefits: ['Native Android experience', 'Material Design', 'Google services integration', 'Wide device compatibility']
    },
    {
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with React Native, Flutter, and Xamarin for maximum efficiency.',
      features: ['React Native', 'Flutter', 'Xamarin', 'Code Reusability', 'Native Performance'],
      benefits: ['Faster development', 'Cost efficiency', 'Consistent experience', 'Easier maintenance']
    },
    {
      title: 'Progressive Web Apps',
      description: 'Web applications that work like native apps with offline capabilities and push notifications.',
      features: ['Service Workers', 'Offline Support', 'Push Notifications', 'App-like Experience', 'Cross-platform'],
      benefits: ['No app store approval', 'Easy updates', 'Cross-platform', 'Lower development cost']
    },
    {
      title: 'AI-Powered Mobile Apps',
      description: 'Integrate artificial intelligence and machine learning capabilities into your mobile applications.',
      features: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'Smart Features'],
      benefits: ['Intelligent features', 'Personalized experience', 'Automated processes', 'Competitive advantage']
    },
    {
      title: 'App Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support to keep your mobile applications running smoothly.',
      features: ['Bug Fixes', 'Feature Updates', 'Performance Optimization', 'Security Updates', '24/7 Support'],
      benefits: ['Reliable operation', 'Continuous improvement', 'Security assurance', 'User satisfaction']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Mobile App Development - iOS, Android & Cross-Platform | Zion Tech Group"
        description="Expert mobile app development services including iOS, Android, cross-platform, and AI-powered mobile applications. Build engaging mobile experiences."
        keywords={['mobile app development', 'iOS development', 'Android development', 'React Native', 'Flutter', 'cross-platform apps']}
        canonicalUrl="https://ziontechgroup.com/ai-mobile-app-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Mobile App Development
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Build engaging mobile experiences with native and cross-platform development
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our mobile development experts create high-performance iOS, Android, and cross-platform applications 
              that deliver exceptional user experiences and drive business growth.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Key Features:</h4>
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
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Development Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Discovery & Planning</h3>
                <p className="text-gray-300 text-sm">Requirements analysis, user research, and technical architecture planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Design & Prototyping</h3>
                <p className="text-gray-300 text-sm">UI/UX design, wireframing, and interactive prototyping</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Development & Testing</h3>
                <p className="text-gray-300 text-sm">Agile development with continuous testing and quality assurance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Deployment & Support</h3>
                <p className="text-gray-300 text-sm">App store deployment, monitoring, and ongoing maintenance</p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Mobile Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin', 'SwiftUI', 'Jetpack Compose', 'Firebase', 'AWS', 'Docker', 'Git', 'Figma'].map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-sm font-medium text-white">{tech}</div>
                </div>
              ))}
            </div>
          </section>

          {/* App Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">App Types We Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-white mb-3">E-commerce Apps</h3>
                <p className="text-gray-300 text-sm">
                  Feature-rich shopping apps with payment integration, inventory management, and analytics.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare Apps</h3>
                <p className="text-gray-300 text-sm">
                  HIPAA-compliant medical apps with telemedicine, patient management, and health tracking.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-white mb-3">FinTech Apps</h3>
                <p className="text-gray-300 text-sm">
                  Secure financial applications with banking, payments, and investment management features.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-white mb-3">EdTech Apps</h3>
                <p className="text-gray-300 text-sm">
                  Educational platforms with interactive learning, progress tracking, and certification.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Apps</h3>
                <p className="text-gray-300 text-sm">
                  Business applications with CRM, project management, and team collaboration features.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-white mb-3">Gaming Apps</h3>
                <p className="text-gray-300 text-sm">
                  Engaging mobile games with multiplayer support, in-app purchases, and social features.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Mobile App?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss your mobile app idea and create an engaging experience for your users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your App Project
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

export default MobileAppDevelopmentPage;