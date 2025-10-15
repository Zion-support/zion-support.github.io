import React, { useState, useCallback, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FuturisticNavigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleServicesMouseEnter = useCallback(() => {
    setServicesOpen(true);
  }, []);

  const handleServicesMouseLeave = useCallback(() => {
    setServicesOpen(false);
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const createMatrixRain = () => {
      const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
      const matrixArray = matrix.split("");

      const fontSize = 14;
      const columns = canvas.width / fontSize;

      const drops: number[] = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }

      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ffff';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
          const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  const interval = setInterval(draw, 35);
  return () => clearInterval(interval);
};

const cleanup = createMatrixRain();
return cleanup;
}, []);

return (
  <>
    {/* Matrix Rain Background */}
    <canvas
      id="matrix-canvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
    
    <nav className="relative z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="relative">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:animate-pulse">
                  ZION TECH GROUP
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="relative text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </Link>
            
            <Link 
              to="/about" 
              className="relative text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </Link>
            
            {/* Enhanced Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                className="relative text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 group"
              >
                <span className="relative z-10">Services</span>
                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </button>
              
              {servicesOpen && (
                <div
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                  className="absolute left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-cyan-500/30 z-50 overflow-hidden"
                >
                  <div className="p-6">
                    {/* AI & Machine Learning */}
                    <div className="mb-6">
                      <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                        AI & Machine Learning
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        <Link to="/ai-services" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 group">
                          <div className="flex items-center">
                            <span className="text-lg mr-3">🤖</span>
                            <div>
                              <div className="font-medium">AI Services</div>
                              <div className="text-xs text-gray-500">Machine Learning & AI Solutions</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="/ai-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 group">
                          <div className="flex items-center">
                            <span className="text-lg mr-3">🧠</span>
                            <div>
                              <div className="font-medium">AI Solutions</div>
                              <div className="text-xs text-gray-500">Custom AI Implementations</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="/data-analytics" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 group">
                          <div className="flex items-center">
                            <span className="text-lg mr-3">📊</span>
                            <div>
                              <div className="font-medium">Data Analytics</div>
                              <div className="text-xs text-gray-500">Business Intelligence & Insights</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* IT Services */}
                    <div className="mb-6">
                      <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-4 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                        IT Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        <Link to="/it-services" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300 group">
                          <div className="flex items-center">
                            <span className="text-lg mr-3">💻</span>
                            <div>
                              <div className="font-medium">IT Services</div>
                              <div className="text-xs text-gray-500">Comprehensive IT Solutions</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="/web-development" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300 group">
                          <div className="flex items-center">
                            <span className="text-lg mr-3">🌐</span>
                            <div>
                              <div className="font-medium">Web Development</div>
                              <div className="text-xs text-gray-500">Modern Web Applications</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="/mobile-development" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300 group">
                          <div className="flex items-center">
                            <span className="text-lg mr-3">📱</span>
                            <div>
                              <div className="font-medium">Mobile Development</div>
                              <div className="text-xs text-gray-500">iOS & Android Apps</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="/cloud-infrastructure" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300 group">
                          <div className="flex items-center">
                            <span className="text-lg mr-3">☁️</span>
                            <div>
                              <div className="font-medium">Cloud Infrastructure</div>
                              <div className="text-xs text-gray-500">Scalable Cloud Solutions</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Micro SaaS Solutions */}
                    <div className="mb-6">
                      <h3 className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-4 flex items-center">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></span>
                        Micro SaaS Solutions
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        <Link to="/micro-saas-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-300 group">
                          <div className="flex items-center">
                            <span className="text-lg mr-3">⚡</span>
                            <div>
                              <div className="font-medium">Micro SaaS Solutions</div>
                              <div className="text-xs text-gray-500">Specialized Software Tools</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="/digital-transformation" className="block px-4 py-3 text-sm text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-300 group">
                          <div className="flex items-center">
                            <span className="text-lg mr-3">🚀</span>
                            <div>
                              <div className="font-medium">Digital Transformation</div>
                              <div className="text-xs text-gray-500">Modernize Your Business</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* AI Tools */}
                    <div>
                      <h3 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-4 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        AI Tools
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-xs text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300">
                          Content Moderator
                        </Link>
                        <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-xs text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300">
                          Sales Predictor
                        </Link>
                        <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-xs text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300">
                          Workflow Automator
                        </Link>
                        <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-xs text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-300">
                          Financial Forecaster
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/pricing" 
              className="relative text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Pricing</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </Link>
            
            <Link 
              to="/team" 
              className="relative text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </Link>
            
            <Link 
              to="/contact" 
              className="relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            >
              About
            </Link>
            
            {/* Mobile Services */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-medium text-cyan-400">AI & Machine Learning</div>
              <Link to="/ai-services" className="block px-6 py-2 rounded-md text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                AI Services
              </Link>
              <Link to="/ai-solutions" className="block px-6 py-2 rounded-md text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                AI Solutions
              </Link>
              <Link to="/data-analytics" className="block px-6 py-2 rounded-md text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                Data Analytics
              </Link>
              
              <div className="px-3 py-2 text-base font-medium text-purple-400 mt-4">IT Services</div>
              <Link to="/it-services" className="block px-6 py-2 rounded-md text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                IT Services
              </Link>
              <Link to="/web-development" className="block px-6 py-2 rounded-md text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                Web Development
              </Link>
              <Link to="/mobile-development" className="block px-6 py-2 rounded-md text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                Mobile Development
              </Link>
              <Link to="/cloud-infrastructure" className="block px-6 py-2 rounded-md text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                Cloud Infrastructure
              </Link>
              
              <div className="px-3 py-2 text-base font-medium text-pink-400 mt-4">Micro SaaS Solutions</div>
              <Link to="/micro-saas-solutions" className="block px-6 py-2 rounded-md text-sm text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300">
                Micro SaaS Solutions
              </Link>
              <Link to="/digital-transformation" className="block px-6 py-2 rounded-md text-sm text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300">
                Digital Transformation
              </Link>
            </div>
            
            <Link 
              to="/pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Pricing
            </Link>
            <Link 
              to="/team" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  </>
);
});

FuturisticNavigation.displayName = 'FuturisticNavigation';

export default FuturisticNavigation;