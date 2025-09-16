<<<<<<< HEAD
  id: string;
=======

;
export interface InvestmentPortfolio  {export interface InvestmentPortfolio  {id: string;
>>>>>>> origin/merge-pr-12271
  userId: string;
  name: string;
  totalValue: number;
  currency: string;
<<<<<<< HEAD
=======

  risk_tolerance: 'conservative' | 'moderate' | 'aggressive',
  investment_horizon: number, // in years;
  target_return: number;

  assets: PortfolioAsset[];
  last_rebalanced: Date;
  performance: PortfolioPerformance;

  created_at: Date,
  updated_at: Date;

}
}
export interface PortfolioAsset  {export interface PortfolioAsset  {export interface PortfolioAsset  {id: string;
  symbol: string;
  name: string;
  type: 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'crypto' | 'real_estate' | 'commodity';
  quantity: number;current_price: number;
  market_value: number,allocation: number, // percentage of portfolio;
  purchase_price: number;
  purchase_date: Date;
  performance: {daily_return: number;
    weekly_return: number;
    monthly_return: number;
    yearly_return: number,total_return: number;volatility: number;
  sharpe_ratio: number;
  max_drawdown: number;
  beta: number;
  alpha: number;
  id: string;
  user_id: string;current_price: number;
  market_value: number,allocation: number, // percentage of portfolio;
  purchase_price: number;
  purchase_date: Date;
  performance: {daily_return: number;
    weekly_return: number;
    monthly_return: number;
    yearly_return: number,total_return: number;}
}
export interface PortfolioPerformance  {total_return: number;
export interface PortfolioAsset {

  riskTolerance: 'conservative' | 'moderate' | 'aggressive'

