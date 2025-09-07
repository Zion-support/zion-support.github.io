
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { supabase  } from '@/integrations/supabase/client';
import { toast  } from 'sonner';
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo  } from '@/types/smart-contracts';
=======
import { useState  } from 'react';'
import { useAuth  } from '@/hooks/useAuth';'
import { supabase  } from '@/integrations/supabase/client';'
import { toast  } from 'sonner';'
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo  } from '@/types/smart-contracts';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { TalentProfile  } from '@/types/talent';
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useSmartContracts() {};
  const { user } = useAuth();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
import {useState} from 'react';'
import {useAuth} from '@/hooks/useAuth';'
import {supabase} from '@/integrations/supabase/client';'
import {toast} from 'sonner';'
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from '@/types/smart-contracts';'
import {TalentProfile} from '@/types/talent';"
import {ContractFormValues} from "@/components/contracts/components/ContractForm";
export function useSmartContracts() { return null; }
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const [isLoading, setIsLoading] = useState(false);

import {useState} from 'react';
import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {toast} from 'sonner';
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from '@/types/smart-contracts';
import {TalentProfile} from '@/types/talent';
import {ContractFormValues} from "@/components/contracts/components/ContractForm";
export function useSmartContracts() {;
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);


  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
import { useState } from 'react',
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { toast } from 'sonner',
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts',
import { TalentProfile } from '@/types/talent',
<<<<<<< HEAD
=======
'
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');'
import { useState } from 'react','
import { useAuth } from '@/hooks/useAuth','
import { supabase } from '@/integrations/supabase/client','
import { toast } from 'sonner','
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts','
import { TalentProfile } from '@/types/talent',"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
export function useSmartContracts() {}
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),'
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const generateSolidityContract = async (
    values: ContractFormValues
=======
  const [isLoading, setIsLoading] = useState(false);    values: ContractFormValues
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [isLoading, setIsLoading] = useState(false);    values: ContractFormValues
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
export function useSmartContracts() {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),
  
  
  const generateSolidityContract = async (
    values: ContractFormValues
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  const [isLoading, setIsLoading] = useState(false);    values: ContractFormValues
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    talent: TalentProfile
    clientName: string
  ): Promise<string> => {
    try {

      setIsLoading(true),
      const { data, error } = await supabase && supabase.functions.invoke("generate-smart-contract", {

        body: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
setIsLoading(true),
      const { data, error } = await supabase && supabase.functions.invoke("generate-smart-contract", {
        body: {
          talentName: talent && talent.full_name;
          clientName: clientName;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
  const generateSolidityContract = async (;
    values: ContractFormValues;
    talent: TalentProfile;
    clientName: string;
  ): Promise<string> => {}
    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          projectName: values && values.projectName;
          scopeSummary: values && values.scopeSummary;
          startDate: values && values.startDate.toISOString();
          endDate: values && values.endDate?.toISOString();
          paymentTerms: values && values.paymentTerms;
          paymentAmount: values && values.paymentAmount,
          additionalClauses: values && values.additionalClauses || []}

<<<<<<< HEAD
      });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      if (error) throw error;
=======

=======
      });
      if (error) throw error;
<<<<<<< HEAD
=======
});
      if (error) throw error;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      setIsLoading(true)
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {
        body: {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          talentName: talent.full_name;
          clientName: clientName;
          projectName: values.projectName;
          scopeSummary: values.scopeSummary;
          startDate: values.startDate.toISOString();
          endDate: values.endDate?.toISOString();
          paymentTerms: values.paymentTerms;
          paymentAmount: values.paymentAmount
          additionalClauses: values.additionalClauses |[]}
      });
      if (error) throw error;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          talentName: talent.full_name,
=======
      if (error) throw error;          talentName: talent.full_name,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      if (error) throw error;          talentName: talent.full_name,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      if (error) throw error;
          talentName: talent.full_name,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          talentName: talent.full_name,
      if (error) throw error;          talentName: talent.full_name,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          clientName: clientName,
          projectName: values.projectName,
          scopeSummary: values.scopeSummary,
          startDate: values.startDate.toISOString(),
          endDate: values.endDate?.toISOString(),
          paymentTerms: values.paymentTerms,
          paymentAmount: values.paymentAmount,
          additionalClauses: values.additionalClauses || []}
      }),
      if (error) throw error,
