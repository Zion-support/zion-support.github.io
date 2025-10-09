'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Briefcase, Globe, Smartphone, Code, BarChart, Wrench, Lock, Cpu, Brain, Link, HardDrive, FileCheck, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Comprehensive cloud migration, setup, optimization, and management services. Move to the cloud with confidence and expertise.',
      icon: Cloud,
      price: '$1,299/month',
      originalPrice: '$2,599/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Multi-cloud Strategy', 'Disaster Recovery', 'Performance Monitoring', 'Compliance Management'],
      benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', 'Better performance'],
      color: 'text-blue-400',
      category: 'Cloud Computing',
      trialDays: 30,
      setupFee: 0,
      integrations: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud', 'Alibaba Cloud']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and compliance. Protect your business from cyber threats.',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$3,199/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Penetration Testing', 'Security Training', 'Risk Assessment'],
      benefits: ['Proactive threat protection', 'Compliance assurance', 'Reduced security risks', '24/7 monitoring'],
      color: 'text-red-400',
      category: 'Security',
      trialDays: 30,
      setupFee: 0,
      integrations: ['CrowdStrike', 'SentinelOne', 'Palo Alto', 'Fortinet', 'Check Point', 'Cisco']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring. Accelerate your development process.',
      icon: Settings,
      price: '$1,199/month',
      originalPrice: '$2,399/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps Implementation', 'Microservices Architecture', 'Performance Optimization'],
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Automated processes'],
      color: 'text-green-400',
      category: 'DevOps',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'CircleCI', 'Travis CI']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and analytics. Optimize your data infrastructure.',
      icon: Database,
      price: '$899/month',
      originalPrice: '$1,799/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Real-time Analytics', 'Scalability Planning', 'Monitoring & Alerting'],
      benefits: ['Better performance', 'Data security', 'Automated backups', 'Scalable architecture'],
      color: 'text-purple-400',
      category: 'Data Management',
      trialDays: 30,
      setupFee: 0,
      integrations: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra']
    },
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting for digital transformation, optimization, and innovation. Transform your business with technology.',
      icon: Briefcase,
      price: '$1,000/month',
      originalPrice: '$2,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management', 'ROI Analysis', 'Technology Roadmap', 'Innovation Strategy'],
      benefits: ['Strategic guidance', 'Technology alignment', 'Digital transformation', 'Innovation support'],
      color: 'text-yellow-400',
      category: 'Consulting',
      trialDays: 30,
      setupFee: 0,
      integrations: ['ServiceNow', 'Jira', 'Confluence', 'Slack', 'Microsoft Teams', 'Zoom']
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions with security and performance optimization. Build reliable networks.',
      icon: Globe,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring', 'SD-WAN Solutions', 'Network Automation', 'Load Balancing', 'Traffic Management'],
      benefits: ['Reliable connectivity', 'Enhanced security', 'Better performance', 'Scalable infrastructure'],
      color: 'text-indigo-400',
      category: 'Networking',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto', 'F5']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern frameworks. Build amazing mobile experiences.',
      icon: Smartphone,
      price: '$1,500/month',
      originalPrice: '$3,000/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization', 'Progressive Web Apps', 'Mobile Security', 'Performance Optimization', 'Analytics Integration'],
      benefits: ['Native performance', 'Cross-platform compatibility', 'Modern UI/UX', 'App store optimization'],
      color: 'text-pink-400',
      category: 'Mobile Development',
      trialDays: 30,
      setupFee: 0,
      integrations: ['React Native', 'Flutter', 'Xamarin', 'Ionic', 'Cordova', 'PhoneGap']
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies and performance optimization. Build fast, scalable web solutions.',
      icon: Code,
      price: '$1,200/month',
      originalPrice: '$2,400/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization', 'Progressive Web Apps', 'Microservices Architecture', 'Cloud Deployment', 'Security Implementation'],
      benefits: ['Modern web apps', 'Fast performance', 'Scalable architecture', 'Security built-in'],
      color: 'text-cyan-400',
      category: 'Web Development',
      trialDays: 30,
      setupFee: 0,
      integrations: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions with real-time insights. Turn data into business value.',
      icon: BarChart,
      price: '$1,300/month',
      originalPrice: '$2,600/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining', 'Predictive Analytics', 'Data Visualization', 'ETL Processes', 'Data Governance'],
      benefits: ['Data-driven decisions', 'Real-time insights', 'Better reporting', 'Predictive analytics'],
      color: 'text-orange-400',
      category: 'Data Analytics',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Tableau', 'Power BI', 'Looker', 'Domo', 'Qlik', 'Sisense']
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services with proactive monitoring. Keep your systems running smoothly.',
      icon: Wrench,
      price: '$800/month',
      originalPrice: '$1,600/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'Remote Monitoring', 'Help Desk Services', 'Incident Management', 'Change Management'],
      benefits: ['24/7 support', 'Proactive maintenance', 'Reduced downtime', 'Expert assistance'],
      color: 'text-gray-400',
      category: 'Support',
      trialDays: 30,
      setupFee: 0,
      integrations: ['ServiceNow', 'Jira Service Management', 'Freshservice', 'ManageEngine', 'Spiceworks', 'Lansweeper']
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, cryptocurrency solutions, and Web3 applications. Build the future of decentralized technology.',
      icon: Lock,
      price: '$2,000/month',
      originalPrice: '$4,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions', 'NFT Marketplaces', 'Web3 Integration', 'Blockchain Consulting', 'Security Audits'],
      benefits: ['Decentralized solutions', 'Smart contracts', 'Token economics', 'Web3 integration'],
      color: 'text-yellow-500',
      category: 'Blockchain',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Ethereum', 'Polygon', 'Binance Smart Chain', 'Solana', 'Cardano', 'Polkadot']
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things development, implementation, and edge computing solutions. Connect and optimize your devices.',
      icon: Cpu,
      price: '$1,600/month',
      originalPrice: '$3,200/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'IoT Security', 'Device Management', 'Analytics & Insights'],
      benefits: ['Connected devices', 'Real-time monitoring', 'Edge processing', 'IoT security'],
      color: 'text-green-500',
      category: 'IoT',
      trialDays: 30,
      setupFee: 0,
      integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'IBM Watson IoT', 'ThingWorx', 'PTC']
    },
    {
      title: 'AI Infrastructure',
      description: 'AI infrastructure setup, GPU clusters, and machine learning platform deployment. Build powerful AI systems.',
      icon: Brain,
      price: '$1,800/month',
      originalPrice: '$3,600/month',
      features: ['GPU Cluster Setup', 'ML Platform Deployment', 'Model Serving', 'Data Pipeline Setup', 'AI Model Training', 'MLOps Implementation', 'Model Monitoring', 'Auto-scaling'],
      benefits: ['High-performance AI', 'Scalable infrastructure', 'MLOps automation', 'Model deployment'],
      color: 'text-purple-500',
      category: 'AI Infrastructure',
      trialDays: 30,
      setupFee: 0,
      integrations: ['NVIDIA', 'AMD', 'Intel', 'AWS SageMaker', 'Azure ML', 'Google AI Platform']
    },
    {
      title: 'Enterprise Integration',
      description: 'Enterprise system integration, API development, and legacy system modernization. Connect your systems seamlessly.',
      icon: Link,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['API Development', 'System Integration', 'Legacy Modernization', 'Data Synchronization', 'Workflow Automation', 'Enterprise Architecture', 'Middleware Solutions', 'Real-time Integration'],
      benefits: ['Seamless integration', 'Legacy modernization', 'API development', 'Workflow automation'],
      color: 'text-blue-500',
      category: 'Integration',
      trialDays: 30,
      setupFee: 0,
      integrations: ['MuleSoft', 'Dell Boomi', 'Informatica', 'Talend', 'Apache Kafka', 'RabbitMQ']
    },
    {
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive disaster recovery, backup solutions, and business continuity planning. Protect your business from disasters.',
      icon: HardDrive,
      price: '$1,100/month',
      originalPrice: '$2,200/month',
      features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Data Replication', 'Recovery Testing', 'Compliance Backup', 'Cloud Backup', 'On-premises Backup'],
      benefits: ['Data protection', 'Business continuity', 'Disaster recovery', 'Compliance backup'],
      color: 'text-red-500',
      category: 'Data Protection',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Veeam', 'Commvault', 'Acronis', 'Carbonite', 'Druva', 'Rubrik']
    },
    {
      title: 'Compliance & Governance',
      description: 'IT compliance, governance, and regulatory adherence solutions. Stay compliant with industry regulations.',
      icon: FileCheck,
      price: '$1,300/month',
      originalPrice: '$2,600/month',
      features: ['Compliance Management', 'Risk Assessment', 'Audit Preparation', 'Policy Development', 'Training Programs', 'Documentation', 'Monitoring & Reporting', 'Regulatory Updates'],
      benefits: ['Regulatory compliance', 'Risk management', 'Audit readiness', 'Policy development'],
      color: 'text-indigo-500',
      category: 'Compliance',
      trialDays: 30,
      setupFee: 0,
      integrations: ['GRC Platforms', 'Compliance Software', 'Risk Management Tools', 'Audit Software', 'Policy Management', 'Training Platforms']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 neural-network-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative">
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="cyber-text-3d text-5xl md:text-7xl font-bold mb-6">
              IT Services
            </h1>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Comprehensive technology solutions for modern businesses
            </p>
            <p className="text-gray-300 text-lg mb-12">
              From cloud migration to cybersecurity, our IT services provide the foundation 
              for digital transformation and business growth in the modern era.
            </p>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
              Our IT Services
            </h2>
            <p className="neon-text text-xl md:text-2xl mb-8">
              End-to-end technology solutions for enterprise success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={service.title}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <service.icon className={`w-16 h-16 mx-auto mb-4 ${service.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.trialDays} days free trial • No setup fee
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={`/it-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full cyber-button py-3 text-center block font-semibold"
                  >
                    Learn More
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full futuristic-glow py-3 text-center block font-semibold text-white"
                  >
                    Contact Sales
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400 text-center">
                    Category: {service.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-20 relative">
        <div className="cyber-scan-line"></div>
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="neon-text text-xl md:text-2xl mb-8">
                Proven expertise in enterprise technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert IT Team</h3>
                <p className="text-gray-300 text-sm">
                  Our certified IT professionals have years of experience in enterprise technology, cloud computing, and cybersecurity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">
                  All our IT solutions are built with enterprise-grade security, compliance, and data protection standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cloud-First Approach</h3>
                <p className="text-gray-300 text-sm">
                  We design solutions with cloud-first principles, ensuring scalability, flexibility, and cost-effectiveness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300 text-sm">
                  Round-the-clock support and monitoring to ensure your systems are always running smoothly and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative">
        <div className="cyber-scan-effect"></div>
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Get started with our IT services today
            </p>
            <p className="text-gray-300 text-lg mb-12">
              Contact us for a free consultation and discover how our comprehensive IT solutions 
              can modernize your infrastructure and drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="futuristic-glow px-8 py-4 text-lg font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServicesPage;