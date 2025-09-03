import Head from "next/head";
import React, { ReactNode } from "react";

interface EnhancedLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function EnhancedLayout({
  children,
  title = "Zion Tech Group",
  description = "Innovative AI, IT, and Micro SaaS solutions.",
  canonical,
  noindex = false
}: EnhancedLayoutProps) {
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} | Zion Tech Group`;
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      </Head>
      {children}
    </>
  );
}