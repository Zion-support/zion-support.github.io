<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Building2, 
  Shield, 
  Cloud, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  BarChart3,
  Lock,
  Globe
} from 'lucide-react';

const stats = [
  { number: '500+', label: 'Enterprise Clients' },
  { number: '200+', label: 'Projects Delivered' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

const enterpriseFeatures = [
  {
    title: 'Scalable Infrastructure',
    description: 'Enterprise-grade infrastructure that scales with your business needs.',
    icon: Cloud,
    features: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Global deployment']
  },
  {
    title: 'Advanced Security',
    description: 'Comprehensive security measures to protect your enterprise data.',
    icon: Shield,
    features: ['End-to-end encryption', 'Access controls', 'Audit logging', 'Compliance']
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics and insights powered by artificial intelligence.',
    icon: Brain,
    features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Machine learning']
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support from our expert team.',
    icon: Users,
    features: ['Dedicated support', 'Priority response', 'On-site assistance', 'Training']
  }
];

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions for large-scale businesses" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed for large-scale enterprises and organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact">
            <a className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
=======
<<<<<<< HEAD
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Users, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Globe, 
  Database, 
  Lock 
} from 'lucide-react';
>>>>>>> main

const features = [
  {
    title: 'Scalable Architecture',
    description: 'Enterprise-grade infrastructure that grows with your business',
    icon: Building,
    benefits: ['Auto-scaling', 'High availability', 'Load balancing', 'Disaster recovery']
  },
  {
    title: 'Security & Compliance',
    description: 'Bank-level security with comprehensive compliance features',
    icon: Shield,
    benefits: ['Data encryption', 'Access control', 'Audit trails', 'Compliance reporting']
  },
  {
    title: 'User Management',
    description: 'Advanced user management and role-based access control',
    icon: Users,
    benefits: ['User provisioning', 'Role management', 'Single sign-on', 'Multi-factor auth']
  },
  {
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics and reporting for enterprise insights',
    icon: BarChart3,
    benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Export capabilities']
  }
];

export default function EnterpriseSolutionsPage() {
  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade technology solutions including scalable architecture, security, user management, and analytics." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Enterprise Solutions</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Enterprise-grade technology solutions designed for large organizations. 
                Scalable, secure, and reliable infrastructure for your business.
              </p>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";
              {stats.map((stat, index) => (,
                <motion.div}),
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>"
                  <div className="text-gray-600 font-medium">{stat.label}</div>"
                </motion.div>;
              ))}

        {/* Features Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8""
                >;
                  <div className="flex items-center mb-6">";
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">";
                      <feature.icon className="w-8 h-8 text-white" />";
                    </div>;
                    <div>;
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>"
                      <p className="text-gray-600">{feature.description}</p>"
                    </div>;
                  </div>;

                  <ul className="space-y-3">";
                    {feature.benefits.map((benefit, benefitIndex) => (,
                      <li key={benefitIndex} className="flex items-center text-gray-600">"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />";
                        {benefit}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Capabilities Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
=======

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our enterprise solutions are built to meet the demanding requirements of large organizations.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
>>>>>>> main

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Enterprise Solutions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our enterprise solutions can support your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> main
>>>>>>> main
  );
}