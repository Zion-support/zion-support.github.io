export interface ContentGenerationRequest {;
  type:'blog-post' | 'social-media' | 'email' | 'landing-page' | 'product-description',;'
  topic:string,;'
  tone:'professional' | 'casual' | 'friendly' | 'formal',;''
  length:'short' | 'medium' | 'long',;'
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
  metadata: {;,
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
;'
  constructor(apiKey:string, baseUrl:string = 'https://api.ziontech.ai') {;'
    this.apiKey = apiKey,;
    this.baseUrl = baseUrl;
  }
;
  async generateContent(request:ContentGenerationRequest):Promise<ContentGenerationResponse> {;
</ContentGenerationResponse>
  async getTemplates():Promise<ContentTemplate[]> {;
</ContentTemplate>
  async analyzeContent(content: string):Promise<{;,
  seoScore:number,;
    readabilityScore:number,;
    suggestions:string[],;
    keywordDensity:Record<string number>;
</string>
},; async generateContent (request: ContentGenerationRequest) : Promise<ContentGenerationResponse> {
</ContentGenerationResponse>
}async getTemplates () : Promise<ContentTemplate[]> {
</ContentTemplate>'