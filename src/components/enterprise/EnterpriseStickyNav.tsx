<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx

import { Menu } from 'lucide-react'

=======
import { useState } from "react";
import { Menu } from 'lucide-react'

========
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
  const [ open, setOpen ] = useState(false),;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterpriseStickyNav.tsx
import Link from 'next/link'
  const [ open, setOpen ] = useState(false)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { useState } from "react";
=======
import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Menu } from 'lucide-react'

<<<<<<< HEAD
import Link from 'next/link'
  const [ open, setOpen ] = useState(false)
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",
import { Menu } from 'lucide-react'
import Link from "next/link",
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>   return (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <nav className="sticky top-16 z-40 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-12">
          <button
<<<<<<< HEAD
            className='md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            onClick={() => setOpen(!open)}
<<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
            aria-label='Toggle navigation'
            aria-expanded={open}          >
            <Menu className='h-6 w-6' />
>>>>>>>           </button>
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


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
              <Link;
                href='#pricing';
                className='text - sm font - medium hover:text - primary';
              >;
                Pricing;
              </Link>;
            </li>;
            <li>;
              <Link;
                href='#testimonials';
                className='text - sm font - medium hover:text - primary';
              >;
                Testimonials;
              </Link>;
            </li>;
            <li>;
import { useState } from "react";
import { Menu } from 'lucide-react'
import Link from "next/link";
export function EnterpriseStickyNav() {
                className='text-sm font-medium hover:text-primary'>;
                Contact Us;
              </Link>            </li>;
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterpriseStickyNav.tsx
  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button

<<<<<<< HEAD
=======
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            aria-label="Toggle navigation";
            aria-expanded={open}
<<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
          >
            <Menu className="h-6 w-6" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
=======
>>>>>>>               <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </li>
          </ul>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
    </nav>;
  );
};
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </nav>;
  );
};
=======
    </nav>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterpriseStickyNav.tsx
          >;
            <Menu className="h-6 w-6" />;
          </button>;
<<<<<<< HEAD
          <ul className={`${open ? "flex" : "hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;
            <li>;
              <Link href="#features" className="text-sm font-medium hover: text-primary">Features</Link>;
=======
          <ul className={`${open ? "flex" :"hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;
            <li>;
              <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          >;
            <Menu className="h-6 w-6" />;
          </button>;
          <ul className={`${open ? "flex" : "hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;
            <li>;
              <Link href="#features" className="text-sm font-medium hover: text-primary">Features</Link>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterpriseStickyNav.tsx
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
<<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx

>>>>>>>             </li>;
========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </li>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterpriseStickyNav.tsx
          </ul>;
        </div>;
      </div>;


=======
            </li>;
          </ul>;
        </div>;
      </div>;
    </nav>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  );
}
    </nav>);
}
=======
    </nav>;
  );}
 export function EnterpriseStickyNav () {;
  const [open, setOpen] = useState (false);
return (<nav className="sticky top-16 z-40 bg-card border-b border-border" > <div className="container mx-auto px-4 md:px-6" > <div className="flex items-center justify-between h-12" > md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"onClick={;
  () => setOpen (!open) ";
}> <Menu className=" h-6 w-6"/> </button> <li> </li> <li> <Link href=" #pricing"className=" text-sm font-medium hover:text-primary">Pricing</Link> </li> <li> <Link href=" #testimonials"className=" text-sm font-medium hover:text-primary">Testimonials</Link> </li> <li> <Link href=" #contact"className=" text-sm font-medium hover:text-primary" >Contact Us</Link> </li> </ul> </div> </div> </nav>) ;
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterpriseStickyNav.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
