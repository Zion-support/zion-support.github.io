'use client';
import React from 'react';
import { Helmet , CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Database, TrendingUp  } from "react-helmet-async";
const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {}];
 cursor/fix-errors-and-merge-to-main-6ce7;
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business intelligence solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
 origin/cursor/analyze-improve-and-deploy-application-1247;
        <title>Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Professional Business Intelligence services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<h1 className="text-5xl font-bold text-white mb-6">
 origin/cursor/analyze-improve-and-deploy-application-1247</h1>
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced business intelligence solutions.</p>
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our business intelligence solutions deliver unmatched performance, security, and scalability.</p>
          </p>
        </div>
 origin/cursor/analyze-improve-and-deploy-application-1460;
              </div>
            ))}
          </div>
        </div>
</section>
      {/* Benefits Section */}; cursor/fix-errors-and-merge-to-main-6ce7;
      <section className="py-16 px-4 bg-white/5" /><div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247;
          </div><div className="text-center mb-12" /><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our BI Solutions?</h2>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business intelligence solutions deliver actionable insights that drive real business value</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /><div className="text-center p-6" /><div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" /><BarChart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-600">Make informed decisions based on real-time data and comprehensive analytics</p>
            </div>
            <div className="text-center p-6" /><div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" /><TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
              <p className="text-gray-600">Identify opportunities for improvement and optimize business processes</p>
            </div>
            <div className="text-center p-6" /><div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" /><Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Planning</h3>
              <p className="text-gray-600">Plan for the future with predictive analytics and trend analysis</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="py-16 bg-gray-50" /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /><div className="text-center mb-12" /><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our BI Solutions</h2>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business intelligence services designed to unlock the value in your data</p>
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {biServices.map((service) => (
              </div><div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow" /><h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6" /><h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      </ul><li key={index} className="flex items-center text-gray-600" /><CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6" /><h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      </ul><li key={index} className="flex items-center text-gray-600" /><Star className="w-5 h-5 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4" /><div className="flex justify-between items-center" /><span className="text-2xl font-bold text-blue-600">{service.marketPrice}</span>
                    <span className="text-sm text-gray-500">{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 origin/cursor/analyze-improve-and-deploy-application-1247;
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our BI experts help you unlock the full potential of your business data</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today</button>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More</button>
            </button>
          </div>
        </div>
      </section>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" /><div className="container mx-auto px-4 py-16 pt-24" /><section className="text-center mb-16" /><h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Business Intelligence Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our comprehensive BI solutions.</p>
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {biServices.map((service, index) => (
            </section><div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" /><div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
              <div className="text-sm text-gray-500 mb-4">Market: {service.marketPrice}</div>
              <div className="space-y-2" /><h4 className="font-semibold text-gray-900">Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    </ul><li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
 origin/cursor/analyze-improve-and-deploy-application-1460;
    </div>
</> origin/cursor/analyze-improve-and-deploy-application-1507;
  );
};
export default BusinessIntelligencePage;
 origin/cursor/analyze-improve-and-deploy-application-1247
;