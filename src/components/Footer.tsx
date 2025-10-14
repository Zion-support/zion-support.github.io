<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";

const FooterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Footer - Zion Tech Group</title>
        <meta name="description" content="Professional Footer services by Zion Tech Group." />
        <meta name="keywords" content="Footer, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Footer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional Footer services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
=======
import { memo } from "react":;
import { Link } from "react-router-dom":;
import { Right, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react":;
const Footer = memo(() =>{;
const services = [
    { name: "AI Services", url: "/ai-services" },
    { name: "IT Solutions", url: "/it-services" },
    { name: "Cloud Services", url: "/cloud-services" },
    { name: "Cybersecurity", url: "/cybersecurity" }
  ];
const solutions = [
    { name: "Quantum Computing", url: "/quantum-computing" },
    { name: "Autonomous Systems", url: "/autonomous-systems" },
    { name: "Blockchain Web3", url: "/blockchain-web3" },
    { name: "IoT Edge Computing", url: "/iot-edge-computing" }
  ];
const company = [
    { name: "About Us", url: "/about" },
    { name: "Team", url: "/team" },
    { name: "Careers", url: "/careers" },
    { name: "News", url: "/news" }
  ];
const support = [
    { name: "Documentation", url: "/documentation" },
    { name: "Support", url: "/support" },
    { name: "FAQ", url: "/faq" },
    { name: "Contact", url: "/contact" }
  ];
const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
    { name: "GitHub", icon: Github, url: "#" }
  ];
return (
    <footer className="bg-gray-900 text-white"><div className="max-w-7xl mx-auto px-4 py-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{/* Company Info */}
          <div className="space-y-4"><h3 className="text-xl font-bold text-white">Zion Tech Group</h3><p className="text-sm text-cyan-400">AI & IT Solutions</p><p className="text-gray-300 text-sm leading-relaxed">Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems,;
and digital transformation services. Transform your business with cutting-edge technology.
            </p></div>{/* Services */}
          <div className="space-y-4"><h4 className="text-lg font-semibold text-white">Services</h4><ul className="space-y-2">{services.map((service) =>(
                <li key={service.name}><Link:;
to={service.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">{service.name}
                  </Link></li>))}
              <li><Link:;
to="/services":;
className="text-cyan-400 hover:text-white transition-colors duration-300 text-sm flex items-center group">View All AI Services
                  <Right className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li></ul></div>{/* Solutions */}
          <div className="space-y-4"><h4 className="text-lg font-semibold text-white">Solutions</h4><ul className="space-y-2">{solutions.map((solution) =>(
                <li key={solution.name}><Link:;
to={solution.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">{solution.name}
                  </Link></li>))}
              <li><Link:;
to="/solutions":;
className="text-cyan-400 hover:text-white transition-colors duration-300 text-sm flex items-center group">View All Solutions
                  <Right className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li></ul></div>{/* Company & Support */}
          <div className="space-y-4"><h4 className="text-lg font-semibold text-white">Company</h4><ul className="space-y-2">{company.map((item) =>(
                <li key={item.name}><Link:;
to={item.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">{item.name}
                  </Link></li>))}
            </ul><h4 className="text-lg font-semibold text-white mt-6">Support</h4><ul className="space-y-2">{support.map((item) =>(
                <li key={item.name}><Link:;
to={item.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">{item.name}
                  </Link></li>))}
            </ul></div></div>{/* Social Links */}
        <div className="border-t border-gray-800 mt-8 pt-8"><div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"><div className="flex space-x-4">{socialLinks.map((social) =>(
                <a:;
key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300";
aria-label={social.name}><social.icon className="w-5 h-5" /></a>))}
            </div><div className="flex space-x-6 text-sm"><Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy
              </Link><Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service
              </Link><Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Policy
              </Link></div></div><div className="text-center text-gray-400 text-sm mt-4">© 2024 Zion Tech Group. All rights reserved.
          </div></div></div></footer>)
});
Footer.displayName = "Footer":;
export default Footer

  </div>
  </div>
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
