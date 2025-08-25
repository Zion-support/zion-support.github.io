import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Building, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Cpu,
  Wifi,
  Target
} from 'lucide-react';

export default function FiveGPrivateNetworkSolutions() {
  const privateNetworkFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Dedicated private networks with military-grade security protocols"
    },
    {
      icon: Lock,
      title: "Network Isolation",
      description: "Complete isolation from public networks for maximum security"
    },
    {
      icon: Building,
      title: "Custom Infrastructure",
      description: "Tailored network architecture designed for your specific needs"
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Sub-5ms latency for critical real-time applications"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide private network deployment capabilities"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Distributed computing at network edge for optimal performance"
    }
  ];

  const benefits = [
    "100% network isolation and security",
    "Customizable network architecture",
    "Dedicated bandwidth allocation",
    "Real-time network monitoring and control",
    "Compliance with industry regulations",
    "24/7 dedicated support and maintenance"
  ];

  const industrySolutions = [
    {
      title: "Manufacturing",
      description: "Private networks for smart factories and industrial IoT",
      icon: Building
    },
    {
      title: "Healthcare",
      description: "Secure networks for medical devices and patient data",
      icon: Users
    },
    {
      title: "Financial Services",
      description: "High-security networks for banking and trading",
      icon: Shield
    },
    {
      title: "Government",
      description: "Classified networks for defense and public safety",
      icon: Lock
    }
  ];

  const deploymentOptions = [
    {
      title: "On-Premises",
      description: "Complete private network within your facilities",
      icon: Building
    },
    {
      title: "Hybrid Cloud",
      description: "Combination of on-premises and cloud infrastructure",
      icon: Globe
    },
    {
      title: "Multi-Site",
      description: "Connected private networks across multiple locations",
      icon: Wifi
    },
    {
      title: "Edge Deployment",
      description: "Distributed network nodes for optimal performance",
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Shield className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              5G Private Network Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Secure, dedicated 5G networks designed exclusively for your enterprise. 
              Experience unmatched security, performance, and control with our private network solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Build Your Private Network
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Private Network Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our private 5G networks provide enterprise-grade security, performance, 
              and customization options that public networks simply cannot match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privateNetworkFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose Private Networks?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Private 5G networks offer unparalleled advantages for enterprises 
              that demand the highest levels of security and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our private network solutions are tailored to meet the unique 
              requirements of different industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Flexible Deployment Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the deployment model that best fits your infrastructure 
              requirements and security needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentOptions.map((option, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{option.title}</h3>
                <p className="text-gray-300">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our private networks incorporate multiple layers of security 
              to protect your critical business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Lock className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Network Isolation</h3>
              <p className="text-gray-300">Complete physical and logical separation from public networks</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Encryption</h3>
              <p className="text-gray-300">End-to-end encryption for all data transmission</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Target className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Access Control</h3>
              <p className="text-gray-300">Multi-factor authentication and role-based access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/30">
            <Star className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Your Private 5G Network?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the ultimate in network security, performance, and control 
              with our enterprise-grade private network solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Planning
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}