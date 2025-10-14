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
}
}
      setIsScrolled(window.scrollY > 50);}
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {

      window.removeEventListener('resize', handleResize);}
}
      window.removeEventListener('scroll', handleScroll);}
    }
  }, []);

  const closeAllMenus = () => {

    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);}
}
    setIsOpen(false);}
  }
  ];

              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group;"
              <p className="text-xs text-cyan-400">AI & IT Solutions;"
            <to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About;
                            <to={`/${category.title.toLowerCase().replace(&apos; &apos;, &apos;-&apos;)}`}"
                    <to="$1">
              )}
          {/* Contact Info */}"
          <div className="hidden lg:flex items-center space-x-4">"
            <to="$1"">
            <to="$1"">
              className="$1"
              onClick={closeAllMenus}
            >
              Blog;"
            <to="$1"">
              className="$1"
              onClick={closeAllMenus}
            >
              Contact;
            {/* CTA Button */}
            <a;">
              href="$1""
              className="$1"
              onClick={closeAllMenus}
            >"
              <className="w-4 h-4 mr-2" />
              (302) 464-0950;"
              <to="$1"">
              <to="$1"">
                className="$1"
                onClick={closeAllMenus}
              >
                About;
              {/* Mobile Services */}
                <button;">
                          <to="$1"">
                            className="$1"
                          >"
              <div className="mt-4 pt-4 border-t border-gray-700">
                <a;">
                  href="$1""
                  className="$1"
                  onClick={closeAllMenus}
                >"
                  <className="w-4 h-4 inline mr-2" />
                  (302) 464-0950;
        )}
  );
}
export default ;
"`