import React from 'react';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/80 hover:text-primary">About</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-primary">Contact</a></li>
              <li><a href="#careers" className="text-foreground/80 hover:text-primary">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-foreground/80 hover:text-primary">Services</a></li>
              <li><a href="#pricing" className="text-foreground/80 hover:text-primary">Pricing</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#help" className="text-foreground/80 hover:text-primary">Help Center</a></li>
              <li><a href="#docs" className="text-foreground/80 hover:text-primary">Documentation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-foreground/80 hover:text-primary" aria-label="Twitter">
                <span className="text-lg">🐦</span>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-foreground/80 hover:text-primary" aria-label="LinkedIn">
                <span className="text-lg">💼</span>
              </a>
              <a href="https://github.com/ziontechgroup" className="text-foreground/80 hover:text-primary" aria-label="GitHub">
                <span className="text-lg">🐙</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <div className="text-foreground/60 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
