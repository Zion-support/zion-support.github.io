import React from 'react';
import { 
  Server,
  Cloud,
  Network,
  Globe,
  Settings,
  Users,
  Lock,
  Code,
  HardDrive,
  Wifi,
  CheckCircle,
  Shield,
  Database,
  Cpu,
  Monitor
} from 'lucide-react';

export default function ITServicesPage() {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Complete server setup, maintenance, and optimization services.',
      features: ['24/7 Monitoring', 'Backup Solutions', 'Security Updates']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate and manage your infrastructure in the cloud.',
      features: ['AWS/Azure/GCP', 'Cost Optimization', 'Scalability']
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Design and implement robust network solutions.',
      features: ['LAN/WAN Setup', 'Security Configuration', 'Performance Tuning']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance.',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your business.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response']
    },
    {
      icon: Settings,
      title: 'IT Support',
      description: 'Round-the-clock technical support and maintenance.',
      features: ['Help Desk', 'Remote Support', 'On-site Service']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">IT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional IT services and support to keep your business running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance when you need it</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and reliability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}