#!/bin/bash

# List of remaining missing pages
pages=(
  "zion-smart-inventory-optimizer"
  "zion-smart-expense-categorizer"
)

# Create directories and basic page files
for page in "${pages[@]}"; do
  mkdir -p "/workspace/app/$page"
  
  # Create a basic page.tsx file
  cat > "/workspace/app/$page/page.tsx" << PAGE_EOF
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, Sparkles } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ${page^}Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="${page^} - AI-Powered Business Solution | Zion Tech Group"
        description="AI-powered ${page} solution for modern businesses."
        keywords="AI solution, business automation, ${page}"
        canonical="https://ziontechgroup.com/${page}"
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Business Solution</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              ${page^}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            AI-powered ${page} solution for modern businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Contact Sales
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ${page^}Page;
PAGE_EOF

  echo "Created $page"
done

echo "All remaining pages created successfully!"
