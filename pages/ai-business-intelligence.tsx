import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { 
  Brain, BarChart3, TrendingUp, Users, Target, Zap,
  Shield, Database, Globe, ArrowRight, CheckCircle, Star
} from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation'
import EnhancedFooter from '../components/EnhancedFooter'
export default function AIBusinessIntelligencePage() {
  const features = [
    {
      icon: Brain,
      title: &quot;Predictive Analytics&quot;,
      description: &quot;Forecast future trends and customer behavior with 95% accuracy using advanced machine learning algorithms.&quot;,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      icon: BarChart3,
      title: &quot;Real-time Dashboards&quot;,
      description: &quot;Monitor key performance indicators in real-time with customizable, interactive dashboards.&quot;,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      icon: TrendingUp,
      title: &quot;Performance Optimization&quot;,
      description: &quot;Automatically identify bottlenecks and optimize business processes for maximum efficiency.&quot;,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      icon: Users,
      title: &quot;Customer Insights&quot;,
      description: &quot;Deep understanding of customer behavior, preferences, and lifetime value through AI analysis.&quot;,
      color: &quot;from-orange-500 to-red-500&quot;
    },
    {
      icon: Target,
      title: &quot;Strategic Planning&quot;,
      description: &quot;Data-driven decision making with scenario modeling and risk assessment capabilities.&quot;,
      color: &quot;from-indigo-500 to-purple-500&quot;
    },
    {
      icon: Zap,
      title: &quot;Automated Reporting&quot;,
      description: &quot;Generate comprehensive reports automatically, saving hours of manual work each week.&quot;,
      color: &quot;from-yellow-500 to-orange-500&quot;
    }
  ],

  const benefits = [
    "Increase revenue by 25-40% through data-driven insights",
    "Reduce operational costs by 15-30% with process optimization",
    "Improve customer retention by 20-35% with predictive analytics",
    "Accelerate decision-making by 60% with real-time data",
    "Reduce manual reporting time by 80% with automation",
    "Achieve 99.9% data accuracy with AI-powered validation"
  ],
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  const useCases = [
    {
      industry: &quot;Retail & E-commerce&quot;,
      description: &quot;Customer segmentation, inventory optimization, and demand forecasting&quot;,
      results: &quot;35% increase in conversion rates, 25% reduction in inventory costs&quot;
    },
    {
      industry: &quot;Financial Services&quot;,
      description: &quot;Risk assessment, fraud detection, and portfolio optimization&quot;,
      results: &quot;40% improvement in risk prediction, 60% faster fraud detection&quot;
    },
    {
      industry: &quot;Healthcare&quot;,
      description: &quot;Patient outcome prediction, resource allocation, and treatment optimization&quot;,
      results: &quot;30% improvement in patient outcomes, 20% reduction in operational costs&quot;
    },
    {
      industry: &quot;Manufacturing&quot;,
      description: &quot;Predictive maintenance, quality control, and supply chain optimization&quot;,
      results: &quot;45% reduction in downtime, 35% improvement in product quality&quot;
    }
  ],

  const pricing = [
    {
      plan: &quot;Starter&quot;,
      price: &quot;$499&quot;,
      period: &quot;/month&quot;,
      description: &quot;Perfect for small businesses getting started with AI&quot;,
      features: [
        &quot;Basic predictive analytics&quot;,
        &quot;5 customizable dashboards&quot;,
        &quot;Standard reporting&quot;,
        &quot;Email support&quot;,
        &quot;Up to 10 users&quot;
      ],
      popular: false
    },
    {
      plan: &quot;Professional&quot;,
      price: &quot;$1,299&quot;,
      period: &quot;/month&quot;,
      description: &quot;Advanced features for growing businesses&quot;,
      features: [
        &quot;Advanced predictive analytics&quot;,
        &quot;Unlimited dashboards&quot;,
        &quot;Custom reporting&quot;,
        &quot;Priority support&quot;,
        &quot;Up to 50 users&quot;,
        &quot;API access&quot;,
        &quot;Custom integrations&quot;
      ],
      popular: true
    },
    {
      plan: &quot;Enterprise&quot;,
      price: &quot;Custom&quot;,
      period: "&quot;,
      description: &quot;Full-scale solution for large organizations&quot;,
      features: [
        &quot;Everything in Professional&quot;,
        &quot;Custom AI models&quot;,
        &quot;Dedicated support team&quot;,
        &quot;Unlimited users&quot;,
        &quot;On-premise deployment&quot;,
        &quot;Custom training&quot;,
        &quot;SLA guarantees&quot;
      ],
      popular: false
    }
  ],

  return (_<>
      <Head>
        <title>AI Business Intelligence - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Transform your business with AI-powered business intelligence. Get predictive analytics, real-time dashboards, and data-driven insights to drive growth and efficiency.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI business intelligence, predictive analytics, business analytics, data insights, machine learning, business intelligence platform&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Business Intelligence - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Transform your business with AI-powered business intelligence. Get predictive analytics, real-time dashboards, and data-driven insights.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ai-business-intelligence" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                {&quot; "}Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform raw data into actionable insights with our advanced AI platform. 
              Make data-driven decisions, _predict future trends, _and optimize every aspect of your business 
              with machine learning-powered analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <a
                href="#demo"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Powerful Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to transform your business data into strategic insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_features.map((feature, _index) => (
              <motion.div
                key={feature.title}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={_`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{_feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{_feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={_{ opacity: 0, _x: -20}}
              whileInView={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.6}}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose AI Business Intelligence?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our AI-powered platform delivers measurable results that directly impact your bottom line. 
                From increased revenue to reduced costs, see the difference data-driven decisions can make.
              </p>
              <div className="space-y-4">
                {_benefits.map(_(benefit, _index) => (
                  <motion.div
                    key={benefit}
                    initial={_{ opacity: 0, _x: -20}}
                    whileInView={_{ opacity: 1, _x: 0}}
                    transition={_{ duration: 0.6, _delay: index * 0.1}}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{_benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _x: 20}}
              whileInView={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.6, _delay: 0.2}}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Metrics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-slate-600">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-slate-600">Average Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
                  <div className="text-slate-600">Time Saved on Reporting</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {_/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Industry Applications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how businesses across different industries are leveraging AI to transform their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_useCases.map(_(useCase, _index) => (
              <motion.div
                key={useCase.industry}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{_useCase.industry}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{_useCase.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">Results: {_useCase.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricing.map(_(plan, _index) => (
              <motion.div
                key={plan.plan}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className={_`relative bg-white rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}
              >
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{_plan.plan}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {_plan.price}
                    <span className="text-lg text-slate-600">{_plan.period}</span>
                  </div>
                  <p className="text-slate-600">{_plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{_feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using AI to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  )
}