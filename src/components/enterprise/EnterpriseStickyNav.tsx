<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

<<<<<<< HEAD
=======
=======
import { useState } from "react";
import { Menu } from 'lucide-react'
import Link from "next/link";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className='sticky top-16 z-40 bg-card border-b border-border'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between h-12'>
          <button
            className='md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            onClick={() => setOpen(!open)}
            aria-label='Toggle navigation'
            aria-expanded={open}
          >
            <Menu className='h-6 w-6' />
          </button>
          <ul
            className={`${open ? 'flex' : 'hidden'} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}
          >
            <li>
              <Link
                href='#features'
                className='text-sm font-medium hover:text-primary'
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href='#pricing'
                className='text-sm font-medium hover:text-primary'
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href='#testimonials'
                className='text-sm font-medium hover:text-primary'
              >
                Testimonials
              </Link>
            </li>
            <li>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <Link
                href='#contact'
                className='text-sm font-medium hover:text-primary'
              >
                Contact Us
<<<<<<< HEAD
              </Link>            </li>
=======
              </Link>
=======
import { useState } from "react";
import { Menu } from 'lucide-react'
import Link from "next/link";
export function EnterpriseStickyNav() {

  const [ open, setOpen ] = useState(false),

  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-12">
          <button
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
          <ul className={`${open ? "flex" : "hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>
            <li>
              <Link href="#features" className="text-sm font-medium hover: text-primary">Features</Link>
            </li>
            <li>
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
            </li>
            <li>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </li>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </ul>
        </div>
      </div>
    </nav>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
