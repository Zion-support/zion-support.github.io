
interface NavigationItem {
  id: string;
   labe,
    l: string;
   hre,
    f: string;
   children?: NavigationItem[]} const ModernNavigation: React.FC = () => { const [isOpen, setIsOpen] = useState (false)  const [isScrolled, setIsScrolled] = useState (false)  const [activeDropdown, setActiveDropdown] = useState < string | null> (null)  const [isDarkMode, setIsDarkMode] = useState (true)  useEffect ( () => { const handleScroll = useCallback(() => { setIsScrolled (window.scrollY > 20)  } window.addEventListener ('scroll', handleScroll)  return () => window.removeEventListener ('scroll', handleScroll)  }, [])  const navigationItems: NavigationItem[] = [ { i,
    d: 'services', label: 'Services', href: '#services', children: [ { i,
    d: 'ai', label: 'AI & Machine Learning', href: '#ai - services' }, '';""