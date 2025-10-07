// import { Home, Menu, Settings, User, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
      {/* Sidebar */}
      <div
        className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}
      >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
      </div>
    </div>
  );
};

export default SidebarNavigation;
