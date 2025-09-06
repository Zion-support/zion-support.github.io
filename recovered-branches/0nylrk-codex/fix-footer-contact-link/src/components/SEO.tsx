<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx

<<<<<<< HEAD

=======
import { Helmet } from './react - helmet - async';

========
<<<<<<< HEAD
import { Helmet } from './react - helmet - async';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx
interface SEOProps {
  title: string
  description: string
import {Helmet} from "react-helmet-async";
interface SEOProps {;
  title: string,;
  description: string,;
  keywords?: string;
  og_image?: string;
  og_url?: string;
  canonical?: string;
  noindex?: boolean;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx
export function SEO(): any ({;
  title;
  description;
  keywords;
  // Default to the Google Drive image URL;
  ogImage = "https: //drive && drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc";
  ogUrl;
  canonical,;
  noindex}: SEOProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx

  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
=======

=======

import { Helmet } from "react-helmet-async";
interface SEOProps {

  title: string
  description: string

  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Helmet } from "react-helmet-async",
import {Helmet} from "react-helmet-async";
import { Helmet } from "react-helmet-async",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface SEOProps {
  title: string,
  description: string,
  keywords?: string,
  ogImage?: string,
  ogUrl?: string,
  canonical?: string,
<<<<<<< HEAD
<<<<<<< HEAD

  noindex?: boolean
}

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  noindex?: boolean
}

export function SEO({;
  title;
  description;
  keywords;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function SEO({
  title,
  description,
  keywords,
<<<<<<< HEAD
<<<<<<< HEAD

  // Default to the Google Drive image URL

=======


  // Default to the Google Drive image URL

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Default to the Google Drive image URL

  ogImage = "https: //drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc";
  ogUrl;
  canonical
  noindex}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
  ogUrl,
  canonical,
  noindex}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace",
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle,
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx
  return (
=======

import { Helmet } from "react-helmet-async",;
;
interface SEOProps {;
  title:string,;
  description:string,;
  keywords?:string,;
  ogImage?:string,;
  ogUrl?:string,;
  canonical?:string,;
  noindex?:boolean;
}
;
export function SEO({;
  title,;
  description,;
  keywords,;
  // Default to the Google Drive image URL;
  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",;
  ogUrl,;
  canonical,;
  noindex} SEOProps) {;
  const siteTitle = "Zion - The Future of Tech & AI Marketplace",;
  const fullTitle = title ? `${title} | ${siteTitle}` :siteTitle,;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Helmet>;
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      {keywords && <meta name="keywords" content={keywords} />}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx



========
      ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />;
      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={ogImage} />;
      {ogUrl && <meta property="og:url" content={ogUrl} />}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx
export /**
 * SEO - Function description
 */
function SEO() {
  const site_title = "Zion - The Future of Tech & AI Marketplace";
  const full_title = title ? `${title} | ${site_title}` : site_title;
;
  return (
    <Helmet>;
      <title>{full_title}</title>;
      <meta name="description" content={description} />;
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />;
      <meta property="og:title" content={full_title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={og_image} />;
      {og_url && <meta property="og:url" content={og_url} />}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:site" content="@lovable_dev" />;
      <meta name="twitter:title" content={full_title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={og_image} />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lovable_dev" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}
<<<<<<< HEAD
<<<<<<< HEAD
    </Helmet>
  )

=======


=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </Helmet>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Helmet } from "react-helmet-async",;
interface SEOProps {;
  title: string,;
  description: string,;
  keywords?: string,;
  ogImage?: string,;
  ogUrl?: string,;
  canonical?: string,;
  noindex?: boolean;
}
;
export function SEO({;
  title,;
  description,;
  keywords,;
  // Default to the Google Drive image URL;
  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",;
  ogUrl,;
  canonical,;
  noindex}: SEOProps) {;
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return (;
    <Helmet>;
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      {keywords && <meta name="keywords" content={keywords} />}
;
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
;
<<<<<<< HEAD

========
=======
      ;
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:site" content="@lovable_dev" />;
      <meta name="twitter:title" content={fullTitle} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={ogImage} />;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      ;
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:site" content="@lovable_dev" />;
      <meta name="twitter:title" content={fullTitle} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={ogImage} />;
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
}
;

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
    </Helmet>);
=======
    </Helmet>;
  ),; interface SEOProps {
  title: string;
description: string;
keywords?: string;
ogImage?: string;
ogUrl?: string;
canonical?: string;
noindex?: boolean 
}export function SEO ({
  title;
description;
keywords;
//Default to the Google Drive image URL ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc";
ogUrl;
canonical;
noindex 
}: SEOProps) {
  return (<Helmet> <title> {
  fullTitle 
}</title> <meta name="description" content= {
  description 
}/> {
  keywords && <meta name="keywords" content= {
  keywords 
}/> 
}{
  /* Open Graph /Facebook */ 
}<meta property="og:type" content="website" /> <meta property="og:title" content= {
  fullTitle 
}/> <meta property="og:description" content= {
  description 
}/> <meta property="og:image" content= {
  ogImage 
}/> {
  ogUrl && <meta property="og:url" content= {
  ogUrl 
}/> 
}{
  /* Twitter */ 
}<meta name="twitter:card" content="summary large image" /> <meta name="twitter:site" content="@lovable dev" /> <meta name="twitter:title" content= {
  fullTitle 
}/> <meta name="twitter:description" content= {
  description 
}/> <meta name="twitter:image" content= {
  ogImage 
}/> {
  /* Canonical URL */ 
}{
  canonical && <link rel="canonical" href= {
  canonical 
}/> 
}{
  /* No index directive for search engines if needed */ 
}{
  noindex && <meta name="robots" content="noindex" /> 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/SEO.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
