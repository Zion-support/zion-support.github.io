import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { 
  SignalIcon,
  CpuChipIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
export default function FiveGSolutionsPage() {
  const services = [
    {
      icon: SignalIcon,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for maximum performance and coverage.',
      features: ['Network planning', 'Site surveys', 'Equipment installation', 'Performance optimization']
    },
    {
      icon: CpuChipIcon,
      title: 'Edge Computing Solutions',
      description: 'Ultra-low latency edge computing solutions powered by 5G technology for real-time applications.',
      features: ['Edge servers', 'Data processing', 'Real-time analytics', 'IoT integration']
    },
    {
      icon: GlobeAltIcon,
      title: 'IoT & Smart City Solutions',
      description: 'Comprehensive IoT solutions and smart city implementations leveraging 5G connectivity.',
      features: ['Sensor networks', 'Data collection', 'Smart monitoring', 'Automated systems']
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Applications',
      description: 'Next-generation mobile applications designed to leverage 5G capabilities and performance.',
      features: ['AR/VR apps', 'Real-time streaming', 'High-bandwidth apps', 'Cloud integration']
    }
  ]
  const applications = [
    { name: 'Autonomous Vehicles', description: 'Real-time communication for self-driving cars' },
    { name: 'Remote Surgery', description: 'Ultra-low latency medical procedures' },
    { name: 'Smart Manufacturing', description: 'Industrial IoT and automation' },
    { name: 'Virtual Reality', description: 'Immersive VR experiences' },
    { name: 'Smart Grids', description: 'Energy management systems' },
    { name: 'Telemedicine', description: 'Remote healthcare services' }
  ]
  return (
    <>
      <SEO 
        title="5G Solutions - Zion Tech Group"
        description="Advanced 5G solutions including network infrastructure, edge computing, IoT applications, and smart city implementations. Transform your business with next-generation connectivity."
        keywords="5G solutions, 5G network, edge computing, IoT, smart city, mobile applications, ultra-low latency, 5G infrastructure"
        url="/5g-solutions"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
        </div>

        <$3 className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <SignalIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              5G Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Next-Generation Connectivity for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G solutions including network infrastructure, 
              edge computing, IoT applications, and smart city implementations.
            </p>

            <$3 className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get 5G Assessment
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our 5G Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G solutions for businesses of all sizes
            </p>
          </div>

          <$3 className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              5G Applications
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Revolutionary applications enabled by 5G technology
            </p>

            <$3 className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {applications.map((application, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-600 hover:border-indigo-500 transition-colors">
                  <div className="text-white font-semibold text-lg mb-2">{application.name}</div>
                  <div className="text-gray-400 text-sm">{application.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Our 5G Solutions?
            </h2>

            <$3 className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">1ms</div>
                <div className="text-gray-300">Ultra-Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10Gbps</div>
                <div className="text-gray-300">Peak Data Rates</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">1M+</div>
                <div className="text-gray-300">Devices per km²</div>
              </div>
            </div>

            <$3 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your 5G Assessment <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready for 5G Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how 5G solutions can revolutionize your business
            </p>

            <$3 className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-indigo-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-indigo-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-indigo-400" />
                <span>Middletown, DE</span>
              </div>
            </div>

            <$3 className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Get 5G Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )}