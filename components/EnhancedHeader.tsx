import React from "react";
import Link from "next/link";
import { User, ShoppingCart } from "lucide-react";

export default function EnhancedHeader() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">Zion Tech Group</Link>
        <nav className="flex items-center gap-4">
          <Link href="/services" className="text-sm text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="/micro-saas" className="text-sm text-gray-700 hover:text-gray-900">Micro SaaS</Link>
          <Link href="/ai-services" className="text-sm text-gray-700 hover:text-gray-900">AI</Link>
          <Link href="/it-services" className="text-sm text-gray-700 hover:text-gray-900">IT</Link>
          <User className="w-4 h-4 text-gray-500" />
          <ShoppingCart className="w-4 h-4 text-gray-500" />
        </nav>
      </div>
    </header>
  );
}