<<<<<<< HEAD
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      if (data && data.solidityCode) {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      if (data && data.solidityCode) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        return data.solidityCode
import {useState} from 'react';
import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
import {toast} from 'sonner';
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from '@/types / smart - contracts';
import {TalentProfile} from '@/types / talent';
=======

      if (data && data.solidityCode) {}
        return data.solidityCode'
import {useState} from 'react';'
import {use_auth} from '@/hooks / use_auth';'
import {supabase} from '@/integrations / supabase / client';'
import {toast} from 'sonner';'
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from '@/types / smart - contracts';'
import {TalentProfile} from '@/types / talent';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ContractFormValues } from '@/components / contracts / components / ContractForm';
export /**;
 * useSmartContracts - Function description;
 */
function useSmartContracts() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);'
  const [deployment_status, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
;
  const generateSolidityContract = async (
    values: ContractFormValues,
    talent: TalentProfile,
    client_name: string): Promise < string> => {}
    try {}
      setIsLoading (true),"
      const { data, error } = await supabase.functions.invoke ("generate - smart - contract", {}
        body: {}
          talent_name: talent.full_name;
          client_name: client_name;
          project_name: values.project_name;
          scope_summary: values.scope_summary;
          start_date: values.start_date.toISOString ();
          end_date: values.end_date?.toISOString ();
          payment_terms: values.payment_terms;

import { useState  } from 'react';''
import { useAuth  } from '@/hooks/useAuth';''
import { supabase  } from '@/integrations/supabase/client';''
import { toast  } from 'sonner';''
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo  } from '@/types/smart-contracts';''
import { TalentProfile  } from '@/types/talent';''
import { ContractFormValues } from "@/components/contracts/components/ContractForm";"
export function useSmartContracts() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
"
import {useState} from 'react';''
import {useAuth} from '@/hooks/useAuth';''
import {supabase} from '@/integrations/supabase/client';''
import {toast} from 'sonner';''
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from '@/types/smart-contracts';''
import {TalentProfile} from '@/types/talent';''
import {ContractFormValues} from "@/components/contracts/components/ContractForm";"
export function useSmartContracts() {;
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

"
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');''
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');''
import { useState } from 'react',''
import { useAuth } from '@/hooks/useAuth',''
import { supabase } from '@/integrations/supabase/client',''
import { toast } from 'sonner',''
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts',''
import { TalentProfile } from '@/types/talent',''
import { ContractFormValues } from "@/components/contracts/components/ContractForm","
export function useSmartContracts() {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),"
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),'
  const generateSolidityContract = async (
    values: ContractFormValues;,
  talent: TalentProfile;
    clientName: string;)
  ): Promise<string> => {
</string>'
  const [deployment_status, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');'

;
  const generateSolidityContract = async (
    values: ContractFormValues,
    talent: TalentProfile,)
    client_name: string): Promise < string> => {

    try {
  // TODO: Implement
}
      setIsLoading (true),'
      const { data, error } = await supabase.functions.invoke ("generate - smart - contract", {"
        body: {,
  talent_name: talent.full_name;
          client_name: client_name;,
  project_name: values.project_name;
          scope_summary: values.scope_summary;,)
  start_date: values.start_date.toISOString ();
          end_date: values.end_date?.toISOString ();,
  payment_terms: values.payment_terms;
          payment_amount: values.payment_amount,

          additional_clauses: values.additional_clauses || []}
      });
;
      // Check condition;
if (throw error) {}
  $2;
}
      // Check condition;
if ( {) {}
  $2;
}
        return data.solidity_code;
      } else {"
        throw new Error ("Failed to generate Solidity contract");
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    } catch (err: any) {
<<<<<<< HEAD
=======
    } catch (err: any) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      console.error ("Error generating Solidity contract:", err);
      toast.error ("Failed to generate smart contract");
      throw err;

<<<<<<< HEAD
<<<<<<< HEAD
=======
      console.error ("Error generating Solidity contract:", err);
      toast.error ("Failed to generate smart contract");
      throw err;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } finally {
=======
    } catch (err: any) {}
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading (false);
    }
  }
