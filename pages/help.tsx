import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search,
  HelpCircle,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Download,
  ExternalLink
} from 'lucide-react'

const helpSections = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    items: [
      { title: 'Account Setup', description: 'Learn how to set up your account', href: '/help/account-setup' },
      { title: 'First Steps', description: 'Get started with our platform', href: '/help/first-steps' },
      { title: 'Basic Configuration', description: 'Configure your basic settings', href: '/help/basic-config' }
    ]
  },
  {
    title: 'Support',
    icon: HelpCircle,
    items: [
      { title: 'Contact Support', description: 'Get help from our support team', href: '/contact' },
      { title: 'Live Chat', description: 'Chat with us in real-time', href: '/help/chat' },
      { title: 'Phone Support', description: 'Call us for immediate assistance', href: '/help/phone' }
    ]
  },
  {
    title: 'Resources',
    icon: FileText,
    items: [
      { title: 'Documentation', description: 'Comprehensive documentation', href: '/docs' },
      { title: 'Video Tutorials', description: 'Watch step-by-step tutorials', href: '/help/videos' },
      { title: 'Download Center', description: 'Download tools and resources', href: '/help/downloads' }
    ]
  }
]

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredSections = helpSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0)

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-xl text-gray-600">Find answers and get support</p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-blue-600 text-white px-6 py-4">
                  <div className="flex items-center">
                    <section.icon size={24} className="mr-3" />
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <Link key={itemIndex} href={item.href}>
                        <a className="block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSections.length === 0 && (
            <div className="text-center py-12">
              <Search className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No help articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms</p>
            </div>
          )}

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
              <p className="text-gray-600 mb-6">Our support team is here to help you</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <MessageCircle size={20} className="mr-2" />
                    Contact Support
                  </a>
                </Link>
                <Link href="/help/chat">
                  <a className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone size={20} className="mr-2" />
                    Live Chat
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}