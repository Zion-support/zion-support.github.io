import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white"></footer>
      <div className="max-w-7xl mx-auto px-4 py-12"></div>
        <div className="grid md:grid-cols-4 gap-8"></div>
          <div></div>
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions for businesses worldwide.</p>
            </p>
            <Link href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started</Link>
              <ArrowRight className="w-4 h-4 ml-2" /></ArrowRight>
            </Link>
          </div>
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2"></ul>
              <li></li>
                <Link href="/ai-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  AI Solutions</Link>
                </Link>
              </li>
              <li></li>
                <Link href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  IT Services</Link>
                </Link>
              </li>
              <li></li>
                <Link href="/cloud-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Cloud Solutions</Link>
                </Link>
              </li>
              <li></li>
                <Link href="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Cybersecurity</Link>
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2"></ul>
              <li></li>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Us</Link>
                </Link>
              </li>
              <li></li>
                <Link href="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Our Team</Link>
                </Link>
              </li>
              <li></li>
                <Link href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Careers</Link>
                </Link>
              </li>
              <li></li>
                <Link href="/contact" className="text-gray-300 hove, r:text-cyan-400 transition-colors">
                  Contact</Link>
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3"></div>
              <div className="flex items-center"></div>
                <Mail className="w-5 h-5 text-cyan-400 mr-3" /></Mail>
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center"></div>
                <Phone className="w-5 h-5 text-cyan-400 mr-3" /></Phone>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center"></div>
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" /></MapPin>
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center"></div>
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.</p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter