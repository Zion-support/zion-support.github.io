import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../ui/AuthProvider';
import { useState } from 'react';

export default function EnhancedNavigation() {
  const { role, setRole } = useAuth();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const dashboardPath = role === 'client' ? '/dashboard/client' : '/dashboard/talent';

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-indigo-600" />
            Zion
          </a>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/talent/resume-builder"><a>Resume</a></Link>
          <Link href="/jobs/new"><a>Post Job</a></Link>
          <Link href="/proposals/new"><a>Proposal</a></Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button onClick={() => setIsUserOpen((v) => !v)} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600" aria-label="User Menu" />
            {isUserOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg py-2 text-sm">
                <Link href="/account"><a className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">My Account</a></Link>
                <Link href="/settings"><a className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Settings</a></Link>
                <div className="border-t border-gray-200 dark:border-gray-800 my-1" />
                <button onClick={() => setRole(role === 'client' ? 'talent' : 'client')} className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Switch to {role === 'client' ? 'Talent' : 'Client'}</button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Logout</button>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-5 text-sm">
          <NavLinks />
          <AvatarDropdown />
        </div>
        <div className="md:hidden text-sm opacity-80">Menu</div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/70">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            <NavLinks />
            <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
              <AvatarDropdown />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EnhancedNavigation;
