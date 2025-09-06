export interface InvestmentPortfolio {
  id: string;
  userId: string;
  name: string;
  totalValue: number;
  currency: string;

  riskTolerance: 'conservative' | 'moderate' | 'aggressive';

  investmentHorizon: number, // in years
  targetReturn: number;
  assets: PortfolioAsset[];
  lastRebalanced: Date;
  performance: PortfolioPerformance;

  createdAt: Date;

  updatedAt: Date
}

export interface PortfolioAsset {
  id: string;
  symbol: string;
  name: string;
  type: 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'crypto' | 'real_estate' | 'commodity';
  quantity: number;
  currentPrice: number;

  marketValue: number;

  allocation: number, // percentage of portfolio
  purchasePrice: number;
  purchaseDate: Date;
  performance: {
    dailyReturn: number;
    weeklyReturn: number;
    monthlyReturn: number;

    yearlyReturn: number;

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

  informationRatio: number;

  sortinoRatio: number
}

export interface InvestmentRecommendation {
  id: string;
  userId: string;
  type: 'buy' | 'sell' | 'hold' | 'rebalance';
  asset: {
    symbol: string;
    name: string;

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

  riskTolerance: 'conservative' | 'moderate' | 'aggressive';

  progress: number, // percentage
  createdAt: Date;
  updatedAt: Date
}

export interface MarketAnalysis {
  id: string;
  market: string;

  analysis: string;
  keyMetrics: Record<string, number>,

  trends: string[];
  risks: string[];
  opportunities: string[];
  recommendations: string[];
  confidence: number;

  lastUpdated: Date;

  nextUpdate: Date
}

export interface FinancialPlan {
  id: string;
  userId: string;
  name: string;
  summary: string;

  goals: FinancialGoal[];
  investmentStrategy: {
    assetAllocation: Record<string, number>,
    rebalancingFrequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually';

    riskManagement: string[]
  };
  cashFlow: {
    monthlyIncome: number;
    monthlyExpenses: number;

    savingsRate: number;

    emergencyFund: number
  };
  insurance: {
    life: boolean;
    health: boolean;
    disability: boolean;

    property: boolean;

    recommendations: string[]
  };
  tax: {
    estimatedTaxLiability: number;

    taxOptimizationStrategies: string[];

    deductions: string[]
  };
  retirement: {
    targetAge: number;
    estimatedNeeds: number;
    currentSavings: number;

    monthlyContribution: number;
    projectedValue: number
  },
  createdAt: Date;

  updatedAt: Date
}

export interface FinancialRequest {
  userId: string;

  requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking';
  parameters: Record<string, any>,

  preferences?: Record<string, any>
}

export interface FinancialResponse {
  success: boolean;
  data: {
    portfolio?: InvestmentPortfolio;
    recommendations?: InvestmentRecommendation[];
    plan?: FinancialPlan;

    analysis?: MarketAnalysis;
    goals?: FinancialGoal[]
  },
  insights: string[];
  nextSteps: string[];
  riskWarnings: string[];

  estimatedFees: number
}

export class AIFinancialAdvisorService {
  private apiKey: string;

  private baseUrl: string;
  constructor(apiKey: string, baseUrl: string;

