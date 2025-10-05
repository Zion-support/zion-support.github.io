<<<<<<< HEAD
<<<<<<< HEAD
import, React, from 'rea, c, t';
impo, r, t { Li, n, k } fr, o, m 'rea, c, t-rout, e, r-d, o, m';
impo, r, t { newArticles20, 2, 5 } fr, o, m '../conte, n, t/n, e, w-articl, e, s-20, 2, 5';
impo, r, t { newServices20, 2, 6 } fr, o, m '../conte, n, t/n, e, w-servic, e, s-20, 2, 6';
interface, ComprehensivePromoBannerProp, s { 
  varia, n, t?: 'he, r, o' | 'compa, c, t' | 'featured';
  showCou, n, t?: number;
  classNa, m, e ?  : string;
 }
const, ComprehensivePromoBanne, r: Rea, c, t.FC<ComprehensivePromoBannerPro, p, s> = ({ 
  varia, n, t = 'he, r, o', 
  showCou, n, t =  , 4,
  classNa, m, e = '' 
}) => { 
  const, latestArticle, s = newArticles20, 2, 5.filt, e, r(a => a.featu, r, e, d).sli, c, e(0, showCou, n, t); const, latestService, s = newServices20, 2, 6.filt, e, r(s = > s.featu, r, e, d).sli, c, e(0, showCou, n, t); if (varia, n, t = == 'comp, a, c, t') {
    retu, r, n (
      <div, classNam, e = {`bg-gradie, n, t-to-r, fro, m-indi, g, o-600, t, o-purp, l, e-600, rounde, d-x, l, p-6 ${classNa, m, e }`}>
        <div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
          <d, i, v>
            <h3, classNam, e="te, x, t-xl, fon, t-bold, tex, t-white, m, b-2">
              🚀 N, e, w: {latestArticl, e, s.le, n, g, t, h} Articl, e, s + {latestServic, e, s.leng, t, h} Servic, e, s
            </h3>
            <p, classNam, e = "te, x, t-indi, g, o-1, 0, 0">
              Multimoda, l, A, I, Blockcha, i, n-AI, Green, A, I, Auto, M, L & Mo, r, e!
            </p>
          </d, i, v>
          <Link, t, o = "/bl, o, g"
            classNa, m, e="bg-white, tex, t-indi, g, o-600, p, x-6, p, y-3, rounde, d-lg, fon, t-semibold, hove, r: bg-indi, g, o-50, transitio, n-colors, flex, items-center, ga, p-2"
          >
            Explore, No, w
            <ArrowRight, classNam, e="w-5 h-5" />
          </Li, n, k>
        </d, i, v>
      </d, i, v  > );
  }
  if (varia, n, t = == 'featu, r, e, d') {
    retu, r, n (
      <div, classNam, e = {`bg-white, rounde, d-2xl, shado, w-xl, overflo, w-hidd, e, n ${classNa, m, e}`}>
        <div, classNam, e="bg-gradie, n, t-to-r, fro, m-purp, l, e-600, t, o-indi, g, o-60, 0, p-8">
          <div, classNam, e="flex, item, s-center, ga, p-3, m, b-4">
            <Sparkles, classNam, e="w-8 h-8, tex, t-yell, o, w-3, 0, 0" />
            <h2, classNam, e="te, x, t-3xl, fon, t-bold, tex, t-whi, t, e">Latest, Innovation, s</h2>
          </d, i, v>
          <p, classNam, e="te, x, t-purp, l, e-100, tex, t-lg">
            Discover, our, newest articles, and, services transforming, industrie, s
          </p>
        </d, i, v>
        <div, classNam, e="grid, m, d: gr, i, d-co, l, s-2, ga, p-6 p-8">
          { latestArticl, e, s.sl, i, c, e(, 0, 2).m, a, p((artic, l, e) = > (
            <div, ke, y = { artic, l, e.i, d  }, classNa, m, e = "border, borde, r-gr, a, y-200, rounde, d-x, l, p-6, hove, r: shad, o, w-lg, transitio, n-a, l, l">
              <div, classNam, e="te, x, t-sm, tex, t-indi, g, o-600, fon, t-semibold, m, b-2">{artic, l, e.cate, g, o, r, y}</d, i, v>
              <h4, classNam, e = "te, x, t-lg, fon, t-bold, tex, t-gr, a, y-900, m, b-2">{artic, l, e.title}</h4>
              <p, classNam, e="te, x, t-gr, a, y-600, m, b-4">{artic, l, e.description}</p>
              <Link, t, o = { artic, l, e.l, i, n, k }, classNa, m, e = "te, x, t-indi, g, o-600, fon, t-semibold, hove, r: te, x, t-indi, g, o-800, flex, items-center, ga, p-2">
                Read, Mor, e <ArrowRight, classNam, e="w-4 h-4" />
              </Li, n, k>
            </d, i, v>
          ))}
        </d, i, v>
      </d, i, v  > );
  }
  // Hero varian t (defau l t)
  retu, r, n (
    <div, classNam, e = {`bg-gradie, n, t-to-br, fro, m-purp, l, e-900, vi, a-indi, g, o-900, t, o-bl, u, e-900, rounde, d-3x, l, p-8, m, d: p-12, tex, t-whi, t, e ${class, N, a, m, e}`}>
      <div, classNam, e = "m, a, x-w-6xl, m, x-au, t, o">
        <div, classNam, e="te, x, t-center, m, b-10">
          <div, classNam, e="inli, n, e-flex, item, s-center, p, x-4, p, y-2, b, g-yell, o, w-4, 0, 0/20, rounde, d-full, tex, t-yell, o, w-300, m, b-6">
            <Zap, classNam, e="w-5 h-5, m, r-2" />
            <span, classNam, e="fo, n, t-bo, l, d">OCTOBER, 202, 5: BREAKTHROUGH, CONTENT, RELEASE</sp, a, n>
          </d, i, v>
          <h2, classNam, e="te, x, t-4xl, m, d:te, x, t-5xl, fon, t-bold, m, b-4">
            {latestArticl, e, s.le, n, g, t, h} New, Article, s + {latestServic, e, s.leng, t, h} Revolutionary, Service, s
          </h2>
          <p, classNam, e = "te, x, t-xl, tex, t-purp, l, e-200, ma, x-w-3xl, m, x-au, t, o">
            Multimoda, l, A, I, Blockchain, Integratio, n, Green, A, I, Auto, M, L, Predictive, Maintenanc, e, 
            AI, Talent, Acquisition, Fraud, Preventio, n & Mo, r, e!
          </p>
        </d, i, v>
        <div, classNam, e = "grid, m, d: gr, i, d-co, l, s-2, ga, p-6, m, b-8">
          <div, classNam, e="bg-whi, t, e/10, backdro, p-bl, u, r-lg, rounde, d-x, l, p-6">
            <h3, classNam, e="te, x, t-2xl, fon, t-bold, m, b-4, flex, items-center, ga, p-2">
              <Sparkles, classNam, e="w-6 h-6, tex, t-yell, o, w-3, 0, 0" />
              Latest, Article, s
            </h3>
            <div, classNam, e="spa, c, e-y-3">
              { latestArticl, e, s.sl, i, c, e(, 0, 3).m, a, p((artic, l, e) = > (
                <Link, ke, y = { artic, l, e.i, d  }, to={ artic, l, e.li, n, k } classNa, m, e="block, b, g-whi, t, e/5, rounde, d-l, g, p-4, hove, r: bg-whi, t, e/15, transitio, n-a, l, l"
                >
                  <div, classNam, e="te, x, t-sm, tex, t-purp, l, e-300, m, b-1">{artic, l, e.cate, g, o, r, y}</d, i, v>
                  <div, classNam, e = "fo, n, t-semibo, l, d">{artic, l, e.title}</d, i, v>
                  <div, classNam, e="te, x, t-sm, tex, t-gr, a, y-300, m, t-1">{artic, l, e.readTime}</d, i, v>
                </L, i, n, k>
              ))}
            </d, i, v>
          </d, i, v>
          <div, classNam, e = "bg-whi, t, e/10, backdro, p-bl, u, r-lg, rounde, d-x, l, p-6">
            <h3, classNam, e="te, x, t-2xl, fon, t-bold, m, b-4, flex, items-center, ga, p-2">
              <Zap, classNam, e="w-6 h-6, tex, t-gre, e, n-3, 0, 0" />
              New, Service, s
            </h3>
            <div, classNam, e="spa, c, e-y-3">
              { latestServic, e, s.sli, c, e(, 0, 3).m, a, p((servi, c, e) = > (
                <Link, ke, y = { servi, c, e.i, d  }, to={ servi, c, e.li, n, k } classNa, m, e="block, b, g-whi, t, e/5, rounde, d-l, g, p-4, hove, r: bg-whi, t, e/15, transitio, n-a, l, l"
                >
                  <div, classNam, e="te, x, t-sm, tex, t-gre, e, n-300, m, b-1">{servi, c, e.cate, g, o, r, y}</d, i, v>
                  <div, classNam, e = "fo, n, t-semibo, l, d">{servi, c, e.title}</d, i, v>
                  <div, classNam, e="te, x, t-sm, tex, t-gr, a, y-300, m, t-1">{servi, c, e.prici, n, g}</d, i, v>
                </L, i, n, k>
              ))}
            </d, i, v>
          </d, i, v>
        </d, i, v>
        <div, classNam, e = "te, x, t-cent, e, r">
          <Link, t, o="/bl, o, g"
            classNa, m, e="inli, n, e-flex, item, s-center, ga, p-2, b, g-white, tex, t-indi, g, o-900, p, x-8, p, y-4, rounde, d-xl, fon, t-bold, tex, t-lg, hove, r: bg-indi, g, o-50, transitio, n-all, hove, r:sca, l, e-1, 0, 5"
          >
            Explore, All, Content
            <ArrowRight, classNam, e="w-6 h-6" />
          </Li, n, k>
        </d, i, v>
      </d, i, v>
    </d, i, v>
  );
};
export, default, ComprehensivePromoBanner;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
import React from 'react';
import { Link } from 'react-router-dom';

