import React from 'react';
import NextLink from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NextLink href="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </NextLink>
          <nav className="hidden md:flex space-x-8">
            <NextLink href="/micro-saas" className="text-gray-700 hover:text-blue-600">Micro SaaS</NextLink>
            <NextLink href="/it-services" className="text-gray-700 hover:text-blue-600">IT Services</NextLink>
            <NextLink href="/ai-services" className="text-gray-700 hover:text-blue-600">AI Services</NextLink>
            <NextLink href="/contact" className="text-gray-700 hover:text-blue-600">Contact</NextLink>
          </nav>
        </div>
      </div>
    </header>
  );
}