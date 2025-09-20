import React from "react"
import { SEO   } from "@/components/SEO";
export function SitemapPage() {
  const sitemapData = [
  {
  tit,
  l: e: 'Main Pages',lin,
  k: s: [
  { nam,
  e: 'Home', u,
  r: l: '/' },
  },
  { na,
  m: e: 'About', u,
  r: l: '/about' },
  },
  { na,
  m: e: 'Services', u,
  r: l: '/services' },
  },
  { na,
  m: e: 'Contact', u,
  r: l: '/contact' },
  },
  { na,
  m: e: 'Blog', u,
  r: l: '/blog' },
  },
  { na,
  m: e: 'Careers', u,
  r: l: '/careers' },
  },
  ],
  },
  {
  tit,
  l: e: 'Services',lin,
  k: s: [
  { nam,
  e: 'AI Services', u,
  r: l: '/services/ai' },
  },
  { na,
  m: e: 'IT Services', u,
  r: l: '/services/it' },
  },
  { na,
  m: e: 'Cloud Solutions', u,
  r: l: '/services/cloud' },
  },
  { na,
  m: e: 'Cybersecurity', u,
  r: l: '/services/cybersecurity' },
  },
  { na,
  m: e: 'Digital Transformation', u,
  r: l: '/services/digital-transformation' },
  },
  ],
  },
  {
  tit,
  l: e: 'Solutions',lin,
  k: s: [
  { nam,
  e: 'Enterprise', u,
  r: l: '/solutions/enterprise' },
  },
  { na,
  m: e: 'Healthcare', u,
  r: l: '/solutions/healthcare' },
  },
  { na,
  m: e: 'Financial Services', u,
  r: l: '/solutions/financial' },
  },
  { na,
  m: e: 'Manufacturing', u,
  r: l: '/solutions/manufacturing' },
  },
  ],
  },
  {
  tit,
  l: e: 'Resources',lin,
  k: s: [
  { nam,
  e: 'Case Studies', u,
  r: l: '/case-studies' },
  },
  { na,
  m: e: 'White Papers', u,
  r: l: '/white-papers' },
  },
  { na,
  m: e: 'Webinars', u,
  r: l: '/webinars' },
  },
  { na,
  m: e: 'Documentation', u,
  r: l: '/docs' },
  },
  { na,
  m: e: 'API Reference', u,
  r: l: '/api' },
  },
  ],
  },
  ]
  return (
    <div className="min-h-screen bg-slate-900 text-white py-16">
      <SEO;
        title="Sitemap - Zion Tech Group" 
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category."
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sitemap;
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need.
          </p>
        </div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
          {sitemapData.map((section, sectionIndex) => (
  <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                {section.title},
  }
              </h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
  <li key={linkIndex}>
                    <a;
                      href={link.url},
  }
                      className="className="text-zinc-300,
  hove: r:text-cyan-400 transition-colors duration-200 block py-1";"
                    >
                      {link.name},
  }
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-400">
            Can't find what you're looking for?{' '},
  }
            <a href="/contact" className="text-cyan-400,
  hove: r:text-cyan-300 transition-colors">
              Contact us;
            </a>{' '},
  }
            for assistance.
          </p>
        </div>
      </div>
    </div>
  )
}
