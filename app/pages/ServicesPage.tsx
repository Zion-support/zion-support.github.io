import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap,
  Brain,
  Cpu,
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
  Lock
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions tailored to your specific needs.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Automated Decision Making'
      ],
      path: '/ai-services',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'Micro SAAS Development',
      description: 'Scalable software-as-a-service solutions designed for modern businesses and entrepreneurs.',
      features: [
        'Custom SAAS Applications',
        'Multi-tenant Architecture',
        'API Development',
        'Payment Integration',
        'User Management',
        'Analytics Dashboard'
      ],
      path: '/micro-saas-solutions',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Robust, secure, and scalable cloud solutions to power your digital transformation journey.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Disaster Recovery',
        'Cloud Security',
        'Cost Optimization'
      ],
      path: '/cloud-infrastructure',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your data and systems from evolving threats.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Threat Detection',
        'Incident Response',
        'Security Training'
      ],
      path: '/cybersecurity',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter Apps',
        'Progressive Web Apps',
        'App Store Optimization'
      ],
      path: '/mobile-development',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'Real-time Analytics',
        'Data Warehousing',
        'Machine Learning Models',
        'Custom Dashboards'
      ],
      path: '/data-analytics',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const additionalServices = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies.',
      path: '/software-development'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions.',
      path: '/it-services'
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      path: '/custom-development'
    },
    {
      title: 'API Development',
      description: 'Robust APIs that enable seamless integration between different systems.',
      path: '/api-development'
    },
    {
      title: 'DevOps Services',
      description: 'Streamline your development and deployment processes with our DevOps expertise.',
      path: '/devops-services'
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing services to ensure your software meets the highest standards.',
      path: '/quality-assurance'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, challenges, and requirements through detailed consultation.',
      icon: Target
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Our team creates a comprehensive solution architecture and design that aligns with your objectives.',
      icon: Rocket
    },
    {
      number: '03',
      title: 'Development & Implementation',
      description: 'We build your solution using agile methodologies, ensuring regular communication and feedback.',
      icon: Cpu
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution is reliable, secure, and performs optimally.',
      icon: CheckCircle
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'We handle the deployment process and ensure a smooth launch with minimal disruption.',
      icon: Rocket
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your solution running smoothly and efficiently.',
      icon: Users
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Our team consists of certified professionals with years of experience in cutting-edge technologies.'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'We deliver projects on time and within budget, without compromising on quality.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We serve clients worldwide with 24/7 support and local expertise in multiple regions.'
    },
    {
      icon: Lock,
      title: 'Security First',
      description: 'Enterprise-grade security measures protect your data and ensure compliance with industry standards.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SAAS development, cloud infrastructure, cybersecurity, mobile development, and data analytics." />
        <meta name="keywords" content="AI services, micro SAAS, cloud infrastructure, cybersecurity, mobile development, data analytics, IT services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
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
              Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business and drive sustainable growth. 
              From AI-powered applications to robust cloud infrastructure, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that have helped hundreds of businesses transform and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.path}
                  className="group/link inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to support every aspect of your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                <div className="flex items-center text-cyan-400 mt-4 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <step.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through our expertise, dedication, and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Start Your Project
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;