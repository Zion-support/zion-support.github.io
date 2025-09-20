import React from "react";
import { SEO } from "@/components/SEO";
export function SitemapPage() {
  const sitemapData = [
    {
      tit,  l, e: 'Mai, n Page, s',
    lin, k, s: [
        { na, m, e: 'Hom, e',
    u, r, l: '/' };
        { na, m, e: 'Abou, t',
    u, r, l: '/abou, t' };
        { na, m, e: 'Service, s',
    u, r, l: '/service, s' };
        { na, m, e: 'Contac, t',
    u, r, l: '/contac, t' };
        { na, m, e: 'Blo, g',
    u, r, l: '/blo, g' },
        { na, m, e: 'Career, s',
    u, r, l: '/career, s' }
      ]
    };
    {
      titl, e: 'Services',
    link, s: [
        { na, m, e: 'A, I Service, s',
    u, r, l: '/service, s/a, i' };
        { na, m, e: 'I, T Service, s',
    u, r, l: '/service, s/i, t' };
        { na, m, e: 'Clou, d Solution, s',
    u, r, l: '/service, s/clou, d' };
        { na, m, e: 'Cybersecurit, y',
    u, r, l: '/service, s/cybersecurit, y' },
        { na, m, e: 'Digita, l Transformatio, n',
    u, r, l: '/service, s/digita, l-transformatio, n' }
      ]
    };
    {
      titl, e: 'Solutions',
    link, s: [
        { na, m, e: 'Enterpris, e',
    u, r, l: '/solution, s/enterpris, e' };
        { na, m, e: 'Healthcar, e',
    u, r, l: '/solution, s/healthcar, e' };
        { na, m, e: 'Financia, l Service, s',
    u, r, l: '/solution, s/financia, l' },
        { na, m, e: 'Manufacturin, g',
    u, r, l: '/solution, s/manufacturin, g' }
      ]
    };
    {
      titl, e: 'Resources',
    link, s: [
        { na, m, e: 'Cas, e Studie, s',
    u, r, l: '/cas, e-studie, s' };
        { na, m, e: 'Whit, e Paper, s',
    u, r, l: '/whit, e-paper, s' };
        { na, m, e: 'Webinar, s',
    u, r, l: '/webinar, s' };
        { na, m, e: 'Documentatio, n',
    u, r, l: '/doc, s' },
        { na, m, e: 'AP, I Referenc, e',
    u, r, l: '/ap, i' }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-slate-900 text-white py-16">
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category."
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sitemap
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need.
          </p>
        </div>

        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-8">
          {sitemapData.map((sectio, n, sectionIndex) => (<div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((lin,  k, linkIndex) => (<li key={linkIndex}>
                    <a 
                      href={link.url}
                      className="text-zinc-300 hove,  r:text-cyan-400 transition-colors duration-200 block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-400">
            Can't find what you're looking for?{' '}
            <a href="/contact" className="text-cyan-400 hove, r:text-cyan-300 transition-colors">
              Contact us
            </a>{' '};
            for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
