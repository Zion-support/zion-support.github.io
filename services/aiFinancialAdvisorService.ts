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
  id: string;
  symbol: string;
  name: string;
  type: 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'crypto' | 'real_estate' | 'commodity';
  quantity: number;  id: string;
  user_id: string;
  currentPrice: number;

  marketValue: number

  allocation: number, // percentage of portfolio
  purchasePrice: number,
  purchaseDate: Date,
  performance: {
    dailyReturn: number,
    weeklyReturn: number,
    monthlyReturn: number,
    yearlyReturn: number,
    totalReturn: number}
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/delete-old-data-records-6bba
  current_price: number;
  market_value: number,
  allocation: number, // percentage of portfolio;
  purchase_price: number;
  purchase_date: Date;

<<<<<<< HEAD
  performance: {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    daily_return: number;
    weekly_return: number;
    monthly_return: number;
    yearly_return: number,
    total_return: number;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  volatility: number;
  sharpe_ratio: number;
  max_drawdown: number;
  beta: number;
  alpha: number;
<<<<<<< HEAD


=======
  id: string;
  user_id: string;

  }
}
export interface PortfolioPerformance {
  totalReturn: number,
  annualizedReturn: number,
  volatility: number,
  sharpeRatio: number,
  maxDrawdown: number,
  beta: number,
  alpha: number,
  trackingError: number,
  informationRatio: number,
  sortinoRatio: number}

  informationRatio: number

  sortinoRatio: number
}
export interface InvestmentRecommendation {

export interface InvestmentRecommendation {;
  id: string;
  userId: string;
  asset: {
    symbol: string;
    name: string;  insurance: {
    life: boolean;
    health: boolean;
    disability: boolean;

    property: boolean,
    recommendations: string[]
  },
  tax: {
    estimatedTaxLiability: number,
    taxOptimizationStrategies: string[],
    deductions: string[]
  },
  retirement: {
    target_age: number;
    estimated_needs: number;
    current_savings: number;
    monthly_contribution: number,
    projected_value: number;
  }
  created_at: Date,
  updated_at: Date;
    property: boolean,
    recommendations: string[];
  }
  tax: {
    estimatedTaxLiability: number;
    taxOptimizationStrategies: string[],
    deductions: string[];
  }
  retirement: {
    target_age: number;
    estimated_needs: number;
    current_savings: number;
    monthly_contribution: number,
    projected_value: number;
  }
  created_at: Date,
  updated_at: Date;
}
  userId: string;

  requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking'
  parameters: Record<string, any>;

  preferences?: Record<string, any>
}export interface FinancialRequest {
  user_id: string;
  request_type: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking',
  parameters: Record < string, any>;
  preferences?: Record < string, any>;

  requestType: 'portfolio_analysis' | 'investment_recommendation' | 'financial_planning' | 'market_analysis' | 'goal_tracking'
  parameters: Record<string, any>;

  preferences?: Record<string, any>
}  }
  async analyzePortfolio(portfolioId: string): Promise<InvestmentPortfolio> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/financial/portfolio/${portfolioId}/analyze`, {
        headers: {      throw error
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
      console && console.error('Error getting investment recommendations:', error);      if (!response && response.ok) {
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
      throw error
    }
  }
  async createFinancialPlan(request: FinancialRequest): Promise<FinancialPlan> {
    try {    } catch (error) {
      console && console.error('Error creating financial plan:', error);
      throw error
    }
  }
  async trackFinancialGoals(userId: string): Promise<FinancialGoal[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/financial/goals/${userId}`, {
        headers: {

          'Authorization': `Bearer ${this && this.apiKey}`}});    } catch (error) {
      console && console.error('Error tracking financial goals:', error);
      throw error
    }
  }
  async getMarketAnalysis(market: string): Promise<MarketAnalysis> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/financial/market-analysis/${market}`, {        headers: {

          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`)
      }

      const data = await response && response.json();
      return data && data.analysis

    } catch (error) {
      console && console.error('Error getting market analysis:', error);    } catch (error) {
      console && console.error('Error getting market analysis:', error);
      console && console.error('Error getting market analysis:', error);
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

      const response = await fetch(`${this && this.baseUrl}/api/financial/portfolio/${portfolioId}/rebalance`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify({ targetAllocation })});
      console && console.error('Error rebalancing portfolio:', error);    } catch (error) {
      console && console.error('Error rebalancing portfolio:', error);
    } catch (error) {
      console && console.error('Error rebalancing portfolio:', error);
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
      const response = await fetch(`${this && this.baseUrl}/api/financial/retirement-calculator`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify({ userId, targetAge, desiredIncome })});
      console && console.error('Error calculating retirement needs:', error);    } catch (error) {
      console && console.error('Error calculating retirement needs:', error);
      throw error
    }
  }
  async getTaxOptimizationStrategies(userId: string, taxYear: number): Promise<{    } catch (error) {
      console && console.error('Error getting tax optimization strategies:', error);
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
      const response = await fetch(`${this && this.baseUrl}/api/financial/report`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify({ userId, reportType })});
      console && console.error('Error generating financial report:', error);    } catch (error) {
      console && console.error('Error generating financial report:', error);
      throw error
    }
  }
}

<<<<<<< HEAD
export const aiFinancialAdvisorService = new AIFinancialAdvisorService(process.env.FINANCIAL_ADVISOR_API_KEY |'demo-key');
  id: string,;
  userId: string,;
  name: string,;
  totalValue: number,;
  currency: string,;
  riskTolerance: 'conservative' | 'moderate' | 'aggressive',;
  investmentHorizon: number, // in years;
  targetReturn: number,;
  assets: PortfolioAsset[],;
  lastRebalanced: Date,;
  performance: PortfolioPerformance,;
  createdAt: Date,;
  updatedAt: Date;export const aiFinancialAdvisorService = new AIFinancialAdvisorService(process.env.FINANCIAL_ADVISOR_API_KEY || 'demo-key');
