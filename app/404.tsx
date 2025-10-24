'use client';
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website"  /></Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">{/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">404</div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
              <AlertTriangle className="w-6 h-6 text-red-400"  />
            </div>
          </div>{/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              <Home className="w-5 h-5 mr-2"  />
              Go Home
            </Link>
            </button>
          </div>
          <div className="mt-12">
            <p className="text-gray-400 mb-4">Looking for something specific?</p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />
              <input"
                type="text"
                placeholder="Search our services..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  }
                }}
              />
            </div>
          </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">Services</Link>
              <Link href="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors">About Us</Link>
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">Contact</Link>
              <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>