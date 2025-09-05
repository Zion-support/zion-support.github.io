import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Lock,
  Globe,
  BarChart3,
  Settings,
  Award,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 Type II compliance, end-to-end encryption, and advanced threat protection.",
    icon: Shield,
    benefits: ["SOC 2 Type II Certified", "End-to-End Encryption", "Advanced Threat Protection", "Regular Security Audits"]
  },
  {
    title: "Scalable Architecture",
    description: "Cloud-native solutions that scale seamlessly with your business growth and changing requirements.",
    icon: Building,
    benefits: ["Auto-scaling Infrastructure", "Load Balancing", "High Availability", "Global CDN"]
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support with dedicated account managers and priority response times.",
    icon: Clock,
    benefits: ["Dedicated Account Manager", "Priority Support", "SLA Guarantees", "Proactive Monitoring"]
  },
  {
    title: "Custom Integration",
    description: "Seamless integration with your existing enterprise systems and third-party applications.",
    icon: Settings,
    benefits: ["API-First Design", "Legacy System Integration", "Third-party Connectors", "Custom Workflows"]
  }
];

const industries = [
  { name: "Fortune 500 Companies", count: "50+", description: "Large enterprises across various industries" },
  { name: "Financial Services", count: "25+", description: "Banks, insurance, and fintech companies" },
  { name: "Healthcare", count: "30+", description: "Hospitals, clinics, and healthcare providers" },
  { name: "Manufacturing", count: "20+", description: "Industrial and manufacturing companies" },
  { name: "Government", count: "15+", description: "Federal and state government agencies" },
  { name: "Education", count: "40+", description: "Universities and educational institutions" }
];

const solutions = [
  {
    title: "Enterprise AI Platform",
    description: "Comprehensive AI solution with machine learning, natural language processing, and predictive analytics.",
    features: ["Machine Learning Models", "NLP Processing", "Predictive Analytics", "Real-time Insights"],
    pricing: "Custom Pricing"
  },
  {
    title: "Cloud Infrastructure Management",
    description: "Complete cloud infrastructure setup, management, and optimization for enterprise workloads.",
    features: ["Multi-cloud Support", "Cost Optimization", "Security Hardening", "Disaster Recovery"],
    pricing: "Starting at $10,000/month"
  },
  {
    title: "Enterprise Security Suite",
    description: "Comprehensive security solution including threat detection, compliance monitoring, and incident response.",
    features: ["Threat Detection", "Compliance Monitoring", "Incident Response", "Security Training"],
    pricing: "Starting at $5,000/month"
  },
  {
    title: "Custom Enterprise Software",
    description: "Bespoke software solutions built specifically for your enterprise requirements and workflows.",
    features: ["Custom Development", "Full Ownership", "Ongoing Support", "Future Enhancements"],
    pricing: "Project-based"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO, Global Finance Corp",
    content: "Zion Tech Group transformed our entire IT infrastructure. Their enterprise solutions are robust, secure, and perfectly tailored to our needs.",
    rating: 5
  },
  {
    name: "Michael Chen",
    title: "VP Technology, HealthTech Solutions",
    content: "The AI platform they built for us has revolutionized our patient care processes. The ROI has been exceptional.",
    rating: 5
  },
  {
    name: "David Rodriguez",
    title: "IT Director, Manufacturing Giant",
    content: "Their cloud infrastructure management has reduced our costs by 40% while improving performance and security.",
    rating: 5
  }
];

export default function EnterpriseSolutionsPage() {
  return (
    <MainLayout 
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions with enterprise-grade security, scalability, and 24/7 support for large organizations."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise-Grade{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive technology solutions designed for large organizations with complex requirements, 
                enterprise-grade security, and mission-critical reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Schedule Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">SOC 2</div>
                <div className="text-gray-600">Type II Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our enterprise solutions are built with the highest standards of security, reliability, and scalability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
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
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
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
                Trusted by Leading Enterprises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We serve enterprise clients across various industries with proven track records of success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {industry.name}
                    </h3>
                    <span className="text-2xl font-bold text-blue-600">
                      {industry.count}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for enterprise requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">
                      {solution.pricing}
                    </span>
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                What Our Enterprise Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from enterprise leaders who have transformed their businesses with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
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
                Ready to Scale Your Enterprise?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your enterprise requirements and create a custom solution that drives real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Schedule Enterprise Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Enterprise Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}