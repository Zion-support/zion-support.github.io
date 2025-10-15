import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function NetworkInfrastructurePage() {
  const features = [
    {
      icon: CpuChipIcon,
      title: '5G Core Network',
      description: 'Deploy advanced 5G core network infrastructure for optimal performance.',
      benefits: ['Network slicing', 'Edge computing', 'Ultra-low latency']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Integration',
      description: 'Integrate 5G networks with cloud platforms for scalable services.',
      benefits: ['Hybrid cloud', 'Multi-cloud support', 'Auto-scaling']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Network Security',
      description: 'Implement comprehensive security measures for 5G infrastructure.',
      benefits: ['Zero-trust architecture', 'Encryption', 'Threat detection']
    },
    {
      icon: ChartBarIcon,
      title: 'Network Analytics',
      description: 'Monitor and optimize network performance with real-time analytics.',
      benefits: ['Performance monitoring', 'Predictive maintenance', 'Optimization']
    }
  ];

  const components = [
    {
      title: '5G Base Stations',
      description: 'Deploy and manage 5G base stations for comprehensive coverage.',
      icon: GlobeAltIcon
    },
    {
      title: 'Edge Servers',
      description: 'Install edge computing servers for low-latency applications.',
      icon: CpuChipIcon
    },
    {
      title: 'Network Management',
      description: 'Comprehensive network management and monitoring solutions.',
      icon: ChartBarIcon
    },
    {
      title: 'Security Systems',
      description: 'Advanced security systems for network protection.',
      icon: ShieldCheckIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Deploy and manage 5G network infrastructure. Core networks, base stations, edge computing, and security solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                5G Network Infrastructure
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Deploy and manage comprehensive 5G network infrastructure for optimal performance and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Infrastructure Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5G network infrastructure provides enterprise-grade performance and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Infrastructure Components
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete 5G network infrastructure components for comprehensive coverage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {components.map((component, index) => (
                <div key={component.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <component.icon className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {component.title}
                  </h3>
                  <p className="text-gray-600">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Deploy 5G Infrastructure?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G network infrastructure can transform your operations.
            </p>
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
            >
              Schedule Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}