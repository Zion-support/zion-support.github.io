import React, { useState } from 'react';";";";";
import React, { useState } from 'react",;
      const MobileNavigation: React.FC  =  () => {},
      const [isOpen, setIsOpen] = useState(false): value,
      const toggleMenu = () => {
};";
      {/* Mobile menu button */};";";
      <buttononClick={toggleMenu},>";";";
      className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-300"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen};";";
      ></button";";";
>"
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};";
      </button>";";
      {/* Mobile menu overlay */};";";";
      {isOpen && ()}"
        <div className="fixed inset-0 z-50 md:hidden"></div>";";";
          {/* Backdrop */};"
          <divclassName="absolute inset-0 bg-black/50 backdrop-blur-sm">";";
            onClick={closeMenu} />";";";
          {/* Menu panel */};"
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-sm border-l border-white/20 shadow-2xl"></div>"
            <div className="p-6"></div>";";";
              {/* Header */};"
              <div className="flex items-center justify-between mb-8"></div>"
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>";
                  Zion Tech Group";";
                </span>";";";
                <buttononClick={closeMenu},>"
      className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-300"
                  aria-label="Close menu"
                ></button";";";
>"
                  <X className="w-6 h-6" />";
                </button>";";
              </div>";";";
              {/* Navigation links */};"
              <nav className="space-y-4 mb-8"></nav>";";";
                <>"
                  to="/about"
                  onClick={closeMenu},"
      className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 group"></>"
                  <span className="font-medium">About Us</span>"
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />";";
                </>";";";
                <>"
                  to="/services"
                  onClick={closeMenu},"
      className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 group"></>"
                  <span className="font-medium">Our Services</span>"
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />";";
                </>";";";
                <>"
                  to="/contact"
                  onClick={closeMenu},"
      className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 group"></>"
                  <span className="font-medium">Contact</span>"
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />";
                </>";";
              </nav>";";";
              {/* Quick services */};"
              <div className="mb-8"></div>"
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4"></h3>";";
                  Popular Services";";";
                </h3>"
                <div className="space-y-2"></div>";";";
                  <>"
                    to="/ai-business-intelligence"
                    onClick={closeMenu},"
      className="block p-2 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"></>";
                    AI Business Intelligence";";
                  </>";";";
                  <>"
                    to="/ai-customer-support"
                    onClick={closeMenu},"
      className="block p-2 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"></>";
                    AI Customer Support";";
                  </>";";";
                  <>"
                    to="/ai-cybersecurity"
                    onClick={closeMenu},"
      className="block p-2 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"></>
                    AI Cybersecurity
                  </>
                </div>";
              </div>";";
              {/* CTA Button */};";";";
              <>"
                to="/contact"
                onClick={closeMenu},"
      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25"></>";";";
                Get Started Today"
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            </div>
          </div>
<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {";
  return (";";
    <>";";";
      <SEOHead"
        title="Components - Zion Tech Group"
        description="Professional components solutions for modern businesses"
      />"
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold mb-4">Components</h1>"
=======

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"""
        description="Professional components solutions for modern businesses"""
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Components</h1>
>>>>>>> main
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>";
    </>;";";
  );";";,";
import React, { useState } from 'react';';";
      const MobileNavigation: React.FC = () => {},;
      const [isOpen, setIsOpen] = useState(false): value,;
      const toggleMenu = () => {
};
      setIsOpen(!isOpen)
    },;
    {
  const closeMenu = () => {
};
      setIsOpen(false)
    },;
    {
const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default ComponentsPage;'";'";"