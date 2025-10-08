#!/usr/bin/env python3
"""
Fix all problematic component files
"""
import os

COMPONENTS = {
    '/workspace/app/components/ContentShowcase.tsx': '''import React from 'react';

export const ContentShowcase: React.FC = () => {
  return (
    <div className="content-showcase py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Content</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">AI Solutions</h3>
            <p className="text-gray-600">Transform your business with cutting-edge AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;
''',
    
    '/workspace/app/components/ErrorBoundary.tsx': '''import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
''',

    '/workspace/app/components/InteractiveAIROICalculator.tsx': '''import React, { useState } from 'react';

export const InteractiveAIROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(10000);
  const [roi, setRoi] = useState(0);

  const calculateROI = () => {
    setRoi(investment * 0.3);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">AI ROI Calculator</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <label className="block mb-4">
            <span className="text-gray-700">Investment Amount:</span>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Calculate ROI
          </button>
          <div className="mt-4 text-center">
            <p className="text-2xl font-bold text-green-600">${roi.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIROICalculator;
''',

    '/workspace/app/components/InteractiveContentShowcase2026.tsx': '''import React from 'react';

export const InteractiveContentShowcase2026: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Interactive Content Showcase 2026
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">AI Innovation</h3>
            <p>Discover the latest in AI technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;
''',

    '/workspace/app/components/LoadingSpinner.tsx': '''import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );
};

export default LoadingSpinner;
''',

    '/workspace/app/components/NewestContent2025Banner.tsx': '''import React from 'react';

export const NewestContent2025Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Newest Content 2025</h2>
        <p className="text-xl mb-6">
          Explore our latest innovations and solutions
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default NewestContent2025Banner;
''',

    '/workspace/app/components/SEOOptimizer.tsx': '''import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group',
  description = 'Advanced AI and IT Solutions',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEOOptimizer;
''',

    '/workspace/app/components/UltimateBusinessIntelligence2025Banner.tsx': '''import React from 'react';

export const UltimateBusinessIntelligence2025Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ultimate Business Intelligence 2025
          </h2>
          <p className="text-xl mb-8">
            Transform your data into actionable insights
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;
''',

    '/workspace/app/components/UnifiedContentPromotion.tsx': '''import React from 'react';

export const UnifiedContentPromotion: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
        <p className="text-xl">
          Discover how AI can transform your business
        </p>
      </div>
    </div>
  );
};

export default UnifiedContentPromotion;
''',
}


def main():
    print("=" * 70)
    print("FIXING COMPONENT FILES")
    print("=" * 70)
    print()
    
    for filepath, content in COMPONENTS.items():
        try:
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            with open(filepath, 'w') as f:
                f.write(content)
            rel_path = os.path.relpath(filepath, '/workspace')
            print(f"✓ Created/fixed {rel_path}")
        except Exception as e:
            print(f"✗ Error fixing {filepath}: {e}")
    
    print()
    print("=" * 70)
    print("DONE!")
    print("=" * 70)


if __name__ == '__main__':
    main()