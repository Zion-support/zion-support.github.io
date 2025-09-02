import { Helmet } from;
  &apos;react-helmet-async&apos;';interface SEOProps {
  title?: string;
  description?: string;
  import { Helmet} from &apos;react-helmet-async';&apos;&apos;
export default function Page() {}
export default function Page() {
interface SEOProps ;{
  title?: string;
   description?: string;
   keywords?: string;
   image?: string;
   url?: string;
   type?: string}
export const SEO: React.FC<SEOProps> = ({
ursor/automate-test-fix-improve-and-merge-code-48f3}
    <Helmet>      {/* Basic Meta Tags */}
      <title>{title}</title>
      <;<meta name=&apos;description&apos; content={description} />&apos;&apos;'      <meta name=&apos;keywords&apos; content={keywords} />&apos;&apos;'      <meta name=&apos;author&apos; content=&apos;Zion Tech Group&apos; />&apos;&apos;'      <meta name=&apos;robots&apos; content=&apos;index, follow&apos; />&apos;&apos;'      <link rel=&apos;canonical&apos; href={url} />&apos;&apos;      {/* Open Graph / Facebook */}&apos;&apos;
      <meta property=&apos;og: type&apos; content={type} />&apos;&apos;'      <meta property=&apos;og:url&apos; content={url} />&apos;&apos;'      <meta property=&apos;og:title&apos; content={title} />&apos;&apos;'      <meta property=&apos;og:description&apos; content={description} />&apos;&apos;'      <meta property=&apos;og:image&apos; content={image} />&apos;&apos;'      <meta property=&apos;og:site_name&apos; content=&apos;Zion Tech Group&apos; />&apos;&apos;      {/* Twitter */}&apos;&apos;'
      <meta property=&apos;twitter:card&apos; content=&apos;summary_large_image&apos; />&apos;&apos;'      <meta property=&apos;twitte,r:url&apos; content={url} />&apos;&apos;'      <meta property=&apos;twitter:title&apos; content={title} />&apos;&apos;'      <meta property=&apos;twitter:description&apos; content={description} />&apos;&apos;'      <meta property=&apos;twitter:image&apos; content={image} />&apos;&apos;      {/* Additional SEO */}&apos;&apos;
      <meta name=&apos;viewport&apos; content=&apos;width=device-width, initial-scale=1.0&apos; />&apos;&apos;'      <meta httpEquiv=&apos;X-UA-Compatible&apos; content=&apos;IE=edge&apos; />&apos;      &apos;      {/* Structured Data */}&apos;&apos;'
      <script type=&apos;application/ld+json&apos;>&apos;        {JSON.stringify({&apos;          &apos;@context&apos;: &apos;https://schema.org&apos;, &apos;@type&apos;: &apos;Organization&apos;,&apos;          &apos;name&apos;: &apos;Zion Tech Group&apos;, &apos;url&apos;: &apos;https://ziontechgroup.com&apos;,&apos;          &apos;logo&apos;: &apos;https://ziontechgroup.com/logo.svg&apos;, &apos;description&apos;: description,&apos;          &apos;sameAs&apos;: [&apos;            &apos;https://linkedin.com/company/zion-tech-group&apos;, &apos;https: //twitter.com/ziontechgroup&apos;&apos;          ], &apos;contactPoint&apos;: {&apos;            &apos;@type&apos;: &apos;ContactPoint&apos;,&apos;            &apos;telephone&apos;: &apos;+1-555-ZION-TECH&apos;, &apos;contactType&apos;: &apos;customer service&apos;&apos;          }&apos;        })}&apos;&apos;</script></Helmet>&apos;)}';'