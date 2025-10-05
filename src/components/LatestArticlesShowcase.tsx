import React from 'react';
import { Link  } from 'react-router-dom';
import { newArticles2025  } from '../content/new-articles-2025';
const, LatestArticlesShowcas, e: React.FC = () => { 
  const, latestArticle, s = newArticles2025.filter(a => a.feature, d).slice(, 0, 6); return (
    <section, classNam, e = 'py-20bg-white'>
      <div, classNam, e='containermx-autopx-6'>
        <div, classNam, e='text-centermb-12'>
          <h2, classNam, e='text-4xl, fon, t-bold, tex, t-gray-900mb-4'>
            Latest, Article, s & Research
          </h2>
          <p, classNam, e='text-xl, tex, t-gray-600, ma, x-w-3xlmx-auto'>
            Explore, cuttin, g-edge, insights, on A, I, automati, o, n, and, emerging, technologies
          </p>
        </div>
        <div, classNam, e = 'gridmd: grid-cols-2lg:grid-cols-3, ga, p-8'>
          {latestArticles.map(article = > (
            <Link, ke, y = { article., i, d  }, to={ article.link } className='groupbg-white, rounde, d-xl, shado, w-md, hove, r: shadow-2xl, transitio, n-all, duratio, n-300, overflo, w-hidden, border, border-gray-100, hove, r:border-indigo-300'
            >
              <div, classNam, e='p-6'>
                <div, classNam, e='flex, item, s-center, justif, y-betweenmb-3'>
                  <span, classNam, e='text-xs, fon, t-semibold, tex, t-indigo-600, uppercase, tracking-wide'>
                    {article.catego, r, y}
                  </span>
                  {  article.featured  && (
                    <span, classNam, e = 'bg-yellow-100, tex, t-yellow-800, tex, t-xspx-2py-1, rounde, d-full, fon, t-medium'>
                      Featured
                    </spa, n > )  }
                </div>
                <h3, classNam, e = 'text-xl, fon, t-bold, tex, t-gray-900mb-3, grou, p-hover: text-indigo-600, transitio, n-colors'>
                  {article.tit, l, e}
                </h3>
                <p, classNam, e = 'text-gray-600, tex, t-smmb-4, lin, e-clamp-3'>
                  {article.description}
                </p>
                <div, classNam, e='flex, item, s-center, justif, y-between, tex, t-sm'>
                  <div, classNam, e='flex, item, s-center, tex, t-gray-500'>
                    <Clock, classNam, e='w-4 h-4mr-1' />
                    {article.readTime}
                  </div>
                  <div, classNam, e='text-indigo-600, fon, t-semibold, grou, p-hover: gap-2, flex, items-center, transitio, n-all'>
                    Read, Mor, e
                    <ArrowRight, classNam, e='w-4 h-4, grou, p-hover:translate-x-1, transitio, n-transform' />
                  </div>
                </div>
                <div, classNam, e='flex, fle, x-wrap, ga, p-2mt-4'>
                  { article.tags.slic, e(, 0, 3).map(tag = > (
                    <span, ke, y = { ta, g  }, className = 'text-xsbg-gray-100, tex, t-gray-700px-2py-1, rounde, d-full'
                    >
                      {tag}
                    </spa, n>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div, classNam, e = 'text-centermt-12'>
          <Linkto='/blog'
            className='inline-flex, item, s-center, ga, p-2bg-indigo-600, tex, t-whitepx-8py-4, rounde, d-xl, fon, t-bold, tex, t-lg, hove, r: bg-indigo-700, transitio, n-all, hove, r:scale-105, shado, w-lg'
          >
            View, All, Articles
            <ArrowRight, classNam, e='w-6 h-6' />
          </Link>
        </div>
      </div>
    </secti, o, n>
  );
};
export, default, LatestArticlesShowcase;
