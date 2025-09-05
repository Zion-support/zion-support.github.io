

interface Milestone {_title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;}

export async function generateContract(_values: ContractFormValues, _talent: TalentProfile, _clientName: string, _generatedMilestones: GeneratedMilestone[]): Promise<string> {_const _additionalClauses = values.additionalClauses || [];
  
  // Prepare milestone data if we have AI-generated milestones
  const _milestoneData = generatedMilestones.length > 0 
    ? generatedMilestones.map(m => ({
        title: m.title, _description: m.description, _dueDate: m.dueDate, _estimatedHours: m.estimatedHours}))
    : [];
  
  const {_data, _error} = await supabase.functions.invoke("generate-contract", {_body: {
      talentName: talent.full_name, _clientName: clientName, _projectName: values.projectName, _scopeSummary: values.scopeSummary, _startDate: values.startDate.toISOString(), _endDate: values.endDate?.toISOString(), _paymentTerms: values.paymentTerms, _paymentAmount: values.paymentAmount, _additionalClauses: additionalClauses, _milestones: milestoneData}
  });
  
  if (error) {_throw error;}
  
  if (data.success && data.contract) {_return data.contract;} else {_throw new Error("Failed to generate contract");}
}
