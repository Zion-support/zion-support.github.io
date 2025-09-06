<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiMarketResearchService.ts

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface MarketTrend {
export interface MarketTrend {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  keyword: string;
  searchVolume: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  growthRate: number;
  relatedKeywords: string[];
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
export interface MarketTrend {
  id: string;
  keyword: string;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
  search_volume: number;
  trend_direction: 'rising' | 'falling' | 'stable';
  growth_rate: number;
  related_keywords: string[];
  market_opportunity: 'high' | 'medium' | 'low',
  timestamp: Date;
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
}
<<<<<<< HEAD

=======
export interface CompetitorAnalysis {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  competitor_name: string;
  website: string;
  market_share: number;
=======

  marketOpportunity: 'high' | 'medium' | 'low'

  timestamp: Date
}
export interface CompetitorAnalysis {

export interface CompetitorAnalysis {;
  id: string;
  competitorName: string;
  website: string;
  marketShare: number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
  pricing_strategy: string,
  feature_comparison: Record < string, boolean>;
  socialMediaPresence: Record < string, number>;
  last_updated: Date;
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
}
<<<<<<< HEAD

=======
export interface MarketSegment {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  name: string;
  size: number;
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
  growth_rate: number,
  demographics: Record < string, any>;
  psychographics: Record < string, any>;
  buying_behavior: Record < string, any>;
  pain_points: string[],
  solutions: string[];
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
}
<<<<<<< HEAD

=======
export interface MarketReport {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  pricingStrategy: string
  featureComparison: Record<string, boolean>;
  socialMediaPresence: Record<string, number>;

  lastUpdated: Date
}
export interface MarketSegment {

export interface MarketSegment {;
  id: string;
  name: string;
  size: number;

  growthRate: number
  demographics: Record<string, any>;
  psychographics: Record<string, any>;
  buyingBehavior: Record<string, any>;
  painPoints: string[]

  solutions: string[]
}
export interface MarketReport {

export interface MarketReport {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  title: string;
  industry: string;
  summary: string;
<<<<<<< HEAD
  key_findings: string[];
  market_size: number;
  growth_projection: number;
  recommendations: string[];
<<<<<<<< HEAD:services/aiMarketResearchService.ts

  data_sources: string[];
  generated_at: Date,
  expires_at: Date;

========
  data_sources: string[];
  generated_at: Date,
  expires_at: Date;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
}
<<<<<<< HEAD

=======
export interface MarketResearchRequest {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  industry: string;
  target_market: string;
  research_type: 'trends' | 'competitors' | 'segments' | 'comprehensive';
  timeframe: '7d' | '30d' | '90d' | '1y';
<<<<<<<< HEAD:services/aiMarketResearchService.ts

  includeHistoricalData: boolean,
  custom_metrics?: string[];

========
  includeHistoricalData: boolean,
  custom_metrics?: string[];
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
}
<<<<<<< HEAD

=======
export interface MarketResearchResponse {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  success: boolean;
  data: {
    trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiMarketResearchService.ts

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

<<<<<<< HEAD
  estimatedROI: number
}

=======

    segments?: MarketSegment[]
    report?: MarketReport
  }
  insights: string[];
  recommendations: string[];
  nextSteps: string[]

  estimatedROI: number
}
export class AIMarketResearchService {

export class AIMarketResearchService {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  private apiKey: string;

  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {

========
  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl
  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
      const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.trends || []
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
    } catch (error) {
      console && console.error('Error analyzing market trends:', error);
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
      const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.competitors || []
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
    } catch (error) {
      console && console.error('Error analyzing competitors:', error);
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
      const response = await fetch(`${this && this.baseUrl}/api/market-research/segments`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.segments || []
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
    } catch (error) {
      console && console.error('Error segmenting market:', error);
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
      const response = await fetch(`${this && this.baseUrl}/api/market-research/comprehensive`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.report
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
    } catch (error) {
      console && console.error('Error generating comprehensive report:', error);
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async getRealTimeInsights(keyword: string): Promise<MarketTrend[]> {
    try {
<<<<<<< HEAD
      const response = await fetch(`${this && this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {
        headers: {
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.trends || []
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
    } catch (error) {
      console && console.error('Error getting real-time insights:', error);
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async exportReport(reportId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
      const response = await fetch(`${this && this.baseUrl}/api/market-research/export/${reportId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify({ format })});
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.downloadUrl
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
    } catch (error) {
      console && console.error('Error exporting report:', error);
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async scheduleReport(request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise<string> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
      const response = await fetch(`${this && this.baseUrl}/api/market-research/schedule`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify({ ...request, schedule })});
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }
      const data = await response && response.json();
      return data && data.scheduleId
<<<<<<<< HEAD:services/aiMarketResearchService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
    } catch (error) {
      console && console.error('Error scheduling report:', error);
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
}
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY |'demo-key');
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiMarketResearchService.ts

<<<<<<< HEAD
=======

export interface MarketTrend {;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
}
;
export interface MarketResearchResponse {;
  success: boolean,;
  data: {;
    trends?: MarketTrend[],;
    competitors?: CompetitorAnalysis[],;
    segments?: MarketSegment[],;
<<<<<<< HEAD
=======

export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

=======
========
export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
    segments?: MarketSegment[],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    report?: MarketReport;
  }
  insights: string[];
  recommendations: string[];
  next_steps: string[],
  estimatedROI: number;
}
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
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.trends || [];
    } catch (error) {
      console.error ('Error analyzing market trends:', error);
      throw error;
    }
  }
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
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.competitors || [];
    } catch (error) {
      console.error ('Error analyzing competitors:', error);
      throw error;
    }
  }
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
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.segments || [];
    } catch (error) {
      console.error ('Error segmenting market:', error);
      throw error;
    }
  }
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
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.report;
    } catch (error) {
      console.error ('Error generating comprehensive report:', error);
      throw error;
    }
  }
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
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.trends || [];
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
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.download_url;
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
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return data.schedule_id;
    } catch (error) {
      console.error ('Error scheduling report:', error);
      throw error;
    }
  }
}
export const aiMarketResearchService = new AIMarketResearchService (process.env.MARKET_RESEARCH_API_KEY || 'demo - key');
;
<<<<<<<< HEAD:services/aiMarketResearchService.ts
<<<<<<< HEAD

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

