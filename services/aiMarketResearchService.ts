
  id: string;
  keyword: string;
  searchVolume: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  growthRate: number;
  relatedKeywords: string[];
  id: string;
  competitor_name: string;
  website: string;
  market_share: number;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];

  pricing_strategy: string,
  feature_comparison: Record < string, boolean>;
  socialMediaPresence: Record < string, number>;
  last_updated: Date;

}

  id: string;
  name: string;
  size: number;

  growth_rate: number,
  demographics: Record < string, any>;
  psychographics: Record < string, any>;
  buying_behavior: Record < string, any>;
  pain_points: string[],
  solutions: string[];

}

  id: string;
  title: string;
  industry: string;
  summary: string;
  key_findings: string[];
  market_size: number;
  growth_projection: number;
  recommendations: string[];

  data_sources: string[];
  generated_at: Date,
  expires_at: Date;

}

  industry: string;
  target_market: string;
  research_type: 'trends' | 'competitors' | 'segments' | 'comprehensive';
  timeframe: '7d' | '30d' | '90d' | '1y';

  includeHistoricalData: boolean,
  custom_metrics?: string[];

}

  success: boolean;
  data: {
    trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

  estimatedROI: number
}

  private apiKey: string;

  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
=======

export interface MarketTrend {;

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
