import { motion } from 'framer-motion';
import { Workflow, Rocket, Award, ArrowRight, CheckCircle2, Target } from 'lucide-react';

export default function October2025AdvancedMLOpsPlatformBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-16 px-6 rounded-3xl shadow-2xl overflow-hidden my-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-6"
          >
            <Rocket className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">🔥 Just Launched: October 1, 2025</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 bg-clip-text text-transparent">
            Advanced MLOps Platform Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-8">
            Enterprise-Grade ML Operations Platform - $6.8B Success, 10x Faster Deployments
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Workflow className="w-6 h-6 text-orange-300" />
              </div>
              <h3 className="text-xl font-bold">Automated Pipelines</h3>
            </div>
            <p className="text-orange-100">
              Fully automated CI/CD pipelines for ML models with zero-touch deployment and rollback
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <Target className="w-6 h-6 text-red-300" />
              </div>
              <h3 className="text-xl font-bold">99.8% Accuracy</h3>
            </div>
            <p className="text-orange-100">
              Continuous model monitoring and optimization ensuring peak performance at all times
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-pink-500/20 rounded-xl">
                <Award className="w-6 h-6 text-pink-300" />
              </div>
              <h3 className="text-xl font-bold">10x Faster</h3>
            </div>
            <p className="text-orange-100">
              Deploy models 10x faster than traditional methods with automated testing and validation
            </p>
          </motion.div>
        </div>

        {/* Platform Features */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">Complete MLOps Lifecycle Management</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Development & Training
              </h4>
              <ul className="space-y-2 text-sm text-orange-100 pl-7">
                <li>• Collaborative experiment tracking</li>
                <li>• Distributed training at scale</li>
                <li>• Hyperparameter optimization</li>
                <li>• Model versioning & registry</li>
                <li>• Reproducible workflows</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-red-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Deployment & Monitoring
              </h4>
              <ul className="space-y-2 text-sm text-orange-100 pl-7">
                <li>• One-click model deployment</li>
                <li>• A/B testing & canary releases</li>
                <li>• Real-time performance monitoring</li>
                <li>• Automatic drift detection</li>
                <li>• Explainability & interpretability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30 text-center">
            <div className="text-2xl font-bold text-orange-300 mb-1">$6.8B</div>
            <div className="text-xs text-orange-200">Enterprise Value</div>
          </div>
          <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/30 text-center">
            <div className="text-2xl font-bold text-red-300 mb-1">10x</div>
            <div className="text-xs text-red-200">Faster Deployment</div>
          </div>
          <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30 text-center">
            <div className="text-2xl font-bold text-pink-300 mb-1">99.8%</div>
            <div className="text-xs text-pink-200">Model Accuracy</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/20 to-red-800/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30 text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-1">3,400+</div>
            <div className="text-xs text-orange-200">Production Models</div>
          </div>
          <div className="bg-gradient-to-br from-red-600/20 to-pink-800/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/30 text-center">
            <div className="text-2xl font-bold text-green-300 mb-1">2,840%</div>
            <div className="text-xs text-pink-200">Average ROI</div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            'Seamless integration with popular ML frameworks (TensorFlow, PyTorch, Scikit-learn)',
            'Enterprise-grade security with role-based access control and audit logs',
            'Cost optimization with automatic resource scaling and spot instance management',
            'Compliance-ready with model governance and documentation automation'
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
            >
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-orange-100">{benefit}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all">
            <span>Transform Your ML Operations</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-orange-200 mt-4">
            Trusted by leading AI teams • 90-day implementation guarantee
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
