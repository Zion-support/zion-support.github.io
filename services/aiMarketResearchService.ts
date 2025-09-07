<<<<<<< HEAD
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
=======
<<<<<<< HEAD
export interface MarketTrend {
export interface MarketTrend {;
  id: string;
  keyword: string;
  searchVolume: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  growthRate: number;
  relatedKeywords: string[];

export interface MarketTrend {
  id: string;
  keyword: string;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  search_volume: number;
  trend_direction: 'rising' | 'falling' | 'stable';
  growth_rate: number;
  related_keywords: string[];
  market_opportunity: 'high' | 'medium' | 'low',
  timestamp: Date;
}
export interface CompetitorAnalysis {
  id: string;
  competitor_name: string;
  website: string;
  market_share: number;
<<<<<<< HEAD

  marketOpportunity: 'high' | 'medium' | 'low'
>>>>>>> merged-prs-20250907-203621

  timestamp: Date
}
export interface CompetitorAnalysis {
<<<<<<< HEAD
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

=======

export interface CompetitorAnalysis {;
  id: string;
  competitorName: string;
  website: string;
  marketShare: number;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
>>>>>>> merged-prs-20250907-203621
  pricing_strategy: string,
  feature_comparison: Record < string, boolean>;
  socialMediaPresence: Record < string, number>;
  last_updated: Date;
<<<<<<< HEAD

}
export interface MarketSegment {
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

=======
}
export interface MarketSegment {
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

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  pricingStrategy: string
  featureComparison: Record<string, boolean>;
  socialMediaPresence: Record<string, number>;

  lastUpdated: Date
}
export interface MarketSegment {

export interface MarketSegment {;
<<<<<<< HEAD

=======
=======
>>>>>>> merged-prs-20250907-203621
  pricing_strategy: string,
  feature_comparison: Record < string, boolean>;
  socialMediaPresence: Record < string, number>;
  last_updated: Date;

}
export interface MarketSegment {
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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

  solutions: string[]
}
export interface MarketReport {

export interface MarketReport {;
=======
>>>>>>> merged-prs-20250907-203621
  growth_rate: number,
  demographics: Record < string, any>;
  psychographics: Record < string, any>;
  buying_behavior: Record < string, any>;
  pain_points: string[],
  solutions: string[];

}
export interface MarketReport {
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  title: string;
  industry: string;
  summary: string;
<<<<<<< HEAD
  data_sources: string[];
  generated_at: Date,
  expires_at: Date;
=======
>>>>>>> merged-prs-20250907-203621
  key_findings: string[];
  market_size: number;
  growth_projection: number;
  recommendations: string[];

  data_sources: string[];
  generated_at: Date,
  expires_at: Date;

<<<<<<< HEAD
}
export interface MarketResearchRequest {

  industry: string;
  target_market: string;'
  research_type: 'trends' | 'competitors' | 'segments' | 'comprehensive';'
  timeframe: '7d' | '30d' | '90d' | '1y';

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> merged-prs-20250907-203621
  includeHistoricalData: boolean,
  custom_metrics?: string[];

}
export interface MarketResearchResponse {
<<<<<<< HEAD
  success: boolean;
  data: {}
    trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  success: boolean;
  data: {
    trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    segments?: MarketSegment[]
    report?: MarketReport
  }
  insights: string[];
  recommendations: string[];
  nextSteps: string[]

  estimatedROI: number
}
export class AIMarketResearchService {
<<<<<<< HEAD
=======

export class AIMarketResearchService {;
>>>>>>> merged-prs-20250907-203621
  private apiKey: string;

  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
<<<<<<< HEAD

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
  key_findings: string[];
  market_size: number;
  growth_projection: number;
  recommendations: string[];