"
      console.error("Error generating Solidity contract:", err),"
      toast.error("Failed to generate smart contract"),
      throw err;
    } finally {}
      setIsLoading(false)
    }

<<<<<<< HEAD
=======
  }
  },
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
console.error ("Error generating Solidity contract:", err);
      toast.error ("Failed to generate smart contract");
      throw err;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } finally {
      setIsLoading (false);
    }
  }

if (data && data.solidityCode) {
        return data.solidityCode
      } else {
        throw new Error("Failed to generate Solidity contract")
      }
    } catch (err: any) {
      console.error("Error generating Solidity contract:", err),
      toast.error("Failed to generate smart contract"),
      throw err
    } finally {
      setIsLoading(false)
    }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const deploySmartContract = async (
    contractCode: string;
    options: DeploymentOptions
  ): Promise<SmartContractInfo | null> => {
    if (!user?.id) {
<<<<<<< HEAD
<<<<<<< HEAD

      toast && toast.error("You must be logged in to deploy a contract"),

<<<<<<< HEAD
=======
  }
  },
  
  const deploySmartContract = async (
    contractCode: string,
    options: DeploymentOptions
  ): Promise<SmartContractInfo | null> => {
    if (!user?.id) {
      toast.error("You must be logged in to deploy a contract")
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return null
    }
    try {
<<<<<<< HEAD

      console.error("Error deploying smart contract:", err),
      toast.error("Failed to deploy smart contract"),
      setDeploymentStatus('error'),
=======
=======

      toast && toast.error("You must be logged in to deploy a contract"),

}
  },
  const deploySmartContract = async (
    contractCode: string,
    options: DeploymentOptions
  ): Promise<SmartContractInfo | null> => {
    if (!user?.id) {
      toast.error("You must be logged in to deploy a contract")
      return null
    }
    try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setDeploymentStatus('deploying');
      // This would normally connect to MetaMask or other Web3 provider
      // For now, we'll just simulate success
      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto && crypto.randomUUID();
        transactionHash: mockTransactionHash;
        status: 'deployed'
      }
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000));
      setDeploymentStatus('success');
<<<<<<< HEAD
<<<<<<< HEAD
      toast.success("Smart contract deployed successfully!");
      return mockSmartContractInfo
<<<<<<< HEAD
=======
    } catch (err: any) {      return mockSmartContractInfo
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    } catch (err: any) {      return mockSmartContractInfo
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      toast.success("Smart contract deployed successfully!");
      return mockSmartContractInfo
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    } catch (err: any) {      return mockSmartContractInfo
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } catch (err: any) {
      console.error("Error deploying smart contract:", err);
      toast.error("Failed to deploy smart contract");
      setDeploymentStatus('error');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      return null
import { useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from 'sonner',;
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts',;
import { TalentProfile } from '@/types/talent',;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
export function useSmartContracts() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),;
  const generateSolidityContract = async (;
    values: ContractFormValues,;
    talent: TalentProfile,;
    clientName: string;
  ): Promise<string> => {;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {;
        body: {;
          talentName: talent.full_name,;
          clientName: clientName,;
          projectName: values.projectName,;
          scopeSummary: values.scopeSummary,;
          startDate: values.startDate.toISOString(),;
          endDate: values.endDate?.toISOString(),;
          paymentTerms: values.paymentTerms,;
          paymentAmount: values.paymentAmount,;
          additionalClauses: values.additionalClauses || []}
      }),;
      if (error) throw error,;
      if (data && data.solidityCode) {;
        return data.solidityCode;
      } else {;
        throw new Error("Failed to generate Solidity contract");
      }
    } catch (err: any) {;
      console.error("Error generating Solidity contract:", err),;
      toast.error("Failed to generate smart contract"),;
      throw err;
    } finally {;
      setIsLoading(false);
    }
