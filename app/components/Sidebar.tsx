import React, { useState, useCallback, useMemo } from "react";
import {},
      X,
      ChevronDown,
      ChevronRight,
      Home,
      Users,
      Settings,
      Cloud,
      Code,
      Star,
      ArrowRight,
      Phone,";
      Mail,";";
      MapPin;";";";
} from "lucide-react";
interface SidebarProps {},
      isOpen: boolean,
      onClose: () => void
    },
    {};
const Sidebar: React.FC<SidebarProps>  =  ({,
    isOpen, onClose 
  }) => {},
      const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const toggleSection = useCallback((section: string) => {},
      setExpandedSections(prev => {},)
      const newSet = new Set(prev)
      if (newSet.has(section)) {},
      newSet.delete(section)
      } else {},
      newSet.add(section)
      },
      return newSet
    })
  }, [";
    ";";
  ])";";";
  const aiServices = useMemo(() => [";";";";
    { name: 'AI Email Marketing', path: '/ai-email-marketing-automation', icon: <Mail className="w-4 h-4" />, featured: true };"
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager', icon: <className="w-4 h-4" />, featured: true };"
    { name: 'AI Customer Support Chatbot', path: '/ai-customer-support-chatbot', icon: <className="w-4 h-4" />, featured: true };"
    { name: 'AI Project Management Pro', path: '/ai-project-management-pro', icon: <Settings className="w-4 h-4" />, featured: true };"
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro', icon: <className="w-4 h-4" />, featured: true };"
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <className="w-4 h-4" /> };"
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite-pro', icon: <className="w-4 h-4" /> };"
    { name: 'AI Code Assistant', path: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> };
  ], [";
    ";";
  ])";";";
  const itServices  =  useMemo(() => [";";";";
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> };"
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <className="w-4 h-4" /> };"
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> };"
    { name: 'Mobile Development', path: '/mobile-development', icon: <Code className="w-4 h-4" /> };"
    { name: 'Management', path: '/database-management', icon: <className="w-4 h-4" /> };"
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> };"
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Cloud className="w-4 h-4" /> };"
    { name: 'Data Analytics', path: '/data-analytics', icon: <className="w-4 h-4" /> };
  ], [";
    ";";
  ])";";";
  const microSaasServices  =  useMemo(() => [";";";";
    { name: 'Task Manager Pro', path: '/task-manager-pro', icon: <Settings className="w-4 h-4" />, featured: true };"
    { name: 'Analytics Dashboard', path: '/analytics-dashboard', icon: <className="w-4 h-4" />, featured: true };"
    { name: 'Customer Support Hub', path: '/customer-support-hub', icon: <className="w-4 h-4" />, featured: true };"
    { name: 'Inventory Manager', path: '/inventory-manager', icon: <className="w-4 h-4" />, featured: true };"
    { name: 'Social Media Scheduler', path: '/social-media-scheduler', icon: <className="w-4 h-4" /> };"
    { name: 'Expense Tracker Pro', path: '/expense-tracker-pro', icon: <className="w-4 h-4" /> };"
    { name: 'AI Accounting Assistant', path: '/ai-accounting-assistant', icon: <className="w-4 h-4" /> };"
    { name: 'AI Content Moderation', path: '/ai-content-moderation-pro', icon: <className="w-4 h-4" /> };
  ], [";
    ";";
  ])";";";
  const mainNavItems  =  useMemo(() => [";";";";
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> };"
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> };"
    { name: 'Services', path: '/services', icon: <Settings className="w-4 h-4" /> };"
    { name: 'Micro SAAS', path: '/micro-saas-services', icon: <className="w-4 h-4" /> };"
    { name: 'Pricing', path: '/pricing', icon: <className="w-4 h-4" /> };"
    { name: 'Case Studies', path: '/case-studies', icon: <className="w-4 h-4" /> };"
    { name: 'Blog', path: '/blog', icon: <className="w-4 h-4" /> };"
    { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> };
  ], [";
    ";";
  ])";";";
  const contactInfo  =  useMemo(() => [";";";";
    { icon: <Mail className="w-4 h-4" />, text: 'kleber@ziontechgroup.com' };"
    { icon: <Phone className="w-4 h-4" />, text: '+1 302 464 0950' };"
    { icon: <MapPin className="w-4 h-4" />, text: '364 E Main St STE 1008, Middletown DE 19709" };
  ], [
  ])
  const isActive  =  (_path: string) => location.pathname === path";
  if (!isOpen) return null";";
  return (<>{}</>);";";";
      {/* Overlay */};"
      <divclassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden">";";
        onClick={onClose} />";";";
      {/* Sidebar */};"
      <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl z-50 overflow-y-auto"></div>"
        <div className="p-6"></div>";";";
          {/* Header */};"
          <div className="flex items-center justify-between mb-8"></div>"
            <div className="flex items-center space-x-2"></div>"
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center"></div>"
                <span className="text-white font-bold text-lg">Z</span>";";";
              </div>"
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>
                Zion Tech Group";
              </span>";";
            </div>";";";
            <buttononClick={onClose},>"
      className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"></button";";";
>"
              <X className="w-5 h-5" />";
            </button>";";
          </div>";";";
          {/* Main Navigation */};"
          <div className="space-y-2 mb-8"></div>
            {mainNavItems.map((item) => ()};
              <>
                key={item.name},
      to={item.path},";
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${},";";
      isActive(item.path)";";";
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-l-2 border-cyan-400'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white"
                }`},";
      onClick={onClose};";";
              ></>";";";
                {item.icon};"
                <span className="font-medium">{item.name}</span>
              </>";
            ))};";";
          </div>";";";
          {/* AI Services Section */};"
          <div className="mb-6"></div>";";
            <button>";";";
              onClick={() => toggleSection('ai-services')},"
      className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 font-medium text-left">"
              <div className="flex items-center space-x-3"></div>"
                <className="w-4 h-4" />";
                <span>AI Services</span>";";
              </div>";";";
              {expandedSections.has('ai-services') ? ()}"
                <ChevronDown className="w-4 h-4" />";";";
              ) : ()"
                <ChevronRight className="w-4 h-4" />";";
              )};";";";
            </button>"
            {expandedSections.has('ai-services') && (<div className="ml-6 mt-2 space-y-1"></div>)};
                {aiServices.map((service) => ()};
                  <>
                    key={service.name},
      to={service.path},";
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${},";";
      isActive(service.path)";";";
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5"
                    }`},";
      onClick={onClose};";";
                  ></>";";";
                    {service.icon};"
                    <span className="text-sm">{service.name}</span>
                  </>
                ))};
              </div>";
            )};";";
          </div>";";";
          {/* IT Services Section */};"
          <div className="mb-6"></div>";";
            <button>";";";
              onClick={() => toggleSection('it-services')},"
      className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 font-medium text-left">"
              <div className="flex items-center space-x-3"></div>"
                <Settings className="w-4 h-4" />";
                <span>IT Services</span>";";
              </div>";";";
              {expandedSections.has('it-services') ? ()}"
                <ChevronDown className="w-4 h-4" />";";";
              ) : ()"
                <ChevronRight className="w-4 h-4" />";";
              )};";";";
            </button>"
            {expandedSections.has('it-services') && (<div className="ml-6 mt-2 space-y-1"></div>)};
                {itServices.map((service) => ()};
                  <>
                    key={service.name},
      to={service.path},";
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${},";";
      isActive(service.path)";";";
                        ? 'bg-green-500/10 text-green-400'
                        : 'text-gray-400 hover:text-green-400 hover:bg-green-500/5"
                    }`},";
      onClick={onClose};";";
                  ></>";";";
                    {service.icon};"
                    <span className="text-sm">{service.name}</span>
                  </>
                ))};
              </div>";
            )};";";
          </div>";";";
          {/* Micro SAAS Section */};"
          <div className="mb-6"></div>";";
            <button>";";";
              onClick={() => toggleSection('micro-saas')},"
      className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 font-medium text-left">"
              <div className="flex items-center space-x-3"></div>"
                <className="w-4 h-4" />";
                <span>Micro SAAS</span>";";
              </div>";";";
              {expandedSections.has('micro-saas') ? ()}"
                <ChevronDown className="w-4 h-4" />";";";
              ) : ()"
                <ChevronRight className="w-4 h-4" />";";
              )};";";";
            </button>"
            {expandedSections.has('micro-saas') && (<div className="ml-6 mt-2 space-y-1"></div>)};
                {microSaasServices.map((service) => ()};
                  <>
                    key={service.name},
      to={service.path},";
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${},";";
      isActive(service.path)";";";
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/5"
                    }`},";
      onClick={onClose};";";
                  ></>";";";
                    {service.icon};"
                    <div className="flex-1 flex items-center justify-between"></div>"
                      <span className="text-sm">{service.name}</span>";";";
                      {service.featured && ()}"
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      )};
                    </div>
                  </>
                ))};
              </div>";
            )};";";
          </div>";";";
          {/* Contact Info */};"
          <div className="border-t border-white/10 pt-6"></div>"
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact Info</h4>"
            <div className="space-y-3"></div>";";";
              {contactInfo.map((info, index) => ()}"
                <div key={index} className="flex items-center space-x-3 text-sm text-gray-300"></div>"
                  <div className="w-5 h-5 text-cyan-400">{info.icon}</div>
                  <span>{info.text}</span>
                </div>
              ))};";
            </div>";";
          </div>";";";
          {/* CTA Button */};"
          <div className="mt-6"></div>";";";
            <>"
              to="/consultation"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-cyan-500/25 group"
              onClick={onClose};";";
            ></>";";";
              <span>Get Started</span>"
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />";";
            </>";";";
