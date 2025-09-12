import React, { useState } from "react;
import Link from "next/link;
import { Menu, X, ChevronDown } from "lucide-react;
const EnhancedNavigation: React.FC = () => {const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
const EnhancedNavigation = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* comment */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
            </div>
          </Link>
          {/* comment */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            {/* comment */}
            <div className="relative group">
              <button;
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4"   />
              </button>
              <div
                className={"absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? "block" : "hidden"}"}