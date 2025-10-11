'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, ArrowRight, Home, Users, Settings, Brain, Cloud, Code, FileText, Mail, Phone, Calendar, Shield, BarChart, Target, Globe, Database, Zap, Eye, Mic, Heart, DollarSign, Box, Cpu, Link, Server, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Package, Monitor, Search, Video, Headphones, Scale, Cookie } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {

    {
      title: 'Main Pages',
      icon: Home,
      pages: [

    },
    {
      title: 'AI Services',
      icon: Brain,
      pages: [

    },
    {
      title: 'IT Services',
      icon: Cloud,
      pages: [
        { name: 'IT Services Overview', url: '/it-services', description: 'Complete IT infrastructure solutions' },
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, and GCP solutions' },
        { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Comprehensive security services' },
        { name: 'Web Development', url: '/web-development', description: 'Modern web application development' },
        { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android app development' },

    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Tutorials', url: '/tutorials', description: 'Step-by-step guides and tutorials' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation and APIs' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },


  return() {quickLinks.map((link, index) => ()
                ))}
              </div>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-12" /></div>
              {sitemapSections.map((section, sectionIndex) => ()
                    {section.pages.map((page, pageIndex) => ()
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Search Box */}
            <div className="mt-16 text-center" /></div>
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-4" /></h2>
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto" /></p>
                  Use our search functionality or contact us directly for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" /></div>
                  <div className="flex-1 relative" /></div>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" / /></Search>
                    <input type="text"
                      placeholder="Search our website..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    / /></input>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300" /></button>
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center" /></div>
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-4" /></h2>
                  Need Help Finding Something?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto" /></p>
                  Our team is here to help you find exactly what you need. Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    Contact Us
                  </a>
                  <a href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer / /></Footer>
    </>
  );
};

export default SitemapPage;
