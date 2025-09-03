import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Database, 
  Cpu, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Code,
  Server,
  Network,
  Lock,
  BarChart3,
  Target,
  Clock,
  Users,
  Rocket
} from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime.',
    features: ['Infrastructure assessment', 'Migration planning', 'Data migration', 'Performance optimization'],
    benefits: ['Reduced costs', 'Improved scalability', 'Enhanced security', 'Better performance']
  },
  {
    icon: Zap,
    title: 'DevOps Automation',
    description: 'Streamline development and operations with CI/CD pipelines and automation.',
    features: ['CI/CD implementation', 'Infrastructure as Code', 'Automated testing', 'Deployment automation'],
    benefits: ['Faster delivery', 'Reduced errors', 'Improved collaboration', 'Cost savings']
  },
  {
    icon: Shield,
    title: 'Cloud Security',
    description: 'Comprehensive security solutions for cloud environments.',
    features: ['Identity management', 'Access control', 'Threat detection', 'Compliance monitoring'],
    benefits: ['Enhanced security', 'Regulatory compliance', 'Risk reduction', 'Peace of mind']
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Optimize and manage your databases in the cloud.',
    features: ['Performance tuning', 'Backup strategies', 'Disaster recovery', 'Monitoring & alerting'],
    benefits: ['Improved performance', 'Data protection', 'Business continuity', 'Reduced maintenance']
  }
];

const technologies = [
  { name: 'AWS', description: 'Amazon Web Services', icon: Cloud },
  { name: 'Azure', description: 'Microsoft Azure', icon: Cloud },
  { name: 'GCP', description: 'Google Cloud Platform', icon: Cloud },
  { name: 'Docker', description: 'Containerization', icon: Code },
  { name: 'Kubernetes', description: 'Container orchestration', icon: Server },
  { name: 'Terraform', description: 'Infrastructure as Code', icon: Code },
  { name: 'Jenkins', description: 'CI/CD automation', icon: Zap },
  { name: 'Ansible', description: 'Configuration management', icon: Network }
];

const useCases = [
  {
    industry: 'E-commerce',
    title: 'Scalable Infrastructure',
    description: 'Handle traffic spikes during peak shopping seasons with auto-scaling cloud solutions.',
    icon: Users,
    results: ['99.9% uptime', 'Auto-scaling', 'Cost optimization', 'Global reach']
  },
  {
    industry: 'Healthcare',
    title: 'Secure Cloud Storage',
    description: 'HIPAA-compliant cloud storage with advanced security and backup solutions.',
    icon: Shield,
    results: ['HIPAA compliance', 'Data encryption', 'Secure access', 'Disaster recovery']
  },
  {
    industry: 'Finance',
    title: 'High-Performance Computing',
    description: 'Cloud-based HPC for risk analysis and financial modeling.',
    icon: Cpu,
    results: ['Faster processing', 'Cost efficiency', 'Scalable resources', 'Real-time analytics']
  }
];

export default function CloudDevOps() {
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
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Cloud & DevOps
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your infrastructure with cloud-native solutions and DevOps automation. 
              Scale efficiently, deploy faster, and maintain security with our expert cloud services.
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
            <h2 className="text-4xl font-bold text-white mb-4">Cloud & DevOps Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive cloud solutions and DevOps automation to accelerate your digital transformation 
              and improve operational efficiency.
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
              We leverage industry-leading cloud platforms and DevOps tools to deliver 
              robust, scalable, and secure solutions for your business.
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
              Discover how our cloud and DevOps solutions are transforming businesses 
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let us help you migrate to the cloud, implement DevOps best practices, 
              and achieve operational excellence.
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