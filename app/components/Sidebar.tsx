import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block w-64 bg-gray-100 p-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
        <ul className="space-y-1">
          <li>
            <a href="/ai-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded">
              AI Services
            </a>
          </li>
          <li>
            <a href="/it-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded">
              IT Services
            </a>
          </li>
          <li>
            <a href="/5g-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded">
              5G Solutions
            </a>
          </li>
          <li>
            <a href="/micro-saas-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded">
              Micro SaaS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;