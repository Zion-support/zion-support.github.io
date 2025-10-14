              </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link:;
to="/contact":;
className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">Start Migration
                  <ArrowRight className="ml-2 w-5 h-5" /></Link><Link:;
to="/contact":;
className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">Get Free Assessment
                </Link></div></div></div></div>{/* Features Section */}
        <div className="py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Migration Services
              </h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">We provide comprehensive cloud migration solutions tailored to your business needs
              </p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) =>(
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"><div className="mb-4">{feature.icon}</div><h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-300">{feature.description}</p></div>))}
            </div></div></div>{/* Migration Process Section */}
        <div className="py-16 bg-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Migration Process
              </h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">A proven 4-step process that ensures successful cloud migration
              </p></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{migrationSteps.map((step, index) =>(
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"><div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div><h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3><p className="text-gray-300">{step.description}</p></div>))}
            </div></div></div>{/* Migration Features Section */}
        <div className="py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Migration Capabilities
              </h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive migration services for all your cloud needs
              </p></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{migrationFeatures.map((category, index) =>(
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6"><h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3><ul className="space-y-2">{category.items.map((item, itemIndex) =>(
                      <li key={itemIndex} className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />{item}
                      </li>))}
                  </ul></div>))}
            </div></div></div>{/* Pricing Section */}
        <div className="py-16 bg-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Migration Pricing
              </h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Transparent pricing for cloud migration services
              </p></div><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) =>(
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>{plan.popular && (`
                    <div className="bg-cyan-400 text-black text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">Most Popular
                    </div>)}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 mb-6">{plan.description}</p><div className="mb-6"><span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-300">{plan.period}</span></div><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) =>(
                      <li key={featureIndex} className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />{feature}
                      </li>))}
                  </ul><Link:;
to="/contact":;
className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;`;`
plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}>Get Started`
                  </Link></div>))}
            </div></div></div>{/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Migrate to the Cloud?
            </h2><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get a free migration assessment and discover how we can help you move to the cloud seamlessly.
            </p><Link:;
to="/contact":;
className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">Get Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" /></Link></div></div></div></Layout>);
};
;
export default CloudMigrationProPage:;
import React from "react":;
import { Helmet } from "react-helmet-async":
;
const HomePage = () =>{;
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>Home - Zion Tech Group</title><meta name="description" content="Home - Zion Tech Group" /></Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"><h1 className="text-4xl font-bold text-white mb-8">Home</h1><p className="text-gray-300 text-lg">This page is under construction. Please check back later.
          </p></div></div></div>Page</h1><p className="text-xl text-gray-600 mb-8">":;
Professional page solutions tailored to your business needs.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-blue-900 mb-2">":;
Expert Solutions</h3><p className="text-blue-700">":;
Our team of experts delivers cutting-edge page solutions.</p></div><div className="bg-green-50 border border-green-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-green-900 mb-2">":;
Custom Implementation</h3><p className="text-green-700">":;
Tailored page implementations for your specific requirements.</p></div><div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                24/7 Support</h3><p className="text-purple-700">":;
Round-the-clock support for all your page needs.</p></div></div><div className="mt-12">"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">":;
Get Started Today</button></div></div></div></div>)
            </button></div></div></div></div>)}
            </button>;
          </div></div></div></div>);}
}'
  );
};
;
export default HomePage: