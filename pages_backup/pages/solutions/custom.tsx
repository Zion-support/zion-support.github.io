import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Code, 
  Wrench, 
  CheckCircle,
  ArrowRight,
  Cloud,
  Shield,
  BarChart3,
  Users,
  Zap,
  Target,
  Rocket
} from 'lucide-react';
import Layout from '../../components/Layout';

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "Deep dive into your requirements and business goals",
    icon: Target,
    details: [
      "Requirements gathering",
      "Technical analysis",
      "Feasibility study",
      "Project planning"
    ]
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Create detailed technical specifications and system design",
    icon: Code,
    details: [
      "System architecture",
      "UI/UX design",
      "Database design",
      "API specifications"
    ]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build and thoroughly test your custom solution",
    icon: Wrench,
    details: [
      "Agile development",
      "Code reviews",
      "Quality assurance",
      "Performance testing"
    ]
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Launch your solution and provide ongoing support",
    icon: Rocket,
    details: [
      "Production deployment",
      "User training",
      "Documentation",
      "Ongoing maintenance"
    ]
  }
];

const capabilities = [
  {
    title: "Web Applications",
    description: "Custom web applications built with modern technologies",
    icon: Cloud,
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"]
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    icon: Users,
    technologies: ["React Native", "Flutter", "iOS", "Android", "Swift"]
  },
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs for system integration",
    icon: Settings,
    technologies: ["REST API", "GraphQL", "Microservices", "Docker", "Kubernetes"]
  },
  {
    title: "AI & ML Solutions",
    description: "Custom artificial intelligence and machine learning systems",
    icon: BarChart3,
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP"]
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure and DevOps solutions",
    icon: Cloud,
    technologies: ["AWS", "Azure", "GCP", "Terraform", "CI/CD"]
  },
  {
    title: "Security Solutions",
    description: "Custom security implementations and compliance",
    icon: Shield,
    technologies: ["OAuth", "JWT", "Encryption", "SOC 2", "GDPR"]
  }
];

const benefits = [
  {
    title: "Bespoke Development",
    description: "Solutions built specifically for your unique requirements",
    icon: Target
  },
  {
    title: "Full Ownership",
    description: "Complete ownership of your custom solution and codebase",
    icon: Shield
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business needs",
    icon: Zap
  },
  {
    title: "Ongoing Support",
    description: "Continuous support and maintenance for your solution",
    icon: Users
  }
];

const technologies = [
  "React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Azure", "GCP",
  "TensorFlow", "PyTorch", "OpenAI", "React Native", "Flutter"
];

export default function CustomDevelopmentPage() {
  return (
    <Layout 
      title="Custom Development - Zion Tech Group"
      description="Bespoke software development solutions tailored to your unique requirements. Full-stack development, AI/ML, mobile apps, and cloud solutions."
      keywords="custom development, bespoke software, full-stack development, custom applications, software development"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Settings className="w-16 h-16 text-orange-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Custom Development
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Bespoke software solutions built specifically for your unique requirements. 
                From concept to deployment, we create custom applications that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
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
                Our Development Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We follow a proven development methodology to ensure your custom solution 
                is delivered on time, on budget, and exceeds your expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>

                    <ul className="space-y-1 text-sm text-gray-500">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Development Capabilities
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We have expertise across the full spectrum of modern software development technologies and platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-orange-50 transition-colors group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {capability.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {capability.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Why Choose Custom Development?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Custom development offers unique advantages that off-the-shelf solutions simply cannot provide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We work with the latest and most reliable technologies to build robust, scalable solutions.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Something Unique?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your custom development needs and create a solution that's perfectly tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold">
                  Meet Our Developers
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
