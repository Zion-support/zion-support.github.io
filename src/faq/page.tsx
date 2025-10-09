'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQPage: React.FC = () =>{
  const [searchTerm, setSearchTerm] = useState('')
  const [openItems, setOpenItems] = useState<number[]>([])
    }
      return (
    <>
      <Navigation />
      <div>
        <div>
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our AI and IT services, pricing, and support.
            </p>
            
            {/* Search Bar */}
            <div>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>
          {/* FAQ Content */}
          <div>
            {filteredData.map((category, categoryIndex) => (
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 neon-text">
                  {category.category}
                </h2>
                <div>
                  {category.questions.map((item, itemIndex) => {
                                                            return (
                      <div>
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                        >
                          <span className="text-white font-medium pr-4">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div>
                            <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>)
                  })}
                </div>
              </div>
            ))}
          </div>
          {/* Contact CTA */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
            </p>
            <div>
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />Call (302) 464-0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />Email Us</a>
              <a
                href="/contact"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />Contact Form</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);
}
export default FAQPage