=======
  }
  return {
    generateSolidityContract;
    deploySmartContract;
    isLoading;

    deploymentStatus
  }
}
      setDeploymentStatus('deploying'),
      // This would normally connect to MetaMask or other Web3 provider
      // For now, we'll just simulate success
      const mockTransactionHash = `0x${Array.from({length: 64}, () => 
        Math.floor(Math.random() * 16).toString(16)).join('')}`,
      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto.randomUUID(),
        transactionHash: mockTransactionHash,
        networkName: options.network,
        blockNumber: Math.floor(Math.random() * 1000000),
        deployedAddress: `0x${Array.from({length: 40}, () => 
          Math.floor(Math.random() * 16).toString(16)).join('')}`,
        contractType: 'escrow',
        createdAt: new Date().toISOString(),
        createdBy: user.id,
        status: 'deployed'
      },
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000)),
      setDeploymentStatus('success'),
      toast.success("Smart contract deployed successfully!"),
      return mockSmartContractInfo
    } catch (err: any) {
      console.error("Error deploying smart contract:", err);
      toast.error("Failed to deploy smart contract");
      setDeploymentStatus('error');
      return null
    }
  };
  return {
    generateSolidityContract;
    deploySmartContract;
    isLoading;

    deploymentStatus
      console.error("Error deploying smart contract:", err),
      toast.error("Failed to deploy smart contract"),
      setDeploymentStatus('error'),
      return null
import { ContractFormValues } from "@/components/contracts/components/ContractForm";"
export function useSmartContracts() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
"
import {useState} from 'react';
import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {toast} from 'sonner';
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from '@/types/smart-contracts';
import {TalentProfile} from '@/types/talent';
import {ContractFormValues} from "@/components/contracts/components/ContractForm";"
export function useSmartContracts() {;

  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
import { useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from 'sonner',;
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts',;
import { TalentProfile } from '@/types/talent',;
import { ContractFormValues } from "@/components/contracts/components/ContractForm","
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),"
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),
  const generateSolidityContract = async (
    values: ContractFormValues;,
  talent: TalentProfile;
    clientName: string;)
  ): Promise<string> => {
</string>
  const [deployment_status, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
;
    values: ContractFormValues,
    talent: TalentProfile,)
    client_name: string): Promise < string> => {
    try {
  // TODO: Implement
}
      setIsLoading (true),
      const { data, error } = await supabase.functions.invoke ("generate - smart - contract", {"
        body: {,
  talent_name: talent.full_name;
          client_name: client_name;,
  project_name: values.project_name;
          scope_summary: values.scope_summary;,)
  start_date: values.start_date.toISOString ();
          end_date: values.end_date?.toISOString ();,
  payment_terms: values.payment_terms;
          payment_amount: values.payment_amount,
          additional_clauses: values.additional_clauses || []}
      });
      // Check condition;
if (throw error) {
  $2;
      // Check condition;
if ( {) {
      // Check condition;

if (throw error) {
  $2;
}
      // Check condition;
if ( {) {
  $2;
}
        return data.solidity_code;
      } else {
  // TODO: Implement
}"
        throw new Error ("Failed to generate Solidity contract");"
    } catch (err: any) {

      }
    } catch (err: any) {      return mockSmartContractInfo}
    } catch (err: any) {

"
      console.error ("Error generating Solidity contract:", err);""
      toast.error ("Failed to generate smart contract");"
      throw err;

    } finally {
  // TODO: Implement
      setIsLoading (false);
      console.error("Error generating Solidity contract:", err),""
      toast.error("Failed to generate smart contract"),"
  // TODO: Implement
      setIsLoading(false)
}
      setIsLoading (false);
    }
  }
