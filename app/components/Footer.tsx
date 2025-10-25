'use client'
import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const aiServices = [
    { name: 'AI Chatbot', url: '/ai-chatbot-builder' },
    { name: 'AI Analytics', url: '/ai-analytics-dashboard' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Content Generator', url: '/ai-content-generator' },
    { name: 'AI Customer Support', url: '/ai-customer-support' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing' },
    { name: 'AI Financial Analytics', url: '/ai-financial-analytics-pro' },
    { name: 'AI Healthcare', url: '/ai-healthcare' },
    { name: 'AI HR Assistant', url: '/ai-hr-assistant' },
    { name: 'AI Marketing', url: '/ai-marketing' },
    { name: 'AI Project Management', url: '/ai-project-management' },
    { name: 'AI Quality Assurance', url: '/ai-quality-assurance' },
    { name: 'AI Real Estate', url: '/ai-real-estate' },
    { name: 'AI Robotics', url: '/ai-robotics' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation' },
    { name: 'AI Supply Chain', url: '/ai-supply-chain' },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant' },
    { name: 'AI Website Builder', url: '/ai-website-builder' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant' },
    { name: 'Predictive Analytics', url: '/predictive-analytics' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant' }
  ]

  const itServices = [
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights' },
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things' },
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology' }
  ];

  const microSaas = [
    { name: 'AI Email Marketing', url: '/micro-saas/ai-email-marketing-automation', description: 'Email automation' },
    { name: 'AI Inventory Manager', url: '/micro-saas/ai-inventory-manager', description: 'Inventory tracking' },
    { name: 'AI Project Manager', url: '/micro-saas/ai-project-manager', description: 'Project management' },
    { name: 'AI Social Scheduler', url: '/micro-saas/ai-social-media-scheduler', description: 'Social media' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ]

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 text-sm mb-4">
              Leading provider of AI and IT solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link href={service.url} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.url} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaas.map((service) => (
                <li key={service.name}>
                  <Link href={service.url} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with Next.js and AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
