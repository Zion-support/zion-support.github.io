ursor/automate-test-fix-improve-and-merge-code-48f3
  Mail, MapPin,   Globe, Linkedin, 
  Twitter, Shield, 
  Handshake, ChevronDown, 
  ChevronRight, Brain, 
  Cpu, Database, 
  Network, Code, 
  Palette, Target, 
  Rocket, Eye, 
  DollarSign, ShoppingCart, 
  Clock, Cloud, 
  Search, Building, 
  Zap, Heart, 
  Lightbulb, TrendingUp, 
  BarChart3, Lock, 
  AlertTriangle, Server, 
  CheckCircle, Truck, 
  Car, TestTube, 
  PenTool, Building2, 
  Atom, FileText, 
  Quote, Newspaper, 
  Calendar, Video, 
  HelpCircle, LifeBuoy, 
  Store, PieChart, 
  Share2, Monitor, 
  Smartphone, Settings,
  User, Bell,
  BookOpen, Award,
  Leaf, Sun,
  Wind
  
ursor/automate-test-fix-improve-and-merge-code-48f3
  onClose: ()               => void}
const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {

  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<any>([]);

  const toggleSection = (section: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    setExpandedSections(prev => ;
      prev.includes(section) ;
        ? prev.filter(s => s !== section);
        : [...prev, section];
    );
  };

  const isActive = (path: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router.pathname === path;

const navigation = {

    main: [
ursor/automate-test-fix-improve-and-merge-code-48f3
  const renderNavSection = (title: anyanyanyanyanyanyanyanyanyanyanyanyanystring, items[], sectionKey: string)               => (;    <div key={sectionKey} className="mb-6">"      <button"        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: text-white transition-colors duration-200 font-medium""      >"        <span className="text-sm font-semibold uppercase tracking-wide">{title}</span>"        {expandedSections.includes(sectionKey) ? ("          <ChevronDown className="w-4 h-4" />"        ) : ("          <ChevronRight className="w-4 h-4" />"        )}"      </button>

      {expandedSections.includes(sectionKey) && (
        <div className="mt-2 space-y-1">"          {items.map((item) => ("            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${`
                isActive(item.href);
ursor/automate-test-fix-improve-and-merge-code-48f3
          ))}        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
className = "fixed inset-0 bg-black/50 z-40 lg: hidden""          onClick={onClose}"        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-r border-zion-blue-light z-50 transform transition-transform duration-300 ease-in-out ${`
ursor/automate-test-fix-improve-and-merge-code-48f3
              <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">"                ZION"              </div>              <div className="text-xs text-zion-slate-light">Tech Group</div>"            </div>"          </div>

          {/* Search */}
          <div className="relative">"            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />"            <input"              type="text""              placeholder="Search...""              className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent""            />"          </div>"
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">"          {/* Quick Actions */}"          <div className="mb-6">"            <h3 className="text-sm font-semibold text-white mb-3 px-3">Quick Actions</h3>"            <div className="grid grid-cols-2 gap-2">"              {quickActions.map((action) => ("                <Link
                  key={action.name}
                  href={action.href}
                  onClick={onClose}
                  className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-lg hover: bg-white/10 transition-all duration-200 group""                >"                  <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>`                    <action.icon className="w-4 h-4 text-white" />"                  </div>"                  <span className="text-xs text-white text-center">{action.name}</span>"                </Link>"              ))}</div>
          </div>

          {/* Main Navigation */}
<div className="space-y-1">"            {navigation.main.map((item) => ("              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${`
ursor/automate-test-fix-improve-and-merge-code-48f3
          </div>
          {/* Services Section */}
          {renderNavSection('Services'
  ', navigation.services, 'services
  ')}''          {/* Solutions Section */}'
          {renderNavSection(
  'Solutions', navigation.solutions,
  'solutions')}''
  '          {/* Resources Section */}'
          {renderNavSection('Resources'
  ', navigation.resources, 'resources
  ')}''          {/* Comp Section */}'
          {renderNavSection(
  'Comp', navigation.company,
  'company')}
  '        </div>'
        {/* Footer */}
        <div className="p-4 border-t border-zion-blue-light">"          {/* Contact Info */}"          <div className="mb-4 space-y-2">"            {contactInfo.map((contact, index) => ("              <a
                key={index}
                href={contact.href}
ursor/automate-test-fix-improve-and-merge-code-48f3
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-3 mb-4">"            {socialLinks.map((social) => ("              <a
                key={social.name}
                href={social.href}
                target="_blank""                rel="noopener noreferrer""                className={`p-2 hover: bg-white/10 rounded-lg transition-all duration-200 ${social.color}`}"                aria-label={social.name}`              >"
                <social.icon className="w-4 h-4" />"              </a>"            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-zion-slate-light text-center">"            © {new Date().getFullYear()} Zion Tech Group;"          </div>
        </div>
      </div>
</>);
};

export default MainSidebar;