
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts

  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');

=======
<<<<<<< HEAD
import { useState  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { supabase  } from '@/integrations/supabase/client';
import { toast  } from 'sonner';
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo  } from '@/types/smart-contracts';
import { TalentProfile  } from '@/types/talent';
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useSmartContracts() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from 'react',
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { toast } from 'sonner',
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts',
import { TalentProfile } from '@/types/talent',
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
export function useSmartContracts() {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),
<<<<<<< HEAD

=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const generateSolidityContract = async (
    values: ContractFormValues
    talent: TalentProfile
    clientName: string
  ): Promise<string> => {
    try {
<<<<<<< HEAD

      setIsLoading(true),
      
      const { data, error } = await supabase && supabase.functions.invoke("generate-smart-contract", {

        body: {

<<<<<<< HEAD
=======
========
setIsLoading(true),
      const { data, error } = await supabase && supabase.functions.invoke("generate-smart-contract", {
        body: {
          talentName: talent && talent.full_name;
          clientName: clientName;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts
          projectName: values && values.projectName;
          scopeSummary: values && values.scopeSummary;
          startDate: values && values.startDate.toISOString();
          endDate: values && values.endDate?.toISOString();
          paymentTerms: values && values.paymentTerms;
          paymentAmount: values && values.paymentAmount,
          additionalClauses: values && values.additionalClauses || []}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts
      });
      if (error) throw error;
=======

=======
      setIsLoading(true)
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {
        body: {
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          talentName: talent.full_name,
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      if (data && data.solidityCode) {
        return data.solidityCode
import {useState} from 'react';
import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
import {toast} from 'sonner';
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from '@/types / smart - contracts';
import {TalentProfile} from '@/types / talent';
import { ContractFormValues } from '@/components / contracts / components / ContractForm';
export /**
 * useSmartContracts - Function description
 */
function useSmartContracts() {
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [deployment_status, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
;
  const generateSolidityContract = async (
    values: ContractFormValues,
    talent: TalentProfile,
    client_name: string): Promise < string> => {
    try {
      setIsLoading (true),
      const { data, error } = await supabase.functions.invoke ("generate - smart - contract", {
        body: {
          talent_name: talent.full_name;
          client_name: client_name;
          project_name: values.project_name;
          scope_summary: values.scope_summary;
          start_date: values.start_date.toISOString ();
          end_date: values.end_date?.toISOString ();
          payment_terms: values.payment_terms;
          payment_amount: values.payment_amount,
          additional_clauses: values.additional_clauses || []}
      });
;
      // Check condition
if (throw error) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        return data.solidity_code;
      } else {
        throw new Error ("Failed to generate Solidity contract");
      }
    } catch (err: any) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts

      console.error ("Error generating Solidity contract:", err);
      toast.error ("Failed to generate smart contract");
      throw err;

========
      console.error ("Error generating Solidity contract:", err);
      toast.error ("Failed to generate smart contract");
      throw err;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      if (data && data.solidityCode) {
        return data.solidityCode
      } else {
        throw new Error("Failed to generate Solidity contract")
      }
    } catch (err: any) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      console.error("Error generating Solidity contract:", err),
      toast.error("Failed to generate smart contract"),
      throw err
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======
  },
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const deploySmartContract = async (
    contractCode: string;
    options: DeploymentOptions
  ): Promise<SmartContractInfo | null> => {
    if (!user?.id) {

      toast && toast.error("You must be logged in to deploy a contract"),

=======
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const deploySmartContract = async (
    contractCode: string,
    options: DeploymentOptions
  ): Promise<SmartContractInfo | null> => {
    if (!user?.id) {
      toast.error("You must be logged in to deploy a contract")
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return null
    }
    try {
<<<<<<< HEAD
<<<<<<< HEAD

=======
      setDeploymentStatus('deploying');
      // This would normally connect to MetaMask or other Web3 provider
      // For now, we'll just simulate success
      const mockTransactionHash = `0x${Array.from({length: 64}, () =>
        Math.floor(Math.random() * 16).toString(16)).join('')}`;
      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto.randomUUID();
        transactionHash: mockTransactionHash;
        networkName: options.network;
        blockNumber: Math.floor(Math.random() * 1000000)
        deployedAddress: `0x${Array.from({length: 40}, () =>
          Math.floor(Math.random() * 16).toString(16)).join('')}`;
        contractType: 'escrow';
        createdAt: new Date().toISOString();
        createdBy: user.id
        status: 'deployed'
      }
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000));
      setDeploymentStatus('success');
      toast.success("Smart contract deployed successfully!");
      return mockSmartContractInfo
    } catch (err: any) {
      console.error("Error deploying smart contract:", err);
      toast.error("Failed to deploy smart contract");
      setDeploymentStatus('error');
      return null
    }
  }
  return {
    generateSolidityContract;
    deploySmartContract;
    isLoading;

    deploymentStatus
  }
}
=======
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      console.error("Error deploying smart contract:", err),
      toast.error("Failed to deploy smart contract"),
      setDeploymentStatus('error'),
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
  },;
  const deploySmartContract = async (;
    contractCode: string,;
    options: DeploymentOptions;
  ): Promise<SmartContractInfo | null> => {;
    if (!user?.id) {;
      toast.error("You must be logged in to deploy a contract"),;
      return null;
    }
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

  }
}
;

=======

      const mockTransactionHash = `0x${Array && Array.from({length: 64}, () => 
        Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;
      

      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto && crypto.randomUUID();
        transactionHash: mockTransactionHash;

========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts
        networkName: options && options.network;
        blockNumber: Math && Math.floor(Math && Math.random() * 1000000),
        deployedAddress: `0x${Array && Array.from({length: 40}, () => 
          Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;
        contractType: 'escrow';
        createdAt: new Date().toISOString();
        createdBy: user && user.id,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts
        status: 'deployed'
      }
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000));
      setDeploymentStatus('success');
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts

      toast && toast.success("Smart contract deployed successfully!");
      

========
      toast && toast.success("Smart contract deployed successfully!");
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts
      return mockSmartContractInfo
    } catch (err: any) {
      console && console.error("Error deploying smart contract:", err);
      toast && toast.error("Failed to deploy smart contract");
      setDeploymentStatus('error');
      return null
    }
  }
  return {
    generateSolidityContract;
    deploySmartContract;
    isLoading;
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
        status: 'deployed';
      }
;
      // Wait to simulate blockchain transaction time;
      await new Promise (resolve => set_timeout (resolve, 2000));
;
      setDeploymentStatus ('success');
      toast.success ("Smart contract deployed successfully!");
;
      return mockSmartContractInfo;
    } catch (err: any) {
      console.error ("Error deploying smart contract:", err);
      toast.error ("Failed to deploy smart contract");
      setDeploymentStatus ('error');
      return null;
    }
  }
