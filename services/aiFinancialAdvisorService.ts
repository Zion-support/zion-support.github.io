export interface InvestmentPortfolio {_id: string;
  userId: string;
  name: string;
  totalValue: number;
  currency: string;
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  investmentHorizon: number; // in years
  targetReturn: number;
  assets: PortfolioAsset[];
  lastRebalanced: Date;
  performance: PortfolioPerformance;
  createdAt: Date;
  updatedAt: Date;}

export interface PortfolioAsset {_id: string;
  symbol: string;
  name: string;
  type: 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'window.crypto' | 'real_estate' | 'commodity';
  quantity: number;
  currentPrice: number;
  marketValue: number;
  allocation: number; // percentage of portfolio
  purchasePrice: number;
  purchaseDate: Date;
  performance: {
    dailyReturn: number;
    weeklyReturn: number;
    monthlyReturn: number;
    yearlyReturn: number;
    totalReturn: number;};
}

export interface PortfolioPerformance {_totalReturn: number;
  annualizedReturn: number;
  volatility: number;
  sharpeRatio: number;
  maxDrawdown: number;
  beta: number;
  alpha: number;
  trackingError: number;
  informationRatio: number;
  sortinoRatio: number;}

export interface InvestmentRecommendation {_id: string;
  userId: string;
  type: 'buy' | 'sell' | 'hold' | 'rebalance';
  asset: {
    symbol: string;
    name: string;
    type: string;
    currentPrice: number;};
  confidence: number;
  reasoning: string[];
  expectedReturn: number;
  riskLevel: 'low' | 'medium' | 'high';
  timeHorizon: number; // in months
  alternatives: string[];
  createdAt: Date;
  expiresAt: Date;
}

export interface FinancialGoal {_id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date;
  priority: 'low' | 'medium' | 'high';
  category: 'retirement' | 'education' | 'home' | 'emergency' | 'vacation' | 'business' | 'other';
  monthlyContribution: number;
  expectedReturn: number;
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  progress: number; // percentage
  createdAt: Date;
  updatedAt: Date;}

export interface MarketAnalysis {_id: string;
  market: string;
  analysis: string;
  keyMetrics: Record<string, _number>;
  trends: string[];
  risks: string[];
  opportunities: string[];
  recommendations: string[];
  confidence: number;
  lastUpdated: Date;
  nextUpdate: Date;}

export interface FinancialPlan {_id: string;
  userId: string;
  name: string;
  summary: string;
  goals: FinancialGoal[];
  investmentStrategy: {
    assetAllocation: Record<string, _number>;
    rebalancingFrequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually';
    riskManagement: string[];};
  cashFlow: {_monthlyIncome: number;
    monthlyExpenses: number;
    savingsRate: number;
    emergencyFund: number;};
  insurance: {_life: boolean;
    health: boolean;
    disability: boolean;
    property: boolean;
    recommendations: string[];};
  tax: {_estimatedTaxLiability: number;
    taxOptimizationStrategies: string[];
    deductions: string[];};
  retirement: {_targetAge: number;
    estimatedNeeds: number;
    currentSavings: number;
    monthlyContribution: number;
    projectedValue: number;};
  createdAt: Date;
  updatedAt: Date;
}

export interface FinancialRequest {_userId: string;
  requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking';
  parameters: Record<string, _any>;
  preferences?: Record<string, _any>;}

export interface FinancialResponse {_success: boolean;
  data: {
    portfolio?: InvestmentPortfolio;
    recommendations?: InvestmentRecommendation[];
    plan?: FinancialPlan;
    analysis?: MarketAnalysis;
    goals?: FinancialGoal[];};
  insights: string[];
  nextSteps: string[];
  riskWarnings: string[];
  estimatedFees: number;
}

