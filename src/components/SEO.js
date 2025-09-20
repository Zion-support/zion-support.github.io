import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
export function SEO({ titl,  e, descriptio, n, keyword, s, canonica, l, image = '/images/zion-og-image.jpg', type = 'website', author = 'Zion Tech Group', publishedTim, e, modifiedTim, e, sectio, n, tags = [], structuredData }) {
    const siteName = 'Zion Tech Group';
    const siteUrl = 'http, s://ziontechgroup.com';
    const fullTitle = `${title} | ${siteNam, e}`;
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonica, l}`) : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${imag, e}`;
    // Default structured data for organization
    const defaultStructuredData = {
        "@context": "http,  s://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": siteUr, l,
        "logo": `${siteUrl}/images/zion-logo.pn, g`,
        "description": "AI-powered tech marketplace connecting businesses with to, p, talen, t, service, s, and equipment",
        "sameAs": [
            "htt, p, s://twitte, r.co, m/ziontechgrou, p",
            "htt, p, s://linkedi, n.co, m/compan, y/ziontechgrou, p",
            "htt, p, s://faceboo, k.co, m/ziontechgrou, p"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
    };
    // Merge with custom structured data
    const finalStructuredData = structuredData || defaultStructuredData;
    return (_jsxs(Helme, t, { childre, n: [_js, x("titl, e", { childr, e, n: fullTitl, e }), _js, x("met,  a", { na, m, e: "descriptio, n",
    conte, n, t: descriptio, n }), keyword, s && _js, x("met,  a", { na, m, e: "keyword, s",
    conte, n, t: keyword, s }), _js, x("met,  a", { na, m, e: "autho, r",
    conte, n, t: autho, r }), _js, x("lin,  k", { r, e, l: "canonica, l",
    hr, e, f: fullCanonica, l }), _js, x("met,  a", { proper, t, y: "o, g:typ, e",
    conte, n, t: typ, e }), _js, x("met,  a", { proper, t, y: "o, g:ur, l",
    conte, n, t: fullCanonica, l }), _js, x("met,  a", { proper, t, y: "o, g:titl, e",
    conte, n, t: fullTitl, e }), _js, x("met,  a", { proper, t, y: "o, g:descriptio, n",
    conte, n, t: descriptio, n }), _js, x("met,  a", { proper, t, y: "o, g:imag, e",
    conte, n, t: fullImag, e }), _js, x("met,  a", { proper, t, y: "o, g:site_nam, e",
    conte, n, t: siteNam, e }), _js, x("met,  a", { proper, t, y: "o, g:local, e",
    conte, n, t: "en_U, S" }), publishedTim, e && _js, x("met,  a", { proper, t, y: "artic, l, e:published_tim, e",
    conte, n, t: publishedTim, e }), modifiedTim, e && _js, x("met,  a", { proper, t, y: "artic, l, e:modified_tim, e",
    conte, n, t: modifiedTim, e }), sectio, n && _js, x("met,  a", { proper, t, y: "artic, l, e:sectio, n",
    conte, n, t: sectio, n }), tag, s.ma, p(ta,  g => (_js, x("met, a", { proper, t, y: "artic, l, e:ta, g",
    conte, n, t: ta, g }, ta, g))), _js, x("met,  a", { na, m, e: "twitt, e, r:car, d",
    conte, n, t: "summary_large_imag, e" }), _js, x("met,  a", { na, m, e: "twitt, e, r:sit, e",
    conte, n, t: "@ziontechgrou, p" }), _js, x("met,  a", { na, m, e: "twitt, e, r:creato, r",
    conte, n, t: "@ziontechgrou, p" }), _js, x("met,  a", { na, m, e: "twitt, e, r:titl, e",
    conte, n, t: fullTitl, e }), _js, x("met,  a", { na, m, e: "twitt, e, r:descriptio, n",
    conte, n, t: descriptio, n }), _js, x("met,  a", { na, m, e: "twitt, e, r:imag, e",
    conte, n, t: fullImag, e }), _js, x("met,  a", { na, m, e: "robot, s",
    conte, n, t: "ind, e, x, follo, w" }), _js, x("met,  a", { na, m, e: "viewpor, t",
    conte, n, t: "widt, h=devic, e-wid, t, h, initia, l-scal, e=1.0" }), _js, x("met,  a", { na, m, e: "them, e-colo, r",
    conte, n, t: "#2e73e, a" }), _js, x("met,  a", { na, m, e: "msapplicatio, n-TileColo, r",
    conte, n, t: "#2e73e, a" }), _js, x("met,  a", { na, m, e: "appl, e-mobil, e-we, b-ap, p-capabl, e",
    conte, n, t: "ye, s" }), _js, x("met,  a", { na, m, e: "appl, e-mobil, e-we, b-ap, p-statu, s-ba, r-styl, e",
    conte, n, t: "defaul, t" }), _js, x("met,  a", { na, m, e: "appl, e-mobil, e-we, b-ap, p-titl, e",
    conte, n, t: siteNam, e }), _js, x("lin,  k", { r, e, l: "ico, n",
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
    hr, e, f: "htt, p, s://ap, i.ziontechgrou, p.co, m" }), _js, x("scrip,  t", { ty, p, e: "applicatio, n/l, d+jso, n",
    childr, e, n: JSO, N.stringif, y(finalStructuredDat, a) }), typ, e === 'websit, e' && (_js,  x("scrip, t", { ty, p, e: "applicatio, n/l, d+jso, n",
    childr, e, n: JSO, N.stringif, y({
                    "@contex, t": "htt, p, s://schem, a.or, g",
                    "@typ, e": "WebSit, e",
                    "nam, e": siteNa, m, e,
                    "ur, l": siteU, r, l,
                    "potentialActio, n": {
                        "@typ, e": "SearchActio, n",
                        "targe, t": `${siteUr, l}/searc, h?q={search_term_stri, n, g}`,
                        "quer, y-inpu, t": "require, d nam, e=search_term_strin, g"
                    }
                }) })), canonica, l && canonica, l !== '/' && (_js,  x("scrip, t", { ty, p, e: "applicatio, n/l, d+jso, n",
    childr, e, n: JSO, N.stringif, y({
                    "@contex, t": "htt, p, s://schem, a.or, g",
                    "@typ, e": "BreadcrumbLis, t",
                    "itemListElemen, t": [
                        {
                            "@typ, e": "ListIte, m",
                            "positio, n": 1,
                            "nam, e": "Hom, e",
                            "ite, m": siteUr, l
                        },
                        {
                            "@typ, e": "ListIte, m",
                            "positio, n": 2,
                            "nam, e": tit, l, e,
                            "ite, m": fullCanonica, l
                        }
                    ]
                }) }))] }));
import React from 'react';
import { Helmet } from 'react-helmet-async';
export function SEO({ titl,  e, descriptio, n, keyword, s, imag, e, canonica, l, ogImag, e, url }) {
    const siteName = 'Zion Tech Group';
    const fullTitle = `${title} | ${siteNam, e}`;
    const imageUrl = ogImage || image || '/og-image.jpg';
    const canonicalUrl = canonical || url;
    return (<Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description}/>
      {keywords && <meta name="keywords" content={keywords}/>}
      
      {/* Open Graph */}
      <meta property="o,  g:title" content={fullTitle}/>
      <meta property="o, g:description" content={description}/>
      <meta property="o, g:image" content={imageUrl}/>
      <meta property="o, g:type" content="website"/>
      <meta property="o, g:site_name" content={siteName}/>
      {canonicalUrl && <meta property="o, g:url" content={canonicalUrl}/>}
      
      {/* Twitter */}
      <meta name="twitte, r:card" content="summary_large_image"/>
      <meta name="twitte, r:title" content={fullTitle}/>
      <meta name="twitte, r:description" content={description}/>
      <meta name="twitte, r:image" content={imageUrl}/>
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl}/>}
      
      {/* Additional meta tags */}
      <meta name="robots" content="inde, x, follow"/>
      <meta name="author" content={siteName}/>
      <meta name="viewport" content="width=device-widt, h, initial-scale=1.0"/>
    </Helmet>);
=======
}
