import React from 'react';;';
import SEOHead from './components/SEOHead';

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"></h1>
              Press & Media
            </h1>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16"></div>
            <div></div>
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Press Releases</h2>
              <div className="space-y-6"></div>
                {pressReleases.map((release, index) => ()}
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"></div>
                    <div className="flex items-center gap-3 mb-3"></div>
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">{release.date}</span>
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"></span>
                        {release.category};
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{release.title}</h3>
                    <p className="text-gray-300 mb-4">{release.summary}</p>
                    <>
                      to="#"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    ></>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  </div>
                ))};
              </div>
            </div>

            <div></div>
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Media Coverage</h2>
              <div className="space-y-6"></div>
                {mediaCoverage.map((article, index) => ()}
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"></div>
                    <div className="flex items-center gap-3 mb-3"></div>
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">{article.date}</span>
                      <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full"></span>
                        {article.source};
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{article.title}</h3>
                    <p className="text-gray-300 mb-4">{article.summary}</p>
                    <>
                      to={article.url},
      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    ></>
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  </div>
                ))};
              </div>
            </div>
          </div>

          <div className="text-center"></div>
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Media Kit</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Download our media kit for logos, images, and company information for press use.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"></button>
                Download Media Kit
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"></button>
                Contact Media Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
    },
    {}

;
const PressPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Press - Zion Tech Group"";
        description="Professional press solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Press</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;
export default PressPage;'";'";

