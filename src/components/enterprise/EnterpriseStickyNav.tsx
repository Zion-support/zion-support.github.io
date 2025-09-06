<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useState } from "react";
import { Menu } from 'lucide-react'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

  const [ open, setOpen ] = useState(false),;
<<<<<<< HEAD


=======
import { useState } from "react";
import { useState } from 'react'
import { Menu } from 'lucide-react'

import Link from 'next/link'
  const [ open, setOpen ] = useState(false)
import { useState } from "react",
import { Menu } from 'lucide-react'
import Link from "next/link",
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false),
  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-12">
          <button
            className='md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            onClick={() => setOpen(!open)}


=======
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                Features;
              </Link>;
            </li>;
            <li>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Link;
                href='#pricing';
                className='text - sm font - medium hover:text - primary';
              >;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                Pricing;
              </Link>;
            </li>;
            <li>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Link;
                href='#testimonials';
                className='text - sm font - medium hover:text - primary';
              >;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                Testimonials;
              </Link>;
            </li>;
            <li>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useState } from "react";
import { Menu } from 'lucide-react'
import Link from "next/link";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function EnterpriseStickyNav() {
                className='text-sm font-medium hover:text-primary'>;
                Contact Us;
              </Link>            </li>;
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false);

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

<<<<<<< HEAD
            </li>;
    </nav>);
}
=======
import { useState } from "react",
import { Menu } from 'lucide-react'
import Link from "next/link",
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false),


  return (
<<<<<<< HEAD
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button

            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
import { useState } from "react",;
import { Menu } from 'lucide-react';
import Link from "next/link",;
;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false),;
  return (;
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button;
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation";
            aria-expanded={open}
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
              <Link
                href='#contact'
                className='text-sm font-medium hover:text-primary'
              >
                Contact Us
              </Link>            </li>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>

export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false);
  return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <nav className="sticky top-16 z-40 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-12">
          <button
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
<<<<<<< HEAD
    </nav>;
  );
};
}
    </nav>;
  );
};
    </nav>
  )
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          >;
            <Menu className="h-6 w-6" />;
          </button>;
<<<<<<< HEAD
          <ul className={`${open ? "flex" :"hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;
            <li>;
              <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>;
          >;
            <Menu className="h-6 w-6" />;
          </button>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </li>;
          </ul>;
        </div>;
      </div>;
<<<<<<< HEAD


            </li>;
          </ul>;
        </div>;
      </div>;
    </nav>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
  );
}
    </nav>);
}
    </nav>;
  );}
 export function EnterpriseStickyNav () {;
  const [open, setOpen] = useState (false);
return (<nav className="sticky top-16 z-40 bg-card border-b border-border" > <div className="container mx-auto px-4 md:px-6" > <div className="flex items-center justify-between h-12" > md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"onClick={;
  () => setOpen (!open) ";
}> <Menu className=" h-6 w-6"/> </button> <li> </li> <li> <Link href=" #pricing"className=" text-sm font-medium hover:text-primary">Pricing</Link> </li> <li> <Link href=" #testimonials"className=" text-sm font-medium hover:text-primary">Testimonials</Link> </li> <li> <Link href=" #contact"className=" text-sm font-medium hover:text-primary" >Contact Us</Link> </li> </ul> </div> </div> </nav>) ;
}"
  );
}
    </nav>);
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
