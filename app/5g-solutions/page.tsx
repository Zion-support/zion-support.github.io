import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  BoltIcon, 
  CloudIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function FiveGSolutionsPage() {
  const solutions = [
    {
      title: '5G Data Analytics',
      description: 'Harness the power of 5G for real-time data processing and analytics.',
      icon: ChartBarIcon,
      href: '/5g-data-analytics',
      gradient: 'from-cyan-500 to-purple-500'
    },
    {
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions with ultra-low latency capabilities.',
      icon: CpuChipIcon,
      href: '/5g-edge-computing',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: '5G IoT Solutions',
      description: 'Connect and manage millions of IoT devices with 5G technology.',
      icon: GlobeAltIcon,
      href: '/5g-iot-solutions',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: '5G Mobile Applications',
      description: 'Build high-performance mobile applications powered by 5G.',
      icon: BoltIcon,
      href: '/5g-mobile-applications',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: '5G Network Infrastructure',
      description: 'Deploy and manage comprehensive 5G network infrastructure.',
      icon: CloudIcon,
      href: '/5g-network-infrastructure',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: '5G Private Networks',
      description: 'Deploy secure private 5G networks for enterprise applications.',
      icon: ShieldCheckIcon,
      href: '/5g-private-networks',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: '5G Smart City Solutions',
      description: 'Transform cities with 5G-powered smart infrastructure.',
      icon: GlobeAltIcon,
      href: '/5g-smart-city-solutions',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications.',
      icon: BoltIcon
    },
    {
      title: 'High Bandwidth',
      description: 'Support massive data throughput for bandwidth-intensive applications.',
      icon: CloudIcon
    },
    {
      title: 'Massive Connectivity',
      description: 'Connect millions of devices simultaneously with 5G networks.',
      icon: GlobeAltIcon
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade security features for mission-critical applications.',
      icon: ShieldCheckIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions for modern businesses. Data analytics, edge computing, IoT, mobile apps, and network infrastructure." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                5G Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your business with next-generation 5G technology solutions designed for the future of connectivity.
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

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our 5G Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive 5G solutions tailored to meet your business needs and drive digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Link 
                  key={solution.title}
                  href={solution.href}
                  className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${solution.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <solution.icon className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose 5G?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the transformative benefits of 5G technology for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="text-center"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
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
              Ready to Embrace 5G?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G solutions can transform your business operations and drive innovation.
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