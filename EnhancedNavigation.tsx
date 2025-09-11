;
const EnhancedNavigation: React.FC = () => {
  const [is_open, setIsOpen] = useState (false);
  const navigation_items = [;
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];
;
  return (
    <nav className="bg - white shadow - lg">;
      <div className="container mx - auto px - 4">;
        <div className="flex items - center justify - between h - 16">;
          <Link href="/" className="text - xl font - bold text - gray - 800">;
            Zion Tech Group;
          </Link>;
          <div className="hidden md:flex items - center space - x-8">;
            {navigation_items.map ((item) => (
              <Link;
              </Link>))}
          </div>;
          <button;
            on_click={() => setIsOpen (!is_open)}
            className="md:hidden p - 2 text - gray - 700 hover:text - blue - 600";
          >;
            {is_open ? <X className="w - 6 h - 6" /> : <Menu className="w - 6 h - 6" />}
          </button>;
        </div>;
        {is_open && (
          <div className="md:hidden bg - white border - t border - gray - 200">;
            <div className="px - 4 py - 2 space - y-2">;
              {navigation_items.map ((item) => (
                <Link;