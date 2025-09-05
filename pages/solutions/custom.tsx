import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Settings, Code, Zap, Shield, CheckCircle, ArrowRight, Users, Clock, Wrench, Layers } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const customFeatures = [
  {
    title: "Bespoke Development",
    description: "100% custom solutions built from the ground up for your unique requirements",
    icon: Code,
    benefits: ["Tailored architecture", "Custom functionality", "Unique user experience", "Brand integration"]
  },
  {
    title: "Full Customization",
    description: "Complete control over every aspect of your solution",
    icon: Settings,
    benefits: ["UI/UX customization", "Workflow optimization", "Feature prioritization", "Scalability planning"]
  },
  {
    title: "Integration Ready",
    description: "Seamless integration with your existing systems and tools",
    icon: Layers,
    benefits: ["API development", "Legacy system integration", "Third-party connections", "Data migration"]
  },
  {
    title: "Future Proof",
    description: "Built with modern technologies and practices for long-term success",
    icon: Shield,
    benefits: ["Modern tech stack", "Maintainable code", "Security best practices", "Performance optimization"]
  }
];

const developmentProcess = [
  {
    phase: "Discovery & Planning",
    duration: "1-2 weeks",
    description: "Understanding your requirements and creating a detailed project plan",
    activities: ["Requirements gathering", "Technical analysis", "Architecture design", "Timeline planning"]
  },
  {
    phase: "Design & Prototyping",
    duration: "2-3 weeks",
    description: "Creating wireframes, mockups, and interactive prototypes",
    activities: ["UI/UX design", "User flow mapping", "Prototype development", "Design validation"]
  },
  {
    phase: "Development",
    duration: "4-12 weeks",
    description: "Building your custom solution with regular updates and feedback",
    activities: ["Core development", "Feature implementation", "Testing & QA", "Regular demos"]
  },
  {
    phase: "Deployment & Support",
    duration: "Ongoing",
    description: "Launching your solution and providing ongoing maintenance and support",
    activities: ["Production deployment", "User training", "Documentation", "Ongoing support"]
  }
];

const customStats = [
  { number: "100+", label: "Custom Projects" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
  { number: "5+", label: "Years Experience" }
];

const technologies = [
  "React & Next.js",
  "Node.js & Express",
  "Python & Django",
  "AWS & Azure",
  "Docker & Kubernetes",
  "PostgreSQL & MongoDB",
  "Redis & Elasticsearch",
  "GraphQL & REST APIs"
];

export default function CustomDevelopmentPage() {
  return (
    <MainLayout
      title="Custom Development - Zion Tech Group"
      description="Bespoke software development solutions tailored to your exact requirements. Full customization and integration capabilities."
      keywords="custom development, bespoke software, custom solutions, software development, integration, full customization"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Development Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Bespoke software solutions built to your exact specifications. 
                From concept to deployment, we create custom applications that perfectly fit your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {customStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Custom Development?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Custom solutions provide the flexibility, performance, and functionality that off-the-shelf 
                software simply cannot match.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {customFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology that ensures your project is delivered on time, 
                on budget, and exceeds your expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentProcess.map((phase, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {phase.phase}
                  </h3>
                  
                  <div className="text-sm text-indigo-600 font-semibold mb-3">
                    {phase.duration}
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {phase.description}
                  </p>

                  <ul className="space-y-1">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work with the latest technologies and frameworks to build modern, 
                scalable, and maintainable custom solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg text-center hover:bg-indigo-50 hover:border-indigo-200 border border-transparent transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-medium text-gray-700">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something Custom?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your unique requirements and create a custom solution that perfectly fits your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}