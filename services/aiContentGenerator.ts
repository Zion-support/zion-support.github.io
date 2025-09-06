export interface ContentGenerationRequest {
  type: 'blog-post' | 'social-media' | 'email' | 'landing-page' | 'product-description';
  topic: string;
  tone: 'professional' | 'casual' | 'friendly' | 'formal';
  length: 'short' | 'medium' | 'long';

  keywords?: string[];

  targetAudience?: string
}

export interface ContentGenerationResponse {
  content: string;
  wordCount: number;
  seoScore: number;
  readabilityScore: number;
  suggestions: string[];
  metadata: {
    title: string;

    description: string;

    tags: string[]
  }
}

export interface ContentTemplate {
  id: string;
  name: string;
  description: string;
  type: string;

  preview: string;

  price: number
}

export class AIContentGeneratorService {
  private apiKey: string;

  private baseUrl: string;
  constructor(apiKey: string, baseUrl: string;

