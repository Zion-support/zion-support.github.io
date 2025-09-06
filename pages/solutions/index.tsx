<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Rocket, 
  BarChart3, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  Globe,
  Target
} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    title: "Enterprise Solutions",
    description: "Comprehensive technology solutions for large organizations",
    icon: Building,
    href: "/solutions/enterprise",
    features: [
      "Scalable Infrastructure",
      "Enterprise Security",
      "Custom Integration",
      "24/7 Support"
    ],
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Startup Solutions",
    description: "Rapid deployment solutions for growing startups",
    icon: Rocket,
    href: "/solutions/startup",
    features: [
      "Quick Setup",
      "Cost Effective",
      "Scalable Growth",
      "Expert Guidance"
    ],
    color: "from-green-600 to-green-800"
  },
  {
    title: "Industry Solutions",
    description: "Specialized solutions for specific industries",
    icon: BarChart3,
    href: "/solutions/industry",
    features: [
      "Industry Expertise",
      "Compliance Ready",
      "Custom Workflows",
      "Best Practices"
    ],
    color: "from-purple-600 to-purple-800"
  },
  {
    title: "Custom Development",
    description: "Tailored solutions built specifically for your needs",
    icon: Settings,
    href: "/solutions/custom",
    features: [
      "Bespoke Development",
      "Unique Requirements",
      "Full Ownership",
      "Ongoing Support"
    ],
    color: "from-orange-600 to-orange-800"
  }
];

const industries = [
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance", icon: "🏦" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Retail", icon: "🛍️" },
  { name: "Education", icon: "🎓" },
  { name: "Government", icon: "🏛️" }
];

const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '50+', label: 'Industries Served' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

export default function SolutionsPage() {
  return (
    <Layout 
      title="Solutions - Zion Tech Group"
      description="Comprehensive technology solutions for enterprises, startups, and industries. Custom development and specialized services."
      keywords="enterprise solutions, startup solutions, custom development, industry solutions, technology consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                Technology Solutions for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Every Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                From startups to enterprises, we provide tailored technology solutions that drive growth, 
                efficiency, and innovation across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Custom Solution
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
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
                Our Solution Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We offer comprehensive technology solutions tailored to different business needs and stages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={solution.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"
                    >
                      <span>Explore {solution.title}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our solutions are designed to meet the unique challenges and requirements of various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your specific needs and create a custom solution that drives your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
          </p>
        </div>

        {/* Solutions Grid */}
        <div className='space-y-16'>
          {solutions.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className='bg-white rounded-2xl shadow-xl p-8'
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
                {category.category}
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {category.solutions.map((solution, solutionIndex) => (
                  <div
                    key={solutionIndex}
                    className='bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-100'
                  >
                    <div className='text-4xl mb-4'>{solution.icon}</div>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                      {solution.name}
                    </h3>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                      {solution.description}
                    </p>

                    <div className='mb-4'>
                      <h4 className='font-semibold text-gray-800 mb-2'>
                        Use Cases:
                      </h4>
                      <ul className='space-y-1'>
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <li
                            key={useCaseIndex}
                            className='text-sm text-gray-600 flex items-center'
                          >
                            <span className='text-purple-500 mr-2'>•</span>                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className='mb-4'>
                      <h4 className='font-semibold text-gray-800 mb-2'>
                        Key Benefits:
                      </h4>
                      <ul className='space-y-1'>
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className='text-sm text-gray-600 flex items-center'
                          >
                            <span className='text-green-500 mr-2'>✓</span>                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className='mb-4'>
                      <span className='inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold'>                        Starting at {solution.pricing}
                      </span>
                    </div>

                    <Link
                      href={solution.link}
                      className='inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center'                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className='bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mt-16 text-center text-white'>
          <h2 className='text-3xl font-bold mb-4'>Success Stories</h2>
          <p className='text-xl mb-6 opacity-90'>
            See how our solutions have transformed businesses across industries
          </p>
          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div>
              <h3 className='font-semibold mb-2'>🏥 Healthcare Provider</h3>
              <p>40% reduction in diagnostic time with AI-powered imaging</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>🏭 Manufacturing Company</h3>
              <p>60% decrease in downtime with IoT predictive maintenance</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>🏦 Financial Institution</h3>
              <p>80% reduction in fraud losses with AI risk assessment</p>
            </div>
          </div>
          <Link
            href='/contact'
            className='bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors'          >
            View Case Studies
          </Link>
        </div>

        {/* Custom Solutions Section */}
        <div className='mt-16 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Need a Custom Solution?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Can't find exactly what you need? Our expert team can design and
            develop custom solutions tailored to your specific requirements and
            industry challenges.
          </p>
          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div className='text-center'>
              <div className='text-4xl mb-4'>🔧</div>
              <h3 className='text-xl font-semibold mb-2'>Custom Development</h3>
              <p className='text-gray-600'>
                Tailored solutions built from the ground up
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl mb-4'>🔗</div>
              <h3 className='text-xl font-semibold mb-2'>System Integration</h3>
              <p className='text-gray-600'>
                Seamless integration with existing systems
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl mb-4'>📚</div>
              <h3 className='text-xl font-semibold mb-2'>Training & Support</h3>
              <p className='text-gray-600'>
                Comprehensive training and ongoing support
              </p>
            </div>
          </div>
          <Link
            href='/contact'
            className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'          >
            Discuss Custom Solutions
          </Link>
        </div>

        {/* Contact Section */}
        <div className='mt-16 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Let's discuss how our industry-specific solutions can address your
            unique challenges and drive measurable business outcomes.
          </p>
          <div className='flex justify-center gap-4 mb-8'>
            <Link
              href='/contact'
              className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              Schedule Consultation
            </Link>
            <Link
              href='/contact'
              className='bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors'            >
              Request Demo
            </Link>
          </div>
          <div className='grid md:grid-cols-3 gap-6 text-sm text-gray-600'>
            <div>
              <h3 className='font-semibold mb-2'>📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>🌐 Website</h3>              <p>https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  ),
};

export default SolutionsPage;
<<<<<<< HEAD
=======
  )
};

export default SolutionsPage;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default SolutionsPage;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
