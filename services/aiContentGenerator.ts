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
        'marketing': 1.5;// Pricing tiers for the AI Content Generator;
;
