import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Settings,
  AlertTriangle,
  Target,
  Users,
  Database,
  Server,
  Monitor,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Activity,
  CreditCard,
  Lock,
  Eye,
  Bell,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon,
  Layers,
  Wifi,
  Building,
  Home,
  Car,
  Plane,
  Ship
} from 'lucide-react';


export default function CloudCostGuardPage() {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Real-Time Cost Anomaly Detection',
      description: 'AI-powered monitoring that detects unusual spending patterns and alerts you immediately when costs spike beyond normal thresholds.',
      benefits: [
        'Instant alerts for cost anomalies',
        'Machine learning-based threshold detection',
        'Historical pattern analysis',
        'Customizable alert rules'
      ]
    },
    {
      icon: Target,
      title: 'Automated Rightsizing Recommendations',
      description: 'Intelligent analysis of your cloud resources to recommend optimal sizing, eliminating over-provisioning and waste.',
      benefits: [
        'EC2, RDS, and storage optimization',
        'Performance vs cost analysis',
        'Automated scaling recommendations',
        'Resource utilization insights'
      ]
    },
    {
      icon: Shield,
      title: 'Budget Guardrails & Auto-Scaling',
      description: 'Set spending limits with automatic scaling policies that prevent budget overruns while maintaining service availability.',
      benefits: [
        'Budget-based auto-scaling',
        'Spending limit enforcement',
        'Service availability protection',
        'Multi-tier budget controls'
      ]
    },
    {
      icon: BarChart3,
      title: 'Executive Savings Reports',
      description: 'Comprehensive reporting with cost breakdowns, savings achieved, and ROI metrics for executive decision-making.',
      benefits: [
        'Executive dashboard views',
        'Cost allocation reporting',
        'Savings tracking and ROI',
        'Forecasting and budgeting'
      ]
    },
    {
      icon: Zap,
      title: 'Multi-Cloud Cost Optimization',
      description: 'Unified cost management across AWS, Azure, and GCP with cross-cloud optimization recommendations.',
      benefits: [
        'Single pane of glass for all clouds',
        'Cross-cloud cost comparison',
        'Unified billing and reporting',
        'Cloud provider optimization'
      ]
    },
    {
      icon: Settings,
      title: 'Custom Cost Allocation',
      description: 'Advanced cost allocation and chargeback capabilities for internal billing and departmental cost tracking.',
      benefits: [
        'Departmental cost tracking',
        'Project-based allocation',
        'Chargeback automation',
        'Custom tagging strategies'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to $50K monthly cloud spend',
        'AWS cost monitoring',
        'Basic anomaly detection',
        'Email alerts',
        'Monthly reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to $200K monthly cloud spend',
        'AWS, Azure, GCP support',
        'Advanced anomaly detection',
        'Real-time alerts',
        'Automated rightsizing',
        'Weekly reports',
        'Phone & email support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited cloud spend',
        'All cloud providers',
        'AI-powered optimization',
        'Custom integrations',
        'Advanced reporting',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom SLA'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Startup Cost Control',
      description: 'Keep cloud costs predictable as you scale, with automatic alerts when spending exceeds budget.',
      savings: '40% cost reduction',
      timeframe: 'Immediate'
    },
    {
      title: 'Enterprise Optimization',
      description: 'Optimize multi-million dollar cloud spend across multiple teams and projects.',
      savings: '$2M+ annual savings',
      timeframe: '3 months'
    },
    {
      title: 'DevOps Cost Accountability',
      description: 'Track and allocate cloud costs by team, project, and environment for better accountability.',
      savings: '30% waste elimination',
      timeframe: '1 month'
    },
    {
      title: 'Compliance & Auditing',
      description: 'Maintain detailed cost records and compliance with automated reporting and audit trails.',
      savings: '80% audit time reduction',
      timeframe: 'Immediate'
    }
  ];

  const integrations = [
    { name: 'AWS', logo: '🟠', description: 'Complete AWS cost optimization' },
    { name: 'Azure', logo: '🔵', description: 'Microsoft Azure cost management' },
    { name: 'Google Cloud', logo: '🟢', description: 'GCP cost monitoring and optimization' },
    { name: 'Slack', logo: '💬', description: 'Real-time cost alerts in Slack' },
    { name: 'Teams', logo: '👥', description: 'Microsoft Teams integration' },
    { name: 'PagerDuty', logo: '📟', description: 'Incident management integration' },
    { name: 'DataDog', logo: '📊', description: 'Monitoring platform integration' },
    { name: 'New Relic', logo: '📈', description: 'Performance monitoring integration' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-3 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Cloud className="w-4 h-4" />
                FinOps Automation Platform
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cloud Cost Guard
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Save 30-40% on Cloud Costs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automated cloud cost anomaly detection, budget alerts, rightsizing, and savings recommendations across AWS, Azure, and GCP. Stop surprise bills and optimize your cloud spend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}?subject=Cloud Cost Guard Demo Request`}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Demo
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">30-40%</div>
                <div className="text-sm text-gray-600">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$50K+</div>
                <div className="text-sm text-gray-600">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1-2</div>
                <div className="text-sm text-gray-600">Weeks to Deploy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Powerful Features for Complete Cost Control
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`mailto:${contactInfo.email}?subject=Cloud Cost Guard - ${plan.name} Plan Inquiry`}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Real Results for Real Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Savings</div>
                    <div className="text-lg font-bold text-green-600">{useCase.savings}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Timeframe</div>
                    <div className="text-lg font-bold text-blue-600">{useCase.timeframe}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{integration.logo}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{integration.name}</div>
                <div className="text-xs text-gray-600">{integration.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Slash Your Cloud Costs?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies saving thousands on cloud costs. Get your free cost analysis and see how much you can save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}?subject=Cloud Cost Guard - Free Analysis Request`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Analysis
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-lg font-semibold mb-2">📍 Address:</p>
            <p>{contactInfo.address}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can I see results?</h3>
              <p className="text-gray-600">
                Most customers see immediate cost savings within the first billing cycle. Our automated rightsizing recommendations can reduce costs by 20-30% in the first month, with additional savings as you implement our optimization suggestions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you support all cloud providers?</h3>
              <p className="text-gray-600">
                Yes! Cloud Cost Guard supports AWS, Azure, and Google Cloud Platform. Our Professional and Enterprise plans include multi-cloud optimization and cost comparison across all providers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if I exceed my budget?</h3>
              <p className="text-gray-600">
                Our budget guardrails can automatically scale down resources or pause services when you approach your spending limits. You'll receive real-time alerts and can configure custom actions to prevent budget overruns.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does the anomaly detection work?</h3>
              <p className="text-gray-600">
                Our AI analyzes your historical spending patterns and resource usage to establish baseline costs. When spending deviates significantly from normal patterns, you'll receive instant alerts with detailed analysis of what's causing the spike.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}