"
      console.error("Error generating Solidity contract:", err),""
      toast.error("Failed to generate smart contract"),"
      throw err;
    } finally {
  // TODO: Implement
}
      setIsLoading(false)
    }

  },


  const deploySmartContract = async (
    contractCode: string;,
  options: DeploymentOptions;)
  ): Promise<SmartContractInfo | null> => {
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),;
  const generateSolidityContract = async (;
    values: ContractFormValues,;
    talent: TalentProfile,;
  ): Promise<string> => {;
  ): Promise<SmartContractInfo | null> => {;

    options: DeploymentOptions): Promise < SmartContractInfo | null> => {
    // Check condition;
      toast.error ("You must be logged in to deploy a contract"),"
      return null;
  // TODO: Implement
      setDeploymentStatus ('deploying');
      // This would normally connect to MetaMask or other Web3 provider;
      // For now, we'll just simulate success;
      const mockTransactionHash = `0x${Array.from ({length: 64}, () =>;`;
        Math.floor (Math.random () * 16).to_string (16)).join ()}`;
</SmartContractInfo>"
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),;'
  const generateSolidityContract = async (;
    values: ContractFormValues,;
    talent: TalentProfile,;
    clientName: string;)
  ): Promise<string> => {;
</string>
  ): Promise<SmartContractInfo | null> => {;
</SmartContractInfo>
    options: DeploymentOptions): Promise < SmartContractInfo | null> => {
    // Check condition;
if ( {) {
  $2;
}'
      toast.error ("You must be logged in to deploy a contract"),"
      return null;
    }
    try {
  // TODO: Implement
}"
      setDeploymentStatus ('deploying');'
;
      // This would normally connect to MetaMask or other Web3 provider;'
      // For now, we'll just simulate success;'
      const mockTransactionHash = `0x${Array.from ({length: 64}, () =>;'
        Math.floor (Math.random () * 16).to_string (16)).join ('')}`;'
;
      const mockSmartContractInfo: SmartContractInfo = {,
  id: crypto.randomUUID ();
        transaction_hash: mockTransactionHash;,
  network_name: options.network;
        block_number: Math.floor (Math.random () * 1000000),`;
        deployed_address: `0x${Array.from ({length: 40}, () =>;`;
        contract_type: 'escrow';',
  created_at: new Date ().toISOString ();
        created_by: user.id,
        status: 'deployed';
      // Wait to simulate blockchain transaction time;
      await new Promise (resolve => set_timeout (resolve, 2000));
      setDeploymentStatus ('success');
      toast.success ("Smart contract deployed successfully!");"
        block_number: Math.floor (Math.random () * 1000000),
        deployed_address: `0x${Array.from ({length: 40}, () =>;'
          Math.floor (Math.random () * 16).to_string (16)).join ('')}`;''
        contract_type: 'escrow';',
  created_at: new Date ().toISOString ();
        created_by: user.id,'
        status: 'deployed';'
      }
;
      // Wait to simulate blockchain transaction time;
      await new Promise (resolve => set_timeout (resolve, 2000));
;'
      setDeploymentStatus ('success');''
      toast.success ("Smart contract deployed successfully!");"
;
      return mockSmartContractInfo;
    } catch (err: any) {"
      console.error ("Error deploying smart contract:", err);""
      toast.error ("Failed to deploy smart contract");""
      setDeploymentStatus ('error');

    deploymentStatus;
  return {
  // TODO: Implement
      setDeploymentStatus ('error');'
      return null;
    }
  }

    deploymentStatus;
;
  return {
  // TODO: Implement
}
    generateSolidityContract;
    deploySmartContract;
    is_loading;
    deployment_status;

      setDeploymentStatus('deploying'),
      // This would normally connect to MetaMask or other Web3 provider;
      // For now, we'll just simulate success;`;
      const mockTransactionHash = `0x${Array.from({length: 64}, () => `;
        Math.floor(Math.random() * 16).toString(16)).join()}`,
  id: crypto.randomUUID(),
        transactionHash: mockTransactionHash,
        networkName: options.network,
        blockNumber: Math.floor(Math.random() * 1000000),`;
        deployedAddress: `0x${Array.from({length: 40}, () => `;
        contractType: 'escrow',
        createdAt: new Date().toISOString(),
        createdBy: user.id,
        status: 'deployed
      // Wait to simulate blockchain transaction time;
      await new Promise(resolve => setTimeout(resolve, 2000)),
      setDeploymentStatus('success'),
      toast.success("Smart contract deployed successfully!"),"

