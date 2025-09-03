import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  Cloud, 
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Globe,
  Cpu,
  Target,
  Lightbulb
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Predictive Analytics',
    description: 'Advanced machine learning models that forecast trends and identify opportunities before they happen.',
    benefits: ['Revenue optimization', 'Risk mitigation', 'Strategic planning', 'Market insights']
  },
  {
    icon: BarChart3,
    title: 'Real-time Dashboards',
    description: 'Interactive visualizations that provide instant insights into your business performance.',
    benefits: ['Live monitoring', 'Custom metrics', 'Mobile access', 'Real-time alerts']
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'AI-driven recommendations to improve efficiency and maximize ROI across all operations.',
    benefits: ['Cost reduction', 'Efficiency gains', 'Resource optimization', 'Process improvement']
  },
  {
    icon: Database,
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable intelligence with advanced analytics and pattern recognition.',
    benefits: ['Pattern discovery', 'Anomaly detection', 'Data quality', 'Insight generation']
  }
];

const useCases = [
  {
    industry: 'E-commerce',
    title: 'Customer Behavior Analysis',
    description: 'Predict customer preferences and optimize product recommendations for increased sales.',
    icon: Users,
    metrics: ['25% increase in conversion', '30% higher customer lifetime value', '40% reduction in cart abandonment']
  },
  {
    industry: 'Finance',
    title: 'Risk Assessment & Fraud Detection',
    description: 'AI-powered systems that identify potential risks and fraudulent activities in real-time.',
    icon: Shield,
    metrics: ['99.9% fraud detection accuracy', '60% faster risk assessment', '80% reduction in false positives']
  },
  {
    industry: 'Healthcare',
    title: 'Patient Outcome Prediction',
    description: 'Machine learning models that predict patient outcomes and optimize treatment plans.',
    icon: Target,
    metrics: ['90% prediction accuracy', '35% improvement in treatment outcomes', '50% reduction in readmissions']
  },
  {
    industry: 'Manufacturing',
    title: 'Predictive Maintenance',
    description: 'AI systems that predict equipment failures and optimize maintenance schedules.',
    icon: Cpu,
    metrics: ['70% reduction in downtime', '45% lower maintenance costs', '95% equipment reliability']
  }
];

const technologies = [
  { name: 'TensorFlow', description: 'Advanced deep learning framework', icon: Code },
  { name: 'PyTorch', description: 'Flexible machine learning library', icon: Brain },
  { name: 'Apache Spark', description: 'Big data processing engine', icon: Database },
  { name: 'Kubernetes', description: 'Scalable deployment platform', icon: Cloud },
  { name: 'AWS SageMaker', description: 'Cloud-based ML platform', icon: Cloud },
  { name: 'Google Cloud AI', description: 'Enterprise AI services', icon: Globe }
];

export default function AIAnalytics() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                AI Analytics
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent analytics powered by cutting-edge AI. 
              Unlock hidden insights, predict future trends, and make data-driven decisions that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                Get Started
              </a>
              <a
                href="#demo"
                className="btn-neon px-8 py-3 text-lg"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Analytics Features</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI analytics platform combines advanced machine learning with intuitive interfaces 
              to deliver actionable insights that transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how AI analytics is transforming businesses across different industries 
              with measurable results and proven ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zion-cyan uppercase tracking-wide">{useCase.industry}</span>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.metrics.map((metric) => (
                    <div key={metric} className="flex items-center space-x-3 text-zion-slate-light">
                      <TrendingUp className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Cutting-Edge Technologies</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built on the latest AI and machine learning technologies to ensure scalability, 
              performance, and accuracy in all our analytics solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-xs text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of companies already using AI analytics to drive growth, 
              optimize operations, and gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                Start Your Free Trial
              </a>
              <a
                href="/request-quote"
                className="btn-neon px-8 py-3 text-lg"
              >
                Get Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}