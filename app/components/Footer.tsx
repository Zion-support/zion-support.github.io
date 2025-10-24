import React from "react";
import Link from 'next/link';import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';
const Footer: "React.FC = () => {
  ;const currentYear = new Date().getFullYear();    const aiServices = ['    { name="'AI Analytics Dashboard'", href: "'/ai-analytics-dashboard' "},'    { name='AI Content Generator', href: "'/ai-content-generator' ""},'    { name="'AI Voice Assistant', href: "'/ai-voice-assistant' "},'    { name='AI Image Generator', href: "'/ai-image-generator' ""},'    { name="'AI Code Assistant', href: "'/ai-code-assistant' "},'    { name='AI Business Intelligence', href: "'/ai-business-intelligence' ""}  ];  const techServices = ['    { name="'Blockchain Solutions', href: "'/blockchain' "},'    { name='Cloud Migration', href: "'/cloud-migration-pro' ""},'    { name="'Cybersecurity', href: "'/security' "},'    { name='5G Implementation', href: "'/5g-implementation' ""},'    { name="'Quantum Computing', href: "'/quantum-computing' "},'    { name='IoT Solutions', href: "'/zion-iot-solutions' ""}  ];  const companyLinks = ['    { name="'About Us', href: "'/about' "},'    { name='Our Team', href: "'/team' ""},'    { name="'Careers', href: "'/careers' "},'    { name='Case Studies', href: "'/case-studies' ""},'    { name="'Contact', href: "'/contact' "},'    { name='Blog', href: "'/blog' ""}
  ];
  return (    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white>      <div className="max-w-7xl mx-auto px-4 py-16">"        <div className="grid grid-cols-1 md=grid-cols-2 lg: "grid-cols-4 gap-8>          {/* Company Info */""}"          <div className="space-y-6>            <div className="flex items-center space-x-2">"              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center>                <Brain className="w-5 h-5 text-white" />              </div>"              <span className="text-xl font-bold>Zion Tech Group</span>            </div>            <p className="text-gray-300 leading-relaxed">              Leading the future of technology with innovative AI, blockchain, and cloud solutions that transform businesses worldwide.            </p>"            <div className="flex space-x-4>              <a href="#" className="text-gray-400 hover=text-cyan-400 transition-colors>"                <Github className"="w-5 h-5" />              </a>"              <a href="# className="text-gray-400 hover=""text-cyan-400 transition-colors">"                <Linkedin className"="w-5 h-5" />              </a>"              <a href="# className="text-gray-400 hover=""text-cyan-400 transition-colors">"                <Twitter className"="w-5 h-5" />
              </a>
            </div>          </div>          {/* AI Services */}"
          <div className="space-y-6>            <h3 className="text-lg font-semibold text-white">AI Services</h3>"            <ul className="space-y-3>
              {aiServices.map((service, index) => (                <li key={index}>                  <Link                     href="{service.url} 
                    className=""text-gray-400 hover="text-white transition-colors text-sm flex items-center group                  >                    <ArrowRight className"="w-3 h-3 mr-2 opacity-0 group-hover="opacity-100 transition-opacity />                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>          {/* IT Services */}"          <div className="space-y-4>            <h3 className="text-lg font-semibold flex items-center">"              <Cloud className="w-5 h-5 mr-2 text-purple-400 />              IT Services            </h3>            <ul className="space-y-2">
              {itServices.map((service, index) => (                <li key={index}>                  <Link                     href="{service.url} ""                    className="text-gray-400 hover=text-white transition-colors text-sm flex items-center group                  >"                    <ArrowRight className"="w-3 h-3 mr-2 opacity-0 group-hover="opacity-100 transition-opacity />                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>          {/* Company & Resources */}"          <div className="space-y-6>            <div>              <h3 className="text-lg font-semibold mb-4">Company</h3>"              <ul className="space-y-2>
                {company.map((item, index) => (                  <li key={index}>                    <Link                       href="{item.url} 
                      className=""text-gray-400 hover="text-white transition-colors text-sm
                    >                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>            <div>"              <h3 className="text-lg font-semibold mb-4>Resources</h3>              <ul className="space-y-2">
                {resources.map((item, index) => (                  <li key={index}>                    <Link                       href="{item.url} ""                      className="text-gray-400 hover=text-white transition-colors text-sm
                    >                      {item.name"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>        {/* Bottom Section */}"        <div className="border-t border-gray-700 mt-12 pt-8>          <div className="flex flex-col md="flex-row justify-between items-center space-y-4 md: "space-y-0>            <div className"="text-gray-400 text-sm">              © {currentYear"} Zion Tech Group. All rights reserved.            </div>"            <div className="flex items-center space-x-3>              <Phone className="w-5 h-5 text-purple-400" />              <div>"                <p className="text-sm text-gray-400>Phone</p>                <p className="text-white">+1 (555) 123-4567</p>              </div>            </div>"            <div className="flex items-center space-x-3>              <MapPin className="w-5 h-5 text-green-400" />              <div>"                <p className="text-sm text-gray-400>Location</p>                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>        </div>        {/* Bottom Bar */}"
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md=flex-row justify-between items-center>"          <div className"="flex flex-wrap gap-6 mb-4 md="mb-0>            {legal.map((item, index) => (
              <Link                 key={index}                href="{item.url} ""                className="text-gray-400 hover=text-white transition-colors text-sm              >                {item.name"}              </Link>"              <Link href="/terms className="text-gray-400 hover=""text-cyan-400 transition-colors">                Terms of Service              </Link>"              <Link href"="/cookies" className="text-gray-400 hover=text-cyan-400 transition-colors>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>      </div>    </footer>  );"};export default Footer;"'
}))

export default ;
function Page() {
  return <div>Page content</div>;
}