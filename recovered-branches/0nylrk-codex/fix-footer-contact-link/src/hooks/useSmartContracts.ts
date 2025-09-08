import { useState  } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { supabase  } from '@/integrations/supabase/client';
import { toast  } from 'sonner';
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo  } from '@/types/smart-contracts';

<<<<<<< HEAD


  const generateSolidityContract = async (
    values: ContractFormValues

    talent: TalentProfile
    clientName: string
  ): Promise<string> => {
    try {


      setIsLoading(true),
      const { data, error } = await supabase && supabase.functions.invoke("generate-smart-contract", {

        body: {


          projectName: values && values.projectName;
          scopeSummary: values && values.scopeSummary;
          startDate: values && values.startDate.toISOString();
          endDate: values && values.endDate?.toISOString();
          paymentTerms: values && values.paymentTerms;
          paymentAmount: values && values.paymentAmount,
          additionalClauses: values && values.additionalClauses || []}


      setIsLoading(true)
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {
        body: {

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


          talentName: talent.full_name,

          clientName: clientName,
          projectName: values.projectName,
          scopeSummary: values.scopeSummary,
          startDate: values.startDate.toISOString(),
          endDate: values.endDate?.toISOString(),
=======
import { TalentProfile  } from '@/types/talent';
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useSmartContracts() {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),
  
  const generateSolidityContract = $2;
    talent: TalentProfile, 
    clientName: string): Promise<string> => {
    try {
      setIsLoading($2);
      const { data, error } = await supabase.functions.invoke($2);
          endDate: values.endDate?.toISOString($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
          paymentTerms: values.paymentTerms,
          paymentAmount: values.paymentAmount,
          additionalClauses: values.additionalClauses || []}
      }),
<<<<<<< HEAD
      if (error) throw error,

      

    } finally {

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

    } finally {
      setIsLoading (false);
    }
  }


=======
      
      if (error) throw error,
      
      if (data && data.solidityCode) {
        return data.solidityCode
      } else {
        throw new Error("Failed to generate Solidity contract")
      }
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      throw err
    } finally {
      setIsLoading(false)
    }
  },
  
  const deploySmartContract = $2;
    options: DeploymentOptions): Promise<SmartContractInfo | null> => {
    if (!user?.id) {
      toast.error($2);
      return null
    }
    try {
      setDeploymentStatus($2);
      // This would normally connect to MetaMask or other Web3 provider
      // For now, we'll just simulate success
      const mockTransactionHash = `0x${Array.from({length: 64}, () => 
        Math.floor(Math.random() * 16).toString(16)).join('')}`,
      
      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto.randomUUID($2);
        transactionHash: mockTransactionHash,
        networkName: options.network,
        blockNumber: Math.floor(Math.random() * 1000000),
        deployedAddress: `0x${Array.from({length: 40}, () => 
          Math.floor(Math.random() * 16).toString(16)).join('')}`,
        contractType: 'escrow',
        createdAt: new Date().toISOString($2);
        createdBy: user.id,
        status: 'deployed'
      },
      
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000)),
      
      setDeploymentStatus($2);
      toast.success($2);
      return mockSmartContractInfo
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      setDeploymentStatus($2);
      return null
    }
  },
  
  return {
    generateSolidityContract,
    deploySmartContract,
    isLoading,
    deploymentStatus
  }
}
;

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

  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');

if (data && data.solidityCode) {
        return data.solidityCode
      } else {
        throw new Error("Failed to generate Solidity contract")
      }
    } catch (err: any) {
>>>>>>> origin/cursor/delete-old-data-records-6bba

      console.error("Error generating Solidity contract:", err),
      toast.error("Failed to generate smart contract"),
      throw err
    } finally {
      setIsLoading(false)
    }

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  const deploySmartContract = async (
    contractCode: string;
    options: DeploymentOptions
  ): Promise<SmartContractInfo | null> => {
    if (!user?.id) {

<<<<<<< HEAD

      toast && toast.error("You must be logged in to deploy a contract"),


=======

      return null
    }
    try {

      setDeploymentStatus('deploying');
      // This would normally connect to MetaMask or other Web3 provider
      // For now, we'll just simulate success
      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto && crypto.randomUUID();
        transactionHash: mockTransactionHash;

>>>>>>> origin/cursor/delete-old-data-records-6bba
        status: 'deployed'
      }
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000));
      setDeploymentStatus('success');
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    } catch (err: any) {
      console.error("Error deploying smart contract:", err);
      toast.error("Failed to deploy smart contract");
      setDeploymentStatus('error');

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
  ): Promise<SmartContractInfo | null> => {}
    if (!user?.id) {}
      return null;
    }

        networkName: options && options.network;

        blockNumber: Math && Math.floor(Math && Math.random() * 1000000),
        deployedAddress: `0x${Array && Array.from({length: 40}, () => '`
          Math && Math.floor(Math && Math.random() * 16).toString(16)).join('')}`;'
        contractType: 'escrow';
        createdAt: new Date().toISOString();
        createdBy: user && user.id,

      return mockSmartContractInfo
    } catch (err: any) {
      console && console.error("Error deploying smart contract:", err);
      toast && toast.error("Failed to deploy smart contract");
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setDeploymentStatus('error');
      return null

    }

  }
  return {}

    generateSolidityContract;
    deploySmartContract;
    isLoading;


<<<<<<< HEAD
    deploymentStatus

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

=======
        status: 'deployed';
      }
;
      // Wait to simulate blockchain transaction time;
      await new Promise (resolve => set_timeout (resolve, 2000));

      setDeploymentStatus ('error');
      return null;
    }
  }

    generateSolidityContract;
    deploySmartContract;
    is_loading;
    deployment_status;
>>>>>>> origin/cursor/delete-old-data-records-6bba


  }
}
<<<<<<< HEAD



=======
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
  const [isLoading, setIsLoading] = useState(false),;
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle'),;'
    "values": ContractFormValues,;
    "talent": TalentProfile,;
    "clientName": string;
  ): Promise<string> => {;
    }
    try {;
      }
      setIsLoading(true),;
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {;"
        }
        "body": {;
          }
          "talentName": talent.full_name,;
          "clientName": clientName,;
          "projectName": values.projectName,;
          "scopeSummary": values.scopeSummary,;
          "startDate": values.startDate.toISOString(),;
          "endDate": values.endDate?.toISOString(),;
          "paymentTerms": values.paymentTerms,;
          "paymentAmount": values.paymentAmount,;
          "additionalClauses": values.additionalClauses || []}
      }),;
      if (error) throw error,;
      if (data && data.solidityCode) {;
        }
        return data.solidityCode;
      } else {;
        }
        throw new Error("Failed to generate Solidity contract");"
      }
    } catch ("err": any) {;
      }
      console.error("Error generating Solidity "contract":", err),;"
      toast.error("Failed to generate smart contract"),;"
      throw err;
    } finally {;
      }
      setIsLoading(false);
    }
  },;
  const deploySmartContract = async (;
    "contractCode": string,;
    "options": DeploymentOptions;
  ): Promise<SmartContractInfo | null> => {;
    }
    if (!user?.id) {;
      }
      toast.error("You must be logged in to deploy a contract"),;"
      return null;
    }

;
  }
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
