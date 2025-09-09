export interface MarketTrend {
  id: string,
  keyword: string,
  searchVolume: number,
  trendDirection: 'rising' | 'falling' | 'stable',
  growthRate: number,
  relatedKeywords: string[],
  marketOpportunity: 'high' | 'medium' | 'low',
  timestamp: Date}

export interface MarketTrend {
  id: string;
  keyword: string;
  trend_direction: 'rising' | 'falling' | 'stable';
  growth_rate: number;
  related_keywords: string[];'
  market_opportunity: 'high' | 'medium' | 'low',
  timestamp: Date;
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
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});
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
      console.error('Error analyzing market trends:', error);
      throw error
    }
  }
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});    } catch (error) {
      console && console.error('Error analyzing market trends:', error);
      throw error
    }
  }
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {
    try {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {

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
      console.error('Error analyzing competitors:', error);        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.competitors || []
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
      console.error('Error segmenting market:', error);        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.segments || []    } catch (error) {
      console && console.error('Error getting real-time insights:', error);
      throw error
    }
  }
  async exportReport(reportId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {
    try {

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
      console && console.error('Error exporting report:', error);      if (!response && response.ok) {
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
      throw error
    }
  }
  async scheduleReport(request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise<string> {
    try {      throw error
    }
  }
}
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY |'demo-key');
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
export interface MarketReport {
  id: string;
  title: string;
  industry: string;
  summary: string;
  data_sources: string[];
  generated_at: Date,
  expires_at: Date;
