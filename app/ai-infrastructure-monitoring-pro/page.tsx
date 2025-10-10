'use client';
import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Server, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Award,
  AlertTriangle,
  TrendingUp,
  Database,
  Globe,
  Settings,
  Eye,
  Lock,
  RefreshCw,
  BarChart,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Cloud,
  Target,
  Sparkles,
  Monitor,
  Bell,
  FileText,
  Download,
  Upload,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const AIInfrastructureMonitoringProPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring of all infrastructure components with instant alerts and notifications',
      details: ['Server performance', 'Network traffic', 'Database health', 'Application metrics']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms predict issues before they impact your business',
      details: ['Anomaly detection', 'Predictive maintenance', 'Capacity planning', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Comprehensive security monitoring with threat detection and incident response',
      details: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Incident response']
    },
    {
      icon: BarChart,
      title: 'Advanced Reporting',
      description: 'Detailed reports and dashboards with actionable insights and recommendations',
      details: ['Custom dashboards', 'Automated reports', 'Performance analytics', 'Trend analysis']
    },
    {
      icon: Zap,
      title: 'Automated Remediation',
      description: 'Automatically resolve common issues and optimize performance without human intervention',
      details: ['Auto-scaling', 'Load balancing', 'Resource optimization', 'Error recovery']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Support',
      description: 'Monitor infrastructure across AWS, Azure, GCP, and on-premise environments',
      details: ['Cloud monitoring', 'Hybrid environments', 'Multi-region support', 'Cross-platform analytics']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 199,
      originalPrice: 299,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email alerts',
        'Standard support',
        'Mobile app access',
        '30-day data retention',
        'Basic reporting'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 499,
      originalPrice: 699,
      period: 'month',
      description: 'Ideal for growing businesses and IT teams',
      features: [
        'Up to 100 servers',
        'Advanced AI monitoring',
        'Multi-channel alerts',
        'Priority support',
        'API access',
        'Custom dashboards',
        '1-year data retention',
        'Advanced reporting',
        'Security monitoring'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 1299,
      originalPrice: 1799,
      period: 'month',
      description: 'For large organizations with complex infrastructure',
      features: [
        'Unlimited servers',
        'Premium AI monitoring',
        'Custom alerting',
        '24/7 dedicated support',
        'Full API access',
        'White-label solution',
        'Unlimited data retention',
        'Custom reporting',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const useCases = [
    {
      title: 'Cloud Infrastructure',
      description: 'Monitor and optimize cloud resources across AWS, Azure, and GCP',
      icon: Cloud,
      examples: ['EC2 instances', 'RDS databases', 'Load balancers', 'Auto-scaling groups']
    },
    {
      title: 'On-Premise Servers',
      description: 'Comprehensive monitoring of physical and virtual servers in your data center',
      icon: Server,
      examples: ['Physical servers', 'Virtual machines', 'Storage systems', 'Network devices']
    },
    {
      title: 'Application Performance',
      description: 'Monitor application performance and user experience across all environments',
      icon: Monitor,
      examples: ['Web applications', 'APIs', 'Microservices', 'Database performance']
    },
    {
      title: 'Security & Compliance',
      description: 'Ensure security compliance and detect threats across your infrastructure',
      icon: Shield,
      examples: ['Security scanning', 'Compliance monitoring', 'Threat detection', 'Audit trails']
    }
  ];

  const testimonials = [
    {
      name: 'James Wilson',
      role: 'CTO',
      company: 'CloudTech Solutions',
      content: 'AI Infrastructure Monitoring Pro has reduced our downtime by 85% and helped us catch issues before they became problems. The AI predictions are incredibly accurate.',
      rating: 5,
      avatar: '/images/testimonials/james-wilson.jpg'
    },
    {
      name: 'Maria Garcia',
      role: 'DevOps Manager',
      company: 'DataFlow Inc.',
      content: 'The automated remediation features have saved us countless hours. The system automatically resolves 90% of common issues without any human intervention.',
      rating: 5,
      avatar: '/images/testimonials/maria-garcia.jpg'
    },
    {
      name: 'Alex Chen',
      role: 'Infrastructure Director',
      company: 'Global Systems',
      content: 'The multi-cloud monitoring capabilities are outstanding. We can now monitor our entire hybrid infrastructure from a single dashboard.',
      rating: 5,
      avatar: '/images/testimonials/alex-chen.jpg'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '85%', label: 'Downtime Reduction', icon: TrendingUp },
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '24/7', label: 'Monitoring Coverage', icon: Clock }
  ];

  const integrations = [
    { name: 'AWS', icon: Cloud, description: 'Full AWS service monitoring' },
    { name: 'Azure', icon: Cloud, description: 'Microsoft Azure integration' },
    { name: 'Google Cloud', icon: Cloud, description: 'GCP monitoring support' },
    { name: 'Docker', icon: Settings, description: 'Container monitoring' },
    { name: 'Kubernetes', icon: Settings, description: 'K8s cluster monitoring' },
    { name: 'Slack', icon: MessageSquare, description: 'Team notifications' },
    { name: 'PagerDuty', icon: Bell, description: 'Incident management' },
    { name: 'ServiceNow', icon: FileText, description: 'IT service management' }
  ];

  const monitoringCapabilities = [
    {
      category: 'Infrastructure',
      icon: Server,
      capabilities: ['CPU monitoring', 'Memory usage', 'Disk I/O', 'Network traffic', 'Temperature sensors']
    },
    {
      category: 'Applications',
      icon: Monitor,
      capabilities: ['Response times', 'Error rates', 'Throughput', 'User sessions', 'API performance']
    },
    {
      category: 'Databases',
      icon: Database,
      capabilities: ['Query performance', 'Connection pools', 'Lock contention', 'Storage usage', 'Backup status']
    },
    {
      category: 'Security',
      icon: Shield,
      capabilities: ['Login attempts', 'File changes', 'Network scans', 'Vulnerability scans', 'Compliance checks']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6">
              <Activity className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">AI Infrastructure Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Infrastructure Monitoring Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Monitor, analyze, and optimize your entire infrastructure with AI-powered insights. 
              Prevent issues before they impact your business with predictive analytics and automated remediation.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">85% Downtime Reduction</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-bold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Advanced Monitoring Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive infrastructure monitoring with AI-powered insights and automated remediation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What We Monitor
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive monitoring across all aspects of your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringCapabilities.map((capability, index) => (
              <div key={index} className="cyber-card-advanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {capability.category}
                </h3>
                
                <ul className="space-y-2">
                  {capability.capabilities.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Use Cases & Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Monitor any type of infrastructure across cloud and on-premise environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card-advanced p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Examples:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified monitoring experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="cyber-card-advanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-xs text-gray-400">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    <div className="text-lg text-gray-500 line-through">${plan.originalPrice}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Trusted by IT Professionals
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Infrastructure Monitoring Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven infrastructure monitoring. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📞 Phone: +1 (302) 464-0950</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInfrastructureMonitoringProPage;