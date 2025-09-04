import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Shield,
  Users,
  Mail,
  FileText,
  BarChart3,
  ShoppingCart,
  Calendar,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Globe,
  Lock,
  Cpu,
  Bot,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  DollarSign,
  Award,
  Phone,
  MapPin,
  Database,
  Wrench,
  HardDrive,
  Wifi,
  Smartphone as Mobile,
  Laptop,
  Printer,
  Router,
  Key,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Copy,
  Edit,
  Save,
  Play,
  Pause,
  Stop
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ITServices() {
  const title = 'IT Services & Solutions — Zion Tech Group';
  const description = 'Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and digital transformation solutions.';

  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Complete cloud transformation services with AWS, Azure, and Google Cloud Platform expertise',
      icon: Cloud,
      features: [
        'Cloud strategy and architecture planning',
        'Data migration and application modernization',
        'Multi-cloud and hybrid cloud solutions',
        'Cloud security and compliance implementation',
        'Cost optimization and resource management',
        '24/7 cloud monitoring and support'
      ],
      pricing: '$5,000 - $50,000/month',
      delivery: '4-12 weeks',
      category: 'Cloud Services',
      marketPrice: '$8,000 - $80,000/month',
      benefits: [
        'Reduce IT infrastructure costs by 40-60%',
        'Improve scalability and flexibility',
        'Enhance security and compliance posture',
        'Enable remote work and collaboration'
      ]
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance management',
      icon: Shield,
      features: [
        'Security assessment and vulnerability testing',
        'Endpoint detection and response (EDR)',
        'Network security and firewall management',
        'Identity and access management (IAM)',
        'Security awareness training and phishing simulation',
        'Compliance management (SOC 2, HIPAA, GDPR)'
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '2-8 weeks',
      category: 'Cybersecurity',
      marketPrice: '$5,000 - $40,000/month',
      benefits: [
        'Protect against 99.9% of cyber threats',
        'Ensure regulatory compliance',
        'Reduce security incident response time by 80%',
        'Minimize business disruption and financial loss'
      ]
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization for businesses of all sizes',
      icon: Server,
      features: [
        'Server setup and configuration',
        'Network design and implementation',
        'Backup and disaster recovery solutions',
        'Hardware procurement and lifecycle management',
        'Performance monitoring and optimization',
        'Proactive maintenance and support'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-6 weeks',
      category: 'Infrastructure',
      marketPrice: '$3,500 - $25,000/month',
      benefits: [
        'Ensure 99.9% system uptime',
        'Reduce IT operational costs by 30%',
        'Improve system performance and reliability',
        'Enable scalable and future-proof infrastructure'
      ]
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation services to modernize business processes and operations',
      icon: Rocket,
      features: [
        'Digital strategy and roadmap development',
        'Process automation and workflow optimization',
        'Legacy system modernization',
        'Data analytics and business intelligence',
        'Change management and training',
        'Technology stack evaluation and selection'
      ],
      pricing: '$10,000 - $100,000/project',
      delivery: '8-24 weeks',
      category: 'Digital Transformation',
      marketPrice: '$15,000 - $150,000/project',
      benefits: [
        'Increase operational efficiency by 50%',
        'Improve customer experience and satisfaction',
        'Enable data-driven decision making',
        'Future-proof your business technology'
      ]
    },
    {
      title: 'Managed IT Support Services',
      description: 'Comprehensive IT support and helpdesk services for ongoing technical assistance',
      icon: Users,
      features: [
        '24/7 technical support and helpdesk',
        'Remote monitoring and management',
        'Software installation and updates',
        'User training and onboarding',
        'IT asset management and tracking',
        'Proactive issue resolution and maintenance'
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '1-2 weeks',
      category: 'Support Services',
      marketPrice: '$2,500 - $12,000/month',
      benefits: [
        'Reduce IT support costs by 40%',
        'Improve user productivity and satisfaction',
        'Minimize downtime and technical issues',
        'Ensure consistent IT service delivery'
      ]
    },
    {
      title: 'Network Security & Monitoring',
      description: 'Advanced network security solutions with real-time monitoring and threat detection',
      icon: Network,
      features: [
        'Network security assessment and hardening',
        'Intrusion detection and prevention systems',
        'VPN setup and management',
        'Network segmentation and access control',
        'Real-time threat monitoring and response',
        'Security incident investigation and forensics'
      ],
      pricing: '$2,500 - $20,000/month',
      delivery: '3-6 weeks',
      category: 'Network Security',
      marketPrice: '$4,000 - $30,000/month',
      benefits: [
        'Protect against advanced persistent threats',
        'Ensure network compliance and security',
        'Reduce security incident response time',
        'Maintain business continuity and operations'
      ]
    },
    {
      title: 'Data Backup & Recovery Solutions',
      description: 'Comprehensive data protection and disaster recovery services to ensure business continuity',
      icon: HardDrive,
      features: [
        'Automated backup systems and scheduling',
        'Cloud and on-premises backup solutions',
        'Disaster recovery planning and testing',
        'Data encryption and security',
        'Recovery time objective (RTO) optimization',
        'Compliance and audit trail maintenance'
      ],
      pricing: '$1,000 - $10,000/month',
      delivery: '1-3 weeks',
      category: 'Data Protection',
      marketPrice: '$1,500 - $15,000/month',
      benefits: [
        'Ensure 99.99% data availability',
        'Minimize data loss and business disruption',
        'Meet compliance and regulatory requirements',
        'Reduce recovery time from days to hours'
      ]
    },
    {
      title: 'IT Compliance & Audit Services',
      description: 'Comprehensive compliance management for SOC 2, HIPAA, GDPR, and other regulatory requirements',
      icon: FileText,
      features: [
        'Compliance gap analysis and assessment',
        'Policy and procedure development',
        'Security control implementation',
        'Audit preparation and support',
        'Compliance monitoring and reporting',
        'Staff training and awareness programs'
      ],
      pricing: '$5,000 - $30,000/project',
      delivery: '4-12 weeks',
      category: 'Compliance',
      marketPrice: '$8,000 - $50,000/project',
      benefits: [
        'Achieve and maintain regulatory compliance',
        'Reduce audit findings and remediation costs',
        'Improve security posture and risk management',
        'Build customer trust and competitive advantage'
      ]
    },
    {
      title: 'Mobile Device Management (MDM)',
      description: 'Complete mobile device and application management for secure mobile workforce',
      icon: Smartphone,
      features: [
        'Mobile device enrollment and configuration',
        'Application management and distribution',
        'Security policy enforcement',
        'Remote device wiping and locking',
        'Compliance monitoring and reporting',
        'Integration with existing IT systems'
      ],
      pricing: '$500 - $3,000/month',
      delivery: '1-2 weeks',
      category: 'Mobile Management',
      marketPrice: '$800 - $5,000/month',
      benefits: [
        'Secure mobile workforce and BYOD policies',
        'Reduce mobile security risks by 90%',
        'Improve mobile productivity and efficiency',
        'Ensure mobile compliance and governance'
      ]
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management services for complex technology implementations',
      icon: Target,
      features: [
        'Project planning and scope definition',
        'Resource allocation and timeline management',
        'Risk assessment and mitigation planning',
        'Stakeholder communication and reporting',
        'Quality assurance and testing coordination',
        'Change management and user adoption'
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: 'Varies by project',
      category: 'Project Management',
      marketPrice: '$5,000 - $25,000/month',
      benefits: [
        'Ensure project delivery on time and budget',
        'Minimize project risks and issues',
        'Improve project success rates by 60%',
        'Maximize ROI on IT investments'
      ]
    },
    {
      title: 'Software Development & Integration',
      description: 'Custom software development and system integration services for business-specific needs',
      icon: Code,
      features: [
        'Custom application development',
        'API development and integration',
        'Legacy system integration',
        'Database design and optimization',
        'Quality assurance and testing',
        'Ongoing maintenance and support'
      ],
      pricing: '$5,000 - $50,000/project',
      delivery: '4-16 weeks',
      category: 'Software Development',
      marketPrice: '$8,000 - $80,000/project',
      benefits: [
        'Get custom solutions tailored to your business',
        'Improve operational efficiency and automation',
        'Integrate disparate systems and data sources',
        'Enable digital transformation and innovation'
      ]
    },
    {
      title: 'IT Training & Consulting',
      description: 'Comprehensive IT training and consulting services to upskill your team and optimize technology usage',
      icon: Users,
      features: [
        'Technology skills assessment and training plans',
        'Hands-on training workshops and seminars',
        'IT best practices and security awareness',
        'Technology adoption and change management',
        'Ongoing consulting and support',
        'Certification preparation and guidance'
      ],
      pricing: '$2,000 - $10,000/project',
      delivery: '2-8 weeks',
      category: 'Training & Consulting',
      marketPrice: '$3,500 - $15,000/project',
      benefits: [
        'Improve team technical skills and productivity',
        'Reduce IT support tickets and issues',
        'Increase technology adoption and ROI',
        'Build internal IT expertise and capabilities'
      ]
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, 
              and digital transformation solutions for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                Get IT Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">IT Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, we provide comprehensive IT solutions 
                to keep your business secure, efficient, and competitive.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <span className="text-sm text-blue-600 font-semibold">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Our Pricing:</span>
                      <span className="text-lg font-bold text-blue-600">
                        {service.pricing}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Market Price:</span>
                      <span className="text-sm text-gray-500 line-through">
                        {service.marketPrice}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Delivery:</span>
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.delivery}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver IT solutions that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Experts</h3>
                <p className="text-gray-600">
                  Our team holds industry certifications in AWS, Microsoft, Cisco, and other leading technologies.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">
                  We prioritize security in every solution, ensuring your data and systems are protected.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock monitoring and support to ensure your systems run smoothly.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of successful implementations and measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free IT assessment and discover how our solutions can improve your business efficiency and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +1 302 464 0950
              </Link>
              <Link
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}