import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import { 
  ArrowRight, 
  CheckCircle, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Zap,
  Code,
  Smartphone,
  Globe,
  Lock,
  BarChart3,
  Settings,
  Users,
  Target,
  Award
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Brain className="h-12 w-12 text-blue-500" />,
      title: "AI-Powered Business Automation",
      description: "Transform your operations with intelligent automation that learns and adapts",
      features: [
        "Intelligent process automation",
        "Predictive analytics and insights",
        "Natural language processing",
        "Computer vision solutions",
        "Custom AI model development"
      ],
      benefits: [
        "Reduce operational costs by 40%",
        "Increase efficiency by 60%",
        "24/7 intelligent monitoring",
        "Scalable AI infrastructure"
      ],
      industry: "All Industries"
    },
    {
      icon: <Shield className="h-12 w-12 text-green-500" />,
      title: "Enterprise Security Suite",
      description: "Comprehensive cybersecurity solutions to protect your digital assets",
      features: [
        "Advanced threat detection",
        "Zero-trust security architecture",
        "Compliance management",
        "Security awareness training",
        "Incident response planning"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "Reduced security incidents by 85%",
        "Compliance with industry standards",
        "24/7 security monitoring"
      ],
      industry: "Finance, Healthcare, Government"
    },
    {
      icon: <Cloud className="h-12 w-12 text-purple-500" />,
      title: "Cloud Transformation Platform",
      description: "Seamless migration and optimization of your cloud infrastructure",
      features: [
        "Multi-cloud strategy development",
        "Legacy system modernization",
        "Cost optimization",
        "Disaster recovery planning",
        "Performance monitoring"
      ],
      benefits: [
        "50% reduction in infrastructure costs",
        "99.99% uptime guarantee",
        "Faster time to market",
        "Scalable and flexible architecture"
      ],
      industry: "Technology, E-commerce, SaaS"
    },
    {
      icon: <Database className="h-12 w-12 text-orange-500" />,
      title: "Data Intelligence Platform",
      description: "Unlock the power of your data with advanced analytics and insights",
      features: [
        "Real-time data processing",
        "Advanced analytics dashboards",
        "Machine learning integration",
        "Data governance framework",
        "Predictive modeling"
      ],
      benefits: [
        "Data-driven decision making",
        "30% improvement in business outcomes",
        "Real-time insights and reporting",
        "Automated data quality management"
      ],
      industry: "Retail, Manufacturing, Healthcare"
    },
    {
      icon: <Code className="h-12 w-12 text-red-500" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies",
      features: [
        "Full-stack development",
        "Mobile app development",
        "API development and integration",
        "Microservices architecture",
        "DevOps and CI/CD implementation"
      ],
      benefits: [
        "Faster development cycles",
        "Higher code quality and reliability",
        "Scalable and maintainable code",
        "Reduced time to market"
      ],
      industry: "All Industries"
    },
    {
      icon: <Network className="h-12 w-12 text-yellow-500" />,
      title: "Network Infrastructure Solutions",
      description: "Robust and secure networking solutions for modern enterprises",
      features: [
        "SD-WAN implementation",
        "Network security hardening",
        "Performance optimization",
        "Disaster recovery planning",
        "24/7 network monitoring"
      ],
      benefits: [
        "Improved network performance",
        "Enhanced security posture",
        "Reduced downtime",
        "Cost-effective solutions"
      ],
      industry: "Telecommunications, Finance, Government"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      description: "HIPAA-compliant solutions for patient data management and telemedicine"
    },
    {
      name: "Finance",
      icon: <Lock className="h-8 w-8 text-green-500" />,
      description: "Secure financial systems with fraud detection and compliance automation"
    },
    {
      name: "Manufacturing",
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      description: "IoT integration and predictive maintenance for smart manufacturing"
    },
    {
      name: "Retail",
      icon: <Smartphone className="h-8 w-8 text-orange-500" />,
      description: "E-commerce platforms and customer analytics for retail optimization"
    },
    {
      name: "Education",
      icon: <Users className="h-8 w-8 text-red-500" />,
      description: "Learning management systems and educational technology solutions"
    },
    {
      name: "Government",
      icon: <Globe className="h-8 w-8 text-yellow-500" />,
      description: "Secure government systems with citizen services and data management"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current systems and business requirements"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Custom architecture and technology stack selection for optimal results"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Agile development and deployment with continuous testing and feedback"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Ongoing monitoring, maintenance, and continuous improvement"
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions for enterprise digital transformation. AI, cloud, security, and custom software development services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white">
                          {solution.title}
                        </h3>
                        <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {solution.industry}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-6">
                        {solution.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Expected Benefits:</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300">
                              <Target className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized solutions tailored to your industry's unique challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our expert team help you implement the perfect solution for your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SolutionsPage;