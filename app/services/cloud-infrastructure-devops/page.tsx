import { Cloud, CheckCircle, Database, Code, Container } from 'lucide-react';
export default function CloudInfrastructureDevOps() {
  const title = 'Cloud Infrastructure & DevOps — Zion Tech Group';
  const description = 'Enterprise-grade cloud infrastructure, DevOps automation, and CI/CD solutions. Scale your applications with confidence.';

  const devopsServices = [
    {
      name: 'Cloud Migration & Architecture',
      description: 'Seamless migration to AWS, Azure, or GCP with optimized architecture',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture design',
        'Automated migration with zero downtime',
        'Cost optimization and resource right-sizing',
        'Security compliance and governance',
        'Disaster recovery and backup solutions'
      ],
      pricing: '$5,000 - $50,000/project',
      delivery: '4-12 weeks',
      category: 'Cloud Migration',
      marketPrice: '$10,000-100,000/project',
      benefits: 'Reduce infrastructure costs by 40% and improve performance by 60%',
      useCases: ['Legacy system modernization', 'Multi-cloud deployment', 'Cost optimization', 'Compliance migration']
    },
    {
      name: 'CI/CD Pipeline Automation',
      description: 'Automated build, test, and deployment pipelines for faster releases',
      icon: GitBranch,
      features: [
        'Automated testing and quality gates',
        'Blue-green and canary deployments',
        'Infrastructure as Code (IaC)',
        'Container orchestration with Kubernetes',
        'Monitoring and rollback capabilities'
      ],
      pricing: '$3,000 - $25,000/project',
      delivery: '2-6 weeks',
      category: 'DevOps Automation',
      marketPrice: '$5,000-40,000/project',
      benefits: 'Deploy 10x faster with 99.9% reliability',
      useCases: ['Microservices deployment', 'Mobile app releases', 'Database migrations', 'Feature rollouts']
    },
    {
      name: 'Kubernetes & Container Orchestration',
      description: 'Production-ready Kubernetes clusters with advanced monitoring',
      icon: Container,
      features: [
        'Multi-cluster management',
        'Auto-scaling and load balancing',
        'Service mesh implementation',
        'Advanced monitoring and logging',
        'Security hardening and compliance'
      ],
      pricing: '$4,000 - $30,000/project',
      delivery: '3-8 weeks',
      category: 'Container Orchestration',
      marketPrice: '$8,000-50,000/project',
      benefits: 'Scale applications automatically with 99.99% uptime',
      useCases: ['Microservices architecture', 'High-traffic applications', 'Multi-tenant platforms', 'Edge computing']
    },
    {
      name: 'Infrastructure Monitoring & Observability',
      description: 'Comprehensive monitoring, logging, and alerting solutions',
      icon: Monitor,
      features: [
        'Real-time performance monitoring',
        'Distributed tracing and APM',
        'Log aggregation and analysis',
        'Intelligent alerting and incident response',
        'Custom dashboards and reporting'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-4 weeks',
      category: 'Monitoring',
      marketPrice: '$3,000-25,000/month',
      benefits: 'Reduce MTTR by 70% and prevent 90% of incidents',
      useCases: ['Application performance', 'Infrastructure health', 'Security monitoring', 'Business metrics']
    },
    {
      name: 'Security & Compliance Automation',
      description: 'Automated security scanning, compliance checking, and threat detection',
      icon: Shield,
      features: [
        'Vulnerability scanning and remediation',
        'Compliance automation (SOC2, GDPR, HIPAA)',
        'Security policy enforcement',
        'Threat detection and response',
        'Audit trail and reporting'
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '3-6 weeks',
      category: 'Security',
      marketPrice: '$5,000-35,000/month',
      benefits: 'Maintain 100% compliance with automated security',
      useCases: ['Regulatory compliance', 'Security audits', 'Threat prevention', 'Risk management']
    },
    {
      name: 'Database Management & Optimization',
      description: 'High-performance database solutions with automated scaling',
      icon: Database,
      features: [
        'Database migration and optimization',
        'Automated backup and recovery',
        'Performance tuning and indexing',
        'Read replicas and sharding',
        'Database monitoring and alerting'
      ],
      pricing: '$2,500 - $18,000/month',
      delivery: '2-5 weeks',
      category: 'Database',
      marketPrice: '$4,000-30,000/month',
      benefits: 'Improve query performance by 80% and reduce costs by 50%',
      useCases: ['High-traffic applications', 'Data analytics', 'Real-time processing', 'Global distribution']
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud, description: 'Amazon Web Services - Complete cloud platform' },
    { name: 'Azure', icon: Cloud, description: 'Microsoft Azure - Enterprise cloud solutions' },
    { name: 'Google Cloud', icon: Cloud, description: 'Google Cloud Platform - AI and ML focused' },
    { name: 'Kubernetes', icon: Container, description: 'Container orchestration platform' },
    { name: 'Docker', icon: Container, description: 'Containerization technology' },
    { name: 'Terraform', icon: Code, description: 'Infrastructure as Code' },
    { name: 'Jenkins', icon: Settings, description: 'CI/CD automation server' },
    { name: 'GitLab CI', icon: GitBranch, description: 'Integrated DevOps platform' },
    { name: 'Prometheus', icon: Monitor, description: 'Monitoring and alerting toolkit' },
    { name: 'Grafana', icon: BarChart3, description: 'Analytics and monitoring dashboards' }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Infrastructure Assessment',
      description: 'Analyze your current infrastructure and identify optimization opportunities.',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Architecture Design',
      description: 'Design scalable, secure, and cost-effective cloud architecture.',
      duration: '1-3 weeks'
    },
    {
      step: 3,
      title: 'Implementation & Migration',
      description: 'Implement solutions with minimal downtime and maximum reliability.',
      duration: '2-8 weeks'
    },
    {
      step: 4,
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring, optimization, and 24/7 support.',
      duration: 'Ongoing'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by 30-50% through right-sizing and automation'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Improve application performance and response times by 60-80%'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security with automated compliance and threat detection'
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Achieve 99.9%+ uptime with automated failover and disaster recovery'
    },
    {
      icon: Users,
      title: 'Scalability',
      description: 'Auto-scale applications to handle traffic spikes and growth'
    },
    {
      icon: Clock,
      title: 'Speed',
      description: 'Deploy applications 10x faster with automated CI/CD pipelines'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud Infrastructure & DevOps
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Enterprise-grade cloud infrastructure, DevOps automation, and CI/CD solutions. Scale your applications with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our DevOps & Cloud Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud infrastructure and DevOps solutions for modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devopsServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <service.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-sm text-purple-600 font-medium">{service.category}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Our Pricing:</span>
                  <span className="font-semibold text-green-600">{service.pricing}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Market Average:</span>
                  <span className="text-sm text-gray-500">{service.marketPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">Delivery Time:</span>
                  <span className="text-sm font-medium text-purple-600">{service.delivery}</span>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">{service.benefits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert knowledge across the entire cloud and DevOps ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our DevOps Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven benefits that drive business value and operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful cloud and DevOps implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-purple-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free infrastructure assessment and discover how we can optimize your cloud operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}