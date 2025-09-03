export type ContractFormValues = z.infer<typeof formSchema> interface ContractFormProps {
   talent: TalentProfile;
   clientName: string;
   initialValues?: ContractFormValues;
   onFormValuesChange?: (values: ContractFormValues) => void;
<<<<<<< HEAD
   onContractGenerated: (contractContent: string) => void
=======
   onContractGenerated: (contractConten,
    t: string) => void;
>>>>>>> main
   deployOptions?: DeploymentOptions
   onDeployOptionsChange?: (option,
    s: DeploymentOptions) => void} export function ContractForm({ talent, clientName, initialValues, onFormValuesChange, onContractGenerated, deployOptions, onDeployOptionsChange }: ContractFormProps) {