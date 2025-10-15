import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Clock,
  Users,
  TrendingUp,
  Settings,
  Globe,
  Lock,
  Monitor,
  Award,
  Target,
  Rocket,
  Cpu,
  HardDrive
} from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      id: 'cloud-migration-services',
      name: 'Cloud Migration Services',
      price: 'From $2,999',
      description: 'Seamless migration to cloud infrastructure with zero downtime and enhanced security',
      features: [
        'Zero-downtime migration',
        'Cost optimization analysis',
        'Security compliance review',
        'Performance monitoring',
        'Data backup and recovery',
        'Multi-cloud strategy',
        'Legacy system integration',
        '24/7 support during migration'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Faster deployment and updates'
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      popular: true,
      duration: '2-4 weeks'
    },
    {
      id: 'cloud-infrastructure-setup',
      name: 'Cloud Infrastructure Setup',
      price: 'From $1,999',
      description: 'Complete cloud infrastructure design and implementation for your business needs',
      features: [
        'Infrastructure design and planning',
        'Server provisioning and configuration',
        'Network setup and security',
        'Load balancing and auto-scaling',
        'Monitoring and alerting',
        'Backup and disaster recovery',
        'Documentation and training',
        'Ongoing support and maintenance'
      ],
      benefits: [
        'Scalable and reliable infrastructure',
        'Reduced operational overhead',
        'Improved performance and availability',
        'Cost-effective resource utilization'
      ],
      icon: <Server className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      popular: false,
      duration: '1-3 weeks'
    },
    {
      id: 'cloud-security-solutions',
      name: 'Cloud Security Solutions',
      price: 'From $1,499',
      description: 'Comprehensive cloud security implementation and management services',
      features: [
        'Security assessment and audit',
        'Identity and access management',
        'Data encryption and protection',
        'Network security configuration',
        'Compliance monitoring',
        'Threat detection and response',
        'Security training and awareness',
        'Regular security updates'
      ],
      benefits: [
        'Enhanced data protection',
        'Compliance with regulations',
        'Reduced security risks',
        'Peace of mind for your data'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-600',
      popular: true,
      duration: '1-2 weeks'
    },
    {
      id: 'cloud-database-solutions',
      name: 'Cloud Database Solutions',
      price: 'From $1,299',
      description: 'Managed database services with high availability and performance optimization',
      features: [
        'Database design and optimization',
        'High availability setup',
        'Backup and recovery strategies',
        'Performance monitoring',
        'Security implementation',
        'Scaling and load balancing',
        'Data migration services',
        '24/7 monitoring and support'
      ],
      benefits: [
        'Improved database performance',
        'High availability and reliability',
        'Automated backups and recovery',
        'Reduced management overhead'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      popular: false,
      duration: '1-2 weeks'
    },
    {
      id: 'cloud-devops-solutions',
      name: 'Cloud DevOps Solutions',
      price: 'From $1,799',
      description: 'Complete DevOps implementation with CI/CD pipelines and automation',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Monitoring and logging',
        'Automated testing',
        'Deployment automation',
        'Environment management',
        'Team training and support'
      ],
      benefits: [
        'Faster deployment cycles',
        'Improved code quality',
        'Better team collaboration',
        'Reduced manual errors'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      popular: false,
      duration: '2-3 weeks'
    },
    {
      id: 'cloud-monitoring-solutions',
      name: 'Cloud Monitoring Solutions',
      price: 'From $799',
      description: 'Comprehensive cloud monitoring and alerting for optimal performance',
      features: [
        'Real-time performance monitoring',
        'Custom dashboards and reports',
        'Automated alerting',
        'Log aggregation and analysis',
        'Capacity planning',
        'Cost monitoring and optimization',
        'Security monitoring',
        '24/7 support and maintenance'
      ],
      benefits: [
        'Proactive issue detection',
        'Improved system reliability',
        'Better resource utilization',
        'Reduced downtime'
      ],
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600',
      popular: false,
      duration: '1 week'
    }
  ];

  const cloudProviders = [
    { name: 'AWS', icon: <Cloud className="w-6 h-6" />, description: 'Amazon Web Services' },
    { name: 'Azure', icon: <Server className="w-6 h-6" />, description: 'Microsoft Azure' },
    { name: 'Google Cloud', icon: <Cpu className="w-6 h-6" />, description: 'Google Cloud Platform' },
    { name: 'IBM Cloud', icon: <Database className="w-6 h-6" />, description: 'IBM Cloud Services' },
    { name: 'Oracle Cloud', icon: <HardDrive className="w-6 h-6" />, description: 'Oracle Cloud Infrastructure' },
    { name: 'Alibaba Cloud', icon: <Globe className="w-6 h-6" />, description: 'Alibaba Cloud' }
  ];

  const serviceTypes = [
    { name: 'IaaS', icon: <Server className="w-6 h-6" />, description: 'Infrastructure as a Service' },
    { name: 'PaaS', icon: <Settings className="w-6 h-6" />, description: 'Platform as a Service' },
    { name: 'SaaS', icon: <Cloud className="w-6 h-6" />, description: 'Software as a Service' },
    { name: 'FaaS', icon: <Zap className="w-6 h-6" />, description: 'Function as a Service' },
    { name: 'CaaS', icon: <Monitor className="w-6 h-6" />, description: 'Container as a Service' },
    { name: 'DBaaS', icon: <Database className="w-6 h-6" />, description: 'Database as a Service' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Scalable Cloud Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cloud Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with scalable cloud solutions. From migration to management, 
              we provide comprehensive cloud services that drive efficiency and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
              >
                <Cloud className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Cloud Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of cloud services designed to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service) => (
              <div key={service.id} className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${service.popular ? 'border-blue-500/40 ring-2 ring-blue-500/20' : 'border-blue-500/20'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-blue-400 text-sm">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-semibold text-white">Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-blue-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cloud Providers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud providers to deliver the best solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="group text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-400">{provider.icon}</div>
                </div>
                <h3 className="text-white font-semibold mb-2">{provider.name}</h3>
                <p className="text-gray-400 text-sm">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Service Types
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a full range of cloud service models to meet your specific requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceTypes.map((type, index) => (
              <div key={index} className="group text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-400">{type.icon}</div>
                </div>
                <h3 className="text-white font-semibold mb-2">{type.name}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/20 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Move to the Cloud?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our cloud solutions to drive growth and efficiency. 
                Start your cloud transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
                >
                  <Cloud className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServicesPage;