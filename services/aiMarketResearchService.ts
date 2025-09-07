<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
export interface MarketTrend  {export interface MarketTrend  {id: string;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export interface MarketTrend {
export interface MarketTrend {;
  id: string;
  keyword: string;
  searchVolume: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  growthRate: number;
  relatedKeywords: string[];search_volume: number;
export interface MarketTrend  {id: string;
  keyword: string;
<<<<<<< HEAD
<<<<<<< HEAD

  search_volume: number;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

  search_volume: number;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  trend_direction: 'rising' | 'falling' | 'stable';
  growth_rate: number;
  related_keywords: string[];
  market_opportunity: 'high' | 'medium' | 'low',timestamp: Date;export interface MarketTrend  {id: string;
  keyword: string;}
  id: string;
  competitor_name: string;
  website: string;
  market_share: number;marketOpportunity: 'high' | 'medium' | 'low';
  timestamp: Date;
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
export interface CompetitorAnalysis  {export interface CompetitorAnalysis  {id: string;
  competitorName: string;
  website: string;
  marketShare: number;strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}
export interface MarketSegment  {id: string;
  name: string;
  size: number;
}
export interface MarketReport  {pricing_strategy: string,feature_comparison: Record < string, boolean>;
  socialMediaPresence: Record < string, number>;
  last_updated: Date;}
export interface MarketSegment  {id: string;
  name: string;
  size: number;growth_rate: number,demographics: Record < string, any>;
  psychographics: Record < string, any>;
  buying_behavior: Record < string, any>;
  pain_points: string[],solutions: string[];}
export interface MarketReport  {id: string;
  title: string;
  industry: string;
  summary: string;key_findings: string[];
  market_size: number;
  growth_projection: number;
  recommendations: string[];data_sources: string[];
  generated_at: Date,expires_at: Date;data_sources: string[];
  generated_at: Date,expires_at: Date;}
export interface MarketResearchRequest {}
export interface MarketResearchRequest  {industry: string;
  target_market: string;
  research_type: 'trends' | 'competitors' | 'segments' | 'comprehensive';
  timeframe: '7d' | '30d' | '90d' | '1y';includeHistoricalData: boolean,custom_metrics?: string[];}
export interface MarketResearchResponse  {includeHistoricalData: boolean,custom_metrics?: string[];
}
export interface MarketResearchResponse  {keyFindings: string[];
  marketSize: number;
  growthProjection: number;
  recommendations: string[];
  dataSources: string[];generatedAt: Date;
  expiresAt: Date;
}
export interface MarketResearchRequest  {export interface MarketResearchRequest  {industry: string;
  targetMarket: string;
  researchType: 'trends' | 'competitors' | 'segments' | 'comprehensive';
  timeframe: '7d' | '30d' | '90d' | '1y';includeHistoricalData: boolean;
  customMetrics?: string[];
}
export interface MarketResearchResponse  {export interface MarketResearchResponse  {success: boolean;
  data: {trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {this && this.apiKey = apiKey,this && this.baseUrl = baseUrl;
    segments?: MarketSegment[];
    report?: MarketReport;
  }
  insights: string[];
  recommendations: string[];
  nextSteps: string[];
  estimatedROI: number;
}
export class AIMarketResearchService {export class AIMarketResearchService {private apiKey: string;private baseUrl: string;
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {try {const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {size: number;export interface MarketReport {  title: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


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
export interface MarketSegment {}
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
export interface MarketResearchRequest {  success: boolean;
  data: {trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {try {const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {      const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify(request)})method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify(request)})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data  = await response && response.json()} catch (error) {console && console.error('Error analyzing market trends:', error)throw error;
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
  success: boolean;
  data: {
    trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

export class AIMarketResearchService {;
  private apiKey: string;

  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {
<<<<<<< HEAD
=======
  size: number;

export interface MarketReport {  title: string;
  industry: string;
  summary: string;
}
export interface MarketResearchRequest {  success: boolean;
  data: {
    trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];  }
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {      const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
    } catch (error) {
      console && console.error('Error analyzing market trends:', error);
  }
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {try {return data && data.competitors || [];
    } catch (error) {console && console.error('Error analyzing competitors:', error)throw error;
    }
  }
  async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {try {const response = await fetch(`${this && this.baseUrl}/api/market-research/segments`, {method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify(request)})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()} catch (error) {console && console.error('Error analyzing competitors:', error)throw error;
    }
  }
  async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {try {return data && data.segments || [];
    } catch (error) {console && console.error('Error segmenting market:', error)throw error;
    }
  }
  async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {try {} catch (error) {console && console.error('Error generating comprehensive report:', error)return data && data.report;
    } catch (error) {console && console.error('Error generating comprehensive report:', error)const response = await fetch(`${this.baseUrl}/api/market-research/comprehensive`, {if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}
      const data = await response && response.json()return data && data.trends || [];
    } catch (error) {console && console.error('Error analyzing market trends:', error)}
  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {try {const response = await fetch(`${this.baseUrl}/api/market-research/trends`, {method: 'POST';
        headers: {'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)})if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
      const data = await response.json()return data.report;
    } catch (error) {console.error('Error generating comprehensive report:', error)try {const response = await fetch(`${this && this.baseUrl}/api/market-research/comprehensive`, {return data.trends |[];
    } catch (error) {console.error('Error analyzing market trends:', error)throw error;
    }
  }
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {try {const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify(request)})} catch (error) {console && console.error('Error segmenting market:', error)throw error;
    }
  }
  async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {try {} catch (error) {console && console.error('Error generating comprehensive report:', error)throw error;
    }
  }
  async getRealTimeInsights(keyword: string): Promise<MarketTrend[]> {try {if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.trends || [];
    } catch (error) {'Authorization': `Bearer ${this && this.apiKey}`}})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}
      const data = await response && response.json()return data && data.trends || [];
    } catch (error) {console && console.error('Error getting real-time insights:', error)const response = await fetch(`${this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {headers: {'Authorization': `Bearer ${this.apiKey}`}})body: JSON && JSON.stringify(request)})} catch (error) {console && console.error('Error analyzing market trends:', error)throw error;
    }
  }
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {try {const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {} catch (error) {console && console.error('Error analyzing competitors:', error)const response = await fetch(`${this.baseUrl}/api/market-research/competitors`, {method: 'POST';
        headers: {'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)})if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
      const data = await response.json()return data.trends |[];
    } catch (error) {console.error('Error getting real-time insights:', error)} catch (error) {console && console.error('Error getting real-time insights:', error)console && console.error('Error generating comprehensive report:', error)throw error;
    }
  }
  async getRealTimeInsights(keyword: string): Promise<MarketTrend[]> {try {const response = await fetch(`${this && this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {headers: {'Authorization': `Bearer ${this && this.apiKey}`}})return data.competitors |[];
    } catch (error) {console.error('Error analyzing competitors:', error)method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify(request)})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.trends || [];
    } catch (error) {return data && data.competitors || [];
      return data && data.segments || [];
    } catch (error) {console && console.error('Error segmenting market:', error)const response = await fetch(`${this.baseUrl}/api/market-research/segments`, {method: 'POST';
        headers: {'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)})if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
      const data = await response.json()return data.segments |[];
    } catch (error) {console.error('Error segmenting market:', error)method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify(request)})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.segments || []    } catch (error) {console && console.error('Error getting real-time insights:', error)throw error;
    }
  }
  async exportReport(reportId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {try {const response = await fetch(`${this && this.baseUrl}/api/market-research/export/${reportId}`, {method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify({ format })})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.downloadUrl;
    } catch (error) {console && console.error('Error exporting report:', error)} catch (error) {console && console.error('Error exporting report:', error)throw error;
    }
  }
  async scheduleReport(request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise<string> {try {const response = await fetch(`${this && this.baseUrl}/api/market-research/schedule`, {method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify({ ...request, schedule })})if (!response && response.ok) {console && console.error('Error exporting report:', error)if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.scheduleId;
      if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}
      const data = await response && response.json()return data && data.scheduleId;
    } catch (error) {console && console.error('Error scheduling report:', error)const response = await fetch(`${this.baseUrl}/api/market-research/schedule`, {return data && data.downloadUrl;
    } catch (error) {console && console.error('Error exporting report:', error)const response = await fetch(`${this.baseUrl}/api/market-research/export/${reportId}`, {method: 'POST';
        headers: {'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify({ ...request, schedule })})body: JSON.stringify({ format })})if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
      const data = await response.json()return data.scheduleId;
    } catch (error) {console.error('Error scheduling report:', error)} catch (error) {console && console.error('Error scheduling report:', error)} catch (error) {console && console.error('Error scheduling report:', error)throw error;
    }
  }
}
export const aiMarketResearchService  = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY |'demo-key')return data.downloadUrl;
    } catch (error) {console.error('Error exporting report:', error)throw error;
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        body: JSON && JSON.stringify(request)});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.trends || []

    } catch (error) {
<<<<<<< HEAD
=======
        body: JSON && JSON.stringify(request)});    } catch (error) {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      console && console.error('Error analyzing market trends:', error);
      throw error
    }
  }
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {
    try {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {
<<<<<<< HEAD
<<<<<<< HEAD
      return data && data.competitors || []
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      return data && data.competitors || []
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      console.error('Error analyzing competitors:', error);
      throw error
    }
  }
  async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/segments`, {
        method: 'POST',
<<<<<<< HEAD
=======
      console.error('Error analyzing competitors:', error);        method: 'POST',
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.competitors || []
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

    } catch (error) {
      console && console.error('Error analyzing competitors:', error);
      throw error
    }
  }
  async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {
    try {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/segments`, {
<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      console.error('Error segmenting market:', error);
      throw error
    }
  }
  async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/comprehensive`, {
        method: 'POST',
<<<<<<< HEAD
=======
      console.error('Error segmenting market:', error);        method: 'POST',
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      return data && data.segments || []

    } catch (error) {
      console && console.error('Error segmenting market:', error);
      throw error
    }
  }
  async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {
    try {} catch (error) {
      console && console.error('Error generating comprehensive report:', error);
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
    } catch (error) {
      console && console.error('Error getting real-time insights:', error);
      console && console.error('Error generating comprehensive report:', error);
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
=======
      return data && data.segments || []    } catch (error) {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      console && console.error('Error getting real-time insights:', error);
      throw error
    }
  }
  async exportReport(reportId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {
    try {

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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

    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console && console.error('Error exporting report:', error);
      if (!response && response.ok) {
=======
      console && console.error('Error exporting report:', error);      if (!response && response.ok) {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      console && console.error('Error exporting report:', error);
      if (!response && response.ok) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
    } catch (error) {
      console && console.error('Error exporting report:', error);
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    } catch (error) {
      console && console.error('Error exporting report:', error);
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      throw error
    }
  }
  async scheduleReport(request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise<string> {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    try {

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

    } catch (error) {
      console && console.error('Error scheduling report:', error);
    } catch (error) {
      console && console.error('Error scheduling report:', error);
    } catch (error) {
      console && console.error('Error scheduling report:', error);
      throw error
<<<<<<< HEAD
=======
    try {      throw error
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    }
  }
}
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY |'demo-key');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

export const aiMarketResearchService = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

    segments?: MarketSegment[],
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

export interface MarketTrend {;

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
      const data = await response.json();
      return data.trends || [];
    } catch (error) {;
      console.error('Error analyzing market trends:', error),;
      throw error;
    }
  }
  async scheduleReport(request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise<string> {try {      throw error;
    }
  }
}
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY |'demo-key')id: string,keyword: string,searchVolume: number,trendDirection: 'rising' | 'falling' | 'stable',growthRate: number,relatedKeywords: string[],marketOpportunity: 'high' | 'medium' | 'low',timestamp: Date;
}export interface CompetitorAnalysis  {id: string,competitorName: string,website: string,marketShare: number,strengths: string[],weaknesses: string[],opportunities: string[],threats: string[],pricingStrategy: string,featureComparison: Record<string boolean>,socialMediaPresence: Record<string number>,lastUpdated: Date;
}export interface MarketSegment  {id: string,name: string,size: number,growthRate: number,demographics: Record<string any>,psychographics: Record<string any>,buyingBehavior: Record<string any>,painPoints: string[],solutions: string[];
}export interface MarketReport  {id: string,title: string,industry: string,summary: string,keyFindings: string[],marketSize: number,growthProjection: number,recommendations: string[],dataSources: string[],generatedAt: Date,expiresAt: Date;
}export interface MarketResearchRequest  {industry: string,targetMarket: string,researchType: 'trends' | 'competitors' | 'segments' | 'comprehensive',timeframe: '7d' | '30d' | '90d' | '1y',includeHistoricalData: boolean,customMetrics?: string[];
}export interface MarketResearchResponse  {success: boolean,data: {trends?: MarketTrend[],competitors?: CompetitorAnalysis[],segments?: MarketSegment[],export const aiMarketResearchService  = new AIMarketResearchService(process && process.env.MARKET_RESEARCH_API_KEY || 'demo-key')segments?: MarketSegment[],report?: MarketReport;
  }
  insights: string[];
  recommendations: string[];
  next_steps: string[],estimatedROI: number;
}
export class AIMarketResearchService {private api_key: string;
  private base_url: string,constructor (api_key: string, base_url: string = 'https://api.ziontechgroup.com') {this.api_key = api_key,this.base_url = base_url;
  }
  async analyzeMarketTrends (request: MarketResearchRequest): Promise < MarketTrend[]> {try {const response = await fetch (`${this.base_url}/api / market - research / trends`, {method: 'POST',headers: {'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify (request)})// Check condition;
if ( {) {$2;
}
        throw new Error (`HTTP error! status: ${response.status}`)}
      const data = await response.json ()return data.trends || [];
    } catch (error) {console.error ('Error analyzing market trends:', error)throw error;
    }
  }
  async analyze_competitors (request: MarketResearchRequest): Promise < CompetitorAnalysis[]> {try {const response = await fetch (`${this.base_url}/api / market - research / competitors`, {method: 'POST',headers: {'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify (request)})// Check condition;
if ( {) {$2;
}
        throw new Error (`HTTP error! status: ${response.status}`)}
      const data = await response.json ()return data.competitors || [];
    } catch (error) {console.error ('Error analyzing competitors:', error)throw error;
    }
  }
  async segment_market (request: MarketResearchRequest): Promise < MarketSegment[]> {try {const response = await fetch (`${this.base_url}/api / market - research / segments`, {method: 'POST',headers: {'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify (request)})// Check condition;
if ( {) {$2;
}
        throw new Error (`HTTP error! status: ${response.status}`)}
      const data = await response.json ()return data.segments || [];
    } catch (error) {console.error ('Error segmenting market:', error)throw error;
    }
  }
  async generateComprehensiveReport (request: MarketResearchRequest): Promise < MarketReport> {try {const response = await fetch (`${this.base_url}/api / market - research / comprehensive`, {method: 'POST',headers: {'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify (request)})// Check condition;
if ( {) {$2;
}
        throw new Error (`HTTP error! status: ${response.status}`)}
      const data = await response.json ()return data.report;
    } catch (error) {console.error ('Error generating comprehensive report:', error)throw error;
    }
  }
  async getRealTimeInsights (keyword: string): Promise < MarketTrend[]> {try {const response = await fetch (`${this.base_url}/api / market - research / realtime?keyword=${encodeURIComponent (keyword)}`, {headers: {'Authorization': `Bearer ${this.api_key}`}})// Check condition;
if ( {) {$2;
}
        throw new Error (`HTTP error! status: ${response.status}`)}
      const data = await response.json ()return data.trends || [];
    } catch (error) {console.error ('Error getting real - time insights:', error)throw error;
    }
  }
  async export_report (report_id: string, format: 'pdf' | 'csv' | 'excel'): Promise < string> {try {const response = await fetch (`${this.base_url}/api / market - research / export/${report_id}`, {method: 'POST',headers: {'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify ({ format })})// Check condition;
if ( {) {$2;
}
        throw new Error (`HTTP error! status: ${response.status}`)}
      const data = await response.json ()return data.download_url;
    } catch (error) {console.error ('Error exporting report:', error)throw error;
    }
  }
  async schedule_report (request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise < string> {try {const response = await fetch (`${this.base_url}/api / market - research / schedule`, {method: 'POST',headers: {'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify ({ ...request, schedule })})// Check condition;
if ( {) {$2;
}
        throw new Error (`HTTP error! status: ${response.status}`)}
      const data = await response.json ()return data.schedule_id;
    } catch (error) {console.error ('Error scheduling report:', error)export interface MarketTrend  {export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key')export interface MarketTrend  {id:string,keyword:string,searchVolume:number,trendDirection:'rising' | 'falling' | 'stable',growthRate:number,relatedKeywords:string[],marketOpportunity:'high' | 'medium' | 'low',timestamp:Date;
}export interface CompetitorAnalysis  {id:string,competitorName:string,website:string,marketShare:number,strengths:string[],weaknesses:string[],opportunities:string[],threats:string[],pricingStrategy:string,featureComparison:Record<string boolean>,socialMediaPresence:Record<string number>,lastUpdated:Date;
}export interface MarketSegment  {id:string,name:string,size:number,growthRate:number,demographics:Record<string any>,psychographics:Record<string any>,buyingBehavior:Record<string any>,painPoints:string[],solutions:string[];
}export interface MarketReport  {id:string,title:string,industry:string,summary:string,keyFindings:string[],marketSize:number,growthProjection:number,recommendations:string[],dataSources:string[],generatedAt:Date,expiresAt:Date;
}export interface MarketResearchRequest  {industry:string,targetMarket:string,researchType:'trends' | 'competitors' | 'segments' | 'comprehensive',timeframe:'7d' | '30d' | '90d' | '1y',includeHistoricalData:boolean,customMetrics?:string[];
}export interface MarketResearchResponse  {success:boolean,data:{trends?:MarketTrend[],competitors?:CompetitorAnalysis[],segments?:MarketSegment[],report?:MarketReport;
  },insights:string[],recommendations:string[],nextSteps:string[],estimatedROI:number;
}export class AIMarketResearchService {private apiKey:string,private baseUrl:string,constructor(apiKey:string, baseUrl:string = 'https://api.ziontechgroup.com') {report?: MarketReport;
  },insights: string[],recommendations: string[],nextSteps: string[],estimatedROI: number;
}export class AIMarketResearchService {private apiKey: string,private baseUrl: string,constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {this.apiKey = apiKey,this.baseUrl = baseUrl;
  }async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {try {const response = await fetch(`${this.baseUrl}/api/market-research/trends`, {method: 'POST',headers: {'Authorization': `Bearer ${this.apiKey}`,'Content-Type': 'application/json'},body: JSON.stringify(request)}),if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}const data = await response.json()return data.trends || [];
    } catch (error) {console.error('Error analyzing market trends:', error),throw error;
    }
  }async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {try {const response = await fetch(`${this.baseUrl}/api/market-research/competitors`, {method: 'POST',headers: {'Authorization': `Bearer ${this.apiKey}`,'Content-Type': 'application/json'},body: JSON.stringify(request)}),if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}const data = await response.json(),return data.competitors || [];
    } catch (error) {console.error('Error analyzing competitors:', error),throw error;
    }
  }async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {try {const response = await fetch(`${this.baseUrl}/api/market-research/segments`, {method: 'POST',headers: {'Authorization': `Bearer ${this.apiKey}`,'Content-Type': 'application/json'},body: JSON.stringify(request)}),if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}const data = await response.json(),return data.segments || [];
    } catch (error) {console.error('Error segmenting market:', error),throw error;
    }
  }async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {try {const response = await fetch(`${this.baseUrl}/api/market-research/comprehensive`, {method: 'POST',headers: {'Authorization': `Bearer ${this.apiKey}`,'Content-Type': 'application/json'},body: JSON.stringify(request)}),if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}const data = await response.json(),return data.report;
    } catch (error) {console.error('Error generating comprehensive report:', error),throw error;
    }
  }async getRealTimeInsights(keyword: string): Promise<MarketTrend[]> {try {const response = await fetch(`${this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {headers: {'Authorization': `Bearer ${this.apiKey}`}}),if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}const data = await response.json(),return data.trends || [];
    } catch (error) {console.error('Error getting real-time insights:', error),throw error;
    }
  }async exportReport(reportId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {try {const response = await fetch(`${this.baseUrl}/api/market-research/export/${reportId}`, {method: 'POST',headers: {'Authorization': `Bearer ${this.apiKey}`,'Content-Type': 'application/json'},body: JSON.stringify({ format })}),if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}const data = await response.json(),return data.downloadUrl;
    } catch (error) {console.error('Error exporting report:', error),throw error;
    }
  }async scheduleReport(request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise<string> {try {const response = await fetch(`${this.baseUrl}/api/market-research/schedule`, {method: 'POST',headers: {'Authorization': `Bearer ${this.apiKey}`,'Content-Type': 'application/json'},body: JSON.stringify({ ...request, schedule })}),if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}const data = await response.json(),return data.scheduleId;
    } catch (error) {console.error('Error scheduling report:', error),throw error;
    }
  }
}
export const aiMarketResearchService  = new AIMarketResearchService (process.env.MARKET_RESEARCH_API_KEY || 'demo - key')export interface MarketTrend  {export const aiMarketResearchService  = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key')export interface MarketTrend  {export const aiMarketResearchService  = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key')export const aiMarketResearchService  = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key')export interface MarketTrend  {export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key')export const aiMarketResearchService  = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key')
;
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
<<<<<<< HEAD
<<<<<<< HEAD
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
