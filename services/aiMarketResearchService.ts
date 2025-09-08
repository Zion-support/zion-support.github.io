<<<<<<< HEAD


=======
export interface MarketTrend {
  id: string,
  keyword: string,
  searchVolume: number,
  trendDirection: 'rising' | 'falling' | 'stable',
  growthRate: number,
  relatedKeywords: string[],
  marketOpportunity: 'high' | 'medium' | 'low',
  timestamp: Date}

  trend_direction: 'rising' | 'falling' | 'stable';
  growth_rate: number;
  related_keywords: string[];'
  market_opportunity: 'high' | 'medium' | 'low',
  timestamp: Date;

  timestamp: Date
}
export interface CompetitorAnalysis {
  id: string,
  competitorName: string,
  website: string,
  marketShare: number,
  strengths: string[],
  weaknesses: string[],
  opportunities: string[],
  threats: string[],
  pricingStrategy: string,
  featureComparison: Record<string, boolean>,
  socialMediaPresence: Record<string, number>,
  lastUpdated: Date}

<<<<<<< HEAD
  pricingStrategy: string
  featureComparison: Record<string, boolean>;
  socialMediaPresence: Record<string, number>;

  lastUpdated: Date
}
export interface MarketSegment {

export interface MarketSegment {;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  pricing_strategy: string,
  feature_comparison: Record < string, boolean>;
  socialMediaPresence: Record < string, number>;
  last_updated: Date;

}
export interface MarketSegment {
<<<<<<< HEAD
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
export interface MarketReport {


=======
  id: string,
  name: string,
  size: number,
  growthRate: number,
  demographics: Record<string, any>,
  psychographics: Record<string, any>,
  buyingBehavior: Record<string, any>,
  painPoints: string[],
  solutions: string[]
}

  pricingStrategy: string
  featureComparison: Record<string, boolean>;
  socialMediaPresence: Record<string, number>;

  lastUpdated: Date
}
export interface MarketSegment {

export interface MarketSegment {;

  pricing_strategy: string,
  feature_comparison: Record < string, boolean>;
  socialMediaPresence: Record < string, number>;
  last_updated: Date;

}
export interface MarketSegment {

>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  name: string;
  size: number;

<<<<<<< HEAD
=======
<<<<<<< HEAD
  growthRate: number
  demographics: Record<string, any>;
  psychographics: Record<string, any>;
  buyingBehavior: Record<string, any>;
  painPoints: string[]
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
export interface MarketReport {;
=======
  growth_rate: number,
  demographics: Record < string, any>;
  psychographics: Record < string, any>;
  buying_behavior: Record < string, any>;
  pain_points: string[],
  solutions: string[];

}
export interface MarketReport {
  id: string,
  title: string,
  industry: string,
  summary: string,
  keyFindings: string[],
  marketSize: number,
  growthProjection: number,
  recommendations: string[],
  dataSources: string[],
  generatedAt: Date,
  expiresAt: Date}

  key_findings: string[];
  market_size: number;
  growth_projection: number;
  recommendations: string[];

  data_sources: string[];
  generated_at: Date,
  expires_at: Date;

}
export interface MarketResearchRequest {

  industry: string;
  target_market: string;'
  research_type: 'trends' | 'competitors' | 'segments' | 'comprehensive';'
  timeframe: '7d' | '30d' | '90d' | '1y';

  includeHistoricalData: boolean,
  custom_metrics?: string[];

}
export interface MarketResearchResponse {
  success: boolean;
  data: {}
    trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];

    segments?: MarketSegment[]
    report?: MarketReport
  }
  insights: string[];
  recommendations: string[];
  nextSteps: string[]

  estimatedROI: number
}
export class AIMarketResearchService {
  private apiKey: string;

  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl

  }

  size: number;

  growth_rate: number,
  demographics: Record < string, any>;
  psychographics: Record < string, any>;
  buying_behavior: Record < string, any>;
  pain_points: string[],
  solutions: string[];

}
export interface MarketReport {
  id: string;
  title: string;
  industry: string;
  summary: string;
<<<<<<< HEAD
  data_sources: string[];
  generated_at: Date,
  expires_at: Date;
=======
  key_findings: string[];
  market_size: number;
  growth_projection: number;
  recommendations: string[];

