import React, { useState } from 'react';
import Link from 'next/link';
import {
  // TODO: Implement
}
  Menu, 
  X, 
} from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
</string>
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">"
</nav>"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="flex justify-between items-center h-16">"
          <Link href="/" className="flex items-center space-x-2">"
"
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
              <span className="text-white font-bold text-lg">Z</span>"
            <span className="text-white text-xl font-bold">Zion Tech Group</span>"
          <div className="hidden md:flex items-center space-x-8">"
              <div key={item.name} className="relative">"
                  <div className="relative">"
</div>
                    <button;
                      onClick={() => toggleDropdown(item.name)}
</button>"
                      <ChevronDown className="ml-1 h-4 w-4" />"

                    </button>
                    
                    <AnimatePresence>

                        <motion.div;
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}"
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50""
                        >
</motion>
                            <Link;
                              key={dropdownItem.name}
                              href={dropdownItem.href}"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors""
                              onClick={() => setActiveDropdown(null)}

                            
                        </motion.div>
                      )}
                    
                    href={item.href}"
                    className="text-gray-300 hover:text-white transition-colors""

                  
          <div className="hidden md:flex items-center space-x-4">"
            <Link;"
              href="/contact"""
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors""
              <ArrowRight className="ml-2 h-4 w-4" />"

            
          <div className="md:hidden">"
              onClick={() => setIsOpen(!isOpen)}
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}"


              initial={{ opacity: 0, height: 0 }}"
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800""
</motion>"
              <div className="py-4 space-y-2">"
                  <div key={item.name}>
                      <div>
                          <ChevronDown className="h-4 w-4" />"

                          <div className="pl-4 space-y-1">"
                                className="block px-4 py-2 text-gray-400 hover:text-white transition-colors""
                                onClick={() => {

                              
                        className="block px-4 py-2 text-gray-300 hover:text-white transition-colors""
                        onClick={() => setIsOpen(false)}

                      
                <div className="pt-4 border-t border-gray-800">"
                    className="block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-colors""

                  
        
    </nav>
    <>;
      {/* Top Bar */}"
      <div className="bg-blue-900 text-white py-2">;"
        <div className="container mx-auto px-4">;"
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">;"
            <div className="flex items-center space-x-6 mb-2 md:mb-0">;"
              <div className="flex items-center">;"
                <Phone className="w-4 h-4 mr-2" />;"
                <a href="tel:+13024640950" className="hover:text-blue-300">;"
</a>
                </a>;
              </div>;"
                <Mail className="w-4 h-4 mr-2" />;"

                <a;
              </div>;
      <nav className="bg-white shadow-lg sticky top-0 z-50">;"
          <div className="flex justify-between items-center py-4">;"
            ;"
              <div className="relative group">;"
                <button;"
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors""
                  onMouseEnter={() => setIsServicesOpen(true)}
                  <ChevronDown className="w-4 h-4 ml-1" />;"

                </button>;
                <AnimatePresence>;

                    <motion&& motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      exit={{ opacity: 0, y: 10 }}"
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4""
                      <div className="grid grid-cols-2 gap-4 px-6">;"
            <div className="hidden lg:flex items - center space - x-8">;"
                href="/";""
                className="text - gray - 700 hover:text - blue - 600 font - medium transition - colors";"
              >;

                  className="flex items - center text - gray - 700 hover:text - blue - 600 font - medium transition - colors";"
                  onMouseEnter={() => setIsServicesOpen (true)}
                  <ChevronDown className="w - 4 h - 4 ml - 1" />;"


                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}"
                      className="absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";"
                      <div className="grid grid - cols - 2 gap - 4 px - 6">;"
                              key={index}
              {/* Solutions Dropdown */}"

                  onMouseEnter={() => setIsSolutionsOpen(true)}


                              <div className="flex items - center mb - 2">;"
                                <IconComponent className="w - 5 h - 5 text - blue - 600 mr - 2" />;"
                                <div className="font - medium text - gray - 900 group - hover:text - blue - 600">;"
                              <div className="text - sm text - gray - 500">;"
                            );
                      <div className="border - t border - gray - 200 mt - 4 pt - 4 px - 6">;"
                          href="/services";""
                          className="flex items - center text - blue - 600 hover:text - blue - 700 font - medium";"
                          <ArrowRight className="w - 4 h - 4 ml - 2" />;"

                        ;
                    </motion.div>)}
                  onMouseEnter={() => setIsSolutionsOpen (true)}


              {/* Industries Dropdown */}"

                  onMouseEnter={() => setIsIndustriesOpen(true)}


                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4""
                      <div className="px-6">;"
                            href={industry && industry.href}"
                            className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group">;"
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">;"
                            <div className="text-sm text-gray-500">;"
                    </motion && motion.div>;
              {/* Resources Dropdown */}"
                  onMouseEnter={() => setIsResourcesOpen(true)}


                            href={resource && resource.href}"
                href="/pricing"""
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">;"

            <div className="hidden lg:flex items-center space-x-4">;"
                onClick={() => setIsSearchOpen(true)}
            <div className="hidden lg:flex items-center space-x-4">"
                href=/contact"""
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors;"

              
              <a;"
                href="tel:+13024640950"""
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors""
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors">;"
              className="lg:hidden p-2""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
                <X className="w-6 h-6" />;"
                <Menu className="w-6 h-6" />;"


                animate={{ opacity: 1, height: "auto" }}"
                exit={{ opacity: 0, height: 0 }}"
                className="lg:hidden border-t border-gray-200">;"
                <div className="py-4 space-y-2">;"
                    href="/"""
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg""
                    onClick={() => setIsMenuOpen(false)}
                  <div className="px-4 py-2">;"
                    <div className="font-medium text-gray-900 mb-2">;"
                    <div className="space-y-1 ml-4">;"
                          href={service && service.href}"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600""

                          href={solution && solution.href}"




                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center""

                      className="block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium text-center""
