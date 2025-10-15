import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  UserGroupIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const PartnershipsPage: React.FC = () => {
  const partnershipTypes = [
    {
      icon: BuildingOfficeIcon,
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology companies to deliver cutting-edge solutions.',
      benefits: [
        'Access to latest technologies',
        'Joint product development',
        'Technical support and training',
        'Co-marketing opportunities'
      ]
    },
    {
      icon: UserGroupIcon,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships to expand our market reach and customer base.',
      benefits: [
        'Competitive pricing and margins',
        'Marketing support and materials',
        'Sales training and certification',
        'Dedicated partner portal'
      ]
    },
    {
      icon: UserGroupIcon,
      title: 'Strategic Alliances',
      description: 'Long-term strategic partnerships for mutual growth and market expansion.',
      benefits: [
        'Joint go-to-market strategies',
        'Shared resources and expertise',
        'Cross-selling opportunities',
        'Innovation collaboration'
      ]
    }
  ];

  const partnerBenefits = [
    'Access to cutting-edge AI and IT solutions',
    'Comprehensive training and certification programs',
    'Dedicated partner support team',
    'Co-marketing and lead generation support',
    'Flexible partnership models',
    'Regular partner events and networking'
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      logo: '🔷'
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Partner',
      description: 'Premier AWS consulting partner for cloud migration and optimization',
      logo: '☁️'
    },
    {
      name: 'Google Cloud',
      category: 'AI Partner',
      description: 'Advanced AI and machine learning solutions on Google Cloud Platform',
      logo: '🔵'
    },
    {
      name: 'IBM',
      category: 'Enterprise Partner',
      description: 'Enterprise-grade solutions and consulting services',
      logo: '🔵'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partnerships - Join Our Partner Network | Zion Tech Group</title>
        <meta name="description" content="Join our partner network and grow your business with Zion Tech Group. Explore partnership opportunities in AI, cloud, and IT solutions." />
        <meta name="keywords" content="partnerships, partner program, technology partners, channel partners, strategic alliances, business partnerships" />
        <meta property="og:title" content="Partnerships - Join Our Partner Network" />
        <meta property="og:description" content="Join our partner network and grow your business with Zion Tech Group." />
        <meta property="og:url" content="https://ziontechgroup.com/partnerships" />
        <link rel="canonical" href="https://ziontechgroup.com/partnerships" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Partner Network
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Grow your business with Zion Tech Group. Partner with us to deliver innovative AI and IT solutions 
              to your customers and expand your market reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center group"
              >
                Become a Partner
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#partnership-types"
                className="border-2 border-white/30 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                Explore Opportunities
                <UserGroupIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and growth strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a growing network of successful partners who are transforming their businesses with our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Current Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry leaders who have already partnered with us to deliver exceptional solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-purple-400 text-sm mb-2">{partner.category}</p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our partner network and start growing your business with innovative AI and IT solutions. 
            Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Become a Partner
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Meeting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnershipsPage;