'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageSquare, Clock, CheckCircle, ArrowRight, Search, FileText, Video, Headphones } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {


  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7 Emergency Support',
      responseTime: 'Immediate',
      contact: '+1 302 464 0950',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Within 24 hours',
      contact: 'kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Immediate',
      contact: 'Start Chat',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Video,
      title: 'Video Support',
      description: 'Schedule a video call for complex technical issues',
      availability: 'By appointment',
      responseTime: 'Within 2 hours',
      contact: 'Schedule Call',
      color: 'from-orange-500 to-red-600'
    };

  );

  return() {supportChannels.map((channel, index) => ()
                      {channel.contact.startsWith('+') || channel.contact.includes('@') ? ()
                          href={channel.contact.startsWith('+') ? `tel:${channel.contact}` : `mailto:${channel.contact}`}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold"
                        ></a>
                          {channel.contact}
                        </a>
                      ) : ()
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16" /></div>
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              
              {/* Search and Filter */}
              <div className="mb-8" /></div>
                <div className="flex flex-col md:flex-row gap-4 mb-6" /></div>
                  <div className="flex-1 relative" /></div>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" / /></Search>
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {faqCategories.map();
                    ))}
                  </select>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="space-y-6" /></div>
                {filteredQuestions.map((faq, index) => ()
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="mb-16" /></div>
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" /></div>
                {resources.map((resource, index) => ()
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center" /></div>
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-4" /></h2>
                  Still Need Help?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto" /></p>
                  Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                  <a href="tel:+13024640950"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <Phone className="w-5 h-5" / /></Phone>
                    <span>Call: (302) 464-0950</span>
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <Mail className="w-5 h-5" / /></Mail>
                    <span>Email Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default SupportPage;
