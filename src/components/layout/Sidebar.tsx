import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-80 bg-gray-50 border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
        <nav className="space-y-2">
          <a href="/services/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
            Micro SaaS Development
          </a>
          <a href="/services/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
            AI Services
          </a>
          <a href="/services/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
            IT Services
          </a>
          <a href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
            Contact Us
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;