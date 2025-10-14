import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Integration',
      description: 'Integrate artificial intelligence into your existing systems to automate processes and gain intelligent insights.',
      features: [
        'Process automation',
        'Predictive analytics',
        'Intelligent decision making',
        'Machine learning models'
      ]
    },
    {
      icon: GlobeAltIcon,
      title: 'Cloud Migration',
      description: 'Migrate your infrastructure to the cloud for improved scalability, security, and cost efficiency.',
      features: [
        'Zero-downtime migration',
        'Multi-cloud strategy',
        'Cost optimization',
        'Enhanced security'
      ]
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: [
        'Real-time dashboards',
        'Predictive modeling',
        'Data visualization',
        'Custom reporting'
      ]
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Solutions',
      description: 'Develop mobile applications and responsive web solutions to reach your customers anywhere, anytime.',
      features: [
        'Native mobile apps',
        'Progressive web apps',
        'Cross-platform development',
        'Mobile optimization'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Implement comprehensive security measures to protect your digital assets and ensure compliance.',
      features: [
        'Threat detection',
        'Data encryption',
        'Access control',
        'Compliance management'
      ]
    },
    {
      icon: CogIcon,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and reduce human error.',
      features: [
        'Workflow automation',
        'Task scheduling',
        'Integration management',
        'Performance monitoring'
      ]
    }
  ];

  const benefits = [
    'Increased Efficiency',
    'Cost Reduction',
    'Better Customer Experience',
    'Enhanced Security',
    'Scalable Solutions',
    'Competitive Advantage'
  ];

  const stats = [
    { number: '40%', label: 'Average Cost Reduction' },
    { number: '60%', label: 'Process Efficiency Gain' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'System Availability' }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including AI integration, cloud migration, and process automation for modern businesses." />
        <meta name="keywords" content="digital transformation, AI integration, cloud migration, process automation, business modernization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform Your Business for the Digital Age
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Embrace the future with our comprehensive digital transformation services. 
              We help businesses modernize their operations, integrate cutting-edge technology, 
              and achieve sustainable growth in the digital economy.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions designed to modernize your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our digital transformation solutions deliver measurable business impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Digital Transformation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive transformation solutions that keep your business competitive
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                <p className="text-gray-300">
                  Professional transformation services that ensure your business stays ahead of the curve.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you navigate your digital transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Transformation
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;