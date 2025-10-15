<<<<<<< HEAD
import { Helmet } from 'react-helmet-async";
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import {}
=======
import { Helmet } from 'react-helmet-async';";";";
>>>>>>> main
=======
import { Helmet } from 'react-helmet-async'"";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
import {};
>>>>>>> main
      Home,
      ArrowLeft,
      Mail,
<<<<<<< HEAD
      Phone,";
      Server,";";
      Target";";";
} from "lucide-react";";";";
const NotFoundPage: React.FC = () => {};";";";
}const quickLinks = [];"
    { name: 'Home', href: '/', icon: Home };";"
    { name: 'AI Services', href: '/ai-services', icon: };";"
    { name: 'IT Services', href: '/it-services', icon: Server };";"
    { name: 'Micro SAAS', href: '/micro-saas', icon: Target };";"
    { name: 'Contact', href: '/contact', icon: Mail };";
  ];
  return ()";
    <div></div>";";
      <Helmet></Helmet>";";";
        <title>404 - Page Not Found | Zion Tech Group</title>"
        <meta: name ="description" content="The page you&apos;re looking for doesn&apos;t exist. Explore our AI, IT, and Micro SAAS services or contact us for assistance." />";"
        <meta: name ="robots" content="noindex, nofollow" />: value";"
      </Helmet>"";"
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></$1>"
        <div: className ="max-w-4xl mx-auto text-center"></div>: value";"
          {/* 404 Animation */};"";"
          <div: className ="mb-12"></$1>"
            <div: className ="relative"></$1>"
              <div: className ="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 opacity-20"></$1>";";";
                404;"
              </div>"";"
              <div: className ="absolute inset-0 flex items-center justify-center"></$1>"
                <div: className ="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse"></$1>"
                  <className="w-16 h-16 text-white" />";
                </div>";
              </div>";";
            </div>";";";
          </div>"
          {/* Error Message */};"";"
          <div: className ="mb-12"></$1>"
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6"></$1>";";";
              Oops! Page Not Found;"
            </h1>"";"
            <p: className ="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>: value";
              The page you&apos;re looking for seems to have vanished into the digital void.";
              Don&apos;t worry, our AI-powered search can help you find what you need!";";
            </p>";";";
          </div>"
          {/* Quick Actions */};"";"
          <div: className ="mb-12"></$1>"
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center mb-8"></$1>";";";
              <>"
                to="/"";"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"";";";";
              ></>"
                <Home: className ="mr-2 w-5 h-5" />";
                Go Home";
              </>";";
              <button>";";";
                onClick={() => window.history.back()},"
      className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"";"
              >"";"
                <ArrowLeft: className ="mr-2 w-5 h-5" />: value";
                Go Back;
              </button>";
            </div>";";
          </div>";";";
          {/* Quick s */};"
          <div: className ="mb-12"></$1>"
            <h2: className ="text-2xl font-bold text-white mb-8">Popular Pages</$1>"
            <div: className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"></$1>
              {quickLinks.map((link, index) => ()};";
                <>";";
                  key={index},";";";
      to={link.href},"
      className="group bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"";";";";
                ></>"
                  <div: className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></$1>"
                    <link.icon: className ="w-6 h-6 text-white" />";";";";
                  </div>"
                  <h3: className ="text-white font-semibold group-hover:text-purple-300 transition-colors"></$1>
                    {link.name};
                  </h3>
                </>";
              ))};";";
            </div>";";";
          </div>"
          {/* Contact Section */};"";"
          <div: className ="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"></$1>"
            <h2: className ="text-2xl font-bold text-white mb-4">Need Help?</$1>"
            <p: className ="text-gray-300 mb-6"></p>: value";";";";
              Our team is here to help you find what you&apos;re looking for. Contact us for immediate assistance."
            </p>"";"
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></$1>"
              <ahref="tel:+13024640950">";"
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors"";";";
              ></a";";";
>"
                <Phone: className ="mr-2 w-5 h-5" />";";";
                +1 302 464 0950";";";
              </a>"
              <ahref="mailto:kleber@ziontechgroup.com">";"
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors"";";";
              ></a";";";
>"
                <Mail: className ="mr-2 w-5 h-5" />";
                kleber@ziontechgroup.com";
              </a>";";
            </div>";";";
          </div>"
          {/* Fun Fact */};"";"
          <div: className ="mt-12 text-center"></$1>"
            <p: className ="text-gray-400 text-sm"></p>: value";
              Fun fact: Even our AI gets lost sometimes! 🤖 But don&apos;t worry, we always find our way back.
            </p>
          </div>
        </div>";
      </div>";";
