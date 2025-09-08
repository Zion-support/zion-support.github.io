import { motion } from 'framer-motion';
import { Cloud, Code, Zap, Shield, Database, Globe, Server, GitBranch } from 'lucide-react';
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to AWS, Azure, or Google Cloud with zero downtime and optimized performance."
    },
    {
      icon: Code,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines for faster, more reliable software delivery."
    },
    {
      icon: Zap,
      title: "Infrastructure as Code",
      description: "Manage infrastructure using Terraform, CloudFormation, or Ansible for consistent deployments."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in security best practices and compliance frameworks for enterprise-grade protection."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Managed database services with automated backups, scaling, and monitoring."
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Worldwide content delivery network for lightning-fast user experiences."
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Cloud DevOps Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From cloud migration to continuous deployment, we provide end-to-end 
              DevOps solutions that accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Cloud DevOps?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern cloud infrastructure and automated DevOps practices.
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <Zap className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on industry-leading tools and platforms for maximum reliability and performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300"
              >
                <Server className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <span className="text-gray-200 font-medium">{tech}</span>
              </motion.div>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you build a modern, scalable, and efficient cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Migration
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Get Assessment
              </button>
            </div>
          </motion.div>
};

export default CloudDevOps;
}
