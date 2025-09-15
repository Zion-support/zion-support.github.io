import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Target,
  BarChart3,
  Clock,
  DollarSign,
  Lightbulb
} from 'lucide-react';

const AIBusinessTransformation2025: React.FC = () => {
  const transformationAreas = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "AI-powered workflows that handle 80% of routine tasks automatically",
      metrics: "300% productivity increase",
      timeline: "30-90 days",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Predictive Analytics",
      description: "Forecast market trends and customer behavior with 95% accuracy",
      metrics: "40% better decision making",
      timeline: "60-120 days",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Smart Security",
      description: "AI-driven threat detection and response systems",
      metrics: "99.9% threat prevention",
      timeline: "45-90 days",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Cloud,
      title: "Cloud Intelligence",
      description: "Optimized cloud infrastructure with AI-powered resource management",
      metrics: "60% cost reduction",
      timeline: "90-180 days",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs",
      metrics: "500% faster development",
      timeline: "120-240 days",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform raw data into actionable business insights",
      metrics: "Real-time insights",
      timeline: "60-150 days",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const successMetrics = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      value: "+250%",
      description: "Average revenue increase within 12 months"
    },
    {
      icon: Clock,
      title: "Time Savings",
      value: "40hrs/week",
      description: "Automated tasks free up valuable time"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "-60%",
      description: "Operational cost savings through AI"
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      value: "98%",
      description: "Improved customer experience scores"
    }
  ];

  const transformationSteps = [
    {
      step: "01",
      title: "AI Assessment",
      description: "Comprehensive analysis of your current processes and AI readiness",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom AI transformation roadmap aligned with business goals",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Pilot Implementation",
      description: "Start with high-impact, low-risk AI solutions",
      duration: "4-8 weeks"
    },
    {
      step: "04",
      title: "Full Deployment",
      description: "Scale successful pilots across the entire organization",
      duration: "8-16 weeks"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous improvement and AI model refinement",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🤖 AI TRANSFORMATION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6">
              AI Business Transformation 2025
            </h1>
            <p className="text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI solutions that deliver measurable results. Join thousands of companies already experiencing 300% productivity gains.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                <span className="font-semibold">🚀 300% ROI</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                <span className="font-semibold">⚡ 90-Day Results</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                <span className="font-semibold">🎯 Proven Success</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#transformation" className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold text-lg">
                Start Transformation →
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{metric.title}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section id="transformation" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              🚀 AI Transformation Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive AI solutions cover every aspect of your business, delivering measurable results across all departments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="font-medium">Impact:</span>
                      <span className="ml-2">{area.metrics}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">Timeline:</span>
                      <span className="ml-2">{area.timeline}</span>
                    </div>
                  </div>
                  <a href="/contact" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              🎯 Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our systematic approach ensures successful AI transformation with minimal risk and maximum impact.
            </p>
          </motion.div>

          <div className="space-y-8">
            {transformationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-indigo-600 mr-4">{step.step}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex items-center text-sm text-indigo-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">Duration: {step.duration}</span>
                    </div>
                  </div>
                </div>
                {index < transformationSteps.length - 1 && (
                  <div className="hidden md:block">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              🏆 Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real results from companies that transformed their business with our AI solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">+400%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fortune 500 Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Implemented AI-powered predictive maintenance, reducing downtime by 75% and increasing production efficiency by 400%.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Timeline:</strong> 6 months | <strong>ROI:</strong> 500%
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">$2M Saved</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Retail Chain</h3>
              <p className="text-gray-600 mb-4">
                AI-driven inventory optimization and demand forecasting saved $2M annually while improving customer satisfaction.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Timeline:</strong> 4 months | <strong>ROI:</strong> 350%
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-semibold">99.9%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                AI-powered fraud detection and risk assessment achieved 99.9% accuracy, preventing millions in losses.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Timeline:</strong> 3 months | <strong>ROI:</strong> 600%
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Join thousands of companies experiencing 300% productivity gains with our AI transformation solutions. Start your journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold text-lg">
                Start Free Consultation →
              </a>
              <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                Explore AI Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessTransformation2025;