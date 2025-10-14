import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

constFiveGDataAnalyticsPage = () => {
  const services = [
    {
      icon: <Check Circle className="w-8-h-8" />,
      title: 'Advanced Analytics',
      description: 'Cutting-edge-5G dataanalyticsfor maximum efficiency',
    },
    {
      icon: <Shield className="w-8-h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-gradesecurityand 99.9% uptime',
    },
    {
      icon: <Users className="w-8-h-8" />,
      title: 'Expert Support',
      description: '24/7-supportfrom ourteamof specialists',
      },
  ];

  return (
    <>
      <Enhanced SEOtitle="5G Data Analytics - Zion Tech Group"
        description="Professional 5G data analytics services by Zion Tech Group. Expert solutions for your business needs."
        keywords="5G, data analytics, business solutions, technology services, professional services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-9 via-purple-9 to-slate-9">
        {/* Hero Section */  },
        <section className="relativepy-2 px-4-sm:px-6-lg:px-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7-xlmx-auto text-center">
            <h-1 className="text-4-xlmd:text-6-xl font-bold text-white mb-6">
              5G Data Analytics
              <span className="blockbg-gradient-to-r from-cyan-4 to-purple-4 bg-clip-text text-transparent">
                Solutions
              </span>
            </h-1>
            <p className="text-xltext-gray-3 mb-8 max-w-3-xl mx-auto">
              Professional 5G data analytics services designedtohelp yourbusinesssucceed and grow.
            </p>
            <div className="flexflex-colsm:flex-row gap-4 justify-center">
              <Linkt o="/contact"
                className="inline-flexitems-center px-8 py-4 bg-gradient-to-r from-cyan-5 to-purple-6 text-white font-semibold rounded-lghover:from-cyan-6-hover:to-purple-7 transition-all duration-3 group"
              >
                Get Started
                <Arrow Right className="ml-2-w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Linkt o="/demo"
                className="inline-flexitems-center px-8 py-4 border border-cyan-4 text-cyan-4 font-semibold rounded-lghover:bg-cyan-4/1 0 transition-all duration-3"
              >
                View Demo
              </Link>
            </div>
          </div>
                </div>
      </section>

        {/* Features Section */  },
        <section className="py-20 px-4-sm:px-6-lg:px-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7-xlmx-auto">
            <div className="text-center mb-12">
              <h-2 className="text-3-xlmd:text-4-xl font-bold text-white mb-4">
                Why Choose Our 5G Data Analytics Services?
              </h-2>
              <p className="text-xltext-gray-3 max-w-2-xl mx-auto">
                Wedeliverexceptional resultswithcutting-edgetechnologyand expert knowledge.
              </p>
            </div>
            <div className="gridgrid-cols-1-md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <divke y={index} className="text-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-5 to-purple-6 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon  },
                  </div>
                  <h-3 className="text-xlfont-semibold text-white mb-3">{feature.title}</h-3>
                  <p className="text-gray-30">{feature.description}</p>
                </div>
              ))  },
            </div>
          </div>
                </div>
      </section>

        {/* CTASection */  },
        <section className="py-20 px-4-sm:px-6-lg:px-8 bg-slate-8/3 0">
        <div className="container mx-auto px-4">
          <div className="max-w-4-xlmx-auto text-center">
            <h-2 className="text-3-xlmd:text-4-xl font-bold text-white mb-6">
              Readyto Get Started?
            </h-2>
            <p className="text-xltext-gray-3 mb-8">
              Let&apos;sdiscusshow our-5G data analytics services canhelpyour business succeed.
            </p>
            <div className="flexflex-colsm:flex-row gap-4 justify-center">
              <Linkt o="/contact"
                className="inline-flexitems-center px-8 py-4 bg-gradient-to-r from-cyan-5 to-purple-6 text-white font-semibold rounded-lghover:from-cyan-6-hover:to-purple-7 transition-all duration-3 group"
              >
                Contact Us
                <Arrow Right className="ml-2-w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Linkt o="/services"
                className="inline-flexitems-center px-8 py-4 border border-cyan-4 text-cyan-4 font-semibold rounded-lghover:bg-cyan-4/1 0 transition-all duration-3"
              >
                View All Services
              </Link>
            </div>
          </div>
                </div>
      </section>
      </div>
    </>
  )
  };

exportdefault Five GData Analytics Page;