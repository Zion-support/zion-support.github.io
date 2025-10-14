import React from 'react';
interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}
;
const navigationItems = [
  { name: "Home", href: "/", icon: User }
  { name: "Profile", href: "/profile", icon: User }
  { name: "Settings", href: "/settings", icon: User }
  { name: "Help", href: "/help", icon: User }
  { name: "About", href: "/about", icon: User }
];
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        /></div>)
      )}
        </nav>
      </div></div>);
};
export default SidebarNavigation;
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex items-center justify-between h-16 px-4">
        <h2 className="text-white text-xl font-bold">Navigation</h2>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300"
        >
          ×
        </button>
      </div>
    </div>
  );
};
;
export default SidebarNavigation;
"
