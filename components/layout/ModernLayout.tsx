<<<<<<< HEAD
<<<<<<< HEAD
import Head from "next/head";
import { ReactNode } from "react";
=======
type ModernLayoutProps = {}
  children: ReactNode;
type ModernLayoutProps = {;
  children: ReactNode,;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
const ModernLayout = ({}
const ModernLayout = ({;
  children;
  title = "Zion Tech Group - Revolutionary AI Services & IT Solutions";"
  description = "Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting - edge technology.";"
  keywords = "AI services, IT solutions, micro SaaS, digital transformation, cloud computing, cybersecurity";
  canonical;
}: ModernLayoutProps) =>: any {}
  return (
    <>;
      <Head>;
        <title>{title}</title>;"
        <meta name="description" content={description} />;"
        <meta name="keywords" content={keywords} />;"
        <meta name="viewport" content="width = device - width, initial - scale = 1" />;"
        <meta name="author" content="Zion Tech Group" />;"
        <meta name="robots" content="index, follow" />;"
        {canonical ? <link rel="canonical" href={canonical} /> : null}"
        <meta property="og: type" content="website" />;"
        <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />;"
        <meta property="og:title" content={title} />;"
        <meta property="og:description" content={description} />;"
        <meta property="og:site_name" content="Zion Tech Group" />;"
        <meta name="twitter:card" content="summary_large_image" />;"
        <meta name="twitter:title" content={title} />;"
        <meta name="twitter:description" content={description} />;"
        <link rel="icon" href="/favicon.ico" />;"
        <link rel="apple - touch - icon" sizes="180x180" href="/apple - touch - icon.png" />;"
        <link rel="icon" type="image / png" sizes="32x32" href="/favicon - 32x32.png" />;"
        <link rel="icon" type="image / png" sizes="16x16" href="/favicon - 16x16.png" />;"
        <link rel="manifest" href="/site.webmanifest" />;
<<<<<<< HEAD
      </Head>;
      <div className="min - h-screen bg - white text-gray-900">;
=======
      </Head>;"
      <div className="min - h-screen bg - white text - gray - 900">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        {children}
      </div>;
</>),
}
;
=======
type ModernLayoutProps = {children: ReactNode;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

type ModernLayoutProps = {
  children: ReactNode,
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
};

<<<<<<< HEAD
const ModernLayout = ({
  children;
  title = "Zion Tech Group - Revolutionary AI Services & IT Solutions";
  description = "Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology.";
  keywords = "AI services, IT solutions, micro SaaS, digital transformation, cloud computing, cybersecurity";
  canonical;
}: ModernLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="min-h-screen bg-white text-gray-900">
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        {children}
      </div>
    </>
  );
};

<<<<<<< HEAD
export default ModernLayout;
=======
        {children}
      </div>
</>),

export default ModernLayout;"
>>>>>>> origin/main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default ModernLayout;"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
