<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from './react - helmet - async';

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { Helmet } from './react - helmet - async';

interface SEOProps {

  title: string
  description: string

<<<<<<< HEAD
=======
import {Helmet} from "react-helmet-async";
interface SEOProps {;
  title: string,;
  description: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  keywords?: string;
  og_image?: string;
  og_url?: string;
  canonical?: string;
  noindex?: boolean;
}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function SEO(): any ({;
  title;
  description;
  keywords;
  // Default to the Google Drive image URL;
  ogImage = "https: //drive && drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc";
  ogUrl;
  canonical,;
  noindex}: SEOProps) {;


<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
interface SEOProps {

  title: string
  description: string

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Helmet } from "react-helmet-async",
import {Helmet} from "react-helmet-async";
import { Helmet } from "react-helmet-async",
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { Helmet } from "react-helmet-async",
import {Helmet} from "react-helmet-async";
import { Helmet } from "react-helmet-async",

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface SEOProps {
  title: string,
  description: string,
  keywords?: string,
  ogImage?: string,
  ogUrl?: string,
  canonical?: string,
  noindex?: boolean
}

<<<<<<< HEAD
<<<<<<< HEAD
export function SEO({;
  title;
  description;
  keywords;
export function SEO({
  title,
  description,
  keywords,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Default to the Google Drive image URL

<<<<<<< HEAD
<<<<<<< HEAD
  // Default to the Google Drive image URL

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ogImage = "https: //drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc";
  ogUrl;
  canonical
  noindex}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
  ogUrl,
  canonical,
  noindex}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace",
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle,
  
<<<<<<< HEAD
<<<<<<< HEAD
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return (

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Helmet>;
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      {keywords && <meta name="keywords" content={keywords} />}
<<<<<<< HEAD
<<<<<<< HEAD
      ;
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />;
      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={ogImage} />;
      {ogUrl && <meta property="og:url" content={ogUrl} />}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}


<<<<<<< HEAD
<<<<<<< HEAD


    </Helmet>
  )
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:site" content="@lovable_dev" />;
      <meta name="twitter:title" content={fullTitle} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={ogImage} />;
<<<<<<< HEAD
      ;
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      ;
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:site" content="@lovable_dev" />;
      <meta name="twitter:title" content={fullTitle} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={ogImage} />;
<<<<<<< HEAD
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>;
  );



<<<<<<< HEAD
<<<<<<< HEAD
}
    </Helmet>);
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
}
}
;
}
;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </Helmet>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
