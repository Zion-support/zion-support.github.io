<<<<<<< HEAD
interface NavigationItem { id: string; label: string; href: string; children?: NavigationItem[];  } const ModernNavigation: React.FC = () => { const [isOpen, setIsOpen] = useState(false); const [isScrolled, setIsScrolled] = useState(false); const [activeDropdown, setActiveDropdown] = useState<string | null>(null); const [isDarkMode, setIsDarkMode] = useState(true); useEffect(() => { const handleScroll = () => { setIsScrolled(window.scrollY > 20); }; window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []); const navigationItems: NavigationItem[] = [ { id: "services", label: "Services", href: "#services", children: [ { id: "ai", label: "AI & Machine Learning", href: "#ai-services" }, ";"
=======
<<<<<<< HEAD


interface NavigationItem { id: string; label: string; href: string; children?: NavigationItem[]; } const ModernNavigation: React.FC = () => { const [isOpen, setIsOpen] = useState (false) ; const [isScrolled, setIsScrolled] = useState (false) ; const [activeDropdown, setActiveDropdown] = useState < string | null> (null) ; const [isDarkMode, setIsDarkMode] = useState (true) ; useEffect ( () => { const handleScroll = useCallback(() => { setIsScrolled (window.scrollY > 20) ; }; window.addEventListener ("scroll", handleScroll) ; return () => window.removeEventListener ("scroll", handleScroll) ; }, []) ; const navigationItems: NavigationItem[] = [ { id: "services", label: "Services", href: "#services", children: [ { id: "ai", label: "AI & Machine Learning", href: "#ai - services" }, ";"""";

interface NavigationItem { id: string; label: string; href: string; children?: NavigationItem[];  } const ModernNavigation: React.FC = () => { const [isOpen, setIsOpen] = useState(false); const [isScrolled, setIsScrolled] = useState(false); const [activeDropdown, setActiveDropdown] = useState<string | null>(null); const [isDarkMode, setIsDarkMode] = useState(true); useEffect(() => { const handleScroll = () => { setIsScrolled(window.scrollY > 20); }; window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []); const navigationItems: NavigationItem[] = [ { id: "services", label: "Services", href: "#services", children: [ { id: "ai", label: "AI & Machine Learning", href: "#ai-services" }, ";"
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======

interface: NavigationItem {
  id: string;
<<<<<<< HEAD
   labe,
    l: string;
   hre,
    f: string;
   children?: NavigationItem[]} const ModernNavigation: React.FC = () => { const [isOpen, setIsOpen] = useState (false)  const [isScrolled, setIsScrolled] = useState (false)  const [activeDropdown, setActiveDropdown] = useState < string | null> (null)  const [isDarkMode, setIsDarkMode] = useState (true)  useEffect ( () => { const handleScroll = useCallback(() => { setIsScrolled (window.scrollY > 20)  } window.addEventListener ('scroll', handleScroll)  return () => window.removeEventListener ('scroll', handleScroll)  }, [])  const navigationItems: NavigationItem[] = [ { i,
    d: 'services', label: 'Services', href: '#services', children: [ { i,
    d: 'ai', label: 'AI & Machine Learning', href: '#ai - services' }, '';""
=======
   label: string;
   href: string;
<<<<<<< HEAD
   children?: NavigationItem[,]} const: ModernNavigation: React.FC: = () => { const [isOpe,n, setIsOpen] = useState (false)  const [isScrolled, setIsScrolled] = useState (false)  const [activeDropdown, setActiveDropdown] = useState < string | null> (null)  const [isDarkMode, setIsDarkMode] = useState (true)  useEffect ( () => { const handleScroll = useCallback(() => { setIsScrolled (window.scrollY > 20)  } window.addEventListener ('scroll', handleScroll)  return () => window.removeEventListener ('scroll', handleScroll)  }, [])  const navigationItems: NavigationItem[] = [ { id: 'services,', label: 'Services,', href: '#services,', children: [ { id: 'ai,', label: 'AI: & Machine Learning,', href: '#ai: - services', }, '';'"";
=======
<<<<<<< HEAD
   children?: NavigationItem[]} const ModernNavigation: React.FC = () => { const [isOpen, setIsOpen] = useState (false)  const [isScrolled, setIsScrolled] = useState (false)  const [activeDropdown, setActiveDropdown] = useState < string | null> (null)  const [isDarkMode, setIsDarkMode] = useState (true)  useEffect ( () => { const handleScroll = useCallback(() => { setIsScrolled (window.scrollY > 20)  } window.addEventListener ('scroll', handleScroll)  return () => window.removeEventListener ('scroll', handleScroll)  }, [])  const navigationItems: NavigationItem[] = [ { id: 'services', label: 'Services', href: '#services', children: [ { id: 'ai', label: 'AI & Machine Learning', href: '#ai - services' }, '''"
=======
   children?: NavigationItem[]} const ModernNavigation: React.FC = () => { const [isOpen, setIsOpen] = useState (false)  const [isScrolled, setIsScrolled] = useState (false)  const [activeDropdown, setActiveDropdown] = useState < string | null> (null)  const [isDarkMode, setIsDarkMode] = useState (true)  useEffect ( () => { const handleScroll = useCallback(() => { setIsScrolled (window.scrollY > 20)  } window.addEventListener ('scroll', handleScroll)  return () => window.removeEventListener ('scroll', handleScroll)  }, [])  const navigationItems: NavigationItem[] = [ { id: 'services', label: 'Services', href: '#services', children: [ { id: 'ai', label: 'AI & Machine Learning', href: '#ai - services' }, '"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
