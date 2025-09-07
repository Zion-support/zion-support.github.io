
  return (
    <footer className="bg-gray-900 text-white>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2>
            <div className="flex items-center mb-4">
              <div className=w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl>Z</span>
              </div>
              <div>
                <div className="text-xl font-bold">Zion Tech Group</div>
                <div className=text-sm text-gray-400">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md>
              Leading provider of AI solutions, cloud services, and technology consulting.
              Transforming businesses through innovation and cutting-edge technology.
            </p>

            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">

              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/consulting" className="text-gray-300 hover:text-white">Consulting</Link></li>
            </ul>
          </div>
          
          <div>

            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">123 Tech Street<br />Innovation City, IC 12345</span>
              </div>
            </div>
          </div>
        </div>