  data_sources: string[];
  generated_at: Date,
  expires_at: Date;

}
export interface MarketResearchRequest {
  industry: string,
  targetMarket: string,
  researchType: 'trends' | 'competitors' | 'segments' | 'comprehensive',
  timeframe: '7d' | '30d' | '90d' | '1y',
  includeHistoricalData: boolean,
  customMetrics?: string[]
=======
  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl
  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {
=======
  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});
<<<<<<< HEAD
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.trends || []
    } catch (error) {
      console && console.error('Error analyzing market trends:', error);
  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/trends`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.trends |[]
    } catch (error) {
      console.error('Error analyzing market trends:', error);
=======

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.trends || []

    } catch (error) {
      console && console.error('Error analyzing market trends:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      throw error
    }
  }
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {
    try {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});
<<<<<<< HEAD
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.competitors || []
    } catch (error) {
      console && console.error('Error analyzing competitors:', error);
      const response = await fetch(`${this.baseUrl}/api/market-research/competitors`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.competitors |[]
    } catch (error) {
      console.error('Error analyzing competitors:', error);
=======

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.competitors || []

    } catch (error) {
      console && console.error('Error analyzing competitors:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      throw error
    }
  }
  async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {
    try {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const response = await fetch(`${this && this.baseUrl}/api/market-research/segments`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});
<<<<<<< HEAD
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.segments || []
    } catch (error) {
      console && console.error('Error segmenting market:', error);
      const response = await fetch(`${this.baseUrl}/api/market-research/segments`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.segments |[]
    } catch (error) {
      console.error('Error segmenting market:', error);
=======

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.segments || []

    } catch (error) {
      console && console.error('Error segmenting market:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      throw error
    }
  }
  async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {
    try {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const response = await fetch(`${this && this.baseUrl}/api/market-research/comprehensive`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});
<<<<<<< HEAD
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.report
    } catch (error) {
      console && console.error('Error generating comprehensive report:', error);
      const response = await fetch(`${this.baseUrl}/api/market-research/comprehensive`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.report
    } catch (error) {
      console.error('Error generating comprehensive report:', error);
=======

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.report

    } catch (error) {
      console && console.error('Error generating comprehensive report:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify({ format })});
<<<<<<< HEAD
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.downloadUrl
    } catch (error) {
      console && console.error('Error exporting report:', error);
      const response = await fetch(`${this.baseUrl}/api/market-research/export/${reportId}`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify({ format })});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.downloadUrl
    } catch (error) {
      console.error('Error exporting report:', error);
=======

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.downloadUrl

    } catch (error) {
      console && console.error('Error exporting report:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      throw error
    }
  }
  async scheduleReport(request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise<string> {
    try {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const response = await fetch(`${this && this.baseUrl}/api/market-research/schedule`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify({ ...request, schedule })});
<<<<<<< HEAD
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.scheduleId
    } catch (error) {
      console && console.error('Error scheduling report:', error);
      const response = await fetch(`${this.baseUrl}/api/market-research/schedule`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify({ ...request, schedule })});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.scheduleId
    } catch (error) {
      console.error('Error scheduling report:', error);
=======

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.scheduleId

    } catch (error) {
      console && console.error('Error scheduling report:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      throw error
    }
  }
}
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY |'demo-key');

<<<<<<< HEAD
export interface MarketTrend {;
  id: string,;
  keyword: string,;
  searchVolume: number,;
  trendDirection: 'rising' | 'falling' | 'stable',;
  growthRate: number,;
  relatedKeywords: string[],;
  marketOpportunity: 'high' | 'medium' | 'low',;
  timestamp: Date;
}
;
export interface CompetitorAnalysis {;
  id: string,;
  competitorName: string,;
  website: string,;
  marketShare: number,;
  strengths: string[],;
  weaknesses: string[],;
  opportunities: string[],;
  threats: string[],;
  pricingStrategy: string,;
  featureComparison: Record<string boolean>,;
  socialMediaPresence: Record<string number>,;
  lastUpdated: Date;
}
;
export interface MarketSegment {;
  id: string,;
  name: string,;
  size: number,;
  growthRate: number,;
  demographics: Record<string any>,;
  psychographics: Record<string any>,;
  buyingBehavior: Record<string any>,;
  painPoints: string[],;
  solutions: string[];
}
;
export interface MarketReport {;
  id: string,;
  title: string,;
  industry: string,;
  summary: string,;
  keyFindings: string[],;
  marketSize: number,;
  growthProjection: number,;
  recommendations: string[],;
  dataSources: string[],;
  generatedAt: Date,;
  expiresAt: Date;
}
;
export interface MarketResearchRequest {;
  industry: string,;
  targetMarket: string,;
  researchType: 'trends' | 'competitors' | 'segments' | 'comprehensive',;
  timeframe: '7d' | '30d' | '90d' | '1y',;
  includeHistoricalData: boolean,;
  customMetrics?: string[];
>>>>>>> merged-prs-20250907-203621
}
;
export interface MarketResearchResponse {;
  success: boolean,;
  data: {;
    trends?: MarketTrend[],;
    competitors?: CompetitorAnalysis[],;
    segments?: MarketSegment[],;
<<<<<<< HEAD

'
export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

    segments?: MarketSegment[],

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
    segments?: MarketSegment[],
>>>>>>> merged-prs-20250907-203621
    report?: MarketReport;
  }
  insights: string[];
  recommendations: string[];
  next_steps: string[],
  estimatedROI: number;
}
<<<<<<< HEAD

=======
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
>>>>>>> merged-prs-20250907-203621
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.trends || [];
<<<<<<< HEAD

=======
    } catch (error) {
>>>>>>> merged-prs-20250907-203621
      console.error ('Error analyzing market trends:', error);
      throw error;
    }
  }
<<<<<<< HEAD

=======
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
>>>>>>> merged-prs-20250907-203621
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.competitors || [];
<<<<<<< HEAD

=======
    } catch (error) {
>>>>>>> merged-prs-20250907-203621
      console.error ('Error analyzing competitors:', error);
      throw error;
    }
  }
<<<<<<< HEAD

=======
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
>>>>>>> merged-prs-20250907-203621
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.segments || [];
<<<<<<< HEAD

=======
    } catch (error) {
>>>>>>> merged-prs-20250907-203621
      console.error ('Error segmenting market:', error);
      throw error;
    }
  }
<<<<<<< HEAD

=======
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
>>>>>>> merged-prs-20250907-203621
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.report;
<<<<<<< HEAD

=======
    } catch (error) {
>>>>>>> merged-prs-20250907-203621
      console.error ('Error generating comprehensive report:', error);
      throw error;
    }
  }
<<<<<<< HEAD

=======
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
>>>>>>> merged-prs-20250907-203621
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.trends || [];
<<<<<<< HEAD

=======
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
>>>>>>> merged-prs-20250907-203621
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.download_url;
<<<<<<< HEAD

=======
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
>>>>>>> merged-prs-20250907-203621
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.schedule_id;
<<<<<<< HEAD

=======
    } catch (error) {
>>>>>>> merged-prs-20250907-203621
      console.error ('Error scheduling report:', error);
      throw error;
    }
  }
<<<<<<< HEAD

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
=======
}
export const aiMarketResearchService = new AIMarketResearchService (process.env.MARKET_RESEARCH_API_KEY || 'demo - key');
;
>>>>>>> merged-prs-20250907-203621

export interface MarketTrend {;

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD

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
      throw error
    }
  }
  async exportReport(reportId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {
    try {

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
}
export const aiMarketResearchService = new AIMarketResearchService (process.env.MARKET_RESEARCH_API_KEY || 'demo - key');
;

export interface MarketTrend {;

export const aiMarketResearchService = new AIMarketResearchService($2);
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
