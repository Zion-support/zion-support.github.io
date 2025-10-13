#!/bin/bash

# Fix ai-chatbot-builder/page.tsx
cat > /workspace/app/ai-chatbot-builder/page.tsx << 'EOL'
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiChatbotBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI chatbot builder solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create intelligent chatbots that understand and respond to your customers naturally.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
              <p className="text-gray-600">
                Advanced NLP capabilities for natural conversations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-channel Support</h3>
              <p className="text-gray-600">
                Deploy across web, mobile, and messaging platforms.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Training</h3>
              <p className="text-gray-600">
                Train your chatbot with your specific business knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EOL

# Fix components/ImageOptimizer.tsx
cat > /workspace/app/components/ImageOptimizer.tsx << 'EOL'
import React from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  placeholder?: string;
}

export default function ImageOptimizer({
  src,
  alt,
  className = '',
  lazy = true,
  quality = 80,
  format = 'webp',
  placeholder
}: ImageOptimizerProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
}
EOL

# Fix pricing/page.tsx
cat > /workspace/app/pricing/page.tsx << 'EOL'
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Competitive pricing for AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your business needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$99/month</p>
              <ul className="text-gray-600 space-y-2">
                <li>Basic AI features</li>
                <li>Email support</li>
                <li>5GB storage</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$299/month</p>
              <ul className="text-gray-600 space-y-2">
                <li>Advanced AI features</li>
                <li>Priority support</li>
                <li>50GB storage</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
              <ul className="text-gray-600 space-y-2">
                <li>Full AI suite</li>
                <li>24/7 support</li>
                <li>Unlimited storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EOL

# Fix utils/accessibilityEnhancer.ts
cat > /workspace/app/utils/accessibilityEnhancer.ts << 'EOL'
interface AccessibilityConfig {
  enabled: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enabled: true,
      highContrast: false,
      fontSize: 'medium',
      screenReader: false,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('Accessibility enhancer initialized');
      this.applyAccessibilityFeatures();
    }
  }

  private applyAccessibilityFeatures(): void {
    if (this.config.highContrast) {
      document.body.classList.add('high-contrast');
    }
    
    if (this.config.fontSize !== 'medium') {
      document.body.classList.add(`font-size-${this.config.fontSize}`);
    }
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();
export default accessibilityEnhancer;
EOL

# Fix utils/cn.ts
cat > /workspace/utils/cn.ts << 'EOL'
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
EOL

echo "Fixed corrupted files successfully"
