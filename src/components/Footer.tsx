<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
=======
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "AI & Micro SAAS",
      links: [
        { label: "AI Content Hub Pro", path: "/services/ai-content-hub-pro" },
        { label: "AI Customer Service Automation", path: "/services/ai-customer-service-automation" },
        { label: "AI Sales Intelligence Platform", path: "/services/ai-sales-intelligence-platform" },
        { label: "AI Fintech Platform", path: "/services/ai-fintech-platform" },
        { label: "AI Healthcare Technology", path: "/services/ai-healthcare-tech-platform" },
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Enterprise Platform", path: "/services/quantum-enterprise-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "Industry Solutions", path: "/services/industry-solutions" }
      ]
    },
    {
      title: "Specialized IT Services",
      links: [
        { label: "Cloud Cost Optimization", path: "/services/cloud-cost-optimization-finops" },
        { label: "DevOps Automation Platform", path: "/services/devops-automation-cicd-platform" },
        { label: "Data Analytics Platform", path: "/services/data-analytics-business-intelligence" },
        { label: "IoT & Edge Computing", path: "/services/iot-edge-computing-platform" },
        { label: "API Management Platform", path: "/services/api-management-integration-platform" },
        { label: "Advanced Cybersecurity", path: "/services/advanced-cybersecurity-platform" },
        { label: "5G Enterprise Networks", path: "/services/5g-enterprise-network-solutions" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Business Intelligence", path: "/services/business-intelligence" },
        { label: "Marketing Automation", path: "/services/ai-marketing" },
        { label: "HR & Recruitment", path: "/services/ai-hr" },
        { label: "Legal Tech", path: "/services/ai-legal" }
      ]
    },
    {
      title: "Emerging Tech",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech" },
        { label: "Blockchain & DeFi", path: "/emerging-tech" },
        { label: "IoT & Edge Computing", path: "/emerging-tech" },
        { label: "Extended Reality (XR)", path: "/emerging-tech" },
        { label: "5G & Networks", path: "/emerging-tech" },
        { label: "Green Technology", path: "/emerging-tech" },
        { label: "Digital Twins", path: "/emerging-tech" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Articles", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" },
        { label: "Support Center", path: "/support" }
      ]
    }
  ];

  // Fixed social media links with proper error handling
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: '💼',
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: '🐦',
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: '💻',
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const handleSocialLinkClick = (link: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    // Try to open the primary URL first
    const newWindow = window.open(link.url, '_blank', 'noopener,noreferrer');
    
    // If the window fails to open, try the fallback
    if (!newWindow) {
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = `tel:${contactInfo.phone.replace(/\s/g, '')}`;
    } else {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-gray-400">The Tech & AI Marketplace</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge AI solutions, cybersecurity, and digital transformation services. 
                We help organizations thrive in the digital age.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <button
                  onClick={() => handleContactClick('phone')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="mr-3">📞</span>
                  {contactInfo.phone}
                </button>
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="mr-3">✉️</span>
                  {contactInfo.email}
                </button>
                <div className="flex items-start text-gray-300">
                  <span className="mr-3 mt-1">📍</span>
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/10 to-zion-blue-dark"></div>
      
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md text-lg leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connecting talent, services, and innovation in one seamless ecosystem.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-6 text-lg">Marketplace</h3>
            <ul className="space-y-3">
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
              <li><Link to="/digital-marketing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Marketing</Link></li>
              <li><Link to="/business-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Business Solutions</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite Services</Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services-hub" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services Hub</Link></li>
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
              <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Global IT Support</Link></li>
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Recruiting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
<<<<<<< HEAD
=======
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS</Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
<<<<<<< HEAD
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
<<<<<<< HEAD
              <li><Link to="/ai-matcher" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Matcher</Link></li>
=======
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Zion Hire AI</Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
=======
              <li><Link to="/content/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Press</Link></li>
              <li><Link to="/investors" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Investors</Link></li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
<<<<<<< HEAD
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Community</Link></li>
              <li><Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Developer Portal</Link></li>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-blue-light pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-xl">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest news on tech, AI, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Footer */}
        <div className="border-t border-zion-blue-light pt-8">
=======
        <div className="mt-12 pt-8 border-t border-zion-blue-light">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Contact Information</h4>
              <div className="space-y-2 text-sm text-zion-slate-light">
                <p>Mobile: +1 302 464 0950</p>
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/request-quote" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Request Quote</Link>
                <Link to="/contact" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Contact Us</Link>
                <Link to="/about" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link>
                <Link to="/partners" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Partnerships</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm text-zion-slate-light">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
                <p>24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
          
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering the future of AI and technology
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Accessibility</Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={(e) => handleSocialLinkClick(link, e)}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-md transition-all duration-200"
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 mx-auto" />
      </motion.button>
    </footer>
  );
}
