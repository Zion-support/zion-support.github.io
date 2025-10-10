#!/usr/bin/env node

import fs from 'fs';

// Fix specific files with known issues
const filesToFix = [
  '/workspace/app/ai-analytics/page.tsx',
  '/workspace/app/blog/page.tsx',
  '/workspace/app/careers/page.tsx',
  '/workspace/app/case-studies/page.tsx',
  '/workspace/app/partners/page.tsx',
  '/workspace/app/support/page.tsx',
  '/workspace/app/micro-saas/page.tsx',
  '/workspace/app/pricing/page.tsx'
];

function fixAiAnalyticsPage(content) {
  // Fix the malformed object literal around line 33
  return content.replace(
    /benefits: \['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'\]\s*title: 'Real-Time Dashboards',/g,
    "benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']\n    },\n    {\n      icon: Globe,\n      title: 'Real-Time Dashboards',"
  );
}

function fixBlogPage(content) {
  // Fix the malformed object around line 171
  return content.replace(
    /const displayPosts = searchQuery \? searchResults : blogPosts;\s*excerpt: 'Exploring how artificial intelligence is transforming enterprise operations and driving innovation across industries\.',/g,
    "const displayPosts = searchQuery ? searchResults : blogPosts;\n\n  const blogPosts = [\n    {\n      id: '1',\n      title: 'The Future of AI in Enterprise Solutions',\n      excerpt: 'Exploring how artificial intelligence is transforming enterprise operations and driving innovation across industries.',"
  );
}

function fixCareersPage(content) {
  // Fix missing interface definition
  return content.replace(
    /const CareersPage: React\.FC = \(\) => {/,
    `interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits?: string[];
  posted?: string;
  featured?: boolean;
}

const CareersPage: React.FC = () => {`
  );
}

function fixCaseStudiesPage(content) {
  // Fix missing interface definition
  return content.replace(
    /const CaseStudiesPage: React\.FC = \(\) => {/,
    `interface CaseStudy {
  id: string | number;
  title: string;
  client?: string;
  company?: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration?: string;
  team?: string;
}

const CaseStudiesPage: React.FC = () => {`
  );
}

function fixPartnersPage(content) {
  // Fix missing interface definition
  return content.replace(
    /const PartnersPage: React\.FC = \(\) => {/,
    `interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  featured?: boolean;
}

const PartnersPage: React.FC = () => {`
  );
}

function fixSupportPage(content) {
  // Fix missing interface definition
  return content.replace(
    /const SupportPage: React\.FC = \(\) => {/,
    `interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {`
  );
}

function fixMicroSaasPage(content) {
  // Fix missing interface definition
  return content.replace(
    /const MicroSaasPage: React\.FC = \(\) => {/,
    `interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  icon: any;
}

const MicroSaasPage: React.FC = () => {`
  );
}

function fixPricingPage(content) {
  // Fix missing interface definition
  return content.replace(
    /const PricingPage: React\.FC = \(\) => {/,
    `interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: string;
}

const PricingPage: React.FC = () => {`
  );
}

const fixers = {
  '/workspace/app/ai-analytics/page.tsx': fixAiAnalyticsPage,
  '/workspace/app/blog/page.tsx': fixBlogPage,
  '/workspace/app/careers/page.tsx': fixCareersPage,
  '/workspace/app/case-studies/page.tsx': fixCaseStudiesPage,
  '/workspace/app/partners/page.tsx': fixPartnersPage,
  '/workspace/app/support/page.tsx': fixSupportPage,
  '/workspace/app/micro-saas/page.tsx': fixMicroSaasPage,
  '/workspace/app/pricing/page.tsx': fixPricingPage
};

function fixFile(filePath) {
  try {

    const content = fs.readFileSync(filePath, 'utf8');
    const fixer = fixers[filePath];
    if (fixer) {
      const fixed = fixer(content);
      fs.writeFileSync(filePath, fixed);

    } else {

    }
  } catch (error) {

  }
}

// Fix all files
filesToFix.forEach(fixFile);
