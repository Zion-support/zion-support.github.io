'use client',
import React, { useState } from 'react',
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  CheckCircle, 
  Search,
  Clock,
  FileText,
  Video,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Star,
  Users,
  Shield,
  Zap,
} from 'lucide-react',

      <Navigation />
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8"></section>
            <div className="relative"></div>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input,
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                <div className={`w-16 h-16 ${channel.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <channel.icon className={`w-8 h-8 ${channel.color}`} />
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3><p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get Help Now</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{supportChannels.map((channel, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform"></div>
                <div className={`w-16 h-16 ${channel.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}></div>
                  <channel.icon className={`w-8 h-8 ${channel.color}`} />
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3><p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Availability:</span><span className="text-cyan-400">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Response:</span><span className="text-cyan-400">{channel.responseTime}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-8"></section>
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2><p className="text-gray-300 mb-6">Find answers to common questions</p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">{categories.map((category) => (</div><button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  key={category.name}
                  onClick={() =>setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.name,
                      ? 'bg-cyan-500 text-white'}
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
                  }`}
                ></button>
                  {category.label} ({category.count})</button>
                </button>
              ))}
            <div className="max-w-4xl mx-auto space-y-4">{filteredFaqs.map((faq) => (</div>
              <div key={faq.id} className="cyber-card p-6"></div>
                <div className="flex items-start justify-between"></div>
                  <div className="flex-1"></div>
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3><p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                  <div className="ml-4 flex items-center space-x-2"></div>
                    <div className="flex items-center text-sm text-gray-400"></div>
                      <Star className="w-4 h-4 text-yellow-400 mr-1" >{faq.helpful}%</Star>
                    </Star>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
              <Link
                key={index}
                to={resource.link}
                className="cyber-card p-6 text-center group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"></div>
                  <resource.icon className="w-8 h-8 text-white" />
                <div className="flex items-center justify-center text-cyan-400 text-sm">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{resource.title}</h3><p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center justify-center text-cyan-400 text-sm"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <span>{resource.type}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover: translate-x-1 transition-transform" />,
                </div>,
              </Link>,
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2><p className="text-xl text-gray-300 mb-8">Our support team is standing by to help you succeed. Get in touch with us today.</p>
            </p>
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"
              >
            </div>
          </div>
        </section>
      </main>

      <Footer />,
    </div>,
import React from 'react';


const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Support</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Help</h2>
          <p className="text-gray-600 mb-4">We're here to help you with any questions or issues.</p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Email Support</h3>
              <p className="text-gray-600">support@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Phone Support</h3>
              <p className="text-gray-600">+1 (302) 464-0950</p>
            </div>
          </div>
        </div>
      </div>

    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  ),
},

export default SupportPage,
