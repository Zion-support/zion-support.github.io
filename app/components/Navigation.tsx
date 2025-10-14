import { 
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon;
  const isActive = (href: string) => {
    if (href === '/') {'''
      return location.pathname === '/'"}"'"'"
    return location.pathname.startsWith(href)
  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },""
    { name: "About", href: "/about", icon: InformationCircleIcon },""
    { 
      ]
    },
    { 
      name: 'Solutions',''
      href: '/solutions',''
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },''
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }''
      ]
    },
    { name: "Blog", href: "/blog", icon: DocumentTextIcon },""
    { name: "Tutorials", href: "/tutorials", icon: AcademicCapIcon },""
    { name: "Demo", href: "/demo", icon: PlayIcon },""
    { name: "Support", href: "/support", icon: QuestionMarkCircleIcon },""
    { name: "Pricing", href: "/pricing", icon: CurrencyDollarIcon },""
    { name: "Contact", href: "/contact", icon: PhoneIcon }""
  ];


const Navigation: React.FC = () => {
  return (
<>    <nav className="bg-gray-800 text-white p-4"></nav>
      <div className="container mx-auto flex justify-between items-center"></div>
        <h1 className="text-xl font-bold">Zion Tech Group</h1>
        <div className="space-x-4"></div>
    </>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
      </nav>
  );
};

