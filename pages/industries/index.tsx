<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> pr-11935
import { motion } from 'framer-motion';
import Link from 'next/link';
<<<<<<< HEAD
import MainLayout from '../../src/components/layout/MainLayout';import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';
=======
import Layout from '../../components/Layout';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';
>>>>>>> pr-11914

const industries = [
  {,
    icon: Heart,
    features: ['Medical Imaging AI', 'EHR Systems', 'Telemedicine', 'Health Analytics'],
    href: '/industries/healthcare'
  },
  {,
    icon: DollarSign,
    features: ['Fraud Detection', 'Risk Analytics', 'Digital Banking', 'Compliance'],
    href: '/industries/finance'
  },
  {,
    icon: BookOpen,
    features: ['LMS Platforms', 'Virtual Classrooms', 'Student Analytics', 'Content Management'],
    href: '/industries/education'
  },
  {,
    icon: Building,
    features: ['Digital Platforms', 'Cybersecurity', 'Citizen Services', 'Data Analytics'],
    href: '/industries/government'
  },
  {,
    icon: Settings,
    features: ['Smart Manufacturing', 'Quality Control', 'Supply Chain', 'IoT Solutions'],
    href: '/industries/manufacturing'
  },
  {,
    icon: ShoppingCart,
    features: ['E-commerce', 'Inventory Management', 'Customer Analytics', 'Personalization'],
    href: '/industries/retail'
  }
];

const benefits = [
  {,
    icon: Brain
  },
  {,
    icon: Settings
  },
  {,
    icon: Shield
  },
  {,
    icon: Cloud
  }
];

export default function IndustriesPage() {
  return (
    <MainLayout
      title="Industries - Zion Tech Group"
      description="Discover how Zion Tech Group serves various industries with tailored technology solutions."
      keywords="industries, healthcare, finance, education, manufacturing, retail, government, technology solutions"
    >      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Building, 
  ShoppingCart, 
  GraduationCap, 
  DollarSign,
  Target
} from 'lucide-react';
import Layout from '../../components/Layout';

const industries = [
  {
    title: 'Healthcare',
    description: 'Transform healthcare delivery with AI-powered medical solutions.',
    icon: Heart,
    href: '/industries/healthcare',
    color: 'from-red-500 to-pink-600'
  },
  {
    title: 'Finance',
    description: 'Modernize financial services with secure banking solutions.',
    icon: DollarSign,
    href: '/industries/finance',
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Education',
    description: 'Enhance learning with educational technology solutions.',
    icon: GraduationCap,
    href: '/industries/education',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Government',
    description: 'Modernize public sector with digital government platforms.',
    icon: Building,
    href: '/industries/government',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Retail',
    description: 'Revolutionize retail with e-commerce solutions.',
    icon: ShoppingCart,
    href: '/industries/retail',
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Manufacturing',
    description: 'Optimize manufacturing with smart factory solutions.',
    icon: Target,
    href: '/industries/manufacturing',
    color: 'from-teal-500 to-blue-600'
  }
];

export default function Industries() {
  return (
    <Layout>
      <Head>
        <title>Industries - Zion Tech Group</title>
        <meta name="description" content="Discover how we serve different industries with tailored technology solutions." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
>>>>>>> pr-11913
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
<<<<<<< HEAD
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
    </MainLayout>
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we serve different industries with tailored technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={industry.href}>
                        <div className="p-8">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                            <IconComponent className={`w-8 h-8 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`} />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                          <p className="text-gray-600">{industry.description}</p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}