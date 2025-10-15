import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  CloudIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function DataAnalyticsPage() {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Real-time Analytics',
      description: 'Process and analyze data in real-time with 5G\'s ultra-low latency capabilities.',
      benefits: ['Instant insights', 'Live dashboards', 'Real-time alerts']
    },
    {
      icon: CpuChipIcon,
      title: 'Edge Computing',
      description: 'Leverage edge computing for faster data processing and reduced latency.',
      benefits: ['Faster processing', 'Reduced latency', 'Better performance']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate with cloud platforms for scalable data storage and processing.',
      benefits: ['Scalable storage', 'Cloud processing', 'Easy integration']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Advanced Security',
      description: 'Enterprise-grade security for your data analytics infrastructure.',
      benefits: ['Data encryption', 'Access control', 'Compliance ready']
    }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Monitor traffic patterns, air quality, and urban infrastructure in real-time.',
      icon: GlobeAltIcon
    },
    {
      title: 'Manufacturing',
      description: 'Optimize production lines and predict maintenance needs with IoT sensors.',
      icon: CpuChipIcon
    },
    {
      title: 'Healthcare',
      description: 'Enable remote patient monitoring and telemedicine with high-speed data transfer.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Retail',
      description: 'Analyze customer behavior and optimize inventory management in real-time.',
      icon: ChartBarIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your business with 5G-powered data analytics solutions. Real-time insights, edge computing, and cloud integration." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-purple-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                5G Data Analytics Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Harness the power of 5G networks to unlock real-time data insights and drive intelligent business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
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
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5G data analytics platform provides cutting-edge capabilities for modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
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
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how 5G data analytics can transform your industry.
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
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Data Analytics?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G data analytics can revolutionize your business operations.
            </p>
            <Link
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
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