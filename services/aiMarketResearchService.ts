  search_volume: number;
  trend_direction: 'rising' | 'falling' | 'stable';
  growth_rate: number;
  related_keywords: string[];
  market_opportunity: 'high' | 'medium' | 'low',
  timestamp: Date;

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

  name: string;
  size: number;

  growth_rate: number,
  demographics: Record < string, any>;
  psychographics: Record < string, any>;
  buying_behavior: Record < string, any>;
  pain_points: string[],
  solutions: string[];

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

  target_market: string;
  research_type: 'trends' | 'competitors' | 'segments' | 'comprehensive';
  timeframe: '7d' | '30d' | '90d' | '1y';

  includeHistoricalData: boolean,
  custom_metrics?: string[];

  success: boolean;
  data: {
    trends?: MarketTrend[];
    competitors?: CompetitorAnalysis[];

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

  async analyzeMarketTrends(request: MarketResearchRequest): Promise<MarketTrend[]> {
    try {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/trends`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)

      const data = await response && response.json();
      return data && data.trends || []

    } catch (error) {
      console && console.error('Error analyzing market trends:', error);
      throw error
  async analyzeCompetitors(request: MarketResearchRequest): Promise<CompetitorAnalysis[]> {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/competitors`, {

      return data && data.competitors || []

      console && console.error('Error analyzing competitors:', error);
  async segmentMarket(request: MarketResearchRequest): Promise<MarketSegment[]> {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/segments`, {

      return data && data.segments || []

      console && console.error('Error segmenting market:', error);
  async generateComprehensiveReport(request: MarketResearchRequest): Promise<MarketReport> {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/comprehensive`, {

      return data && data.report

      console && console.error('Error generating comprehensive report:', error);
  async getRealTimeInsights(keyword: string): Promise<MarketTrend[]> {
      const response = await fetch(`${this && this.baseUrl}/api/market-research/realtime?keyword=${encodeURIComponent(keyword)}`, {

          'Authorization': `Bearer ${this && this.apiKey}`}});

      console && console.error('Error getting real-time insights:', error);
  async exportReport(reportId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/export/${reportId}`, {
        body: JSON && JSON.stringify({ format })});

      return data && data.downloadUrl

      console && console.error('Error exporting report:', error);
  async scheduleReport(request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise<string> {

      const response = await fetch(`${this && this.baseUrl}/api/market-research/schedule`, {
        body: JSON && JSON.stringify({ ...request, schedule })});

      return data && data.scheduleId

      console && console.error('Error scheduling report:', error);
export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY |'demo-key');

    report?: MarketReport;
  insights: string[];
  next_steps: string[],
  estimatedROI: number;
export class AIMarketResearchService {
  private api_key: string;
  private base_url: string,
  constructor (api_key: string, base_url: string = 'https://api.ziontechgroup.com') {
    this.api_key = api_key,
    this.base_url = base_url;
  async analyzeMarketTrends (request: MarketResearchRequest): Promise < MarketTrend[]> {
      const response = await fetch (`${this.base_url}/api / market - research / trends`, {
          'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify (request)});
;
      // Check condition
if ( {) {
  $2
        throw new Error (`HTTP error! status: ${response.status}`);
      const data = await response.json ();
      return data.trends || [];
      console.error ('Error analyzing market trends:', error);
      throw error;
  async analyze_competitors (request: MarketResearchRequest): Promise < CompetitorAnalysis[]> {
      const response = await fetch (`${this.base_url}/api / market - research / competitors`, {
      return data.competitors || [];
      console.error ('Error analyzing competitors:', error);
  async segment_market (request: MarketResearchRequest): Promise < MarketSegment[]> {
      const response = await fetch (`${this.base_url}/api / market - research / segments`, {
      return data.segments || [];
      console.error ('Error segmenting market:', error);
  async generateComprehensiveReport (request: MarketResearchRequest): Promise < MarketReport> {
      const response = await fetch (`${this.base_url}/api / market - research / comprehensive`, {
      return data.report;
      console.error ('Error generating comprehensive report:', error);
  async getRealTimeInsights (keyword: string): Promise < MarketTrend[]> {
      const response = await fetch (`${this.base_url}/api / market - research / realtime?keyword=${encodeURIComponent (keyword)}`, {
          'Authorization': `Bearer ${this.api_key}`}});
      console.error ('Error getting real - time insights:', error);
  async export_report (report_id: string, format: 'pdf' | 'csv' | 'excel'): Promise < string> {
      const response = await fetch (`${this.base_url}/api / market - research / export/${report_id}`, {
        body: JSON.stringify ({ format })});
      return data.download_url;
      console.error ('Error exporting report:', error);
  async schedule_report (request: MarketResearchRequest, schedule: 'daily' | 'weekly' | 'monthly'): Promise < string> {
      const response = await fetch (`${this.base_url}/api / market - research / schedule`, {
        body: JSON.stringify ({ ...request, schedule })});
      return data.schedule_id;
      console.error ('Error scheduling report:', error);
export const aiMarketResearchService = new AIMarketResearchService (process.env.MARKET_RESEARCH_API_KEY || 'demo - key');

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || 'demo-key');
