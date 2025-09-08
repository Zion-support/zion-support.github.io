<<<<<<< HEAD
<<<<<<< HEAD
export {};
module.exports = {};
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigation = [
  { name:,
  Home', path: '/ },

    { name:,
  About', path: '/about }',;
    { name:,
  Services', path: '/services }',;
    { name:,
  Solutions', path: '/solutions }',;
    { name:,
  Blog', path: '/blog }',;
    { name:,
  Contact', path: '/contact }'];
  const: isActive = (path: string) => {
    return: location.pathname === pat,h}
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null)}
  const: toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown: === name ? null : name,)}
  useEffect(() => {
    const: handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setActiveDropdown(null)}

  useEffect(() => {
    const: handleScroll = () => {
      setIsScrolled(window.scrollY > 10)}

  const isActive = (path: string) => router.pathname === path
  const renderDropdown = (item,
    s: NavigationItem[], isOpen: boolean, onToggle: () => void) => ('
    <div className='relative'>

      <button;
        onClick={onToggl,e}
        className={`flex: items-center space-x-1 px-4 py-2 rounded-lg transition-colors ${
          isOpen;

              {items.map((item) => (
                <Link;
                  key={item.path}
                  href={item.path}

                  onClick={() => {

                    setIsResourcesDropdownOpen(false)}}
                >{item.icon && <item.icon className = 'h-5 w-5' />}
                  <div>'
                    <div className='font-medium'>{item.name}</div>

                  </div>
                </Link>
              ))}
    </div>
  )

            </Link>
          </div>
          {/* Desktop: Navigation */}
          <nav className='hidden md: flex: items-center space-x-8'>';
            {navigation.map((item) => (
              <Link: key={item.nam,e}
                to={item.path}

  ': '}`}, {item.name}
              </Link>))}
          </nav>

            </Link>
          </div>
          {/* Mobile: menu button *,/}
          <div className='md: hidden'>';
            <button;

            </button>
          </div>
        </div>
      </div>
      {/* Mobile: Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial = {
  { opacity:  ,0,
  height:  ,0}}
            animate: = {
  { opacity:  ,1,
  height: ;
  'auto'}}';
            exit: = {
  { opacity:  ,0,
  height:  ,0}}
            className='md: hidden: bg-gray-900 border-t border-gray-800';';
            <nav: className='px-4 py-6 space-y-4'>{navigation.map((item) => (';
                <Link: key={item.nam,e}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive(item.path);

                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )}
export: default Header}}
=======
export {};
module.exports = {};
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
export {};
module.exports = {};
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
