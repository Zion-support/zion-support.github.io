

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";


const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear();


  const company = null;
  ];
  const resources = null;
  ];
  const socialLinks = null;
const EnhancedFooter: React.FC = () => {const currentYear = new Date().getFullYear();
import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Globe
  Twitter, Linkedin, Facebook, Instagram
  ArrowRight, Rocket, Brain, Cpu, Shield
  Star, Users, TrendingUp, Zap
} from 'lucide-react'
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: 'Next-Generation AI'
    services: [
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' }
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' }
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' }
    ]
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
              </a>;
            </div>;
          </div>;
          {/* Services */}
                  Web Development;
                </Link>;
              </li>;
              <li>;
                  Mobile Apps;
                </Link>;
              </li>;
              <li>;
                  AI Solutions;
                </Link>;
              </li>;
              <li>;
                  Cloud Services;
                </Link>;
              </li>;
            </ul>;
          </div>;
          {/* Company */}
                  About Us;
                </Link>;
              </li>;
              <li>;
                  Careers;
                </Link>;
              </li>;
              <li>;
                  Blog;
                </Link>;
              </li>;
              <li>;
                  Contact;
                </Link>;
              </li>;
            </ul>;
          </div>;
          {/* Contact Info */}
              </div>;
            </div>;
          </div>;
        </div>;
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors">;
                Privacy Policy;
              </Link>;
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors">;
        <div className="border - t border - gray - 800 mt - 8 pt - 8">;
          <div className="flex flex - col md:flex - row justify - between items - center">;
<p className="text - gray - 400 text - sm">;
              © {current_year} Zion Tech Group. All rights reserved.;
            </p>;
            <div className="flex space - x-6 mt - 4 md:mt - 0">;
              <Link;
                href="/privacy";
                className="text - gray - 400 hover:text - white text - sm transition - colors";
              >;
                Privacy Policy;
              </Link>;
              <Link;
                href="/terms";
                className="text - gray - 400 hover:text - white text - sm transition - colors";
              >;
                Terms of Service;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>);
}
;
export default EnhancedFooter;
;