pr-12325
import { useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from 'sonner',;
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts',;
import { TalentProfile } from '@/types/talent',;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
export function useSmartContracts() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),;
  const generateSolidityContract = async (;
    values: ContractFormValues,;
    talent: TalentProfile,;
    clientName: string;
  ): Promise<string> => {;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {;
        body: {;
          talentName: talent.full_name,;
          clientName: clientName,;
          projectName: values.projectName,;
          scopeSummary: values.scopeSummary,;
          startDate: values.startDate.toISOString(),;
          endDate: values.endDate?.toISOString(),;
          paymentTerms: values.paymentTerms,;
          paymentAmount: values.paymentAmount,;
          additionalClauses: values.additionalClauses || []}
      }),;
      if (error) throw error,;
      if (data && data.solidityCode) {;
        return data.solidityCode;
      } else {;
        throw new Error("Failed to generate Solidity contract");
      }
    } catch (err: any) {;
      console.error("Error generating Solidity contract:", err),;
      toast.error("Failed to generate smart contract"),;
      throw err;
    } finally {;
      setIsLoading(false);
    }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  },;
  const deploySmartContract = async (;
    contractCode: string,;
=======


  const deploySmartContract = async (
    contractCode: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    options: DeploymentOptions;
  ): Promise<SmartContractInfo | null> => {}
    if (!user?.id) {}
      return null;
    }
<<<<<<< HEAD
;
    try {;
      setDeploymentStatus('deploying'),;
      // This would normally connect to MetaMask or other Web3 provider;
      // For now, we'll just simulate success;
      const mockTransactionHash = `0x${Array.from({length: 64}, () =>;
        Math.floor(Math.random() * 16).toString(16)).join('')}`,;
      const mockSmartContractInfo: SmartContractInfo = {;
        id: crypto.randomUUID(),;
        transactionHash: mockTransactionHash,;
        networkName: options.network,;
        blockNumber: Math.floor(Math.random() * 1000000),;
        deployedAddress: `0x${Array.from({length: 40}, () =>;
          Math.floor(Math.random() * 16).toString(16)).join('')}`,;
        contractType: 'escrow',;
        createdAt: new Date().toISOString(),;
        createdBy: user.id,;
        status: 'deployed';
      },;
      // Wait to simulate blockchain transaction time;
      await new Promise(resolve => setTimeout(resolve, 2000)),;
      setDeploymentStatus('success'),;
      toast.success("Smart contract deployed successfully!"),;
      return mockSmartContractInfo;
    } catch (err: any) {;
      console.error("Error deploying smart contract:", err),;
      toast.error("Failed to deploy smart contract"),;
      setDeploymentStatus('error'),;
      return null;
    }
  },;
  return {;
    generateSolidityContract,;
    deploySmartContract;
    isLoading;
    deploymentStatus;
<<<<<<< HEAD
<<<<<<< HEAD

  }
}
;
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

      const mockTransactionHash = `0x${Array && Array.from({length: 64}, () => 
        Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;

      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto && crypto.randomUUID();
        transactionHash: mockTransactionHash;

<<<<<<< HEAD
<<<<<<< HEAD
=======
    try {'
      setDeploymentStatus('deploying');
      // This would normally connect to MetaMask or other Web3 provider'
      // For now, we'll just simulate success;
      const mockSmartContractInfo: SmartContractInfo = {}
        id: crypto && crypto.randomUUID();
        transactionHash: mockTransactionHash;'
        status: 'deployed'
      }
      // Wait to simulate blockchain transaction time;
      await new Promise(resolve => setTimeout(resolve, 2000));'
      setDeploymentStatus('success');

      return mockSmartContractInfo;
    } catch (err: any) {"
      console.error("Error deploying smart contract:", err);"
      toast.error("Failed to deploy smart contract");'
      setDeploymentStatus('error');
      return null;
    }

=======
toast && toast.error("You must be logged in to deploy a contract"),
      return null
    }
    try {
      setDeploymentStatus('deploying');
      // This would normally connect to MetaMask or other Web3 provider
      // For now, we'll just simulate success
      const mockTransactionHash = `0x${Array && Array.from({length: 64}, () => 
        Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;
      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto && crypto.randomUUID();
        transactionHash: mockTransactionHash;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        networkName: options && options.network;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        networkName: options && options.network;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        blockNumber: Math && Math.floor(Math && Math.random() * 1000000),
        deployedAddress: `0x${Array && Array.from({length: 40}, () => '`
          Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;'
        contractType: 'escrow';
        createdAt: new Date().toISOString();
        createdBy: user && user.id,
<<<<<<< HEAD
<<<<<<< HEAD
=======

        status: 'deployed'
      }
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000));
      setDeploymentStatus('success');

      toast && toast.success("Smart contract deployed successfully!");

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
toast && toast.success("Smart contract deployed successfully!");
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return mockSmartContractInfo
    } catch (err: any) {
      console && console.error("Error deploying smart contract:", err);
      toast && toast.error("Failed to deploy smart contract");
      setDeploymentStatus('error');
      return null
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'
        status: 'deployed'
      }
      // Wait to simulate blockchain transaction time;
      await new Promise(resolve => setTimeout(resolve, 2000));'
      setDeploymentStatus('success');

      return mockSmartContractInfo;
    } catch (err: any) {"
      console && console.error("Error deploying smart contract:", err);"
      toast && toast.error("Failed to deploy smart contract");'
      setDeploymentStatus('error');
      return null;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }


  }
  return {}
