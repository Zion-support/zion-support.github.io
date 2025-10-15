import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  BarChart3,
  Target,
  Rocket,
  Users,
  Award,
  Clock,
  Globe,
  Lock,
  TrendingUp,
  Database,
  Network,
  Code,
  Settings,
  Wifi,
  Signal
} from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const fiveGServices = [
    {
      title: '5G Network Implementation',
      description: 'Complete 5G network deployment and optimization for businesses and organizations.',
      features: [
        '5G network planning and design',
        'Infrastructure deployment',
        'Network optimization',
        'Performance monitoring',
        'Security implementation',
        '24/7 network support'
      ],
      pricing: 'Custom Pricing',
      icon: <Network className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: '5G IoT Solutions',
      description: 'Internet of Things solutions powered by 5G connectivity for smart devices.',
      features: [
        'IoT device integration',
        'Real-time data processing',
        'Edge computing implementation',
        'Device management platform',
        'Data analytics and insights',
        'Scalable architecture'
      ],
      pricing: 'From $5,000/month',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: '5G Smart City Solutions',
      description: 'Comprehensive smart city infrastructure powered by 5G technology.',
      features: [
        'Smart traffic management',
        'Environmental monitoring',
        'Public safety systems',
        'Energy management',
        'Citizen engagement platforms',
        'Data-driven decision making'
      ],
      pricing: 'From $50,000',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: '5G Edge Computing',
      description: 'Edge computing solutions that leverage 5G for ultra-low latency applications.',
      features: [
        'Edge server deployment',
        'Latency optimization',
        'Real-time processing',
        'Distributed computing',
        'Bandwidth optimization',
        'Security and compliance'
      ],
      pricing: 'From $3,500/month',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: '5G Private Networks',
      description: 'Dedicated 5G private networks for enterprise and industrial applications.',
      features: [
        'Private network design',
        'Dedicated spectrum allocation',
        'Custom security protocols',
        'Industrial IoT integration',
        'Network slicing',
        'Priority traffic management'
      ],
      pricing: 'From $25,000',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: '5G Mobile Applications',
      description: 'Next-generation mobile applications that leverage 5G capabilities.',
      features: [
        'Ultra-fast data transfer',
        'Real-time video streaming',
        'AR/VR integration',
        'Cloud gaming support',
        'IoT device control',
        'Enhanced user experience'
      ],
      pricing: 'From $15,000',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-red-500 to-orange-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'We assess your current infrastructure and plan the optimal 5G solution.',
      icon: <Target className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design a robust 5G architecture tailored to your needs.',
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the 5G solution with minimal disruption to your operations.',
      icon: <Code className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing and optimization to ensure peak 5G performance.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Launch your 5G solution with ongoing support and maintenance.',
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Kim',
      company: 'Smart City Initiative',
      role: 'Project Director',
      content: 'The 5G smart city solution has transformed our urban infrastructure. We\'ve seen 200% improvement in efficiency.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Manufacturing Corp',
      role: 'CTO',
      content: 'The 5G IoT implementation has revolutionized our production monitoring and quality control.',
      rating: 5
    },
    {
      name: 'Jennifer Wang',
      company: 'Healthcare Systems',
      role: 'IT Director',
      content: 'The 5G edge computing solution has enabled real-time medical diagnostics and improved patient care.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation 5G Technology</title>
        <meta name="description" content="Discover our comprehensive 5G solutions including network implementation, IoT solutions, smart city infrastructure, and edge computing." />
        <meta name="keywords" content="5G solutions, 5G network, 5G IoT, smart city, edge computing, 5G mobile apps, private networks" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              5G
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Harness the power of 5G technology with our comprehensive solutions. From network implementation 
              to IoT and smart city applications, we deliver next-generation connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5G Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our 5G Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G solutions designed to transform your business and enable next-generation applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveGServices.map((service, index) => (
              <div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold text-lg">
                    {service.pricing}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our 5G Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful 5G implementation and maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mt-4">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about our 5G solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Embrace 5G Technology?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our 5G solutions can transform your business and enable next-generation applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FiveGSolutionsPage;