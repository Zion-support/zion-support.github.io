<<<<<<< HEAD
import React, { useState } from 'react';""
import { Link } from 'react-router-dom';""
import { Menu, X, Search, User, Briefcase, HardDrive, Users, Lightbulb } from 'lucide-react';""
=======
<<<<<<< HEAD
import React, {useState } from 'react';"
import {Link } from 'react-router-dom';"
import {Menu, X, Search, User, Briefcase, HardDrive, Users, Lightbulb } from 'lucide-react';"
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import React, { useState } from 'react';""
import { Link } from 'react-router-dom';""
import { Menu, X, Search, User, Briefcase, HardDrive, Users, Lightbulb } from 'lucide-react';""
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Briefcase, HardDrive, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
;
const mobileMenuItems = [;
  { name: 'Services', icon: <Briefcase className='w-5 h-5'/>, href: '/services' },;
  { name: 'Talent', icon: <Users className='w-5 h-5'/>, href: '/talent' },;
  { name: 'Equipment', icon: <HardDrive className='w-5 h-5'/>, href: '/equipment' },;
  { name: 'Innovation', icon: <Lightbulb className='w-5 h-5'/>, href: '/category/innovation' },;
];
;
export function MobileNavigation() {;
=======

const mobileMenuItems = [
  { name: 'Services', icon: <Briefcase className='w-5 h-5'/>, href: '/services' }, { name: 'Talent', icon: <Users className='w-5 h-5'/>, href: '/talent' },
  { name: 'Equipment', icon: <HardDrive className='w-5 h-5'/>, href: '/equipment' }, { name: 'Innovation', icon: <Lightbulb className='w-5 h-5'/>, href: '/category/innovation' },
];
>>>>>>> main

export function MobileNavigation() {}
>>>>>>> main
  const [isOpen, setIsOpen] = useState(false);
;
  const toggleMenu = () => {;
    setIsOpen(!isOpen);
<<<<<<< HEAD
  }
  return (
    <div className="lg: hidden">
      <Button
        variant="ghost"
        size="sm"
=======
  };
<<<<<<< HEAD
;
  return (;
    <div className="lg:hidden">;
      <Button;
        variant="ghost";
        size="sm";
>>>>>>> main
        onClick={toggleMenu}
        className="p-2";
        aria-label="Toggle mobile menu";
      >;
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>;

      {isOpen && (;
        <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50">;
          <div className="px-4 py-2 space-y-2">;
            {mobileMenuItems.map((item) => (;
              <Link;
                key={item.name}
                to={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors";
                onClick={() => setIsOpen(false)}
              >;
                {item.icon}
                <span>{item.name}</span>;
              </Link>;
=======

  return (
<<<<<<< HEAD
    <div className=&quot;lg:hidden&quot;>&quot;"
=======
    <div className="lg: hidden">
>>>>>>> main
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
<<<<<<< HEAD
                className=&quot;flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors&quot;
=======
                className="flex items-center space-x-3 px-3 py-2 rounded-md hover: bg-accent transition-colors"
>>>>>>> main
                onClick={() => setIsOpen(false)}
              >
                {item.icon}&quot;
                <span>{item.name}</span>
              </Link>
>>>>>>> main
            ))}
          </div>;
        </div>;
      )}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
=======
import React, { useState } from 'react
import { Link } from 'react-router-dom
import { Menu, X, Search, User, Briefcase, HardDrive, Users, Lightbulb } from 'lucide-react
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
