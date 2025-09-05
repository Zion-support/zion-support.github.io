<<<<<<< HEAD
import { NewsletterForm } from "@/components/NewsletterForm",;
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react",;
import { Link } from "react-router-dom",;
;
export function Footer() {;
  return (;
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          <div>;
            <div className="mb-4">;
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>;
            </div>;
            <p className="text-zion-slate mb-4 max-w-xs">;
              The world's first free marketplace dedicated to high-tech and artificial intelligence.;
            </p>;
            <div className="flex space-x-4">;
              <a href="https://twitter.com/lovable_dev" target="_blank" rel="noopener noreferrer" className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Twitter className="h-5 w-5" />;
              </a>;
              <a href="https://www.linkedin.com/company/zion-marketplace" target="_blank" rel="noopener noreferrer" className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Linkedin className="h-5 w-5" />;
              </a>;
              <a href="https://www.facebook.com/zionmarketplace" target="_blank" rel="noopener noreferrer" className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Facebook className="h-5 w-5" />;
              </a>;
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Instagram className="h-5 w-5" />;
              </a>;
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Github className="h-5 w-5" />;
              </a>;
            </div>;
          </div>;
;
          <div>;
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>;
            <ul className="space-y-2">;
              <li><Link to="/marketplace" className="text-zion-slate hover:text-zion-cyan transition-colors">Products</Link></li>;
              <li><Link to="/services" className="text-zion-slate hover:text-zion-cyan transition-colors">Services</Link></li>;
              <li><Link to="/talent" className="text-zion-slate hover:text-zion-cyan transition-colors">Talent</Link></li>;
              <li><Link to="/equipment" className="text-zion-slate hover:text-zion-cyan transition-colors">Equipment</Link></li>;
              <li><Link to="/categories" className="text-zion-slate hover:text-zion-cyan transition-colors">Categories</Link></li>;
              <li><Link to="/green-it" className="text-zion-slate hover:text-zion-cyan transition-colors">Green IT</Link></li>;
            </ul>;
          </div>;
;
          <div>;
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>;
            <ul className="space-y-2">;
              <li><Link to="/content/about" className="text-zion-slate hover:text-zion-cyan transition-colors">About Us</Link></li>;
              <li><Link to="/blog" className="text-zion-slate hover:text-zion-cyan transition-colors">Blog</Link></li>;
              <li><Link to="/partners" className="text-zion-slate hover:text-zion-cyan transition-colors">Partners</Link></li>;
              <li><Link to="/careers" className="text-zion-slate hover:text-zion-cyan transition-colors">Careers</Link></li>;
              <li><Link to="/contact" className="text-zion-slate hover:text-zion-cyan transition-colors">Contact</Link></li>;
              <li><Link to="/sitemap-page" className="text-zion-slate hover:text-zion-cyan transition-colors">Sitemap</Link></li>;
            </ul>;
          </div>;
;
          <div>;
            <h3 className="text-white font-semibold mb-4 text-lg">Subscribe to our newsletter</h3>;
            <p className="text-zion-slate mb-4">;
              Stay updated with the latest news on tech, AI, and marketplace opportunities.;
            </p>;
            <NewsletterForm />;
          </div>;
        </div>;
;
        <div className="mt-12 pt-8 border-t border-zion-blue-light">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <p className="text-zion-slate text-sm">;
              &copy, {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
            </p>;
            <div className="flex space-x-6 mt-4 md:mt-0">;
              <Link to="/privacy" className="text-zion-slate hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>;
              <Link to="/terms" className="text-zion-slate hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  );
=======
import { NewsletterForm } from "@/components/NewsletterForm",
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react",
import { Link } from "react-router-dom",export function Footer() {
  return (
    <footer className=&quot;bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>

export function Footer() {_return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8">
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className=&quot;mb-4&quot;>
              <span className=&quot;text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent&quot;>ZION</span>
            </div>
            <p className=&quot;text-zion-slate mb-4 max-w-xs&quot;>
              The world's first free marketplace dedicated to high-tech and artificial intelligence.
            </p>
            <div className=&quot;flex space-x-4&quot;>
              <a href=&quot;https://twitter.com/lovable_dev&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>
                <Twitter className=&quot;h-5 w-5&quot; />
              </Link>
              <a href=&quot;https://www.linkedin.com/company/zion-marketplace&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>
                <Linkedin className=&quot;h-5 w-5&quot; />
              </Link>
              <a href=&quot;https://www.facebook.com/zionmarketplace&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>
                <Facebook className=&quot;h-5 w-5&quot; />
              </Link>
              <a href=&quot;https://instagram.com&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>
                <Instagram className=&quot;h-5 w-5&quot; />
              </Link>
              <a href=&quot;https://github.com&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>
                <Github className=&quot;h-5 w-5&quot; />
              </Link>
            </div>
          </div>

          <div>
            <h3 className=&quot;text-white font-semibold mb-4 text-lg&quot;>Marketplace</h3>
            <ul className=&quot;space-y-2&quot;>
              <li><Link to=&quot;/marketplace&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Products</Link></li>
              <li><Link to=&quot;/services&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Services</Link></li>
              <li><Link to=&quot;/talent&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Talent</Link></li>
              <li><Link to=&quot;/equipment&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Equipment</Link></li>
              <li><Link to=&quot;/categories&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Categories</Link></li>
              <li><Link to=&quot;/green-it&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Green IT</Link></li>
            </ul>
          </div>

          <div>
            <h3 className=&quot;text-white font-semibold mb-4 text-lg&quot;>Company</h3>
            <ul className=&quot;space-y-2&quot;>
              <li><Link to=&quot;/content/about&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>About Us</Link></li>
              <li><Link to=&quot;/blog&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Blog</Link></li>
              <li><Link to=&quot;/partners&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Partners</Link></li>
              <li><Link to=&quot;/careers&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Careers</Link></li>
              <li><Link to=&quot;/contact&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Contact</Link></li>
              <li><Link to=&quot;/sitemap-page&quot; className=&quot;text-zion-slate hover:text-zion-cyan transition-colors&quot;>Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className=&quot;text-white font-semibold mb-4 text-lg&quot;>Subscribe to our newsletter</h3>
            <p className=&quot;text-zion-slate mb-4&quot;>
              Stay updated with the latest news on tech, AI, and marketplace opportunities.            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md: flex-row justify-between items-center">
            <p className="text-zion-slate text-sm">
              &copy, {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md: mt-0">
              <Link to="/privacy" className="text-zion-slate hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>            </div>
          </div>
        </div>
      </div>
    </footer>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}