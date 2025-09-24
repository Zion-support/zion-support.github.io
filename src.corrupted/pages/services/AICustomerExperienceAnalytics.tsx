import React from "react"
import { motion } from "framer-motion"
import { ;
  Brain,;
  Users, ;
  BarChart3, ;
  Heart, ;
  MessageCircle, ;
  TrendingUp, ;
  Eye, ;
  Target, ;
  Zap,;
  CheckCircle,;
  Star,;
  ArrowRight,;
  Play,;
  Settings,;
  Brain,;
  Globe,;
  Lock,;
  Shield,;
  Activity,;
  PieChart,;
  LineChart;
} from "lucide-react"
const AICustomerExperienceAnalytics: React.FC = () => {
  const features = [;
    {;
      icon: Brain,title: 'AI-Powered Sentiment Analysis',description: 'Advanced natural language processing to understand customer emotions and feedback in real-time.',price: '$299/month'
    };
    {;
      icon: Eye,title: 'Customer Journey Mapping',description: 'Visualize and track customer interactions across all touchpoints with predictive analytics.',price: '$199/month'
    };
    {;
      icon: Target,title: 'Churn Prediction & Prevention',description: 'Machine learning algorithms to identify at-risk customers and recommend retention strategies.',price: '$249/month'
    };
    {;
      icon: BarChart3,title: 'ROI Optimization Insights',description: 'Data-driven recommendations to maximize customer lifetime value and marketing effectiveness.',price: '$179/month'
    };
  ];
  const pricingPlans = [;
    {;
      name: 'Starter',price: '$99',period: '/month',description: 'Perfect for small businesses starting their customer analytics journey',features: [;
        'Up to 10,000 customer interactionsBasic sentiment analysis',;
        'Standard reportingEmail support',;
        'Basic journey mapping'
      ],;
      cta: 'Get Started',popular: false;
    };
    {;
      name: 'Professional',price: '$299',period: '/month',description: 'Ideal for growing companies with comprehensive customer experience needs',features: [;
        'Up to 100,000 customer interactionsAdvanced AI analytics',;
        'Full journey mappingPriority support',;
        'Churn predictionCustom dashboards'
      ],;
      cta: 'Start Free Trial',popular: true;
    };
    {;
      name: 'Enterprise',price: '$799',period: '/month',description: 'For large organizations requiring enterprise-grade customer analytics',features: [;
        'Unlimited customer interactionsCustom AI models'
        'White-label solution24/7 dedicated support',;
        'Advanced security featuresSLA guarantees'
      ],;
      cta: 'Contact Sales',popular: false;
    };
  ];
  const benefits = [;
    'Increase customer satisfaction by 40%Reduce churn rate by 35%',;
    'Improve customer lifetime value by 50%Boost conversion rates by 25%',;
    'Reduce support costs by 30%'
  ],;

  const analyticsCapabilities = [;
    'Real-time customer sentiment trackingMulti-channel interaction analysis',;
    'Predictive customer behavior modelingAutomated customer feedback processing',;
    'Advanced segmentation and targetingCompetitive benchmarking insights'
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white">;
      {/* Animated Background */};
      <div className="fixed inset-0 -z-10">;
        <[^>]*/>
        <[^>]*/>
      </[^>]*>

      <div className="relative z-10">;
        {/* Header Section */};
        <motion.header ;
          className="[^"]*"
          initial={{ opacity: 0, y: -50 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
        >;
          <div className="max-w-4xl mx-auto px-6">;
            <motion.div ;
              className="[^"]*"
              initial={{ scale: 0.8, opacity: 0 }};
              animate={{ scale: 1, opacity: 1 }};
              transition={{ delay: 0.2, duration: 0.5 }};
            >;
              <[^>]*/>
              AI-Powered Customer Analytics;
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">;
              AI Customer Experience Analytics;
            </[^>]*>
            ;
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">;
              Transform customer insights into actionable intelligence with AI-powered analytics that predict behavior, optimize experiences, and drive growth.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <motion.button ;
                className="[^"]*"
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
              >;
                <[^>]*/>
                Start Free Trial;
              </[^>]*>
              <motion.button ;
                className="[^"]*"
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
              >;
                <[^>]*/>
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Features Grid */};
        <motion.section ;
          className="[^"]*"
          initial={{ opacity: 0, y: 50 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          viewport={{ once: true }};
        >;
          <div className="max-w-7xl mx-auto">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">;
                Advanced Analytics Features;
              </[^>]*>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our AI-powered platform provides comprehensive customer experience analytics designed to drive business growth.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {features.map((feature, index) => (;
                <motion.div
                  key={feature.title};
                  className="[^"]*"
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ delay: index * 0.1, duration: 0.6 }};
                  viewport={{ once: true }};
                  whileHover={{ y: -5, scale: 1.02 }};
                >;
                  <[^>]*/>
                  ;
                  <div className="relative z-10">;
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">;
                      <[^>]*/>
                    </[^>]*>
                    ;
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-300 transition-colors">;
                      {feature.title};
                    </[^>]*>
                    ;
                    <p className="text-gray-400 mb-4 leading-relaxed">;
                      {feature.description};
                    </[^>]*>
                    ;
                    <div className="text-2xl font-bold text-emerald-400">;
                      {feature.price};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Analytics Capabilities */};
        <motion.section ;
          className="[^"]*"
          initial={{ opacity: 0, y: 50 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          viewport={{ once: true }};
        >;
          <div className="max-w-6xl mx-auto">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">;
                Comprehensive Analytics Capabilities;
              </[^>]*>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                From real-time sentiment analysis to predictive modeling, our platform provides everything you need to understand your customers.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {analyticsCapabilities.map((capability, index) => (;
                <motion.div
                  key={capability};
                  className="[^"]*"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }};
                  transition={{ delay: index * 0.1, duration: 0.6 }};
                  viewport={{ once: true }};
                >;
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">;
                    <[^>]*/>
                  </[^>]*>
                  <span className="text-gray-300 text-lg">{capability}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Pricing Section */};
        <motion.section ;
          className="[^"]*"
          initial={{ opacity: 0, y: 50 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          viewport={{ once: true }};
        >;
          <div className="max-w-7xl mx-auto">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">;
                Transparent Pricing Plans;
              </[^>]*>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Choose the plan that fits your customer analytics needs. All plans include our core AI capabilities and expert support.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {pricingPlans.map((plan, index) => (;
                <motion.div
                  key={plan.name};
                  className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${;
                    plan.popular ;
                      ? 'border-emerald-500 bg-gradient-to-br from-emerald-500/20 to-teal-500/20' ;
                      : 'border-emerald-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50'
                  }`};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ delay: index * 0.1, duration: 0.6 }};
                  viewport={{ once: true }};
                  whileHover={{ y: -5, scale: 1.02 }};
                >;
                  {plan.popular && (;&& (; (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                        Most Popular;
                      </[^>]*>
                    </[^>]*>
                  )};
                  ;
                  <div className="text-center mb-8">;
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</[^>]*>
                    <div className="flex items-baseline justify-center gap-1 mb-4">;
                      <span className="text-4xl font-bold text-emerald-400">{plan.price}</[^>]*>
                      <span className="text-gray-400">{plan.period}</[^>]*>
                    </[^>]*>
                    <p className="text-gray-300">{plan.description}</[^>]*>
                  </[^>]*>
                  ;
                  <ul className="space-y-4 mb-8">;
                    {plan.features.map((feature) => (;
                      <li key={feature} className="flex items-center gap-3">;
                        <[^>]*/>
                        <span className="text-gray-300">{feature}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                  ;
                  <motion.button ;
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${;
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                        : 'border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10'
                    }`};
                    whileHover={{ scale: 1.02 }};
                    whileTap={{ scale: 0.98 }};
                  >;
                    Get Started;
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Benefits Section */};
        <motion.section ;
          className="[^"]*"
          initial={{ opacity: 0, y: 50 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          viewport={{ once: true }};
        >;
          <div className="max-w-6xl mx-auto">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">;
                Why Choose AI Customer Experience Analytics?;
              </[^>]*>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Join leading companies that use our platform to understand their customers better and drive business growth.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {benefits.map((benefit, index) => (;
                <motion.div
                  key={benefit};
                  className="[^"]*"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }};
                  transition={{ delay: index * 0.1, duration: 0.6 }};
                  viewport={{ once: true }};
                >;
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">;
                    <[^>]*/>
                  </[^>]*>
                  <p className="text-gray-300 text-lg">{benefit}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* CTA Section */};
        <motion.section ;
          className="[^"]*"
          initial={{ opacity: 0, y: 50 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          viewport={{ once: true }};
        >;
          <div className="max-w-4xl mx-auto">;
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">;
              Ready to Transform Customer Experience?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Start your free trial today and discover the power of AI-driven customer analytics.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <motion.button ;
                className="[^"]*"
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
              >;
                Start Free Trial;
                <[^>]*/>
              </[^>]*>
              <motion.button ;
                className="[^"]*"
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
              >;
                <[^>]*/>
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
},;

export default AICustomerExperienceAnalytics;