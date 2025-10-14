import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Brain, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name="AI Solutions", href: "/ai-solutions"},
    { name: "Cybersecurity", href: "/cybersecurity"},
    { name: "Cloud Infrastructure", href: "/cloud-infrastructure"},
    { name: "Digital Transformation", href: "/digital-transformation"},
    { name: "IT Services", href: "/it-services"},
    { name: "Micro SAAS", href: "/micro-saas"}

  ];

  return (
    <footerclassName="bg-gray-900 text-white">"</footer>
      <divclassName="max-w-7xl mx-auto px-4 py-12">"    </div>
        <divclassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{/* Company Info */}    </div>
          <div>"    </div>
            <divclassName="flex items-center mb-4">"    </div>
              <divclassName="mr-3">"    </div>
                <Brain className="w-5 h-5 text-white"/>    </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            <p className="text-gray-300 text-lg">Leading technology solutions provider specializing in AI, cybersecurity, and digital transformation.</p>
            <divclassName="flex space-x-4">"    </div>
              <ahref: "#",className="text-gray-400 hover:text-white transition-colors">"</a>
                <Linkedin className="w-5 h-5"/></a>
              <ahref: "#",className="text-gray-400 hover:text-white transition-colors">"</a>
                <Twitter className="w-5 h-5"/></a>
              <ahref: "#",className="text-gray-400 hover:text-white transition-colors">"</a>
                <Github className="w-5 h-5"/></a>

          {/* Services */}
          <div>"    </div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ulclassName="space-y-2">{services.map((service, index) => (</ul>
                <likey:{index}></li>
                  <Linkto:{service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center">"</Link>
                    <ArrowRightclassName="w-3 h-3 mr-2"/>{service.name}</ArrowRight>
                  </Link>
                </li>))}

            </ul>

          {/* Company */}
          <div>"    </div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ulclassName="space-y-2">"</ul>
              <li><Link to: "/about",className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to: "/careers",className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to: "/blog",className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to: "/contact",className="text-gray-400 hover:text-white transition-colors">Contact</Link></li></ul>

          {/* Contact Info */}
          <div>"    </div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <divclassName="space-y-3">"    </div>
              <divclassName="flex items-center">"    </div>
                <Mailsize:{16} className="text-blue-400 mr-3"/>"</Mail>
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              <divclassName="flex items-center">"    </div>
                <Phonesize:{16} className="text-blue-400 mr-3"/>"</Phone>
                <span className="text-gray-300">+1-302-464-0950</span>
              <divclassName="flex items-center">"    </div>
                <MapPinsize:{16} className="text-blue-400 mr-3"/>"</MapPin>
                <span className="text-gray-300">Middletown, DE</span>

        {/* Copyright */}
        <divclassName="border-t border-gray-800 mt-8 pt-8 text-center">"    </div>
          <p className="text-gray-300 text-lg">© {currentYear} Zion Tech Group. All rights reserved.</p>
    </footer>
  );
};

export default Footer;