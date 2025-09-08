            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <a href="/services" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Services</span>
                </a>
                
                <a href="/talent" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-purple to-zion-purple-dark flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Talent</span>
                </a>
                
                <a href="/about" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">About</span>
                </a>
                
                <a href="/contact" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <Menu className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Contact</span>
                </a>
              </div>
              
              <div className="pt-4 border-t border-zion-blue-light/30">
                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
