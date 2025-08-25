import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Users, 
  Building2, 
  Smartphone,
  Cloud,
  Database,
  Network,
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target
} from 'lucide-react';

export default function FiveGEnterpriseSolutions() {
  const features = [
    {
      icon: Wifi,
      title: "Ultra-Fast Connectivity",
      description: "Experience lightning-fast 5G speeds with ultra-low latency for seamless enterprise operations."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols ensuring your data and communications remain protected."
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Sub-10ms latency for real-time applications, IoT devices, and critical business processes."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide 5G network coverage with seamless roaming and consistent performance."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time network monitoring and predictive analytics for optimal performance."
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "Flexible infrastructure that grows with your business needs and user demands."
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Smart Manufacturing",
      description: "Enable Industry 4.0 with real-time monitoring, predictive maintenance, and automated quality control."
    },
    {
      icon: Smartphone,
      title: "Mobile Workforce",
      description: "Empower remote teams with high-speed connectivity for video conferencing and cloud applications."
    },
    {
      icon: Cloud,
      title: "Edge Computing",
      description: "Deploy edge computing solutions for faster data processing and reduced cloud dependency."
    },
    {
      icon: Database,
      title: "IoT Integration",
      description: "Connect thousands of IoT devices with reliable, high-bandwidth 5G networks."
    },
    {
      icon: Network,
      title: "Network Slicing",
      description: "Create dedicated network segments for different applications and security requirements."
    },
    {
      icon: Cpu,
      title: "AI & ML Applications",
      description: "Support advanced AI and machine learning workloads with high-performance connectivity."
    }
  ];

  const benefits = [
    "10x faster data transfer speeds compared to 4G",
    "99.9% network uptime guarantee",
    "24/7 enterprise support and monitoring",
    "Custom network configurations for your business",
    "Seamless integration with existing infrastructure",
    "Compliance with industry security standards"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Wifi className="w-12 h-12 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                5G Enterprise Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with next-generation 5G connectivity. 
              Experience ultra-fast speeds, ultra-low latency, and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our enterprise-grade 5G solutions deliver unmatched performance, security, and reliability 
              to power your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Enterprise Use Cases
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover how 5G technology is revolutionizing industries and transforming business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Key Benefits
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Experience the advantages of enterprise-grade 5G connectivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-lg">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with 5G?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Join the future of connectivity. Our expert team is ready to help you implement 
              cutting-edge 5G solutions that will revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Related Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Explore our comprehensive suite of technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/ai-solutions"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                AI Solutions
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Leverage artificial intelligence to optimize your 5G network and business processes.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/cybersecurity"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Cybersecurity
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Protect your 5G infrastructure with enterprise-grade security solutions.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/it-infrastructure"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                IT Infrastructure
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Build a robust foundation for your 5G enterprise network.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}