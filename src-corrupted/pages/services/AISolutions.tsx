import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  Cpu, 
  Clock,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Globe,
  Shield,
  Database,
  Workflow,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  Star,
  Award,
  MessageCircle,
  Eye,
  Code
} from 'lucide-react';

export function AISolutions(props: any) {
  const aiServices = [
    {
      title: 'AI-Powered Analytics',
      description: 'Transform data into actionable insights with advanced machine learning algorithms',
      icon: BarChart 3,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization']
    },
    {
      title: 'Natural Language Processing',
      description: 'Build intelligent chatbots and language understanding systems',
      icon: MessageCircl e,
      features: ['Chatbot Development', 'Text Analysis', 'Language Translation', 'Sentiment Analysis']
    },
    {
      title: 'Computer Vision',
      description: 'Implement image and video recognition for automation and security',
      icon: Ey e,
      features: ['Image Recognition', 'Video Analysis', 'Object Detection', 'Facial Recognition']
    },
    {
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation',
      icon: Workflo w,
      features: ['Process Automation', 'Workflow Optimization', 'Decision Support', 'Predictive Maintenance']
    },
    {
      title: 'AI Consulting',
      description: 'Strategic guidance for AI implementation and digital transformation',
      icon: Lightbul b,
      features: ['AI Strategy', 'Technology Assessment', 'Implementation Planning', 'Training & Support']
    },
    {
      title: 'Custom AI Development',
      description: 'Tailored AI solutions designed for your specific business needs',
      icon: Cod e,
      features: ['Custom Algorithms', 'API Development', 'Integration Services', 'Scalable Architecture']
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows',
      icon: Za p
    },
    {
      title: 'Better Decision Making',
      description: 'Data-driven insights for strategic business decisions',
      icon: Targe t
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through intelligent automation',
      icon: TrendingU p
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge AI technology',
      icon: Rocke t
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm: p x-6 lg: p x-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 2 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-6">
              AI Solutions
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                & Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to automation, we help you harness the power of AI.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover: fro m-purple-600 hover: t o-pink-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5"  />
              </Link>
              <button className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover: b g-purple-500 hover: tex t-white transition-all duration-200">
                <Play className="mr-2 h-5 w-5"  />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm: p x-6 lg: p x-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover: borde r-purple-500/50 transition-all duration-300 hover: transform hover:scale-105"
                initial={{ opacity: 0, y: 2 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2"  />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the transformative power of artificial intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 2 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
              >
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm: p x-6 lg: p x-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our AI solutions can drive your business forward
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover: fro m-purple-600 hover: t o-pink-700 transition-all duration-200"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5"  />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover: b g-purple-500 hover: tex t-white transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AISolutions;
</motion>
</motion>
</motion>
</motion>