import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Brain, 
  Zap, 
  BarChart3, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Activity,
  Target,
  TrendingUp,
  Clock,
  Users,
  Database,
  Globe
} from 'lucide-react';


export default function AutonomousOrchestratorPage() {
  const features = [
    {
      icon: Brain,
      title: 'Autonomous Process Discovery',
      description: 'AI automatically maps and understands complex business processes without human intervention',
      benefits: ['Zero manual mapping required', 'Continuous process learning', 'Adaptive process optimization']
    },
    {
      icon: Zap,
      title: 'Self-Optimizing Workflow Execution',
      description: 'Intelligent execution engine that continuously optimizes workflow performance in real-time',
      benefits: ['Real-time optimization', 'Adaptive resource allocation', 'Performance monitoring']
    },
    {
      icon: Target,
      title: 'Predictive Process Failure Prevention',
      description: 'Advanced AI predicts and prevents process failures before they occur',
      benefits: ['99.9% uptime guarantee', 'Predictive maintenance', 'Proactive issue resolution']
    },
    {
      icon: Activity,
      title: 'Dynamic Resource Allocation',
      description: 'Intelligent system that automatically allocates and scales resources based on demand',
      benefits: ['Automatic scaling', 'Cost optimization', 'Resource efficiency']
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning & Adaptation',
      description: 'AI system that continuously learns from data and improves process performance',
      benefits: ['Self-improving algorithms', 'Adaptive intelligence', 'Continuous optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description: 'Built-in security and compliance features for enterprise-grade operations',
      benefits: ['SOC 2 compliance', 'Data encryption', 'Audit trails']
    }
  ];

  const capabilities = [
    {
      title: 'Process Automation',
      description: 'Automate complex, multi-step business processes across departments',
      icon: Zap,
      metrics: ['80% faster execution', '95% error reduction', '24/7 operation']
    },
    {
      title: 'Intelligent Decision Making',
      description: 'AI makes autonomous decisions based on business rules and data analysis',
      icon: Brain,
      metrics: ['Real-time decisions', 'Context-aware processing', 'Risk assessment']
    },
    {
      title: 'Resource Optimization',
      description: 'Dynamically allocate and optimize resources for maximum efficiency',
      icon: Target,
      metrics: ['40% cost reduction', 'Optimal resource usage', 'Scalable operations']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes to optimize future process performance',
      icon: BarChart3,
      metrics: ['Predictive insights', 'Trend analysis', 'Performance forecasting']
    }
  ];

  const pricingTiers = [
    {
      name: 'Business Starter',
      price: '$4,999/month',
      description: 'Perfect for mid-size businesses with complex processes',
      features: [
        'Up to 50 automated processes',
        'Basic AI optimization',
        'Standard integrations',
        'Email support',
        'Basic analytics',
        'Single-tenant deployment'
      ],
      popular: false
    },
    {
      name: 'Enterprise Pro',
      price: '$14,999/month',
      description: 'Ideal for large enterprises with complex operations',
      features: [
        'Up to 500 automated processes',
        'Advanced AI optimization',
        'Custom integrations',
        'Priority support',
        'Advanced analytics',
        'Multi-tenant deployment',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise Elite',
      price: '$24,999/month',
      description: 'For large-scale organizations with mission-critical processes',
      features: [
        'Unlimited processes',
        'Full AI optimization suite',
        'Enterprise integrations',
        'Dedicated support',
        'Custom analytics',
        'Multi-cloud deployment',
        'Full API access',
        'Custom AI models',
        '24/7 monitoring'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '80% Faster Process Execution',
      description: 'Automated workflows execute significantly faster than manual processes'
    },
    {
      icon: Shield,
      title: '95% Reduction in Human Errors',
      description: 'AI eliminates human errors in routine and complex tasks'
    },
    {
      icon: TrendingUp,
      title: '300% Average ROI',
      description: 'Significant cost savings and efficiency gains within the first year'
    },
    {
      icon: Users,
      title: '24/7 Autonomous Operation',
      description: 'Continuous operation without human intervention or breaks'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-lg font-semibold text-blue-100">Next-Generation AI</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Autonomous Business Process Orchestrator
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Revolutionary AI system that autonomously manages, optimizes, and executes entire business processes 
            with unprecedented intelligence and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our autonomous AI system delivers unprecedented improvements in efficiency, accuracy, and cost savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced artificial intelligence capabilities that enable truly autonomous business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <capability.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{capability.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="space-y-2">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-purple-700">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge features that enable truly autonomous business process management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge AI and cloud technologies for maximum performance and scalability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI/ML Engine</h3>
              <p className="text-gray-600">Advanced machine learning algorithms for autonomous decision making</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600">Scalable cloud platform for enterprise-grade performance</p>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl border border-green-200">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-gray-600">Enterprise-grade security with full compliance certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for autonomous AI solutions. Custom enterprise solutions available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${tier.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution for your enterprise? Contact us for tailored pricing.</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700"
            >
              <span>Call {contactInfo.phone}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your autonomous AI system operational in 6-10 weeks with our proven implementation methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Analysis</h3>
              <p className="text-gray-600">Comprehensive analysis of your current processes and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Model Training</h3>
              <p className="text-gray-600">Train AI models on your specific business processes and data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">System Integration</h3>
              <p className="text-gray-600">Integrate with your existing systems and infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Optimize</h3>
              <p className="text-gray-600">Deploy and continuously optimize the autonomous system</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Autonomous Business Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your business with the power of autonomous AI process orchestration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 {contactInfo.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}