export interface MarketTrend {;

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    this.apiKey = apiKey,;
    this.baseUrl = baseUrl;
  }
;
<<<<<<< HEAD
  async analyzeMarketTrends(request:MarketResearchRequest):Promise<MarketTrend[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/trends`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify(request)}),;
;
      if (!response.ok) {;
        throw new Error(`HTTP error! status:${response.status}`),;
      }
;
      const data = await response.json(),;
      return data.trends || [],;
    } catch (error) {;
      console.error('Error analyzing market trends:', error),;
      throw error,;
    }
  }
;
  async analyzeCompetitors(request:MarketResearchRequest):Promise<CompetitorAnalysis[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/competitors`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify(request)}),;
;
      if (!response.ok) {;
        throw new Error(`HTTP error! status:${response.status}`),;
      }
;
      const data = await response.json(),;
      return data.competitors || [],;
    } catch (error) {;
      console.error('Error analyzing competitors:', error),;
      throw error,;
    }
  }
;
  async segmentMarket(request:MarketResearchRequest):Promise<MarketSegment[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/segments`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify(request)}),;
;
      if (!response.ok) {;
        throw new Error(`HTTP error! status:${response.status}`),;
      }
;
      const data = await response.json(),;
      return data.segments || [],;
    } catch (error) {;
      console.error('Error segmenting market:', error),;
      throw error,;
    }
  }
;
  async generateComprehensiveReport(request:MarketResearchRequest):Promise<MarketReport> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/comprehensive`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify(request)}),;
;
      if (!response.ok) {;
        throw new Error(`HTTP error! status:${response.status}`),;
      }
;
      const data = await response.json(),;
      return data.report,;
    } catch (error) {;
      console.error('Error generating comprehensive report:', error),;
      throw error,;
    }
  }
;
  async getRealTimeInsights(keyword:string):Promise<MarketTrend[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`HTTP error! status:${response.status}`),;
      }
;
      const data = await response.json(),;
      return data.trends || [],;
    } catch (error) {;
      console.error('Error getting real-time insights:', error),;
      throw error,;
    }
  }
;
  async exportReport(reportId:string, format:'pdf' | 'csv' | 'excel'):Promise<string> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/export/${reportId}`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify({ format })}),;
;
      if (!response.ok) {;
        throw new Error(`HTTP error! status:${response.status}`),;
      }
;
      const data = await response.json(),;
      return data.downloadUrl,;
    } catch (error) {;
      console.error('Error exporting report:', error),;
      throw error,;
    }
  }
;
  async scheduleReport(request:MarketResearchRequest, schedule:'daily' | 'weekly' | 'monthly'):Promise<string> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/market-research/schedule`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify({ ...request, schedule })}),;
;
      if (!response.ok) {;
        throw new Error(`HTTP error! status:${response.status}`),;
      }
;
      const data = await response.json(),;
      return data.scheduleId,;
    } catch (error) {;
      console.error('Error scheduling report:', error),;
      throw error,;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key'),; async analyzeMarketTrends (request: MarketResearchRequest) : Promise<MarketTrend[]> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/trends`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (request) 
});
}async analyzeCompetitors (request: MarketResearchRequest) : Promise<CompetitorAnalysis[]> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/competitors`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (request) 
});
}async segmentMarket (request: MarketResearchRequest) : Promise<MarketSegment[]> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/segments`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (request) 
});
}async generateComprehensiveReport (request: MarketResearchRequest) : Promise<MarketReport> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/comprehensive`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (request) 
});
}async exportReport (reportId: string, format: 'pdf' | 'csv' | 'excel') : Promise<string> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/export/$ {
  reportId 
}`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
}async scheduleReport (request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly') : Promise<string> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/market-research/schedule`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiMarketResearchService.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
