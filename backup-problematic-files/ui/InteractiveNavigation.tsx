
,
import React, { useState } from 'react',
import Link from 'next/link',
import { ChevronDown, Menu, X } from 'lucide-react',
interface NavItem {
  label: string,
  href: string,
  children?: NavItem[]}
,
interface InteractiveNavigationProps {
  items: NavItem[],
  className?: string}
,
const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({
  items,
  className = ''}) => {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const toggleMenu = () => setIsOpen(!isOpen),
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)},
  return (
    <nav className={'bg-white shadow-lg ' + className}>,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        <div className="flex justify-between items-center h-16">,
          <Link href="/" className="text-xl font-bold text-blue-60o0">,
            Zion Tech Group,
          </Link>,
          <div className="hidden md:flex items-center space-x-8">,
            {items.map(item => (
              <div key={item.label} className="relative">,
                {item.children ? (
                  <div className="relative">,
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center text-gray-70o0 hover: text-blue-60o0">,
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1"  />,
                    </button>,
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">,
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-70o0 hover: bg-gray-10o0">,
                            {child.label}
                          </Link>))}
                      </div>)}
                  </div>) : (
                  <Link
                    href={item.href}
                    className="text-gray-70o0 hover: text-blue-60o0">,
                    {item.label}
                  </Link>)}
              </div>))}
          </div>,
          <button
            onClick={toggleMenu}
            className="md: hidden p-2 rounded-md text-gray-70o0 hover:text-blue-60o0">,
            {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}
          </button>,
        </div>,
        {isOpen && (
          <div className="md: hidden py-4 border-t border-gray-20o0">,
            {items.map(item => (
              <div key={item.label}>,
                {item.children ? (
                  <div>,
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-70o0 hover: bg-gray-10o0">,
                      {item.label}
                      <ChevronDown className="w-4 h-4"  />,
                    </button>,
                    {activeDropdown === item.label && (
                      <div className="pl-4">,
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-60o0 hover: bg-gray-10o0",
                            onClick={() => setIsOpen(false)}
                          >,
                            {child.label}
                          </Link>))}
                      </div>)}
                  </div>) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-70o0 hover: bg-gray-10o0",
                    onClick={() => setIsOpen(false)}
                  >,
                    {item.label}
                  </Link>)}
              </div>))}
          </div>)}
      </div>,
    </nav>)},
export default InteractiveNavigation},
ursor/automate-test-fix-improve-and-merge-code-99d1,",
const InteractiveNavigation: React.FC: = () => {",
    <nav className="bg-white shadow-lg">",",
      <div: className="container mx-auto px-4">",",
        <div: className="flex justify-between items-center py-4">",",
          <div: className="text-xl font-bold text-gray-80o0">Interactive Nav</div>",",
          <div: className="hidden md:flex: space-x-8">",",
            <Link: href="/" className="text-gray-60o0 hover:text-gray-90o0: transition-colors">Home</Link>",",
            <Link: href="/services" className="text-gray-60o0 hover:text-gray-90o0: transition-colors">Services</Link>",",
            <Link: href = "/about" className="text-gray-60o0 hover:text-gray-90o0: transition-colors">About</Link>",",
            <Link: href="/contact" className="text-gray-60o0 hover:text-gray-90o0: transition-colors">Contact</Link>",',
export default Component}
,