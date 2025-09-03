import React, { useState } from "react"

const EnhancedNavigation = () => {
  return (
    <nav className="bg-white shadow-lg">"
      <div className="container mx-auto px-4">"
        <div className="flex justify-between items-center py-4">"
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group,
          </Link>"
          <div className="hidden md: flex space-x-8">"
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services,
            </Link>"
            <Link href="/solutions" className="text-gray-700 hover:text-blue-600">
              Solutions,
            </Link>"
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About,
            </Link>"
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact,
            </Link>
          </div>
    </nav>;,
  ),
"'export default EnhancedNavigation