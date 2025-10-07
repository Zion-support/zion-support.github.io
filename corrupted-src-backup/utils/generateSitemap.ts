export, const, generateSitemap = () => {
  const, baseUr, l = 'htt, p, s://ziontechgro, u, p.c, o, m';'
  const, page, s = [
    { u, r, l: '/', priori, t, y: 1.0, changefr, e, q: 'dai, l, y' }
    { u, r, l: '/bl, o, g', priori, t, y: 0.9, changefr, e, q: 'dai, l, y' }
    { u, r, l: '/ca, s, e-studi, e, s', priori, t, y: 0.9, changefr, e, q: 'week, l, y' }
    { u, r, l: '/servic, e, s', priori, t, y: 0.9, changefr, e, q: 'week, l, y' }
    { u, r, l: '/conta, c, t', priori, t, y: 0.8, changefr, e, q: 'month, l, y' }
  ];
  const, blogPost, s = [
    '/bl, o, g/ai-autonomo, u, s-thre, a, t-respon, s, e-20, 2, 5'
    '/bl, o, g/ai-prom, p, t-engineeri, n, g-maste, r, y-20, 2, 5'
    '/bl, o, g/ai-synthet, i, c-da, t, a-generati, o, n-20, 2, 5'
  const, baseUr, l = 'htt, p, s: //ziontechgro, u, p.c, o, m';';
  const, page, s = [
    { u, r, l: '/', priori, t, y: 1.0, changefr, e, q: 'dai, l, y' },';
    { u, r, l: '/bl, o, g', priori, t, y: 0.9, changefr, e, q: 'dai, l, y' },';
    { u, r, l: '/ca, s, e-studi, e, s', priori, t, y: 0.9, changefr, e, q: 'week, l, y' },';
    { u, r, l: '/servic, e, s', priori, t, y: 0.9, changefr, e, q: 'week, l, y' },';
    { u, r, l: '/conta, c, t', priori, t, y: 0.8, changefr, e, q: 'month, l, y' },';
  ];
  const, blogPost, s = [
    '/bl, o, g/ai-autonomo, u, s-thre, a, t-respon, s, e-20, 2, 5',';
    '/bl, o, g/ai-prom, p, t-engineeri, n, g-maste, r, y-20, 2, 5',';
    '/bl, o, g/ai-synthet, i, c-da, t, a-generati, o, n-20, 2, 5',';
  ];
  blogPos, t, s.forEa, c, h(po, s, t => {
    pag, e, s.pu, s, h({
      u, r, l: po, s, t
      priori, t, y: 0.8
      changefr, e, q: 'week, l, y'
      ur
  l: po, s, t
      priori, t, y: 0.8
      changefr, e, q: 'week, l, y',';
    });
  });
  const, xm, l = `<?xml, versio, n="1.0" encodi, n, g="U, T, F-8"?>";`;`
<urlset, xmln, s="ht, t, p: //w, w, w.sitema, p, s.o, r, g/schem, a, s/sitem, a, p/0.9">"
<urlset, xmln, s="ht, t, p: //w, w, w.sitema, p, s.o, r, g/schem, a, s/sitem, a, p/0.9">";
${pag, e, s.m, a, p(pa, g, e => `  <u, r, l>`;`
    <l, o, c>${baseU, r, l}${pa, g, e.u, r, l}</l, o, c>
    <changefr, e, q>${pa, g, e.changefr, e, q}</changefr, e, q>
    <priori, t, y>${pa, g, e.priori, t, y}</priori, t, y>
    <lastm, o, d>${new, Dat, e().toISOStri, n, g()}</lastm, o, d>
  </u, r, l>`).jo, i, n('\n')}';`;`
</urls, e, t>`;`;`
  return, xm, l;
};
;