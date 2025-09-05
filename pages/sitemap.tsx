import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Users, Briefcase, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'

const sitemapData = {
  main: [{ name: 'Home', href: '/', icon: Home }, ;
    { name: 'About', href: '/about', icon: Users }, ;
    { name: 'Services', href: '/services', icon: Briefcase }, ;
    { name: 'Contact', href: '/contact', icon: PhoneIcon }],;
  services: [{ name: 'AI Solutions', href: '/services/ai-solutions' }, ;
    { name: 'Cloud Migration', href: '/services/cloud-migration' }, ;
    { name: 'Custom Development', href: '/services/custom-development' }, ;
    { name: 'Digital Transformation', href: '/services/digital-transformation' }],;
  industries: [{ name: 'Healthcare', href: '/industries/healthcare' }, ;
    { name: 'Finance', href: '/industries/finance' }, ;
    { name: 'Education', href: '/industries/education' }, ;
    { name: 'Government', href: '/industries/government' }, ;
    { name: 'Retail', href: '/industries/retail' }, ;
    { name: 'Manufacturing', href: '/industries/manufacturing' }],;
  resources: [{ name: 'Blog', href: '/blog' }, ;
    { name: 'Case Studies', href: '/case-studies' }, ;
    { name: 'News', href: '/news' }, ;
    { name: 'Guides', href: '/guides' }, ;
    { name: 'FAQ', href: '/faq' }],;
  legal: [{ name: 'Privacy Policy', href: '/privacy' }, ;
    { name: 'Terms of Service', href: '/terms' }, ;
    { name: 'Cookie Policy', href: '/cookies' }, ;
    { name: 'Security', href: '/security' }]}

export default function Sitemap() {
  return(<Layout>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap."  />
      </Head>
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
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
                { Object.entries(sitemapData).map(([category, links], categoryIndex) => (;
                  <motion.div;
                    key={category }
                    className="bg-white rounded-xl shadow-lg p-8"
                    initial={{opacity: 0, y: 30 }}
                    whileInView={{opacity: 1, y: 0 }}
                    transition={{duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{once: true }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                      { category === 'main' ? 'Main Pages' :;
                       category === 'services' ? 'Services' :;
                       category === 'industries' ? 'Industries' :;
                       category === 'resources' ? 'Resources' : 'Legal' }
                    </h2>
                    <ul className="space-y-3">
                      { links.map((link, linkIndex) => {
                        const IconComponent = link.icon;
                        return(<li key={linkIndex }>
                            <Link
                              href={ link.href }
                              className="flex items-center text-gray-600 hover: text-blue-600 transition-colors duration-300"
                            >
                              { IconComponent && <IconComponent className="w-4 h-4 mr-2" /> }
                              { link.name }
                              <ArrowRight className="w-4 h-4 ml-auto"  />
                            </Link>
                          </li>)})}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Can't Find What You're Looking For?;
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our search function or contact us directly for assistance.;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
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
    </Layout>
  )
}