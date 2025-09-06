 //Future implementation: View specific contract details 
};
() => setShowBuilderType ('smart') 
}/> <ContractTypeCards onStandardClick= {
  () => setShowBuilderType ('standard') 
}onSmartClick= {
  () => setShowBuilderType ('smart') 
}/> <RecentContractsTable contracts= {
  recentContracts 
}onViewContract= {
  handleViewContract 
}/> {
  showBuilderType === 'standard' && (<ContractBuilder isOpen= {
  true 
}onClose= {
  () => setShowBuilderType ('none') 
}talent= {
  mockTalent 
}clientName= {
  user?.displayName || 'Client' 
}onContractGenerated= {
  handleContractGenerated 
}/>) 
}{
  showBuilderType === 'smart' && (<SmartContractBuilder isOpen= {
  true 
}onClose= {
  () => setShowBuilderType ('none') 
}talent= {
  mockTalent 
}clientName= {
  user?.displayName || 'Client' 
}onContractGenerated= {
  handleContractGenerated 
}/>) 
}</>) 
}