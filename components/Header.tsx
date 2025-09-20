"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Zion Tech Group
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/about"
            >
              About
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
        <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
          Get Started
        </Button>
      </div>
    </header>
  )
}