import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Newspaper, Calendar, Download, Mail, Phone, ArrowRight, ExternalLink, FileText, Image, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered IT Solutions Platform',
      date: '2024-10-08',
      summary: 'Company introduces comprehensive AI services for businesses looking to transform their digital infrastructure.',
      category: 'Product Launch'
    },
    {
      title: 'Zion Tech Group Expands 5G Implementation Services Nationwide',
      date: '2024-09-15',
      summary: 'Leading technology company announces nationwide expansion of 5G network implementation services.',
      category: 'Business Expansion'
    },
    {
      title: 'Zion Tech Group Partners with Major Cloud Providers for Enhanced Services',
      date: '2024-08-22',
      summary: 'Strategic partnerships with AWS, Azure, and Google Cloud to provide comprehensive cloud solutions.',
      category: 'Partnership'
    },
    {
      title: 'Zion Tech Group Recognized as Top AI Solutions Provider',
      date: '2024-07-10',
      summary: 'Industry recognition for excellence in AI-powered business solutions and customer satisfaction.',
      category: 'Award'
    }
  ]

  const mediaKit = [
    {
      title: 'Company Logo Package',
      description: 'High-resolution logos in various formats and color schemes',
      icon: <Image className="w-6 h-6 text-blue-500" />,
      format: 'PNG, SVG, EPS'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of key leadership team members',
      icon: <Image className="w-6 h-6 text-green-500" />,
      format: 'JPG, PNG'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, statistics, and company information',
      icon: <FileText className="w-6 h-6 text-purple-500" />,
      format: 'PDF'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our AI and IT solutions',
      icon: <Image className="w-6 h-6 text-orange-500" />,
      format: 'PNG, JPG'
    }
  ]

  const contactInfo = [
    {
      title: 'Press Inquiries',
      email: 'press@ziontechgroup.com',
      phone: '+1 302 464 0950',
      icon: <Mail className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Media Relations',
      email: 'media@ziontechgroup.com',
      phone: '+1 302 464 0951',
      icon: <Phone className="w-5 h-5 text-green-400" />
    }
  ]

  return (
    <Layout
      title="Press & Media - Zion Tech Group"
      description="Latest news, press releases, and media resources from Zion Tech Group. Stay updated with our latest announcements and company developments."
      keywords="press, media, news, press releases, Zion Tech Group, AI solutions, IT services, company news"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Press &
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Media
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, press releases, and media resources from Zion Tech Group. 
              Discover our latest innovations and company developments.
            </p>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed about our latest announcements, product launches, and company developments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {release.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(release.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{release.title}</h3>
                  <p className="text-gray-300 mb-4">{release.summary}</p>
                  <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Media Kit
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download our media resources including logos, images, and company information for your coverage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{item.format}</span>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Media Contact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our media relations team for press inquiries, interviews, and media resources.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    {contact.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{contact.title}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-gray-400 mr-3" />
                      <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-gray-400 mr-3" />
                      <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About Zion Tech Group
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading provider of AI-powered solutions and IT services for modern businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Need More Information?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Contact our media relations team for additional information, interviews, or media resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Media Team
                  </Link>
                  <a 
                    href="mailto:press@ziontechgroup.com" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default PressPage