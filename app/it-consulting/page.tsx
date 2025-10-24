<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>It Consulting - Zion Tech Group</title>
        <meta name="description" content="It Consulting solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">It Consulting</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive it consulting solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

const ITConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services for digital transformation, cloud migration, and cybersecurity solutions." />
      </Helmet>
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">IT Consulting Services</h1><p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your business with expert IT consulting. We provide strategic guidance,</p>
                digital transformation, and technology solutions that drive growth and efficiency.</p>
              <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6"></h1>
                IT Consulting Services;)
              </h1>)
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">)
                Transform your business with expert IT consulting. We provide strategic guidance),
                digital transformation, and technology solutions that drive growth and efficiency.
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Expert IT consulting services to help your business navigate digital transformation and technology challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-4"></p>
                Strategic guidance to modernize your business processes and technology infrastructure.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Technology Strategy</li>
                <li>• Process Optimization</li>
                <li>• Change Management</li>
                <li>• ROI Analysis</li>
              </ul>
            </div>
            <div className="grid md: grid-cols-2 gap-8 mb-16">,
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover: shadow-xl transition-shadow"></div>
                  <div className="flex items-center mb-6">,
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">,
                      <service.icon className="w-8 h-8 text-blue-600" />,
                    </div>,
                    <div>,
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6"></div>
                    <div></div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3><p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6"></div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:<ul className="space-y-2">{service.features.map((feature, idx) => (</ul>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features: </h4>,
                    <ul className="space-y-2">,
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"></li>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6"></div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:<ul className="space-y-2">{service.benefits.map((benefit, idx) => (</ul>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits: </h4>,
                    <ul className="space-y-2">,
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"></li>
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" >{benefit}</ArrowRight>
                        </ArrowRight>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center"></div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div><button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
                    </button>
                  </div>
                </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover: bg-blue-700 transition-colors"></button>
                      Get Started;
                    </button>,
                  </div>,
                </div>))}
            </div>

            {/* Benefits Section */}
            <section className="py-16 bg-white rounded-2xl shadow-lg mb-16"></section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Consulting?</h2>
                <p className="text-xl text-gray-600">Proven benefits that drive business success</p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <div className="text-center mb-12"></section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Consulting?</h2><p className="text-xl text-gray-600">Proven benefits that drive business success</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3><p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"></section>
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT?</h2><p className="text-xl mb-8">Contact our experts for a free consultation and discover how we can help your business.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
                <a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                ></a>
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950;
                </a>
                <a;
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                ></a>
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us;
                </a>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>,
    </>,
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-4"></p>
                Seamless migration to cloud platforms with minimal disruption to your business.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Cloud Strategy Planning</li>
                <li>• Migration Execution</li>
                <li>• Cost Optimization</li>
                <li>• Security Implementation</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Consulting</h3>
              <p className="text-gray-300 mb-4"></p>
                Comprehensive security assessments and implementation of best practices.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Security Audits</li>
                <li>• Risk Assessment</li>
                <li>• Compliance Planning</li>
                <li>• Incident Response</li>
              </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, Users, BarChart, Shield, Zap } from 'lucide-react';
