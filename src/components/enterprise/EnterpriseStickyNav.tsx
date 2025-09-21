import React from "react";
import { Menu,} from 'lucide-react'
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false)
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
              <Link href="#features" >
              <span className="text-sm font-medium hover: text-primary">
                Features
              </span>
            </Link>
            </li>
            <li>
              <Link href="#pricing" >
              <span className="text-sm font-medium hover:text-primary">
                Pricing
              </span>
            </Link>
            </li>
            <li>
              <Link href="#testimonials" >
              <span className="text-sm font-medium hover:text-primary">
                Testimonials
              </span>
            </Link>
            </li>
            <li>
              <Link href="#contact" >
              <span className="text-sm font-medium hover:text-primary">
                Contact Us
              </span>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}