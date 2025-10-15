import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Server, 
  Globe,
  BarChart3,
  Users,
  Settings,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Lock,
  Wifi,
  Monitor,
  HardDrive,
  Layers,
  MessageSquare,
  Eye,
  FileText,
  Network
} from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to the cloud',
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      features: [
        'Zero-downtime migration',
        'Cost optimization',
        'Security compliance',
        'Performance monitoring'
      ],
      price: 'From $2,500/month'
    },
    {
      title: 'Cloud Architecture Design',
      description: 'Custom cloud architecture designed for your specific needs',
      icon: <Network className="w-12 h-12 text-green-400" />,
      features: [
        'Scalable architecture',
        'High availability',
        'Disaster recovery',
        'Load balancing'
      ],
      price: 'From $5,000'
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud infrastructure',
      icon: <Shield className="w-12 h-12 text-red-400" />,
      features: [
        'Identity management',
        'Data encryption',
        'Threat detection',
        'Compliance monitoring'
      ],
      price: 'From $1,500/month'
    },
    {
      title: 'Cloud Monitoring',
      description: '24/7 monitoring and management of your cloud resources',
      icon: <Monitor className="w-12 h-12 text-purple-400" />,
      features: [
        'Real-time monitoring',
        'Automated alerts',
        'Performance optimization',
        'Cost tracking'
      ],
      price: 'From $800/month'
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee and comprehensive data protection'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock expert support to ensure your systems run smoothly at all times'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business, from startup to enterprise scale'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Certified Experts',
      description: 'Our team consists of certified professionals with years of industry experience'
    },
    {
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      title: 'Fast Deployment',
      description: 'Quick implementation and deployment to get you up and running in no time'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: '500+ Happy Clients',
      description: 'Trusted by businesses worldwide for our innovative solutions and exceptional service'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud infrastructure services including migration, architecture design, security, and monitoring. Transform your business with our cloud solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud security, cloud architecture, cloud monitoring, AWS, Azure, GCP" />
        <meta property="og:title" content="Cloud Infrastructure Services - Zion Tech Group" />
        <meta property="og:description" content="Expert cloud infrastructure services including migration, architecture design, security, and monitoring." />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cloud
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Infrastructure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our comprehensive cloud infrastructure services. 
              From migration to monitoring, we provide end-to-end cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#services"
                className="border-2 border-white/30 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                Explore Services
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-purple-400 font-semibold text-lg mb-4">
                  {service.price}
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our expert team help you migrate to the cloud and optimize your infrastructure. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudInfrastructurePage;
