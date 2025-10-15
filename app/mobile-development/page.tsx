import React from 'react';';'
import SEOHead from '../components/SEOHead';';'
import { 
  DevicePhoneMobileIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon;
} from '@heroicons/react/24/outline';''

const MobileDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Native iOS Apps',''
      description: 'High-performance iOS applications built with Swift and SwiftUI for optimal user experience.'''
    },
    {
      icon: CpuChipIcon,
      title: 'Native Android Apps',''
      description: 'Robust Android applications developed with Kotlin and Jetpack Compose.'''
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cross-Platform Apps',''
      description: 'Single codebase solutions using React Native, Flutter, or Xamarin for both platforms.'''
    },
    {
      icon: BoltIcon,
      title: 'Progressive Web Apps',''
      description: 'Web applications that work like native apps with offline capabilities and push notifications.'''
    },
    {
      icon: CloudIcon,
      title: 'App Store Optimization',''
      description: 'Complete ASO services to maximize your app\'s visibility and downloads.'''
    },
    {
      icon: CogIcon,
      title: 'App Maintenance',''
      description: 'Ongoing support, updates, and maintenance to keep your app running smoothly.'''
    }
  ];

  const platforms = [
    'iOS',''
    'Android',''
    'React Native',''
    'Flutter',''
    'Xamarin',''
    'Ionic',''
    'Cordova',''
    'Progressive Web Apps',''
    'Wear OS',''
    'watchOS'''
  ];

  const features = [
    'User Authentication',''
    'Push Notifications',''
    'Offline Support',''
    'Real-time Sync',''
    'Payment Integration',''
    'Social Media Integration',''
    'GPS & Location Services',''
    'Camera & Media',''
    'Biometric Security',''
    'Analytics & Tracking'''
  ];

  const benefits = [
    {
      title: 'Native Performance',''
      description: 'Optimized performance with native code and platform-specific optimizations.',''
      icon: BoltIcon
    },
    {
      title: 'Cross-Platform',''
      description: 'Reach more users with apps that work seamlessly on all major platforms.',''
      icon: GlobeAltIcon
    },
    {
      title: 'Modern UI/UX',''
      description: 'Beautiful, intuitive interfaces that follow platform design guidelines.',''
      icon: ChartBarIcon
    },
    {
      title: 'Scalable Architecture',''
      description: 'Built to grow with your business and handle increasing user loads.',''
      icon: CloudIcon
    }
  ];

  return ()
    <>
      <SEOHead 
        title="Mobile App Development Services - Zion Tech Group"""
        description="Professional mobile app development for iOS, Android, and cross-platform solutions. Native and hybrid app development with modern technologies."""
        keywords="mobile app development, iOS development, Android development, React Native, Flutter, cross-platform apps, mobile applications"""
      />
      
      <div className="min-h-screen bg-slate-900 text-white">""
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">""
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30"></div>""
          <div className="absolute inset-0 opacity-20" style={{""
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`'"'"
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center">""
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">""
                <DevicePhoneMobileIcon className="w-5 h-5 text-cyan-400 mr-2" />""
                <span className="text-cyan-300 text-sm font-medium">Mobile Development</span>""
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">""
                Build Powerful
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">""
                  Mobile Applications
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
                Professional mobile app development services for iOS, Android, and cross-platform solutions. Create engaging, high-performance mobile experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">""
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">""
                  Start Your App
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />""
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">""
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mobile Services</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                Comprehensive mobile app development solutions for every platform and business need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""
              {services.map((service, index) => ()
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">""
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">""
                    <service.icon className="w-6 h-6 text-white" />""
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">""
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">""
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-slate-800/30">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                Supported <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Platforms</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                We develop for all major mobile platforms and technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">""
              {platforms.map((platform, index) => ()
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">""
                  <div className="flex items-center justify-center mb-2">""
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400" />""
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{platform}</span>""
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                App <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Features</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                Advanced features and capabilities to make your mobile app stand out.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">""
              {features.map((feature, index) => ()
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">""
                  <div className="flex items-center justify-center mb-2">""
                    <CheckCircleIcon className="w-5 h-5 text-blue-400" />""
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{feature}</span>""
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mobile Development</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                Proven benefits that help you create successful mobile applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">""
              {benefits.map((benefit, index) => ()
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">""
                  <div className="flex items-start">""
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">""
                      <benefit.icon className="w-6 h-6 text-white" />""
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">""
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">""
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">""
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">""
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">""
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">""
              Let our mobile development experts help you create an amazing app that users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">""
                Get Free App Consultation
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />""
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">""
                View Our Apps
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
;
export default MobileDevelopmentPage;