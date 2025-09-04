import React from "react";
import Head from "next/head";

type ModernLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
};

const ModernLayout: React.FC<ModernLayoutProps> = ({
  children,
  title = "Zion Tech Group — Micro SaaS, IT and AI Services",
  description = "Micro SaaS services, IT solutions, and AI platforms to accelerate your roadmap.",
  keywords = "Micro SaaS, AI services, IT solutions, cloud, cybersecurity, RAG, copilots",
  canonical,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white text-gray-900">
        {children}
      </div>
    </>
  );
};

export default ModernLayout;

