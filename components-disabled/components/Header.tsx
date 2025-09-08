use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
</string>
    <header className="bg-white shadow-lg sticky top-0 z-50">"
</header>"
      <div className="bg-blue-900 text-white py-2">"
</div>"
        <div className="container mx-auto px-4">"
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">"
            <div className="flex items-center space-x-6 mb-2 md:mb-0">"
              <div className="flex items-center space-x-2">"
                <Phone className="w-4 h-4" />"

                <span>+1 302 464 0950</span>
                <Mail className="w-4 h-4" />"

                <span>kleber@ziontechgroup.com</span>
              </div>
              <MapPin className="w-4 h-4" />"

              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
      <nav className="container mx-auto px-4 py-4">"
</nav>"
        <div className="flex justify-between items-center">"
          <Link href="/" className="flex items-center space-x-2">"
"
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
              <span className="text-white font-bold text-xl">Z</span>"
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>""
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>"
          <div className="hidden lg:flex items-center space-x-8">"
              <div key={item.name} className="relative group">"
                <button;
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
</button>
                  <Link href={item.href}>{item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${"
                      activeDropdown === item.name ? 'rotate-180' : `;
                    }`} />

                  <AnimatePresence>

                      <motion.div;
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50""
                      >
</motion>
                          <Link;
                            key={subItem.name}
                            href={subItem.href}"
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200""
                            onClick={() => setActiveDropdown(null)}

                          
                      </motion.div>
                    )}
                  
            onClick={toggleMenu}"
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200""
</button>"
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"


              initial={{ opacity: 0, height: 0 }}"
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 border-t border-gray-200 pt-4""
</motion>"
                <div key={item.name} className="mb-2">"
                  <div className="flex items-center justify-between">"
                      href={item.href}"
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2""
                      onClick={() => setIsMenuOpen(false)}

                    
                        onClick={() => toggleDropdown(item.name)}
</button>`;

                    <div className="ml-4 mt-2 space-y-1">"
                          className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1""

                        
              <div className="mt-4 pt-4 border-t border-gray-200">"
                <Link;"
                  href="/contact"""
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold""

                
        
      </nav>
    </header>


        <div className="flex justify-between items-center h-16">"
          <div className="flex items-center">"
              <Building2 className="h-8 w-8 text-blue-600" />"
</Building2>"
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>"
            
          <nav className="hidden md:flex space-x-8">"
              <div;
                key={key}"
                className="relative""
                onMouseEnter={() => setActiveDropdown(key)}
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">"
                  <ChevronDown className="ml-1 h-4 w-4" />"

                

                      exit={{ opacity: 0, y: 10 }}"
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50""
                          key={item.name}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100""

                        
                
          <div className="hidden md:flex items-center space-x-4">"
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">"

            

          <button;"
            className="md:hidden""
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}"



            className="md:hidden bg-white border-t""
            <div className="px-4 py-2 space-y-1">"
                <div key={key} className="py-2">"
                  <div className="text-sm font-medium text-gray-900 mb-2">{key}</div>"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600""

                    
      
    </header>"`;