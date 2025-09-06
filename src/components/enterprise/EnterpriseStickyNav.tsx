<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { Menu } from 'lucide-react'
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

  const [ open, setOpen ] = useState(false),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                Features;
              </Link>;
            </li>;
            <li>;
<<<<<<< HEAD
              <Link
                href='#pricing'
                className='text-sm font-medium hover:text-primary'>;
=======
              <Link;
                href='#pricing';
                className='text - sm font - medium hover:text - primary';
              >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                Pricing;
              </Link>;
            </li>;
            <li>;
<<<<<<< HEAD
              <Link
                href='#testimonials'
                className='text-sm font-medium hover:text-primary'>;
=======
              <Link;
                href='#testimonials';
                className='text - sm font - medium hover:text - primary';
              >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                Testimonials;
              </Link>;
            </li>;
            <li>;
<<<<<<< HEAD
              <Link
                href='#contact'
<<<<<<< HEAD
                className='text-sm font-medium hover:text-primary'
              >
                Contact Us
              </Link>            </li>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>

=======
import { useState } from "react";
import { Menu } from 'lucide-react'
import Link from "next/link";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export function EnterpriseStickyNav() {
=======
                className='text-sm font-medium hover:text-primary'>;
                Contact Us;
              </Link>            </li>;
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;
export function EnterpriseStickyNav() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation";
            aria-expanded={open}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
<<<<<<< HEAD
  )
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======
=======
              <Link;
                href='#contact';
                className='text - sm font - medium hover:text - primary';
              >;
                Contact Us;
              </Link>            </li>;
              <Link href="#contact" className="text - sm font - medium hover:text - primary">Contact Us</Link>;
export /**
 * EnterpriseStickyNav - Function description
 */
function EnterpriseStickyNav() {
  const [open, set_open] = useState (false);
  return (
    <nav className="sticky top - 16 z - 40 bg - card border - b border - border">;
      <div className="container mx - auto px - 4 md:px - 6">;
        <div className="flex items - center justify - between h - 12">;
          <button;
            className="md:hidden p - 2 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary";
            on_click={() => set_open (!open)}
            aria - label="Toggle navigation";
            aria - expanded={open}
          >;
            <Menu className="h - 6 w - 6" />;
          </button>;
          <ul className={`${open ? "flex" : "hidden"} flex - col gap - 4 md:flex md:flex - row md:gap - 8 w - full md:w - auto`}>;
            <li>;
              <Link href="#features" className="text - sm font - medium hover: text - primary">Features</Link>;
            </li>;
            <li>;
              <Link href="#pricing" className="text - sm font - medium hover:text - primary">Pricing</Link>;
            </li>;
            <li>;
              <Link href="#testimonials" className="text - sm font - medium hover:text - primary">Testimonials</Link>;
            </li>;
            <li>;
              <Link href="#contact" className="text - sm font - medium hover:text - primary">Contact Us</Link>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            </li>;
          </ul>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    </nav>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </nav>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
