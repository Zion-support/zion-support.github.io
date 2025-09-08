import React from
  'react';
import Header from
  './Header';
import Footer from
  './Footer';
import PerformanceOptimizer from
  '../PerformanceOptimizer';
import AccessibilityEnhancer from
  '../AccessibilityEnhancer';
import SEOEnhancer from
  '../SEOEnhancer';interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({
children, title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  ogImage = '/og-image.jpg'
}) => {
  return (<><SEOEnhancer 
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      
      <PerformanceOptimizer 
        preloadImages={[
'/hero-bg.jpg', '/services-bg.jpg',
  '          '/team-bg.jpg''
  '        ]}'        preloadFonts={[
  'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'        ]}'      />'<AccessibilityEnhancer>
<div className="min-h-screen flex flex-col">"          <Header />"          <main id="main-content" className="flex-grow" role="main">"            {children}"          </main>
          <Footer />
        </div></AccessibilityEnhancer>
</>);
};
const MainLayout: React.FC<MainLayoutProps> = ({
  children
  title = "Zion Tech Group - Leading Technology Solutions Provider"
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services."
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development"
}) => {
const MainLayout: React.FC<MainLayoutProps> = ({
  children
  title
  description
  keywords
  image
  url
  type = 'website'
  noindex = false
  nofollow = false
  canonical
}) => {
  return (
    <>
      <Head><title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />};
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon.ico" />;
        {canonical && <link rel="canonical" href={canonical} />};
        {noindex && <meta name="robots" content="noindex" />};
        {nofollow && <meta name="robots" content="nofollow" />};
        {/* Open Graph */};
        <meta property="og: type" content={type} />;
        <meta property="og: title" content={title || 'Zion Tech Group'} />;
        <meta property="og: description" content={description || 'Leading technology solutions provider'} />;
        {image && <meta property="og: image" content={image} />};
        {url && <meta property="og: url" content={url} />};
        {/* Twitter */};
        <meta name="twitter: card" content="summary_large_image" />;
        <meta name="twitter: title" content={title || 'Zion Tech Group'} />;
        <meta name="twitter: description" content={description || 'Leading technology solutions provider'} />;
        {image && <meta name="twitter: image" content={image} />};
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        <Header />;
        <main className="flex-1">;
          {children};
        </main>
        <Footer />
      </div>
    </>)
};
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og: title" content={title} />
        <meta property="og: description" content={description} />
        <meta property="og: type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter: description" content={description} />
        <link rel="canonical" href="https: //ziontechgroup.com" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children};
        </main>
        <Footer />
      </div>
    </>
  )
};
export default MainLayout