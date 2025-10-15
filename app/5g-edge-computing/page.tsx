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

export default function EdgeComputingPage() {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'Ultra-Low Latency',
      description: 'Process data at the edge with minimal latency for real-time applications.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Instant responses']
    },
    {
      icon: CloudIcon,
      title: 'Distributed Computing',
      description: 'Distribute computing power across edge nodes for optimal performance.',
      benefits: ['Scalable processing', 'Load balancing', 'High availability']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enhanced Security',
      description: 'Keep sensitive data processing local with advanced security measures.',
      benefits: ['Data privacy', 'Local processing', 'Secure communication']
    },
    {
      icon: ChartBarIcon,
      title: 'Intelligent Analytics',
      description: 'Run AI and ML models at the edge for instant insights.',
      benefits: ['Real-time AI', 'Local ML', 'Smart decisions']
    }
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Enable real-time decision making for self-driving cars.',
      icon: BoltIcon
    },
    {
      title: 'Industrial IoT',
      description: 'Monitor and control industrial equipment in real-time.',
      icon: CpuChipIcon
    },
    {
      title: 'Smart Healthcare',
      description: 'Enable remote surgery and real-time patient monitoring.',
      icon: ShieldCheckIcon
    },
    {
      title: 'AR/VR Applications',
      description: 'Deliver immersive experiences with ultra-low latency.',
      icon: GlobeAltIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Leverage 5G edge computing for ultra-low latency applications. Real-time processing, distributed computing, and enhanced security." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                5G Edge Computing Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Bring computing power closer to your data sources with 5G edge computing for ultra-low latency applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
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
                Edge Computing Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5G edge computing platform delivers unmatched performance and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
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

        {/* Applications Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Edge Computing Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the transformative applications of 5G edge computing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <div key={app.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <app.icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {app.title}
                  </h3>
                  <p className="text-gray-600">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Deploy Edge Computing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G edge computing can transform your applications.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
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