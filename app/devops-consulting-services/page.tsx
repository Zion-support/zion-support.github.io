import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Server, 
  Database, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Brain,
  Target,
  FileText,
  Smartphone,
  Monitor,
  Activity,
  BarChart3,
  Bell,
  MessageSquare,
  Upload,
  Download,
  Search,
  Filter,
  Users,
  Key,
  Bug,
  Network,
  HardDrive,
  Eye,
  Lock,
  RefreshCw,
  Play,
  Pause,
  Square,
  CheckSquare,
  X,
  AlertTriangle,
  Info,
  GitBranch,
  Code,
  Terminal,
  Wrench,
  Cpu,
  MemoryStick
} from 'lucide-react';

const DevOpsConsultingServicesPage: React.FC = () => {
  const features = [
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Automate your software delivery with continuous integration and deployment pipelines.',
      icon: <GitBranch className="w-6 h-6" />,
      benefits: ['Automated testing', 'Deployment automation', 'Quality gates', 'Rollback capabilities']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage your infrastructure using code for consistency and reliability.',
      icon: <Code className="w-6 h-6" />,
      benefits: ['Terraform', 'CloudFormation', 'Ansible', 'Version control']
    },
    {
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications with Kubernetes and Docker.',
      icon: <Server className="w-6 h-6" />,
      benefits: ['Kubernetes', 'Docker', 'Service mesh', 'Auto-scaling']
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and logging for your applications and infrastructure.',
      icon: <Activity className="w-6 h-6" />,
      benefits: ['Application monitoring', 'Infrastructure monitoring', 'Log aggregation', 'Alerting']
    },
    {
      title: 'Security Automation',
      description: 'Integrate security practices into your development and deployment processes.',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['Security scanning', 'Compliance checks', 'Vulnerability management', 'Policy enforcement']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize your applications and infrastructure for maximum performance.',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Performance testing', 'Load balancing', 'Caching strategies', 'Resource optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'DevOps Starter',
      price: '$3,999',
      period: '/month',
      description: 'Perfect for small teams getting started with DevOps',
      features: [
        'Basic CI/CD setup',
        'Infrastructure automation',
        'Basic monitoring',
        'Email support',
        '2 team members',
        'Standard tools'
      ],
      popular: false
    },
    {
      name: 'DevOps Professional',
      price: '$7,999',
      period: '/month',
      description: 'Advanced DevOps practices for growing teams',
      features: [
        'Advanced CI/CD',
        'Full automation',
        'Comprehensive monitoring',
        'Priority support',
        '5 team members',
        'Advanced tools',
        'Security integration',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'DevOps Enterprise',
      price: '$15,999',
      period: '/month',
      description: 'Complete DevOps transformation for large organizations',
      features: [
        'Enterprise CI/CD',
        'Full automation suite',
        'Advanced monitoring',
        'Dedicated support',
        'Unlimited team members',
        'Custom tools',
        'Advanced security',
        'Performance optimization',
        'Training & mentoring'
      ],
      popular: false
    }
  ];

  const devOpsTools = [
    {
      name: 'Jenkins',
      icon: <Terminal className="w-6 h-6" />,
      description: 'CI/CD automation'
    },
    {
      name: 'Kubernetes',
      icon: <Server className="w-6 h-6" />,
      description: 'Container orchestration'
    },
    {
      name: 'Docker',
      icon: <HardDrive className="w-6 h-6" />,
      description: 'Containerization'
    },
    {
      name: 'Terraform',
      icon: <Code className="w-6 h-6" />,
      description: 'Infrastructure as code'
    },
    {
      name: 'Ansible',
      icon: <Settings className="w-6 h-6" />,
      description: 'Configuration management'
    },
    {
      name: 'Prometheus',
      icon: <Activity className="w-6 h-6" />,
      description: 'Monitoring & alerting'
    },
    {
      name: 'Grafana',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Visualization & dashboards'
    },
    {
      name: 'ELK Stack',
      icon: <Search className="w-6 h-6" />,
      description: 'Log management'
    }
  ];

  const devOpsPractices = [
    {
      title: 'Agile Development',
      description: 'Implement agile methodologies for faster, more reliable software delivery',
      icon: <Target className="w-8 h-8" />,
      features: ['Sprint planning', 'Daily standups', 'Retrospectives', 'Continuous improvement']
    },
    {
      title: 'Test Automation',
      description: 'Automate testing at all levels to ensure quality and reliability',
      icon: <CheckSquare className="w-8 h-8" />,
      features: ['Unit testing', 'Integration testing', 'E2E testing', 'Performance testing']
    },
    {
      title: 'Deployment Strategies',
      description: 'Implement safe deployment strategies to minimize risk and downtime',
      icon: <Upload className="w-8 h-8" />,
      features: ['Blue-green deployment', 'Canary releases', 'Rolling updates', 'Feature flags']
    },
    {
      title: 'Incident Response',
      description: 'Establish processes for handling incidents and maintaining system reliability',
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ['Incident management', 'Post-mortems', 'Runbooks', 'On-call procedures']
    }
  ];

  return (
    <>
      <Helmet>
        <title>DevOps Consulting Services - Expert DevOps Implementation | Zion Tech Group</title>
        <meta name="description" content="Transform your development process with our expert DevOps consulting services. CI/CD, automation, monitoring, and cloud-native solutions for modern teams." />
        <meta name="keywords" content="DevOps consulting, CI/CD, automation, Kubernetes, Docker, infrastructure as code, monitoring, cloud-native" />
        <link rel="canonical" href="https://ziontechgroup.com/devops-consulting-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Settings className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Expert DevOps Consulting</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              DevOps Consulting <span className="text-green-400">Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your development process with our expert DevOps consulting services. 
              Accelerate delivery, improve quality, and reduce risk with modern DevOps practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-green-500/25"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50x</div>
                <div className="text-gray-300 text-sm">Faster Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">75%</div>
                <div className="text-gray-300 text-sm">Faster Recovery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry-Leading Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the best DevOps tools and technologies in the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {devOpsTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {tool.name}
                  </h3>
                  
                  <p className="text-xs text-gray-300">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Practices Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                DevOps Best Practices
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Implement proven DevOps practices to accelerate your development process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devOpsPractices.map((practice, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {practice.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {practice.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {practice.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {practice.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive DevOps solutions to transform your development process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                DevOps Service Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the DevOps service plan that fits your team size and needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-green-500/50 ring-2 ring-green-500/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Development Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get started with our DevOps consulting services and accelerate your software delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-green-500/25"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ Free consultation • ✓ No obligation • ✓ Expert guidance</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevOpsConsultingServicesPage;