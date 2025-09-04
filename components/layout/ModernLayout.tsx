import React from "react";
import Head from "next/head";

export type ModernLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
};

const ModernLayout: React.FC<ModernLayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",
  keywords = "AI services, IT solutions, micro SaaS, cloud computing, cybersecurity",
  canonical,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        {canonical && <link rel="canonical" href={canonical} />}
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
  );
};

export default ModernLayout;