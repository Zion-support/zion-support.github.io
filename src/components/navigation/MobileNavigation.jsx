import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, X, Search, User, Briefcase, HardDrive, Users, Lightbulb} from 'lucide-react';
import {Button} from '@/components/ui/button';
;
const mobileMenuItems = [;
  {"name": 'Services', "icon": "<Briefcase className="w-5 h-5"  />", "href": '/services'},;
  {"name": 'Talent', "icon": "<Users className="w-5 h-5"  />", "href": '/talent'},;
  {"name": 'Equipment', "icon": "<HardDrive className="w-5 h-5"  />", "href": '/equipment'},;
  {"name": 'Innovation', "icon": "<Lightbulb className="w-5 h-5"  />", "href": '/category/innovation'}
];
;
export function MobileNavigation("props": "any) {;
  const [isOpen", setIsOpen] = useState(false);
;
  const toggleMenu = ("props": "any) => {;
    setIsOpen(!isOpen);
  "};
;
  const closeMenu = ("props": "any) => {setIsOpen(false);"};
;
  return (;
    <div className=""lg": "hidden">;
      <button;
        onClick={toggleMenu"}
        className="p-2 rounded-lg text-gray-300 "hover": "text-cyan-300 "hover":bg-gray-800/50 transition-colors duration-200";
        aria-label="Toggle mobile menu";
      >;
        {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />"}
      </button>;
      {isOpen && (;
        <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20 shadow-lg">;
          <div className="px-4 py-6 space-y-4">;
            <div className="space-y-2">;
              {mobileMenuItems.map((item) => (;
                <Link;
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 "hover": "text-cyan-300 "hover":bg-gray-800/50 rounded-lg transition-colors duration-200";
                >;
                  {item.icon"}
                  <span>{item.name}</span>;
                </Link>;
              ))}
            </div>;
            <div className="pt-4 border-t border-gray-700 space-y-2">;
              <Button;
                variant="outline";
                size="sm";
                className="w-full justify-start";
                onClick={closeMenu}
              >;
                <Search className="w-4 h-4 mr-2"  />;
                Search;
              </Button>;
              <Button;
                variant="outline";
                size="sm";
                className="w-full justify-start";
                onClick={closeMenu}
              >;
                <User className="w-4 h-4 mr-2"  />;
                Sign In;
              </Button>;
            </div>;
          </div>;
        </div>;
      )}
    </div>
    );
}
;
export default MobileNavigation;