  data_sources: string[];
  generated_at: Date,
  expires_at: Date;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export interface MarketResearchRequest {
  industry: string,
  targetMarket: string,
  researchType: 'trends' | 'competitors' | 'segments' | 'comprehensive',
  timeframe: '7d' | '30d' | '90d' | '1y',
  includeHistoricalData: boolean,
  customMetrics?: string[]
}
;
export interface MarketResearchResponse {;
  success: boolean,;
  data: {;
    trends?: MarketTrend[],;
    competitors?: CompetitorAnalysis[],;
    segments?: MarketSegment[],;

'
export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

    segments?: MarketSegment[],

>>>>>>> origin/cursor/delete-old-data-records-6bba
    report?: MarketReport;
  }
  insights: string[];
  recommendations: string[];
  next_steps: string[],
  estimatedROI: number;
}

<<<<<<< HEAD
export class AIMarketResearchService {
  private api_key: string;
  private base_url: string,
  constructor (api_key: string, base_url: string = 'https://api.ziontechgroup.com') {
    this.api_key = api_key,
    this.base_url = base_url;
  }
  async analyzeMarketTrends (request: MarketResearchRequest): Promise < MarketTrend[]> {
    try {
      const response = await fetch (`${this.base_url}/api / market - research / trends`, {
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.trends || [];

<<<<<<< HEAD
    } catch (error) {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error ('Error analyzing market trends:', error);
      throw error;
    }
  }

<<<<<<< HEAD
  async analyze_competitors (request: MarketResearchRequest): Promise < CompetitorAnalysis[]> {
    try {
      const response = await fetch (`${this.base_url}/api / market - research / competitors`, {
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.competitors || [];

<<<<<<< HEAD
    } catch (error) {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error ('Error analyzing competitors:', error);
      throw error;
    }
  }

<<<<<<< HEAD
  async segment_market (request: MarketResearchRequest): Promise < MarketSegment[]> {
    try {
      const response = await fetch (`${this.base_url}/api / market - research / segments`, {
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.segments || [];

<<<<<<< HEAD
    } catch (error) {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error ('Error segmenting market:', error);
      throw error;
    }
  }

<<<<<<< HEAD
  async generateComprehensiveReport (request: MarketResearchRequest): Promise < MarketReport> {
    try {
      const response = await fetch (`${this.base_url}/api / market - research / comprehensive`, {
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.report;

<<<<<<< HEAD
    } catch (error) {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error ('Error generating comprehensive report:', error);
      throw error;
    }
  }

<<<<<<< HEAD
  async getRealTimeInsights (keyword: string): Promise < MarketTrend[]> {
    try {
      const response = await fetch (`${this.base_url}/api / market - research / realtime?keyword=${encodeURIComponent (keyword)}`, {
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.trends || [];

<<<<<<< HEAD
    } catch (error) {
      console.error ('Error getting real - time insights:', error);
      throw error;
    }
  }
  async export_report (report_id: string, format: 'pdf' | 'csv' | 'excel'): Promise < string> {
    try {
      const response = await fetch (`${this.base_url}/api / market - research / export/${report_id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify ({ format })});
;
      // Check condition
if ( {) {
  $2
}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.download_url;

<<<<<<< HEAD
    } catch (error) {
      console.error ('Error exporting report:', error);
      throw error;
    }
  }
  async schedule_report (request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise < string> {
    try {
      const response = await fetch (`${this.base_url}/api / market - research / schedule`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify ({ ...request, schedule })});
;
      // Check condition
if ( {) {
  $2
}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.schedule_id;

<<<<<<< HEAD
    } catch (error) {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error ('Error scheduling report:', error);
      throw error;
    }
  }

<<<<<<< HEAD
=======
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

export interface MarketTrend {;

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

export interface MarketTrend {;
  id:string,;
  keyword:string,;
  searchVolume:number,;
  trendDirection:'rising' | 'falling' | 'stable',;
  growthRate:number,;
  relatedKeywords:string[],;
  marketOpportunity:'high' | 'medium' | 'low',;
  timestamp:Date;
}
;
export interface CompetitorAnalysis {;
  id:string,;
  competitorName:string,;
  website:string,;
  marketShare:number,;
  strengths:string[],;
  weaknesses:string[],;
  opportunities:string[],;
  threats:string[],;
  pricingStrategy:string,;
  featureComparison:Record<string boolean>,;
  socialMediaPresence:Record<string number>,;
  lastUpdated:Date;
}
;
export interface MarketSegment {;
  id:string,;
  name:string,;
  size:number,;
  growthRate:number,;
  demographics:Record<string any>,;
  psychographics:Record<string any>,;
  buyingBehavior:Record<string any>,;
  painPoints:string[],;
  solutions:string[];
}
;
export interface MarketReport {;
  id:string,;
  title:string,;
  industry:string,;
  summary:string,;
  keyFindings:string[],;
  marketSize:number,;
  growthProjection:number,;
  recommendations:string[],;
  dataSources:string[],;
  generatedAt:Date,;
  expiresAt:Date;
}
;
export interface MarketResearchRequest {;
  industry:string,;
  targetMarket:string,;
  researchType:'trends' | 'competitors' | 'segments' | 'comprehensive',;
  timeframe:'7d' | '30d' | '90d' | '1y',;
  includeHistoricalData:boolean,;
  customMetrics?:string[];
}
;
export interface MarketResearchResponse {;
  success:boolean,;
  data:{;
    trends?:MarketTrend[],;
    competitors?:CompetitorAnalysis[],;
    segments?:MarketSegment[],;
    report?:MarketReport;
  },;
  insights:string[],;
  recommendations:string[],;
  nextSteps:string[],;
  estimatedROI:number;
}
;
export class AIMarketResearchService {;
  private apiKey:string,;
  private baseUrl:string,;
;
  constructor(apiKey:string, baseUrl:string = 'https://api.ziontechgroup.com') {;
    report?: MarketReport;
  },;
  insights: string[],;
  recommendations: string[],;
  nextSteps: string[],;
  estimatedROI: number;
}
;
export class AIMarketResearchService {;
  private apiKey: string,;
  private baseUrl: string,;
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {;
    this.apiKey = apiKey,;
    this.baseUrl = baseUrl;
  }
;
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/trends`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify(request)}),;
      if (!response.ok) {;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
;
      const data = await response.json(),;
      return data.trends || [];
    } catch (error) {;
      console.error('Error analyzing market trends:', error),;
      throw error;
    }
  }
;
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/competitors`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify(request)}),;
      if (!response.ok) {;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
;
      const data = await response.json(),;
      return data.competitors || [];
    } catch (error) {;
      console.error('Error analyzing competitors:', error),;
      throw error;
    }
  }
;
  async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/segments`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify(request)}),;
      if (!response.ok) {;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
;
      const data = await response.json(),;
      return data.segments || [];
    } catch (error) {;
      console.error('Error segmenting market:', error),;
      throw error;
    }
  }
;
  async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/comprehensive`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify(request)}),;
      if (!response.ok) {;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
;
      const data = await response.json(),;
      return data.report;
    } catch (error) {;
      console.error('Error generating comprehensive report:', error),;
      throw error;
    }
  }
;
  async getRealTimeInsights(keyword: string): Promise<MarketTrend[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
;
      const data = await response.json(),;
      return data.trends || [];
    } catch (error) {;
      console.error('Error getting real-time insights:', error),;
      throw error;
    }
  }
;
  async exportReport(reportId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/export/${reportId}`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify({ format })}),;
      if (!response.ok) {;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
;
      const data = await response.json(),;
      return data.downloadUrl;
    } catch (error) {;
      console.error('Error exporting report:', error),;
      throw error;
    }
  }
;
  async scheduleReport(request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise<string> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/schedule`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify({ ...request, schedule })}),;
      if (!response.ok) {;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
;
      const data = await response.json(),;
      return data.scheduleId;
    } catch (error) {;
      console.error('Error scheduling report:', error),;
      throw error;
    }
  }
}
;
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

export interface MarketTrend {
  id: string;
  keyword: string;

}
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
export interface MarketSegment {
}
export interface MarketSegment {
  id: string;
  name: string;
  size: number;
}
export interface MarketReport {

  pricingStrategy: string
  featureComparison: Record<string, boolean>;
  socialMediaPresence: Record<string, number>;

  lastUpdated: Date
}
export interface MarketSegment {

export interface MarketSegment {;

  pricing_strategy: string,
  feature_comparison: Record < string, boolean>;
  socialMediaPresence: Record < string, number>;
  last_updated: Date;

}
export interface MarketSegment {
  id: string;
  name: string;
  size: number;

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
export interface MarketResearchRequest {
  industry: string;
  target_market: string;
  research_type: 'trends' | 'competitors' | 'segments' | 'comprehensive';
  timeframe: '7d' | '30d' | '90d' | '1y';
<<<<<<< HEAD
  includeHistoricalData: boolean,
  custom_metrics?: string[];
}
export interface MarketResearchResponse {
  keyFindings: string[];
  marketSize: number;
  growthProjection: number;
  recommendations: string[];
  dataSources: string[];

  generatedAt: Date

  expiresAt: Date
}
export interface MarketResearchRequest {

export interface MarketResearchRequest {;
  industry: string;
  targetMarket: string;
  researchType: 'trends' | 'competitors' | 'segments' | 'comprehensive';
  timeframe: '7d' | '30d' | '90d' | '1y';

  includeHistoricalData: boolean

  customMetrics?: string[]
}
export interface MarketResearchResponse {

export interface MarketResearchResponse {;
=======

  includeHistoricalData: boolean,
  custom_metrics?: string[];

}
export interface MarketResearchResponse {
  success: boolean,
  data: {
    trends?: MarketTrend[],
    competitors?: CompetitorAnalysis[],
    segments?: MarketSegment[],
    report?: MarketReport
  },
  insights: string[],
  recommendations: string[],
  nextSteps: string[],
  estimatedROI: number}

export class AIMarketResearchService {
  private apiKey: string,
  private baseUrl: string,

  constructor(apiKey: string, baseUrl: string = $2;
    this.baseUrl = baseUrl
  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {

        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(request)}),

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response && response.json();
      return data && data.trends || []
    } catch (error) {
      console && console.error('Error analyzing market trends:', error);
  }

      const data = await response.json($2);
      return data.trends || []
    } catch (error) {
      console.error($2);
      throw error
    }
  }
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(request)}),

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json($2);
      return data.competitors || []
    } catch (error) {
      console.error($2);
      throw error
    }
  }
  async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/segments`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(request)}),

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response && response.json();
      return data && data.competitors || []

      const data = await response.json($2);
      return data.segments || []
    } catch (error) {
      console.error($2);
      throw error
    }
  }
  async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/comprehensive`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(request)}),

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response && response.json();
      return data && data.segments || []

      const data = await response.json($2);
      return data.report
    } catch (error) {
      console.error($2);
      throw error
    }
  }
  async getRealTimeInsights(keyword: string): Promise<MarketTrend[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json($2);
      return data.trends || []
    } catch (error) {
      console.error($2);
      throw error
    }
  }
  async getRealTimeInsights(keyword: string): Promise<MarketTrend[]> {
    try {
<<<<<<< HEAD
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.trends || []
    } catch (error) {
      console && console.error('Error getting real-time insights:', error);
      const response = await fetch(`${this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.trends |[]
    } catch (error) {
      console.error('Error getting real-time insights:', error);
=======
      const response = await fetch(`${this && this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {
        headers: {

          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.trends || []

    } catch (error) {
      console && console.error('Error getting real-time insights:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      throw error
    }
  }
  async exportReport(reportId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {
    try {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const response = await fetch(`${this && this.baseUrl}/api/market-research/export/${reportId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({ format })}),

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json($2);
      return data.downloadUrl
    } catch (error) {
      console.error($2);
      throw error
    }
  }
  async analyze_competitors (request: MarketResearchRequest): Promise < CompetitorAnalysis[]> {
    try {
      const response = await fetch (`${this.base_url}/api / market - research / competitors`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({ ...request, schedule })}),

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json($2);
      return data.scheduleId
    } catch (error) {
      console.error($2);
      throw error
    }
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
export const aiMarketResearchService = new AIMarketResearchService (process.env.MARKET_RESEARCH_API_KEY || 'demo - key');
;


export interface MarketTrend {;

<<<<<<< HEAD
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');




=======
export const aiMarketResearchService = new AIMarketResearchService($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
