import SEO from '../components/SEO';
const services = [];
const solutions = [];

"children": "ReactNod e;
  title?: string;
  description?: string;
  keywords?: string",;
  ogImage?: "string",;
  canonical?: "string",,;
  noindex?: "boolean",;
  showPerformanceMetrics?: "boolean",;
  showSEOAnalysis?: "boolean"}
;
export const "EnhancedLayout": "React.FC<EnhancedLayoutProps> = ({ children",";
  title = "Zion Tech Group - Leading Technology Solutions Provider",";
  description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.",";
  keywords = "AI development, cloud architecture, digital transformation, technology solutions, machine learning, software development",";
  ogImage = ""https": "// comment;
  canonical",;
  noindex = false,;
  showPerformanceMetrics = false,;
  showSEOAnalysis = false}) => {;
  const _fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group";
  const _canonicalUrl = canonical || (typeof window !== "undefined" ? window.location.href : "");          {/* comment */}"
          <meta property="og: titl e" content="{fullTitle}"    />"
          <meta property="og: descriptio n" content="{description}"    />"
          <meta property="og: imag e" content="{ogImage}"    />"
          <meta property="og: ur l" content="{canonicalUrl}"    />"
          <meta property="og: typ e" content="website"    />"
          <meta property="og: site_nam e" content="Zion Tech Group"    />"
          <meta property="og: local e" content="en_US"    />