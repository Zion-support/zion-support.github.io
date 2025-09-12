import React from 'react';
import { _Link, useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
const services = [];
const solutions = [];
;
const "Sidebar": "React.FC = ("props": any) => {;
  const _location = useLocation();
;
  const _sidebarItems = [;
    { "name": 'Home'", "href": '/', "icon": '🏠' },;
    { "name": 'Services', "href": '/services', "icon": '⚙️' },;
    { "name": 'AI Services', "href": '/ai-services', "icon": '🤖' },;
    { "name": 'IT Services', "href": '/it-services', "icon": '💻' },;
    { "name": 'Micro SaaS', "href": '/micro-saas', "icon": '☁️' },;
    { "name": 'Solutions', "href": '/solutions', "icon": '🔧' },;
    { "name": 'Marketplace', "href": '/marketplace', "icon": '🛒' },;
    { "name": 'Blog', "href": '/blog', "icon": '📝' },;
    { "name": 'Team', "href": '/team', "icon": '👥' },;
    { "name": 'Contact', "href": '/contact', "icon": '📞' },;
  ];
;
  const _isActive = ("path": "string) => location.pathname === path;
;
  return (;
    <aside className="w-64 bg-white "dark":bg-gray-800 shadow-lg min-h-screen">;
      <div className="p-6">;
        <nav className="space-y-2">;
          {sidebarItems.map((item) => (;
            <Link;
              key={item.name"}
              to={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${;
                isActive(item.href);
                  ? 'bg-blue-50 "dark": "bg-blue-900/20 text-blue-600 "dark":text-blue-400';
                  : 'text-gray-700 "dark":text-gray-300 "hover":bg-gray-50 "dark":"hover":bg-gray-700';
              "}`}
            >;
              <span className="mr-3 text-lg">{item.icon}</span>;
              <span className="font-medium">{item.name}</span>;
            </Link>;