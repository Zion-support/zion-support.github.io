import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <link.icon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
