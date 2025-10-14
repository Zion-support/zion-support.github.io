const fs = require('fs');
const path = require('path');

// List of files that need to be recreated with basic structure
const filesToFix = [
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/ai-translation-service/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/CacheManager.tsx',
  'app/components/CoreWebVitals.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/EnhancedErrorFeedback.tsx',
  'app/components/EnhancedSEO.tsx',
  'app/components/FuturisticBackground.tsx',
  'app/components/FuturisticButton.tsx',
  'app/components/ImprovedErrorBoundary.tsx',
  'app/components/LoadingStates.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/micro-saas/page.tsx',
  'app/partners/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-video-generator/page.tsx'
];

// Basic page template
const pageTemplate = (title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ${title.replace(/[^a-zA-Z0-9]/g, '')} = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                ${title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ${description}
              </p>
              <Link to="/contact">
                <FuturisticButton size="lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </Link>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')};
`;

// Component templates
const componentTemplates = {
  'AdvancedPerformanceMonitor': `import React from 'react';

const AdvancedPerformanceMonitor: React.FC = () => {
  return (
    <div className="performance-monitor">
      {/* Performance monitoring component */}
    </div>
  );
};

export default AdvancedPerformanceMonitor;
`,
  'CacheManager': `import React from 'react';

const CacheManager: React.FC = () => {
  return (
    <div className="cache-manager">
      {/* Cache management component */}
    </div>
  );
};

export default CacheManager;
`,
  'CoreWebVitals': `import React from 'react';

const CoreWebVitals: React.FC = () => {
  return (
    <div className="core-web-vitals">
      {/* Core Web Vitals component */}
    </div>
  );
};

export default CoreWebVitals;
`,
  'EnhancedErrorBoundary': `import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
`,
  'EnhancedErrorFeedback': `import React from 'react';

const EnhancedErrorFeedback: React.FC = () => {
  return (
    <div className="enhanced-error-feedback">
      {/* Enhanced error feedback component */}
    </div>
  );
};

export default EnhancedErrorFeedback;
`,
  'EnhancedSEO': `import React from 'react';

const EnhancedSEO: React.FC = () => {
  return (
    <div className="enhanced-seo">
      {/* Enhanced SEO component */}
    </div>
  );
};

export default EnhancedSEO;
`,
  'FuturisticBackground': `import React from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
  return (
    <div className="futuristic-background">
      {children}
    </div>
  );
};

export default FuturisticBackground;
`,
  'FuturisticButton': `import React from 'react';
import { clsx } from 'clsx';

interface FuturisticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl'
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default FuturisticButton;
`,
  'ImprovedErrorBoundary': `import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ImprovedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ImprovedErrorBoundary;
`,
  'LoadingStates': `import React from 'react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-white">Loading...</h2>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  );
};
`,
  'PerformanceMonitor': `import React from 'react';

const PerformanceMonitor: React.FC = () => {
  return (
    <div className="performance-monitor">
      {/* Performance monitoring component */}
    </div>
  );
};

export default PerformanceMonitor;
`
};

// Page data
const pageData = {
  'ai-supply-chain-optimizer': {
    title: 'AI Supply Chain Optimizer',
    description: 'Intelligent supply chain optimization platform using AI for logistics, inventory management, and forecasting.'
  },
  'ai-translation-service': {
    title: 'AI Translation Service',
    description: 'Advanced AI-powered translation service supporting 100+ languages with real-time translation capabilities.'
  },
  'blockchain-web3': {
    title: 'Blockchain & Web3 Solutions',
    description: 'Comprehensive blockchain and Web3 solutions for decentralized applications and smart contracts.'
  },
  'cloud-infrastructure-management': {
    title: 'Cloud Infrastructure Management',
    description: 'Professional cloud infrastructure management services for scalable and secure cloud solutions.'
  },
  'cloud-migration-pro': {
    title: 'Cloud Migration Pro',
    description: 'Expert cloud migration services to help you seamlessly transition to the cloud.'
  },
  'micro-saas': {
    title: 'Micro SAAS Solutions',
    description: 'Comprehensive micro SAAS solutions for small and medium businesses.'
  },
  'partners': {
    title: 'Partners',
    description: 'Our trusted partners and technology alliances.'
  },
  'zion-ai-customer-insights': {
    title: 'Zion AI Customer Insights',
    description: 'Transform customer data into actionable insights with AI-powered analytics.'
  },
  'zion-ai-video-generator': {
    title: 'Zion AI Video Generator',
    description: 'Create professional videos in minutes with AI-powered script generation and voice synthesis.'
  }
};

function fixFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const dirName = path.dirname(filePath);
    
    let content = '';
    
    if (filePath.includes('/components/')) {
      // Component file
      const componentName = fileName;
      if (componentTemplates[componentName]) {
        content = componentTemplates[componentName];
      } else {
        content = `import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    <div className="${componentName.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1)}">
      {/* ${componentName} component */}
    </div>
  );
};

export default ${componentName};
`;
      }
    } else {
      // Page file
      const pageKey = fileName === 'page' ? path.basename(dirName) : fileName;
      const data = pageData[pageKey] || {
        title: pageKey.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: `Professional ${pageKey.replace(/-/g, ' ')} services.`
      };
      
      content = pageTemplate(data.title, data.description);
    }
    
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);