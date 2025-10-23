
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Brain, Menu, X } from "lucide-react";
const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">{/* Logo */}</div>
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>span>
            </Link>
          </div>
          {/* Desktop Navigation */}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

