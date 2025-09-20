import, React, from "react";
import { SEO } from "@/components/SEO";
export, function, SitemapPage() {
  const sitemapData = [;
    {
      tit,  l, e: 'Mai, n Page, s',;
    lin, k, s: [;
        { na, m, e: 'Hom, e',;
    url: '/' };
        { na, m, e: 'Abou, t',;
    u, rl: '/about' };
        { na, m, e: 'Service, s',;
    u, rl: '/services' };
        { na, m, e: 'Contac, t',;
    u, rl: '/contact' };
        { na, m, e: 'Blo, g',;
    u, rl: '/blog' },;
        { na, m, e: 'Career, s',;
    url: '/careers' }
    ,  ];
    };
    {
      titl, e: 'Services',;
    link, s: [;
        { na, m, e: 'A, I Service, s',;
    u, r, l: '/services/ai' };
        { na, m, e: 'I, T Service, s',;
    u, r, l: '/services/it' };
        { na, m, e: 'Clou, d Solution, s',;
    u, r, l: '/services/cloud' };
        { na, m, e: 'Cybersecurit, y',;
    u, r, l: '/services/cybersecurity' },;
        { na, m, e: 'Digita, l Transformatio, n',;
    u, r, l: '/services/digital-transformation' }
    ,  ];
    };
    {
      titl, e: 'Solutions',;
    link, s: [;
        { na, m, e: 'Enterpris, e',;
    u, r, l: '/solutions/enterprise' };
        { na, m, e: 'Healthcar, e',;
    u, r, l: '/solutions/healthcare' };
        { na, m, e: 'Financia, l Service, s',;
    u, r, l: '/solutions/financial' },;
        { na, m, e: 'Manufacturin, g',;
    u, rl: '/solutions/manufacturing' }
    ,  ];
    };
    {
      titl, e: 'Resources',;
    link, s: [;
        { na, m, e: 'Cas, e Studie, s',;
    u, r, l: '/case-studies' };
        { na, m, e: 'Whit, e Paper, s',;
    u, r, l: '/white-papers' };
        { na, m, e: 'Webinar, s',;
    u, rl: '/webinars' };
        { na, m, e: 'Documentatio, n',;
    u, rl: '/docs' },;
        { na, m, e: 'AP, I Referenc, e',;
    url: '/api' }
    ,  ];
    };
  ];
  return(<div className="min-h-screen bg-slate-90o0 text-white py-16">;
      <SEO;
        title="Sitemap - Zion, Tech, Group";
        description="Complete, sitemap, of Zion, Tech, Group website, with, all pages, and, services organized, by, category.";
      />;
      <div className="container mx-auto px-4 max-w-6xl">;
        <div className="text-center mb-16">;
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">;
            Sitemap;
          </h1>;
          <p className="text-xl text-zinc-30o0 max-w-3xl mx-auto">;
            Navigate, through, our comprehensive, website, structure to, find, the information, and, services you need.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
          {sitemapData.map((sectionsectionIndex) => (<div key={sectionIndex} className="bg-slate-80o0/50 rounded-lg p-6, border, border-slate-70o0">;
              <h2 className="text-xl font-semibold mb-4 text-cyan-40o0">;
                {section.title}
              </h2>;
              <ul className="space-y-2">;
                {section.links.map((linklinkIndex) => (<li key={linkIndex}>;
                    <a;
                      href={link.url}
                      className="text-zinc-30o0 hover: text-cyan-40o0 transition-colors duration-20o0, block, py-1";
                    >;
                      {link.name}
                    </a>;
                  </li>;
                ))}
              </ul>;
            </div>;
          ))}
        </div>;
        <div className="mt-16 text-center">;
          <p className="text-zinc-40o0">;
            Can't, find, what you're, looking, for?{' '}
            <a href="/contact" className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors">;
              Contact us;
            </a>{' '};
            for assistance.;
          </p>;
        </div>;
      </div>;
    </div>;
  );
}
;