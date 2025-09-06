 interface Milestone {
  title: string;
description: string;
dueDate: string;
estimatedHours: number 
}export async function generateContract (values: ContractFormValues;
talent: TalentProfile;
clientName: string;
generatedMilestones: GeneratedMilestone[]) : Promise<string> {
  const additionalClauses = values.additionalClauses || [];
}
}