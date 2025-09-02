import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
export default function SitemapPage() {
  const siteStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        {
          name: 'About',
          url: '/about',
          description: 'Learn about our company',
        },
        {
          name: 'Services',
          url: '/services',
          description: 'Our technology services',
        },
        {
          name: 'Contact',
          url: '/contact',
          description: 'Get in touch with us',
        },
      ],
    },
    {
      title: 'Services',
      links: [
        {
          name: 'AI Development',
          url: '/ai-services',
          description: 'Artificial Intelligence solutions',
        },
        {
          name: 'Web Development',
          url: '/web-development',
          description: 'Custom web applications',
        },
        {
          name: 'Cloud Services',
          url: '/cloud-services',
          description: 'Cloud infrastructure and migration',
        },
        {
          name: 'Mobile Development',
          url: '/mobile-development',
          description: 'iOS and Android apps',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          name: 'Blog',
          url: '/blog',
          description: 'Technology insights and updates',
        },
        {
          name: 'Case Studies',
          url: '/case-studies',
          description: 'Success stories and examples',
        },
        {
          name: 'Documentation',
          url: '/docs',
          description: 'Technical documentation',
        },
        {
          name: 'Support',
          url: '/support',
          description: 'Help and support center',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        {
          name: 'Privacy Policy',
          url: '/privacy',
          description: 'Privacy and data protection',
        },
        {
          name: 'Terms of Service',
          url: '/terms',
          description: 'Terms and conditions',
        },
        {
          name: 'Sitemap',
          url: '/sitemap',
          description: 'Complete site navigation',
        },
      ],
    },
  ];
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Complete overview of all pages and sections on the Zion Tech Group website."
    >
      <Head>
        <title>Sitemap - Zion Tech Group</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Site
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}
                Navigation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete overview of all pages and sections on the Zion Tech Group
              website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Sitemap className="h-5 w-5 mr-2 text-blue-600" />
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <a
                            href={link.url}
                            className="text-blue-600 hover: text-blue-800 font-medium"
                          >
                            {link.name}
                          </a>
                          <p className="text-sm text-gray-600">
                            {link.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
