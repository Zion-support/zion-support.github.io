import React from 'react';
export default EnhancedFooter;



const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

                Get Started;
            <h4 className="text-lg font-semibold text-whitemb-4">Services</h4>
              <li /><Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400transition-colors">AI Solutions</Link></li>
              <li /><Link to="/it-services" className="text-gray-300 hover:text-cyan-400transition-colors">IT Services</Link></li>
              <li /><Link to="/cloud-solutions" className="text-gray-300 hover:text-cyan-400transition-colors">Cloud Solutions</Link></li>
              <li /><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400transition-colors">Cybersecurity</Link></li>
            <h4 className="text-lg font-semibold text-whitemb-4">Contact</h4>
                <span>contact@ziontechgroup.com</span>
                <span>+1 (555) 123-4567</span>
                <span>New York, NY</span>
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

