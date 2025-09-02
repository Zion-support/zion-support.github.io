import React, { useState } from &apos;react';
import { Link } from &apos;react-router-dom';
import { Menu, X, Search, User, Briefcase, HardDrive, Users, Lightbulb } from &apos;lucide-react';
import { Button } from &apos;@/components/ui/button';&apos;&apos;

const mobileMenuItems = [
  { name: &apos;Services&apos;, icon:&apos;} <Briefcase className=&apos;w-5 h-5&apos;/>, href: &apos;/services&apos; },
  { name: &apos;Talent&apos;, icon:&apos;} <Users className=&apos;w-5 h-5&apos;/>, href: &apos;/talent&apos; },
  { name: &apos;Equipment&apos;, icon:&apos;} <HardDrive className=&apos;w-5 h-5&apos;/>, href: &apos;/equipment&apos; },
  { name: &apos;Innovation&apos;, icon:&apos;} <;<Lightbulb className=&apos;w-5 h-5&apos;/>, href: &apos;/category/innovation&apos; },
];&apos;

export function MobileNavigation() {}
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=&quot;lg:hidden&quot;>&quot;"
      <Button
        variant=&quot;ghost&quot;
        size=&quot;sm&quot;
        onClick={toggleMenu}
        className=&quot;p-2&quot;
        aria-label=&quot;Toggle mobile menu&quot;
      >
        {isOpen ?&quot;} <X className=&quot;h-6 w-6&quot; /> :&quot; <Menu className=&quot;h-6 w-6&quot; />}&quot;
      </Button>

      {isOpen && (}
        <div className=&quot;absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50&quot;>&quot;"
          <div className=&quot;px-4 py-2 space-y-2&quot;>
            {mobileMenuItems.map((item) => (&quot;}
              <Link
                key={item.name}
                to={item.href}
                className=&quot;flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors&quot;
                onClick={() => setIsOpen(false)}
              >
                {item.icon}&quot;
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}