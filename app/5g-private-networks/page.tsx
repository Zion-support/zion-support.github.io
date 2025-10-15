import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  CloudIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function PrivateNetworksPage() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Secure Private Networks',
      description: 'Deploy dedicated 5G networks with enterprise-grade security.',
      benefits: ['Data isolation', 'Custom security', 'Compliance ready']
    },
    {
      icon: CloudIcon,
      title: 'Network Slicing',
      description: 'Create virtual network slices for different applications.',
      benefits: ['Resource allocation', 'QoS guarantees', 'Flexible deployment']
    },
    {
      icon: CpuChipIcon,
      title: 'Edge Computing',
      description: 'Process data locally with ultra-low latency capabilities.',
      benefits: ['Local processing', 'Reduced latency', 'Better performance']
    },
    {
      icon: ChartBarIcon,
      title: 'Network Management',
      description: 'Comprehensive monitoring and management of your private network.',
      benefits: ['Real-time monitoring', 'Predictive analytics', 'Automated optimization']
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Enable smart factories with private 5G networks.',
      icon: CpuChipIcon
    },
    {
      title: 'Healthcare',
      description: 'Secure medical data transmission and telemedicine.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Government',
      description: 'Deploy secure government communications networks.',
      icon: GlobeAltIcon
    },
    {
      title: 'Education',
      description: 'Create campus-wide private networks for educational institutions.',
      icon: ChartBarIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Private Networks - Zion Tech Group</title>
        <meta name="description" content="Deploy secure 5G private networks for enterprise applications. Network slicing, edge computing, and comprehensive management." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                5G Private Networks
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Deploy dedicated 5G private networks with enterprise-grade security and performance for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-300"
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
                Private Network Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5G private networks provide enterprise-grade security and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
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

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deploy private 5G networks across various industries for enhanced security and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={useCase.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <useCase.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Deploy Private Networks?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G private networks can secure your organization's communications.
            </p>
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
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