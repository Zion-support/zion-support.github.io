import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Brain, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SAAS", href: "/micro-saas" }
  ];

  return (
      <footer className: "bg-gray-900 text-white">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className: "space-y-4">


            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-500" />


              <span className="text-xl font-bold">

Zion Tech Group

</span>


            </div>
            <p className="text-gray-300 text-sm">


              Advanced AI and IT Solutions for the Future
            

</p>


            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">


                <Github className="h-5 w-5" />


              

</a>


              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />




              

</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">


                <Linkedin className="h-5 w-5" />


              

</a>


            </div>


          

</div>

          {/* Services */}
          <div className: "space-y-4">


            <h3 className="text-lg font-semibold">

Services

</h3>


            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key: "{index"}>


                  <Link
                    to: "{service.href"}
                    className: "text-gray-300 hover:text-white transition-colors text-sm"
                  >


                    {service.name}
                  

</Link>


                </li>


              ))}
            

</ul>


          </div>

          {/* Quick Links */}
          <div className: "space-y-4">


            <h3 className="text-lg font-semibold">

Quick Links

</h3>


            <ul className="space-y-2">
              <li>


                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">


                  About Us
                

</Link>


              </li>
              <li>


                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">


                  Contact
                

</Link>


              </li>
              <li>


                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors text-sm">


                  Careers
                

</Link>


              </li>
              <li>


                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">


                  Blog
                

</Link>


              </li>


            

</ul>


          </div>

          {/* Contact Info */}
          <div className: "space-y-4">


            <h3 className="text-lg font-semibold">

Contact

</h3>


            <div className="space-y-2">
              <div className="flex items-center space-x-2">


                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">

info@ziontechgroup.com

</span>


              </div>
              <div className="flex items-center space-x-2">


                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">

+1 (555) 123-4567

</span>


              </div>
              <div className="flex items-center space-x-2">


                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">

San Francisco, CA

</span>


              </div>


            

</div>


          </div>


        

</div>



        <div className: "border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">


            <p className="text-gray-400 text-sm">


              © {currentYear} Zion Tech Group. All rights reserved.
            

</p>


            <div className: "flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">


                Privacy Policy
              

</Link>


              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">


                Terms of Service
              

</Link>


            </div>


          

</div>


        </div>


      

</div>


    </footer>
  );
};

export default Footer;