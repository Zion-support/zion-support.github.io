<<<<<<< HEAD
import { useState } from "react";
import { Menu } from 'lucide-react'
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
=======
import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Menu } from 'lucide-react'

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

  const [ open, setOpen ] = useState(false),;

import Link from 'next/link'
  const [ open, setOpen ] = useState(false)
  return (
    <nav className='sticky top-16 z-40 bg-card border-b border-border'>;
      <div className='container mx-auto px-4 md:px-6'>;
        <div className='flex items-center justify-between h-12'>;
          <button
            className='md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            onClick={() => setOpen(!open)}
            aria-label='Toggle navigation';
            aria-expanded={open}          >;
            <Menu className='h-6 w-6' />;
          </button>;
          <ul
            className={`${open ? 'flex' : 'hidden'} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;
            <li>;
              <Link
                href='#features'
                className='text-sm font-medium hover:text-primary'>;
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next / link';
  const [ open, set_open ] = useState (false),
  return (
    <nav className='sticky top - 16 z - 40 bg - card border - b border - border'>;
      <div className='container mx - auto px - 4 md:px - 6'>;
        <div className='flex items - center justify - between h - 12'>;
          <button;
            className='md:hidden p - 2 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary';
            on_click={() => set_open (!open)}
            aria - label='Toggle navigation';
            aria - expanded={open}          >;
            <Menu className='h - 6 w - 6' />;
          </button>;
          <ul;
            className={`${open ? 'flex' : 'hidden'} flex - col gap - 4 md:flex md:flex - row md:gap - 8 w - full md:w - auto`}
          >;
            <li>;
              <Link;
                href='#features';
                className='text - sm font - medium hover:text - primary';
              >;
                Features;
              </Link>;
            </li>;
            <li>;
              <Link
                href='#pricing'
                className='text-sm font-medium hover:text-primary'>;
                Pricing;
              </Link>;
            </li>;
            <li>;
              <Link
                href='#testimonials'
                className='text-sm font-medium hover:text-primary'>;
                Testimonials;
              </Link>;
            </li>;
            <li>;
              <Link
                href='#contact'
                className='text-sm font-medium hover:text-primary'
              >
                Contact Us
              </Link>            </li>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>

export function EnterpriseStickyNav() {
<<<<<<< HEAD
                className='text-sm font-medium hover:text-primary'>;
                Contact Us;
              </Link>            </li>;
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false);
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from "react",
import { Menu } from 'lucide-react'
import Link from "next/link",
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-12">
          <button
<<<<<<< HEAD
            className='md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            onClick={() => setOpen(!open)}
            aria-label='Toggle navigation'
            aria-expanded={open}          >
            <Menu className='h-6 w-6' />
=======
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
              <Link
                href='#contact'
                className='text-sm font-medium hover:text-primary'
              >
                Contact Us
              </Link>            </li>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation";
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",;
import { Menu } from 'lucide-react';
import Link from "next/link",;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false);
  return (;
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button;
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation";
            aria-expanded={open}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          >;
            <Menu className="h-6 w-6" />;
          </button>;
          <ul className={`${open ? "flex" : "hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;
            <li>;
              <Link href="#features" className="text-sm font-medium hover: text-primary">Features</Link>;
            </li>;
            <li>;
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>;
            </li>;
            <li>;
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>;
            </li>;
            <li>;
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;
            </li>;
          </ul>;
        </div>;
      </div>;
    </nav>;
  );
}
  );
}
<<<<<<< HEAD
    </nav>);
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
