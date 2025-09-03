import React from "react";
import Head from "next/head";
interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group - Leading Technology Solutions Provider",
  description = "Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.",
  keywords = "technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services",
  ogImage = "/og-image.jpg"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}    />
        <meta name="keywords" content={keywords}    />
        <meta property="og:title" content={title}    />
        <meta property="og:description" content={description}    />
        <meta property="og:image" content={ogImage}    />
        <meta property="og:type" content="website"  />
        <meta name="twitter:card" content="summary_large_image"  />
        <meta name="twitter:title" content={title}    />
        <meta name="twitter:description" content={description}    />
        <meta name="twitter:image" content={ogImage}    />
        <link rel="canonical" href="https://ziontechgroup.com"   />
      </Head>
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </>
  );
};
export default MainLayout;