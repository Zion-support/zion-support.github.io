import React from 'react'
import Link from 'next/link'
import { Menu, X, Brain } from 'lucide-react'

interface NavigationProps {
  mobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ mobile = false }) => {
  if (mobile) {
    return (
      <div className="space-y-4">
        <Link href="/ai-services" className="block text-gray-300 hover:text-white transition-colors">
          AI Services
        </Link>
        <Link href="/it-services" className="block text-gray-300 hover:text-white transition-colors">
          IT Services
        </Link>
        <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
          About
        </Link>
        <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
          Contact
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
        AI Services
      </Link>
      <Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">
        IT Services
      </Link>
      <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
        About
      </Link>
      <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
        Contact
      </Link>
    </div>
  )
}

export default Navigation