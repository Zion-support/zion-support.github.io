export interface InvestmentPortfolio {
  id: string;
  userId: string;
  name: string;
  totalValue: number;
  currency: string;
<<<<<<< HEAD
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
=======
  riskTolerance: 'conservative' | 'moderate' | 'aggressive'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  investmentHorizon: number, // in years
  targetReturn: number;
  assets: PortfolioAsset[];
  lastRebalanced: Date;
  performance: PortfolioPerformance;
<<<<<<< HEAD
  createdAt: Date;
=======
  createdAt: Date
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  updatedAt: Date
}
export interface PortfolioAsset {
  id: string;
  symbol: string;
  name: string;
  type: 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'crypto' | 'real_estate' | 'commodity';
  quantity: number;
  currentPrice: number;
<<<<<<< HEAD
  marketValue: number;
=======
  marketValue: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  allocation: number, // percentage of portfolio
  purchasePrice: number;
  purchaseDate: Date;
  performance: {
    dailyReturn: number;
    weeklyReturn: number;
    monthlyReturn: number;
<<<<<<< HEAD
    yearlyReturn: number;
=======
    yearlyReturn: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    totalReturn: number
  }
}
export interface PortfolioPerformance {
  totalReturn: number;
  annualizedReturn: number;
  volatility: number;
  sharpeRatio: number;
  maxDrawdown: number;
  beta: number;
  alpha: number;
  trackingError: number;
<<<<<<< HEAD
  informationRatio: number;
=======
  informationRatio: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  sortinoRatio: number
}
export interface InvestmentRecommendation {
  id: string;
  userId: string;
  type: 'buy' | 'sell' | 'hold' | 'rebalance';
  asset: {
    symbol: string;
    name: string;
<<<<<<< HEAD
    type: string;
    currentPrice: number
  },
  confidence: number;
  reasoning: string[];
  expectedReturn: number;
  riskLevel: 'low' | 'medium' | 'high';
  timeHorizon: number, // in months
  alternatives: string[];
  createdAt: Date;
=======
    type: string
    currentPrice: number
  }
  confidence: number;
  reasoning: string[];
  expectedReturn: number;
  riskLevel: 'low' | 'medium' | 'high'
  timeHorizon: number, // in months
  alternatives: string[];
  createdAt: Date
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  expiresAt: Date
}
export interface FinancialGoal {
  id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date;
  priority: 'low' | 'medium' | 'high';
  category: 'retirement' | 'education' | 'home' | 'emergency' | 'vacation' | 'business' | 'other';
  monthlyContribution: number;
  expectedReturn: number;
<<<<<<< HEAD
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  progress: number, // percentage
  createdAt: Date;
=======
  riskTolerance: 'conservative' | 'moderate' | 'aggressive'
  progress: number, // percentage
  createdAt: Date
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  updatedAt: Date
}
export interface MarketAnalysis {
  id: string;
  market: string;
<<<<<<< HEAD
  analysis: string;
  keyMetrics: Record<string, number>,
=======
  analysis: string
  keyMetrics: Record<string, number>;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  trends: string[];
  risks: string[];
  opportunities: string[];
  recommendations: string[];
  confidence: number;
<<<<<<< HEAD
  lastUpdated: Date;
=======
  lastUpdated: Date
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  nextUpdate: Date
}
export interface FinancialPlan {
  id: string;
  userId: string;
  name: string;
  summary: string;
<<<<<<< HEAD
  goals: FinancialGoal[];
  investmentStrategy: {
    assetAllocation: Record<string, number>,
    rebalancingFrequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually';
=======
  goals: FinancialGoal[]
  investmentStrategy: {
    assetAllocation: Record<string, number>;
    rebalancingFrequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    riskManagement: string[]
  }
  cashFlow: {
    monthlyIncome: number;
    monthlyExpenses: number;
<<<<<<< HEAD
    savingsRate: number;
=======
    savingsRate: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    emergencyFund: number
  }
  insurance: {
    life: boolean;
    health: boolean;
    disability: boolean;
<<<<<<< HEAD
    property: boolean;
=======
    property: boolean
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    recommendations: string[]
  }
  tax: {
    estimatedTaxLiability: number;
<<<<<<< HEAD
    taxOptimizationStrategies: string[];
=======
    taxOptimizationStrategies: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    deductions: string[]
  }
  retirement: {
    targetAge: number;
    estimatedNeeds: number;
    currentSavings: number;
<<<<<<< HEAD
    monthlyContribution: number;
    projectedValue: number
  },
  createdAt: Date;
=======
    monthlyContribution: number
    projectedValue: number
  }
  createdAt: Date
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  updatedAt: Date
}
export interface FinancialRequest {
  userId: string;
<<<<<<< HEAD
  requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking';
  parameters: Record<string, any>,
=======
  requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking'
  parameters: Record<string, any>;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  preferences?: Record<string, any>
}
export interface FinancialResponse {
  success: boolean;
  data: {
    portfolio?: InvestmentPortfolio;
    recommendations?: InvestmentRecommendation[];
    plan?: FinancialPlan;
<<<<<<< HEAD
    analysis?: MarketAnalysis;
    goals?: FinancialGoal[]
  },
  insights: string[];
  nextSteps: string[];
  riskWarnings: string[];
=======
    analysis?: MarketAnalysis
    goals?: FinancialGoal[]
  }
  insights: string[];
  nextSteps: string[];
  riskWarnings: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  estimatedFees: number
}
export class AIFinancialAdvisorService {
  private apiKey: string;
<<<<<<< HEAD
  private baseUrl: string;
  constructor(apiKey: string, baseUrl: string;
=======
  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
  }
  async analyzePortfolio(portfolioId: string): Promise<InvestmentPortfolio> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial/portfolio/${portfolioId}/analyze`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.portfolio
    } catch (error) {
      console.error('Error analyzing portfolio:', error);
      throw error
    }
  }
  async getInvestmentRecommendations(userId: string, riskTolerance: string, investmentHorizon: number): Promise<InvestmentRecommendation[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial/recommendations`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify({ userId, riskTolerance, investmentHorizon })});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.recommendations |[]
    } catch (error) {
      console.error('Error getting investment recommendations:', error);
      throw error
    }
  }
  async createFinancialPlan(request: FinancialRequest): Promise<FinancialPlan> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial/plan`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.plan
    } catch (error) {
      console.error('Error creating financial plan:', error);
      throw error
    }
  }
  async trackFinancialGoals(userId: string): Promise<FinancialGoal[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial/goals/${userId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.goals |[]
    } catch (error) {
      console.error('Error tracking financial goals:', error);
      throw error
    }
  }
  async getMarketAnalysis(market: string): Promise<MarketAnalysis> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial/market-analysis/${market}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.analysis
    } catch (error) {
      console.error('Error getting market analysis:', error);
      throw error
    }
  }
  async rebalancePortfolio(portfolioId: string, targetAllocation: Record<string, number>): Promise<{
    currentAllocation: Record<string, number>;
    targetAllocation: Record<string, number>;
    rebalancingActions: Array<{
      action: 'buy' | 'sell';
      symbol: string;
      quantity: number
      estimatedCost: number
    }>;
    estimatedFees: number
    expectedImpact: string
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial/portfolio/${portfolioId}/rebalance`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify({ targetAllocation })});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.rebalancing
    } catch (error) {
      console.error('Error rebalancing portfolio:', error);
      throw error
    }
  }
  async calculateRetirementNeeds(userId: string, targetAge: number, desiredIncome: number): Promise<{
    estimatedNeeds: number;
    monthlyContribution: number;
    projectedValue: number
    assumptions: Record<string, any>;
    recommendations: string[]
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial/retirement-calculator`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify({ userId, targetAge, desiredIncome })});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.calculation
    } catch (error) {
      console.error('Error calculating retirement needs:', error);
      throw error
    }
  }
  async getTaxOptimizationStrategies(userId: string, taxYear: number): Promise<{
    strategies: string[];
    estimatedSavings: number;
    implementation: string[];
    risks: string[]
    deadlines: Record<string, Date>
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial/tax-optimization`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify({ userId, taxYear })});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.optimization
    } catch (error) {
      console.error('Error getting tax optimization strategies:', error);
      throw error
    }
  }
  async generateFinancialReport(userId: string, reportType: 'comprehensive' | 'portfolio' | 'goals' | 'tax'): Promise<{
    reportId: string;
    downloadUrl: string;
    summary: string
    keyMetrics: Record<string, any>;
    recommendations: string[]
    nextSteps: string[]
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial/report`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify({ userId, reportType })});
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      return data.report
    } catch (error) {
      console.error('Error generating financial report:', error);
      throw error
    }
  }
}
<<<<<<< HEAD
export const aiFinancialAdvisorService = new AIFinancialAdvisorService(process.env.FINANCIAL_ADVISOR_API_KEY |'demo-key');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export const aiFinancialAdvisorService = new AIFinancialAdvisorService(
  process.env.FINANCIAL_ADVISOR_API_KEY || 'demo-key'
);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
