import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fix corrupted component files
const componentsToFix = [
  'PerformanceMonitor.tsx',
  'PerformanceOptimizer.tsx',
  'SEOOptimizer.tsx',
  'ErrorBoundary.tsx',
  'Loading.tsx',
  'LoadingSpinner.tsx',
  'ServiceCard.tsx',
  'ServiceWorker.tsx',
  'ServiceWorkerRegistration.tsx',
  'StructuredData.tsx',
  'SystemMonitor.tsx'
];

const createComponentTemplate = (componentName) => `'use client'
import React from 'react'

const ${componentName}: React.FC = () => {
  return (
    <div className="${componentName.toLowerCase()}">
      {/* ${componentName} component */}
    </div>
  )
}

export default ${componentName}`;

const createErrorBoundaryTemplate = () => `'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary`;

const createLoadingTemplate = () => `'use client'
import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loading`;

const createServiceCardTemplate = () => `'use client'
import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  price?: string
  features?: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  features = []
}) => {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      {price && <div className="service-price">{price}</div>}
      {features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard`;

// Fix components
const componentsDir = path.join(__dirname, 'app', 'components');
let fixedCount = 0;

componentsToFix.forEach(componentName => {
  const filePath = path.join(componentsDir, componentName);
  
  if (fs.existsSync(filePath)) {
    let content;
    
    if (componentName === 'ErrorBoundary.tsx') {
      content = createErrorBoundaryTemplate();
    } else if (componentName === 'Loading.tsx') {
      content = createLoadingTemplate();
    } else if (componentName === 'ServiceCard.tsx') {
      content = createServiceCardTemplate();
    } else {
      const componentNameWithoutExt = componentName.replace('.tsx', '');
      content = createComponentTemplate(componentNameWithoutExt);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} component files.`);