  assets: PortfolioAsset[];
  last_rebalanced: Date;
  performance: PortfolioPerformance;
}
export interface PortfolioAsset {

export interface PortfolioAsset {;
}
export interface PortfolioAsset {
>>>>>>> origin/merge-pr-12271
  id: string;
  symbol: string;
  name: string;
  type: 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'crypto' | 'real_estate' | 'commodity';
  quantity: number;
<<<<<<< HEAD
=======

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
}
export interface InvestmentRecommendation  {id: string;
  id: string;
  user_id: string;
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
}
export interface InvestmentRecommendation {
  id: string;
  user_id: string;
  type: 'buy' | 'sell' | 'hold' | 'rebalance';
  asset: {symbol: string;
    name: string;}
export interface FinancialGoal  {id: string;
  user_id: string;
  name: string;
  target_amount: number;
  current_amount: number;
  target_date: Date;
  priority: 'low' | 'medium' | 'high';
  category: 'retirement' | 'education' | 'home' | 'emergency' | 'vacation' | 'business' | 'other';
export interface MarketAnalysis  {id: string;
  market: string;type: string,current_price: number;
  }
  confidence: number;
  reasoning: string[];
  expected_return: number;
  risk_level: 'low' | 'medium' | 'high',time_horizon: number, // in months;
  alternatives: string[];
  created_at: Date,expires_at: Date;}
export interface FinancialGoal  {id: string;
  user_id: string;
  name: string;
  target_amount: number;
  current_amount: number;
  target_date: Date;
  priority: 'low' | 'medium' | 'high';
  category: 'retirement' | 'education' | 'home' | 'emergency' | 'vacation' | 'business' | 'other';monthly_contribution: number;
  expected_return: number;
  risk_tolerance: 'conservative' | 'moderate' | 'aggressive',progress: number, // percentage;
  created_at: Date,updated_at: Date;}
export interface MarketAnalysis  {id: string;
  market: string;analysis: string,key_metrics: Record < string, number>;}
export interface MarketAnalysis  {id: string;
  market: string;
  analysis: string,key_metrics: Record < string, number>;type: string;
    currentPrice: number;
  }
  confidence: number;
  reasoning: string[];
  expectedReturn: number;
  riskLevel: 'low' | 'medium' | 'high';
  timeHorizon: number, // in months;
  alternatives: string[];
  createdAt: Date;
  expiresAt: Date;
}
export interface FinancialGoal  {export interface FinancialGoal  {id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date;
  priority: 'low' | 'medium' | 'high';
  category: 'retirement' | 'education' | 'home' | 'emergency' | 'vacation' | 'business' | 'other';
  monthlyContribution: number;
  expectedReturn: number;riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  progress: number, // percentage;
  createdAt: Date;
  updatedAt: Date;
}
export interface MarketAnalysis  {export interface MarketAnalysis  {id: string;
  market: string;analysis: string;
  keyMetrics: Record<string, number>;trends: string[];
  risks: string[];
  opportunities: string[];
  recommendations: string[];
  confidence: number;last_updated: Date,next_update: Date;}
export interface FinancialPlan  {id: string;
  user_id: string;
  name: string;
  summary: string;goals: FinancialGoal[],investment_strategy: {asset_allocation: Record < string, number>;
    rebalancing_frequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually',risk_management: string[];
  }
  cash_flow: {monthly_income: number;
    monthly_expenses: number;
    savings_rate: number,emergency_fund: number;lastUpdated: Date;
  nextUpdate: Date;
}
export interface FinancialPlan  {export interface FinancialPlan  {id: string;
  userId: string;
  name: string;
  summary: string;goals: FinancialGoal[];
  investmentStrategy: {assetAllocation: Record<string, number>;
    rebalancingFrequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually';
    riskManagement: string[];
  }
  cashFlow: {monthlyIncome: number;
    monthlyExpenses: number;savingsRate: number;
    emergencyFund: number;
  last_updated: Date,next_update: Date;}
export interface FinancialPlan  {id: string;
  user_id: string;
  name: string;
  summary: string;goals: FinancialGoal[],investment_strategy: {asset_allocation: Record < string, number>;
    rebalancing_frequency: 'monthly' | 'quarterly' | 'semi_annually' | 'annually',risk_management: string[];
  }
  cash_flow: {monthly_income: number;
    monthly_expenses: number;
    savings_rate: number,emergency_fund: number;}
  insurance: {quantity: number;  id: string;
  user_id: string;
  currentPrice: number;marketValue: number;
  allocation: number, // percentage of portfolio;
  purchasePrice: number;
  purchaseDate: Date;
  performance: {dailyReturn: number;
    weeklyReturn: number;
    monthlyReturn: number;yearlyReturn: number;
    totalReturn: number;
  }
}
export interface PortfolioPerformance  {export interface PortfolioPerformance  {totalReturn: number;
  annualizedReturn: number;
  volatility: number;
  sharpeRatio: number;
  maxDrawdown: number;
  beta: number;
  alpha: number;
  trackingError: number;informationRatio: number;
  sortinoRatio: number;
}
export interface InvestmentRecommendation  {export interface InvestmentRecommendation  {id: string;
  userId: string;
  asset: {symbol: string;
    name: string;  insurance: {life: boolean;
>>>>>>> origin/merge-pr-12271
  type: 'buy' | 'sell' | 'hold' | 'rebalance';
  asset: {
    symbol: string;
    name: string;
<<<<<<< HEAD
=======

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

  monthly_contribution: number;
  expected_return: number;
  risk_tolerance: 'conservative' | 'moderate' | 'aggressive',
  progress: number, // percentage;
  created_at: Date,
  updated_at: Date;

}
export interface MarketAnalysis {
  id: string;
  market: string;

  analysis: string,
  key_metrics: Record < string, number>;

>>>>>>> origin/merge-pr-12271
  trends: string[];
  risks: string[];
  opportunities: string[];
  recommendations: string[];
  confidence: number;
  insurance: {
    life: boolean;
    health: boolean;
<<<<<<< HEAD
    disability: boolean;
=======
    disability: boolean;property: boolean,recommendations: string[];
  }
  tax: {estimatedTaxLiability: number;
    taxOptimizationStrategies: string[],deductions: string[];
  }
  retirement: {target_age: number;
    estimated_needs: number;
    current_savings: number;
    monthly_contribution: number,projected_value: number;
  }
  created_at: Date,updated_at: Date;
    property: boolean,recommendations: string[];
  created_at: Date,
  updated_at: Date;

    property: boolean,
    recommendations: string[];
  }
  tax: {estimatedTaxLiability: number;
    taxOptimizationStrategies: string[],deductions: string[];
  }
  retirement: {target_age: number;
    estimated_needs: number;
    current_savings: number;
    monthly_contribution: number,projected_value: number;
  }
  created_at: Date,updated_at: Date;
}}
export interface FinancialRequest  {user_id: string;
  request_type: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking',parameters: Record < string, any>;
  preferences?: Record < string, any>;}
export interface FinancialResponse  {export interface FinancialResponse  {export interface FinancialResponse  {userId: string;requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking';
  parameters: Record<string, any>;preferences?: Record<string, any>;
}}
export interface FinancialResponse  {success: boolean;
  data: {portfolio?: InvestmentPortfolio;
    recommendations?: InvestmentRecommendation[];
    plan?: FinancialPlan;constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {this && this.apiKey = apiKey,this && this.baseUrl = baseUrl;
    analysis?: MarketAnalysis;
    goals?: FinancialGoal[];
  }
  insights: string[];
  nextSteps: string[];
  riskWarnings: string[];
  estimatedFees: number;
}export class AIFinancialAdvisorService {private apiKey: string;private baseUrl: string;
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }
  async analyzePortfolio(portfolioId: string): Promise<InvestmentPortfolio> {try {const response = await fetch(`${this && this.baseUrl}/api/financial/portfolio/${portfolioId}/analyze`, {headers: {'Authorization': `Bearer ${this && this.apiKey}`}})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.portfolio;
          'Authorization': `Bearer ${this && this.apiKey}`}})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}
      const data = await response && response.json()return data && data.portfolio;
    } catch (error) {console && console.error('Error analyzing portfolio:', error)}
  async analyzePortfolio(portfolioId: string): Promise<InvestmentPortfolio> {try {const response = await fetch(`${this.baseUrl}/api/financial/portfolio/${portfolioId}/analyze`, {headers: {'Authorization': `Bearer ${this.apiKey}`}})if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
      const data = await response.json()return data.portfolio;
    } catch (error) {console.error('Error analyzing portfolio:', error)} catch (error) {console && console.error('Error analyzing portfolio:', error)} catch (error) {console && console.error('Error analyzing portfolio:', error)throw error;
}export interface FinancialRequest  {user_id: string;
  request_type: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking',parameters: Record < string, any>;
  preferences?: Record < string, any>;requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking';
  parameters: Record<string, any>;preferences?: Record<string, any>;
}  }
  async analyzePortfolio(portfolioId: string): Promise<InvestmentPortfolio> {try {const response = await fetch(`${this && this.baseUrl}/api/financial/portfolio/${portfolioId}/analyze`, {headers: {      throw error;
    }
  }
  async getInvestmentRecommendations(userId: string, riskTolerance: string, investmentHorizon: number): Promise<InvestmentRecommendation[]> {try {const response = await fetch(`${this && this.baseUrl}/api/financial/recommendations`, {method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify({ userId, riskTolerance, investmentHorizon })})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.recommendations || [];
    } catch (error) {console && console.error('Error getting investment recommendations:', error)} catch (error) {console && console.error('Error getting investment recommendations:', error)throw error;
    }
  }
  async createFinancialPlan(request: FinancialRequest): Promise<FinancialPlan> {try {const response = await fetch(`${this && this.baseUrl}/api/financial/plan`, {method: 'POST',headers: {'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'}body: JSON && JSON.stringify(request)})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}
      const data = await response && response.json()return data && data.plan;
    } catch (error) {console && console.error('Error creating financial plan:', error)const response = await fetch(`${this.baseUrl}/api/financial/plan`, {console && console.error('Error getting investment recommendations:', error)if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.recommendations || [];
    } catch (error) {console && console.error('Error getting investment recommendations:', error)const response = await fetch(`${this.baseUrl}/api/financial/recommendations`, {method: 'POST';
        headers: {'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(request)})body: JSON.stringify({ userId, riskTolerance, investmentHorizon })})if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
      const data = await response.json()return data.plan;
    } catch (error) {console.error('Error creating financial plan:', error)} catch (error) {console && console.error('Error creating financial plan:', error)throw error;
    }
  }
  async trackFinancialGoals(userId: string): Promise<FinancialGoal[]> {try {if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.goals || [];
    } catch (error) {'Authorization': `Bearer ${this && this.apiKey}`}})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}
      const data = await response && response.json()return data && data.goals || [];
    } catch (error) {console && console.error('Error tracking financial goals:', error)const response = await fetch(`${this.baseUrl}/api/financial/goals/${userId}`, {headers: {'Authorization': `Bearer ${this.apiKey}`}})if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
      const data = await response.json()return data.goals |[];
    } catch (error) {console.error('Error tracking financial goals:', error)} catch (error) {console && console.error('Error tracking financial goals:', error)throw error;
    }
  }
  async getMarketAnalysis(market: string): Promise<MarketAnalysis> {try {return data.recommendations |[];
    } catch (error) {console.error('Error getting investment recommendations:', error)throw error;
    }
  }
  async createFinancialPlan(request: FinancialRequest): Promise<FinancialPlan> {try {} catch (error) {console && console.error('Error creating financial plan:', error)throw error;
  created_at: Date,
  updated_at: Date;
}
  userId: string;

  requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking'
  parameters: Record<string, any>;

  preferences?: Record<string, any>
}
export interface FinancialRequest {
  user_id: string;
  request_type: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking',
  parameters: Record < string, any>;
  preferences?: Record < string, any>;

}
export interface FinancialResponse {

  requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking'
  parameters: Record<string, any>;

  preferences?: Record<string, any>
}

}
export interface FinancialResponse {
>>>>>>> origin/merge-pr-12271
  success: boolean;
  data: {
    portfolio?: InvestmentPortfolio;
    recommendations?: InvestmentRecommendation[];
    plan?: FinancialPlan;
<<<<<<< HEAD
  async rebalancePortfolio(portfolioId: string, targetAllocation: Record<string, number>): Promise<{
    currentAllocation: Record<string, number>;
=======

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

export class AIFinancialAdvisorService {

  private apiKey: string;

  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl
  }
  async analyzePortfolio(portfolioId: string): Promise<InvestmentPortfolio> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/financial/portfolio/${portfolioId}/analyze`, {
        headers: {

          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.portfolio

    } catch (error) {
      console && console.error('Error analyzing portfolio:', error);
    } catch (error) {
      console && console.error('Error analyzing portfolio:', error);
      throw error
    }
  }
  async getInvestmentRecommendations(userId: string, riskTolerance: string, investmentHorizon: number): Promise<InvestmentRecommendation[]> {
    try {


      const response = await fetch(`${this && this.baseUrl}/api/financial/recommendations`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify({ userId, riskTolerance, investmentHorizon })});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.recommendations || []

    } catch (error) {
      console && console.error('Error getting investment recommendations:', error);
      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.recommendations || []

    } catch (error) {
      console && console.error('Error getting investment recommendations:', error);
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
    } catch (error) {
      console && console.error('Error getting investment recommendations:', error);
      throw error
    }
  }
  async createFinancialPlan(request: FinancialRequest): Promise<FinancialPlan> {
    try {

      const response = await fetch(`${this && this.baseUrl}/api/financial/plan`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(request)});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.plan

    } catch (error) {
      console && console.error('Error creating financial plan:', error);
    } catch (error) {
      console && console.error('Error creating financial plan:', error);
      throw error
    }
  }
  async trackFinancialGoals(userId: string): Promise<FinancialGoal[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/financial/goals/${userId}`, {
        headers: {

          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.goals || []

    } catch (error) {
      console && console.error('Error tracking financial goals:', error);
    } catch (error) {
      console && console.error('Error tracking financial goals:', error);
      throw error
    }
  }
  async getMarketAnalysis(market: string): Promise<MarketAnalysis> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/financial/market-analysis/${market}`, {
        headers: {

          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.analysis

    } catch (error) {
      console && console.error('Error getting market analysis:', error);
    } catch (error) {
      console && console.error('Error getting market analysis:', error);
      console && console.error('Error tracking financial goals:', error);
      throw error
    }
  }
  async getMarketAnalysis(market: string): Promise<MarketAnalysis> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/financial/market-analysis/${market}`, {
        headers: {

          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.analysis

    } catch (error) {
      console && console.error('Error getting market analysis:', error);
      throw error
    }
  }
  async trackFinancialGoals(userId: string): Promise<FinancialGoal[]> {try {const response = await fetch(`${this && this.baseUrl}/api/financial/goals/${userId}`, {headers: {'Authorization': `Bearer ${this && this.apiKey}`}})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.analysis;
    } catch (error) {} catch (error) {console && console.error('Error getting market analysis:', error)headers: {'Authorization': `Bearer ${this && this.apiKey}`}})} catch (error) {console && console.error('Error tracking financial goals:', error)throw error;
    }
  }
  async getMarketAnalysis(market: string): Promise<MarketAnalysis> {try {const response = await fetch(`${this && this.baseUrl}/api/financial/market-analysis/${market}`, {headers: {const response = await fetch(`${this && this.baseUrl}/api/financial/market-analysis/${market}`, {        headers: {'Authorization': `Bearer ${this && this.apiKey}`}})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}const data = await response && response.json()return data && data.analysis;
    } catch (error) {'Authorization': `Bearer ${this && this.apiKey}`}})if (!response && response.ok) {throw new Error(`HTTP error! status: ${response && response.status}`)}
      const data = await response && response.json()return data && data.analysis;
    } catch (error) {console && console.error('Error getting market analysis:', error)const response = await fetch(`${this.baseUrl}/api/financial/market-analysis/${market}`, {headers: {'Authorization': `Bearer ${this.apiKey}`}})if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
      const data = await response.json()return data.analysis;
    } catch (error) {console.error('Error getting market analysis:', error)console && console.error('Error getting market analysis:', error)} catch (error) {console && console.error('Error getting market analysis:', error)console && console.error('Error getting market analysis:', error)throw error;
    }
  }
  async rebalancePortfolio(portfolioId: string, targetAllocation: Record<string, number>): Promise<{currentAllocation: Record<string, number>;
>>>>>>> origin/merge-pr-12271
    targetAllocation: Record<string, number>;
    rebalancingActions: Array<{
      action: 'buy' | 'sell';
      symbol: string;
      throw error;
    }
  }
}




export const aiFinancialAdvisorService = new AIFinancialAdvisorService(process.env.FINANCIAL_ADVISOR_API_KEY || 'demo-key');

=======

export const aiFinancialAdvisorService = new AIFinancialAdvisorService(process.env.FINANCIAL_ADVISOR_API_KEY || 'demo-key');
