'use client';
import React from 'react';
 cursor/fix-errors-and-merge-to-main-6ce7;
              </div>
            </div>
          </div>
        </section>
{/* Features Section */}
          </section><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,</h2>
                Powerful AI Features,
  </
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover how our AI platform can revolutionize your business operations.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {features.map((feature, index) => (
                <div key={index}className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow">,</div>
                  <div className="flex items-center mb-4" /><feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description</p>}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      </ul><li key={benefitIndex}className="flex items-center text-sm text-gray-600" /><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit} </li>
                    ))}
                  </ul>
 cursor/website-audit-and-update-with-deployment-c0e8;
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ));
          </div>
        </section>
      {/* CTA Section */};
      <section className="py-20 px-4" /><div className="max-w-4xl mx-auto text-center" /><h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with our page solutions today</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial</button>
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales</button>
            </button>
          </div>
      <Footer />
    </div>
  );
};
;