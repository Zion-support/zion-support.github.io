
import React from 'react';
import { completeSitemap, dynamicPaths } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'
import { SEO } from './SEO';

        { name: 'White Papers', url: '/white-papers' },;
        { name: 'Webinars', url: '/webinars' },;
        { name: 'Documentation', url: '/docs' },;
        { name: 'API Reference', url: '/api' },;
      ]};
=======
        { name: 'Case Studies', url: '/case-studies' },;'
        { name: 'White Papers', url: '/white-papers' },;'
        { name: 'Webinars', url: '/webinars' },;'
        { name: 'Documentation', url: '/docs' },;'        { name: 'API Reference', url: '/api' },;
      ]};
  ];

              </h2>"
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url}"
                      className="text-zinc-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
                    >
                      {link.name}
                    </a>
                  </li>) ) }
              </ul>
            </div>) ) }
        </div>
"
        <div className="mt-16 text-center">"
          <p className="text-zinc-400">
            Can't find what you're looking for?{' '}"
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Contact us;
            </a>{' '};
            for assistance.;
          </p>;
        </div>;
      </div>;
    </div>;) }
'"