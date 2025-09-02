import React from 'react';
export type ContractFormValues = z.infer<typeof formSchema"" ></typeof> interface ContractFormProps {
  talent: TalentProfile;
   clientName: string;
   initialValues?: ContractFormValues;
   onFormValuesChange?: (values: ContractFormValues) => void;
   onContractGenerated: (contractContent: string) => void;
   deployOptions?: DeploymentOptions
   onDeployOptionsChange?: (options: DeploymentOptions) => void} export function ContractForm({ talent, clientName, initialValues, onFormValuesChange, onContractGenerated, deployOptions, onDeployOptionsChange }: ContractFormProps) {,"
}""
""'"