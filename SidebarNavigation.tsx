import React from 'react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}
;
const navigationItems = [

  { name: "Home", href: "/", icon: User },"
  { name: "Profile", href: "/profile", icon: User },"
  { name: "Settings", href: "/settings", icon: User },"
  { name: "Help", href: "/help", icon: User },"
  { name: "About", href: "/about", icon: User }

];
;
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (

    <>
      {/* Overlay */}
      {isOpen && (
        <div"
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        /></div>)
      )}

        </nav>
      </div>
    </div>
  );
};
;
export default SidebarNavigation;
"
