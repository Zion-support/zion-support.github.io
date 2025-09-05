import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Shield, 
  Cloud, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Users,
  Database,
  Lock,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react';
import Layout from '../../components/Layout';

const enterpriseFeatures = [
  {
    title: 'Scalable Infrastructure',
    description: 'Enterprise-grade cloud infrastructure that scales with your business needs',
    icon: Cloud,
    benefits: [
      'Auto-scaling capabilities',
      'High availability architecture',
      'Global data center presence',
      '99.9% uptime guarantee'
    ]
  },
  {
    title: 'Advanced Security',
    description: 'Comprehensive security framework to protect your enterprise data and systems',
    icon: Shield,
    benefits: [
      'End-to-end encryption',
      'Multi-factor authentication',
      'SOC 2 Type II compliance',
      '24/7 security monitoring'
    ]
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Leverage artificial intelligence to gain insights and make data-driven decisions',
    icon: Brain,
    benefits: [
      'Predictive analytics',
      'Real-time data processing',
      'Machine learning models',
      'Custom AI solutions'
    ]
  },
  {
    title: 'Enterprise Integration',
    description: 'Seamlessly integrate with your existing enterprise systems and workflows',
    icon: Database,
    benefits: [
      'API-first architecture',
      'Legacy system integration',
      'Single sign-on (SSO)',
      'Custom connectors'
    ]
  }
];

const enterpriseServices = [
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation strategy and implementation',
    icon: Globe,
    features: [
      'Process automation',
      'Cloud migration',
      'Data modernization',
      'Change management'
    ]
  },
  {
    title: 'Enterprise AI Solutions',
    description: 'Custom AI solutions tailored to your enterprise needs',
    icon: Brain,
    features: [
      'Natural language processing',
      'Computer vision',
      'Predictive modeling',
      'Intelligent automation'
    ]
  },
  {
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions for enterprise environments',
    icon: Lock,
    features: [
      'Security assessment',
      'Threat detection',
      'Incident response',
      'Compliance management'
    ]
  },
  {
    title: 'Data Analytics Platform',
    description: 'Advanced analytics platform for enterprise data insights',
    icon: BarChart3,
    features: [
      'Real-time dashboards',
      'Advanced reporting',
      'Data visualization',
      'Business intelligence'
    ]
  }
];

const industries = [
  {
    name: 'Financial Services',
    description: 'Banking, insurance, and fintech solutions',
    icon: Building2
  },
  {
    name: 'Healthcare',
    description: 'Healthcare systems and medical technology',
    icon: Users
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IoT and smart manufacturing',
    icon: Zap
  },
  {
    name: 'Retail',
    description: 'E-commerce and retail technology solutions',
    icon: Globe
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO, Global Financial Corp',
    content: 'Zion Tech Group transformed our entire IT infrastructure. Their enterprise solutions have improved our efficiency by 40% and reduced costs significantly.',
    company: 'Global Financial Corp'
  },
  {
    name: 'Michael Chen',
    title: 'VP Technology, HealthTech Solutions',
    content: 'The AI-powered analytics platform they built for us has revolutionized how we analyze patient data. The insights have been invaluable for improving patient outcomes.',
    company: 'HealthTech Solutions'
  },
  {
    name: 'David Rodriguez',
    title: 'IT Director, Manufacturing Inc',
    content: 'Their cybersecurity services gave us peace of mind. We now have enterprise-grade security that protects our sensitive manufacturing data.',
    company: 'Manufacturing Inc'
  }
];

export default function EnterpriseSolutionsPage() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions including digital transformation, AI, cybersecurity, and cloud services for large organizations."
      keywords="enterprise solutions, digital transformation, enterprise AI, cybersecurity, cloud services, large organizations"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive technology solutions designed for large organizations. Scale, secure, and transform your enterprise with our proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Enterprise Quote
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built for scale, security, and performance. Our enterprise solutions are designed to meet the complex needs of large organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-6">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
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

        {/* Enterprise Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Enterprise Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive services designed to address every aspect of your enterprise technology needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our enterprise solutions are trusted by organizations across various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {industry.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Enterprise Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from enterprise leaders who have transformed their organizations with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our enterprise experts help you design and implement solutions that will drive your organization forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}