import React from 'react";";";";
import { X, ChevronDown, ChevronRight } from 'lucide-react";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void,
};
interface SidebarProps {};
  isOpen: boolean};
  onClose: () => void;};
const Sidebar: React.FC<SidebarProps>  =  ({,
    isOpen, onClose 
  }) => {;
  const [expandedSections, setExpandedSections] = React.useState<string[]>([
  ]);
  const toggleSection  =  (section: string) => {
    setExpandedSections(prev => {
      prev.includes(section) 
        ? prev.filter(s => s !== section),
        : [...prev, section];
    );
  };
  if (!isOpen) return null;";
  return (";";
    <>";";";
      {isOpen && ("
        <div className ="fixed inset-0 z-50 lg: hidden">","
          <div className ="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />";"
          <div className ="fixed top-0 left-0 h-full w-80 bg-slate-800 p-4 overflow-y-auto">";"
            <div className ="flex items-center justify-between mb-8">";"
              <h2 className ="text-xl font-bold text-white">Zion Tech Group</$1>";";";
              <button onClick ={onClose}"
                className="text-gray-400 hover: text-white transition-colors"";";";";
              >"
                <X className ="w-6 h-6" />";";";
              </button>";";";
            </div>"
            <nav className ="space-y-2">";"
              <a href ="/" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">Home</$1>"
              <a href ="/about" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">About</a>",";";";
              <div>"
                <button onClick ={() => toggleSection('services')}";"
                  className="flex items-center justify-between w-full text-gray-300 hover: text-white py-2 px-3 rounded transition-colors"",";";
                >";";";
                  <span>Services</span>"
                  {expandedSections.includes('services') ? <ChevronDown className ="w-4 h-4" /> : <ChevronRight className ="w-4 h-4" />}";";";";
                </button>"
                {expandedSections.includes('services') && (";"
                  <div className ="ml-4 space-y-1 mt-2">";"
                    <a href ="/ai-services" className="block text-gray-400 hover: text-white py-1 px-3 rounded text-sm transition-colors">AI Services</$1>"
                    <a href ="/it-services" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">IT Services</$1>"
                    <a href ="/micro-saas-solutions" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">Micro SAAS</$1>"
                    <a href ="/cloud-solutions" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">Cloud Solutions</$1>"
                    <a href ="/cybersecurity" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">Cybersecurity</a>",
                  </div>";
                )};";";
              </div>";";";
              <div>"
                <button onClick ={() => toggleSection('solutions')}";"
                  className="flex items-center justify-between w-full text-gray-300 hover: text-white py-2 px-3 rounded transition-colors"",";";
                >";";";
                  <span>Solutions</span>"
                  {expandedSections.includes('solutions') ? <ChevronDown className ="w-4 h-4" /> : <ChevronRight className ="w-4 h-4" />}";";";";
                </button>"
                {expandedSections.includes('solutions') && (";"
                  <div className ="ml-4 space-y-1 mt-2">";"
                    <a href ="/ai-solutions" className="block text-gray-400 hover: text-white py-1 px-3 rounded text-sm transition-colors">AI Solutions</$1>"
                    <a href ="/it-solutions" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">IT Solutions</$1>"
                    <a href ="/5g-solutions" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">5G Solutions</$1>"
                    <a href ="/digital-transformation" className="block text-gray-400 hover:text-white py-1 px-3 rounded text-sm transition-colors">Digital Transformation</a>",";
                  </div>";";
                )}";";";
              </div>"
              <a href ="/pricing" className="block text-gray-300 hover: text-white py-2 px-3 rounded transition-colors">Pricing</$1>"
              <a href ="/case-studies" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">Case Studies</$1>"
              <a href ="/blog" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">Blog</$1>"
              <a href ="/contact" className="block text-gray-300 hover:text-white py-2 px-3 rounded transition-colors">Contact</a>",";";
            </nav>";";";
            {/* Contact Info */}"
            <div className ="mt-8 pt-8 border-t border-gray-700">";"
              <div className ="text-sm text-gray-300 space-y-2">";"
                <div className ="flex items-center space-x-2">";"
                  <span className ="font-semibold">Phone: </$1>";";
                  <span>+1 302 464 0950</span>";";";
                </div>"
                <div className ="flex items-center space-x-2">";"
                  <span className ="font-semibold">Email:</$1>";";
                  <span>kleber@ziontechgroup.com</span>";";";
                </div>"
                <div className ="flex items-start space-x-2">";"
                  <span className ="font-semibold">Address:</span>",
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>";
            </div>";";
          </div>";";";
        </div>"
        <nav className="p-4"></nav>";";";
          <>"
            to="/"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={onClose};
          ></>";
            Home";";
          </>";";";
          <>"
            to="/about"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={onClose};
          ></>";
            About";";
          </>";";";
          <>"
            to="/services"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={onClose};
          ></>";
            Services";";
          </>";";";
          <>"
            to="/contact"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={onClose};
          ></>
            Contact
          </>
        </nav>
      </div>
  </>)";
    },";";
    {}";";";
export default Sidebar'";";";