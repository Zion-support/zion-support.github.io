import React from 'react';
import { 
  Wifi, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Network,
  Database
} from 'lucide-react';

export default function FiveGSolutionsPage() {
  const solutions = [
    {
      icon: Network,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network infrastructure solutions for enterprise and carrier deployments.',
      features: ['Network Design', 'Equipment Deployment', 'Security & Compliance'],
      href: '/5g-network-infrastructure'
    },
    {
      icon: Cpu,
      title: '5G Edge Computing',
      description: 'Leverage 5G edge computing for ultra-low latency applications and real-time processing.',
      features: ['Edge Processing', 'Distributed Computing', 'Instant Response'],
      href: '/5g-edge-computing'
    },
    {
      icon: BarChart3,
      title: '5G Data Analytics',
      description: 'Advanced data analytics solutions powered by 5G technology for real-time insights.',
      features: ['Real-time Analytics', 'Big Data Processing', 'Edge Computing'],
      href: '/5g-data-analytics'
    },
    {
      icon: Smartphone,
      title: '5G Mobile Applications',
      description: 'Develop high-performance mobile applications that leverage 5G capabilities.',
      features: ['Native Apps', 'Cross-Platform', 'Real-time Features'],
      href: '/5g-mobile-applications'
    },
    {
      icon: Globe,
      title: '5G Smart City Solutions',
      description: 'Transform your city with 5G-powered smart city solutions and IoT applications.',
      features: ['Smart Infrastructure', 'Data Analytics', 'Public Safety'],
      href: '/5g-smart-city-solutions'
    },
    {
      icon: Shield,
      title: '5G Private Networks',
      description: 'Deploy dedicated 5G private networks for enterprise and industrial applications.',
      features: ['Private Infrastructure', 'Network Slicing', 'Edge Computing'],
      href: '/5g-private-networks'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">5G Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next-generation 5G network solutions for modern businesses. 
            Transform your operations with ultra-fast, reliable, and secure 5G technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <solution.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={solution.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our 5G Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ultra-Fast Speed</h3>
              <p className="text-gray-600">Experience lightning-fast 5G speeds up to 10x faster than 4G</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security with end-to-end encryption and compliance</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Latency</h3>
              <p className="text-gray-600">Ultra-low latency for real-time applications and IoT devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}