<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { Menu } from 'lucide-react'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
  const [ open, setOpen ] = useState(false),;
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
import Link from 'next/link';

  const [ open, setOpen ] = useState(false),;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Features;
              </Link>;
            </li>;
            <li>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link;
                href='#pricing';
                className='text - sm font - medium hover:text - primary';
              >;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Pricing;
              </Link>;
            </li>;
            <li>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link;
                href='#testimonials';
                className='text - sm font - medium hover:text - primary';
              >;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Testimonials;
              </Link>;
            </li>;
            <li>;
<<<<<<< HEAD
import { useState } from "react";
import { Menu } from 'lucide-react'
import Link from "next/link";
=======

import { useState } from "react";
import { useState } from 'react'
import { Menu } from 'lucide-react'

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function EnterpriseStickyNav() {
                className='text-sm font-medium hover:text-primary'>;
                Contact Us;
              </Link>            </li>;
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false);


import { useState } from "react",
import { Menu } from 'lucide-react'
import Link from "next/link",
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false),


  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button

            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            aria-label="Toggle navigation";
            aria-expanded={open}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </nav>;
  );
};
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </nav>;
  );
};
    </nav>
<<<<<<< HEAD
  )
}
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
          <ul className={`${open ? "flex" :"hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;
            <li>;
              <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>;
=======



    </nav>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </li>;
          </ul>;
        </div>;
      </div>;


<<<<<<< HEAD
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
=======
  );
}
    </nav>);
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
}
    </nav>);
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
