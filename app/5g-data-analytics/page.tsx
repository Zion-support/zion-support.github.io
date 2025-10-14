import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const Five GData Analytics Page = () => {
  const services = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Cutting-edge 5 G data analytics for maximum efficiency',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our team of specialists',
    }
  ];

  return (
    <>
      <EnhancedSEOtitle="5G Data Analytics - Zion Tech Group"
        description="Professional5 G data analytics services by Zion Tech Group. Expert solutions for your business needs."
        keywords="5G, data analytics, business solutions, technology services, professional services"
      />
      <div className="min-h-screenbg-gradient-to-brfrom-slate-9 00 via-purple-9 0 0 to-slate-9 0 0">
        {/* Hero Section */}
        <section className="relativepy-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7 xlmx-autotext-center">
            <h1 className="text-4 xlmd:text-6xl font-bold text-white mb-6">
              5 G Data Analytics
              <span className="blockbg-gradient-to-rfrom-cyan-40 0 to-purple-4 0 0 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
              Professional 5 G data analytics services designed to help your business succeed and grow.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <Link to="/contact"
                className="inline-flexitems-centerpx-8 py-4 bg-gradient-to-r from-cyan-5 00 to-purple-6 00 text-white font-semibold rounded-lg hover:from-cyan-6 00 hover:to-purple-7 0 0 transition-all duration-3 0 0 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/demo"
                className="inline-flexitems-centerpx-8 py-4 border border-cyan-4 00 text-cyan-4 00 font-semibold rounded-lg hover:bg-cyan-4 0 0/1 0 transition-all duration-3 0 0"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4sm:px-6 lg:px-8">
          <div className="max-w-7 xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-3 xlmd:text-4xl font-bold text-white mb-4">
                Why Choose Our 5 G Data Analytics Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2 xl mx-auto">
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="gridgrid-cols-1 md:grid-cols-3gap-8">
              {features.map((feature, index) => (
                <divkey={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-5 0 0 to-purple-6 0 0 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4sm:px-6 lg:px-8 bg-slate-8 0 0/3 0">
          <div className="max-w-4 xlmx-autotext-center">
            <h2 className="text-3 xlmd:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our 5 G data analytics services can help your business succeed.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <Link to="/contact"
                className="inline-flexitems-centerpx-8 py-4 bg-gradient-to-r from-cyan-5 00 to-purple-6 00 text-white font-semibold rounded-lg hover:from-cyan-6 00 hover:to-purple-7 0 0 transition-all duration-3 0 0 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services"
                className="inline-flexitems-centerpx-8 py-4 border border-cyan-4 00 text-cyan-4 00 font-semibold rounded-lg hover:bg-cyan-4 0 0/1 0 transition-all duration-3 0 0"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
  };

export default FiveGDataAnalyticsPage;