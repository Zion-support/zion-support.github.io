import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Server, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Zap,
  Code,
  Eye,
  MessageSquare,
  Cpu,
  Network,
  FileText,
  Settings,
  Cloud,
  Lock,
  Wifi,
  Monitor,
  HardDrive,
  Layers
} from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      price: 'From $2,500/mo',
      description: 'Comprehensive cloud infrastructure design, implementation, and management',
      longDescription: 'Build, deploy, and manage scalable cloud infrastructure solutions that grow with your business needs across AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud Architecture Design',
        'Infrastructure as Code (IaC)',
        'Auto-scaling & Load Balancing',
        'Disaster Recovery Planning',
        'Security & Compliance',
        'Cost Optimization',
        '24/7 Monitoring & Support',
        'Migration Services',
        'Performance Optimization',
        'Backup & Recovery Solutions'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Increase system reliability',
        'Enable remote work capabilities'
      ],
      category: 'Cloud Computing',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      popular: true
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      price: 'From $1,500/mo',
      description: 'Comprehensive security solutions to protect your digital assets',
      longDescription: 'Protect your business from cyber threats with our comprehensive security solutions including threat detection, incident response, and compliance management.',
      features: [
        'Threat Detection & Response',
        'Security Assessment & Auditing',
        'Penetration Testing',
        'Vulnerability Management',
        'Security Awareness Training',
        'Compliance Management (SOC2, GDPR, HIPAA)',
        'Firewall & Network Security',
        'Endpoint Protection',
        'Data Encryption & Backup',
        '24/7 Security Monitoring'
      ],
      benefits: [
        'Protect against 99.9% of cyber threats',
        'Ensure regulatory compliance',
        'Reduce security incidents by 95%',
        'Minimize business downtime',
        'Protect customer data and trust'
      ],
      category: 'Security',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: true
    },
    {
      id: 'web-development',
      name: 'Web Development Services',
      price: 'From $5,000',
      description: 'Custom web applications and e-commerce solutions',
      longDescription: 'Create stunning, responsive web applications and e-commerce platforms that drive business growth and enhance user experience.',
      features: [
        'Custom Web Applications',
        'E-commerce Platforms',
        'Progressive Web Apps (PWA)',
        'Content Management Systems',
        'API Development & Integration',
        'Mobile-responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Security Implementation',
        'Maintenance & Support'
      ],
      benefits: [
        'Increase online presence and visibility',
        'Improve user experience and engagement',
        'Boost conversion rates',
        'Scale with business growth',
        'Reduce development time and costs'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-green-400" />,
      popular: false
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      price: 'From $10,000',
      description: 'Native and cross-platform mobile applications',
      longDescription: 'Develop high-performance mobile applications for iOS and Android that engage users and drive business growth.',
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Development (React Native, Flutter)',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'API Integration',
        'Performance Optimization',
        'Security Implementation',
        'App Maintenance & Updates'
      ],
      benefits: [
        'Reach customers on mobile devices',
        'Improve customer engagement',
        'Increase brand visibility',
        'Generate additional revenue streams',
        'Enhance customer experience'
      ],
      category: 'Mobile',
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      popular: false
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      price: 'From $3,000',
      description: 'RESTful APIs and third-party integrations',
      longDescription: 'Build robust APIs and integrate with third-party services to streamline operations and enhance functionality.',
      features: [
        'RESTful API Development',
        'GraphQL APIs',
        'Third-party Integrations',
        'API Documentation',
        'Rate Limiting & Security',
        'API Testing & Monitoring',
        'Microservices Architecture',
        'Database Integration',
        'Authentication & Authorization',
        'API Versioning & Management'
      ],
      benefits: [
        'Streamline business processes',
        'Improve system interoperability',
        'Reduce development time',
        'Enhance data flow efficiency',
        'Enable third-party partnerships'
      ],
      category: 'Integration',
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      popular: false
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      price: 'From $2,000',
      description: 'Database design, optimization, and management services',
      longDescription: 'Optimize your database performance and ensure data integrity with our comprehensive database management services.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration & Backup',
        'Security & Access Control',
        'Monitoring & Maintenance',
        'Query Optimization',
        'Indexing Strategies',
        'Replication & Clustering',
        'Disaster Recovery',
        '24/7 Database Support'
      ],
      benefits: [
        'Improve database performance by 300%',
        'Ensure data integrity and security',
        'Reduce downtime and data loss',
        'Optimize storage and costs',
        'Enable better decision making'
      ],
      category: 'Database',
      icon: <Database className="w-8 h-8 text-orange-400" />,
      popular: false
    }
  ];

  const categories = ['All', 'Cloud Computing', 'Security', 'Development', 'Mobile', 'Integration', 'Database'];

  const technologies = [
    {
      name: 'Cloud Platforms',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud'],
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'Programming Languages',
      items: ['JavaScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'TypeScript'],
      icon: <Code className="w-6 h-6 text-green-400" />
    },
    {
      name: 'Frameworks & Libraries',
      items: ['React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Spring Boot', 'Laravel'],
      icon: <Layers className="w-6 h-6 text-purple-400" />
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB'],
      icon: <Database className="w-6 h-6 text-orange-400" />
    },
    {
      name: 'DevOps Tools',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible'],
      icon: <Settings className="w-6 h-6 text-cyan-400" />
    },
    {
      name: 'Security Tools',
      items: ['OWASP', 'Nessus', 'Burp Suite', 'Wireshark', 'Splunk', 'Qualys'],
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  const pricingTiers = [
    {
      name: 'Consultation',
      price: '$150/hr',
      description: 'Expert IT consulting and advisory services',
      features: [
        'IT Strategy Planning',
        'Technology Assessment',
        'Architecture Review',
        'Security Audit',
        'Performance Analysis'
      ],
      popular: false
    },
    {
      name: 'Project-based',
      price: 'Custom',
      description: 'Complete IT projects with fixed pricing',
      features: [
        'Web Development',
        'Mobile App Development',
        'Cloud Migration',
        'Security Implementation',
        'System Integration'
      ],
      popular: true
    },
    {
      name: 'Managed Services',
      price: 'From $2,500/mo',
      description: 'Ongoing IT support and management',
      features: [
        '24/7 Monitoring',
        'Proactive Maintenance',
        'Security Management',
        'Backup & Recovery',
        'Performance Optimization'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Comprehensive Technology Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, web development, mobile apps, and database management. Expert technology services for your business." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, web development, mobile development, API development, database management, technology services" />
        <meta property="og:title" content="IT Solutions - Comprehensive Technology Services" />
        <meta property="og:description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, web development, mobile apps, and database management." />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Solutions
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology services including cloud infrastructure, cybersecurity, 
              web development, and more. Transform your business with expert IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies and tools to deliver cutting-edge IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <div className="group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-blue-300 transition-colors">
                    {tech.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="bg-slate-600 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group relative ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm text-blue-400 font-medium">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="text-2xl font-bold text-blue-400 mb-3">
                    {service.price}
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-sm text-blue-400 font-medium">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-4">
                  <Link
                    to={`/${service.id}`}
                    className="block w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to meet your IT needs and budget. Contact us for a custom quote.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'ring-2 ring-blue-500 bg-slate-700/50' : ''
              }`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our expert team help you build, secure, and optimize your technology infrastructure for maximum efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutionsPage;