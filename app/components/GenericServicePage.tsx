import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';
'use client';

interface GenericServicePageProps {
  title: string;,
  description: string;,
  icon: React.ComponentType<any />;,
  features: string[];,
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';,
  color: string;
}

const GenericServicePage: React.FC<GenericServicePageProps /> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color
}) => {
  const categoryColors = {
    AI: 'from-purple-500 to-pink-600',
    IT: 'from-blue-500 to-cyan-600',
    MicroSAAS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600'
  };
  const categoryColor = categoryColors[category] || 'from-cyan-500 to-purple-600';
  return (
    <>
      <Helmet>
        <title />{title} | Zion Tech Group</title>
        <meta const name = "description" content="{description}" /  />
        <meta name="keywords" content="{`${title.toLowerCase()}," AI solutions, IT services, ${category.toLowerCase()}`} /  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <main className="w-5 h-5 ml-2" />
          {/* Hero Section */}
          <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Icon className="w-5 h-5 ml-2" />
              </div>
              <h1 className="w-5 h-5 ml-2">{title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{description}
              </p>
              
              {pricing && (
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Starting at {pricing}
                </div>
              )}
              
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <a 
                  href="/contact" 
                  className="px-8py-4 b g-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8py-4 b order-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Phone className="w-5 h-5 ml-2" />
                  Call (302) 464-0950
                </a>
              </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Key Features
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Comprehensive {title.toLowerCase()} solutions designed to drive your business forward
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30transition-all duration-300" />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <CheckCircle className="w-5 h-5 ml-2" />
                    <h3 className="w-5 h-5 ml-2" />{feature}</h3>
                  </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our {title}?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Experience the difference with our proven expertise and cutting-edge technology
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="flexitems-start space-x-4" />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <Star className="w-5 h-5 ml-2" />
                  </div>
                  <div />
                    <h3 className="w-5 h-5 ml-2" />{benefit}</h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Leverage our expertise to maximize your business potential with {title.toLowerCase()}
                    </p>
                  </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <div />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">500+</div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Happy Clients</div>
                <div />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">99%</div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Success Rate</div>
                <div />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">24/7</div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Support</div>
                <div />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">10+</div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Years Experience</div>
              </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join hundreds of companies that trust Zion Tech Group for their {title.toLowerCase()} needs. 
                Get a free consultation today.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <a 
                  href="/contact" 
                  className="px-8py-4 b g-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="px-8py-4 b order-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Mail className="w-5 h-5 ml-2" />
                  Email Us
                </a>
              </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GenericServicePage;