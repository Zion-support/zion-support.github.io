import { Helmet } from 'react-helmet-async'"";"
import {};
      Home,
      ArrowLeft,
      Mail,
const NotFoundPage: React.FC = () => {};
}const quickLinks  = [];
    { name: 'Home', href: '/', icon: Home }";"
    { name: 'AI Services', href: '/ai-services', icon: }";"
    { name: 'IT Services', href: '/it-services', icon: Server }";"
    { name: 'Micro SAAS', href: '/micro-saas', icon: Target }";"

    { name: 'Contact', href: '/contact', icon: Mail }";"
  ]
  return ()
    <div></div>
      <Helmet></Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
                404;
              </div>";"
              <div: className ="absolute inset-0 flex items-center justify-center"></div>";"
                <div: className ="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse"></div>";"
                  <className="w-16 h-16 text-white" />";"
              The page you&apos;re looking for seems to have vanished into the digital void.
              Don&apos;t worry, our AI-powered search can help you find what you need!
            </p>
          </div>
                to="/";"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105";"
              ></>
                <Home className="mr-2 w-5 h-5" />";"
                Go Home
              </>

              <button>
                onClick={() => window.history.back()},
                Go Back;
              </button>
            </div>
          </div>
          {/* Quick s */};
          <div: className ="mb-12"></div>";"
            <h2: className ="text-2xl font-bold text-white mb-8">Popular Pages</h2>";"
            <div: className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"></div>";"
              {quickLinks.map((link, index) => ()}
                  key={index},
      to={link.href},
                ></>
                  <div: className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>";"
                    <link.icon: className="w-6 h-6 text-white" />";"
                  </div>

                  <h3: className ="text-white font-semibold group-hover:text-purple-300 transition-colors"></h3>";"
                    {link.name};
                  </h3>
                </>
              ))}
            </div>
          </div>
              Our team is here to help you find what you&apos;re looking for. Contact us for immediate assistance.
            </p>";"
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";"
              <ahref="tel:+13024640950">";"
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors";"
              ></a
                <Phone className="mr-2 w-5 h-5" />";"
                +1 302 464 0950
              </a>
              <ahref="mailto:kleber@ziontechgroup.com">";"
                className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors";"
              ></a
                <Mail className="mr-2 w-5 h-5" />";"
                kleber@ziontechgroup.com

              </a>
            </div>
          </div>
          {/* Fun Fact */}";"
          <div: className ="mt-12 text-center"></div>";"
            <p: className ="text-gray-400 text-sm"></p>: value";"
              Fun fact: Even our AI gets lost sometimes! 🤖 But don&apos;t worry, we always find our way back.
            </p>
          </div>
        </div>
      </div>
</div>
  )
},'"'""";"
      
