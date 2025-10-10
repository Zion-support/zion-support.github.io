import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Activity, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  DollarSign,
  Calendar,
  BarChart3,
  Users,
  Globe,
  Lock,
  Download,
  Upload,
  Bell,
  Settings,
  CreditCard,
  Smartphone,
  Shield,
  PieChart,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Edit,
  Trash2,
  Copy,
  Eye,
  Plus,
  Minus,
  Calculator,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Database,
  Cpu,
  MessageSquare,
  UserPlus,
  TrendingDown,
  Award,
  Briefcase,
  Building,
  FileText,
  Link,
  Share2,
  RefreshCw,
  Server,
  HardDrive,
  Wifi,
  AlertTriangle,
  Target,
  Monitor,
  Cloud,
  Network
} from 'lucide-react';

export default function AIInfrastructureMonitoringPage() {
  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Anomaly Detection',
      description: 'Machine learning algorithms detect infrastructure issues before they impact users with 99.5% accuracy',
      benefit: 'Prevent 95% of outages and reduce downtime by 80%'
    },
    {
      icon: Activity,
      title: 'Real-time Performance Monitoring',
      description: 'Comprehensive monitoring of servers, networks, applications, and cloud resources',
      benefit: 'Get instant alerts and detailed performance insights'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI predicts capacity needs, performance bottlenecks, and potential failures',
      benefit: 'Plan infrastructure upgrades and prevent issues proactively'
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Advanced threat detection and security event correlation across your entire infrastructure',
      benefit: 'Detect and respond to security threats 10x faster'
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Support',
      description: 'Monitor AWS, Azure, GCP, and on-premises infrastructure from a single dashboard',
      benefit: 'Unified visibility across all your infrastructure'
    },
    {
      icon: Bell,
      title: 'Intelligent Alerting',
      description: 'Smart alerts that reduce noise and focus on critical issues that need attention',
      benefit: 'Reduce alert fatigue by 90% and improve response times'
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 servers',
        'Basic AI monitoring',
        'Email alerts',
        'Standard dashboards',
        'Email support',
        '2 user accounts',
        '7-day data retention'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 500 servers',
        'Advanced AI monitoring',
        'Multi-channel alerts',
        'Custom dashboards',
        'API access',
        'Priority support',
        '10 user accounts',
        '30-day data retention',
        'Advanced analytics'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited servers',
        'Custom AI models',
        'White-label solution',
        'Advanced automation',
        'Custom integrations',
        'Dedicated support',
        'Unlimited users',
        '1-year data retention',
        'Custom reporting',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      role: 'CTO, TechStart Inc.',
      content: 'AI Infrastructure Monitoring prevented 3 major outages in the last month alone. The predictive analytics are incredibly accurate and saved us thousands in downtime costs.',
      rating: 5,
      company: 'TechStart Inc.'
    },
    {
      name: 'Sarah Chen',
      role: 'DevOps Manager, Enterprise Corp',
      content: 'The intelligent alerting reduced our alert noise by 95%. Now we only get notified about issues that actually matter, and our response times improved dramatically.',
      rating: 5,
      company: 'Enterprise Corp'
    },
    {
      name: 'David Rodriguez',
      role: 'IT Director, Global Services',
      content: 'The multi-cloud monitoring capabilities are game-changing. We can now monitor our entire hybrid infrastructure from one place, saving us hours every day.',
      rating: 5,
      company: 'Global Services'
    }
  ];

  const integrations = [
    { name: 'AWS', logo: 'AWS' },
    { name: 'Azure', logo: 'AZ' },
    { name: 'Google Cloud', logo: 'GC' },
    { name: 'Docker', logo: 'D' },
    { name: 'Kubernetes', logo: 'K8' },
    { name: 'Prometheus', logo: 'P' },
    { name: 'Grafana', logo: 'G' },
    { name: 'Slack', logo: 'S' }
  ];

  const monitoringTypes = [
    {
      title: 'Server Monitoring',
      description: 'CPU, memory, disk, and network performance tracking',
      icon: Server,
      metrics: ['CPU Usage', 'Memory Usage', 'Disk I/O', 'Network Traffic']
    },
    {
      title: 'Application Monitoring',
      description: 'APM and application performance insights',
      icon: Monitor,
      metrics: ['Response Time', 'Throughput', 'Error Rate', 'User Experience']
    },
    {
      title: 'Network Monitoring',
      description: 'Network infrastructure and connectivity monitoring',
      icon: Network,
      metrics: ['Bandwidth', 'Latency', 'Packet Loss', 'Availability']
    },
    {
      title: 'Cloud Monitoring',
      description: 'Multi-cloud resource and cost monitoring',
      icon: Cloud,
      metrics: ['Resource Usage', 'Cost Analysis', 'Performance', 'Security']
    }
  ];

  const benefits = [
    {
      metric: '99.5%',
      label: 'Detection Accuracy',
      description: 'AI-powered anomaly detection'
    },
    {
      metric: '80%',
      label: 'Reduced Downtime',
      description: 'Proactive issue prevention'
    },
    {
      metric: '90%',
      label: 'Less Alert Noise',
      description: 'Intelligent alerting system'
    },
    {
      metric: '10x',
      label: 'Faster Response',
      description: 'Automated incident response'
    }
  ];

  const monitoringCapabilities = [
    {
      title: 'Real-time Monitoring',
      description: 'Monitor your infrastructure 24/7 with real-time data collection',
      icon: Activity,
      time: 'Real-time vs hourly checks'
    },
    {
      title: 'Predictive Analytics',
      description: 'AI predicts issues before they impact your users',
      icon: TrendingUp,
      time: 'Proactive vs reactive'
    },
    {
      title: 'Automated Remediation',
      description: 'Automatically fix common issues without human intervention',
      icon: Zap,
      time: 'Instant vs manual fixes'
    },
    {
      title: 'Cost Optimization',
      description: 'AI optimizes cloud costs and resource utilization',
      icon: DollarSign,
      time: '30% cost savings average'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Infrastructure Monitoring - Smart IT Operations & Performance Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered infrastructure monitoring with predictive analytics, anomaly detection, and automated remediation. Start your free trial today!" />
        <meta name="keywords" content="AI infrastructure monitoring, IT operations, performance monitoring, anomaly detection, cloud monitoring, DevOps" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-infrastructure-monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="absolute inset-0 cyber-grid-ultra"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-ultra neon-pulse">
              AI Infrastructure Monitoring
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI-powered infrastructure monitoring that predicts issues, prevents outages, 
              and optimizes performance across your entire IT environment with intelligent automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">99.5% Detection Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">80% Less Downtime</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="neon-button-ultra hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-slate-900 transition-colors inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Infrastructure Results
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI Infrastructure Monitoring delivers
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{benefit.metric}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{benefit.label}</div>
                <div className="text-gray-300 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Intelligent Monitoring Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powered by advanced AI to transform your infrastructure operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-ultra p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <p className="text-cyan-400 text-sm font-medium">{feature.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Monitoring Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how AI Infrastructure Monitoring transforms IT operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringCapabilities.map((capability, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">{capability.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Types Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Monitoring Coverage
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Monitor every aspect of your infrastructure with AI-powered insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringTypes.map((type, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="space-y-2">
                  {type.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your infrastructure needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`futuristic-card-ultra p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? 'neon-button-ultra'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by 3,000+ IT Teams
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what IT professionals say about AI Infrastructure Monitoring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card-ultra p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite cloud platforms and monitoring tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{integration.logo}</span>
                </div>
                <div className="text-white font-medium">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure Monitoring?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of IT teams already preventing outages and optimizing performance with AI-powered infrastructure monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Activity className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300">
            <p className="mb-4">
              <strong>Contact us:</strong> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a> | 
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-2">kleber@ziontechgroup.com</a>
            </p>
            <p className="text-sm">
              364 E Main St STE 1008, Middletown, DE 19709 | <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}