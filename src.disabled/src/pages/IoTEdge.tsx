import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Database, 
  Network, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Code,
  Server,
  Wifi,
  Lock,
  BarChart3,
  Target,
  Clock,
  Users,
  Rocket,
  Sensor
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Edge Computing Infrastructure',
    description: 'Deploy and manage edge computing nodes for real-time data processing.',
    features: ['Edge node deployment', 'Load balancing', 'Failover systems', 'Performance monitoring'],
    benefits: ['Reduced latency', 'Bandwidth optimization', 'Real-time processing', 'Cost efficiency']
  },
  {
    icon: Sensor,
    title: 'IoT Device Management',
    description: 'Comprehensive platform for managing IoT devices and sensors.',
    features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health monitoring'],
    benefits: ['Centralized control', 'Reduced maintenance', 'Improved reliability', 'Scalable deployment']
  },
  {
    icon: Network,
    title: 'Edge Analytics',
    description: 'Process and analyze data at the edge for instant insights.',
    features: ['Real-time analytics', 'Machine learning', 'Data filtering', 'Predictive maintenance'],
    benefits: ['Instant insights', 'Reduced cloud costs', 'Better decision making', 'Proactive maintenance']
  },
  {
    icon: Shield,
    title: 'IoT Security',
    description: 'End-to-end security for IoT devices and edge networks.',
    features: ['Device authentication', 'Data encryption', 'Threat detection', 'Access control'],
    benefits: ['Enhanced security', 'Compliance ready', 'Risk mitigation', 'Trust building']
  }
];

const technologies = [
  { name: 'AWS IoT', description: 'Amazon IoT platform', icon: Cloud },
  { name: 'Azure IoT', description: 'Microsoft IoT services', icon: Cloud },
  { name: 'Kubernetes', description: 'Container orchestration', icon: Server },
  { name: 'Docker', description: 'Containerization', icon: Code },
  { name: 'MQTT', description: 'IoT messaging protocol', icon: Network },
  { name: 'TensorFlow Lite', description: 'Edge ML framework', icon: Brain },
  { name: 'Node-RED', description: 'IoT flow programming', icon: Code },
  { name: 'Grafana', description: 'Monitoring & visualization', icon: BarChart3 }
];

const useCases = [
  {
    industry: 'Manufacturing',
    title: 'Smart Factory',
    description: 'Real-time monitoring and predictive maintenance for manufacturing equipment.',
    icon: Factory,
    results: ['30% reduction in downtime', 'Predictive maintenance', 'Real-time monitoring', 'Cost optimization']
  },
  {
    industry: 'Healthcare',
    title: 'Remote Patient Monitoring',
    description: 'Continuous health monitoring with edge-based data processing.',
    icon: Heart,
    results: ['24/7 monitoring', 'Early warning systems', 'Reduced hospital visits', 'Better outcomes']
  },
  {
    industry: 'Smart Cities',
    title: 'Urban Infrastructure',
    description: 'Intelligent management of city services and utilities.',
    icon: Building,
    results: ['Efficient resource use', 'Real-time optimization', 'Cost savings', 'Improved services']
  }
];

export default function IoTEdge() {
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
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                IoT & Edge Computing
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent IoT solutions and edge computing. 
              Process data closer to the source for faster insights and better performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="btn-neon px-8 py-3 text-lg"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">IoT & Edge Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive IoT and edge computing solutions to digitize your operations, 
              improve efficiency, and gain real-time insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center space-x-3 text-zion-slate-light">
                        <ArrowRight className="w-4 h-4 text-zion-purple flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We leverage cutting-edge IoT and edge computing technologies to deliver 
              robust, scalable, and intelligent solutions for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how our IoT and edge computing solutions are transforming businesses 
              across different industries with measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
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
                  {useCase.results.map((result) => (
                    <div key={result} className="flex items-center space-x-3 text-zion-slate-light">
                      <Target className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Go IoT?</h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let us help you implement IoT solutions and edge computing to transform 
              your business operations and gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                Get Free Consultation
              </a>
              <a
                href="/request-quote"
                className="btn-neon px-8 py-3 text-lg"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const Cloud = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.004 5.004 0 00-5.1 4.999z" />
  </svg>
);

const Brain = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);