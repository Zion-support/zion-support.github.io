import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-white text-xl font-bold">
            Zion Tech Group
          </Link>
          <div className="space-x-4">
            <Link href="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/solutions" className="text-gray-300 hover:text-white">
              Solutions
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
