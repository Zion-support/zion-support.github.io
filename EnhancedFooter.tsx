import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, Mail, Phone, MapPin} from 'lucide-react';

const Enhanced Footer: React.FC = () => {
  return (
    <footerclassName ="bg-slate-900 border-tborder-slate-800">
      <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8py-12">
        <div className ="gridgrid-cols-1 md:grid-cols-4gap-8" />
          <div className ="col-span-1 md:col-span-2" />
            <h3className ="text-2xlfont-boldtext-whitemb-4">ZionTech Group</h3>
            <pclassName ="text-gray-300mb-6" />
              Leadingprovider ofAI andIT solutionsfor businessesworldwide.
            </p>
            <div className ="flexspace-x-4" />
              <Link to ="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-whitepx-6 py-3 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-center" />
                GetStarted
                <Arrow Rightclass Name="w-4 h-4ml-2" />
              </Link>
            </div>
          </div>
          
          <div />
            <h4className ="text-lgfont-semiboldtext-whitemb-4">Services</h4>
            <ulclassName ="space-y-2" />
              <li><Link to ="/ai-solutions" className="text-gray-300 hover:text-cyan-400transition-colors">AISolutions</Link></li>
              <li><Link to ="/it-services" className="text-gray-300 hover:text-cyan-400transition-colors">ITServices</Link></li>
              <li><Link to ="/cloud-solutions" className="text-gray-300 hover:text-cyan-400transition-colors">CloudSolutions</Link></li>
              <li><Link to ="/cybersecurity" className="text-gray-300 hover:text-cyan-400transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div />
            <h4className ="text-lgfont-semiboldtext-whitemb-4">Contact</h4>
            <div className ="space-y-3" />
              <div className ="flexitems-centertext-gray-300" />
                <Mailclass Name ="w-4 h-4mr-2" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className ="flexitems-centertext-gray-300" />
                <Phoneclass Name ="w-4 h-4mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className ="flex items-centertext-gray-300" />
                <Map Pinclass Name="w-4 h-4mr-2" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className ="border-t border-slate-800 mt-8 pt-8text-center" />
          <pclassName ="text-gray-400" />
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Enhanced Footer;