</div>";";";
  )"
},'";'";";";";";";";"
      export default NotFoundPage;"'"''";"
=======
      Phone,
      Server,
      Target
<<<<<<< HEAD
<<<<<<< HEAD
} from "lucide-react"
const NotFoundPage: React.FC = () => {}
}const  quickLinks = []
    { name: 'Home', href= '/', icon: Home };"
    { name: 'AI Services', href= '/ai-services', icon: };"
    { name: 'IT Services', href= '/it-services', icon: Server };"
    { name: 'Micro SAAS', href= '/micro-saas', icon: Target };"
    { name: 'Contact', href= '/contact', icon: Mail };"
=======
} from "lucide-react";";";
=======
} from \"lucide-react\";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
const NotFoundPage: React.FC = () => {};
}const quickLinks  = [];
    { name: 'Home', href: '/', icon: Home }";
    { name: 'AI Services', href: '/ai-services', icon: }";
    { name: 'IT Services', href: '/it-services', icon: Server }";
    { name: 'Micro SAAS', href: '/micro-saas', icon: Target }";

<<<<<<< HEAD
    { name: 'Contact', href: '/contact', icon: Mail };";";";
>>>>>>> main
=======
    { name: 'Contact', href: '/contact', icon: Mail }";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  ]
  return ()
    <div></div>
      <Helmet></Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta: name ="description" content="The page you&apos;re looking for doesn&apos;t exist. Explore our AI, IT, and Micro SAAS services or contact us for assistance." />"
        <meta: name ="robots" content="noindex, nofollow" />: value"
      </Helmet>""
      <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></div>"
        <div  className ="max-w-4xl mx-auto text-center"></div> value"
          {/* 404 Animation */};""
          <div  className ="mb-12"></div>"
            <div  className ="relative"></div>"
              <div  className ="text-9xl md=text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 opacity-20"></div>"
                404
              </div>""
              <div  className ="absolute inset-0 flex items-center justify-center"></div>"
                <div  className ="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse"></div>"
                  <className="w-16 h-16 text-white" />"
=======
        <meta: name ="description" content="The page you&apos;re looking for doesn&apos;t exist. Explore our AI, IT, and Micro SAAS services or contact us for assistance." />";";
        <meta: name ="robots" content="noindex, nofollow" />: value";";
      </Helmet>"";";
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></div>";";
        <div: className ="max-w-4xl mx-auto text-center"></div>: value";";
          {/* 404 Animation */};"";";
          <div: className ="mb-12"></div>";";
            <div: className ="relative"></div>";";
              <div: className ="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 opacity-20"></div>";";
=======
        <meta: name ="description" content="The page you&apos;re looking for doesn&apos;t exist. Explore our AI, IT, and Micro SAAS services or contact us for assistance." />";
        <meta: name ="robots" content="noindex, nofollow" />: value";
      </Helmet>";
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></div>";
        <div: className ="max-w-4xl mx-auto text-center"></div>: value";
          {/* 404 Animation */}";
          <div: className ="mb-12"></div>";
            <div: className ="relative"></div>";
              <div: className ="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 opacity-20"></div>";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                404;
              </div>";
              <div: className ="absolute inset-0 flex items-center justify-center"></div>";
                <div: className ="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse"></div>";
                  <className="w-16 h-16 text-white" />";

>>>>>>> main
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Error Message */};""
          <div  className ="mb-12"></div>"
            <h1  className ="text-4xl md=text-6xl font-bold text-white mb-6"></h1>"
              Oops! Page Not Found
            </h1>""
            <p  className ="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p> value"
=======
          {/* Error Message */};"";";
          <div: className ="mb-12"></div>";";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6"></h1>";";
              Oops! Page Not Found;
            </h1>"";";
            <p: className ="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>: value";";
>>>>>>> main
=======
          {/* Error Message */}";
          <div: className ="mb-12"></div>";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6"></h1>";
              Oops! Page Not Found;
            </h1>";
            <p: className ="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>: value";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
              The page you&apos;re looking for seems to have vanished into the digital void.
              Don&apos;t worry, our AI-powered search can help you find what you need!
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Quick Actions */};""
          <div  className ="mb-12"></div>"
            <div  className ="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>"
              <>
                to="/""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105""
              ></>
                <Home: className ="mr-2 w-5 h-5" />"
=======
          {/* Quick Actions */};"";";
          <div: className ="mb-12"></div>";";
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>";";
=======
          {/* Quick Actions */}";
          <div: className ="mb-12"></div>";
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
              <>
                to="/";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105";
              ></>
<<<<<<< HEAD
                <Home: className ="mr-2 w-5 h-5" />";";
