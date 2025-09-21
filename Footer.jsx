export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-sm text-muted-foreground">
              Leading technology solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="text-muted-foreground hover:text-foreground">IT Services</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-foreground">AI Solutions</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-foreground">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              <li><a href="/careers" className="text-muted-foreground hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 Zion Tech Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}