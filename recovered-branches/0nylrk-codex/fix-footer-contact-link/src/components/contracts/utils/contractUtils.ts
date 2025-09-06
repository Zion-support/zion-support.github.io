


interface Milestone {
  title: string,
  description: string,
  dueDate: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  estimatedHours: number
}
export async function generateContract(

  values: ContractFormValues,

  // Prepare milestone data if we have AI-generated milestones
  const milestoneData = generatedMilestones.length > 0
    ? generatedMilestones.map(m => ({

        title: m.title,
        description: m.description,
        dueDate: m.dueDate,
        estimatedHours: m.estimatedHours
      }))
    : [],
  
  const { data, error } = await supabase.functions.invoke("generate-contract", {
    body: {
      talentName: talent.full_name,
      clientName: clientName,
      projectName: values.projectName,
      scopeSummary: values.scopeSummary,
      startDate: values.startDate.toISOString(),
      endDate: values.endDate?.toISOString(),
      paymentTerms: values.paymentTerms,
      paymentAmount: values.paymentAmount,
      additionalClauses: additionalClauses,

  }
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  if (data.success && data.contract) {
    return data.contract
  } else {
    throw new Error("Failed to generate contract")


=======
;
  if (data.success && data.contract) {;
    return data.contract;
  } else {;
    throw new Error("Failed to generate contract");


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