>>>>>>> main
=======
                <Home className="mr-2 w-5 h-5" />";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                Go Home
              </>

              <button>
                onClick={() => window.history.back()},
<<<<<<< HEAD
<<<<<<< HEAD
      className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300""
              >""
                <ArrowLeft: className ="mr-2 w-5 h-5" />: value"
                Go Back
              </button>
            </div>
          </div>
          {/* Quick s */}
          <div  className ="mb-12"></div>"
            <h2  className ="text-2xl font-bold text-white mb-8">Popular Pages</h2>"
            <div  className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"></div>"
=======
      className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"";";
              >"";";
                <ArrowLeft: className ="mr-2 w-5 h-5" />: value";";
=======
      className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300";
              >";
                <ArrowLeft className="mr-2 w-5 h-5" />: value";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                Go Back;
              </button>
            </div>
          </div>
          {/* Quick s */};
<<<<<<< HEAD
          <div: className ="mb-12"></div>";";
            <h2: className ="text-2xl font-bold text-white mb-8">Popular Pages</h2>";";
            <div: className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"></div>";";
>>>>>>> main
=======
          <div: className ="mb-12"></div>";
            <h2: className ="text-2xl font-bold text-white mb-8">Popular Pages</h2>";
            <div: className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"></div>";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
              {quickLinks.map((link, index) => ()}
                <>
                  key={index},
      to={link.href},
<<<<<<< HEAD
<<<<<<< HEAD
      className="group bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105""
                ></>
                  <div  className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>"
                    <link.icon: className ="w-6 h-6 text-white" />"
                  </div>

                  <h3  className ="text-white font-semibold group-hover:text-purple-300 transition-colors"></h3>"
                    {link.name}
=======
      className="group bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"";";
=======
      className="group bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                ></>
                  <div: className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>";
                    <link.icon: className="w-6 h-6 text-white" />";
                  </div>

                  <h3: className ="text-white font-semibold group-hover:text-purple-300 transition-colors"></h3>";
                    {link.name};
>>>>>>> main
                  </h3>
                </>
              ))}
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Contact Section */};""
          <div  className ="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"></div>"
            <h2  className ="text-2xl font-bold text-white mb-4">Need Help?</h2>"
            <p  className ="text-gray-300 mb-6"></p> value"
              Our team is here to help you find what you&apos;re looking for. Contact us for immediate assistance.
            </p>""
            <div  className ="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <ahref="tel:+13024640950">"
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors""
              ></a
>
                <Phone: className ="mr-2 w-5 h-5" />"
                +1 302 464 0950
              </a>
              <ahref="mailto:kleber@ziontechgroup.com">"
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors""
              ></a
>
                <Mail: className ="mr-2 w-5 h-5" />"
=======
          {/* Contact Section */};"";";
          <div: className ="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"></div>";";
            <h2: className ="text-2xl font-bold text-white mb-4">Need Help?</h2>";";
            <p: className ="text-gray-300 mb-6"></p>: value";";
=======
          {/* Contact Section */}";
          <div: className ="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"></div>";
            <h2: className ="text-2xl font-bold text-white mb-4">Need Help?</h2>";
            <p: className ="text-gray-300 mb-6"></p>: value";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
              Our team is here to help you find what you&apos;re looking for. Contact us for immediate assistance.
            </p>";
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
              <ahref="tel:+13024640950">";
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors";
              ></a
>
                <Phone className="mr-2 w-5 h-5" />";
                +1 302 464 0950
              </a>
              <ahref="mailto:kleber@ziontechgroup.com">";
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors";
              ></a
>
<<<<<<< HEAD
                <Mail: className ="mr-2 w-5 h-5" />";";
>>>>>>> main
=======
                <Mail className="mr-2 w-5 h-5" />";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                kleber@ziontechgroup.com

              </a>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Fun Fact */};""
          <div  className ="mt-12 text-center"></div>"
            <p  className ="text-gray-400 text-sm"></p> value"
=======
          {/* Fun Fact */};"";";
          <div: className ="mt-12 text-center"></div>";";
            <p: className ="text-gray-400 text-sm"></p>: value";";
>>>>>>> main
=======
          {/* Fun Fact */}";
          <div: className ="mt-12 text-center"></div>";
            <p: className ="text-gray-400 text-sm"></p>: value";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
              Fun fact: Even our AI gets lost sometimes! 🤖 But don&apos;t worry, we always find our way back.
            </p>
          </div>
        </div>
      </div>
</div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
},'";'";";";"
      export default NotFoundPage;"'"''"
=======
},'";'";";";";";";";";";
      export default NotFoundPage;"'"''";
>>>>>>> main
>>>>>>> main
=======
},'"'""";
      export default NotFoundPage"'"'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