=======
    }
  }
  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    generateSolidityContract;
    deploySmartContract;
    isLoading;

<<<<<<< HEAD
;
  const deploySmartContract = async (
    contract_code: string;
    options: DeploymentOptions): Promise < SmartContractInfo | null> => {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("You must be logged in to deploy a contract"),
      return null;
    }
    try {'
      setDeploymentStatus ('deploying');
;
      // This would normally connect to MetaMask or other Web3 provider;'
      // For now, we'll just simulate success;`
      const mockTransactionHash = `0x${Array.from ({length: 64}, () =>;'`
        Math.floor (Math.random () * 16).to_string (16)).join ('')}`;
;
      const mockSmartContractInfo: SmartContractInfo = {}
        id: crypto.randomUUID ();
        transaction_hash: mockTransactionHash;
        network_name: options.network;
        block_number: Math.floor (Math.random () * 1000000),`
        deployed_address: `0x${Array.from ({length: 40}, () =>;'`
          Math.floor (Math.random () * 16).to_string (16)).join ('')}`;'
        contract_type: 'escrow';
        created_at: new Date ().toISOString ();
        created_by: user.id,'
=======
    deploymentStatus
deploymentStatus
;
  const deploySmartContract = async (
    contract_code: string;
    options: DeploymentOptions): Promise < SmartContractInfo | null> => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("You must be logged in to deploy a contract"),
      return null;
    }
    try {
      setDeploymentStatus ('deploying');
;
      // This would normally connect to MetaMask or other Web3 provider;
      // For now, we'll just simulate success;
      const mockTransactionHash = `0x${Array.from ({length: 64}, () =>;
        Math.floor (Math.random () * 16).to_string (16)).join ('')}`;
;
      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto.randomUUID ();
        transaction_hash: mockTransactionHash;
        network_name: options.network;
        block_number: Math.floor (Math.random () * 1000000),
        deployed_address: `0x${Array.from ({length: 40}, () =>;
          Math.floor (Math.random () * 16).to_string (16)).join ('')}`;
        contract_type: 'escrow';
        created_at: new Date ().toISOString ();
        created_by: user.id,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        status: 'deployed';
      }
;
      // Wait to simulate blockchain transaction time;
      await new Promise (resolve => set_timeout (resolve, 2000));
<<<<<<< HEAD
;'
      setDeploymentStatus ('success');"
      toast.success ("Smart contract deployed successfully!");
;
      return mockSmartContractInfo;
    } catch (err: any) {"
      console.error ("Error deploying smart contract:", err);"
      toast.error ("Failed to deploy smart contract");'
=======
;
      setDeploymentStatus ('success');
      toast.success ("Smart contract deployed successfully!");
;
      return mockSmartContractInfo;
    } catch (err: any) {
      console.error ("Error deploying smart contract:", err);
      toast.error ("Failed to deploy smart contract");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setDeploymentStatus ('error');
      return null;
    }
  }

<<<<<<< HEAD

    deploymentStatus;
;
  return {}
=======
    deploymentStatus
;
  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    generateSolidityContract;
    deploySmartContract;
    is_loading;
    deployment_status;

<<<<<<< HEAD
'
      setDeploymentStatus('deploying'),
      
      // This would normally connect to MetaMask or other Web3 provider'
      // For now, we'll just simulate success;`
      const mockTransactionHash = `0x${Array.from({length: 64}, () => '`
        Math.floor(Math.random() * 16).toString(16)).join('')}`,
      
      const mockSmartContractInfo: SmartContractInfo = {}
        id: crypto.randomUUID(),
        transactionHash: mockTransactionHash,
        networkName: options.network,
        blockNumber: Math.floor(Math.random() * 1000000),`
        deployedAddress: `0x${Array.from({length: 40}, () => '`
          Math.floor(Math.random() * 16).toString(16)).join('')}`,'
        contractType: 'escrow',
        createdAt: new Date().toISOString(),
        createdBy: user.id,'
        status: 'deployed'
      },
      
      // Wait to simulate blockchain transaction time;
      await new Promise(resolve => setTimeout(resolve, 2000)),
      '
      setDeploymentStatus('success'),"
      toast.success("Smart contract deployed successfully!"),
      
      return mockSmartContractInfo;
    } catch (err: any) {}
  }
}
;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
=======
=======
      setDeploymentStatus('deploying'),
      // This would normally connect to MetaMask or other Web3 provider
      // For now, we'll just simulate success
      const mockTransactionHash = `0x${Array.from({length: 64}, () => 
        Math.floor(Math.random() * 16).toString(16)).join('')}`,
      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto.randomUUID(),
'
      setDeploymentStatus('deploying'),'
      // This would normally connect to MetaMask or other Web3 provider;'
      // For now, we'll just simulate success;'
      const mockTransactionHash = `0x${Array.from({length: 64}, () => '
        Math.floor(Math.random() * 16).toString(16)).join('')}`,'
      const mockSmartContractInfo: SmartContractInfo = {,
  id: crypto.randomUUID(),
        transactionHash: mockTransactionHash,
        networkName: options.network,
        blockNumber: Math.floor(Math.random() * 1000000),
        deployedAddress: `0x${Array.from({length: 40}, () => '
          Math.floor(Math.random() * 16).toString(16)).join('')}`,''
        contractType: 'escrow','
        createdAt: new Date().toISOString(),
        createdBy: user.id,'
        status: 'deployed''
      },
      // Wait to simulate blockchain transaction time;
      await new Promise(resolve => setTimeout(resolve, 2000)),
      '
      setDeploymentStatus('success'),''
      toast.success("Smart contract deployed successfully!"),"
      return mockSmartContractInfo;
    } catch (err: any) {

}
}
  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
  }
"
import { useState } from 'react',;''
import { useAuth } from '@/hooks/useAuth',;''
import { supabase } from '@/integrations/supabase/client',;''
import { toast } from 'sonner',;''
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts',;''
import { TalentProfile } from '@/types/talent',;''
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;"
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;"
    values:ContractFormValues, ;
    talent:TalentProfile, ;
    clientName:string;)
  ):Promise<string> => {;
  ):Promise<SmartContractInfo | null> => {;

const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'> ('idle');
talent: TalentProfile;,
  clientName: string if (error) throw error;
}finally {
  // TODO: Implement
  setIsLoading (false) 
};
options: DeploymentOptions;
}try {
  // TODO: Implement
  setDeploymentStatus ('deploying');`;
//This would normally connect to MetaMask or other Web3 provider //For now, we'll just simulate success const mockTransactionHash = `0x$ {
  Array.from ({
  length: 64;)
}, () => Math.floor (Math.random () * 16) .toString (16) ) .join ()`;
}`;`;
id: window.crypto.randomUUID (), transactionHash: mockTransactionHash, networkName: options.network, blockNumber: Math.floor (Math.random () * 1000000), deployedAddress: `0x$ {
  length: 40;)
}`;
contractType: 'escrow';',
  createdAt: new Date () .toISOString ();
createdBy: user.id;,
// Wait to simulate blockchain transaction time await new Promise (resolve => setTimeout (resolve, 2000) );
  // TODO: Implement
isLoading;
`;
pr-12325
deploymentStatus;
}
}
  }
}
;
  }
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
