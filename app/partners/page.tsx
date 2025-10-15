import React from 'react';
<<<<<<< HEAD
import { Helmet   } from 'react-helmet-async';
import {   } from 'react-router-dom';
import { Circle, Right,   } from 'lucide-react';
const PartnersPage: React.FC = () => {
  const partners = [{;
      name: 'Microsoft,;
      logo: "🏢",;
      description: 'Strategic partnership for cloud and AI solutions'',';
      category: Technology},;
    {;
      name: "Amazon Web Services",;
      logo: '☁️',;
      description: "infrastructure and AI services collaboration",;
      category: '},;
    {;
      name: 'Google ,;
      logo: "🔍",;
      description: 'AI and machine learning platform integration'',';
      category: AI/ML},;
    {;
      name: "IBM",;
      logo: '💼',;
      description: "Enterprise AI solutions and consulting",;
      category: Enterprise'},;
    {;
      name: 'Salesforce,;
      logo: "📊",;
      description: 'CRM and business intelligence integration'',';
      category: CRM},;
    {;
      name: "Oracle",;
      logo: '🗄️',;
      description: "and enterprise application solutions",;
      category: '}
  ];
  const benefits = ['Access to cutting-edge technology,;
    Joint go-to-market opportunities,;
    Technical support and training',';
    Co-marketing and co-selling programs,;
    Priority access to new features,;
    'Dedicated partner success manager'';
  ];
  return (
    <><Helmet><title>Partners - Strategic Partnerships | Zion Tech Group</title><meta name="description content='Join' our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, technical support, and joint go-to-market opportunities. />;<meta name='keywords' content='partners,' partnerships, strategic alliances, technology partners, business partners, partner program" />;</Helmet><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>;
        {/* Hero Section */}
        <section className="relative" py-20 px-4>;<div className="max-w-7xl" mx-auto text-center>;<h1 className="text-5xl" md: "text-7xl font-bold text-white mb-6">;
              Our;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent>Partners</></h1><p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>;
              Join our growing ecosystem of strategic partners and unlock new opportunities",;
              for growth and innovation.</><div className="flex" flex-col sm: "flex-row gap-4 justify-center>;<button className="px-8" py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;
                Become a Partner",;
                <Right className="w-5 h-5 ml-2 inline />;</button><button className="px-8" py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover: "bg-cyan-500/10 transition-all duration-300>Learn More</></div></div></section>",;
        {/* Partners Grid */}
        <section className="py-20" px-4>;<div className="max-w-7xl" mx-auto">;<h2 className="text-4xl font-bold text-white text-center mb-16>Strategic Partners</h2><div className="grid" md: "grid-cols-2 lg:grid-cols-3 gap-8>",;
              {partners.map((partner, _index) =>(;<div key={_index} className="bg-slate-800/50" backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover: "border-cyan-500/50 transition-all duration-300>;<div className="text-center"">",;<div className="text-4xl mb-4>{partner.logo}</div><h3 className="text-xl" font-semibold text-white mb-2>{partner.name}</h3><p className="text-cyan-400" text-sm mb-3>{partner.category}</p><p className="text-gray-300" text-sm">{partner.description}</p></div></div>
              ))}
            </div></div></section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30>;<div className="max-w-7xl" mx-auto>;<h2 className="text-4xl" font-bold text-white text-center mb-16>Partner Benefits</><div className="grid" md: "grid-cols-2 lg:grid-cols-3 gap-8">",;
              {benefits.map((benefit, _index) =>(;<div key={_index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30>;<div className="w-8" h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0>;<Circle className="w-4" h-4 text-white />;</div><span className="text-gray-300" font-medium">{benefit}</span></div>
              ))}
            </div></div></section>
        {/* CTA Section */}
        <section className="py-20 px-4>;<div className="max-w-4xl" mx-auto text-center>;<h2 className="text-4xl" font-bold text-white mb-6>Ready to Partner with Us?</><p className="text-xl" text-gray-300 mb-8">Join our partner ecosystem and unlock new opportunities for growth and innovation.</><div className="flex flex-col sm: "flex-row gap-4 justify-center>;<button className="px-8" py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25>;
                Apply Now",;
                <Right className="w-5" h-5 ml-2 inline />;</button><button className="px-8" py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover: "bg-cyan-500/10 transition-all duration-300">Contact Us</></div></div></section></div></>
  );
}
export default PartnersPage;
};
export default PartnersPage;
=======
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Professional Partners solutions and services" />
        <meta name="keywords" content="partners" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Partners</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Partners solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const LazyPage: React.LazyExoticComponent<React.ComponentType<any>> = React.lazy(() => import('./page'));
export default LazyPage;

>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
