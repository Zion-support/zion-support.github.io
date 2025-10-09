
interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  children: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps>= ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence, Zion Tech Group",
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  children
}) => {
    return (
    <>
      {children}
    </>);
}
export default SEOEnhancer