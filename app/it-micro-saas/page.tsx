import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Server, Database, Cloud, Shield } from 'lucide-react';

const ITMicroSaasPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, monitoring, and optimization for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: '$199/month',
      features: [
        'Multi-cloud Setup',
        'Cost Optimization',
        'Security Hardening',
        'Auto-scaling',
        'Monitoring & Alerts',
        'Backup & Recovery',
        'Performance Tuning',
        '24/7 Support'
      ],
      benefits: [
        'Reduce cloud costs by 40%',
        'Improve uptime to 99.9%',
        'Enhance security posture',
        'Scale automatically',
        'Minimize downtime'
      ],
      marketPrice: '$500-1,500/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Optimization Service',
      description: 'Advanced database performance tuning, query optimization, and maintenance for MySQL, PostgreSQL, and MongoDB.',
      icon: '🗄️',
      price: '$299/month',
      features: [
        'Query Optimization',
        'Index Tuning',
        'Performance Monitoring',
        'Backup Strategy',
        'Security Hardening',
        'Capacity Planning',
        'Migration Services',
        '24/7 Monitoring'
      ],
      benefits: [
        'Improve query speed by 80%',
        'Reduce database costs by 30%',
        'Prevent data loss',
        'Optimize storage usage',
        'Ensure high availability'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Database Services',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Performance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Development & Management',
      description: 'Custom API development, documentation, versioning, and management with rate limiting and analytics.',
      icon: '🔌',
      price: '$399/month',
      features: [
        'RESTful API Development',
        'GraphQL APIs',
        'API Documentation',
        'Rate Limiting',
        'Authentication',
        'Versioning',
        'Analytics & Monitoring',
        'SDK Generation'
      ],
      benefits: [
        'Accelerate development by 60%',
        'Improve API performance',
        'Enhance developer experience',
        'Reduce integration time',
        'Ensure API security'
      ],
      marketPrice: '$1,000-3,000/month',
      category: 'API Services',
      technologies: ['Node.js', 'Python', 'Go', 'GraphQL', 'Swagger', 'API Gateway'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps Automation Platform',
      description: 'Complete CI/CD pipeline setup, automated testing, deployment, and infrastructure as code.',
      icon: '⚙️',
      price: '$599/month',
      features: [
        'CI/CD Pipeline Setup',
        'Automated Testing',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Security Scanning',
        'Rollback Capabilities',
        'Team Training'
      ],
      benefits: [
        'Reduce deployment time by 90%',
        'Improve code quality',
        'Minimize human errors',
        'Enable rapid scaling',
        'Ensure consistency'
      ],
      marketPrice: '$1,500-4,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audits, vulnerability assessments, and penetration testing for your infrastructure.',
      icon: '🔒',
      price: '$799/month',
      features: [
        'Security Audits',
        'Vulnerability Scanning',
        'Penetration Testing',
        'Compliance Assessment',
        'Security Training',
        'Incident Response',
        'Security Monitoring',
        'Risk Assessment'
      ],
      benefits: [
        'Identify security gaps',
        'Prevent data breaches',
        'Ensure compliance',
        'Improve security posture',
        'Reduce security risks'
      ],
      marketPrice: '$2,000-5,000/month',
      category: 'Cybersecurity',
      technologies: ['Security Tools', 'Penetration Testing', 'Compliance Frameworks', 'Monitoring', 'Incident Response'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and implement microservices architecture with service mesh, API gateway, and monitoring.',
      icon: '🏗️',
      price: '$999/month',
      features: [
        'Architecture Design',
        'Service Decomposition',
        'API Gateway Setup',
        'Service Mesh Implementation',
        'Monitoring & Observability',
        'Load Balancing',
        'Circuit Breakers',
        'Documentation'
      ],
      benefits: [
        'Improve scalability',
        'Enable independent deployment',
        'Reduce system complexity',
        'Enhance fault tolerance',
        'Accelerate development'
      ],
      marketPrice: '$2,500-6,000/month',
      category: 'Architecture',
      technologies: ['Kubernetes', 'Istio', 'Envoy', 'Prometheus', 'Grafana', 'Jaeger'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Pipeline & ETL',
      description: 'Automated data pipelines for data ingestion, transformation, and loading with real-time processing.',
      icon: '📊',
      price: '$499/month',
      features: [
        'Data Ingestion',
        'ETL/ELT Pipelines',
        'Real-time Processing',
        'Data Quality Checks',
        'Schema Evolution',
        'Error Handling',
        'Monitoring & Alerts',
        'Data Lineage'
      ],
      benefits: [
        'Process millions of records',
        'Ensure data quality',
        'Enable real-time analytics',
        'Reduce manual work',
        'Improve data reliability'
      ],
      marketPrice: '$1,200-3,500/month',
      category: 'Data Engineering',
      technologies: ['Apache Kafka', 'Apache Airflow', 'Apache Spark', 'Python', 'SQL', 'Cloud Storage'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring solution with metrics, logs, traces, and alerting for your applications.',
      icon: '📈',
      price: '$299/month',
      features: [
        'Application Monitoring',
        'Infrastructure Monitoring',
        'Log Aggregation',
        'Distributed Tracing',
        'Custom Dashboards',
        'Alert Management',
        'Performance Analytics',
        'SLA Monitoring'
      ],
      benefits: [
        'Prevent outages',
        'Improve performance',
        'Reduce MTTR',
        'Ensure SLA compliance',
        'Optimize resources'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Custom Dashboards', 'Alerting'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile app development with React Native, Flutter, or native iOS/Android.',
      icon: '📱',
      price: '$699/month',
      features: [
        'Cross-platform Development',
        'Native Performance',
        'UI/UX Design',
        'API Integration',
        'Push Notifications',
        'App Store Deployment',
        'Performance Optimization',
        'Maintenance & Updates'
      ],
      benefits: [
        'Reach both platforms',
        'Reduce development costs',
        'Faster time to market',
        'Consistent user experience',
        'Easy maintenance'
      ],
      marketPrice: '$1,800-5,000/month',
      category: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Web Application Development',
      description: 'Modern web applications with React, Vue.js, or Angular with responsive design and performance optimization.',
      icon: '🌐',
      price: '$499/month',
      features: [
        'Frontend Development',
        'Backend Development',
        'Responsive Design',
        'Performance Optimization',
        'SEO Optimization',
        'Security Implementation',
        'Testing & QA',
        'Deployment & Hosting'
      ],
      benefits: [
        'Modern user interface',
        'Fast loading times',
        'Mobile-friendly design',
        'SEO optimized',
        'Secure and scalable'
      ],
      marketPrice: '$1,200-3,500/month',
      category: 'Web Development',
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT micro SAAS services including cloud management, database optimization, API development, and DevOps automation. Starting at $199/month." />
        <meta name="keywords" content="it micro saas, cloud management, database optimization, api development, devops, cybersecurity, microservices" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional IT services delivered as micro SAAS solutions. Scale your technology infrastructure with our expert services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$199</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your IT Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT micro SAAS services today and transform your technology operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITMicroSaasPage;