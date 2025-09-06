<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ContentGenerationRequest {
export interface ContentGenerationRequest {;
  type: 'blog-post' | 'social-media' | 'email' | 'landing-page' | 'product-description';
  topic: string;
  tone: 'professional' | 'casual' | 'friendly' | 'formal';
  length: 'short' | 'medium' | 'long';
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  keywords?: string[],
  target_audience?: string;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ContentGenerationRequest {
  type: 'blog - post' | 'social - media' | 'email' | 'landing - page' | 'product - description';
  topic: string;
  tone: 'professional' | 'casual' | 'friendly' | 'formal';
  length: 'short' | 'medium' | 'long';
<<<<<<< HEAD
  keywords?: string[],
  target_audience?: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
export interface ContentGenerationResponse {
  content: string;
  word_count: number;
  seo_score: number;
  readability_score: number;
  suggestions: string[];
  metadata: {
    title: string;
<<<<<<< HEAD
<<<<<<< HEAD

    description: string,
    tags: string[];

  }
}
export interface ContentTemplate {
=======
    description: string,
    tags: string[];
  }
}
export interface ContentTemplate {

  keywords?: string[]

  targetAudience?: string
}
export interface ContentGenerationResponse {

export interface ContentGenerationResponse {;
  content: string;
  wordCount: number;
  seoScore: number;
  readabilityScore: number;
  suggestions: string[];
  metadata: {
    title: string;

    description: string

    tags: string[]
  }
}
export interface ContentTemplate {

export interface ContentTemplate {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  name: string;
  description: string;
  type: string;
<<<<<<< HEAD

<<<<<<< HEAD
  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontech.ai') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

=======
  preview: string

  price: number
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export class AIContentGeneratorService {

export class AIContentGeneratorService {;
  private apiKey: string;

  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
<<<<<<< HEAD
  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontech.ai') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  async generateContent(request: ContentGenerationRequest): Promise<ContentGenerationResponse> {
    try {
      // In a real implementation, this would call OpenAI, Claude, or similar API
<<<<<<< HEAD
<<<<<<< HEAD
=======
      const response = await fetch(`${this.baseUrl}/content/generate`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)});
      if (!response.ok) {
        throw new Error(`Content generation failed: ${response.statusText}`)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ContentGenerationRequest {;
  type: 'blog-post' | 'social-media' | 'email' | 'landing-page' | 'product-description',;
  topic: string,;
  tone: 'professional' | 'casual' | 'friendly' | 'formal',;
  length: 'short' | 'medium' | 'long',;
  keywords?: string[],;
  targetAudience?: string;
}
;
export interface ContentGenerationResponse {;
  content: string,;
  wordCount: number,;
  seoScore: number,;
  readabilityScore: number,;
  suggestions: string[],;
  metadata: {;
    title: string,;
    description: string,;
    tags: string[];
  }
}
;
export interface ContentTemplate {;
  id: string,;
  name: string,;
  description: string,;
  type: string,;
  preview: string,;
  price: number;
}
;
export class AIContentGeneratorService {;
  private apiKey: string,;
  private baseUrl: string,;
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {;
    this.apiKey = apiKey,;
    this.baseUrl = baseUrl;
  }
;
  async generateContent(request: ContentGenerationRequest): Promise<ContentGenerationResponse> {;
    try {;
      // In a real implementation, this would call OpenAI, Claude, or similar API;
      const response = await fetch(`${this.baseUrl}/content/generate`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify(request)}),;
      if (!response.ok) {;
        throw new Error(`Content generation failed: ${response.statusText}`);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export interface ContentGenerationRequest {;


      }
      return await response.json()
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      const response = await fetch(`${this && this.baseUrl}/content/generate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});

      if (!response && response.ok) {
        throw new Error(`Content generation failed: ${response && response.statusText}`)
      }

      return await response && response.json()
    } catch (error) {
      // Fallback to mock data for demo purposes
      return this && this.generateMockContent(request)
    }
  }





  async getTemplates(): Promise<ContentTemplate[]> {
    return [
  preview: string,
  price: number;
}
export class AIContentGeneratorService {
  private api_key: string;
  private base_url: string,
  constructor (api_key: string, base_url: string = 'https://api.ziontech.ai') {
    this.api_key = api_key,
    this.base_url = base_url;
  }
  async generate_content (request: ContentGenerationRequest): Promise < ContentGenerationResponse> {
    try {
      // In a real implementation, this would call OpenAI, Claude, or similar API;
      const response = await fetch (`${this.base_url}/content / generate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify (request)});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Content generation failed: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      // Fallback to mock data for demo purposes;
      return this.generateMockContent (request);
    }
  }
  async get_templates (): Promise < ContentTemplate[]> {
    return [;
      {
        id: 'blog - post - starter';
        name: 'Blog Post Starter';
        description: 'Professional blog post template with SEO optimization';
<<<<<<< HEAD
<<<<<<< HEAD

        type: 'blog - post';
        preview: 'Create engaging blog posts that rank well in search engines...',
        price: 29;

=======
        type: 'blog - post';
        preview: 'Create engaging blog posts that rank well in search engines...',
        price: 29;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
      {
        id: 'social - media - campaign';
        name: 'Social Media Campaign';
        description: 'Complete social media content strategy and posts';
<<<<<<< HEAD
<<<<<<< HEAD

        type: 'social - media';
        preview: 'Engage your audience with compelling social media content...',
        price: 49;

=======
        type: 'social - media';
        preview: 'Engage your audience with compelling social media content...',
        price: 49;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
      {
        id: 'email - sequence';
        name: 'Email Sequence';
        description: 'Convert prospects with persuasive email sequences';
        type: 'email';
<<<<<<< HEAD
<<<<<<< HEAD

        preview: 'Build relationships and drive sales with email automation...',
        price: 39;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        preview: 'Build relationships and drive sales with email automation...',
        price: 39;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
      {
        id: 'landing - page - copy';
        name: 'Landing Page Copy';
        price: 59;
      }
    ];
  }
  private generateMockContent(request: ContentGenerationRequest): ContentGenerationResponse {
    const mockContent = `# ${request.topic}
      }
    ];
  }





<<<<<<< HEAD
<<<<<<< HEAD
=======
      }
    ]
  }
  private generateMockContent(request: ContentGenerationRequest): ContentGenerationResponse {
    const mockContent = `# ${request.topic}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
This is a ${request.length} ${request.type} about ${request.topic}. The content is written in a ${request.tone} tone to engage the target audience.
## Key Points
- Point 1: ${request.topic} is essential for modern businesses
- Point 2: Implementing ${request.topic} can improve efficiency
- Point 3: Best practices for ${request.topic} implementation
## Conclusion
${request.topic} represents a significant opportunity for organizations looking to stay competitive in today's digital landscape.`;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const mockContent = `# ${request && request.topic}
    return {
      content: mockContent;
      wordCount: mockContent && mockContent.split(' ').length;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return {
      content: mockContent;
      wordCount: mockContent.split(' ').length;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      seoScore: 85;
      readabilityScore: 78;
      suggestions: [
        'Add more specific examplesInclude relevant statisticsOptimize for target keywords'
      ]
      metadata: {
<<<<<<< HEAD
<<<<<<< HEAD
        title: `${request && request.topic} - Complete Guide`;
        description: `Learn everything about ${request && request.topic} and how to implement it effectively.`;
        tags: [request && request.topic, request && request.type, 'guidetutorial']
=======
export interface ContentGenerationRequest {;
  type:'blog-post' | 'social-media' | 'email' | 'landing-page' | 'product-description',;
  topic:string,;
  tone:'professional' | 'casual' | 'friendly' | 'formal',;
  length:'short' | 'medium' | 'long',;
  keywords?:string[],;
  targetAudience?:string;
}
;
export interface ContentGenerationResponse {;
  content:string,;
  wordCount:number,;
  seoScore:number,;
  readabilityScore:number,;
  suggestions:string[],;
  metadata:{;
    title:string,;
    description:string,;
    tags:string[];
  },;}
;
export interface ContentTemplate {;
  id:string,;
  name:string,;
  description:string,;
  type:string,;
  preview:string,;
  price:number;
}
;
export class AIContentGeneratorService {;
  private apiKey:string,;
  private baseUrl:string,;
;
  constructor(apiKey:string, baseUrl:string = 'https://api.ziontech.ai') {;
    this.apiKey = apiKey,;
    this.baseUrl = baseUrl;
  }
;
  async generateContent(request:ContentGenerationRequest):Promise<ContentGenerationResponse> {;
    try {;
      // In a real implementation, this would call OpenAI, Claude, or similar API;
      const response = await fetch(`${this.baseUrl}/content/generate`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify(request)}),;
;
      if (!response.ok) {;
        throw new Error(`Content generation failed:${response.statusText}`),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }
    }
  }
<<<<<<< HEAD
=======
;
  async getTemplates():Promise<ContentTemplate[]> {;
    return [;
      {;
        id:'blog-post-starter',;
        name:'Blog Post Starter',;
        description:'Professional blog post template with SEO optimization',;
        type:'blog-post',;
        preview:'Create engaging blog posts that rank well in search engines...',;
        price:29;
      },;
      {;
        id:'social-media-campaign',;
        name:'Social Media Campaign',;
        description:'Complete social media content strategy and posts',;
        type:'social-media',;
        preview:'Engage your audience with compelling social media content...',;
        price:49;
      },;
      {;
        id:'email-sequence',;
        name:'Email Sequence',;
        description:'Convert prospects with persuasive email sequences',;
        type:'email',;
        preview:'Build relationships and drive sales with email automation...',;
        price:39;
      },;
      {;
        id:'landing-page-copy',;
        name:'Landing Page Copy',;
        description:'High-converting landing page content',;
        type:'landing-page',;
        preview:'Turn visitors into customers with compelling copy...',;
        price:59;
      }
    ],;
  }
;
  private generateMockContent(request:ContentGenerationRequest):ContentGenerationResponse {;
    const mockContent = `# ${request.topic}
;
This is a ${request.length} ${request.type} about ${request.topic}. The content is written in a ${request.tone} tone to engage the target audience.;
;
## Key Points;
;
- Point 1:${request.topic} is essential for modern businesses;
- Point 2:Implementing ${request.topic} can improve efficiency;
- Point 3:Best practices for ${request.topic} implementation;
;
## Conclusion;
;
${request.topic} represents a significant opportunity for organizations looking to stay competitive in today's digital landscape.`,;
;
    return {;
      content:mockContent,;
      wordCount:mockContent.split(' ').length,;
      seoScore:85,;
      readabilityScore:78,;
      suggestions:[;
        'Add more specific examplesInclude relevant statistics',;
        'Optimize for target keywords';
      ],;
      metadata:{;
        title:`${request.topic} - Complete Guide`,;
        description:`Learn everything about ${request.topic} and how to implement it effectively.`,;
        tags:[request.topic, request.type, 'guidetutorial'];
      }
    },;
  }
        title: `${request.topic} - Complete Guide`;
        description: `Learn everything about ${request.topic} and how to implement it effectively.`;
        tags: [request.topic, request.type, 'guidetutorial']
      }
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      }
    }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  async analyzeContent(content: string): Promise<{
    seoScore: number;
    readabilityScore: number;
    suggestions: string[]
    keywordDensity: Record<string, number>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  private generateMockContent (request: ContentGenerationRequest): ContentGenerationResponse {
    const mock_content = `# ${request.topic}
=======
  }> {
    // Mock content analysis
    return {
      seoScore: Math.floor(Math.random() * 30) + 70;
      readabilityScore: Math.floor(Math.random() * 30) + 70;
      suggestions: [
        'Add more headings for better structureInclude internal links to related contentOptimize meta description'
      ];
      keywordDensity: {
        'content': 2.1;
        'seo': 1.8
        'marketing': 1.5
  private generateMockContent (request: ContentGenerationRequest): ContentGenerationResponse {
    const mock_content = `# ${request.topic}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
This is a ${request.length} ${request.type} about ${request.topic}. The content is written in a ${request.tone} tone to engage the target audience.;
## Key Points;
- Point 1: ${request.topic} is essential for modern businesses;
- Point 2: Implementing ${request.topic} can improve efficiency;
- Point 3: Best practices for ${request.topic} implementation;
## Conclusion;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
${request.topic} represents a significant opportunity for organizations looking to stay competitive in today's digital landscape.`;
;
    return {
      content: mock_content;
      word_count: mock_content.split (' ').length;
      seo_score: 85;
      readability_score: 78;
      suggestions: [;
        'Add more specific examples_include relevant statistics_optimize for target keywords';
      ],
      metadata: {
        title: `${request.topic} - Complete Guide`;
        description: `Learn everything about ${request.topic} and how to implement it effectively.`;
<<<<<<< HEAD
=======
${request.topic} represents a significant opportunity for organizations looking to stay competitive in today's digital landscape.`,;
    return {;
      content: mockContent,;
      wordCount: mockContent.split(' ').length,;
      seoScore: 85,;
      readabilityScore: 78,;
      suggestions: [;
        'Add more specific examplesInclude relevant statisticsOptimize for target keywords';
      ],;
      metadata: {;
        title: `${request.topic} - Complete Guide`,;
        description: `Learn everything about ${request.topic} and how to implement it effectively.`,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        tags: [request.topic, request.type, 'guidetutorial'];
      }
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  async analyze_content (content: string): Promise<{
    seo_score: number;
    readability_score: number;
    suggestions: string[],
    keyword_density: Record < string, number>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }> {
    // Mock content analysis;

        'content': 2 && 2.1;
        'seo': 1 && 1.8,
        'marketing': 1 && 1.5

=======
=======
    return {
        'content': 2 && 2.1;
        'seo': 1 && 1.8,
        'marketing': 1 && 1.5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }> {
    // Mock content analysis;
    return {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      seo_score: Math.floor (Math.random () * 30) + 70;
      readability_score: Math.floor (Math.random () * 30) + 70;
      suggestions: [;
        'Add more headings for better structure_include internal links to related content_optimize meta description';
      ];
      keyword_density: {
        'content': 2.1;
        'seo': 1.8,
        'marketing': 1.5;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
;
  async analyzeContent(content: string): Promise<{;
    seoScore: number,;
    readabilityScore: number,;
    suggestions: string[],;
    keywordDensity: Record<string number>;
  }> {;
    // Mock content analysis;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return {;
      seoScore: Math.floor(Math.random() * 30) + 70,;
      readabilityScore: Math.floor(Math.random() * 30) + 70,;
      suggestions: [;
        'Add more headings for better structureInclude internal links to related contentOptimize meta description';
      ],;
      keywordDensity: {;
        'content': 2.1,;
        'seo': 1.8,;
        'marketing': 1.5;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    }
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
;
  async analyzeContent(content:string):Promise<{;
    seoScore:number,;
    readabilityScore:number,;
    suggestions:string[],;
    keywordDensity:Record<string number>;
  }> {;
    // Mock content analysis;
    return {;
      seoScore:Math.floor(Math.random() * 30) + 70,;
      readabilityScore:Math.floor(Math.random() * 30) + 70,;
      suggestions:[;
        'Add more headings for better structureInclude internal links to related content',;
        'Optimize meta description';
      ],;
      keywordDensity:{;
        'content':2.1,;
        'seo':1.8,;
        'marketing':1.5;
      }
    },;
  }
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




// Pricing tiers for the AI Content Generator
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Pricing tiers for the AI Content Generator;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
// Pricing tiers for the AI Content Generator;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
// Pricing tiers for the AI Content Generator;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const AI_CONTENT_PRICING = {
  starter: {
    name: 'Starter';
    price: 29;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    period: '/month',
    features: [;
      '100 content generations per month_basic templatesSEO analysis_email support_standard quality';
    ];

<<<<<<< HEAD
=======
// Pricing tiers for the AI Content Generator
export const AI_CONTENT_PRICING = {
  starter: {;
    name: 'Starter';
    price: 29;
    period: '/month'
    features: [
      '100 content generations per monthBasic templatesSEO analysisEmail supportStandard quality'
    ]
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  professional: {
    name: 'Professional';
    price: 99;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    period: '/month',
    features: [;
      '500 content generations per month_premium templates_advanced SEO analysis_priority support_high quality output_custom brandingAPI access';
    ];
<<<<<<< HEAD

=======
    period: '/month'
    features: [
      '500 content generations per monthPremium templatesAdvanced SEO analysisPriority supportHigh quality outputCustom brandingAPI access'
    ]
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  enterprise: {
    name: 'Enterprise';
    price: 299;
<<<<<<< HEAD
<<<<<<< HEAD

    period: '/month',
=======


=======
=======
    period: '/month'
    features: [
      'Unlimited content generationsCustom templatesAdvanced analyticsDedicated supportHighest qualityWhite-label optionsCustom integrationsSLA guarantee'
    ]
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    period: '/month',


<<<<<<< HEAD
  }
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
// Pricing tiers for the AI Content Generator;
export const AI_CONTENT_PRICING = {;
  starter: {;
    name: 'Starter',;
    price: 29,;
    period: '/month',;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    features: [;
      'Unlimited content generations_custom templates_advanced analytics_dedicated support_highest quality_white - label options_custom integrationsSLA guarantee';
    ];

  },;
<<<<<<< HEAD
=======
;
// Pricing tiers for the AI Content Generator;
export const AI_CONTENT_PRICING = {;
  starter:{;
    name:'Starter',;
    price:29,;
    period:'/month',;
    features:[;
      '100 content generations per monthBasic templates',;
      'SEO analysisEmail support',;
      'Standard quality';
    ];
  },;
  professional:{;
    name:'Professional',;
    price:99,;
    period:'/month',;
    features:[;
      '500 content generations per monthPremium templates',;
      'Advanced SEO analysisPriority support',;
      'High quality outputCustom branding',;
      'API access';
    ];
  },;
  enterprise:{;
    name:'Enterprise',;
    price:299,;
    period:'/month',;
    features:[;
      'Unlimited content generationsCustom templates',;
      'Advanced analyticsDedicated support',;
      'Highest qualityWhite-label options',;
      'Custom integrationsSLA guarantee';
    ];

  },;
    features: [;
      '100 content generations per monthBasic templatesSEO analysisEmail supportStandard quality';
    ];
  },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  professional: {;
    name: 'Professional',;
    price: 99,;
    period: '/month',;
    features: [;
      '500 content generations per monthPremium templatesAdvanced SEO analysisPriority supportHigh quality outputCustom brandingAPI access';
    ];
  },;
  enterprise: {;
    name: 'Enterprise',;
    price: 299,;
    period: '/month',;
    features: [;
      'Unlimited content generationsCustom templatesAdvanced analyticsDedicated supportHighest qualityWhite-label optionsCustom integrationsSLA guarantee';
    ];
<<<<<<< HEAD


  }
}
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
}
}
}// Pricing tiers for the AI Content Generator 
  }
};
  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
