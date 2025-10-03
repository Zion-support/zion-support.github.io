import React from 'react';
// Metadata handled by React Helmet
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Smartphone, 
  Monitor, 
  Camera, 
  Mic, 
  Search, 
  Settings, 
  Layers, 
  Network, 
  Globe, 
  Lock, 
  Target, 
  Activity, 
  PieChart, 
  LineChart, 
  RefreshCw, 
  Download, 
  Upload, 
  Play, 
  Pause, 
  Square, 
  Triangle, 
  Circle, 
  Hexagon, 
  Building, 
  Home, 
  Car, 
  Plane, 
  Ship, 
  Truck, 
  Package, 
  ShoppingCart, 
  MapPin, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Shield,
  Database,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Headphones,
  Code,
  Bot,
  FileText,
  Users,
  Brain,
  MessageSquare,
  Eye,
  TrendingUp,
  BarChart3,
  Calculator
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IoT Smart Infrastructure Platform | Zion Tech Group - Connected Solutions',
  description: 'Comprehensive IoT platform for smart cities, buildings, and infrastructure. Real-time monitoring, predictive maintenance, and intelligent automation.',
  keywords: 'IoT platform, smart infrastructure, connected devices, predictive maintenance, smart cities, building automation, industrial IoT',
};

export default function IoTSmartInfrastructurePlatformPage() {
  const features = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Smart Device Management",
      description: "Centralized platform to manage thousands of connected devices across your infrastructure.",
      benefits: [
        "Real-time device monitoring and control",
        "Automated device provisioning and updates",
        "Remote diagnostics and troubleshooting",
        "Device lifecycle management"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Maintenance",
      description: "AI-powered analytics to predict equipment failures before they occur, reducing downtime and costs.",
      benefits: [
        "Machine learning-based failure prediction",
        "Automated maintenance scheduling",
        "Cost optimization through preventive actions",
        "Equipment performance optimization"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Enterprise-grade security for IoT devices and data with end-to-end encryption.",
      benefits: [
        "End-to-end encryption for all data",
        "Device authentication and authorization",
        "Threat detection and response",
        "Compliance with industry standards"
      ]
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description: "Live dashboards and analytics to monitor infrastructure performance and make data-driven decisions.",
      benefits: [
        "Real-time performance monitoring",
        "Customizable dashboards and reports",
        "Historical data analysis and trends",
        "Automated alerting and notifications"
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Optimization",
      description: "Intelligent energy management to reduce consumption and optimize efficiency across your infrastructure.",
      benefits: [
        "Smart energy consumption monitoring",
        "Automated energy optimization",
        "Renewable energy integration",
        "Cost reduction through efficiency"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Cloud-native platform that scales from single buildings to entire smart cities.",
      benefits: [
        "Horizontal and vertical scaling",
        "Multi-tenant architecture",
        "Global deployment capabilities",
        "Edge computing support"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Building",
      price: "$199",
      period: "/month",
      description: "Perfect for smart buildings and small facilities",
      features: [
        "Up to 100 connected devices",
        "Basic monitoring and control",
        "Standard security features",
        "Email support",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Campus",
      price: "$799",
      period: "/month",
      description: "Advanced features for campuses and medium facilities",
      features: [
        "Up to 1,000 connected devices",
        "Advanced analytics and AI insights",
        "Predictive maintenance capabilities",
        "Priority support",
        "Custom integrations",
        "Advanced security features",
        "Multi-site management",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "City",
      price: "Custom",
      period: "",
      description: "Full-scale solution for smart cities and large infrastructure",
      features: [
        "Unlimited connected devices",
        "Custom AI model development",
        "Full white-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "On-premise deployment option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Smart Buildings",
      challenge: "Managing energy consumption and optimizing building operations",
      solution: "IoT sensors monitor occupancy, temperature, and energy usage to automatically adjust HVAC and lighting systems",
      results: "35% reduction in energy costs, 50% improvement in occupant comfort"
    },
    {
      industry: "Manufacturing",
      challenge: "Preventing equipment failures and optimizing production efficiency",
      solution: "Predictive maintenance algorithms analyze sensor data to predict equipment failures before they occur",
      results: "60% reduction in unplanned downtime, 25% increase in production efficiency"
    },
    {
      industry: "Smart Cities",
      challenge: "Managing traffic flow and reducing congestion",
      solution: "Connected traffic sensors and AI algorithms optimize traffic light timing and route recommendations",
      results: "30% reduction in traffic congestion, 20% decrease in travel times"
    },
    {
      industry: "Healthcare",
      challenge: "Monitoring patient safety and optimizing facility operations",
      solution: "IoT sensors track patient movement, equipment status, and environmental conditions",
      results: "40% improvement in patient safety, 35% reduction in operational costs"
    }
  ];

  const capabilities = [
    { metric: "Device Support", value: "10,000+", description: "Simultaneous connected devices per deployment" },
    { metric: "Uptime", value: "99.9%", description: "Platform availability and reliability" },
    { metric: "Data Processing", value: "1M+", description: "Data points processed per second" },
    { metric: "Energy Savings", value: "40%", description: "Average energy cost reduction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IoT Smart Infrastructure Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your infrastructure with our comprehensive IoT platform. Connect, monitor, and optimize 
              your buildings, facilities, and cities with intelligent automation and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                href="#demo" 
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Capabilities</h2>
            <p className="text-xl text-gray-600">Proven performance at scale</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{capability.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{capability.metric}</div>
                <div className="text-sm text-gray-600">{capability.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive IoT Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build and manage smart infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600 mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your infrastructure needs. All plans include a 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 transition-all ${
                tier.popular ? 'border-purple-500 relative' : 'border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={tier.name === 'City' ? '/contact' : '/contact'}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how organizations are transforming their infrastructure with IoT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {useCase.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenge</h3>
                  <p className="text-gray-600 mb-4">{useCase.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-600 mb-4">{useCase.solution}</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Results</h3>
                  <p className="text-green-700 font-medium">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Smart Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join leading organizations transforming their infrastructure with IoT technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get Started Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}