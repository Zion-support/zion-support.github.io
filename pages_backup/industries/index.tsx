import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Heart, 
  DollarSign, 
  Settings, 
  ShoppingCart, 
  BookOpen, 
  Building,    href: '/industries/healthcare,',
    features: ['AI Diagnostics, 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],',
    color: 'from-red-500 to-pink-500'';
  },
  {
    name: 'Finance',
    description: 'Secure financial services with blockchain technology, fraud detection, and automated trading systems.',
    icon: DollarSign,
    href: '/industries/finance',
    features: ['Blockchain Solutions', 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],
    color: 'from-green-500 to-emerald-500'    href: '/industries/manufacturing,',
    features: ['IoT Integration, 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],',
    color: 'from-blue-500 to-cyan-500'';
  },
  {
    name: 'Retail',
    description: 'Enhance customer experience with personalized recommendations, inventory management, and omnichannel solutions.',
    icon: ShoppingCart,
    href: '/industries/retail',
    features: ['Personalization', 'Inventory Management', 'Omnichannel', 'Customer Analytics'],
    color: 'from-purple-500 to-violet-500'    href: '/industries/education,',
    features: ['AI Tutoring, 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],',
    color: 'from-orange-500 to-yellow-500'';
  },
  {
    name: 'Government',
    description: 'Modernize public services with secure citizen portals, data analytics, and digital transformation.',
    icon: Building,
    href: '/industries/government',
    features: ['Citizen Portals', 'Data Analytics', 'Digital Services', 'Security Compliance'],
    color: 'from-gray-500 to-slate-500'
  }
];
const stats = [
  { number: '500+', label: 'Industry Projects' },
  { number: '50+', label: 'Fortune 500 Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Industry Support' }
];export default function IndustriesPage() {
  return (;
    <Layout);
      title="Industry Solutions - Zion Tech Group"";
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors.""
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
import Layout from '../../components/Layout';
=======

>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
const industries = [
  {
    title: 'Healthcare',
    description: 'AI-powered medical imaging, electronic health records, and telemedicine solutions',
    icon: Heart,
    features: ['Medical Imaging AI', 'EHR Systems', 'Telemedicine', 'Health Analytics'],
    href: '/industries/healthcare'
  },
  {
    title: 'Finance',
    description: 'Fraud detection, predictive analytics, and digital banking solutions',
    icon: DollarSign,
    features: ['Fraud Detection', 'Risk Analytics', 'Digital Banking', 'Compliance'],
    href: '/industries/finance'
  },
  {
    title: 'Education',
    description: 'Learning management systems, virtual classrooms, and student analytics',
    icon: BookOpen,
    features: ['LMS Platforms', 'Virtual Classrooms', 'Student Analytics', 'Content Management'],
    href: '/industries/education'
  },
  {
    title: 'Government',
    description: 'Digital government platforms, cybersecurity, and citizen services',
    icon: Building,
    features: ['Digital Platforms', 'Cybersecurity', 'Citizen Services', 'Data Analytics'],
    href: '/industries/government'
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing, quality control, and supply chain optimization',
    icon: Settings,
    features: ['Smart Manufacturing', 'Quality Control', 'Supply Chain', 'IoT Solutions'],
    href: '/industries/manufacturing'
  },
  {
    title: 'Retail',
    description: 'E-commerce platforms, inventory management, and customer analytics',
    icon: ShoppingCart,
    features: ['E-commerce', 'Inventory Management', 'Customer Analytics', 'Personalization'],
    href: '/industries/retail'
  }
];

const benefits = [
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of industry-specific challenges and requirements',
    icon: Brain
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored solutions designed for your specific industry needs',
    icon: Settings
  },
  {
    title: 'Compliance Ready',
    description: 'Solutions built with industry regulations and compliance in mind',
    icon: Shield
  },
  {
    title: 'Scalable Technology',
    description: 'Solutions that grow with your business and adapt to changing needs',
    icon: Cloud
  }
];

export default function IndustriesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>          <div className="container mx-auto px-4 relative z-10">
=======
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Specialized technology solutions designed for specific industries. 
                We understand the unique challenges and requirements of each sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD
              className="text-center mb-16"
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Industry-Specific{' '}',
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
                  Technology Solutions;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                We understand the unique challenges and requirements of different industries. Our specialized solutions;
                are designed to address sector-specific needs while ensuring compliance, security, and scalability.,
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">";
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">";
                  View All Solutions;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We provide specialized technology solutions across various industries, helping organizations leverage technology to achieve their goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {industries.map((industry, index) => {}
                const IconComponent = industry.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""                    <p className="text-gray-600 mb-6 leading-relaxed">";
                  >
                    <div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Solutions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                    <div className="mb-6">";
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Solutions:</h4>";
                      <div className="flex flex-wrap gap-2">";
                        {industry.features.map((feature, idx) => (,
                          <span}),
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full""
                          >;
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                      </div>,
                    </div>;
                    <Link
                      href={industry.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors""
                    >;
                      <span>Learn More</span>;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />";
                    </Link>;
                  </motion.div>;
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={industry.href}>
                      <a className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </motion.div>
                );
              })}
            </div>,
          </div>;
        </section>;
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Our Industry Solutions?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We combine deep industry knowledge with cutting-edge technology to deliver solutions that truly understand your business.
              </p>
            </motion.div>            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
                <p className="text-gray-600">              >,
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Shield className="w-8 h-8 text-green-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>";
                <p className="text-gray-600">";
                  We ensure all solutions meet industry-specific regulatory requirements and;
                  maintain the highest security standards.;
                </p>;
              </motion.div>;

              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
                <p className="text-gray-600">        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";
              {stats.map((stat, index) => (,
                <motion.div}),
                  key={index}
                  className="text-center""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
=======
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our industry-specific solutions and see how we can help transform your sector.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{industry.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div            >
=======

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Industry Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our industry-specific approach ensures that our solutions are perfectly tailored to your needs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry-specific solutions can help your organization achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}