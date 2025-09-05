<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Menu } from 'lucide-react'
import Link from "next/link",
=======
import { useState } from &quot;react&quot;;
import { Menu } from 'lucide-react'
import Link from &quot;next/link&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false),
  return (
    <nav className=&quot;sticky top-16 z-40 bg-card border-b border-border&quot;>
      <div className=&quot;container mx-auto px-4 md:px-6&quot;>
        <div className=&quot;flex items-center justify-between h-12&quot;>
=======
import Link from "next/link";

export function EnterpriseStickyNav() {_const [open, _setOpen] = useState(false);
  return (_<nav className="sticky top-16 z-40 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-12">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <button
            className=&quot;md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary&quot;
            onClick={() => setOpen(!open)}
<<<<<<< HEAD
            aria-label=&quot;Toggle navigation&quot;
            aria-expanded={open}
=======
            aria-label="Toggle navigation"
            aria-expanded={_open}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Menu className=&quot;h-6 w-6&quot; />
          </button>
<<<<<<< HEAD
          <ul className={`${open ? &quot;flex&quot; : &quot;hidden&quot;} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>
=======
          <ul className={_`${open ? "flex" : "hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <li>
<<<<<<< HEAD
              <Link href="#features" className="text-sm font-medium hover: text-primary">Features</Link>
=======
              <Link href=&quot;#features&quot; className=&quot;text-sm font-medium hover:text-primary&quot;>Features</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </li>
            <li>
              <Link href=&quot;#pricing&quot; className=&quot;text-sm font-medium hover:text-primary&quot;>Pricing</Link>
            </li>
            <li>
              <Link href=&quot;#testimonials&quot; className=&quot;text-sm font-medium hover:text-primary&quot;>Testimonials</Link>
            </li>
            <li>
              <Link href=&quot;#contact&quot; className=&quot;text-sm font-medium hover:text-primary&quot;>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