export class AIFinancialAdvisorService {_private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, _baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;}

  async analyzePortfolio(portfolioId: string): Promise<InvestmentPortfolio> {_try {
      const _response = await fetch(`${this.baseUrl}/api/financial/portfolio/${_portfolioId}/analyze`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`HTTP error! status: ${response.status}`);
      }

      const _data = await response.json();
      return data.portfolio;
    } catch (error) {_throw error;}
  }

  async getInvestmentRecommendations(userId: string, riskTolerance: string, investmentHorizon: number): Promise<InvestmentRecommendation[]> {_try {
      const _response = await fetch(`${this.baseUrl}/api/financial/recommendations`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({_userId, _riskTolerance, _investmentHorizon})});

      if (!response.ok) {_throw new Error(`HTTP error! status: ${response.status}`);
      }

      const _data = await response.json();
      return data.recommendations || [];
    } catch (error) {_throw error;}
  }

  async createFinancialPlan(request: FinancialRequest): Promise<FinancialPlan> {_try {
      const _response = await fetch(`${this.baseUrl}/api/financial/plan`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(request)});

      if (!response.ok) {_throw new Error(`HTTP error! status: ${response.status}`);
      }

      const _data = await response.json();
      return data.plan;
    } catch (error) {_throw error;}
  }

  async trackFinancialGoals(userId: string): Promise<FinancialGoal[]> {_try {
      const _response = await fetch(`${this.baseUrl}/api/financial/goals/${_userId}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`HTTP error! status: ${response.status}`);
      }

      const _data = await response.json();
      return data.goals || [];
    } catch (error) {_throw error;}
  }

  async getMarketAnalysis(market: string): Promise<MarketAnalysis> {_try {
      const _response = await fetch(`${this.baseUrl}/api/financial/market-analysis/${_market}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`HTTP error! status: ${response.status}`);
      }

      const _data = await response.json();
      return data.analysis;
    } catch (error) {_throw error;}
  }

  async rebalancePortfolio(portfolioId: string, targetAllocation: Record<string, number>): Promise<{_currentAllocation: Record<string, _number>;
    targetAllocation: Record<string, _number>;
    rebalancingActions: Array<{
      action: 'buy' | 'sell';
      symbol: string;
      quantity: number;
      estimatedCost: number;}>;
    estimatedFees: number;
    expectedImpact: string;
  }> {_try {
      const _response = await fetch(`${this.baseUrl}/api/financial/portfolio/${_portfolioId}/rebalance`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({_targetAllocation})});

      if (!response.ok) {_throw new Error(`HTTP error! status: ${response.status}`);
      }

      const _data = await response.json();
      return data.rebalancing;
    } catch (error) {_throw error;}
  }

  async calculateRetirementNeeds(userId: string, targetAge: number, desiredIncome: number): Promise<{_estimatedNeeds: number;
    monthlyContribution: number;
    projectedValue: number;
    assumptions: Record<string, _any>;
    recommendations: string[];}> {_try {
      const _response = await fetch(`${this.baseUrl}/api/financial/retirement-calculator`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({_userId, _targetAge, _desiredIncome})});

      if (!response.ok) {_throw new Error(`HTTP error! status: ${response.status}`);
      }

      const _data = await response.json();
      return data.calculation;
    } catch (error) {_throw error;}
  }

  async getTaxOptimizationStrategies(userId: string, taxYear: number): Promise<{_strategies: string[];
    estimatedSavings: number;
    implementation: string[];
    risks: string[];
    deadlines: Record<string, _Date>;}> {_try {
      const _response = await fetch(`${this.baseUrl}/api/financial/tax-optimization`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({_userId, _taxYear})});

      if (!response.ok) {_throw new Error(`HTTP error! status: ${response.status}`);
      }

      const _data = await response.json();
      return data.optimization;
    } catch (error) {_throw error;}
  }

  async generateFinancialReport(userId: string, reportType: 'comprehensive' | 'portfolio' | 'goals' | 'tax'): Promise<{_reportId: string;
    downloadUrl: string;
    summary: string;
    keyMetrics: Record<string, _any>;
    recommendations: string[];
    nextSteps: string[];}> {_try {
      const _response = await fetch(`${this.baseUrl}/api/financial/report`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({_userId, _reportType})});

      if (!response.ok) {_throw new Error(`HTTP error! status: ${response.status}`);
      }

      const _data = await response.json();
      return data.report;
    } catch (error) {_throw error;}
  }
}

export const _aiFinancialAdvisorService = new AIFinancialAdvisorService(process.env.FINANCIAL_ADVISOR_API_KEY || 'demo-key');
