import React from 'react';
import SEOHead from './components/SEOHead'

import { Helmet } from 'react-helmet-async',''
      import {CheckCircle, Star} from 'lucide-react'"
,
      interface ServicePageProps {"};
        """
  title: string,
      description: string,
      shortDescription: string,
      features: string[],
      benefits: string[],
      pricing: {"};
        """
    starting: string,
      market: string
    },
    {}
  technologies: string[],
      icon: React.ReactNode,
      popular?: boolean
    },
    {}
,
      const ServicePageTemplate: React.FC<ServicePageProps> = ({",)};
        """
  title,","
        """
  description,","
        """
  shortDescription,","
        """
  features,","
        """
  benefits,","
        """
  pricing,","
        """
  technologies,","
        """
  icon,","
        """
  popular = false","
        """
}) => {"};
        """
  return (",);
        ""
    <>{"}</>"
        """
      <Helmet>","
        """
        <title>{title} - Zion Tech Group</title>""""
        <meta name ="description" content={description} />""'"
        <meta name ="keywords' content={technologies.join(', ")} />",'"
        ""
      </Helmet>","
        """
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""";
        {/* Hero Section */};
        <section className="py-20">""""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""""
            <div className="text-center">""""
              <div className="flex justify-center mb-8">""""
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">","
        "";
                  {icon};
                </div>","
        """
              </div>""""
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">","
        "";
                {title};
              </h1>","
        """
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">","
        "";
                {description};
              </p>","
        """
              <div className="flex flex-col sm:flex-row gap-4 justify-center">","
        """
                <",>"
        """
                  to="/contact","
      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >","
        """
                  Get Started Today","
        """
                </>","
        """
                <",>"
        """
                  to="/demo","
      className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >","
        """
                  Schedule Demo","
        """
                </>","
        """
              </div>","
        """
            </div>","
        """
          </div>","
        """
        </section>""";
        {/* Features Section */};
        <section className="py-20 bg-slate-800/30">""""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""""
            <div className="text-center mb-16">""""
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">""""
                Key <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>","
        """
              </h2>","
        """
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">","
        "";
                {shortDescription};
              </p>","
        """
            </div>""""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">","
        """
              {features.map((feature, index) => (",)};
        """
                <div key ={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">""""
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />""""
                  <span className="text-gray-300 font-medium">{feature}</span>","
        """
                </div>","
        "";
              ))};
            </div>","
        """
          </div>","
        """
        </section>""";
        {/* Benefits Section */};
        <section className="py-20">""""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""""
            <div className="text-center mb-16">""""
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">""""
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{title}</span>?","
        """
              </h2>","
        """
            </div>""""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">","
        """
              {benefits.map((benefit, index) => (",)};
        """
                <div key ={index} className="text-center p-6">""""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""""
                    <Star className="w-8 h-8 text-white" />","
        """
                  </div>","
        """
                  <h3 className="text-xl font-semibold text-white mb-2">Benefit {index + 1}</h3>""""
                  <p className="text-gray-300">{benefit}</p>","
        """
                </div>","
        "";
              ))};
            </div>","
        """
          </div>","
        """
        </section>""";
        {/* Technologies Section */};
        <section className="py-20 bg-slate-800/30">""""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""""
            <div className="text-center mb-16">""""
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">""""
                Technologies & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tools</span>","
        """
              </h2>","
        """
            </div>""""
            <div className="flex flex-wrap justify-center gap-4">","
        """
              {technologies.map((tech, index) => (",)};
        """
                <div key ={index} className="bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-500 transition-colors">""""
                  <span className="text-gray-300 font-medium">{tech}</span>","
        """
                </div>","
        "";
              ))};
            </div>","
        """
          </div>","
        """
        </section>""";
        {/* Pricing Section */};
        <section className="py-20">""""
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">""""
            <div className="text-center mb-16">""""
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">""""
                Pricing & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Packages</span>","
        """
              </h2>","
        """
            </div>""""
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">""""
              <div className="text-center">""""
                <h3 className="text-2xl font-bold text-white mb-4">Professional Package</h3>""""
                <div className="text-4xl font-bold text-cyan-400 mb-2">{pricing.starting}</div>""""
                <div className="text-gray-400 mb-6">Market Price: {pricing.market}</div>""""
                <p className="text-gray-300 mb-8">{description}</p>","
        """
                <",>"
        """
                  to="/contact","
      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-block"
                >","
        """
                  Get Started Now","
        """
                </>","
        """
              </div>","
        """
            </div>","
        """
          </div>","
        """
        </section>""";
        {/* CTA Section */};
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">""""
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">""""
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">","
        """
              Ready to Transform Your Business?","
        """
            </h2>""""
            <p className="text-xl text-gray-300 mb-8">","
        "''
              Let"s discuss how our {title.toLowerCase()} can accelerate your digital transformation and drive growth.","
        """
            </p>""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">","
        """
              <",>"
        """
                to="/contact","
      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >","
        """
                Get Started Today","
        """
              </>","
        """
              <",>"
        """
                to="/demo","
      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >","
        """
                Schedule Demo","
        """
              </>","
        """
            </div>","
        """
          </div>","
        """
        </section>","
        """
      </div>","
        """
    </>","
        "";
  )
    },
    {}
,
      export default ServicePageTemplate;
;

;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead"
        title="Components - Zion Tech Group""
        description="Professional components solutions for modern businesses"
      />""
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        <div className="text-center">"'"
          <h1 className="text-4xl font-bold mb-4">Components</h1>'"
          <p className="text-gray-300'>Professional solutions coming soon...</p>'
        </div>;
      </div>;
    </>;
  ),
};
export default ComponentsPage""'";
