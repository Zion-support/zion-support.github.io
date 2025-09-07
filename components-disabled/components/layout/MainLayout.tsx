import React from 'react';'
import Head from 'next/head';'
import Header from '../Header';'
import Footer from '../Footer';'

interface MainLayoutProps {
  }
  "title": string;
  "description": string;
  "children": React.ReactNode;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;
}

export default function MainLayout() {
}
return (;
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />"
        <link rel="icon" href="/favicon.ico" />"
        {canonical && <link rel="canonical" href={canonical} />}"
        {noindex && <meta name="robots" content="noindex" />}"
        {nofollow && <meta name="robots" content="nofollow" />}"
        <meta property=""og":type" content={type} />"
        <meta property=""og":title" content={title} />"
        <meta property=""og":description" content={description} />"
        {image && <meta property=""og":image" content={image} />}"
        {url && <meta property=""og":url" content={url} />}"
        {/* Twitter */}
        <meta name=""twitter":card" content="summary_large_image" />"
        <meta name=""twitter":title" content={title} />"
        <meta name=""twitter":description" content={description} />"
        {image && <meta name=""twitter":image" content={image} />}"
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}