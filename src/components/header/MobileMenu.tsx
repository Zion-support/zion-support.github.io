
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  navigation: Array<{ name: string; href: string; current: boolean }>;
  serviceDropdown: Array<{ name: string; href: string }>;
  onClose: () => void;
  user: any;
  onLogout: () => void;
}

export function MobileMenu({ navigation, serviceDropdown, onClose, user, onLogout }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = React.useState(false);

  return (
    <div className="lg:hidden fixed inset-0 z-40 pt-16">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-4 border-b border-zion-purple/20">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav className="px-4 py-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                item.current
                  ? 'bg-zion-purple/20 text-zion-cyan'
                  : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="border-t border-zion-purple/20 mt-2 pt-2">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              Services
              <ChevronRight className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-90' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 space-y-1">
                {serviceDropdown.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* User Section */}
          {user ? (
            <div className="border-t border-zion-purple/20 mt-4 pt-4">
              <div className="px-4 py-2">
                <p className="text-sm text-zion-slate-light">Signed in as</p>
                <p className="text-white font-medium">{user.name || user.email}</p>
              </div>
              <Link
                to="/profile"
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Profile
              </Link>
              <Link
                to="/dashboard"
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="block w-full text-left px-4 py-3 text-base font-medium text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="border-t border-zion-purple/20 mt-4 pt-4 space-y-2">
              <Link
                to="/login"
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium text-zion-cyan hover:text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium bg-zion-cyan text-zion-blue-dark rounded-lg hover:bg-zion-cyan-light transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