import { CheckCircle, Users, Target, Zap, Shield, BarChart, Clock, Award, ArrowRight, Brain, Cloud, Code, Database, Globe, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Phone, Mail, MapPin } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
=======
      id: 'it-infrastructure-design',
      name: 'IT Infrastructure Design & Implementation',
      description: 'Complete IT infrastructure design, deployment, and optimization for modern businesses',
      category: 'infrastructure',
      icon: Server,
      price: 'Starting at $5,000',
      features: [
        'Network architecture design',
        'Server deployment and configuration',
        'Storage solutions implementation',
        'Backup and disaster recovery setup',
        'Security infrastructure deployment',
        'Monitoring and management tools',
        'Documentation and training',
        'Ongoing support and maintenance'
      ],
      benefits: [
        'Scalable and reliable infrastructure',
        'Improved system performance',
        'Enhanced security posture',
        'Reduced downtime and outages',
        'Future-proof technology stack'
      ],
      targetAudience: 'Small to large businesses, Startups, Enterprises',
      setupTime: '2-8 weeks',
      freeConsultation: 'Yes',
      support: '24/7 technical support',
      certifications: ['Cisco', 'Microsoft', 'VMware', 'AWS', 'Azure'],
      link: 'https://ziontechgroup.com/it-infrastructure-design',
      caseStudy: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design',
    },
    {
      id: 'cloud-migration-services',
      name: 'Cloud Migration & Optimization',
      description: 'Seamless migration to cloud platforms with optimization for cost and performance',
      category: 'cloud',
      icon: Cloud,
      price: 'Starting at $3,000',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Data and application migration',
        'Cloud security implementation',
        'Cost optimization analysis',
        'Performance tuning',
        'Disaster recovery setup',
        'Training and documentation'
      ],
      benefits: [
        'Reduce IT costs by 30-50%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery capabilities',
        'Access to latest technologies'
      ],
      targetAudience: 'Businesses looking to modernize IT infrastructure',
      setupTime: '1-6 weeks',
      freeConsultation: 'Yes',
      support: 'Migration specialist and ongoing support',
      certifications: ['AWS', 'Azure', 'Google Cloud', 'VMware'],
      link: 'https://ziontechgroup.com/cloud-migration-services',
      caseStudy: 'Retail chain saved $2M annually by migrating to cloud infrastructure',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    },
    {
      icon: Shield,
<<<<<<< HEAD
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
=======
      price: 'Starting at $2,500',
      features: [
        'Security risk assessment',
        'Penetration testing',
        'Security policy development',
        'Firewall and endpoint protection',
        'Email security implementation',
        'Security awareness training',
        'Compliance auditing',
        'Incident response planning'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks by 90%',
        'Improve incident response time',
        'Maintain customer trust'
      ],
      targetAudience: 'All businesses handling sensitive data',
      setupTime: '1-4 weeks',
      freeConsultation: 'Yes',
      support: 'Security specialist and 24/7 monitoring',
      certifications: ['CISSP', 'CISM', 'CEH', 'CompTIA Security+'],
      link: 'https://ziontechgroup.com/cybersecurity-services',
      caseStudy: 'Healthcare provider achieved 100% compliance with HIPAA regulations',
    },
    {
      id: 'network-design-optimization',
      name: 'Network Design & Optimization',
      description: 'High-performance network infrastructure design and optimization for reliability',
      category: 'networking',
      icon: Network,
      price: 'Starting at $2,000',
      features: [
        'Network architecture design',
        'Bandwidth optimization',
        'Quality of Service (QoS) setup',
        'Wireless network deployment',
        'Network monitoring implementation',
        'Traffic analysis and optimization',
        'Redundancy and failover setup',
        'Performance tuning'
      ],
      benefits: [
        'Improve network performance by 200%',
        'Reduce network downtime',
        'Optimize bandwidth usage',
        'Enhance user experience',
        'Future-proof network design'
      ],
      targetAudience: 'Businesses with complex networking needs',
      setupTime: '1-3 weeks',
      freeConsultation: 'Yes',
      support: 'Network specialist and ongoing optimization',
      certifications: ['CCNA', 'CCNP', 'JNCIA', 'CompTIA Network+'],
      link: 'https://ziontechgroup.com/network-design-optimization',
      caseStudy: 'Law firm improved network speed by 300% and eliminated connectivity issues',
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      description: 'Database design, implementation, optimization, and ongoing management',
      category: 'database',
      icon: Database,
      price: 'Starting at $1,500',
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery setup',
        'Security implementation',
        'Monitoring and alerting',
        'Query optimization',
        'Capacity planning',
        'Maintenance and updates'
      ],
      benefits: [
        'Improve database performance by 150%',
        'Ensure data integrity and security',
        'Reduce maintenance overhead',
        'Optimize storage usage',
        'Minimize downtime'
      ],
      targetAudience: 'Businesses with critical data requirements',
      setupTime: '1-2 weeks',
      freeConsultation: 'Yes',
      support: 'Database specialist and 24/7 monitoring',
      certifications: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/database-management',
      caseStudy: 'E-commerce platform improved query performance by 400% and reduced costs by 60%',
    },
    {
      id: 'it-support-services',
      name: 'Managed IT Support Services',
      description: 'Comprehensive IT support and management for ongoing operations',
      category: 'support',
      icon: Headphones,
      price: 'Starting at $99/user/month',
      features: [
        '24/7 technical support',
        'Remote monitoring and management',
        'Proactive maintenance',
        'Software updates and patches',
        'Hardware support and replacement',
        'User training and onboarding',
        'IT asset management',
        'Help desk services'
      ],
      benefits: [
        'Reduce IT downtime by 80%',
        'Lower IT support costs',
        'Improve user productivity',
        'Proactive issue resolution',
        'Focus on core business activities'
      ],
      targetAudience: 'Small to medium businesses without dedicated IT staff',
      setupTime: '1 week',
      freeConsultation: 'Yes',
      support: 'Dedicated support team',
      certifications: ['Microsoft', 'CompTIA', 'Cisco', 'VMware'],
      link: 'https://ziontechgroup.com/it-support-services',
      caseStudy: 'Marketing agency reduced IT issues by 90% and improved employee productivity',
    },
    {
      id: 'software-development',
      name: 'Custom Software Development',
      description: 'Tailored software solutions built to meet specific business requirements',
      category: 'development',
      icon: Code,
      price: 'Starting at $5,000',
      features: [
        'Requirements analysis',
        'Custom application development',
        'Web and mobile app development',
        'API development and integration',
        'Database design and implementation',
        'Testing and quality assurance',
        'Deployment and maintenance',
        'User training and documentation'
      ],
      benefits: [
        'Streamline business processes',
        'Improve operational efficiency',
        'Gain competitive advantage',
        'Reduce manual work',
        'Scale with business growth'
      ],
      targetAudience: 'Businesses needing custom software solutions',
      setupTime: '4-16 weeks',
      freeConsultation: 'Yes',
      support: 'Development team and ongoing maintenance',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Mobile'],
      link: 'https://ziontechgroup.com/software-development',
      caseStudy: 'Logistics company automated 80% of manual processes with custom software',
    },
    {
      id: 'it-consulting',
      name: 'Strategic IT Consulting',
      description: 'Technology strategy and roadmap development for digital transformation',
      category: 'consulting',
      icon: Briefcase,
      price: 'Starting at $200/hour',
      features: [
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'Vendor evaluation and selection',
        'Cost-benefit analysis',
        'Risk assessment and mitigation',
        'Change management planning',
        'Implementation guidance'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce implementation risks',
        'Accelerate digital transformation',
        'Improve ROI on technology'
      ],
      targetAudience: 'Businesses planning technology initiatives',
      setupTime: '1-4 weeks',
      freeConsultation: 'Yes',
      support: 'Senior consultant and ongoing guidance',
      certifications: ['PMP', 'ITIL', 'COBIT', 'TOGAF'],
      link: 'https://ziontechgroup.com/it-consulting',
      caseStudy: 'Manufacturing company achieved 40% cost reduction through strategic IT planning',
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      category: 'recovery',
      icon: RefreshCw,
      price: 'Starting at $3,500',
      features: [
        'Business impact analysis',
        'Recovery time objective planning',
        'Backup strategy implementation',
        'Disaster recovery testing',
        'Business continuity planning',
        'Cloud-based recovery solutions',
        'Documentation and procedures',
        'Regular testing and updates'
      ],
      benefits: [
        'Minimize business disruption',
        'Ensure rapid recovery',
        'Protect critical data',
        'Maintain customer service',
        'Comply with regulations'
      ],
      targetAudience: 'Businesses requiring high availability',
      setupTime: '2-6 weeks',
      freeConsultation: 'Yes',
      support: 'Recovery specialist and ongoing testing',
      certifications: ['CBCP', 'DRII', 'ITIL', 'ISO 22301'],
      link: 'https://ziontechgroup.com/disaster-recovery',
      caseStudy: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution',
    },
    {
      id: 'compliance-auditing',
      name: 'IT Compliance & Auditing',
      description: 'Compliance assessment and implementation for various industry standards',
      category: 'compliance',
      icon: CheckSquare,
      price: 'Starting at $2,000',
      features: [
        'Compliance gap analysis',
        'Policy and procedure development',
        'Security control implementation',
        'Audit preparation and support',
        'Training and awareness programs',
        'Ongoing compliance monitoring',
        'Documentation and reporting',
        'Remediation planning'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce audit findings',
        'Improve security posture',
        'Avoid penalties and fines',
        'Build customer trust'
      ],
      targetAudience: 'Healthcare, Finance, Government, Education sectors',
      setupTime: '2-8 weeks',
      freeConsultation: 'Yes',
      support: 'Compliance specialist and ongoing monitoring',
      standards: ['HIPAA', 'SOX', 'PCI-DSS', 'GDPR', 'ISO 27001', 'NIST'],
      link: 'https://ziontechgroup.com/compliance-auditing',
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits',
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Grid3X3; },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server; },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud; },
    { id: 'security', name: 'Cybersecurity', icon: Shield; },
    { id: 'networking', name: 'Networking', icon: Network; },
    { id: 'database', name: 'Database', icon: Database; },
    { id: 'support', name: 'IT Support', icon: Headphones; },
    { id: 'development', name: 'Development', icon: Code; },
    { id: 'consulting', name: 'Consulting', icon: Briefcase; },
    { id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw; },
    { id: 'compliance', name: 'Compliance', icon: CheckSquare; }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  ];

  return (
    <>
      <Helmet>
        <title>IT Consulting - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services for your business." />
        <meta name="keywords" content="IT consulting, technology consulting, advisory" />
      </Helmet>

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Consulting
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert IT consulting services for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
=======
      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}</div>
            <div className="flex-1"></div>
              <div className="relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64"></div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (</div>
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover: bg-slate-700/50 hover:text-cyan-400',
                }`}
              >
                {category.name}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
=======
    </>
  );
};

export default ITConsultingPage;
  const services = [
    {
      icon: Brain,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development and digital transformation roadmaps',
      features: ['Technology Assessment', 'Digital Roadmap', 'ROI Analysis', 'Risk Management']
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions for modern businesses',
      features: ['AWS/Azure/GCP', 'Migration Planning', 'Cost Optimization', 'Security Design']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Strategy',
      description: 'Comprehensive security assessments and implementation strategies',
      features: ['Security Audits', 'Compliance Planning', 'Incident Response', 'Training Programs']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Optimize data architecture and implement modern data solutions',
      features: ['Data Strategy', 'Database Design', 'Analytics Setup', 'Governance Planning']
    },
    {
      icon: Globe,
      title: 'Infrastructure Design',
      description: 'Design robust and scalable IT infrastructure solutions',
      features: ['Network Design', 'Server Architecture', 'Disaster Recovery', 'Performance Tuning']
    },
    {
      icon: Smartphone,
      title: 'Digital Transformation',
      description: 'Guide organizations through complete digital transformation',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Training Programs']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of current IT landscape, processes, and business requirements',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create tailored IT strategy aligned with business goals and industry best practices',
      icon: BarChart
    },
    {
      step: '03',
      title: 'Implementation Planning',
      description: 'Detailed roadmap with timelines, resources, and milestones for successful execution',
      icon: Calendar
    },
    {
      step: '04',
      title: 'Execution & Support',
      description: 'Ongoing support and guidance throughout the implementation process',
      icon: CheckSquare
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Cost Reduction', description: 'Optimize IT spending and reduce operational costs' },
    { icon: Zap, title: 'Efficiency Gains', description: 'Streamline processes and improve productivity' },
    { icon: Shield, title: 'Enhanced Security', description: 'Strengthen security posture and compliance' },
    { icon: BarChart, title: 'Better Performance', description: 'Improve system performance and reliability' },
    { icon: Users, title: 'Team Empowerment', description: 'Train and empower your IT team' },
    { icon: Award, title: 'Competitive Advantage', description: 'Gain strategic advantage through technology' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">IT Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with expert IT consulting services. We provide strategic guidance, 
              technology roadmaps, and implementation support to drive digital transformation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                <Phone className="mr-2 w-5 h-5" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT consulting solutions designed to address your unique business challenges 
              and drive sustainable growth through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful IT transformation and sustainable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Consulting?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with experienced IT consultants who understand both technology and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert IT consulting services tailored to your business needs. 
            Schedule a free consultation to discuss your technology challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
      <Footer />
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
  );
<<<<<<< HEAD
}
=======
};

export default ITConsultingPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
