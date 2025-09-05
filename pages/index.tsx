import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Building, 
  TrendingUp,
  Cloud,
  Network,
  Shield,
  Zap,
  Globe,
  Code,
  Database,
  Settings
} from 'lucide-react';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '1,200+', label: 'Projects Completed' },
  { number: '235+', label: 'Services & Solutions' },
  { number: '95+', label: 'Expert Team Members' },
  { number: '15+', label: 'Years Experience' }
];

const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions",
    icon: Brain,
    href: "/ai-services",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "IT Services", 
    description: "Comprehensive information technology services",
    icon: Network,
    href: "/it-services",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions",
    icon: Cloud,
    href: "/micro-saas",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure",
    icon: Database,
    href: "/cloud-solutions",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cybersecurity",
    description: "Advanced security solutions and protection",
    icon: Shield,
    href: "/cybersecurity",
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Custom Development",
    description: "Tailored software development solutions",
    icon: Code,
    href: "/custom-development",
    color: "from-indigo-500 to-purple-500"
  }
];

const features = [
  {
    title: "Expert Team",
    description: "Highly skilled professionals with years of experience",
    icon: Users
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support for all your needs",
    icon: Globe
  },
  {
    title: "Cutting-Edge Technology",
    description: "Latest technologies and innovative solutions",
    icon: Zap
  },
  {
    title: "Proven Results",
    description: "Track record of successful project deliveries",
    icon: Award
  }
];

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - AI & IT Solutions"
      description="Leading provider of AI services, IT solutions, and micro SaaS platforms. Transform your business with cutting-edge technology and expert support."
      keywords="AI services, IT solutions, micro SaaS, cloud computing, cybersecurity, software development, technology consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  AI & Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Leading provider of AI services, IT solutions, and micro SaaS platforms. 
                We help businesses leverage cutting-edge technology to achieve their goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions to help your business thrive in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href={service.href}
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our expertise, innovation, and commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and technology solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call: +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-sm opacity-90">
                <p>📧 Email: kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}