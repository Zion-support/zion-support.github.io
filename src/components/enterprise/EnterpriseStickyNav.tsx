

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

              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>


