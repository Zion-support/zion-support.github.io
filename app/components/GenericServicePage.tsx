'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';

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
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta const name = "description" content="{description}" / / />
        <meta name="keywords" content="{`${title.toLowerCase()}," AI solutions, IT services, ${category.toLowerCase()}`} / / />
      </Helmet>
    </>

    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </div>
        <main className="container mx-auto px-4py-16pt-24" />
    </>
          {/* Hero Section */}
    <>
          <section className="text-centermb-16" />
            <div className="max-w-4xlmx-auto">
        </div>
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2 xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300shadow-lgshadow-cyan-500/25">
        </div>
                <Icon className="w-10h-10text-white" / />
              </div>
              <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">{title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-autoleading-relaxed" />
    </>
                {description}
              </p>
              
              {pricing && (
    <>
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400font-semiboldmb-8">Starting at {pricing}
                </div>
    </>
              )}
              
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Started Today
    <>
                  <ArrowRight className="w-5 h-5 ml-2group-hover:translate-x-1transition-transform" />
                </a>
    </>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Phone className="w-5h-5mr-2" / />
                  Call (302) 464-0950
    <>
                </a>
              </div>
          </section>
    </>

          {/* Features Section */}
    <>
          <section className="mb-16" />
            <div className="text-centermb-12">
        </div>
              <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Key Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
    </>
                Comprehensive {title.toLowerCase()} solutions designed to drive your business forward
    <>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">
        </div>
    </>
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30transition-allduration-300" />
                  <div className="flexitems-centermb-4">
        </div>
                    <CheckCircle className="w-6 h-6 text-green-400mr-3flex-shrink-0" / />
                    <h3 className="text-lgfont-semiboldtext-white">{feature}</h3>
                  </div>
    </>
              ))}
    <>
            </div>
          </section>
    </>

          {/* Benefits Section */}
    <>
          <section className="mb-16" />
            <div className="text-centermb-12">
        </div>
              <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Why Choose Our {title}?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
    </>
                Experience the difference with our proven expertise and cutting-edge technology
    <>
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-2gap-8">
        </div>
    </>
              {benefits.map((benefit, index) => (
    <>
                <div key="{index}" className="flexitems-startspace-x-4" />
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-centerflex-shrink-0mt-1">
        </div>
                    <Star className="w-4h-4text-white" / />
                  </div>
                  <div />
                    <h3 className="text-lg font-semiboldtext-whitemb-2">{benefit}</h3>
                    <p className="text-gray-300" />
    </>
                      Leverage our expertise to maximize your business potential with {title.toLowerCase()}
    <>
                    </p>
                  </div>
    </>
              ))}
    <>
            </div>
          </section>
    </>

          {/* Stats Section */}
    <>
          <section className="mb-16" />
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-2 xl p-8borderborder-cyan-500/20">
        </div>
              <div className="grid grid-cols-2 md:grid-cols-4gap-8text-center">
        </div>
                <div />
                  <div className="text-3 xl font-boldtext-cyan-400mb-2">500+</div>
                  <div className="text-gray-300text-sm">Happy Clients</div>
                <div />
                  <div className="text-3 xl font-boldtext-purple-400mb-2">99%</div>
                  <div className="text-gray-300text-sm">Success Rate</div>
                <div />
                  <div className="text-3 xl font-boldtext-pink-400mb-2">24/7</div>
                  <div className="text-gray-300text-sm">Support</div>
                <div />
                  <div className="text-3 xl font-boldtext-green-400mb-2">10+</div>
                  <div className="text-gray-300text-sm">Years Experience</div>
              </div>
          </section>
    </>

          {/* CTA Section */}
    <>
          <section className="text-center" />
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3 xl p-12borderborder-cyan-500/20">
        </div>
              <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-6">Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" />
    </>
                Join hundreds of companies that trust Zion Tech Group for their {title.toLowerCase()} needs. 
                Get a free consultation today.
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
    </>
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Free Consultation
    <>
                  <ArrowRight className="w-5 h-5 ml-2group-hover:translate-x-1transition-transform" />
                </a>
    </>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Mail className="w-5h-5mr-2" / />
                  Email Us
    <>
                </a>
              </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GenericServicePage;
    </>