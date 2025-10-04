// Auto-generated marketing and features index
// Generated: 2025-08-18T17:01:21.308Z

export const marketingPages = [
  {
    name: 'index.tsx',
    path: 'automation/index.tsx',
    size: 10139,
    hasMarketing: true,
  },
  {
    name: 'index.tsx',
    path: 'blog/index.tsx',
    size: 12996,
    hasMarketing: true,
  },
  {
    name: 'component-library.tsx',
    path: 'component-library.tsx',
    size: 4349,
    hasMarketing: true,
  },
  {
    name: 'modal-demo.tsx',
    path: 'components/modal-demo.tsx',
    size: 909,
    hasMarketing: true,
  },
  {
    name: 'content-hub.tsx',
    path: 'content-hub.tsx',
    size: 6981,
    hasMarketing: true,
  },
  {
    name: 'enhanced-navigation.tsx',
    path: 'enhanced-navigation.tsx',
    size: 9992,
    hasMarketing: true,
  },
  {
    name: 'index.tsx',
    path: 'events/index.tsx',
    size: 16105,
    hasMarketing: true,
  },
  {
    name: 'index.tsx',
    path: 'explore/index.tsx',
    size: 10959,
    hasMarketing: true,
  },
  {
    name: 'index.tsx',
    path: 'index.tsx',
    size: 10277,
    hasMarketing: true,
  },
  {
    name: 'landing.tsx',
    path: 'landing.tsx',
    size: 9357,
    hasMarketing: true,
  },
  {
    name: 'index.tsx',
    path: 'main/front/index.tsx',
    size: 24185,
    hasMarketing: true,
  },
  {
    name: 'index.tsx',
    path: 'news/index.tsx',
    size: 14314,
    hasMarketing: true,
  },
  {
    name: 'newsroom.tsx',
    path: 'newsroom.tsx',
    size: 9420,
    hasMarketing: true,
  },
  {
    name: 'privacy.tsx',
    path: 'privacy.tsx',
    size: 17123,
    hasMarketing: true,
  },
];

export const featureComponents = [
  {
    name: 'Header.tsx',
    path: 'Header.tsx',
    size: 3567,
    hasFeatures: true,
  },
];

export function getMarketingPage(name: string) {
  return marketingPages.find(p => p.name === name);
}

export function getFeatureComponent(name: string) {
  return featureComponents.find(c => c.name === name);
}

export function getAllMarketingContent() {
  return {
    pages: marketingPages,
    components: featureComponents,
    totalPages: marketingPages.length,
    totalComponents: featureComponents.length,
  };
}
