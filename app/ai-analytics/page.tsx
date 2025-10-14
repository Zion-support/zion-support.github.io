import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  CheckCircle, 
  TrendingUp,
  Database
} from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function AiAnalytics() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: 'Advanced AI Analytics',
      description: 'Leverage machine learning algorithms to uncover hidden patterns and insights in your data'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Real-time Dashboards',
      description: 'Monitor key metrics and KPIs with interactive, real-time analytics dashboards'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with advanced predictive modeling'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources seamlessly'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 data sources',
        'Basic analytics dashboard',
        'Email support',
        'Standard reports',
        '5GB data storage'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 data sources',
        'Advanced AI analytics',
        'Priority support',
        'Custom dashboards',
        '50GB data storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited storage',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and advanced reporting." />
        <meta name="keywords" content="AI analytics, data analytics, business intelligence, predictive analytics, data visualization" />
      </Helmet>

      <ResponsiveContainer>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI Analytics Platform
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform your data into actionable insights with our advanced AI-powered analytics platform. 
                  Uncover patterns, predict trends, and make data-driven decisions with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton variant="primary" size="lg">
                    Start Free Trial
                  </FuturisticButton>
                  <FuturisticButton variant="secondary" size="lg">
                    View Demo
                  </FuturisticButton>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Powerful Analytics Features
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Leverage cutting-edge AI technology to extract maximum value from your data.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Choose Your Plan
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Select the perfect plan for your analytics needs and scale as you grow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard 
                    key={index} 
                    className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <FuturisticButton 
                      variant={plan.popular ? "primary" : "secondary"} 
                      size="lg" 
                      className="w-full"
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Data?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of businesses already using our AI analytics platform to make better decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </ResponsiveContainer>
    </>
  );
}
