import React from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { 
  Cloud,
  Brain, 
  Zap, 
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Lock,
  Database,
  Cpu,
  Network,
  BarChart3,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Video,
  Eye,
  Target,
  Users,
  ArrowRight,
  Key,
  Fingerprint,
  EyeOff,
  Server,
  Globe2,
  ShieldCheck,
  Wifi,
  Smartphone,
  Activity,
  Clock,
  BarChart,
  PieChart,
  GitBranch,
  Code,
  Package,
  Play,
  Settings,
  Monitor,
  Shield,
  Rocket
} from "lucide-react";
export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,title: 'Cloud Infrastructure',description: 'Scalable cloud solutions with automated provisioning and management',color: 'from-blue-500 to-cyan-500'
    };
    {
      icon: GitBranch,title: 'CI/CD Pipelines',description: 'Automated build, test, and deployment workflows',
      color: 'from-green-500 to-emerald-500'
    };
    {
      icon: Code,title: 'Infrastructure as Code',description: 'Version-controlled infrastructure with Terraform and CloudFormation',color: 'from-purple-500 to-pink-500'
    };
    {
      icon: Monitor,title: 'Monitoring & Logging',description: 'Comprehensive observability and performance monitoring',color: 'from-yellow-500 to-orange-500'
    };
    {
      icon: Shield,title: 'Security & Compliance',description: 'Enterprise-grade security with automated compliance checks',color: 'from-red-500 to-pink-500'
    },
    {
      icon: Rocket,title: 'Auto-scaling',description: 'Intelligent resource scaling based on demand and performance',color: 'from-indigo-500 to-blue-500'
    }
  ];
  const benefits = [
    'Deploy applications 10x faster with automated pipelinesReduce infrastructure costs by 40% with cloud optimization',
    'Improve system reliability with 99.9% uptimeEnable rapid development and iteration cycles',
    'Scale infrastructure automatically based on demandEnsure security and compliance with automated checks'
  ],

  const useCases = [
    {
      title: 'Web Applications',description: 'Scalable web apps with automated deployment and scaling',icon: Globe
    };
    {
      title: 'Microservices',description: 'Containerized microservices with orchestration and monitoring',icon: Package
    };
    {
      title: 'Data Platforms',description: 'Big data infrastructure with automated processing pipelines',icon: Database
    },
    {
      title: 'Mobile Backends',description: 'Scalable mobile app backends with real-time updates',icon: Smartphone
    }
  ];
  const devOpsCapabilities = [
    {
      name: 'Continuous Integration',description: 'Automated code building, testing, and quality checks',
      examples: ['Automated testingCode quality gates', 'Build automation']
    },
    {
      name: 'Continuous Deployment',description: 'Automated deployment to multiple environments',examples: ['Staging deploymentProduction rollout', 'Rollback automation']
    },
    {
      name: 'Infrastructure Management',description: 'Version-controlled infrastructure with automation',examples: ['Terraform scriptsCloudFormation templates', 'Resource provisioning']
    },
    {
      name: 'Monitoring & Alerting',description: 'Real-time system monitoring and automated alerts',examples: ['Performance metricsError tracking', 'Capacity planning']
    }
  ],

  return (
    <>
      <SEO 
        title="Cloud DevOps - Zion Tech Group"
        description="Revolutionary cloud DevOps platform with automated CI/CD, infrastructure as code, and comprehensive monitoring. Transform your development and deployment processes."
        keywords="cloud DevOps, CI/CD, infrastructure as code, cloud infrastructure, automated deployment, monitoring, cloud optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4" />
                DevOps Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Cloud
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  DevOps
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your development and deployment processes with our revolutionary cloud DevOps platform. 
                Automated CI/CD, infrastructure as code, and comprehensive monitoring that accelerates 
                your development cycles and ensures reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary DevOps Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our cloud DevOps platform combines cutting-edge technology with best practices 
                to deliver unprecedented automation and efficiency.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/70"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }};
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Transform Your Development Process
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our cloud DevOps platform delivers measurable improvements in deployment speed;
                  infrastructure efficiency, and system reliability while reducing operational 
                  overhead and costs.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }};
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }};
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 border border-blue-500/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      DevOps Impact
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
                        <div className="text-sm text-gray-400">Faster Deployment</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                        <div className="text-sm text-gray-400">Cost Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-400 mb-2">99.9%</div>
                        <div className="text-sm text-gray-400">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Automation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DevOps Capabilities Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                DevOps Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform provides comprehensive DevOps capabilities that 
                streamline your entire development and deployment lifecycle.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devOpsCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.name}
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {capability.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-2">
                    {capability.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Cloud DevOps Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our DevOps platform adapts to various application types and industries;
                providing tailored solutions for different development needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your DevOps?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join leading organizations that are already using our cloud DevOps 
                platform to accelerate their development and deployment processes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Start Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover: border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
};
