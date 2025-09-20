<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from 'lucide-react';

export default function FloatingCTA() {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const closed = localStorage.getItem('floating-cta-closed');
    if (closed === 'true') {
      setIsClosed(true);
    }
  }, []);

  const handleClose = () => {
    setIsClosed(true);
    localStorage.setItem('floating-cta-closed', 'true');
  };

  if (isClosed) {
=======
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from 'lucide-react'

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Show CTA after 3 seconds
    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  if (!isVisible || isClosed) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
    return null;
  }

  return (
<<<<<<< HEAD
    <div className='fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in'>
      <div className='bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between'>
        <div className='mr-4'>
          <p className='text-white font-medium'>Ready to explore Zion?</p>
          <p className='text-zion-slate-light text-sm'>
            Register today to access all features!
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Button
            variant='default'
            size='sm'
            className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap'
=======
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-lg border border-blue-500 shadow-lg flex items-center justify-between">
        <div className="mr-4">
          <p className="text-white font-medium">Ready to explore Zion?</p>
          <p className="text-blue-100 text-sm">
            Register today to access all features!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="sm"
            className="bg-white text-blue-600 hover:bg-blue-50 whitespace-nowrap"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
            asChild
          >
            <Link href="/signup">Register Now</Link>
          </Button>
          <button
            onClick={handleClose}
<<<<<<< HEAD
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'
          >
            <X className='w-5 h-5' />
=======
            className="text-blue-200 hover:text-white p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
          </button>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
