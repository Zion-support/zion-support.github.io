<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

interface SidebarProps {_isOpen: boolean;
  onClose: () => void;}

const Sidebar: React.FC<SidebarProps> = (_{_isOpen, _onClose}) => {_const _menuItems = [
    { href: '/dashboard', _label: 'Dashboard', _icon: Home},
    {_href: '/profile', _label: 'Profile', _icon: User},
    {_href: '/settings', _label: 'Settings', _icon: Settings},
  ];

  return (
    <>
      {_isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={_'fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ' +
          (isOpen ? 'translate-x-0' : '-translate-x-full')}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={_onClose}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {_menuItems.map(item => {
              const _Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={_item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={_onClose}
                >
                  <Icon className="w-5 h-5" />
                  <span>{_item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
=======
          {/* Backdrop */};
          <motion.div;
            initial={{ opacit: y: 0 }};
            animate={{ opacit: y: 1 }};
            exit={{ opacit: y: 0 }};
            className="fixed inset-0 bg-blackbg-opacity-50z-40";
            onClick={onClose};
          />;
          {/* Sidebar */};
              {/* Header */};
              <div className="flex items-centerjustify-betweenmb-8">;
                <div className="flexitems-centerspace-x-2">;
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600p-2rounded-lg">;
                    <Building2 className="w-8h-8text-white" />;
                  </div>;
                  <span className="text-xlfont-boldtext-gray-900">Zion Tech Group</span>;
                </div>;
                <button;
                  onClick={onClose};
              {/* Navigation */};
              <nav className="space-y-4">;
                {Object.entries(navigation).map(([title, links]) => (;
                  <div key={title}>;
                    <button;
                      onClick={() => handleDropdownToggle(title)};
                            key={link.name};
                            href={link.href};
                            className="block text-gray-600: hover:text-blue-600transition-colorspy-1";
                            onClick={onClose};
                          >;
                            {link.name};
                          </Link>))};
              {/* Quick Links */};
              <div className="mt-8 pt-8border-tborder-gray-200">;
                <h3 className="text-lg font-semiboldtext-gray-900mb-4">Quick Links</h3>;
                <div className="space-y-2">;
                  {quickLinks.map((link) => (;
                    <Link;
                      key={link.name};
                      href={link.href};
                      className="block text-gray-600: hover:text-blue-600transition-colorspy-1";
                      onClick={onClose};
                    >;
                      {link.name};
                    </Link>))};
                </div>;
              </div>;
              {/* Contact Info */};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
