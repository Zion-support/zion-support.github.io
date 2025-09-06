<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
=======

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from 'lucide-react'

export function FloatingCTA() {

  const [ isVisible, setIsVisible ] = useState(false),
  const [ isClosed, setIsClosed ] = useState(false),


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
<<<<<<< HEAD
    setIsVisible(false);
=======
    setIsVisible(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  };

  if (!isVisible) return null;

<<<<<<< HEAD
  return (
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
            asChild
          >
            <Link href='/signup'>Register Now</Link>
          </Button>
          <button
            onClick={handleClose}
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'
          >
            <X className='w-5 h-5' />
=======

  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">
        <div className="mr-4">
          <p className="text-white font-medium">Ready to explore Zion?</p>
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap"
            asChild
          >
            <Link href="/signup">Register Now</Link>
          </Button>
          <button 
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </button>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD

};
}, [isClosed]);
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) ;
}'"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