</a>"
                          href="/solutions";""

                  onMouseEnter={() => setIsIndustriesOpen (true)}


                      className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";"
                      <div className="px - 6">;"
                            href={industry.href}"
                            className="block p - 3 rounded - lg hover:bg - blue - 50 transition - colors group";"
                          ))}
                  onMouseEnter={() => setIsResourcesOpen (true)}


                            href={resource.href}"
                href="/pricing";""

            <div className="hidden lg:flex items - center space - x-4">;"
                on_click={() => setIsSearchOpen (true)}
                <Search className="w - 5 h - 5" />;"

                href="/contact";""
                className="bg - blue - 600 hover:bg - blue - 700 text - white px - 6 py - 2 rounded - lg font - medium transition - colors";"

                href="tel:+13024640950";""
                className="bg - transparent border - 2 border - blue - 600 text - blue - 600 hover:bg - blue - 600 hover:text - white px - 6 py - 2 rounded - lg font - medium transition - colors";"
              className="lg:hidden p - 2";"
              on_click={() => setIsMenuOpen (!isMenuOpen)}
                <X className="w - 6 h - 6" />) : ("
)"
                <Menu className="w - 6 h - 6" />)}"


                className="lg:hidden border - t border - gray - 200";"
                <div className="py - 4 space - y-2">;"
                    className="block px - 4 py - 2 text - gray - 700 hover:bg - blue - 50 hover:text - blue - 600 rounded - lg";"
                    on_click={() => setIsMenuOpen (false)}

                  <div className="px - 4 py - 2">;"
                    <div className="font - medium text - gray - 900 mb - 2">;"
                    <div className="space - y-1 ml - 4">;"
                          href={service.href}"
                          className="block py - 1 text - sm text - gray - 600 hover:text - blue - 600";"

                          href={solution.href}"




                  <div className="px - 4 py - 2 space - y-2">;"
                      className="block bg - blue - 600 hover:bg - blue - 700 text - white px - 4 py - 2 rounded - lg font - medium text - center";"

                      className="block bg - transparent border - 2 border - blue - 600 text - blue - 600 hover:bg - blue - 600 hover:text - white px - 4 py - 2 rounded - lg font - medium text - center";"
      <SearchModal;
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}

    </>;
      </nav>;
        is_open={isSearchOpen}
        on_close={() => setIsSearchOpen (false)}

    </>);

  X, "

                    


                            
                    

                  

            




                              

                      

                  
        