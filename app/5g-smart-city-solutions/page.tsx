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

export default function FiveGSmartCitySolutionsPage() {
  const features = [
  {
    "icon": "Globe",
    "title": "Smart Infrastructure",
    "description": "Deploy smart city infrastructure with 5G connectivity",
    "benefits": [
      "IoT sensors",
      "Smart lighting",
      "Traffic management"
    ]
  },
  {
    "icon": "BarChart3",
    "title": "Data Analytics",
    "description": "Analyze city data for better decision making",
    "benefits": [
      "Real-time insights",
      "Predictive analytics",
      "Resource optimization"
    ]
  },
  {
    "icon": "Shield",
    "title": "Public Safety",
    "description": "Enhance public safety with 5G-enabled systems",
    "benefits": [
      "Emergency response",
      "Surveillance systems",
      "Communication networks"
    ]
  }
];

  const iconMap = {
    BarChart3,
    Database,
    Cpu,
    Network,
    Wifi,
    Shield,
    Zap,
    Globe,
    Smartphone,
    Cloud
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">5G Smart City Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your city with 5G-powered smart city solutions and IoT applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our 5G Smart City Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge 5G solutions powered by the latest technology</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Ultra-low latency and high-speed connectivity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}