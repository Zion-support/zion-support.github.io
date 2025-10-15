import React from 'react';";";";";
import SEOHead from './components/SEOHead";";";
  // return statement";";";
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></div>"
          <div className="max-w-7xl mx-auto text-center"></div>"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>"
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></span>";
                Sitemap";";
              </span>";";";
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Navigate through our complete website directory. Find all our AI services, _micro SAAS solutions, _5G technology, and company information.
            </p>";
          </div>";";
        </div>";";";
        {/* Main Pages */};"
        <div className="py-16 px-4 sm:px-6 lg:px-8"></div>"
          <div className="max-w-7xl mx-auto"></div>"
            <div className="text-center mb-12"></div>"
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center"></h2>"
                <Globe className="w-8 h-8 mr-3 text-cyan-400" />";
                Main Pages";";
              </h2>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
              {mainPages.map((page, index) => ()};";
                <>";";
                  key={index},";";";
      to={page.path},"
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"></>"
                  <div className="flex items-center justify-between"></div>";";";
                    <div></div>"
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors"></h3>";";
                        {page.name};";";";
                      </h3>"
                      <p className="text-gray-300 text-sm mt-1">{page.description}</p>";";";
                    </div>"
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </>
              ))};
            </div>";
          </div>";";
        </div>";";";
        {/* AI Services */};"
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20"></div>"
          <div className="max-w-7xl mx-auto"></div>"
            <div className="text-center mb-12"></div>"
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center"></h2>"
                <className="w-8 h-8 mr-3 text-purple-400" />";";
                AI Services";";";
              </h2>"
              <p className="text-gray-300">Advanced artificial intelligence solutions for every business need</p>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"></div>
              {aiServices.map((service, index) => ()};";
                <>";";
                  key={index},";";";
      to={service.path},"
      className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"></>"
                  <div className="flex items-center justify-between"></div>"
                    <span className="text-white text-sm group-hover:text-purple-300 transition-colors"></span>";";
                      {service.name};";";";
                    </span>"
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </>
              ))};
            </div>";
          </div>";";
        </div>";";";
        {/* Micro SAAS Services */};"
        <div className="py-16 px-4 sm:px-6 lg:px-8"></div>"
          <div className="max-w-7xl mx-auto"></div>"
            <div className="text-center mb-12"></div>"
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center"></h2>"
                <className="w-8 h-8 mr-3 text-yellow-400" />";";
                Micro SAAS Solutions";";";
              </h2>"
              <p className="text-gray-300">Ready-to-use business software solutions</p>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"></div>
              {microSaasServices.map((service, index) => ()};";
                <>";";
                  key={index},";";";
      to={service.path},"
      className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"></>"
                  <div className="flex items-center justify-between"></div>"
                    <span className="text-white text-sm group-hover:text-yellow-300 transition-colors"></span>";";
                      {service.name};";";";
                    </span>"
                    <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </>
              ))};
            </div>";
          </div>";";
        </div>";";";
        {/* 5G Solutions */};"
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20"></div>"
          <div className="max-w-7xl mx-auto"></div>"
            <div className="text-center mb-12"></div>"
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center"></h2>"
                <className="w-8 h-8 mr-3 text-cyan-400" />";";
                5G Solutions";";";
              </h2>"
              <p className="text-gray-300">Next-generation 5G technology solutions</p>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"></div>
              {fiveGServices.map((service, index) => ()};";
                <>";";
                  key={index},";";";
      to={service.path},"
      className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"></>"
                  <div className="flex items-center justify-between"></div>"
                    <span className="text-white text-sm group-hover:text-cyan-300 transition-colors"></span>";";
                      {service.name};";";";
                    </span>"
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </>
              ))};
            </div>";
          </div>";";
        </div>";";";
        {/* Legal Pages */};"
        <div className="py-16 px-4 sm:px-6 lg:px-8"></div>"
          <div className="max-w-7xl mx-auto"></div>"
            <div className="text-center mb-12"></div>"
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center"></h2>"
                <className="w-8 h-8 mr-3 text-gray-400" />";
                Legal & Policies";";
              </h2>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
              {legalPages.map((page, index) => ()};";
                <>";";
                  key={index},";";";
      to={page.path},"
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"></>"
                  <div className="flex items-center justify-between"></div>"
                    <span className="text-white text-lg font-semibold group-hover:text-gray-300 transition-colors"></span>";";
                      {page.name};";";";
                    </span>"
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </>
              ))};
            </div>";
          </div>";";
        </div>";";";
        {/* Contact Information */};"
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h2 className="text-3xl font-bold text-white mb-6"></h2>";";
              Need Help Finding Something?";";";
            </h2>"
            <p className="text-xl text-gray-300 mb-8"></p>";";";
              Can't find what you're looking for? Contact us and we'll help you navigate to the right page.'
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>";";";
              <>"
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"></>";
                Contact Us";";
              </>";";";
              <>"
                to="/support"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"></>
                Get Support
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  )
    },
    {};
const SitemapPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Sitemap - Zion Tech Group"";"
        description="Professional sitemap solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Sitemap</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;,
    </>,";
  )";";
    };";";";
{"
export default SitemapPage;'";'";";";
}";";";
"