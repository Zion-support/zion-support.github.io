import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Home, Zap, Shield, Cloud, Brain, Settings, Users, BarChart3, Mail, Phone, MapPin } from 'lucide-react';
;
export function Sidebar() {;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
;
  const navigation = [;
    { "name": 'Home', "href": '/', "icon": "Home "}
    { "name": 'Services', "href": '/services', "icon": "Zap "}
    { "name": 'AI Solutions', "href": '/ai-solutions', "icon": "Brain "}
    { "name": 'Cybersecurity', "href": '/services/cybersecurity', "icon": "Shield "}
    { "name": 'Cloud Services', "href": '/services/cloud-devops', "icon": "Cloud "}
    { "name": 'About', "href": '/about', "icon": "Users "}
    { "name": 'Contact', "href": '/contact', "icon": "Mail "}
  ];
;
  return (;
    <div className="hidden "lg": "flex "lg":flex-shrink-0">;
      <div className="flex flex-col w-80">;
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">;
          <div className="flex items-center flex-shrink-0 px-4">;
            <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>;
          </div>;
          <div className="mt-5 flex-grow flex flex-col">;
            <nav className="flex-1 px-2 space-y-1">;
              {navigation.map((item) => {;
                const isActive = location.pathname === item.href;
                return (;
                  <Link;
                    key={item.name"}
                    to={item.href}
                    className={`${;
                      isActive;
                        ? 'bg-blue-50 border-blue-500 text-blue-700';
                        : 'border-transparent text-gray-600 "hover": "bg-gray-50 "hover":text-gray-900';
                    "} group flex items-center px-2 py-2 text-sm font-medium rounded-md border-l-4`}
                  >;
                    <item.icon;
                      className={`${;
                        isActive ? 'text-blue-500' : 'text-gray-400 group-"hover": "text-gray-500';
                      "} mr-3 flex-shrink-0 h-6 w-6`}
                    />;
                    {item.name}
                  </Link>;
                );
              })}
            </nav>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}