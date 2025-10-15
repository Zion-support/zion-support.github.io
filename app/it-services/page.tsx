import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Database, 
  Cpu, 
  Smartphone, 
  Globe, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Server,
  Lock,
  Monitor,
  Code,
  Settings,
  Users,
  Clock,
  Award
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
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
      id: 'cybersecurity-consulting',
      name: 'Cybersecurity Consulting',
      price: 'From $2,999',
      description: 'Comprehensive security assessment and implementation to protect your digital assets',
      features: [
        'Security audit and assessment',
        'Penetration testing',
        'Compliance review (GDPR, HIPAA, SOX)',
        'Security policy development',
        'Incident response planning',
        'Employee security training',
        'Vulnerability management',
        'Security monitoring setup'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks by 80%',
        'Build customer trust and confidence'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600',
      popular: true,
      duration: '1-3 weeks'
    },
    {
      id: 'database-solutions',
      name: 'Database Solutions',
      price: 'From $1,999',
      description: 'Optimized database design, implementation, and management for peak performance',
      features: [
        'Database design and optimization',
        'Performance tuning',
        'Backup and recovery strategies',
        'Scalability planning',
        'Data migration services',
        'Security implementation',
        'Monitoring and maintenance',
        'Cloud database setup'
      ],
      benefits: [
        'Improve query performance by 300%',
        'Ensure data integrity and security',
        'Reduce maintenance overhead',
        'Scale with business growth'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      popular: false,
      duration: '1-2 weeks'
    },
    {
      id: 'devops-solutions',
      name: 'DevOps Solutions',
      price: 'From $1,499',
      description: 'Complete DevOps implementation with CI/CD pipelines and infrastructure automation',
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
        'Reduce deployment time by 90%',
        'Improve code quality and reliability',
        'Faster time to market',
        'Better team collaboration'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600',
      popular: false,
      duration: '2-3 weeks'
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      price: 'From $3,999',
      description: 'Native and cross-platform mobile applications with modern UI/UX design',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'Native performance optimization',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Security implementation',
        'Performance monitoring'
      ],
      benefits: [
        'Reach mobile users effectively',
        'Improve customer engagement',
        'Increase brand visibility',
        'Generate new revenue streams'
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      popular: true,
      duration: '6-12 weeks'
    },
    {
      id: 'web-development',
      name: 'Web Development',
      price: 'From $2,499',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      features: [
        'Responsive web design',
        'SEO optimization',
        'Performance optimization',
        'Security implementation',
        'Content management systems',
        'E-commerce solutions',
        'API development',
        'Third-party integrations'
      ],
      benefits: [
        'Professional online presence',
        'Improved user experience',
        'Better search engine rankings',
        'Increased conversion rates'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      popular: false,
      duration: '4-8 weeks'
    }
  ];

  const technologies = [
    { name: 'AWS', icon: <Cloud className="w-6 h-6" />, description: 'Amazon Web Services' },
    { name: 'Azure', icon: <Server className="w-6 h-6" />, description: 'Microsoft Azure' },
    { name: 'Google Cloud', icon: <Cpu className="w-6 h-6" />, description: 'Google Cloud Platform' },
    { name: 'Docker', icon: <Settings className="w-6 h-6" />, description: 'Containerization' },
    { name: 'Kubernetes', icon: <Monitor className="w-6 h-6" />, description: 'Container Orchestration' },
    { name: 'React', icon: <Code className="w-6 h-6" />, description: 'Frontend Framework' },
    { name: 'Node.js', icon: <Zap className="w-6 h-6" />, description: 'Backend Runtime' },
    { name: 'Python', icon: <Database className="w-6 h-6" />, description: 'Programming Language' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: <Users className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'We design the solution architecture and create technical specifications',
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We develop and thoroughly test the solution with quality assurance',
      icon: <Code className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy the solution and provide ongoing support and maintenance',
      icon: <Zap className="w-8 h-8" />
    }
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
              Comprehensive IT Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our comprehensive IT solutions. From cloud migration to cybersecurity, 
              we provide the technology foundation your business needs to succeed.
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
                Our IT Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT services designed to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
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

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technologies We Use
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-400">{tech.icon}</div>
                </div>
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-400">{step.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
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
                  Ready to Transform Your IT Infrastructure?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our IT solutions to drive growth and innovation. 
                Start your digital transformation journey today.
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

export default ItServicesPage;