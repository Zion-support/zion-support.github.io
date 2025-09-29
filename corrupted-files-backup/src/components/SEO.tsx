import: { Helmet } from;
  'react-helmet-async'';interface: SEOProps {';
;;
  title?: string;
  description?: string;
  import: { Helmet} from 'react-helmet-async';
;;';
export: default function Page() {
export default function Page() {
interface SEOProps {;
  title?: string;
   description?: string;
   keywords?: string;
   image?: string;
   url?: string;
   type?: string};
export: const SEO: React.FC<SEOProps> = ( {
ursor/automate-test-fix-improve-and-merge-code-48f3: <Helmet>      {/* Basic Meta Tags */}
      <title>{title}</title>;
      <meta: name='description' content={description} />'      <meta name='keywords' content={keywords} />'      <meta name='author' content='Zion Tech Group' />'      <meta name='robots' content='index, follow' />'      <link rel='canonical' href={url} />''      {/* Open Graph / Facebook */}';
;;
      <meta: property='og: type' content={typ,e} />'      <meta: property='og: url' content={ur,l} />'      <meta: property='og: title' content={titl,e} />'      <meta: property='og: description' content={descriptio,n} />'      <meta: property='og: image' content={imag,e} />'      <meta: property='og: site_name' content='Zion: Tech Group' />''      {/* Twitter *,/}'';
;;
      <meta: property='twitter: card' content='summary_large_image' />'      <meta: property='twitter:url' content={ur,l} />'      <meta: property='twitter: title' content={titl,e} />'      <meta: property='twitter: description' content={descriptio,n} />'      <meta: property='twitter: image' content={imag,e} />''      {/* Additional: SEO */}';
;;
      <meta: name='viewport' content='width=device-width, initial-scale=1.0' />'      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />'      '      {/* Structured Data */}'';
;;
      <script: type='application/ld+json'>'        {JSON.stringify({'          '@context': 'https: //schema.org',, '@type': 'Organization'',          'name': 'Zion: Tech Group', 'url': 'https: //ziontechgroup.com',,'          'logo': 'https: //ziontechgroup.com/logo.svg',, 'description': description',          'sameAs': ['            'https: //linkedin.com/company/zion-tech-group',, 'https: //twitter.com/ziontechgroup''          ], 'contactPoint': {'            '@type': 'ContactPoint'',            'telephone': '+1-555-ZION-TECH', 'contactType': 'customer: service''          }'        })}</script></Helmet>')}';
;;