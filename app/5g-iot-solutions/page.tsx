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

export default function IoTSolutionsPage() {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'Massive IoT Connectivity',
      description: 'Connect millions of devices with 5G\'s enhanced capacity and efficiency.',
      benefits: ['1M+ devices/km²', 'Low power consumption', 'Long battery life']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate IoT data with cloud platforms for scalable processing.',
      benefits: ['Real-time sync', 'Scalable storage', 'Easy management']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enhanced Security',
      description: 'Protect your IoT devices and data with advanced security protocols.',
      benefits: ['Device authentication', 'Data encryption', 'Secure communication']
    },
    {
      icon: ChartBarIcon,
      title: 'Smart Analytics',
      description: 'Extract valuable insights from IoT data with AI-powered analytics.',
      benefits: ['Predictive analytics', 'Pattern recognition', 'Automated insights']
    }
  ];

  const industries = [
    {
      title: 'Smart Manufacturing',
      description: 'Optimize production with connected sensors and real-time monitoring.',
      icon: CpuChipIcon
    },
    {
      title: 'Smart Cities',
      description: 'Build intelligent urban infrastructure with connected devices.',
      icon: GlobeAltIcon
    },
    {
      title: 'Healthcare IoT',
      description: 'Enable remote patient monitoring and telemedicine solutions.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Agriculture',
      description: 'Implement precision farming with IoT sensors and automation.',
      icon: ChartBarIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Connect and manage millions of IoT devices with 5G technology. Smart cities, manufacturing, healthcare, and agriculture solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                5G IoT Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect and manage millions of IoT devices with 5G technology for smart cities, manufacturing, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
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
                IoT Solution Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5G IoT platform provides comprehensive connectivity and management capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
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

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your industry with 5G-powered IoT solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={industry.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <industry.icon className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Connect Your IoT Devices?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G IoT solutions can transform your business operations.
            </p>
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
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