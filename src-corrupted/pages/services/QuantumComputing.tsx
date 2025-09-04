import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Atom, 
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
  Brain,
  Code,
  Server,
  Network,
  Lock,
  Eye,
  Activity,
  Cpu,
  HardDrive,
  Wifi,
  Cloud
} from 'lucide-react';

export function QuantumComputing(props: any) {
  const quantumServices = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for complex computational problems',
      icon: Cod e,
      features: ['Optimization Algorithms', 'Cryptography', 'Machine Learning', 'Simulation']
    },
    {
      title: 'Quantum Computing Infrastructure',
      description: 'Build and manage quantum computing environments',
      icon: Serve r,
      features: ['Quantum Hardware Setup', 'Cloud Integration', 'Performance Monitoring', 'Scalability']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Combine quantum computing with AI for enhanced performance',
      icon: Brai n,
      features: ['Quantum Neural Networks', 'Quantum Feature Selection', 'Quantum Clustering', 'Quantum Optimization']
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles',
      icon: Loc k,
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Secure Communication', 'Quantum Random Number Generation']
    },
    {
      title: 'Quantum Simulation',
      description: 'Simulate complex quantum systems for research and development',
      icon: Activit y,
      features: ['Molecular Dynamics', 'Material Science', 'Chemical Reactions', 'Quantum Chemistry']
    },
    {
      title: 'Quantum Consulting',
      description: 'Strategic guidance for quantum computing implementation',
      icon: Lightbul b,
      features: ['Technology Assessment', 'Use Case Analysis', 'Implementation Strategy', 'Training & Education']
    }
  ];

  const benefits = [
    {
      title: 'Exponential Speedup',
      description: 'Solve complex problems exponentially faster than classical computers',
      icon: Za p
    },
    {
      title: 'Quantum Advantage',
      description: 'Achieve computational advantages impossible with classical systems',
      icon: Targe t
    },
    {
      title: 'Future-Proof Technology',
      description: 'Stay ahead with next-generation computing capabilities',
      icon: Rocke t
    },
    {
      title: 'Research Leadership',
      description: 'Lead innovation in quantum computing applications',
      icon: Sta r
    }
  ];

  const applications = [
    {
      industry: 'Finance',
      icon: TrendingU p,
      useCases: ['Portfolio Optimization', 'Risk Assessment', 'Cryptocurrency Mining', 'Trading Algorithms']
    },
    {
      industry: 'Healthcare',
      icon: User s,
      useCases: ['Drug Discovery', 'Protein Folding', 'Medical Imaging', 'Personalized Medicine']
    },
    {
      industry: 'Logistics',
      icon: Networ k,
      useCases: ['Route Optimization', 'Supply Chain Management', 'Inventory Optimization', 'Transportation Planning']
    },
    {
      industry: 'Cybersecurity',
      icon: Shiel d,
      useCases: ['Quantum Cryptography', 'Threat Detection', 'Secure Communication', 'Post-Quantum Security']
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
              Quantum Computing
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve the most complex computational problems. 
              From cryptography to optimization, quantum computing is the future of computation.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover: fro m-cyan-600 hover: t o-blue-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5"  />
              </Link>
              <button className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover: b g-cyan-500 hover: tex t-white transition-all duration-200">
                <Play className="mr-2 h-5 w-5"  />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm: p x-6 lg: p x-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
              Our Quantum Computing Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive quantum computing solutions for the next generation of computational problems
            </p>
          </div>
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {quantumServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover: borde r-cyan-500/50 transition-all duration-300 hover: transform hover:scale-105"
                initial={{ opacity: 0, y: 2 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
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
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2"  />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover how quantum computing is transforming industries across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 md: gri d-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
                initial={{ opacity: 0, x: inde x % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: inde x * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <app.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{app.industry}</h3>
                </div>
                <ul className="space-y-3">
                  {app.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                      <ArrowRight className="w-4 h-4 text-cyan-400"  />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm: p x-6 lg: p x-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the revolutionary power of quantum computation
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
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              Ready to Explore Quantum Computing?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how quantum computing can solve your most complex challenges
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover: fro m-cyan-600 hover: t o-blue-700 transition-all duration-200"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5"  />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover: b g-cyan-500 hover: tex t-white transition-all duration-200"
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

export default QuantumComputing;

</motion>
</motion>
</motion>
</motion>
</motion>