
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts';
import { TalentProfile } from '@/types/talent';
import { ContractFormValues } from "@/components/contracts/components/ContractForm";

export function useSmartContracts() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
  
  const generateSolidityContract = async (
    values: ContractFormValues, 
    talent: TalentProfile, 
    clientName: string
  ): Promise<string> => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {
        body: {
          talentName: talent.full_name,
          clientName: clientName,
          projectName: values.projectName,
          scopeSummary: values.scopeSummary,
          startDate: values.startDate.toISOString(),
          endDate: values.endDate?.toISOString(),
          paymentTerms: values.paymentTerms,
          paymentAmount: values.paymentAmount,
