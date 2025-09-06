const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </Link>))}
            </div>;
          </div>)}
      </div>;
    </nav>);
}
;
