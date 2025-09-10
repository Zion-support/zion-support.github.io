class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
import React from \'react\'; export default function EnhancedSEO({ title = \"Zion Tech Group - Advanced AI,Quantum Computing & Enterprise Technology Solutions\",description = \"Leading provider of advanced AI automation,quantum computing,autonomous business operations,and enterprise technology solutions && solutions.Transform your business with cutting-edge technology services.\",keywords = \"AI automation,quantum computing,enterprise technology,autonomous business operations,AI consulting,machine learning,cloud computing,cybersecurity,digital transformation\",canonical,ogImage = \""https\": \';\' })
const React from "react"; export default function EnhancedSEO({ title = "Zion Tech Group - Advanced AI,Quantum Computing & Enterprise Technology Solutions",description = "Leading provider of advanced AI automation,quantum computing,autonomous business operations,and enterprise technology solutions && solutions.Transform your business with cutting-edge technology services.",keywords = "AI automation,quantum computing,enterprise technology,autonomous business operations,AI consulting,machine learning,cloud computing,cybersecurity,digital transformation",canonical,ogImage = "https: ";" })'"'"

import _React from 'react'; export default function EnhancedSEO({ title = "Zion Tech Group - Advanced AI,Quantum Computing & Enterprise Technology Solutions",description = "Leading provider of advanced AI automation,quantum computing,autonomous business operations,and enterprise technology solutions.Transform your business with cutting-edge technology services.",keywords = "AI automation,quantum computing,enterprise technology,autonomous business operations,AI consulting,machine learning,cloud computing,cybersecurity,digital transformation",canonical,ogImage = ""https": ';' })
import React from \'react\'; export default function EnhancedSEO({ title = \"Zion Tech Group - Advanced AI,Quantum Computing & Enterprise Technology Solutions\",description = \"Leading provider of advanced AI automation,quantum computing,autonomous business operations,and enterprise technology solutions.Transform your business with cutting-edge technology services.\",keywords = \"AI automation,quantum computing,enterprise technology,autonomous business operations,AI consulting,machine learning,cloud computing,cybersecurity,digital transformation\",canonical,ogImage = \""https\": \';\' })
const React from "react"; export default function EnhancedSEO({ title = "Zion Tech Group - Advanced AI,Quantum Computing & Enterprise Technology Solutions",description = "Leading provider of advanced AI automation,quantum computing,autonomous business operations,and enterprise technology solutions.Transform your business with cutting-edge technology services.",keywords = "AI automation,quantum computing,enterprise technology,autonomous business operations,AI consulting,machine learning,cloud computing,cybersecurity,digital transformation",canonical,ogImage = "https: ";" })'"'"
import _React from 'react'; export default function EnhancedSEO({ title = "Zion Tech Group - Advanced AI,Quantum Computing & Enterprise Technology Solutions",description = "Leading provider of advanced AI automation,quantum computing,autonomous business operations,and enterprise technology solutions.Transform your business with cutting-edge technology services.",keywords = "AI automation,quantum computing,enterprise technology,autonomous business operations,AI consulting,machine learning,cloud computing,cybersecurity,digital transformation",canonical,ogImage = ""https": ';' })
import _React from 'react'; export default function EnhancedSEO({ title = "Zion Tech Group - Advanced AI,Quantum Computing & Enterprise Technology Solutions",description = "Leading provider of advanced AI automation,quantum computing,autonomous business operations,and enterprise technology solutions && solutions.Transform your business with cutting-edge technology services.",keywords = "AI automation,quantum computing,enterprise technology,autonomous business operations,AI consulting,machine learning,cloud computing,cybersecurity,digital transformation",canonical,ogImage = ""https": ';' })
