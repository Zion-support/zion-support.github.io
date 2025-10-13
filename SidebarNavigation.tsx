import React from 'react';
interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
    </div>
  );
};
export default SidebarNavigation;