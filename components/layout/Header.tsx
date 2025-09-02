ursor/automate-test-fix-improve-and-merge-code-48f3
  Home, Users,   Briefcase, Phone, 
  Mail, ChevronDown,
  Brain, Shield,
  Cloud, Database,
  Network, Zap,
  Target, DollarSign,
  BookOpen, Calendar,
  FileText, Award,
  Globe, Search,
  ArrowRight
ursor/automate-test-fix-improve-and-merge-code-48f3
  const [isScrolled, setIsScrolled] = useState(false);  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 20);
ursor/automate-test-fix-improve-and-merge-code-48f3
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${`      isScrolled 
ursor/automate-test-fix-improve-and-merge-code-48f3
          <nav className="hidden lg:flex items-center space-x-8">"            {navigation.map((item) => ("              <div key={item.name} className="relative">"                {item.dropdown ? ("                  <div                    className="flex items-center space-x-1 text-gray-300 hover: text-white transition-colors cursor-pointer""                    onMouseEnter={() => setActiveDropdown(item.name)}"                    onMouseLeave={() => setActiveDropdown(null)}>
                    <item.icon className="w-4 h-4" />"                    <span>{item.name}</span>"                    <ChevronDown className="w-4 h-4" />"                  </div>"                ) : (
                  <Link
to={item.href}
ursor/automate-test-fix-improve-and-merge-code-48f3
                <AnimatePresence>                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden""                      onMouseEnter={() => setActiveDropdown(item.name)}"                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">"                        {item.dropdown.map((dropdownItem) => ("                          <Link
                            key={dropdownItem.name}
to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover: bg-slate-700 transition-colors group""                          >"                            <dropdownItem.icon className="w-5 h-5 text-blue-400 mt-0.5 group-hover:text-blue-300" />"                            <div>"                              <div className="text-white font-medium group-hover:text-blue-300">"                                {dropdownItem.name}"                              </div>
                              <div className="text-gray-400 text-sm">"                                {dropdownItem.description}"                              </div></div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white ml-auto mt-0.5" />"                          </Link>"                        ))}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
<div className="hidden lg: flex items-center space-x-4">"            <Button variant="outline" size="sm">"              <Search className="w-4 h-4 mr-2" />"              Search"            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">"              Get Started"            </Button></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
className="lg: hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition-colors""          >"            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"          </button>"        </div></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto'
  ' }}'            exit={{ opacity: 0, height: 0 }}
  '            transition={{ duration: 0.3 }}'
            className="lg:hidden bg-slate-900 border-t border-slate-700""          >"            <div className="px-4 py-6 space-y-4">"              {navigation.map((item) => ("                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="flex items-center space-x-2 text-gray-300 font-medium mb-2">"                        <item.icon className="w-5 h-5" />"                        <span>{item.name}</span>"                      </div>"
                      <div className="ml-7 space-y-2">"                        {item.dropdown.map((dropdownItem) => ("                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-2 text-gray-400 hover: text-white transition-colors""                            onClick={() => setIsMenuOpen(false)}"                          >
                            <dropdownItem.icon className="w-4 h-4" />"                            <span>{dropdownItem.name}</span>"                          </Link>))}
                      </div>
                    </div>
                  ) : (
                    <Link
to={item.href}
ursor/automate-test-fix-improve-and-merge-code-48f3
                      <item.icon className="w-5 h-5" />"                      <span>{item.name}</span>"                    </Link>)}                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-700 space-y-3">"                <Button variant="outline" size="sm" className="w-full">"                  <Search className="w-4 h-4 mr-2" />"                  Search"                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">"                  Get Started"                </Button></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;