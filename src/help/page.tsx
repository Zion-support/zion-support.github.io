'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HelpPage: React.FC = () =>{
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started')
              }
    return (
    <>
      <Navigation />
      <div>
        <div>
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Help Center</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers, get support, and learn how to make the most of our AI and IT services. 
              We're here to help you succeed.
            </p>
          </div>
          {/* Search */}
          <div>
            <div>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-lg"
              />
            </div>
          </div>
          {/* Categories */}
          <div>
            <div>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.bgColor} ${category.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Articles */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">{categories.find(cat => cat.id === activeCategory)?.name} Articles</h2>
            <div>
              {filteredArticles.map((article, index) => (
                <div>
                  <div>
                    <div>
                      <article.icon className={`w-5 h-5 ${article.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{article.description}</p>
                    </div>
                  </div>
                  <div>
                    <span>{article.readTime}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {article.difficulty}
                    </span>
                  </div>
                  <button className="w-full text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors flex items-center justify-center">Read Article<ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Resources */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Additional Resources</h2>
            <div>
              {resources.map((resource, index) => (
                <div>
                  <div>
                    <resource.icon className={`w-8 h-8 ${resource.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
                  <div className="text-cyan-400 text-sm font-medium">{resource.count}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Support Channels */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Get Support</h2>
            <div>
              {supportChannels.map((channel, index) => (
                <div>
                  <div>
                    <channel.icon className={`w-8 h-8 ${channel.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                  <div>
                    <div className="font-medium">Availability: {channel.availability}</div>
                    <div>Response: {channel.responseTime}</div>
                  </div>
                  <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors text-sm font-medium">Contact Now</button>
                </div>
              ))}
            </div>
          </div>
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Frequently Asked Questions</h2>
            <div>
              <div>
                {faqs.map((faq, index) => (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Can't find what you're looking for? Our support team is here to help you
              with any questions or issues you might have.
            </p>
            <div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />Contact Support</a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />Email Us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);
}
export default HelpPage