<<<<<<< HEAD
interface Service {
id: string;,
name: string;
}

return (,
<div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
<h3 className="text-xl font-bold mb-4">Footer</h3>,
<p className="text-gray-300">Revolutionary technology component</p>,
</div>,
<//div><///div>)
import React from 'react';
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, GithubChevronUp } from 'lucide-react';
import Link from "next/link";
import { FeedbackWidget } from "@/components/feedback/FeedbackWidget";

function resolveUrl(envVar: string | undefined, fallback: string) {
if (!envVar || envVar.trim() === "" || envVar === "undefined") {
return fallback;
}
return envVar;
}

export function Footer() {
const scrollToTop: any = () => {
window.scrollTo({,
top: 0,
behavior: 'smooth';
});
};

return (
<footer className="bg-background border-t border-primary/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
{/* Company Info */}
<div className="col-span-1 md:col-span-2">
<h3 className="text-xl font-bold text-foreground mb-4">Zion Tech Group</h3>
<p className="text-foreground/80 text-sm mb-6 max-w-md">
Leading the future of technology with innovative solutions cutting-edge AI,
and comprehensive digital transformation services.;
</p>
<div className="flex space-x-4">
<a,
href={resolveUrl(process.env.NEXT_PUBLIC_TWITTER_URL, "https://twitter.com/ziontechgroup")}
target="_blank";
rel="noopener noreferrer";
className="text-foreground/60 hover:text-primary transition-colors"
aria-label="Follow us on Twitter";
>;
<Twitter className="h-5 w-5" />
</a>
<a,
href={resolveUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL, "https://linkedin.com/company/ziontechgroup")}
target="_blank";
rel="noopener noreferrer";
className="text-foreground/60 hover:text-primary transition-colors"
aria-label="Connect with us on LinkedIn";
>;
<Linkedin className="h-5 w-5" />
</a>
<a,
href={resolveUrl(process.env.NEXT_PUBLIC_FACEBOOK_URL, "https://facebook.com/ziontechgroup")}
target="_blank";
rel="noopener noreferrer";
className="text-foreground/60 hover:text-primary transition-colors"
aria-label="Follow us on Facebook";
>;
<Facebook className="h-5 w-5" />
</a>
<a,
href={resolveUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL, "https://instagram.com/ziontechgroup")}
target="_blank";
rel="noopener noreferrer";
className="text-foreground/60 hover:text-primary transition-colors"
aria-label="Follow us on Instagram";
>;
<Instagram className="h-5 w-5" />
</a>
<a,
href={resolveUrl(process.env.NEXT_PUBLIC_GITHUB_URL, "https://github.com/ziontechgroup")}
target="_blank";
rel="noopener noreferrer";
className="text-foreground/60 hover:text-primary transition-colors"
aria-label="View our GitHub";
>;
<Github className="h-5 w-5" />
</a>
</div>
</div>

{/* Services */}
<div>
<h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
<ul className="space-y-2">
<li>
<Link,
href="/services";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
All Services;
</Link>
</li>
<li>
<Link,
href="/services/ai";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
AI Solutions;
</Link>
</li>
<li>
<Link,
href="/services/cloud";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
Cloud Services;
</Link>
</li>
<li>
<Link,
href="/services/automation";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
Automation;
</Link>
</li>
</ul>
</div>

{/* Company */}
<div>
<h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
<ul className="space-y-2">
<li>
<Link,
href="/about";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
About Us;
</Link>
</li>
<li>
<Link,
href="/contact";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
Contact;
</Link>
</li>
<li>
<Link,
href="/blog";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
Blog;
</Link>
</li>
<li>
<Link,
href="/careers";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
Careers;
</Link>
</li>
</ul>
</div>
</div>

{/* Newsletter */}
<div className="mt-12 pt-8 border-t border-primary/20">
<FooterNewsletter />
</div>

{/* Back to Top */}
<div className="mt-8 flex justify-center">
<button,
onClick={scrollToTop}
className="flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer"
aria-label="Back to top";
>;
<ChevronUp className="h-4 w-4" aria-hidden="true" />
<span>Back to Top</span>
</button>
</div>

<div className="mt-12 pt-8 border-t border-primary/20">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-foreground/80 text-sm">
&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<Link,
href="/privacy";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
Privacy Policy;
</Link>
<Link,
href="/terms";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
Terms of Service;
</Link>
<Link,
href="/status";
className="text-foreground/80 hover:text-primary text-sm transition-colors"
>;
API Status;
</Link>
</div>
</div>
</div>

{/* Feedback Widget */}
<FeedbackWidget />
</div>
</footer>
);
}
=======
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">Footer</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
<//div><///div>)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