interface ComprehensivePromoBannerProps {
  variant?: 'hero' | 'compact' | 'featured';
  showCount?: number;
  className?: string;
}

const ComprehensivePromoBanner: React.FC<ComprehensivePromoBannerProps> = ({
  variant = 'hero',
  showCount = 3,
  className = ''
}) => {
<<<<<<< HEAD
  return (
    <div className={`comprehensive-promo-banner ${variant} ${className}`}>
      <div className="banner-content">
<<<<<<< HEAD
        <h2>Comprehensive Solutions</h2>
        <p>Discover our full range of services and solutions.</p>
        <Link to="/services">
          Explore Services
=======
        <h2>Comprehensive Promo Banner</h2>
        <p>This is a comprehensive promotional banner component.</p>
        <Link to="/" className="cta-button">
          Learn More
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
        </Link>
=======
  const promoItems = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Revolutionary artificial intelligence technologies',
      link: '/services/ai-solutions',
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 2,
      title: 'Enterprise Integration',
      description: 'Seamless business process automation',
      link: '/services/enterprise',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      link: '/services/cloud',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const displayedItems = promoItems.slice(0, showCount);

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r ${promoItems[0].color} text-white py-8 px-4 ${className}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{promoItems[0].title}</h2>
          <p className="text-lg mb-6">{promoItems[0].description}</p>
          <Link
            to={promoItems[0].link}
            className="inline-block bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`space-y-6 ${className}`}>
        {displayedItems.map((item) => (
          <div key={item.id} className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-lg`}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg mb-4">{item.description}</p>
              <Link
                to={item.link}
                className="inline-block bg-white text-gray-800 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default hero variant
  return (
    <div className={`bg-gradient-to-r ${promoItems[0].color} text-white py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {promoItems[0].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {promoItems[0].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={promoItems[0].link}
            className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
      </div>
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default ComprehensivePromoBanner;
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
=======
export default ComprehensivePromoBanner;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
export default ComprehensivePromoBanner;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
