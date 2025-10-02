import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, Shield, Server, Database, Network, Cpu, 
  Lock, Monitor, Zap, Settings, Globe, Smartphone,
  CheckCircle, ArrowRight, Star, Award, Phone, Mail, MapPin,
  Brain, Code, BarChart3, Workflow, Layers, Activity
} from 'lucide-react';

export const metadata = {
  title: 'Innovative IT Solutions — Zion Tech Group | Enterprise Infrastructure & Security',
  description: 'Cutting-edge IT solutions including cloud architecture, cybersecurity, DevOps automation, and enterprise infrastructure services.',
  keywords: 'IT solutions, cloud services, cybersecurity, DevOps, enterprise infrastructure, digital transformation',
};

export default function InnovativeITSolutions() {
  const phoneHref = "tel:+13024640950";
  const emailHref = "mailto:kleber@ziontechgroup.com";
  const websiteHref = "https://ziontechgroup.com";

  const innovativeITServices = [
    {
      name: 'Quantum-Ready Cloud Architecture',
      description: 'Future-proof cloud infrastructure designed for quantum computing integration and post-quantum cryptography.',
      price: '$8,000 - $35,000/month',
      delivery: '6-12 weeks',
      features: [
        'Quantum-resistant encryption implementation',
        'Hybrid classical-quantum computing architecture',
        'Advanced threat modeling and security protocols',
        'Scalable infrastructure for quantum workloads',
        'Integration with quantum cloud providers',
        'Performance optimization for quantum algorithms'
      ],
      benefits: [
        'Future-proof your infrastructure for quantum era',
        'Ensure data security against quantum attacks',
        'Prepare for quantum computing advantages',
        'Maintain competitive edge in emerging technologies'
      ],
      category: 'Quantum Computing',
      popular: true,
      icon: Cpu,
      link: '/services/quantum-ready-cloud'
    },
    {
      name: 'Autonomous Infrastructure Management',
      description: 'Self-healing infrastructure with AI-driven optimization, predictive scaling, and automated incident response.',
      price: '$4,500 - $18,000/month',
      delivery: '4-8 weeks',
      features: [
        'AI-powered infrastructure optimization',
        'Predictive scaling and resource allocation',
        'Automated incident detection and resolution',
        'Self-healing system components',
        'Performance monitoring and optimization',
        'Cost optimization algorithms'
      ],
      benefits: [
        'Reduce infrastructure management overhead by 80%',
        'Improve system reliability by 95%',
        'Optimize costs automatically',
        'Eliminate manual infrastructure tasks'
      ],
      category: 'Infrastructure AI',
      popular: true,
      icon: Brain,
      link: '/services/autonomous-infrastructure'
    },
    {
      name: 'Zero-Trust Network Security Platform',
      description: 'Comprehensive zero-trust security implementation with micro-segmentation and continuous verification.',
      price: '$6,000 - $25,000/month',
      delivery: '6-10 weeks',
      features: [
        'Network micro-segmentation and isolation',
        'Continuous identity verification',
        'Behavioral analytics and threat detection',
        'Automated policy enforcement',
        'Multi-factor authentication integration',
        'Real-time security monitoring and alerting'
      ],
      benefits: [
        'Eliminate lateral movement attacks',
        'Reduce security breaches by 90%',
        'Ensure compliance with security standards',
        'Provide granular access control'
      ],
      category: 'Cybersecurity',
      popular: true,
      icon: Shield,
      link: '/services/zero-trust-network'
    },
    {
      name: 'Edge Computing Orchestration Platform',
      description: 'Distributed computing platform for IoT, real-time processing, and edge AI deployment.',
      price: '$3,500 - $15,000/month',
      delivery: '4-8 weeks',
      features: [
        'Distributed edge computing management',
        'IoT device orchestration and monitoring',
        'Real-time data processing and analytics',
        'Edge AI model deployment and management',
        'Latency optimization and load balancing',
        'Integration with cloud and on-premises systems'
      ],
      benefits: [
        'Reduce latency by 80% for real-time applications',
        'Improve IoT device management efficiency',
        'Enable edge AI capabilities',
        'Optimize bandwidth usage and costs'
      ],
      category: 'Edge Computing',
      popular: false,
      icon: Network,
      link: '/services/edge-computing-orchestration'
    },
    {
      name: 'Blockchain Infrastructure Services',
      description: 'Enterprise blockchain solutions with smart contracts, decentralized applications, and tokenization.',
      price: '$5,000 - $20,000/month',
      delivery: '6-12 weeks',
      features: [
        'Private and public blockchain deployment',
        'Smart contract development and auditing',
        'Decentralized application (dApp) development',
        'Tokenization and NFT marketplace creation',
        'Blockchain integration with existing systems',
        'Compliance and regulatory framework implementation'
      ],
      benefits: [
        'Enable decentralized business models',
        'Improve transparency and trust',
        'Reduce transaction costs and intermediaries',
        'Create new revenue streams'
      ],
      category: 'Blockchain',
      popular: false,
      icon: Layers,
      link: '/services/blockchain-infrastructure'
    },
    {
      name: 'AI-Powered DevOps Platform',
      description: 'Intelligent DevOps automation with AI-driven CI/CD, testing, and deployment optimization.',
      price: '$3,000 - $12,000/month',
      delivery: '3-6 weeks',
      features: [
        'AI-driven CI/CD pipeline optimization',
        'Intelligent testing and quality assurance',
        'Automated deployment strategies',
        'Performance monitoring and optimization',
        'Security scanning and vulnerability management',
        'Infrastructure as Code automation'
      ],
      benefits: [
        'Accelerate development cycles by 60%',
        'Reduce deployment failures by 85%',
        'Improve code quality automatically',
        'Optimize resource utilization'
      ],
      category: 'DevOps AI',
      popular: true,
      icon: Workflow,
      link: '/services/ai-powered-devops'
    },
    {
      name: 'Multi-Cloud Management Platform',
      description: 'Unified management platform for multi-cloud environments with cost optimization and governance.',
      price: '$2,500 - $10,000/month',
      delivery: '3-6 weeks',
      features: [
        'Multi-cloud resource management and monitoring',
        'Cost optimization and budget management',
        'Automated workload migration and balancing',
        'Security and compliance governance',
        'Performance monitoring and optimization',
        'Disaster recovery and backup automation'
      ],
      benefits: [
        'Reduce cloud costs by 30%',
        'Improve operational efficiency',
        'Avoid vendor lock-in',
        'Ensure consistent governance across clouds'
      ],
      category: 'Cloud Management',
      popular: false,
      icon: Cloud,
      link: '/services/multi-cloud-management'
    },
    {
      name: 'Advanced Data Lake Architecture',
      description: 'Enterprise data lake with real-time processing, AI analytics, and automated data governance.',
      price: '$4,000 - $16,000/month',
      delivery: '4-8 weeks',
      features: [
        'Scalable data lake infrastructure',
        'Real-time data ingestion and processing',
        'AI-powered data analytics and insights',
        'Automated data quality and governance',
        'Advanced security and access controls',
        'Integration with BI and analytics tools'
      ],
      benefits: [
        'Enable advanced analytics and AI',
        'Improve data quality and consistency',
        'Reduce data processing time by 70%',
        'Ensure regulatory compliance'
      ],
      category: 'Data Architecture',
      popular: true,
      icon: Database,
      link: '/services/advanced-data-lake'
    },
    {
      name: '5G Network Infrastructure Services',
      description: '5G network deployment and optimization for enterprise applications and IoT connectivity.',
      price: '$7,000 - $30,000/month',
      delivery: '8-16 weeks',
      features: [
        '5G network planning and deployment',
        'Network slicing and optimization',
        'IoT device connectivity management',
        'Edge computing integration',
        'Performance monitoring and analytics',
        'Security and compliance implementation'
      ],
      benefits: [
        'Enable ultra-low latency applications',
        'Support massive IoT device connectivity',
        'Improve network performance and reliability',
        'Enable new business models and services'
      ],
      category: '5G Networks',
      popular: false,
      icon: Globe,
      link: '/services/5g-network-infrastructure'
    },
    {
      name: 'Hyperconverged Infrastructure (HCI)',
      description: 'Software-defined infrastructure combining compute, storage, and networking in a single platform.',
      price: '$5,500 - $22,000/month',
      delivery: '4-8 weeks',
      features: [
        'Software-defined compute and storage',
        'Automated resource provisioning',
        'High availability and disaster recovery',
        'Performance monitoring and optimization',
        'Security and compliance features',
        'Integration with cloud and hybrid environments'
      ],
      benefits: [
        'Simplify infrastructure management',
        'Reduce hardware costs by 40%',
        'Improve scalability and flexibility',
        'Accelerate deployment and provisioning'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Server,
      link: '/services/hyperconverged-infrastructure'
    },
    {
      name: 'Advanced Threat Intelligence Platform',
      description: 'AI-powered threat intelligence with predictive analytics and automated response capabilities.',
      price: '$3,500 - $14,000/month',
      delivery: '3-6 weeks',
      features: [
        'Real-time threat detection and analysis',
        'Predictive threat modeling and forecasting',
        'Automated incident response and remediation',
        'Threat intelligence sharing and collaboration',
        'Advanced analytics and reporting',
        'Integration with security tools and platforms'
      ],
      benefits: [
        'Detect threats 10x faster than traditional methods',
        'Prevent 95% of security incidents',
        'Reduce incident response time by 80%',
        'Improve overall security posture'
      ],
      category: 'Threat Intelligence',
      popular: true,
      icon: Activity,
      link: '/services/advanced-threat-intelligence'
    },
    {
      name: 'Green IT Sustainability Platform',
      description: 'Sustainable IT infrastructure with carbon footprint tracking and energy optimization.',
      price: '$2,000 - $8,000/month',
      delivery: '2-4 weeks',
      features: [
        'Carbon footprint tracking and reporting',
        'Energy consumption monitoring and optimization',
        'Sustainable procurement and lifecycle management',
        'Green data center design and implementation',
        'ESG reporting and compliance',
        'Cost-benefit analysis for sustainability initiatives'
      ],
      benefits: [
        'Reduce carbon footprint by 50%',
        'Lower energy costs by 35%',
        'Meet ESG compliance requirements',
        'Improve brand reputation and sustainability'
      ],
      category: 'Sustainability',
      popular: false,
      icon: Monitor,
      link: '/services/green-it-sustainability'
    }
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={`${websiteHref}/innovative-it-solutions`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Innovative IT Solutions
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Cutting-edge IT infrastructure, security, and cloud solutions designed for the future of enterprise technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href={phoneHref} 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Call: +1 302 464 0950
                </a>
                <a 
                  href={emailHref} 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-sm text-green-200">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Visit us at: <a href={websiteHref} className="underline hover:text-white">{websiteHref}</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-Grade IT Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From quantum-ready infrastructure to autonomous systems, we deliver the most advanced IT solutions for modern enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeITServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">{service.category}</span>
                          {service.popular && (
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-xs text-yellow-600 ml-1">Popular</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-green-600">{service.price}</span>
                        <span className="text-sm text-gray-500">{service.delivery}</span>
                      </div>
                      <Link 
                        href={service.link}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Solutions?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We deliver enterprise-grade IT solutions with cutting-edge technology and proven results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Grade</h3>
                <p className="text-blue-100">Bank-level security and reliability for mission-critical applications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-blue-100">Fast implementation with minimal disruption to your business operations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                <p className="text-blue-100">Zero-trust architecture and advanced threat protection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-blue-100">Measurable results with average 300% ROI within 12 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Get a customized IT solution designed for your specific needs. Our experts are ready to help you build the future of enterprise technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Phone className="h-8 w-8 text-green-200 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <a href={phoneHref} className="text-green-200 hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-green-200 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <a href={emailHref} className="text-green-200 hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-green-200 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-green-200">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={phoneHref} 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Schedule IT Consultation
                </a>
                <a 
                  href={emailHref} 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Get Custom Quote
                </a>
                <a 
                  href={websiteHref} 
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
                >
                  Visit Our Website
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}