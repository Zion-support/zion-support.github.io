import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  GlobeAltIcon, 
  CloudIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function SmartCitySolutionsPage() {
  const features = [
    {
      icon: GlobeAltIcon,
      title: 'Smart Infrastructure',
      description: 'Connect and manage city infrastructure with 5G technology.',
      benefits: ['Traffic management', 'Energy optimization', 'Waste management']
    },
    {
      icon: CloudIcon,
      title: 'Data Analytics',
      description: 'Analyze city data in real-time for better decision making.',
      benefits: ['Real-time insights', 'Predictive analytics', 'Smart alerts']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Public Safety',
      description: 'Enhance public safety with connected surveillance and emergency systems.',
      benefits: ['Emergency response', 'Crime prevention', 'Disaster management']
    },
    {
      icon: ChartBarIcon,
      title: 'Citizen Services',
      description: 'Improve citizen experience with digital government services.',
      benefits: ['Online services', 'Mobile apps', 'Digital payments']
    }
  ];

  const solutions = [
    {
      title: 'Smart Transportation',
      description: 'Optimize traffic flow and public transportation systems.',
      icon: BoltIcon
    },
    {
      title: 'Environmental Monitoring',
      description: 'Monitor air quality, noise levels, and environmental conditions.',
      icon: GlobeAltIcon
    },
    {
      title: 'Smart Buildings',
      description: 'Manage energy consumption and building operations efficiently.',
      icon: CpuChipIcon
    },
    {
      title: 'Digital Governance',
      description: 'Enable digital government services and citizen engagement.',
      icon: ChartBarIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your city with 5G smart city solutions. Smart infrastructure, data analytics, public safety, and citizen services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                5G Smart City Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your city into a smart, connected, and sustainable urban environment with 5G technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400/10 transition-all duration-300"
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
                Smart City Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5G smart city solutions provide comprehensive urban management capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
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

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Smart City Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for modern smart city challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={solution.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <solution.icon className="h-12 w-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Your Smart City?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G smart city solutions can transform your urban environment.
            </p>
            <Link
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
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