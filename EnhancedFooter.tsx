import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Enhanced Footer: React.F C = () => {
  return (
    <f ooter class Name="b g-slate-900 border-tborder-slate-800" />
      <d iv class Name="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8py-12">
        </d iv>
        <d iv class Name="g rid grid-cols-1 md:grid-cols-4gap-8">
        </d iv>
          <d iv class Name="c ol-span-1md:col-span-2">
        </d iv>
            <h3 c lass Name="t ext-2xl font-bold text-whitemb-4">Zion Tech Group</h3>
            <p c lass Name="t ext-gray-300mb-6" />
              Leading provider of A I and I T solutions for businesses worldwide.
            </p>
            <d iv class Name="f lexspace-x-4">
        </d iv>
              <L ink
                to="/contact"
                class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <A rrow Right class Name="w-4 h-4m l-2" />
              </L ink>
            </d iv>
          
          <d iv />
            <h4 c lass Name="t ext-lg font-semibold text-whitemb-4">Services</h4>
            <u l class Name="s pace-y-2" />
              <l i /><L ink to="/ai-solutions" class Name="t ext-gray-300 hover:text-cyan-400transition-colors">A I Solutions</L ink></l i>
              <l i /><L ink to="/it-services" class Name="t ext-gray-300 hover:text-cyan-400transition-colors">I T Services</L ink></l i>
              <l i /><L ink to="/cloud-solutions" class Name="t ext-gray-300 hover:text-cyan-400transition-colors">Cloud Solutions</L ink></l i>
              <l i /><L ink to="/cybersecurity" class Name="t ext-gray-300 hover:text-cyan-400transition-colors">Cybersecurity</L ink></l i>
            </u l>
          </d iv>
          
          <d iv />
            <h4 c lass Name="t ext-lg font-semibold text-whitemb-4">Contact</h4>
            <d iv class Name="s pace-y-3">
        </d iv>
              <d iv class Name="f lex items-centertext-gray-300">
        </d iv>
                <M ail class Name="w-4 h-4m r-2" />
                <s pan>contact@ziontechgroup.com</s pan>
              </d iv>
              <d iv class Name="f lex items-centertext-gray-300">
        </d iv>
                <P hone class Name="w-4 h-4m r-2" />
                <s pan>+1 (555) 123-4567</s pan>
              </d iv>
              <d iv class Name="f lex items-centertext-gray-300">
        </d iv>
                <M ap Pin class Name="w-4 h-4m r-2" />
                <s pan>New York, N Y</s pan>
              </d iv>
          </d iv>
        
        <d iv class Name="b order-t border-slate-800 mt-8 pt-8text-center">
        </d iv>
          <p c lass Name="t ext-gray-400" />
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </d iv>
    </f ooter>
  );
};

export default Enhanced Footer;
