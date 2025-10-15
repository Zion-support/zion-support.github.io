import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  EyeIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const AugmentedRealitySolutionsPage: React.FC = () => {
  const services = [
    {
      icon: EyeIcon,
      title: 'AR App Development',
      description: 'Custom augmented reality applications for mobile and wearable devices with advanced tracking and rendering.',
      features: ['3D object tracking', 'Real-time rendering', 'Cross-platform support', 'Cloud integration'],
      pricing: 'Starting at $12,999/mo'
    },
    {
      icon: CpuChipIcon,
      title: 'AR Hardware Integration',
      description: 'Integration of AR solutions with existing hardware and IoT devices for seamless user experience.',
      features: ['Hardware compatibility', 'Sensor integration', 'Performance optimization', 'Testing'],
      pricing: 'Starting at $8,999/mo'
    },
    {
      icon: GlobeAltIcon,
      title: 'WebAR Solutions',
      description: 'Browser-based augmented reality experiences that work across all devices without app installation.',
      features: ['Browser compatibility', 'No app required', 'Cross-platform', 'Easy deployment'],
      pricing: 'Starting at $6,999/mo'
    },
    {
      icon: UserGroupIcon,
      title: 'AR Training Solutions',
      description: 'Immersive training and education solutions using augmented reality for enhanced learning experiences.',
      features: ['Interactive training', 'Progress tracking', 'Assessment tools', 'Analytics'],
      pricing: 'Starting at $9,999/mo'
    }
  ];

  const industries = [
    { name: 'Manufacturing', description: 'Assembly guidance and quality control' },
    { name: 'Healthcare', description: 'Medical training and patient care' },
    { name: 'Education', description: 'Interactive learning and virtual labs' },
    { name: 'Retail', description: 'Virtual try-on and product visualization' },
    { name: 'Real Estate', description: 'Virtual property tours and staging' },
    { name: 'Automotive', description: 'Design visualization and maintenance' }
  ];

  const stats = [
    { number: '95%', label: 'User Engagement' },
    { number: '60%', label: 'Learning Improvement' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'AR Projects' }
  ];

  return (
    <>
      <SEOHead
        title="Augmented Reality Solutions - Zion Tech Group"
        description="Cutting-edge augmented reality solutions including AR app development, hardware integration, WebAR, and training solutions. Transform your business with AR technology."
        keywords="augmented reality, AR development, WebAR, AR training, AR hardware, immersive technology, AR solutions"
        canonicalUrl="https://ziontechgroup.com/augmented-reality-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                <EyeIcon className="w-5 h-5 text-pink-400 mr-2" />
                <span className="text-pink-300 text-sm font-medium">Augmented Reality</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent holographic">
                  Augmented Reality Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with immersive augmented reality solutions. From mobile apps to WebAR, we create engaging AR experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25">
                  Explore AR Solutions
                </button>
                <button className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2 neon-text">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">AR Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive augmented reality solutions designed to enhance user engagement and business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-pink-400 font-medium neon-text">{service.pricing}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full cyber-button py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Industries We Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how augmented reality can transform your industry and improve user experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <EyeIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ready for Augmented Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with immersive augmented reality solutions. Schedule a consultation to see how AR can enhance your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact AR Team
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> ar@ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AugmentedRealitySolutionsPage;