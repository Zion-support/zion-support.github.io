export interface MarketTrend {
  id: string;
  keyword: string;
  searchVolume: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  growthRate: number;
  relatedKeywords: string[];
  marketOpportunity: 'high' | 'medium' | 'low';
  timestamp: Date
}

export interface CompetitorAnalysis {
  id: string;
  competitorName: string;
  website: string;
  marketShare: number;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  pricingStrategy: string;
  featureComparison: Record<string, boolean>,
  socialMediaPresence: Record<string, number>,
  lastUpdated: Date
}

export interface MarketSegment {
  id: string;
  name: string;
  size: number;
  growthRate: number;
  demographics: Record<string, any>,
  psychographics: Record<string, any>,
  buyingBehavior: Record<string, any>,
  painPoints: string[];
  solutions: string[]
}

export interface MarketReport {
  id: string;
  title: string;
  industry: string;
  summary: string;
  keyFindings: string[];
  marketSize: number;
  growthProjection: number;
  recommendations: string[];
  dataSources: string[];
  generatedAt: Date;
  expiresAt: Date
}

export interface MarketResearchRequest {
  industry: string;
  targetMarket: string;
  researchType: 'trends' | 'competitors' | 'segments' | 'comprehensive';
  timeframe: '7d' | '30d' | '90d' | '1y';
  includeHistoricalData: boolean;
  customMetrics?: string[]
}

export interface MarketResearchResponse {
  success: boolean;
  data: {
    trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];
    segments?: MarketSegment[];
    report?: MarketReport
  },
  insights: string[];
  recommendations: string[];
  nextSteps: string[];
  estimatedROI: number
}

export class AIMarketResearchService {
  private apiKey: string;
  private baseUrl: string;
  constructor(apiKey: string, baseUrl: string;