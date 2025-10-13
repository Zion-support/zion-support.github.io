import React from 'react';
import { useState, useEffect } from 'react;
import { } from 'react-router-dom;
import { ChevronDown, Menu, X, Right, Star, Square, } from 'lucide-react;
const : React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  ];

              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group;
              <p className="text-xs text-cyan-400">AI & IT Solutions;
            <to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">;
              About;
                            <to={`/${category.title.toLowerCase().replace(&apos; &apos;, &apos;-&apos;)}`}
                    <to="/services";
              )}
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">;
            <to="/case-studies";
            <to="/blog";
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium";
              onClick={closeAllMenus}
            >;
              Blog;
            <to="/contact";
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium";
              onClick={closeAllMenus}
            >;
              Contact;
            {/* CTA Button */}
            <a;
              href="tel:+13024640950";
              className="cyber-button inline-flex items-center";
              onClick={closeAllMenus}
            >;
              <className="w-4 h-4 mr-2" />;
              (302) 464-0950;
              <to="/";
              <to="/about";
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md";
                onClick={closeAllMenus}
              >;
                About;
              {/* Mobile Services */}
                <button;
                          <to="/services";
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium";
                          >;
              <div className="mt-4 pt-4 border-t border-gray-700">;
                <a;
                  href="tel:+13024640950";
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all";
                  onClick={closeAllMenus}
                >;
                  <className="w-4 h-4 inline mr-2" />;
                  (302) 464-0950;
        )}
  );
};

export default ;
