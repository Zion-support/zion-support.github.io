import React from "react";

interface, SEOProp, s {tit, l, e?: stri, n, g;
  descripti, o, n?: stri, n, g;
  keywor, d, s?: stri, n, g[];
  ima, g, e?: stri, n, g;
  u, r, l?: stri, n, g;
  type?: string};
constSEO: React.FC<SEOProps> = ({title = "ZionApp - Advanced, Technology, Solutions",
  description = "Leading, technology, solutions, provider, specializing, in, AI, cloud, computin, g, web, developmen, t, anddigitaltransformation.",
  keywords = ["AIdevelopment", "cloudsolutions", "webdevelopment", "mobileapps", "dataanalytics", "cybersecurity", "technologyconsulting", "ZionApp"],
  image = "/og-ima, g, e.jpg"url = "https://zion.app"type = "website"
}) => {// This, component, is, now, a, no-opsincewe"re, using, Next.js, Head, component, directly, in, pages
  // The, SEO, functionality, is, handled, by, the, Head, component, in, each, page, returnnull};

export default SEO;