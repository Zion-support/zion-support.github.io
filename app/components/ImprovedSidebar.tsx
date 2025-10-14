import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, Settings, BarChart3, Mail, Phone, MapPin } from "lucide-react";

const ImprovedSidebar = () => {
  const navigationItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Users },
    { name: "Services", href: "/services", icon: Settings },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="bg-slate-800 text-white w-64 min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Zion Tech Group</h2>
        <p className="text-gray-400 text-sm">AI & IT Solutions</p>
      </div>
      
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-8 pt-8 border-t border-slate-700">
        <div className="space-y-3">
          <div className="flex items-center text-gray-400">
            <Phone className="w-4 h-4 mr-3" />
            <span className="text-sm">+1 (302) 464-0950</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-3" />
            <span className="text-sm">Middletown, DE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedSidebar;