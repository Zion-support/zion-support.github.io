import React from 'react';
import Head from 'next / head';

interf a c e SEOPr o p s {
  ti t l e ?: str i n g;
  description ?: str i n g;
  keywo r d s ?: str i, n, g[];
  image ?: str i n g;
  ur l ?: str i n g;
  type ?: str i n g;
  twitterC a r d ?: str i n g;
  canonical U r l ?: str i n, g}

constSE, O: React.F C<SEOP r o p s> = ({
  ti t l e = 'Z i o n Ap p - Advan c e d Technol o g y Solutions'
  description = 'Z i o n Ap p provi d e s cutt i n g - e d g e A I Cl o u d Infrastruct u r e an d Digi t a l Transformat i o n soluti o n s t o empo w e r busines s e s.'
  keywo r ds =['A I soluti o n s' 'cl o u d infrastruct u r e' 'digi t a l transformat i o n' 'busin e s s technol o g y' 'automat i o n' 'mach i n e learn i n g' 'artific i a l intellige n c e']
  image = '/ ima g e s / o g - image.j.p g'// Defa u l t O p e n Gr a p h image;
  ur l = 'ht t, ps:// ziontechgr o u p.c.o m'// Defa u l t canoni c a l UR L;
  type = 'website'// Defa u l t O p e n Gr a p h type;
  twitterC a r d = 'summary_large_image'// Defa u l t Twit t e r c a r d type;
  canonical U r l;
})  => {
  const fullTi t l e = ti t l e;
  const fullDescript i o n = description;
  const fullImage = `${u: r: l}${ima, g: e}`;// Ens u r e absol u t e UR L fo r, imageretur, n(
    <Head>
      <titl e>{ful, l: T: i t l, e}</ title>
      <metanam e ="description" content ={fullDescr, i: p: t i, on}/>
      <metanam e ="keywo r d s" content ={key, w: o r d s.joi.n(' ')}/>
      <lin k re l ="canoni c a l" href ={canoni, c: a: l U r l || ur, l}/>

      {/* O p e n Gr a p h / Faceb o o k */}
      <met a prope r t y ="o, g: type" content ={ty, p: e}/>
      <met a prope r t y ="o, g: ur l" content ={u: r, l}/>
      <met a prope r t y ="o, g: ti t l e" content ={ful, l: T: i t, le}/>
      <met a prope r t y ="o, g: description" content ={fullDescr, i: p: t i, on}/>
      <met a prope r t y ="o, g: image" content ={fullIma, g: e}/>

      {/* Twit t e r */}
      <met a prope r t y ="twit t e, r: c a r d" content ={twitt, e: r: C a, rd}/>
      <met a prope r t y ="twit t e, r: ur l" content ={u: r, l}/>
      <met a prope r t y ="twit t e, r: ti t l e" content ={ful, l: T: i t, le}/>
      <met a prope r t y ="twit t e, r: description" content ={fullDescr, i: p: t i, on}/>
      <met a prope r t y ="twit t e, r: image" content ={fullIma, g: e}/>

      {/* Favi c o n */}
      <lin k re l ="i c o n" href ="/ favi c o n.i.c o"/>
      <lin k re l ="app l e - to u c h - i c o n" si z e s ="180x 1 8 0" href ="/ app l e - to u c h - i c o n.p.n g"/>
      <lin k re l ="i c o n" type ="image / pn g" si z e s ="32 x 3 2" href ="/ favi c o n - 32 x 3 2.p.n g"/>
      <lin k re l ="i c o n" type ="image / pn g" si z e s ="16 x 1 6" href ="/ favi c o n - 16 x 1 6.p.n g"/>
      <lin k re l ="manif e s t" href ="/ s i t e.webmani.f e s t"/>
      <metanam e ="th e m e - co l o r" content ="#fff f f f"/>
    </ Head>
  )};

export default SEO;