'use client'
  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>

      <Footer />
    </>
  );
};

export default AIAnalyticsDashboardPage;
              </div>
            </div>
          </div>
        </section>

          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300"></p></p>
                Everything you need to analyze and visualize your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
              {features.map((feature, index) =&gt; (
                </div&gt;
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
                Why Choose AI Analytics?
              </h2>
              <p className="text-xl text-gray-300"></p></p>
                Transform your business with intelligent data analysis
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div></div>
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg"></p></p>{benefit}</p>
                </div>
              ))}
            </div>
          ))
        </section>

          <div className="max-w-4xl mx-auto text-center"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></h2>
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p></p>
              Start analyzing your data with AI-powered insights today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"></button>
                Get Started
              </button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"></button>
                Contact Sales
              </button>
            </div>
          ))
        </section>
      </main>
      
      <Footer />

  );
};
