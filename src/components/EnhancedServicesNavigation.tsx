import { Link  } from 'react - router - dom.ts';
import React, { useState } from 'react.ts';
export default EnhancedServicesNavigation;
import { motion, AnimatePresence  } from 'framer - motion.ts';


const EnhancedServicesNavigation: React.FC = () : JSX.Element => {;
  const [isOpen, setIsOpen] = useState (false) ;
  const [activeCategory, setActiveCategory] = useState < any> (null) ;

  const serviceCategories = [
    {
      name: "AI - Powered Micro SAAS",
      description: "Cutting - edge AI solutions",
      icon: "🤖",
      color: "from - blue - 600 to - purple - 600",
      services[;
        {
          title: "Code Review & Security",
          url: "/services / ai - code - review - security",
          description: "85% vulnerability reduction",
          pricing: "From $49 / month"
        },
        {
          title: "Customer Experience Analytics",
          url: "/services / ai - customer - experience - analytics",
          description: "35% satisfaction increase",
          pricing: "From $299 / month"
        },
        {
          title: "DevOps Automation",
          url: "/services / ai - devops - automation - platform",
          description: "80% deployment time reduction",
          pricing: "From $199 / month"
        },
        {
          title: "IoT Edge Computing",
          url: "/services / ai - iot - edge - computing - platform",
          description: "90% latency reduction",
          pricing: "From $299 / month"
        }
      ]
    },;
    {
      name: "Cloud & Infrastructure",
      description: "Enterprise solutions",
      icon: "☁️",
      color: "from - green - 600 to - blue - 600",
      services[;
        {
          title: "Cloud DevOps",
          url: "/services / cloud - devops",
          description: "Streamlined deployment",
          pricing: "Custom pricing"
        },
        {
          title: "IT Infrastructure",
          url: "/services / it - infrastructure",
          description: "Enterprise - grade solutions",
          pricing: "Custom pricing"
        },
        {
          title: "Digital Twin",
          url: "/services / digital - twin",
          description: "Virtual representations",
          pricing: "Custom pricing"
        }
      ]
    },;
    {
      name: "Data & Analytics",
      description: "Business intelligence",
      icon: "📊",
      color: "from - purple - 600 to - pink - 600",
      services[;
        {
          title: "Data Analytics",
          url: "/services / data - analytics",
          description: "Comprehensive analysis",
          pricing: "Custom pricing"
        },
        {
          title: "AI Business Intelligence",
          url: "/services / ai - business - intelligence",
          description: "AI - powered insights",
          pricing: "Custom pricing"
        },
        {
          title: "IoT Edge",
          url: "/services / iot - edge",
          description: "Real - time processing",
          pricing: "Custom pricing"
        }
      ]
    },;
    {
      name: "Security & Compliance",
      description: "Enterprise security",
      icon: "🔒",
      color: "from - red - 600 to - orange - 600",
      services[;
        {
          title: "Zero Trust Architecture",
          url: "/services / zero - trust - network - architecture",
          description: "Modern security framework",
          pricing: "Custom pricing"
        },
        {
          title: "Cybersecurity Suite",
          url: "/services / ai - cybersecurity - suite",
          description: "Comprehensive security",
          pricing: "Custom pricing"
        },
        {
          title: "Compliance Assistant",
          url: "/services / ai - compliance - assistant",
          description: "AI - powered compliance",
          pricing: "Custom pricing"
        }
      ];
    };
  ];

  const quickLinks = [
    {
      title: "AI Services Showcase",
      url: "/ai - services - showcase",
      description: "Explore our AI solutions",
      icon: "🚀"
    },
    {
      title: "Comprehensive Services",
      url: "/comprehensive - services",
      description: "View all services",
      icon: "📋"
    },
    {
      title: "Pricing Guide",
      url: "/pricing",
      description: "Transparent pricing",
      icon: "💰"
    },
    {
      title: "Contact Sales",
      url: "/contact",
      description: "Get expert advice",
      icon: "📞";
    };
  ];

  return (<div role="button" className = "relative">
      {/* Main Services Button */}
      <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setIsOpen (!isOpen) }
        className="relative px - 6 py - 3 bg - gradient - to - r from - blue - 600 to - purple - 600 hover:from - blue - 700 hover:to - purple - 700 text - white font - semibold rounded - lg transition - all duration - 300 transform hover:scale - 105 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:ring - offset - 2"
      >
        <span className="flex items - center gap - 2">
          <span>🚀</span>
          <span > Services</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </span>
      </button>

      {/* Services Dropdown */}
      <AnimatePresence>
        {isOpen && (<motion.div
            initial = {
  { opacity: 0, y: -10,
  scale: 0.95 

}}
            animate = {
  { opacity: 1, y: 0,
  scale: 1 

}}
            exit = {
  { opacity: 0, y: -10,
  scale: 0.95 

}}
            transition={{ duration: 0.2 }}
            className="absolute top - full left - 0 mt - 2 w - screen max - w-6xl bg - white / 95 backdrop - blur - lg rounded - xl shadow - 2xl border border - gray - 200 z - 50 overflow - hidden"
          >
            <div role="button" className="p - 6">
              {/* Header */}
              <div role="button" className="text - center mb - 8">
                <h3 className="text - 2xl font - bold text - gray - 900 mb - 2">
                  Our Complete Service Portfolio
                </h3>
                <p className="text - gray - 600">
                  From AI - powered micro SAAS to enterprise infrastructure solutions
                </p>
              </div>

              {/* Service Categories Grid */}
              <div role="button" className="grid grid - cols - 1 lg: grid - cols - 2 gap - 6 mb - 8">
                {serviceCategories.map ( (category, categoryIndex) => (<motion.div
                    key={category.name}
                    initial = {
  { opacity: 0,
  x: categoryIndex % 2 === 0 ? -20 : 20 

}}
                    animate = {
  { opacity: 1,
  x: 0 

}}
                    transition = {
  { duration: 0.3,
  delay: categoryIndex * 0.1 

}}
                    className="relative group"
                    onMouseEnter={ () => setActiveCategory (category.name) }
                    onMouseLeave={ () => setActiveCategory (null) }
                  >
                    <div role="button" className={`p - 6 rounded - lg bg - gradient - to - br ${category.color} text - white transition - all duration - 300 group - hover:scale - 105`}>
                      <div role="button" className="flex items - center gap - 3 mb - 4">
                        <span className="text - 2xl">{category.icon}</span>
                        <div>
                          <h4 className="text - lg font - semibold">{category.name}</h4>
                          <p className="text - sm opacity - 90">{category.description}</p>
                        </div>
                      </div>
                      
                      <div role="button" className="space - y-2">
                        {category.services.map ( (service, serviceIndex) => (<motion.div
                            key={service.title}
                            initial = {
  { opacity: 0,
  x: -10 

}}
                            animate = {
  { opacity: 1,
  x: 0 

}}
                            transition = {
  { duration: 0.2,
  delay: serviceIndex * 0.05 

}}
                            className="flex items - center justify - between p - 2 rounded bg - white / 20 hover:bg - white / 30 transition - colors duration - 200"
                          >
                            <div role="button" className="flex - 1">
                              <div role="button" className="font - medium text - sm">{service.title}</div>
                              <div role="button" className="text - xs opacity - 80">{service.description}</div>
                            </div>
                            <div role="button" className="text - right">
                              <div role="button" className="text - xs font - semibold">{service.pricing}</div>
                            </div>
                          </motion.div>) ) }
                      </div>
                    </div>
                  </motion.div>) ) }
              </div>

              {/* Quick Links */}
              <div role="button" className="border - t border - gray - 200 pt - 6">
                <h4 className="text - lg font - semibold text - gray - 900 mb - 4 text - center">
                  Quick Access
                </h4>
                <div role="button" className="grid grid - cols - 2 md: grid - cols - 4 gap - 4">
                  {quickLinks.map ( (link, index) => (<motion.div
                      key={link.title}
                      initial = {
  { opacity: 0,
  y: 20 

}}
                      animate = {
  { opacity: 1,
  y: 0 

}}
                      transition = {
  { duration: 0.3,
  delay: index * 0.1 

}}
                    >
                      <Link
                        to={link.url}
                        onClick={ () => setIsOpen (false) }
                        className="block p - 4 text - center rounded - lg bg - gray - 50 hover:bg - gray - 100 transition - colors duration - 200 group"
                      >
                        <div role="button" className="text - 2xl mb - 2 group - hover:scale - 110 transition - transform duration - 200">
                          {link.icon}
                        </div>
                        <div role="button" className="font - medium text - gray - 900 text - sm mb - 1">
                          {link.title}
                        </div>
                        <div role="button" className="text - xs text - gray - 600">
                          {link.description}
                        </div>
                      </Link>
                    </motion.div>) ) }
                </div>
              </div>

              {/* Contact Information */}
              <div role="button" className="mt - 6 p - 4 bg - gradient - to - r from - blue - 50 to - purple - 50 rounded - lg border border - blue - 200">
                <div role="button" className="text - center">
                  <p className="text - sm text - gray - 700 mb - 2">
                    Need help choosing the right service?
                  </p>
                  <div role="button" className="flex flex - col sm:flex - row gap - 2 justify - center text - sm">
                    <span className="text - gray - 600">
                      📱 <span className="font - medium">+1 302 464 0950</span>
                    </span>
                    <span className="text - gray - 600">
                      ✉️ <span className="font - medium">kleber@ziontechgroup.com</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>) }
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (<motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset - 0 bg - black / 20 z - 40"
          onClick={ () => setIsOpen (false) }
        />) };
    </div>;) };
