 
}async getInvestmentRecommendations (userId: string, riskTolerance: string, investmentHorizon: number) : Promise<InvestmentRecommendation[]> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/financial/recommendations`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
}async createFinancialPlan (request: FinancialRequest) : Promise<FinancialPlan> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/api/financial/plan`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (request) 
});
