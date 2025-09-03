import React from "react"
interface MainLayoutProps {
  children: React.ReactNode
  title?: string,
  description?: string
  keywords?: string};
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group - Leading Technology Solutions Provider","
  description = "Leading technology solutions and AI services","
  keywords = "technology, AI, software development, consulting"
}) => {
  return (
    <div className="min-h-screen flex flex-col">"
      <SEOEnhancer title="{title}" description="{description}" keywords="{keywords}" />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <Header />"
      <main className="flex-grow">
        {children};
      </main>
      <Footer />
    </div>
  )
};
""
export default MainLayout;