<<<<<<< HEAD
<<<<<<< HEAD
import { FooterNewsletter } from "@/components/FooterNewsletter",
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react'
import Link from "next/link", // Changed from react-router-dom
import { FeedbackWidget } from "@/components/feedback/FeedbackWidget",
function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === "" || envVar === "#" || envVar === "/") {
    return fallback
=======
import { FooterNewsletter } from &quot;@/components/FooterNewsletter&quot;;
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react'
import Link from &quot;next/link&quot;; // Changed from react-router-dom
import { FeedbackWidget } from &quot;@/components/feedback/FeedbackWidget&quot;;

function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === "&quot; || envVar === &quot;#&quot; || envVar === &quot;/&quot;) {
    return fallback;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  return envVar
=======
import Link from "next/link"; // Changed from react-router-dom

function resolveUrl(_envVar: string | undefined, _fallback: string) {_if (!envVar || envVar.trim() === "" || envVar === "#" || envVar === "/") {
    return fallback;}
  return envVar;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

const _TWITTER_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL,
<<<<<<< HEAD
  "https: //twitter.com/ZionTechGroup"
),
const LINKEDIN_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL,
  "https: //linkedin.com/company/ziontechgroup"
),
const FACEBOOK_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL,
  "https: //facebook.com/ZionTechGroup"
),
const INSTAGRAM_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL,
  "https: //instagram.com/ZionTechGroup"
),
const GITHUB_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL,
  "https: //github.com/ZionTechGroup"
),
=======
  &quot;https://twitter.com/ZionTechGroup&quot;
);
const _LINKEDIN_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL,
  &quot;https://linkedin.com/company/ziontechgroup&quot;
);
const _FACEBOOK_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL,
  &quot;https://facebook.com/ZionTechGroup&quot;
);
const _INSTAGRAM_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL,
  &quot;https://instagram.com/ZionTechGroup&quot;
);
const _GITHUB_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL,
  &quot;https://github.com/ZionTechGroup"
);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function Footer() {_return (
    <footer className="bg-card border-t border-primary/20 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">ZION</span>
            </div>
<<<<<<< HEAD
            <p className="text-foreground/80 mb-4" style={{ maxWidth: 'clamp(16rem, 90%, 20rem)' }}>
              The world's first free marketplace dedicated to high-tech and artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={TWITTER_URL}
                target="_blank&quot;
                rel=&quot;noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors&quot;
                aria-label=&quot;Twitter&quot;
                title=&quot;Twitter"
=======
            <p className="text-foreground/80 mb-4" style={{ maxWidth: 'clamp(16rem, _90%, _20rem)'}}>
              The world&apos;s first free marketplace dedicated to high-tech and artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={_TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
                title="Twitter"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Twitter className="h-5 w-5&quot; aria-hidden=&quot;true" />
                <span className="sr-only">Twitter</span>
              </Link>
              <a
<<<<<<< HEAD
                href={LINKEDIN_URL}
                target="_blank&quot;
                rel=&quot;noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors&quot;
                aria-label=&quot;LinkedIn&quot;
                title=&quot;LinkedIn"
=======
                href={_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Linkedin className="h-5 w-5&quot; aria-hidden=&quot;true" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <a
<<<<<<< HEAD
                href={FACEBOOK_URL}
                target="_blank&quot;
                rel=&quot;noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors&quot;
                aria-label=&quot;Facebook&quot;
                title=&quot;Facebook"
=======
                href={_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
                title="Facebook"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Facebook className="h-5 w-5&quot; aria-hidden=&quot;true" />
                <span className="sr-only">Facebook</span>
              </Link>
              <a
<<<<<<< HEAD
                href={INSTAGRAM_URL}
                target="_blank&quot;
                rel=&quot;noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors&quot;
                aria-label=&quot;Instagram&quot;
                title=&quot;Instagram"
=======
                href={_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
                title="Instagram"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Instagram className="h-5 w-5&quot; aria-hidden=&quot;true" />
                <span className="sr-only">Instagram</span>
              </Link>
              <a
<<<<<<< HEAD
                href={GITHUB_URL}
                target="_blank&quot;
                rel=&quot;noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors&quot;
                aria-label=&quot;GitHub&quot;
                title=&quot;GitHub"
=======
                href={_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
                title="GitHub"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Github className="h-5 w-5&quot; aria-hidden=&quot;true" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-foreground/80 hover:text-primary transition-colors text-sm">Products</Link></li>
              {_/* Ensure the services link routes to the main services page */}
              <li>
                <Link
                  href="/services"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li><Link href="/talent" className="text-foreground/80 hover:text-primary transition-colors text-sm">Talent</Link></li>
              <li>
                <Link
                  href="/equipment"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm&quot;
                  target=&quot;_self"
                >
                  Equipment
                </Link>
              </li>
              <li><Link href="/categories" className="text-foreground/80 hover:text-primary transition-colors text-sm">Categories</Link></li>
              <li><Link href="/green-it" className="text-foreground/80 hover:text-primary transition-colors text-sm">Green IT</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-foreground/80 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="/innovation" className="text-foreground/80 hover:text-primary transition-colors text-sm">Innovation</Link></li>
              <li><Link href="/partners" className="text-foreground/80 hover:text-primary transition-colors text-sm">Partners</Link></li>
              <li><Link href="/careers" className="text-foreground/80 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li>
                <Link
                  href="/sitemap&quot;
                  target=&quot;_blank&quot;
                  rel=&quot;noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-foreground/80 mb-4 text-sm">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
            </p>
            <div className="max-w-sm">
              <FooterNewsletter />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end&quot;>
          <button
<<<<<<< HEAD
            type=&quot;button"
            onClick={() => {
              window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
              })
=======
            type="button"
            onClick={_() => {
              window.scrollTo({ 
                top: 0, _behavior: 'smooth'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            }}
<<<<<<< HEAD
            className="flex items-center space-x-1 text-foreground/80 hover: text-primary text-sm transition-colors cursor-pointer"
            aria-label="Back to top"
=======
            className="flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer&quot;
            aria-label=&quot;Back to top"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          >
            <ChevronUp className="h-4 w-4&quot; aria-hidden=&quot;true" />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/80 text-sm">
<<<<<<< HEAD
              &copy, {new Date().getFullYear()} Zion Tech Group. All rights reserved.
=======
              &copy; {_new Date().getFullYear()} Zion Tech Group. All rights reserved.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
            <div className="flex space-x-6 mt-4 md: mt-0">
              <Link
                href="/privacy"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/status"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                API Status
              </Link>
            </div>
          </div>
        </div>
        <FeedbackWidget />
      </div>
    </footer>
  )
}
