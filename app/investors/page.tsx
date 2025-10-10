'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  TrendingUp,
  DollarSign,
  BarChart,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Target,
  Building2,
  PieChart,
  Activity
} from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const metrics = [
    {
      icon: DollarSign,
      value: '$50 M+',
      label: 'Total Funding Raised',
      description: 'Series A and B rounds completed'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Revenue Growth',
      description: 'Year-over-year growth rate'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Enterprise Clients',
      description: 'Fortune 500 companies served'
    },
    {
      icon: Globe,
      value: '25+',
      label: 'Countries',
      description: 'Global market presence'
    }
  ];

  const investors = [
    {
      name: 'Sequoia Capital',
      logo: '🌲',
      type: 'Lead Investor',
      description: 'Series A lead investor with deep AI expertise'
    },
    {
      name: 'Andreessen Horowitz',
      logo: '🚀',
      type: 'Series B',
      description: 'Strategic partner for enterprise growth'
    },
    {
      name: 'Accel Partners',
      logo: '⚡',
      type: 'Growth Capital',
      description: 'Supporting international expansion'
    },
    {
      name: 'GV (Google Ventures)',
      logo: '🔍',
      type: 'Strategic',
      description: 'Technology and market access partnership'
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Named "AI Company of the Year" by TechCrunch'
    },
    {
      icon: Shield,
      title: 'Financial Stability',
      description: 'Strong balance sheet with 24+ months runway'
    },
    {
      icon: Zap,
      title: 'Rapid Growth',
      description: 'Consistent 300%+ revenue growth year-over-year'
    },
    {
      icon: Target,
      title: 'Market Leadership',
      description: 'Leading position in enterprise AI solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3 Csvg%20 width%3 D%2260%22%20 height%3 D%2260%22%20 viewBox%3 D%220%200%2060%2060%22%20 xmlns%3 D%22 http%3 A//www.w3.org/2000/svg%22%3 E%3 Cg%20 fill%3 D%22 none%22%20 fill-rule%3 D%22 evenodd%22%3 E%3 Cg%20 fill%3 D%22%239 C92 AC%22%20 fill-opacity%3 D%220.1%22%3 E%3 Ccircle%20 cx%3 D%2230%22%20 cy%3 D%2230%22%20 r%3 D%222%22/%3 E%3 C/g%3 E%3 C/g%3 E%3 C/svg%3 E')] opacity-20"></div>

        <div className="relative z-10 max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5 xl md:text-7 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1></<<<h>Investors</h>
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto">
            Building the future of AI with world-class investors and strategic partners
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Company</h></<<h>Metrics</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Strong financial performance and market position
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {metrics.map((metric, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <metric.icon className="w-8 h-8 text-white" /></metri>
                </div>
                <div className="text-4 xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                <div className="text-gray-300 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Our</h></<<h>Investors</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Backed by leading venture capital firms and strategic investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {investors.map((investor, index) => (
              <div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 text-center"
              ></div>
                <div className="text-6 xl mb-4">{investor.logo}</div>
                <h3 className="text-2 xl font-bold text-white mb-2">{investor.name}</h>
                <div className="text-cyan-400 font-semibold mb-3">{investor.type}</div>
                <p className="text-gray-300">{investor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Investment</h></<<h>Highlights</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Key factors that make Zion Tech Group an attractive investment opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <highlight.icon className="w-8 h-8 text-white" /></highligh>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{highlight.title}</h>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6"></h2></<<<h>Investment</h></<<h>Opportunities</h>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Interested in investing in the future of AI? Contact our investor relations team
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button></<<<button>Contact</button></<<button>Investor</button> Relations
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>Download</butto></<<butto>Pitch</butto></<butto>Deck</butto>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default InvestorsPage;