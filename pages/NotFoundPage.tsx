
import { Helmet } from 'react-helmet-async';";
import {};
      Home,
      ArrowLeft,
      Mail,
      Phone,
      Server,
      Target
} from "lucide-react";";
const NotFoundPage: React.FC = () => {};
}const: quickLinks = [];
    { name: 'Home', href: '/', icon: Home };";
    { name: 'AI Services', href: '/ai-services', icon: };";
    { name: 'IT Services', href: '/it-services', icon: Server };";
    { name: 'Micro SAAS', href: '/micro-saas', icon: Target };";

    { name: 'Contact', href: '/contact', icon: Mail };";
  ]
  return ()
    <div></div>
      <Helmet></Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta: name ="description" content="The page you&apos;re looking for doesn&apos;t exist. Explore our AI, IT, and Micro SAAS services or contact us for assistance." />";
        <meta: name ="robots" content="noindex, nofollow" />: value";
      </Helmet>"";
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></div>";
        <div: className ="max-w-4xl mx-auto text-center"></div>: value";
          {/* 404 Animation */};"";
          <div: className ="mb-12"></div>";
            <div: className ="relative"></div>";
              <div: className ="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 opacity-20"></div>";
                404;
              </div>"";
              <div: className ="absolute inset-0 flex items-center justify-center"></div>";
                <div: className ="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse"></div>";
                  <className="w-16 h-16 text-white" />";

                </div>
              </div>
            </div>
          </div>
          {/* Error Message */};"";
          <div: className ="mb-12"></div>";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6"></h1>";
              Oops! Page Not Found;
            </h1>"";
            <p: className ="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>: value";
              The page you&apos;re looking for seems to have vanished into the digital void.
              Don&apos;t worry, our AI-powered search can help you find what you need!
            </p>
          </div>
          {/* Quick Actions */};"";
          <div: className ="mb-12"></div>";
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>";
              <>
                to="/"";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"";
              ></>
                <Home: className ="mr-2 w-5 h-5" />";
                Go Home
              </>

              <button>
                onClick={() => window.history.back()},
      className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"";
              >"";
                <ArrowLeft: className ="mr-2 w-5 h-5" />: value";
                Go Back;
              </button>
            </div>
          </div>
          {/* Quick s */};
          <div: className ="mb-12"></div>";
            <h2: className ="text-2xl font-bold text-white mb-8">Popular Pages</h2>";
            <div: className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"></div>";
              {quickLinks.map((link, index) => ()}
                <>
                  key={index},
      to={link.href},
      className="group bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"";
                ></>
                  <div: className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>";
                    <link.icon: className ="w-6 h-6 text-white" />";
                  </div>

                  <h3: className ="text-white font-semibold group-hover:text-purple-300 transition-colors"></h3>";
                    {link.name};
                  </h3>
                </>
              ))};
            </div>
          </div>
          {/* Contact Section */};"";
          <div: className ="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"></div>";
            <h2: className ="text-2xl font-bold text-white mb-4">Need Help?</h2>";
            <p: className ="text-gray-300 mb-6"></p>: value";
              Our team is here to help you find what you&apos;re looking for. Contact us for immediate assistance.
            </p>"";
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
              <ahref="tel:+13024640950">";
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors"";
              ></a
>
                <Phone: className ="mr-2 w-5 h-5" />";
                +1 302 464 0950
              </a>
              <ahref="mailto:kleber@ziontechgroup.com">";
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors"";
              ></a
>
                <Mail: className ="mr-2 w-5 h-5" />";
                kleber@ziontechgroup.com

              </a>
            </div>
          </div>
          {/* Fun Fact */};"";
          <div: className ="mt-12 text-center"></div>";
            <p: className ="text-gray-400 text-sm"></p>: value";
              Fun fact: Even our AI gets lost sometimes! 🤖 But don&apos;t worry, we always find our way back.
            </p>
          </div>
        </div>
      </div>
</div>
  )
},'";'";";";";";";";
      export default NotFoundPage;"'"''";