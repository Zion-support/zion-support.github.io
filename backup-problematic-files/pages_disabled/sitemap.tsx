import Head from 'next/head';
import Link from 'next/link';
import { 
  Map, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import Layout from './components/Layout';

const mainPages = [
  { name: 'Home', href: '/', description: 'Main landing page' },
  { name: 'About Us', href: '/about', description: 'Learn about our company' },
  { name: 'Services', href: '/services', description: 'Our technology services' },
  { name: 'Solutions', href: '/solutions', description: 'Industry solutions' },
  { name: 'Pricing', href: '/pricing', description: 'Service pricing' },
  { name: 'Contact', href: '/contact', description: 'Get in touch' },
  { name: 'Get Quote', href: '/quote', description: 'Request a quote' }
];

const servicePages = [
  { name: 'AI Services', href: '/ai-services', description: 'Machine Learning, NLP, Computer Vision' },
  { name: 'IT Services', href: '/it-services', description: 'Cloud, DevOps, Cybersecurity' },
  { name: 'Micro SaaS', href: '/micro-saas', description: 'Custom SaaS Solutions' },
  { name: 'Blockchain', href: '/blockchain', description: 'Smart Contracts, DeFi, NFTs' },
  { name: 'IoT Solutions', href: '/iot', description: 'Connected Devices, Edge Computing' },
  { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security Audits, Compliance' },
  { name: 'Cloud Solutions', href: '/cloud-solutions', description: 'Cloud Infrastructure & Migration' },
  { name: 'Data Analytics', href: '/data-analytics', description: 'Business Intelligence & Analytics' }
];

const solutionPages = [
  { name: 'Enterprise Solutions', href: '/enterprise', description: 'Large-scale business solutions' },
  { name: 'Startup Solutions', href: '/solutions/startup', description: 'Scalable startup platforms' },
  { name: 'E-commerce', href: '/ecommerce', description: 'Online store solutions' },
  { name: 'Custom Solutions', href: '/solutions/custom', description: 'Tailored technology solutions' },
  { name: 'Cloud Migration', href: '/solutions/cloud-migration', description: 'Cloud migration services' },
  { name: 'Industry Solutions', href: '/solutions/industry', description: 'Industry-specific solutions' }
];

const industryPages = [
  { name: 'Healthcare', href: '/industries/healthcare', description: 'Medical technology solutions' },
  { name: 'Finance', href: '/industries/finance', description: 'Fintech and banking solutions' },
  { name: 'Education', href: '/industries/education', description: 'EdTech platforms' },
  { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Industrial technology solutions' },
  { name: 'Retail', href: '/industries/retail', description: 'Retail technology solutions' },
  { name: 'Real Estate', href: '/industries/real-estate', description: 'Real estate technology' },
  { name: 'Government', href: '/industries/government', description: 'Government technology solutions' }
];

const resourcePages = [
  { name: 'Blog', href: '/blog', description: 'Technology insights and news' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories and projects' },
  { name: 'White Papers', href: '/white-papers', description: 'Technical documentation' },
  { name: 'Tutorials', href: '/tutorials', description: 'Learning resources' },
  { name: 'Webinars', href: '/webinars', description: 'Educational webinars' },
  { name: 'Events', href: '/events', description: 'Industry events and conferences' },
  { name: 'News', href: '/news', description: 'Company news and updates' },
  { name: 'Support', href: '/support', description: 'Technical support and help' }
];

const companyPages = [
  { name: 'Our Team', href: '/team', description: 'Meet our expert team' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'Partners', href: '/partners', description: 'Our technology partners' },
  { name: 'Training', href: '/training', description: 'Professional training programs' }
];

const legalPages = [
  { name: 'Privacy Policy', href: '/privacy', description: 'How we protect your data' },
  { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
  { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage information' }
];

export default function SitemapPage() {
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all our services, solutions, and resources in one place."
      keywords="sitemap, website navigation, all pages, services, solutions, resources"
      canonical="https://ziontechgroup.com/sitemap"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Sitemap</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find all our services, solutions, and resources organized in one place.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Main Pages */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-blue-600" />
                  Main Pages
                </h2>
                <div className="space-y-3">
                  {mainPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-500">{page.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  Services
                </h2>
                <div className="space-y-3">
                  {servicePages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-green-600">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-500">{page.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Map className="w-6 h-6 mr-3 text-purple-600" />
                  Solutions
                </h2>
                <div className="space-y-3">
                  {solutionPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-purple-600">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-500">{page.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Industries */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-orange-600" />
                  Industries
                </h2>
                <div className="space-y-3">
                  {industryPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-orange-600">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-500">{page.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-indigo-600" />
                  Resources
                </h2>
                <div className="space-y-3">
                  {resourcePages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50 transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-indigo-600">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-500">{page.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Company & Legal */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-gray-600" />
                  Company & Legal
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Company</h3>
                    <div className="space-y-2">
                      {companyPages.map((page, index) => (
                        <Link
                          key={index}
                          href={page.href}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-gray-600">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-500">{page.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal</h3>
                    <div className="space-y-2">
                      {legalPages.map((page, index) => (
                        <Link
                          key={index}
                          href={page.href}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-gray-600">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-500">{page.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Our team is here to help you find the right solution for your technology needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Contact Us
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}