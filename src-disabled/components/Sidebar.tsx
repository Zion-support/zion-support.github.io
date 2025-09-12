

:src_backup/components/Sidebar.tsx
interface SidebarProps  {isOpen: boolean;
  onClose: () => void;
}const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {if (!isOpen) return null;return (<div className="fixed inset-0 z-50 lg:hidden">;
            className="p-2 hover:bg-gray-100 rounded-lg";
      {/* Backdrop */}
      <div;
        className="fixed inset-0 bg-black bg-opacity-50";
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role="button";
        tabIndex={0}
        aria-label="Close sidebar";
      />;
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl">;
        <div className="flex items-center justify-between p-4 border-b border-gray-700">;
          <h2 className="text-white font-semibold">Menu</h2>;
          <button;
            onClick={onClose}
            className="text-gray-400 hover:text-white";
          >;
            <X className="h-6 w-6" />;
          </button>;
        </div>;
        <nav className="p-4">;
          <div className="space-y-2">;
            <a href="/" className="block text-gray-300 hover:text-white py-2">Home</a>;
            <a href="/about" className="block text-gray-300 hover:text-white py-2">About</a>;
            <a href="/services" className="block text-gray-300 hover:text-white py-2">Services</a>;
            <a href="/pricing" className="block text-gray-300 hover:text-white py-2">Pricing</a>;
            <a href="/contact" className="block text-gray-300 hover:text-white py-2">Contact</a>;
          </div>;
        </nav>;
      </div>;
  )</nav>;
      </div>;
  )}export default Sidebar;

};
}
export default Sidebar;