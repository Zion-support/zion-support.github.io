ursor/automate-test-fix-improve-and-merge-code-48f3

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({
ursor/automate-test-fix-improve-and-merge-code-48f3
      <SEOEnhancer 
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      
      <PerformanceOptimizer 
        preloadImages={[
ursor/automate-test-fix-improve-and-merge-code-48f3
      
      <AccessibilityEnhancer>
<div className="min-h-screen flex flex-col">"          <Header />"          <main id="main-content" className="flex-grow" role="main">"            {children}"          </main>
          <Footer />
        </div></AccessibilityEnhancer>
</>);
};

export default MainLayout;