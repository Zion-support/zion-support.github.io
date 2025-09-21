import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Zion Tech Group
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/about"
            >
              <span className="transition-colors hover:text-foreground/80 text-foreground/60">
                About
              </span>
            </Link>
            <Link
              href="/services"
            >
              <span className="transition-colors hover:text-foreground/80 text-foreground/60">
                Services
              </span>
            </Link>
            <Link
              href="/contact"
            >
              <span className="transition-colors hover:text-foreground/80 text-foreground/60">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}