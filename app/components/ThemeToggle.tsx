<<<<<<< HEAD
'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ThemeToggle() {
  return (
    <>
    
  </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
            Service</h1>
          </h1>
          <p className="text-lg text-gray-300 mb-8"></p>
            Professional service services coming soon.</p>
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hove,
  r:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></Link>
            Contact Us</Link>
            <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
}
=======

import {useState, useEffect} from 'react';
import {Sun, Moon} from 'lucide-react';

const ThemeToggle: React.FC = () => {const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    // Check for saved theme preference or default to dark;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (const savedTheme = == 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');} else {setIsDark(true);
      document.documentElement.classList.add('dark');}
  }, []);

  const toggleTheme = () => {const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');} else {document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');}
  };

export default function ThemeToggle() {return (

      {isDark ? (
        <Sun className="w-5h-5ml-2"   /></Sun>
  ) : (
        <Moon className="w-5h-5ml-2"   /></Moon>
  )}

  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
