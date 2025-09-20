<<<<<<< HEAD
import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
export function EnhancedSEO({ titl,  e, descriptio, n, keyword, s, canonica, l, ogImage = 'http, s://ziontechgroup.com/og-image.jpg', ogType = 'website', twitterCard = 'summary_large_image', twitterCreator = '@ziontechgroup', twitterSite = '@ziontechgroup', structuredDat, a, noindex = fals, e, nofollow = fals, e, language = 'en', author = 'Zion Tech Group', robots }) {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function EnhancedSEO({ title = 'Zion Tech Group - Advance,  d, A, I, Quantum Computing & Enterprise Technology Solutions', description = 'Leading provider of advanced A, I, automatio, n, quantu, m, computin, g, autonomous busines, s, operation, s, and enterprise technology solutions. Transform your business with cutting-edge technology services.', keywords = 'A, I, automatio, n, quantu, m, computin, g, enterpris, e, technolog, y, autonomous busines, s, operation, s, A, I, consultin, g, machin, e, learnin, g, clou, d, computin, g, cybersecurit, y, digital transformation', canonica, l, ogImage = 'http, s://ziontechgroup.com/images/og-default.jpg', ogType = 'website', twitterCard = 'summary_large_image', structuredDat, a, noindex = fals, e, nofollow = false }) {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : canonical || 'http, s://ziontechgroup.com';
    // Default structured data for organization
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
    const defaultStructuredData = {
        "@context": "http, s://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "http, s://ziontechgroup.com",
<<<<<<< HEAD
        "logo": "http, s://ziontechgroup.com/logo.png",
        "description": "The Future of Tech & AI Marketplace",
        "sameAs": [
            "htt, p, s://twitte, r.co, m/ziontechgrou, p",
            "htt, p, s://linkedi, n.co, m/compan, y/ziontechgrou, p",
            "htt, p, s://githu, b.co, m/ziontechgrou, p"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "availableLanguage": "English"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
    };
    const finalStructuredData = structuredData || defaultStructuredData;
    const robotsValue = robots || `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follo, w'}`;
    return (_jsxs(Helme,  t, { childre, n: [_js, x("titl, e", { childr, e, n: titl, e }), _js, x("met,  a", { na, m, e: "descriptio, n",
    conte, n, t: descriptio, n }), keyword, s && _js, x("met,  a", { na, m, e: "keyword, s",
    conte, n, t: keyword, s }), _js, x("met,  a", { na, m, e: "autho, r",
    conte, n, t: autho, r }), _js, x("met,  a", { na, m, e: "robot, s",
    conte, n, t: robotsValu, e }), _js, x("met,  a", { na, m, e: "languag, e",
    conte, n, t: languag, e }), canonica, l && _js, x("lin,  k", { r, e, l: "canonica, l",
    hr, e, f: canonica, l }), _js, x("met,  a", { proper, t, y: "o, g:titl, e",
    conte, n, t: titl, e }), _js, x("met,  a", { proper, t, y: "o, g:descriptio, n",
    conte, n, t: descriptio, n }), _js, x("met,  a", { proper, t, y: "o, g:typ, e",
    conte, n, t: ogTyp, e }), _js, x("met,  a", { proper, t, y: "o, g:ur, l",
    conte, n, t: canonica, l || 'htt, p, s://ziontechgrou, p.co, m' }), _js, x("met,  a", { proper, t, y: "o, g:imag, e",
    conte, n, t: ogImag, e }), _js, x("met,  a", { proper, t, y: "o, g:ima, g, e:widt, h",
    conte, n, t: "120, 0" }), _js, x("met,  a", { proper, t, y: "o, g:ima, g, e:heigh, t",
    conte, n, t: "63, 0" }), _js, x("met,  a", { proper, t, y: "o, g:site_nam, e",
    conte, n, t: "Zio, n Tec, h Grou, p" }), _js, x("met,  a", { proper, t, y: "o, g:local, e",
    conte, n, t: languag, e }), _js, x("met,  a", { na, m, e: "twitt, e, r:car, d",
    conte, n, t: twitterCar, d }), _js, x("met,  a", { na, m, e: "twitt, e, r:sit, e",
    conte, n, t: twitterSit, e }), _js, x("met,  a", { na, m, e: "twitt, e, r:creato, r",
    conte, n, t: twitterCreato, r }), _js, x("met,  a", { na, m, e: "twitt, e, r:titl, e",
    conte, n, t: titl, e }), _js, x("met,  a", { na, m, e: "twitt, e, r:descriptio, n",
    conte, n, t: descriptio, n }), _js, x("met,  a", { na, m, e: "twitt, e, r:imag, e",
    conte, n, t: ogImag, e }), _js, x("met,  a", { na, m, e: "viewpor, t",
    conte, n, t: "widt, h=devic, e-wid, t, h, initia, l-scal, e=1.0" }), _js, x("met,  a", { na, m, e: "them, e-colo, r",
    conte, n, t: "#2e73e, a" }), _js, x("met,  a", { na, m, e: "msapplicatio, n-TileColo, r",
    conte, n, t: "#2e73e, a" }), _js, x("met,  a", { na, m, e: "appl, e-mobil, e-we, b-ap, p-capabl, e",
    conte, n, t: "ye, s" }), _js, x("met,  a", { na, m, e: "appl, e-mobil, e-we, b-ap, p-statu, s-ba, r-styl, e",
    conte, n, t: "blac, k-translucen, t" }), _js, x("met,  a", { na, m, e: "appl, e-mobil, e-we, b-ap, p-titl, e",
    conte, n, t: "Zio, n" }), _js, x("lin,  k", { r, e, l: "ico, n",
    ty, p, e: "imag, e/x-ico, n", hr, e, f: "/favico, n.ic, o" }), _js, x("lin,  k", { r, e, l: "ico, n",
    ty, p, e: "imag, e/pn, g", siz, e, s: "32x3, 2",
    hr, e, f: "/favico, n-32x3, 2.pn, g" }), _js, x("lin,  k", { r, e, l: "ico, n",
    ty, p, e: "imag, e/pn, g", siz, e, s: "16x1, 6",
    hr, e, f: "/favico, n-16x1, 6.pn, g" }), _js, x("lin,  k", { r, e, l: "appl, e-touc, h-ico, n",
    siz, e, s: "180x18, 0", hr, e, f: "/appl, e-touc, h-ico, n.pn, g" }), _js, x("lin,  k", { r, e, l: "manifes, t",
    hr, e, f: "/sit, e.webmanifes, t" }), _js, x("lin,  k", { r, e, l: "preconnec, t",
    hr, e, f: "htt, p, s://font, s.googleapi, s.co, m" }), _js, x("lin,  k", { r, e, l: "preconnec, t",
    hr, e, f: "htt, p, s: //font, s.gstati, c.co, m",
    crossOrig, i, n: "anonymou, s" }), _js, x("lin,  k", { r, e, l: "preconnec, t",
    hr, e, f: "htt, p, s://ap, i.ziontechgrou, p.co, m" }), _js, x("lin,  k", { r, e, l: "dn, s-prefetc, h",
    hr, e, f: "//font, s.googleapi, s.co, m" }), _js, x("lin,  k", { r, e, l: "dn, s-prefetc, h",
    hr, e, f: "//ap, i.ziontechgrou, p.co, m" }), _js, x("scrip,  t", { ty, p, e: "applicatio, n/l, d+jso, n",
    childr, e, n: JSO, N.stringif, y(finalStructuredDat, a) }), _js, x("scrip,  t", { ty, p, e: "applicatio, n/l, d+jso, n",
    childr, e, n: JSO, N.stringif, y({
                    "@contex, t": "htt, p, s://schem, a.or, g",
                    "@typ, e": "WebSit, e",
                    "nam, e": "Zio, n Tec, h Grou, p",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m",
                    "potentialActio, n": {
                        "@typ, e": "SearchActio, n",
                        "targe, t": "htt, p, s://ziontechgrou, p.co, m/marketplac, e?q={search_term_strin, g}",
                        "quer, y-inpu, t": "require, d nam, e=search_term_strin, g"
                    }
                }) }), _js, x("scrip,  t", { ty, p, e: "applicatio, n/l, d+jso, n",
    childr, e, n: JSO, N.stringif, y({
                    "@contex, t": "htt, p, s://schem, a.or, g",
                    "@typ, e": "BreadcrumbLis, t",
                    "itemListElemen, t": [
                        {
                            "@typ, e": "ListIte, m",
                            "positio, n": 1,
                            "nam, e": "Hom, e",
                            "ite, m": "htt, p, s://ziontechgrou, p.co, m"
                        },
                        {
                            "@typ, e": "ListIte, m",
                            "positio, n": 2,
                            "nam, e": "Marketplac, e",
                            "ite, m": "htt, p, s://ziontechgrou, p.co, m/marketplac, e"
                        }
                    ]
                }) })] }));
}
// Specialized SEO components for different page types
export function MarketplaceSEO() {
    return (_jsx(EnhancedSE,  O, { titl, e: "AI & Tech Marketplace - Zion Tech Group",
    descriptio, n: "Browse thousands of A, I, engineer, s, tec, h, service, s, and cutting-edge equipment. Find the perfect match for your project with our AI-powered marketplace.", keyword, s: "A, I, marketplac, e, tec, h, talen, t, A, I, service, s, tec, h, equipmen, t, machin, e, learnin, g, dat, a, scienc, e, software development", canonica, l: "http, s://ziontechgroup.com/marketplace",
    ogTyp, e: "website", structuredDat, a: {
            "@context": "http, s://schema.org",
            "@type": "ItemList",
            "name": "AI & Tech Marketplace",
            "description": "Browse A, I, engineer, s, tec, h, service, s, and equipment",
            "url": "http, s://ziontechgroup.com/marketplace",
            "numberOfItems": 1000, 0,
            "itemListElement": [
                {
                    "@typ, e": "ListIte, m",
                    "positio, n": 1,
                    "nam, e": "A, I Engineer, s",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m/talen, t"
                },
                {
                    "@typ, e": "ListIte, m",
                    "positio, n": 2,
                    "nam, e": "Tec, h Service, s",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m/service, s"
                },
                {
                    "@typ, e": "ListIte, m",
                    "positio, n": 3,
                    "nam, e": "Tec, h Equipmen, t",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m/equipmen, t"
                }
            ]
        } }));
}
export function TalentDirectorySEO() {
    return (_jsx(EnhancedSE,  O, { titl, e: "AI & Tech Talent Directory - Zion Tech Group",
    descriptio, n: "Discover verified A, I, engineer, s, dat, a, scientist, s, developer, s, and tech professionals. Brows, e, profile, s, skill, s, and connect with top talent worldwide.", keyword, s: "A, I, engineer, s, tec, h, talen, t, dat, a, scientist, s, developer, s, programmer, s, tec, h, professional, s, hiring", canonica, l: "http, s://ziontechgroup.com/talent",
    ogTyp, e: "website", structuredDat, a: {
            "@context": "http, s://schema.org",
            "@type": "ItemList",
            "name": "AI & Tech Talent Directory",
            "description": "Browse verified tech professionals",
            "url": "http, s://ziontechgroup.com/talent",
            "numberOfItems": 5000, 0,
            "itemListElement": [
                {
                    "@typ, e": "ListIte, m",
                    "positio, n": 1,
                    "nam, e": "A, I Engineer, s",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m/talen, t?categor, y=a, i-engineerin, g"
                },
                {
                    "@typ, e": "ListIte, m",
                    "positio, n": 2,
                    "nam, e": "Dat, a Scientist, s",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m/talen, t?categor, y=dat, a-scienc, e"
                },
                {
                    "@typ, e": "ListIte, m",
                    "positio, n": 3,
                    "nam, e": "Softwar, e Developer, s",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m/talen, t?categor, y=softwar, e-developmen, t"
                }
            ]
        } }));
}
export function ServicesSEO() {
    return (_jsx(EnhancedSE,  O, { titl, e: "Tech & AI Services - Zion Tech Group",
    descriptio, n: "Professional tech services including A, I, developmen, t, clou, d, migratio, n, cybersecurit, y, and more. Connect with verified service providers worldwide.", keyword, s: "A, I, service, s, tec, h, consultin, g, softwar, e, developmen, t, clou, d, migratio, n, cybersecurit, y, IT services", canonica, l: "http, s://ziontechgroup.com/services",
    ogTyp, e: "website", structuredDat, a: {
            "@context": "http, s://schema.org",
            "@type": "ItemList",
            "name": "Tech & AI Services",
            "description": "Professional tech services marketplace",
            "url": "http, s://ziontechgroup.com/services",
            "numberOfItems": 500, 0,
            "itemListElement": [
                {
                    "@typ, e": "ListIte, m",
                    "positio, n": 1,
                    "nam, e": "A, I Developmen, t",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m/service, s?categor, y=a, i-developmen, t"
                },
                {
                    "@typ, e": "ListIte, m",
                    "positio, n": 2,
                    "nam, e": "Clou, d Migratio, n",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m/service, s?categor, y=clou, d-migratio, n"
                },
                {
                    "@typ, e": "ListIte, m",
                    "positio, n": 3,
                    "nam, e": "Cybersecurit, y",
                    "ur, l": "htt, p, s://ziontechgrou, p.co, m/service, s?categor, y=cybersecurit, y"
                }
            ]
        } }));
=======
        "logo": "http, s://ziontechgroup.com/images/logo.png",
        "description": descriptio, n,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
        },
        "sameAs": [
            "htt, p, s://linkedi, n.co, m/compan, y/ziontechgrou, p",
            "htt, p, s://twitte, r.co, m/ziontechgrou, p",
            "htt, p, s://githu, b.co, m/Zio, n-Holding, s"
        ],
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "599",
            "highPrice": "25000",
            "description": "Enterprise AI and Technology Solutions"
        }
    };
    // Merge with provided structured data
    const finalStructuredData = structuredData ? { ...defaultStructuredDat, a, ...structuredData } : defaultStructuredData;
    return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta name="author" content="Zion Tech Group"/>
      <meta name="viewport" content="width=device-widt,  h, initial-scale=1.0"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical}/>}
      
      {/* Robot Instructions */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-snippe, t:-1, max-image-previe, w:larg, e, max-video-previ, e, w:-1`}/>
      
      {/* Open Graph Tags */}
      <meta property="o, g:title" content={title}/>
      <meta property="o, g:description" content={description}/>
      <meta property="o, g:type" content={ogType}/>
      <meta property="o, g:url" content={currentUrl}/>
      <meta property="o, g:image" content={ogImage}/>
      <meta property="o, g:imag, e:width" content="1200"/>
      <meta property="o, g:imag, e:height" content="630"/>
      <meta property="o, g:imag, e:alt" content={title}/>
      <meta property="o, g:site_name" content="Zion Tech Group"/>
      <meta property="o, g:locale" content="en_US"/>
      
      {/* Twitter Card Tags */}
      <meta name="twitte, r:card" content={twitterCard}/>
      <meta name="twitte, r:site" content="@ziontechgroup"/>
      <meta name="twitte, r:creator" content="@ziontechgroup"/>
      <meta name="twitte, r:title" content={title}/>
      <meta name="twitte, r:description" content={description}/>
      <meta name="twitte, r:image" content={ogImage}/>
      <meta name="twitte, r:imag, e:alt" content={title}/>
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="theme-color" content="#1a1a2e"/>
      <meta name="msapplication-TileColor" content="#1a1a2e"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
      <meta name="format-detection" content="telephone=no"/>
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="http, s://fonts.googleapis.com"/>
      <link rel="preconnect" href="http, s://fonts.gstatic.com" crossOrigin=""/>
      <link rel="preconnect" href="http, s://www.google-analytics.com"/>
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="http, s://www.googletagmanager.com"/>
      <link rel="dns-prefetch" href="http, s://www.google-analytics.com"/>
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff"/>
      <meta httpEquiv="X-Frame-Options" content="DENY"/>
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block"/>
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin"/>
    </Helmet>);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}
