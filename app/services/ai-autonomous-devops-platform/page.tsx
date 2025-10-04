import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Settings, 
  Zap, 
  Shield, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Globe,
  Lock,
  Database,
  Smartphone,
  Mail,
  Calendar,
  CreditCard,
  Headphones,
  Code,
  Layers,
  Wifi,
  Camera,
  Mic,
  MapPin,
  ShoppingCart,
  Package,
  Truck,
  Building,
  Home,
  Car,
  Plane,
  Ship,
  Activity,
  PieChart,
  LineChart,
  RefreshCw,
  Download,
  Upload,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon,
  Monitor,
  Server,
  HardDrive,
  Cpu,
  MemoryStick,
  Router,
  Terminal,
  GitBranch,
  Container,
  Docker,
  Key,
  AlertTriangle,
  Users,
  MessageSquare,
  TrendingUp,
  Eye,
  Target,
  Brain
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Autonomous DevOps Platform | Zion Tech Group - Self-Healing Infrastructure',
  description: 'Revolutionary AI-powered DevOps platform with autonomous incident response, predictive scaling, and self-healing infrastructure. Reduce downtime by 95%.',
  keywords: 'autonomous DevOps, AI DevOps, self-healing infrastructure, predictive scaling, incident response, infrastructure automation, DevOps AI',
};

export default function AIAutonomousDevOpsPlatformPage() {
  const autonomousFeatures = [
    {
      title: 'Autonomous Incident Response',
      description: 'AI automatically detects, diagnoses, and resolves infrastructure issues without human intervention',
      icon: Bot,
      benefits: [
        '95% reduction in mean time to resolution (MTTR)',
        '24/7 autonomous monitoring and response',
        'Intelligent root cause analysis',
        'Automated rollback and recovery procedures'
      ]
    },
    {
      title: 'Predictive Scaling',
      description: 'Machine learning algorithms predict traffic patterns and automatically scale resources',
      icon: TrendingUp,
      benefits: [
        'Proactive resource scaling before bottlenecks occur',
        'Cost optimization through intelligent scaling',
        'Performance optimization based on historical patterns',
        'Real-time capacity planning'
      ]
    },
    {
      title: 'Self-Healing Infrastructure',
      description: 'Automatically repair and optimize infrastructure components using AI-driven decisions',
      icon: Shield,
      benefits: [
        'Automatic service recovery and failover',
        'Infrastructure health monitoring and optimization',
        'Predictive maintenance and component replacement',
        'Zero-downtime deployments and updates'
      ]
    },
    {
      title: 'Intelligent Code Deployment',
      description: 'AI-powered deployment pipeline with automated testing, validation, and rollback',
      icon: Code,
      benefits: [
        'Automated code quality assessment',
        'Intelligent deployment strategies',
        'Real-time performance impact analysis',
        'Automated rollback on performance degradation'
      ]
    }
  ];

  const platformCapabilities = [
    {
      title: 'Multi-Cloud Orchestration',
      description: 'Seamlessly manage and optimize across AWS, Azure, GCP, and on-premises infrastructure',
      icon: Cloud,
      features: [
        'Unified cloud resource management',
        'Cross-cloud disaster recovery',
        'Cost optimization across providers',
        'Automated cloud migration'
      ]
    },
    {
      title: 'Container Intelligence',
      description: 'Advanced container orchestration with AI-driven optimization and security',
      icon: Container,
      features: [
        'Intelligent container placement',
        'Automated resource allocation',
        'Security vulnerability scanning',
        'Performance optimization'
      ]
    },
    {
      title: 'Security Automation',
      description: 'AI-powered security monitoring, threat detection, and automated response',
      icon: Lock,
      features: [
        'Real-time threat detection',
        'Automated security patching',
        'Compliance monitoring and reporting',
        'Zero-trust architecture enforcement'
      ]
    },
    {
      title: 'Performance Analytics',
      description: 'Advanced analytics and insights for infrastructure optimization and cost management',
      icon: BarChart3,
      features: [
        'Real-time performance monitoring',
        'Cost optimization recommendations',
        'Capacity planning insights',
        'Predictive analytics dashboard'
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 servers/applications',
        'Basic autonomous monitoring',
        'Standard incident response',
        'Email support',
        'Basic analytics dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 servers/applications',
        'Advanced autonomous features',
        'Predictive scaling',
        'Priority support',
        'Advanced analytics',
        'Multi-cloud support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers/applications',
        'Full autonomous DevOps suite',
        'Custom AI model training',
        '24/7 dedicated support',
        'Advanced security features',
        'White-label options',
        'On-premise deployment',
        'Compliance and audit tools'
      ],
      popular: false
    }
  ];

  const successMetrics = [
    {
      metric: '95%',
      description: 'Reduction in Mean Time to Resolution',
      icon: Clock,
      color: 'text-green-600'
    },
    {
      metric: '80%',
      description: 'Reduction in Infrastructure Costs',
      icon: DollarSign,
      color: 'text-blue-600'
    },
    {
      metric: '99.9%',
      description: 'Uptime Achievement',
      icon: Shield,
      color: 'text-purple-600'
    },
    {
      metric: '90%',
      description: 'Reduction in Manual Operations',
      icon: Bot,
      color: 'text-indigo-600'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Platform',
      description: 'Autonomous scaling during peak shopping seasons',
      icon: ShoppingCart,
      results: '99.9% uptime during Black Friday traffic spikes'
    },
    {
      title: 'Financial Services',
      description: 'Self-healing infrastructure for critical trading systems',
      icon: CreditCard,
      results: 'Zero downtime during market volatility'
    },
    {
      title: 'Healthcare Systems',
      description: 'Autonomous incident response for patient management systems',
      icon: Package,
      results: '95% faster incident resolution'
    },
    {
      title: 'SaaS Applications',
      description: 'Predictive scaling for subscription-based services',
      icon: Monitor,
      results: '60% reduction in infrastructure costs'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Autonomous DevOps Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary self-healing infrastructure with autonomous incident response, 
              predictive scaling, and AI-driven optimization. Reduce downtime by 95%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link to="#demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <metric.icon className={`w-12 h-12 ${metric.color}`} />
                </div>
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                  {metric.metric}
                </div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous DevOps Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-powered automation that handles complex DevOps operations without human intervention
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {autonomousFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end DevOps automation with enterprise-grade security and scalability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformCapabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <capability.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous DevOps Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your infrastructure needs and scale autonomously
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 relative ${tier.popular ? 'ring-2 ring-blue-600 shadow-lg' : 'shadow-md'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how companies are achieving unprecedented reliability with autonomous DevOps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <useCase.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Achieved Results:</p>
                  <p className="text-lg font-semibold text-green-600">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Achieve Autonomous DevOps?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading companies in achieving 99.9% uptime with AI-powered autonomous infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
            </Link>
            <Link to="tel:+13024640950" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}