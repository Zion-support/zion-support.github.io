<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Sparkles,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const microSaasServices = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Video Generator",
    path: "/zion-ai-video-generator",
    description: "Create professional videos with AI-powered automation",
    features: ["Auto-generated content", "Multiple templates", "HD quality output"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "AI Invoice Generator",
    path: "/zion-ai-invoice-generator",
    description: "Generate professional invoices automatically",
    features: ["Smart templates", "Auto-calculation", "PDF export"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "AI Customer Insights",
    path: "/zion-ai-customer-insights",
    description: "Analyze customer behavior with AI-powered insights",
    features: ["Behavioral analysis", "Predictive modeling", "Real-time insights"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "AI Email Analyzer",
    path: "/zion-ai-email-analyzer",
    description: "Smart email analysis and optimization",
    features: ["Sentiment analysis", "Spam detection", "Performance metrics"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Marketing Automation",
    path: "/zion-ai-marketing-automation-pro",
    description: "Automate your marketing campaigns with AI",
    features: ["Email automation", "Social media management", "Analytics"]
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "AI Business Intelligence",
    path: "/zion-ai-business-intelligence-pro",
    description: "Transform data into actionable business insights",
    features: ["Data visualization", "Predictive analytics", "Custom dashboards"]
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "month",
    features: [
      "Basic AI features",
      "Email support",
      "5GB storage",
      "Standard templates"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    period: "month",
    features: [
      "Advanced AI features",
      "Priority support",
      "50GB storage",
      "Custom templates",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "month",
    features: [
      "All AI features",
      "24/7 support",
      "Unlimited storage",
      "White-label options",
      "Custom integrations"
    ],
    popular: false
  }
];

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Deploy and scale your micro SAAS solutions in minutes, not months."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics & Insights",
    description: "Comprehensive analytics to track performance and optimize results."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and workflows."
  }
];

export default function MicroSaas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SAAS solutions designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro saas, ai tools, business automation, productivity, zion tech group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful AI-driven micro SAAS tools designed to automate and optimize your business processes. 
            Choose from our comprehensive suite of solutions tailored for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered micro SAAS tools are designed to integrate seamlessly into your existing workflow, 
              providing immediate value and long-term growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-lg border border-purple-500/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered micro SAAS tools designed to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-200">
                <div className="text-purple-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include access to our full suite of micro SAAS tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 border ${
                plan.popular 
                  ? 'border-purple-400/60 ring-2 ring-purple-400/20' 
                  : 'border-purple-500/20'
              } relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to streamline their operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
