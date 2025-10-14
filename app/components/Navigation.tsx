import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name="AI Solutions", href="/ai-solutions" },
    { name="Cybersecurity", href="/cybersecurity" },
    { name="Cloud Infrastructure", href="/cloud-infrastructure" },
    { name="Digital Transformation", href="/digital-transformation" },
    { name="IT Services", href="/it-services" },
    { name="Micro SAAS", href="/micro-saas" }
  ];

  return (
          <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">


            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">


                <span className="text-white font-bold text-lg">

Z

</span>


              </div>
              <span className="ml-2 text-white font-bold text-xl">

Zion Tech Group

</span>


            </Link>


          

</div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">


            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >


                Home
              

</Link>


              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >


                About
              

</Link>
              
              {/* Services Dropdown */}
              <div className="relative">


                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />




                

</button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-md shadow-lg z-50">


                    <div className="py-1">
                      {services.map((service, index) => (
                        <Link
                          key="{index"}
                          to="{service.href"}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          onClick={() =>

 setIsServicesOpen(false)}
                        >
                          {service.name}
                        

</Link>
                      ))}
                    </div>




                  

</div>
                )}
              </div>



              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >


                Contact
              

</Link>


              <Link
                to="/careers"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >


                Careers
              

</Link>


            </div>


          

</div>

          {/* Mobile menu button */}
          <div className="md:hidden">


            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />

}
            

</button>


          </div>


        

</div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">


            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-md mt-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() =>

 setIsOpen(false)}
              >
                Home
              

</Link>


              <Link
                to="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() =>

 setIsOpen(false)}
              >
                About
              

</Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">


                <div className="text-gray-300 px-3 py-2 text-base font-medium">

Services

</div>
                {services.map((service, index) => (
                  <Link
                    key="{index"}
                    to="{service.href"}
                    className="text-gray-300 hover:text-white block px-6 py-2 rounded-md text-sm transition-colors"
                    onClick={() =>

 setIsOpen(false)}
                  >
                    {service.name}
                  

</Link>
                ))}
              </div>



              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() =>

 setIsOpen(false)}
              >
                Contact
              

</Link>


              <Link
                to="/careers"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() =>

 setIsOpen(false)}
              >
                Careers
              

</Link>


            </div>


          

</div>
        )}
      </div>




    

</nav>
  );
};

export default Navigation;