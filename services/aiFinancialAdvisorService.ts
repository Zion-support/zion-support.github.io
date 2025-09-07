




export interface InvestmentPortfolio {
export interface InvestmentPortfolio {;
  id: string;
  userId: string;
  name: string;
  totalValue: number;
  currency: string;


  assets: PortfolioAsset[];
  last_rebalanced: Date;
  performance: PortfolioPerformance;

}
  riskTolerance: 'conservative' | 'moderate' | 'aggressive'

  assets: PortfolioAsset[];
  last_rebalanced: Date;
  performance: PortfolioPerformance;
}
export interface PortfolioAsset {

export interface PortfolioAsset {;


}
export interface PortfolioAsset {




}
export interface PortfolioAsset {

  id: string;
  symbol: string;
  name: string;
  type: 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'crypto' | 'real_estate' | 'commodity';
  quantity: number;






  current_price: number;
  market_value: number,
  allocation: number, // percentage of portfolio;
  purchase_price: number;
  purchase_date: Date;
  performance: {
    daily_return: number;
    weekly_return: number;
    monthly_return: number;
    yearly_return: number,
    total_return: number;

  }
}
export interface PortfolioPerformance {
  total_return: number;
  annualized_return: number;
  volatility: number;
  sharpe_ratio: number;
  max_drawdown: number;
  beta: number;
  alpha: number;
  id: string;
  user_id: string;

  current_price: number;
  market_value: number,
  allocation: number, // percentage of portfolio;
  purchase_price: number;
  purchase_date: Date;
  performance: {
    daily_return: number;
    weekly_return: number;
    monthly_return: number;
    yearly_return: number,
    total_return: number;
  }
}
export interface PortfolioPerformance {
  total_return: number;
  annualized_return: number;
  volatility: number;
  sharpe_ratio: number;
  max_drawdown: number;
  beta: number;
  alpha: number;
  tracking_error: number;
  information_ratio: number,
  sortino_ratio: number;

  tracking_error: number;
  information_ratio: number,
  sortino_ratio: number;

}
export interface InvestmentRecommendation {
  id: string;
  user_id: string;
  quantity: number;  id: string;
  user_id: string;
  currentPrice: number;



  allocation: number, // percentage of portfolio
  purchasePrice: number;
  purchaseDate: Date;
  performance: {
    dailyReturn: number;
    weeklyReturn: number;
    monthlyReturn: number;



    totalReturn: number
  }
}
export interface PortfolioPerformance {

export interface PortfolioPerformance {;
  totalReturn: number;
  annualizedReturn: number;
  volatility: number;
  sharpeRatio: number;
  maxDrawdown: number;
  beta: number;
  alpha: number;
  trackingError: number;



  sortinoRatio: number
}
export interface InvestmentRecommendation {

export interface InvestmentRecommendation {;
  id: string;
  userId: string;







  type: 'buy' | 'sell' | 'hold' | 'rebalance';
  asset: {
    symbol: string;
    name: string;




    type: string,
    current_price: number;
  }
  confidence: number;
  reasoning: string[];
  expected_return: number;
  risk_level: 'low' | 'medium' | 'high',
  time_horizon: number, // in months;
  alternatives: string[];
  created_at: Date,
  expires_at: Date;

}
export interface FinancialGoal {
  id: string;
  user_id: string;
  name: string;
  target_amount: number;
  current_amount: number;
  target_date: Date;
  priority: 'low' | 'medium' | 'high';
  category: 'retirement' | 'education' | 'home' | 'emergency' | 'vacation' | 'business' | 'other';
export interface MarketAnalysis {
  id: string;
  market: string;

  analysis: string,
  key_metrics: Record < string, number>;

    type: string,
    current_price: number;
  }
  confidence: number;
  reasoning: string[];
  expected_return: number;
  risk_level: 'low' | 'medium' | 'high',
  time_horizon: number, // in months;
  alternatives: string[];
  created_at: Date,
  expires_at: Date;

}
export interface FinancialGoal {
  id: string;
  user_id: string;
  name: string;
  target_amount: number;
  current_amount: number;
  target_date: Date;
  priority: 'low' | 'medium' | 'high';
  category: 'retirement' | 'education' | 'home' | 'emergency' | 'vacation' | 'business' | 'other';
export interface MarketAnalysis {
  id: string;
  market: string;

  analysis: string,
  key_metrics: Record < string, number>;






  trends: string[];
  risks: string[];
  opportunities: string[];
  recommendations: string[];
  confidence: number;




  last_updated: Date,
  next_update: Date;

last_updated: Date,
  next_update: Date;
}
export interface FinancialPlan {
  id: string;
  user_id: string;
  name: string;
  summary: string;

  goals: FinancialGoal[],
  investment_strategy: {
    asset_allocation: Record < string, number>;
    rebalancing_frequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually',
    risk_management: string[];
  }
  cash_flow: {
    monthly_income: number;
    monthly_expenses: number;
    savings_rate: number,
    emergency_fund: number;


  lastUpdated: Date

  nextUpdate: Date
}
export interface FinancialPlan {

export interface FinancialPlan {;
  id: string;
  userId: string;
  name: string;
  summary: string;

  goals: FinancialGoal[]
  investmentStrategy: {
    assetAllocation: Record<string, number>;
    rebalancingFrequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually'

    riskManagement: string[]
  }
  cashFlow: {
    monthlyIncome: number;
    monthlyExpenses: number;

    savingsRate: number

    emergencyFund: number

  last_updated: Date,
  next_update: Date;

}
export interface FinancialPlan {
  id: string;
  user_id: string;
  name: string;
  summary: string;

  goals: FinancialGoal[],
  investment_strategy: {
    asset_allocation: Record < string, number>;
    rebalancing_frequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually',
    risk_management: string[];
  }
  cash_flow: {
    monthly_income: number;
    monthly_expenses: number;
    savings_rate: number,
    emergency_fund: number;




  }
  insurance: {
    life: boolean;
    health: boolean;
    disability: boolean;



  asset: {
    symbol: string;


