import React, { useState } from "react"

const services = [];
export function ModernHeader() {;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [isServicesOpen, setIsServicesOpen] = useState(false)


  const _toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)


  const _closeMobileMenu = () => {
    setIsMobileMenuOpen(false)


    setIsServicesOpen(false)


  }'

  const _services = []

  return (
    <>
      {/* comment */}

      <div className="bg-blue-900 text-white py-2">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
          <div className="flex items-center justify-between text-sm">"
            <div className="flex items-center space-x-6">"
              <div className="flex items-center space-x-2">"
                <Phone className="h-4 w-4"   />"
                <a href="tel:+13024640950" className="hover:text-blue-200 transition-colors">
                  +1 302 464 0950;
                </a>
              </div>"
              <div className="flex items-center space-x-2">"
                <Mail className="h-4 w-4"   />"
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-200 transition-colors">
                  kleber@ziontechgroup.com;
                </a>
              </div>"
              <div className="hidden md:flex items-center space-x-2">"
                <MapPin className="h-4 w-4"   />,