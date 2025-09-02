import React, { useState } from 'react';"
import { Link } from 'react-router-dom';"
import { Menu, X, Search, User, Briefcase, HardDrive, Users, Lightbulb } from 'lucide-react';"
import { Button } from '@/components/ui/button';

const mobileMenuItems = ["
  { name: 'Services', icon: <Briefcase className='w-5 h-5'/" >, href: '/services' },"
  { name: 'Talent', icon: <Users className='w-5 h-5'/" >, href: '/talent' },"
  { name: 'Equipment', icon: <HardDrive className='w-5 h-5'/" >, href: '/equipment' },"
  { name: 'Innovation', icon: <Lightbulb className='w-5 h-5'/" >, href: '/category/innovation' },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)}

  return ("
    <div className="lg:hidden">
      <Button "
        variant="ghost"
        size="sm"
        onClick={toggleMenu}"
        className="p-2"
        aria-label="Toggle mobile menu"" >"
        {isOpen ? <X className="h-6 w-6" /" > : <Menu className="h-6 w-6" /" >}
      </Button>

      {isOpen && ("
        <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50">"
          <div className="px-4 py-2 space-y-2">
            {mobileMenuItems.map((item) => (
              <Link key={item.name}
                to={item.href}"
                className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() =" > setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )}"