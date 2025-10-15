import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  DevicePhoneMobileIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  CogIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const MobileDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Native iOS Apps',
      description: 'High-performance iOS applications built with Swift and native iOS frameworks.'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Native Android Apps',
      description: 'Robust Android applications developed with Kotlin and modern Android architecture.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Cross-Platform Apps',
      description: 'Single codebase apps for both iOS and Android using React Native and Flutter.'
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Features',
      description: 'Integrate machine learning and AI capabilities into your mobile applications.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with data encryption and compliance certifications.'
    },
    {
      icon: BoltIcon,
      title: 'Performance Optimization',
      description: 'Lightning-fast apps with optimized performance and smooth user experiences.'
    }
  ];

  const platforms = [
    'iOS (Swift & SwiftUI)',
    'Android (Kotlin & Jetpack)',
    'React Native',
    'Flutter',
    'Xamarin',
    'Ionic',
    'Progressive Web Apps',
    'Hybrid Apps'
  ];

  const features = [
    'Push Notifications',
    'Offline Functionality',
    'Real-time Synchronization',
    'Biometric Authentication',
    'Location Services',
    'Camera Integration',
    'Payment Processing',
    'Social Media Integration',
    'Analytics & Tracking',
    'App Store Optimization'
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Define your app concept, target audience, and technical requirements.'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user interfaces that users love.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your app using agile methodologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing across devices and platforms.'
    },
    {
      step: '05',
      title: 'App Store Submission',
      description: 'Prepare and submit your app to the App Store and Google Play.'
    },
    {
      step: '06',
      title: 'Launch & Support',
      description: 'Deploy your app and provide ongoing maintenance and updates.'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Mobile App Development Services - Zion Tech Group"
        description="Professional mobile app development for iOS, Android, and cross-platform solutions. Native and hybrid apps with AI integration and enterprise security."
        keywords="mobile app development, iOS apps, Android apps, React Native, Flutter, cross-platform apps, mobile development"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <DevicePhoneMobileIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">Mobile App Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Create Amazing
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
                  Mobile Applications
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We develop stunning mobile apps for iOS, Android, and cross-platform solutions. From concept to app store, we bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Your App
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  View Our Apps
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Mobile Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive mobile development solutions for every platform and use case.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Supported <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Platforms</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We develop for all major mobile platforms using the latest technologies and frameworks.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                App <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Rich functionality and features that make your app stand out from the competition.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Development Process</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful app development and launch.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let's turn your app idea into reality with our expert mobile development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileDevelopmentPage;