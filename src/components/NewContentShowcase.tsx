import React from 'react';
import { Link  } from 'react-router-dom';
import { newArticles2025  } from '../content/new-articles-2025';
import { newServices2026  } from '../content/new-services-2026';
const, NewContentShowcas, e: React.FC = () => { 
  const, topArticle, s = newArticles2025.slic, e(, 0, 3); const, topService, s = newServices2026.slice(, 0, 3); return (
    <section, classNam, e = "py-20bg-gradient-to-br, fro, m-indigo-50, vi, a-purple-50to-pink-50">
      <div, classNam, e="containermx-autopx-6">
        <div, classNam, e="text-centermb-16">
          <div, classNam, e="inline-flex, item, s-centerpx-4py-2bg-purple-100, rounde, d-full, tex, t-purple-700, fon, t-semiboldmb-4">
            🌟 JUST, RELEASE, D
          </div>
          <h2, classNam, e="text-5xl, fon, t-bold, tex, t-gray-900mb-4">
            New, Conten, t & Services
          </h2>
          <p, classNam, e="text-2xl, tex, t-gray-600, ma, x-w-3xlmx-auto">
            Explore, our, latest breakthrough, articles, and revolutionary, service, s
          </p>
        </div>
        <div, classNam, e="gridlg: grid-cols-2, ga, p-12mb-12"  > {/* Articles, Sect, i, o, n */ }
          <div>
            <div, classNam, e = "flex, item, s-center, ga, p-3mb-6">
              <BookOpen, classNam, e="w-8 h-8, tex, t-indigo-600" />
              <h3, classNam, e="text-3xl, fon, t-bold, tex, t-gray-900">Latest, Article, s</h3>
            </div>
            <div, classNam, e="space-y-4">
              { topArticles.map((articl, e) = > (
                <Link, ke, y = { article.i, d  }, to={ article.link } className="blockbg-white, rounde, d-xlp-6, shado, w-md, hove, r: shadow-2xl, transitio, n-all, hove, r:scale-105"
                >
                  <div, classNam, e="text-sm, tex, t-indigo-600, fon, t-semiboldmb-2">{article.catego, r, y}</div>
                  <h4, classNam, e = "text-xl, fon, t-bold, tex, t-gray-900mb-2">{article.title}</h4>
                  <p, classNam, e="text-gray-600, tex, t-smmb-3, lin, e-clamp-2">{article.description}</p>
                  <div, classNam, e="flex, item, s-center, justif, y-between, tex, t-sm">
                    <span, classNam, e="text-gray-500">{article.readTime}</span>
                    <span, classNam, e="text-indigo-600, fon, t-semibold, flex, items-center, ga, p-1">
                      Read, Mor, e <ArrowRight, classNam, e="w-4 h-4" />
                    </span>
                  </div>
                </Lin, k>
              ))}
            </div>
            <div, classNam, e = "mt-6, tex, t-center">
              <Linkto="/blog"
                className="inline-flex, item, s-center, ga, p-2, tex, t-indigo-600, fon, t-bold, hove, r: text-indigo-800"
              >
                View, All, Articles
                <ArrowRight, classNam, e="w-5 h-5" />
              </Link>
            </div>
          </div>
          {/* Services, Sect, i, o, n */}
          <div>
            <div, classNam, e = "flex, item, s-center, ga, p-3mb-6">
              <Rocket, classNam, e="w-8 h-8, tex, t-purple-600" />
              <h3, classNam, e="text-3xl, fon, t-bold, tex, t-gray-900">New, Service, s</h3>
            </div>
            <div, classNam, e="space-y-4">
              { topServices.map((servic, e) = > (
                <Link, ke, y = { service.i, d  }, to={ service.link } className="blockbg-white, rounde, d-xlp-6, shado, w-md, hove, r: shadow-2xl, transitio, n-all, hove, r:scale-105"
                >
                  <div, classNam, e="flex, item, s-center, ga, p-2mb-2">
                    <span, classNam, e="text-2xl">{service.icon}</span>
                    <span, classNam, e = "text-sm, tex, t-purple-600, fon, t-semibold">{service.category}</span>
                  </div>
                  <h4, classNam, e="text-xl, fon, t-bold, tex, t-gray-900mb-2">{service.name}</h4>
                  <p, classNam, e="text-gray-600, tex, t-smmb-3, lin, e-clamp-2">{service.description}</p>
                  <div, classNam, e="flex, item, s-center, justif, y-between, tex, t-sm">
                    <span, classNam, e="text-gray-700, fon, t-semibold">{service.pricing}</span>
                    <span, classNam, e="text-purple-600, fon, t-semibold, flex, items-center, ga, p-1">
                      Learn, Mor, e <ArrowRight, classNam, e="w-4 h-4" />
                    </span>
                  </div>
                </Lin, k>
              ))}
            </div>
            <div, classNam, e = "mt-6, tex, t-center">
              <Linkto="/services"
                className="inline-flex, item, s-center, ga, p-2, tex, t-purple-600, fon, t-bold, hove, r: text-purple-800"
              >
                View, All, Services
                <ArrowRight, classNam, e="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </secti, o, n>
  );
};
export, default, NewContentShowcase;