<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
>>>>>>> pr-11913
import { 
  Home, 
  Users, 
  Briefcase, 
<<<<<<< HEAD
  Phone, 
  Mail, 
  Phone as PhoneIcon, 
  MapPin, 
  Globe,
  ArrowRight
} from 'lucide-react';

const sitemapData = {
  main: [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Products', href: '/products', icon: Globe },
    { name: 'Contact', href: '/contact', icon: Phone }
  ],
  services: [
    { name: 'AI Services', href: '/services/ai' },
    { name: 'Cloud Computing', href: '/services/cloud' },
    { name: 'Micro SaaS', href: '/services/saas' },
    { name: 'Security', href: '/security' }
  ],
  products: [
    { name: 'AI Email Responder', href: '/products/ai-email-responder' },
    { name: 'Cloud Infrastructure', href: '/products/cloud-infrastructure' },
    { name: 'Security Suite', href: '/products/security-suite' },
    { name: 'Micro SaaS Platform', href: '/products/micro-saas-platform' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Guides', href: '/guides' },
    { name: 'Help', href: '/help' },
    { name: 'API Documentation', href: '/api-docs' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Newsletter', href: '/newsletter' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
};

export default function SitemapPage() {
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Navigate our website easily with our comprehensive sitemap. Find all pages and resources in one place."
      keywords="sitemap, navigation, website map, pages, resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive sitemap
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Main Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Navigation</h2>
                  <ul className="space-y-3">
                    {sitemapData.main.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
                  <ul className="space-y-3">
                    {sitemapData.services.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Products */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Products</h2>
                  <ul className="space-y-3">
                    {sitemapData.products.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
                  <ul className="space-y-3">
                    {sitemapData.resources.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Company</h2>
                  <ul className="space-y-3">
                    {sitemapData.company.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal</h2>
                  <ul className="space-y-3">
                    {sitemapData.legal.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
=======
  Phone as PhoneIcon, 
  Globe, 
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const sitemapData = {
  main: [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ],
  services: [
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Cloud Migration', href: '/services/cloud-migration' },
    { name: 'Custom Development', href: '/services/custom-development' },
    { name: 'Digital Transformation', href: '/services/digital-transformation' }
  ],
  industries: [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Manufacturing', href: '/industries/manufacturing' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Guides', href: '/guides' },
    { name: 'FAQ', href: '/faq' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' }
  ]
};

export default function Sitemap() {
  return (
    <Layout>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Navigate our website easily with our comprehensive sitemap.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(sitemapData).map(([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    className="bg-white rounded-xl shadow-lg p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                      {category === 'main' ? 'Main Pages' : 
                       category === 'services' ? 'Services' :
                       category === 'industries' ? 'Industries' :
                       category === 'resources' ? 'Resources' : 'Legal'}
                    </h2>
                    
                    <ul className="space-y-3">
                      {links.map((link, linkIndex) => {
                        const IconComponent = link.icon;
                        return (
                          <li key={linkIndex}>
                            <Link
                              href={link.href}
                              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            >
                              {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                              {link.name}
                              <ArrowRight className="w-4 h-4 ml-auto" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                ))}
>>>>>>> pr-11913
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-gray-600">info@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-gray-600">San Francisco, CA</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our search function or contact us directly for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  Search
                </button>
                <Link
                  href="/contact"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
>>>>>>> pr-11913
    </Layout>
  );
}