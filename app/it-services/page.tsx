'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Headphones, Printer, Camera, Wrench, Cog, Activity, MessageCircle, Mic, Phone } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load balancing', 'Disaster recovery'],
      price: 'Starting at $500/month',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response'],
      price: 'Starting at $800/month',
      category: 'Security'
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions for performance and reliability',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance tuning', 'Backup & recovery', 'Data migration', 'Monitoring'],
      price: 'Starting at $300/month',
      category: 'Data'
    },
    {
      title: 'Network Solutions',
      description: 'Robust networking infrastructure for seamless connectivity',
      icon: <Network className="w-8 h-8" />,
      features: ['Network design', 'VPN setup', 'Firewall configuration', 'Monitoring'],
      price: 'Starting at $400/month',
      category: 'Infrastructure'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes',
      icon: <Code className="w-8 h-8" />,
      features: ['Automated testing', 'Continuous deployment', 'Infrastructure as code', 'Monitoring'],
      price: 'Starting at $600/month',
      category: 'Development'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support for your business needs',
      icon: <Users className="w-8 h-8" />,
      features: ['Help desk', 'Remote support', 'System maintenance', 'User training'],
      price: 'Starting at $200/month',
      category: 'Support'
    },
    // Advanced Cloud & Infrastructure Services
    {
      title: 'Multi-Cloud Architecture',
      description: 'Comprehensive multi-cloud solutions with AWS, Azure, and GCP integration for maximum flexibility and redundancy.',
      icon: <Cloud className="w-8 h-8" />,
      features: [
        'Multi-cloud strategy design',
        'Cloud migration planning',
        'Cost optimization',
        'Disaster recovery',
        'Cloud governance',
        'Security compliance',
        'Performance monitoring',
        'Auto-scaling solutions'
      ],
      price: 'Starting at $2,500/month',
      category: 'Cloud Infrastructure',
      benefits: [
        'Reduce cloud costs by 40%',
        'Improve uptime to 99.99%',
        'Enable global scalability',
        'Ensure data sovereignty'
      ],
      marketPrice: '$5,000-15,000/month',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Enterprise Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with advanced threat detection and automated response capabilities.',
      icon: <Shield className="w-8 h-8" />,
      features: [
        '24/7 security monitoring',
        'Threat intelligence',
        'Incident response',
        'Vulnerability management',
        'Security analytics',
        'Compliance reporting',
        'Penetration testing',
        'Security training'
      ],
      price: 'Starting at $5,000/month',
      category: 'Cybersecurity',
      benefits: [
        'Detect threats 90% faster',
        'Reduce security incidents by 80%',
        'Ensure compliance',
        'Minimize business impact'
      ],
      marketPrice: '$10,000-30,000/month',
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Threat Intelligence', 'Machine Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Advanced Database Solutions',
      description: 'High-performance database solutions with advanced optimization, clustering, and real-time analytics capabilities.',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Database design & optimization',
        'High availability clustering',
        'Real-time analytics',
        'Data warehousing',
        'Backup & disaster recovery',
        'Performance tuning',
        'Data migration',
        'Database monitoring'
      ],
      price: 'Starting at $1,500/month',
      category: 'Database Solutions',
      benefits: [
        'Improve query performance by 300%',
        'Ensure 99.99% uptime',
        'Enable real-time analytics',
        'Reduce storage costs by 50%'
      ],
      marketPrice: '$3,000-10,000/month',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'ClickHouse'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Software-Defined Networking (SDN)',
      description: 'Modern network infrastructure with software-defined networking for enhanced flexibility, security, and performance.',
      icon: <Network className="w-8 h-8" />,
      features: [
        'SDN architecture design',
        'Network virtualization',
        'Software-defined WAN',
        'Network automation',
        'Traffic optimization',
        'Security integration',
        'Network monitoring',
        'Cloud connectivity'
      ],
      price: 'Starting at $2,000/month',
      category: 'Network Infrastructure',
      benefits: [
        'Reduce network complexity by 60%',
        'Improve network performance by 200%',
        'Enable rapid scaling',
        'Enhance security posture'
      ],
      marketPrice: '$4,000-12,000/month',
      technologies: ['OpenFlow', 'OpenStack', 'VMware NSX', 'Cisco ACI', 'Juniper Contrail'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Advanced DevOps & Platform Engineering',
      description: 'Comprehensive DevOps solutions with platform engineering, GitOps, and advanced CI/CD pipelines for enterprise-scale deployments.',
      icon: <Code className="w-8 h-8" />,
      features: [
        'Platform engineering',
        'GitOps workflows',
        'Advanced CI/CD pipelines',
        'Infrastructure as Code',
        'Container orchestration',
        'Service mesh implementation',
        'Observability & monitoring',
        'Developer experience optimization'
      ],
      price: 'Starting at $3,500/month',
      category: 'DevOps & Platform',
      benefits: [
        'Accelerate deployment by 500%',
        'Reduce deployment failures by 90%',
        'Improve developer productivity',
        'Enable rapid scaling'
      ],
      marketPrice: '$7,000-20,000/month',
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'Istio', 'Prometheus', 'Grafana'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Enterprise IT Infrastructure',
      description: 'Complete enterprise infrastructure solutions including servers, storage, networking, and data center management.',
      icon: <Server className="w-8 h-8" />,
      features: [
        'Server infrastructure design',
        'Storage solutions',
        'Data center management',
        'Hardware procurement',
        'Infrastructure monitoring',
        'Capacity planning',
        'Disaster recovery',
        'Maintenance & support'
      ],
      price: 'Starting at $4,000/month',
      category: 'Infrastructure',
      benefits: [
        'Optimize infrastructure costs',
        'Improve reliability',
        'Enable scalability',
        'Ensure compliance'
      ],
      marketPrice: '$8,000-25,000/month',
      technologies: ['Dell', 'HP', 'Cisco', 'VMware', 'Microsoft', 'Linux', 'SAN', 'NAS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive IT service management with ITIL best practices, service desk, and process automation.',
      icon: <Settings className="w-8 h-8" />,
      features: [
        'ITIL framework implementation',
        'Service desk setup',
        'Change management',
        'Incident management',
        'Problem management',
        'Asset management',
        'Service level management',
        'Process automation'
      ],
      price: 'Starting at $1,800/month',
      category: 'IT Management',
      benefits: [
        'Improve service quality by 70%',
        'Reduce incident resolution time by 60%',
        'Increase customer satisfaction',
        'Optimize IT operations'
      ],
      marketPrice: '$3,500-10,000/month',
      technologies: ['ServiceNow', 'Jira Service Management', 'BMC Remedy', 'Cherwell', 'ITIL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Center & Colocation Services',
      description: 'Enterprise-grade data center solutions with colocation, cloud connectivity, and disaster recovery capabilities.',
      icon: <HardDrive className="w-8 h-8" />,
      features: [
        'Data center design',
        'Colocation services',
        'Cloud connectivity',
        'Disaster recovery sites',
        'Power & cooling management',
        'Physical security',
        'Compliance & certifications',
        'Remote hands support'
      ],
      price: 'Starting at $2,500/month',
      category: 'Data Center',
      benefits: [
        'Ensure high availability',
        'Reduce infrastructure costs',
        'Enable rapid scaling',
        'Maintain compliance'
      ],
      marketPrice: '$5,000-15,000/month',
      technologies: ['Tier III/IV Data Centers', 'UPS Systems', 'HVAC', 'Fire Suppression', 'Access Control'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Comprehensive IT compliance solutions for SOX, HIPAA, GDPR, and other regulatory requirements.',
      icon: <FileText className="w-8 h-8" />,
      features: [
        'Compliance assessment',
        'Policy development',
        'Risk management',
        'Audit preparation',
        'Documentation management',
        'Training programs',
        'Continuous monitoring',
        'Remediation planning'
      ],
      price: 'Starting at $2,200/month',
      category: 'Compliance',
      benefits: [
        'Ensure regulatory compliance',
        'Reduce audit risks',
        'Improve security posture',
        'Streamline compliance processes'
      ],
      marketPrice: '$4,500-12,000/month',
      technologies: ['GRC Platforms', 'Risk Management', 'Compliance Tools', 'Documentation Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification preparation for your team to stay current with technology trends.',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Custom training programs',
        'Certification preparation',
        'Hands-on labs',
        'Instructor-led training',
        'Online learning platforms',
        'Skills assessment',
        'Career development',
        'Technology workshops'
      ],
      price: 'Starting at $500/month',
      category: 'Training',
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Reduce support tickets',
        'Enable innovation'
      ],
      marketPrice: '$1,000-3,000/month',
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Python', 'Linux'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to align technology with business objectives and drive digital transformation.',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation',
        'Architecture design',
        'Vendor management',
        'Project management',
        'Change management',
        'ROI analysis'
      ],
      price: 'Starting at $3,000/month',
      category: 'Consulting',
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Accelerate digital transformation',
        'Improve operational efficiency'
      ],
      marketPrice: '$6,000-18,000/month',
      technologies: ['Enterprise Architecture', 'Digital Strategy', 'Cloud Strategy', 'Security Strategy'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management services for complex technology implementations and system integrations.',
      icon: <Calendar className="w-8 h-8" />,
      features: [
        'Project planning & execution',
        'Resource management',
        'Risk management',
        'Quality assurance',
        'Stakeholder communication',
        'Budget management',
        'Timeline management',
        'Project reporting'
      ],
      price: 'Starting at $2,000/month',
      category: 'Project Management',
      benefits: [
        'Ensure project success',
        'Reduce project risks',
        'Optimize resource utilization',
        'Improve delivery quality'
      ],
      marketPrice: '$4,000-12,000/month',
      technologies: ['PMI Methodology', 'Agile', 'Scrum', 'Kanban', 'Project Management Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-400 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-1">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-bold mb-4">{service.price}</div>
                <Link
                  href="/contact"
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your IT?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;