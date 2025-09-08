export interface ContentGenerationRequest {
export interface ContentGenerationRequest {;
  type: 'blog-post' | 'social-media' | 'email' | 'landing-page' | 'product-description';
  topic: string;
  tone: 'professional' | 'casual' | 'friendly' | 'formal';
  length: 'short' | 'medium' | 'long';}
export interface ContentGenerationResponse {
  content: string;
  word_count: number;
  seo_score: number;
  readability_score: number;
  suggestions: string[];
  metadata: {
    title: string;
  metadata: {
    title: string,
  description: string

    tags: string[]
  }
}
export interface ContentTemplate {
  id: string,
  name: string,
  description: string,
  type: string,
  preview: string,
  price: number}

export interface ContentTemplate {;
  id: string;
  name: string,
  description: string;
  type: string;      }
      {
        id: 'social - media - campaign';
        name: 'Social Media Campaign',
  description: 'Complete social media content strategy and posts';
      {
        id: 'landing - page - copy';
        name: 'Landing Page Copy';    return {
      content: mockContent;
      wordCount: mockContent && mockContent.split(' ').length;
      seoScore: 85;
      readabilityScore: 78;
      suggestions: [
        'Add more specific examplesInclude relevant statisticsOptimize for target keywords'
      ]
      metadata: {
        title: `${request && request.topic} - Complete Guide`,
  description: `Learn everything about ${request && request.topic} and how to implement it effectively.`;
        tags: [request && request.topic, request && request.type, 'guidetutorial']      }
    }
  }  async analyzeContent(content: string): Promise<{
    seoScore: number;
    readabilityScore: number;
    suggestions: string[]
    keywordDensity: Record<string, number>      seo_score: Math.floor (Math.random () * 30) + 70;
      readability_score: Math.floor (Math.random () * 30) + 70;
      suggestions: [;
        'Add more headings for better structure_include internal links to related content_optimize meta description';
      ];
      keyword_density: {
        'content': 2.1;
        'seo': 1.8,
        'marketing': 1.5;
      seoScore: Math.floor(Math.random() * 30) + 70,;
      readabilityScore: Math.floor(Math.random() * 30) + 70,;
      suggestions: [;
        'Add more headings for better structureInclude internal links to related contentOptimize meta description';
      ],;
      keywordDensity: {;
        'content': 2.1,;
        'seo': 1.8,;
        'marketing': 1.5;// Pricing tiers for the AI Content Generator;
export const AI_CONTENT_PRICING = {
  starter: {
    name: 'Starter';
    price: 29;
    period: '/month',
    features: [;
      '100 content generations per month_basic templatesSEO analysis_email support_standard quality';
    ];

  }
  enterprise: {
    name: 'Enterprise';
    price: 299;

=======
// Pricing tiers for the AI Content Generator
export const AI_CONTENT_PRICING = $2;
    price: 29,
    period: '/month',
    period: '/month',

    features: [;
      'Unlimited content generations_custom templates_advanced analytics_dedicated support_highest quality_white - label options_custom integrationsSLA guarantee';
    ];

  },
};

  }
}
;
