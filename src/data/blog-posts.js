export const blogPosts = [
  {
    id: 'ai-2025-enterprise-ai-security-blueprint',
    title: 'Enterprise AI Security Blueprint (2025)',
    description: 'Layered controls for model, data, runtime, and supply chain risk in enterprise AI systems.',
    content: 'A practical blueprint for establishing layered controls across model, data, runtime, and supply chain to secure enterprise AI systems while maintaining developer velocity and business impact.',
    author: 'Zion Tech Group',
    publishedAt: '2025-01-15',
    category: 'Security',
    tags: ['AI Security', 'Enterprise', 'Blueprint', '2025'],
    slug: 'ai-2025-enterprise-ai-security-blueprint'
  },
  {
    id: 'ai-2026-future-predictions-revolutionary-breakthrough-ultimate-guide',
    title: 'AI 2026 Future Predictions: Revolutionary Breakthrough Ultimate Guide',
    description: 'Discover the revolutionary AI breakthroughs and future predictions for 2026.',
    content: 'Explore quantum AI, autonomous systems, and transformative business applications that will shape the future of artificial intelligence.',
    author: 'Zion Tech Group',
    publishedAt: '2026-01-15',
    category: 'AI Predictions',
    tags: ['AI 2026', 'Future Predictions', 'Quantum AI', 'Autonomous Systems'],
    slug: 'ai-2026-future-predictions-revolutionary-breakthrough-ultimate-guide'
  }
];

export const getBlogPost = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPosts = () => {
  return blogPosts;
};