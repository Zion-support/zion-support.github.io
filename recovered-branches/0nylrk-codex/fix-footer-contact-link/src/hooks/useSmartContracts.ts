
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
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
  
  
=======


  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const generateSolidityContract = async (
    values: ContractFormValues
    talent: TalentProfile
    clientName: string
  ): Promise<string> => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
setIsLoading(true),
      const { data, error } = await supabase && supabase.functions.invoke("generate-smart-contract", {
        body: {
          talentName: talent && talent.full_name;
          clientName: clientName;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      setIsLoading(true),
      
      const { data, error } = await supabase && supabase.functions.invoke("generate-smart-contract", {

        body: {
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          projectName: values && values.projectName;
          scopeSummary: values && values.scopeSummary;
          startDate: values && values.startDate.toISOString();
          endDate: values && values.endDate?.toISOString();
          paymentTerms: values && values.paymentTerms;
          paymentAmount: values && values.paymentAmount,
          additionalClauses: values && values.additionalClauses || []}
<<<<<<< HEAD
      });
      if (error) throw error;

      setIsLoading(true)
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {
        body: {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

      });
      if (error) throw error;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      console.error ("Error generating Solidity contract:", err);
      toast.error ("Failed to generate smart contract");
      throw err;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (data && data.solidityCode) {
        return data.solidityCode
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } else {
        throw new Error ("Failed to generate Solidity contract");
      }
    } catch (err: any) {

      console.error ("Error generating Solidity contract:", err);
      toast.error ("Failed to generate smart contract");
      throw err;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
      if (data && data.solidityCode) {
        return data.solidityCode
      } else {
        throw new Error("Failed to generate Solidity contract")
      }
    } catch (err: any) {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      console.error("Error generating Solidity contract:", err),
      toast.error("Failed to generate smart contract"),
      throw err
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


=======
  }
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const deploySmartContract = async (
    contractCode: string;
    options: DeploymentOptions
  ): Promise<SmartContractInfo | null> => {
    if (!user?.id) {

      toast && toast.error("You must be logged in to deploy a contract"),

<<<<<<< HEAD
<<<<<<< HEAD
  }
  },
  
  const deploySmartContract = async (
    contractCode: string,
    options: DeploymentOptions
  ): Promise<SmartContractInfo | null> => {
    if (!user?.id) {
      toast.error("You must be logged in to deploy a contract")
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return null
    }
    try {
      setDeploymentStatus('deploying');
      // This would normally connect to MetaMask or other Web3 provider
      // For now, we'll just simulate success
      const mockTransactionHash = `0x${Array.from({length: 64}, () =>
        Math.floor(Math.random() * 16).toString(16)).join('')}`;
      const mockSmartContractInfo: SmartContractInfo = {
<<<<<<< HEAD
        id: crypto.randomUUID();
        transactionHash: mockTransactionHash;
        networkName: options.network;
        blockNumber: Math.floor(Math.random() * 1000000)
        deployedAddress: `0x${Array.from({length: 40}, () =>
          Math.floor(Math.random() * 16).toString(16)).join('')}`;
        contractType: 'escrow';
        createdAt: new Date().toISOString();
        createdBy: user.id
=======
      return null
    }
    try {

      const mockTransactionHash = `0x${Array && Array.from({length: 64}, () => 
        Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;
      

      const mockSmartContractInfo: SmartContractInfo = {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        id: crypto && crypto.randomUUID();
        transactionHash: mockTransactionHash;

        networkName: options && options.network;
        blockNumber: Math && Math.floor(Math && Math.random() * 1000000),
        deployedAddress: `0x${Array && Array.from({length: 40}, () => 
          Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;
        contractType: 'escrow';
        createdAt: new Date().toISOString();
        createdBy: user && user.id,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        status: 'deployed'
      }
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000));
      setDeploymentStatus('success');
<<<<<<< HEAD
<<<<<<< HEAD
      toast.success("Smart contract deployed successfully!");
      return mockSmartContractInfo
    } catch (err: any) {
      console.error("Error deploying smart contract:", err);
      toast.error("Failed to deploy smart contract");
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      toast && toast.success("Smart contract deployed successfully!");
      

      return mockSmartContractInfo
    } catch (err: any) {
      console && console.error("Error deploying smart contract:", err);
      toast && toast.error("Failed to deploy smart contract");
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setDeploymentStatus('error');
      return null
    }
  }
  return {
    generateSolidityContract;
    deploySmartContract;
    isLoading;

    deploymentStatus
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

      const mockTransactionHash = `0x${Array && Array.from({length: 64}, () => 
        Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;
      

      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto && crypto.randomUUID();
        transactionHash: mockTransactionHash;

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
        networkName: options && options.network;
        blockNumber: Math && Math.floor(Math && Math.random() * 1000000),
        deployedAddress: `0x${Array && Array.from({length: 40}, () => 
          Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;
        contractType: 'escrow';
        createdAt: new Date().toISOString();
        createdBy: user && user.id,
        status: 'deployed'
      }
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000));
      setDeploymentStatus('success');
      toast && toast.success("Smart contract deployed successfully!");
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

  }
}
  }

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
}
  }
}
;
  }
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
