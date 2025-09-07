  Phone;
  Mail;
  MapPin;
  Facebook;
  Twitter;
  Linkedin;
  Instagram;
  ArrowRight;
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";""
import React from 'react';''
import Link from 'next/link';''
import { motion } from 'framer-motion';'
import {
  // TODO: Implement
}
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github;'
} from 'lucide-react';'
const socialLinks = ['
  { name: 'Facebook', href: '#', icon: Facebook },''
  { name: 'Twitter', href: '#', icon: Twitter },''
  { name: 'LinkedIn', href: '#', icon: Linkedin },''
  { name: 'Instagram', href: '#', icon: Instagram },''
  { name: 'GitHub', href: '#', icon: Github }']
];
export default function Footer() {
  return ('
    <footer className="bg-gray-900 text-white">"
</footer>"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"
</div>"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
</div>"
          <div className="col-span-1 md:col-span-2">"
</div>"
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>""
            <p className="text-gray-300 mb-4">"
</p>
            </p>"
            <div className="flex space-x-4">"
</div>
                <a;
                  key={link.name}
                  href={link.href}"
                  className="text-gray-400 hover:text-white transition-colors""
                >
</a>"
                  <link.icon className="h-5 w-5" />"
</link>
                </a>
              </div>"
              <div className="flex items-center>"
</div>"
                <Mail className="w-4 h-4 mr-2 text-blue-400" />"
</Mail>"
                <a href=mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors>"
</a>
                </a>
              </div>"
              <div className="flex items-center">"
</div>"
                <MapPin className=w-4 h-4 mr-2 text-blue-400" />"
</MapPin>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
                <span>
</span>
                  <br />
</br>
                </span>
              </div>
            </div>
          </div>
          <div>
</div>"
            <h3 className="text-lg font-semibold mb-4">Services</h3>""
            <ul className="space-y-2">"
</ul>
                <li key={link.name}>
</li>
                  </Link>
                </li>
"
            <h3 className="text-lg font-semibold mb-6>Services</h3>""
            <div className="space-y-4">"
</div>
                <div key={category}>
</div>"
                  <h4 className=text-sm font-medium text-blue-400 mb-2">{category}</h4>""
                  <ul className="space-y-1>"
</ul>
                      <li key={link.name}>
</li>
                        <Link;
                          href={link.href}"
                          className="text-sm text-gray-300 hover:text-white transition-colors""
                        >
</Link>
                        </Link>
                      </li>
                  </ul>
                </div>"
            <div className="space-y-3">;"
</div>"
              <div className="flex items-center text-gray-300">;"
</div>"
                <Phone className="w-4 h-4 mr-3" />;"
</Phone>
                <span>+1 302 464 0950</span>;
              </div>;"
              <div className="flex items-center text-gray-300">;"
</div>"
                <Mail className="w-4 h-4 mr-3" />;"
</Mail>
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;"
              <div className="flex items-start text-gray-300">;"
</div>"
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />;"
</MapPin>
                <span>;
</span>
                  <br />;
</br>
                </span>;
              </div>;
            </div>;
          </div>;
          <div>;
</div>"
            <h3 className="text-lg font-semibold mb-4">Services</h3>;""
            <ul className="space-y-2">;"
</ul>
                <li key={link && link.name}>;
</li>
                  <Link;
                    href={link && link.href}"
                    className="text-gray-300 hover:text-white transition-colors">;"
</Link>
                  </Link>;
                </li>;
            </ul>;
          </div>;
          <div>;
</div>"
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;""
            <ul className="space-y-2">;"
</ul>
                <li key={link && link.name}>;
</li>
          <div>
</div>"
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>""
            <ul className="space-y-2">"
</ul>
                <li key={link.name}>
</li>
                  <Link;
          {/* Company */}
          <div>
</Link>"
            <h3 className=text-lg font-semibold mb-6">Company</h3>""
            <ul className="space-y-3>"
</ul>
                <li key={link.name}>
</li>
                  <Link;
                    href={link.href}"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200""
                  >
</Link>
                  </Link>
                </li>
            </ul>
          </div>
          
          <div>
</div>"
            <h4 className="text-lg font-semibold mb-4">Services</h4>""
            <ul className="space-y-2">"
</ul>"
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>""
              <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>""
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>""
              <li><Link href="/consulting" className="text-gray-300 hover:text-white">Consulting</Link></li>"
            </ul>
          </div>
          
          <div>
</div>"
            <h4 className="text-lg font-semibold mb-4">Contact</h4>""
            <div className="space-y-2 text-gray-300">"
</div>"
              <div className="flex items-center">"
</div>"
                <MapPin className="h-4 w-4 mr-2" />"
</MapPin>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>"
              <div className="flex items-center">"
</div>"
                <Phone className="h-4 w-4 mr-2" />"
</Phone>
                <span>+1 302 464 0950</span>
              </div>"
              <div className="flex items-center">"
</div>"
                <Mail className="h-4 w-4 mr-2" />"
</Mail>
                <span>kleber@ziontechgroup.com</span>"
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>""
              <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>""
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>""
              <li><Link href="/consulting" className="text-gray-300 hover:text-white">Consulting</Link></li>"
            </ul>
          </div>
          
          <div>
</div>"
            <h4 className="text-lg font-semibold mb-4">Contact</h4>""
            <div className="space-y-2 text-gray-300">"
</div>"
              <div className="flex items-center">"
</div>"
                <MapPin className="h-4 w-4 mr-2" />"
</MapPin>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>"
              <div className="flex items-center">"
</div>"
                <Phone className="h-4 w-4 mr-2" />"
</Phone>
                <span>+1 302 464 0950</span>
              </div>"
              <div className="flex items-center">"
</div>"
                <Mail className="h-4 w-4 mr-2" />"
</Mail>
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
        "
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">"
</div>
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>"
        <div className="border-t border-gray-800 mt-8 pt-8>"
</div>"
          <div className="flex flex-col md:flex-row items-center justify-between">"
</div>"
            <div className=text-gray-400 text-sm mb-4 md:mb-0">"
</div>
            </div>"
            <div className="flex space-x-6 text-sm>"
</div>"
              <Link href="/privacy" className=text-gray-400 hover:text-white transition-colors">"
</Link>
              <Link;"
                href="/privacy"""
                className="text-gray-400 hover:text-white transition-colors""
              >
</Link>
              </Link>"
                <Instagram className="w-5 h-5" />;"
</Instagram>
              </a>;
            </div>;"
            <div className="flex space-x-6 text-sm">;"
</div>
              <Link;"
                href="/privacy"""
                className="text-gray-400 hover:text-white transition-colors">;"
</Link>
              </Link>;
              <Link;"
                href="/terms"""
                className="text-gray-400 hover:text-white transition-colors">;"
</Link>
              </Link>;
              <Link;"
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">"
</Link>
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>)"