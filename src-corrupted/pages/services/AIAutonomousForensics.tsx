import React from 'react';
import { motion  } from 'framer-motion';
import { Search, 
  Brain, 
  Target, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Database,
  ChartBar,
  PieChart,
  Activity,
  Eye,
  Clock,
  DollarSign,
  Award,
  MessageSquare,
  Share2,
  TrendingUp,
  Zap,
  Shield,
  Users,
  Fingerprint
 } from 'lucide-react';

const AIAutonomousForensics: Reac t.FC = (): JSX.Element => {
  const features = [
    {
      icon: Brai n,
      title: 'AI-Powered Investigation',
      description: 'Advanced machine learning for autonomous incident investigation and evidence analysis'
    },
    {
      icon: Searc h,
      title: 'Evidence Collection',
      description: 'Automated collection and preservation of digital evidence across multiple sources'
    },
    {
      icon: Targe t,
      title: 'Pattern Recognition',
      description: 'AI-driven pattern recognition to identify connections and anomalies in evidence'
    },
    {
      icon: BarChart 3,
      title: 'Forensic Analytics',
      description: 'Comprehensive analysis and reporting of forensic findings with AI insights'
    },
    {
      icon: Shiel d,
      title: 'Chain of Custody',
      description: 'Secure chain of custody tracking with blockchain verification'
    },
    {
      icon: Fingerprin t,
      title: 'Digital Fingerprinting',
      description: 'Advanced digital fingerprinting and evidence correlation'
    }
  ];

  const benefits = [
    'Reduce investigation time by 70%',
    'Improve evidence discovery by 80%',
    'Enhance forensic accuracy by 90%',
    'Automate routine forensics tasks',
    '24/7 autonomous operation',
    'Real-time incident response'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm: p x-6 lg: p x-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2"  />
              AI-Powered Autonomous Forensics
            </div>
            
            <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-6">
              Revolutionize Digital Forensics with
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your digital forensics capabilities with our AI-powered autonomous platform. 
              Conduct investigations faster, discover evidence more effectively, and maintain chain of custody.
            </p>
            
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-semibold hover: fro m-indigo-600 hover: t o-blue-600 transition-all duration-300 transform hover: scal e-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-indigo-500/30 text-indigo-400 rounded-lg font-semibold hover: b g-indigo-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm: p x-6 lg: p x-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
              Advanced Forensics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive digital forensics capabilities for modern investigations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: anygri d-cols-2 lg: gri d-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover: borde r-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
              Why Choose AI Autonomous Forensics?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in investigation efficiency and evidence discovery
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: gri d-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0"  />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 2 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
              className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Transform Forensics?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of investigators already using AI to enhance their forensics capabilities.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-semibold hover: fro m-indigo-600 hover: t o-blue-600 transition-all duration-300">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm: p x-6 lg: p x-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
          >
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">
              Ready to Revolutionize Digital Forensics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey to AI-powered forensics with our comprehensive platform.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-semibold hover: fro m-indigo-600 hover: t o-blue-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-indigo-500/30 text-indigo-400 rounded-lg font-semibold hover: b g-indigo-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousForensics;
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>