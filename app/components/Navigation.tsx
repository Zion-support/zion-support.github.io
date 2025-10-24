"use client"
import { Link  } from "next/link";
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw   } from "lucide-react";
const Navigation = () => {
  return (<div>
          {/* Desktop Navigation*/}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>

        <title>404 - Page Not Found|Zion Tech Group</title>
        
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og: type" content="website" />

      
      </Head>
    </div>,<div className="[^"]*"> <div className="[^"]*">
          {/* 404 Animation*/) => {

} <div className="[^"]*"> <div className="[^"]*">
              404 <div className="[^"]*"> <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
              </div>
          {/* Error Message*/} <h1 className="[^"]*">
Page Not Found
          </h1> <p className="[^"]*">
Oops! The page you"re looking for seems to have vanished into the digital void. Don"t, worry,even our AI can"t predict everything!
          </p>

          {/* Search Suggestion*/} <div className="[^"]*"> <div className="[^"]*"> <Search className="w-6 h-6 text-cyan-400 mr-2" />
    <h1 className="text-lg font-semibold text-white">What were you looking for?</h2>
                </div>
            <p className="text-gray-300 text-sm mb-4">Try searching for one of these popular pages: "</p>",<div className="[^"]*">
              {[{ name: "Home",path: "/" }
                { name: "About",path: "/about" }
                { name: "Services",path: "/services" }
                { name: "Contact",path: "/contact" })
              ].map((item, index) => (<Link key = {index} href = {item.path} className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300">
                  {item.name}
                </Link>
              )
  );
}
                </div>
              </div>
          {/* Action Buttons*/}

    <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">
      <Link href="/" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"> <Home className="w-5 h-5 mr-2" />
Go Home

      </Link>
    </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen?"Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen?(<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
</div>
          {/* Help Section*/} <div className="[^"]*">
    <h1 className="text-lg font-semibold text-white mb-3">Need Help?</h3> <p className="[^"]*">
Our support team is here to help you navigate our services and find exactly what you"re looking for.
            </p>
    <div className="flex flex-col sm: flex-row gap-3 justify-center">
      <Link href="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"> <RefreshCw className="w-4 h-4 mr-2" />
Contact Support

      </Link>
    </div>
              <a href="mailto:support@ziontechgroup.com" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
Send Email
              </a>
                </div>
              </div>

          {/* Fun Fact*/} <div className="[^"]*"> <p className="[^"]*">
    <span className="text-cyan-400">Fun Fact: "</span> Even our AI gets
confused sometimes. That"s why we have humans to help when things
go wrong! 🤖
            </p>
              </div>
            </div>
          </div>
    </div>
    </>
  ) "}

export default Navigation
    </div>
}
export default Navigation