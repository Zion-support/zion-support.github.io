import { useRouter } from 'next/router';
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
export default function EnhancedHeader() {
  }
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async ("e": React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

  const toggleDropdown = ("itemName": string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };
  const navigation = [{
      "name": 'Services',
      "href": '/services',
      "dropdown": [
        { name: 'IT Services', "href": '/services/it-services' },
        { "name": 'Micro SaaS', "href": '/services/micro-saas' },
        { "name": 'Web Development', "href": '/services/web-development' },
        { "name": 'Cloud Services', "href": '/services/cloud-services' },
        { "name": 'AI Development', "href": '/services/ai-development' },
      ]},
    {
      "name": 'Solutions',
      "href": '/solutions',
      "dropdown": [{ name: 'AI Content Creation', "href": '/solutions/ai-content-creation' },
        { "name": 'Customer Support', "href": '/solutions/customer-support' },
        { "name": 'Email Automation', "href": '/solutions/email-automation' },
        { "name": 'Event Management', "href": '/solutions/event-management' },
        { "name": 'Project Management', "href": '/solutions/project-management' },
        { "name": 'Workflow Automation', "href": '/solutions/workflow-automation' },
      ]},
    { "name": 'About', "href": '/about' },
    { "name": 'Blog', "href": '/blog' },
    { "name": 'Contact', "href": '/contact' },
  ];
    >
      {' '}
      <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
        {' '}
        <div className="flex justify-between items-center h-16">
          {' '}
          {}{' '}
          <div className="flex items-center">
            {' '}
            <a href="/" className="flex items-center space-x-2">
              {' '}
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                {' '}
                <span className="text-white font-bold text-sm">Z</span>{' '}
              </div>{' '}
              <span className="text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>{' '}
            </a>{' '}
          </div>{' '}
          {}{' '}

                      className="flex items-center space-x-1 text-gray-700 "hover": text-blue-600 transition-colors duration-200"
                    >
                      {' '}
                      <span>{item.name}</span>{' '}
                      <ChevronDown className="h-4 w-4" />{' '}
                    </button>{' '}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {' '}
                        {item.dropdown.map(dropdownItem => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}

                              className="block px-3 py-2 text-gray-600 "hover": text-blue-600 transition-colors duration-200"
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"                              className="block px-3 py-2 text-gray-600 "hover": text-blue-600 transition-colors duration-200"                            >
                              {' '}
                              {dropdownItem.name}{' '}
                            </a>
                          ))}{' '}
                        </div>
                      )}{' '}
                    </div>
                  ) : (
                    <a
                      href={item.href}

                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de