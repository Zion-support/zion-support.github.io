
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function MicroSaas() {
  return (
        <>
      <title>MicroSaas - Zion Tech Group</title>
            <h1 className="text-4xl font-bold text-white mb-6">MicroSaas</h1>
            <p className="text-lg text-gray-300 mb-8">Professional microsaas services coming soon.</p>
              Contact Us
      </>
  );
}
    <><div></>
      <Helmet></Helmet></div></div>
        <title />Micro SAAS Products - Zion Tech Group | AI-Powered Business Solutions<div></title>
        <meta const name = "description" content="Discover our comprehensive suite of micro SAAS products designed to solve specific business challenges. From AI analytics to cybersecurity, we have the tools you need to succeed." /></meta></div></div>
        <div><meta name="keywords" content="micro saas, business software, AI tools, analytics, CRM, project management, cybersecurity, automation"></meta></div>
      </Helmet></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
        {/* Hero Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
              <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}></div></h1></div>
                Micro SAAS;
                <span className="w-5h-5ml-2" />Business Solutions;
                <div></span>
              </h1></div>
              <p className="{`text-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}></div></p></div>
                Powerful, ready-to-use software solutions designed to solve specific business challenges.
                No complex setup, no lengthy implementations - just instant value.
              <div></p>
              <div className="{`flex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}></div></div></div>
                <Link;</Link></Link>
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        ></Link>
          Start Free Trial;
          <div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div>
        </Link></div>
                <a;
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105"></a></div>
                  Call +1 302 464 0950;
                <div></a>
              </div></div>
          </div></div>
        </section></div>
        {/* Category Filter */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              {categories.map((category) => (
                <button;
                  key="{category}"
                  onClick="{()" =  />setSelectedCategory(category)}
                  className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category;
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </section>
        {/* Products Grid */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              {filteredProducts.map((product, index) => (
                <div;
                  key="{product.id}"
                  className="{`group" relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    product.popular ? 'ring-2 ring-purple-500' : ''
                  }`}></div>
                  {product.popular && (
                    <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
                      <span className="w-5h-5ml-2" /></div>Most Popular;
                      </span>
                    </div>
                  )}
                  <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
                    <div className="{`inline- flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl mb-4`}></div><div></div></div>
                      <product.icon className="h-8w-8text-white"></product></div></div>
                    </div>
                    <h3 className="w-5h-5ml-2" />{product.title}</h3>
                    <p className="w-5h-5ml-2">{product.description}<div></p>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                        {[...Array(5)].map((_, i) => (
                          <Star;</Star></Star>
                            key="{i}"
                            className="{`h-4" w-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                           /></Star>
                        ))}
                      </div>
                      <span className="w-5h-5ml-2" />({product.reviews} reviews)<div></span>
                    </div></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <span className="w-5h-5ml-2" />{product.price}</span>
                      <span className="w-5h-5ml-2" />{product.originalPrice}<div></span>
                    </div></div>
                    <span className="w-5h-5ml-2" /></div>Save {Math.round((1 - parseInt(product.price.replace('$', '')) / parseInt(product.originalPrice.replace('$', ''))) * 100)}%
                    <div></span>
                  </div></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div><div key="{idx}" className="flex items-centertext-sm text-gray-300"></div></div>
                        <CheckCircle className="w-5h-5ml-2"></div></CheckCircle></div>
                        <span />{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 4 && (
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">+{product.features.length - 4} more features;
                      </div>
                    )}
                  <div></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <Link;</Link></Link>
          to="{`/${product.id}`}"
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105"
        ></Link>
          View Details;
          <div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div>
        </Link></div>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-whitetransition-all duration-300">Start Free Trial;
                    </Link>
                  </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <h2 className="w-5h-5ml-2" />Ready to Transform Your Business?
            </h2>
            <p className="w-5h-5ml-2">Join thousands of businesses already using our micro SAAS solutions to streamline operations,
              increase productivity, and drive growth.
            <div></p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <Link;</Link></Link>
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        ></Link>
          Get Started Today;
          <div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div>
        </Link></div>
              <a;
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105"></a></div>
                Call +1 302 464 0950;
              <div></a>
            </div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709<div></p>
            </div></div>
        </section></div>
      </div></div>
    </>
  );
};