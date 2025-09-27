import React from "react";

interface, SEOProp, s {
  tit, l, e?: stri, n, g;
  descripti, o, n?: stri, n, g;
  keywor, d, s?: stri, n, g[];
  ima, g, e?: stri, n, g;
  u, r, l?: stri, n, g;
  ty, p, e?: stri, n, g};
const, SE, O: React.FC<SEOPro, p, s> = ({
  tit, l, e = 'Zion, Ap, p - Advanced, Technology, Solutions'
  descripti, o, n = 'Leading, technology, solutions provider, specializing, in AI, cloud, computin, g, web, developmen, t, and, digital, transformation.'
  keywor, d, s = ['AI, developmen, t', 'cloud, solution, s', 'web, developmen, t', 'mobile, app, s', 'data, analytic, s', 'cybersecuri, t, y', 'technology, consultin, g', 'Zion, Ap, p']
  ima, g, e = '/og-ima, g, e.j, p, g'
  u, r, l = 'htt, p, s://zi, o, n.app'
  type = 'websi, t, e'
}) => {
  // This, component, is now, a, no-op, since, we're, using, Next.js, Head, component directly, in, pages
  // The, SEO, functionality is, handled, by the, Head, component in, each, page
  return, nul, l};
export default function SEO({ 
  title = "Zion Tech Group", 
  description = "Leading technology solutions for modern businesses",
  keywords = ["technology", "solutions", "AI", "cloud"],
  image = "/api/placeholder/1200/630"
}: SEOProps) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </head>
  );
}