;
  return {
    generateSolidityContract;
    deploySmartContract;
    is_loading;
    deployment_status;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  }
=======

import { useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from 'sonner',;
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts',;
import { TalentProfile } from '@/types/talent',;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
;
export function useSmartContracts() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),;
  ;
  const generateSolidityContract = async (;
    values:ContractFormValues, ;
    talent:TalentProfile, ;
    clientName:string;
  ):Promise<string> => {;
    try {;
      setIsLoading(true),;
      ;
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {;
        body:{;
          talentName:talent.full_name,;
          clientName:clientName,;
          projectName:values.projectName,;
          scopeSummary:values.scopeSummary,;
          startDate:values.startDate.toISOString(),;
          endDate:values.endDate?.toISOString(),;
          paymentTerms:values.paymentTerms,;
          paymentAmount:values.paymentAmount,;
          additionalClauses:values.additionalClauses || []}
      }),;
      ;
      if (error) throw error,;
      ;
      if (data && data.solidityCode) {;
        return data.solidityCode,;
      } else {;
        throw new Error("Failed to generate Solidity contract"),;
      }
    } catch (err:any) {;
      console.error("Error generating Solidity contract:", err),;
      toast.error("Failed to generate smart contract"),;
      throw err,;
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  const deploySmartContract = async (;
    contractCode:string,;
    options:DeploymentOptions;
  ):Promise<SmartContractInfo | null> => {;
    if (!user?.id) {;
      toast.error("You must be logged in to deploy a contract"),;
      return null;
    }
    ;
    try {;
      setDeploymentStatus('deploying'),;
      ;
      // This would normally connect to MetaMask or other Web3 provider;
      // For now, we'll just simulate success;
      const mockTransactionHash = `0x${Array.from({length:64}, () => ;
        Math.floor(Math.random() * 16).toString(16)).join('')}`,;
      ;
      const mockSmartContractInfo:SmartContractInfo = {;
        id:crypto.randomUUID(),;
        transactionHash:mockTransactionHash,;
        networkName:options.network,;
        blockNumber:Math.floor(Math.random() * 1000000),;
        deployedAddress:`0x${Array.from({length:40}, () => ;
          Math.floor(Math.random() * 16).toString(16)).join('')}`,;
        contractType:'escrow',;
        createdAt:new Date().toISOString(),;
        createdBy:user.id,;
        status:'deployed';
      },;
      ;
      // Wait to simulate blockchain transaction time;
      await new Promise(resolve => setTimeout(resolve, 2000)),;
      ;
      setDeploymentStatus('success'),;
      toast.success("Smart contract deployed successfully!"),;
      ;
      return mockSmartContractInfo,;
    } catch (err:any) {;
      console.error("Error deploying smart contract:", err),;
      toast.error("Failed to deploy smart contract"),;
      setDeploymentStatus('error'),;
      return null,;
    }
  },;
  ;
  return {;
    generateSolidityContract,;
    deploySmartContract,;
    isLoading,;
    deploymentStatus;
  },; export function useSmartContracts () {
  const {
  user 
}= useAuth ();
const [isLoading, setIsLoading] = useState (false);
const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'> ('idle');
talent: TalentProfile;
clientName: string if (error) throw error;
}finally {
  setIsLoading (false) 
}
};
options: DeploymentOptions 
}try {
  setDeploymentStatus ('deploying');
//This would normally connect to MetaMask or other Web3 provider //For now, we'll just simulate success const mockTransactionHash = `0x$ {
  Array.from ({
  length: 64 
}, () => Math.floor (Math.random () * 16) .toString (16) ) .join ('') 
}`;
id: window.crypto.randomUUID (), transactionHash: mockTransactionHash, networkName: options.network, blockNumber: Math.floor (Math.random () * 1000000), deployedAddress: `0x$ {
  Array.from ({
  length: 40 
}, () => Math.floor (Math.random () * 16) .toString (16) ) .join ('') 
}`;
contractType: 'escrow';
createdAt: new Date () .toISOString ();
createdBy: user.id;
status: 'deployed' 
};
// Wait to simulate blockchain transaction time await new Promise (resolve => setTimeout (resolve, 2000) );
}
};
return {
  generateSolidityContract;
deploySmartContract;
isLoading;
deploymentStatus 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useSmartContracts.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
