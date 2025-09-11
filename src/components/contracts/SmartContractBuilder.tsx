<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager",
import { DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",
import { useSmartContracts } from "@/hooks/useSmartContracts",
import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';

interface SmartContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string,) => void

}
export function SmartContractBuilder({
import React from 'react';
interface SmartContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string,) => void;
}
export function SmartContractBuilder(): any ({;
  isOpen;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
isOpen;
  onClose;
  talent;
  clientName;
<<<<<<< HEAD
  onContractGenerated}: SmartContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({

    network: 'ethereum'
    useEscrow: true
    deployToChain: false
  })
  const [deployStatus, setDeployStatus] = useState<string>('')
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null)
  const { deploySmartContract } = useSmartContracts()
  const handleLoadTemplate = (templateData: ContractFormValues,) => {
    setFormValues(templateData)
  }
  // Convert ContractFormValues to contract content string
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SmartContractBuilderProps {
=======
isOpen;
  onClose;
  talent;
  clientName;

interface SmartContractBuilderProps {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  is_open: boolean,
  on_close: () => void,
  talent: TalentProfile,
  client_name: string,
  onContractGenerated?: (contract_content: string, ) => void;
}
export /**
 * SmartContractBuilder - Function description
 */
function SmartContractBuilder() {
  const [active_tab, setActiveTab] = useState < string>("form");
  const [generated_contract, setGeneratedContract] = useState < string | null>(null);
  const [form_values, setFormValues] = useState < ContractFormValues | undefined>(
    undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
  const [deploy_options, _setDeployOptions] = useState < DeploymentOptions>({
    network: 'ethereum',
    use_escrow: true,
    deployToChain: false;
  });
  const [deploy_status, setDeployStatus] = useState < string>('');
  const [deployment_info, setDeploymentInfo] = useState < SmartContractInfo | null>(null);
  const { deploySmartContract } = useSmartContracts ();
  const handleLoadTemplate = (template_data: ContractFormValues, ) =>: any {
    setFormValues (template_data);
  }
  // Convert ContractFormValues to contract content string;
<<<<<<< HEAD
<<<<<<< HEAD
  const handleDeployContract = async () => {
    if (!generatedContract) return;
    try {
      setDeployStatus('deploying')
      const contractInfo = await deploySmartContract(generatedContract, deployOptions)
      if (contractInfo) {
        setDeploymentInfo(contractInfo)
        setDeployStatus('deployed')
        toast.success("Smart contract deployed successfully!")
      } else {
        setDeployStatus('error')
        toast.error("Failed to deploy smart contract")
      }
    } catch (error) {
      logErrorToProduction('Error deploying contract:', { data: error })
      setDeployStatus('error')
      toast.error("Failed to deploy smart contract")
    }
  }
// Placeholder ABIs - these should be generated from compiled contracts
const SIMPLE_AGREEMENT_ABI: ethers.InterfaceAbi = ["constructor(address client, address talent, string projectDetailsIPFSHash)"
  "function client() view returns(address)"
  "function talent() view returns(address)"
  "function projectDetailsIPFSHash() view returns(string)"
]
const ESCROW_AGREEMENT_ABI: ethers.InterfaceAbi = [// From Ownable
  "constructor(address initialOwner)"
  "function owner() view returns(address)"
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)"
  "function renounceOwnership()"
  "function transferOwnership(address newOwner)"
  // From Escrow
  "event Deposited(address indexed payee, uint256 weiAmount)"
  "event Withdrawn(address indexed payee, uint256 weiAmount)"
  // EscrowAgreement specific(based on previous subtask's template)
  "constructor(address _talent, address _client, string memory _projectDetailsIPFSHash)", // Note: Ownable takes _client
  "function talent() view returns(address)"
  "function projectDetailsIPFSHash() view returns(string)"
  "function currentState() view returns(uint8)", // Enum EscrowState
  "function depositFunds() payable"
  "function releaseFunds()"
  "function markAsDelivered()"
  "function raiseDispute()"
]
interface SmartContractBuilderProps {
  isOpen: boolean
  onClose: () => void;
  talent: TalentProfile;
  clientName: string; // Assuming clientName is passed as a prop
  onContractGenerated?: (contractContent: string) => void; // For Solidity
  onLegalDraftGenerated?: (markdownContent: string) => void; // For Markdown
  onDeploy?: (contractContent: string) => void}
// Helper to ensure milestones are always an array
}
  return []}
export function SmartContractBuilder({
  isOpen
  onClose
  talent
  clientName
  onContractGenerated, // This is for Solidity
  onLegalDraftGenerated, // New prop for the markdown draft
  onDeploy
}: SmartContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form")
  // State for Solidity contract(existing)
  const [generatedSolidityContract, setGeneratedSolidityContract] = useState<string | null>(null)
  // New state for Markdown legal draft
  const [generatedMarkdownContract, setGeneratedMarkdownContract] = useState<string | null>(null)
  const [isLoadingLegalDraft, setIsLoadingLegalDraft] = useState<boolean>(false)
  const [legalDraftError, setLegalDraftError] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(undefined)
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false)
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({
    network: 'ethereum', // Default network
import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
    useEscrow: true
    deployToChain: false // Default to not deploying to chain immediately
})
    useEscrow: true
    deployToChain: false // Default to not deploying to chain immediately
})
    useEscrow: true,
    deployToChain: false // Default to not deploying to chain immediately;
});
  const [deployStatus, setDeployStatus] = useState<string>(''); // e.g., 'deploying', 'deployed', 'error'
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null); // Existing from Solidity part
  // States for on-chain agreement UI and deployment
  const [enableOnChainAgreement, setEnableOnChainAgreement] = useState<boolean>(false)
  const [selectedNetwork, setSelectedNetwork] = useState<'ethereum' | 'polygon' | ''>('')
  // clientWalletAddress and talentWalletAddress might be part of formValues or separate state
  // For now, let's assume they can be part of formValues or derived if prefilled.// We'll use formValues.clientWalletAddress and formValues.talentWalletAddress
  const [onChainDeploymentStatus, setOnChainDeploymentStatus] = useState<'idle' | 'connecting' | 'fetching_code' | 'deploying' | 'success' | 'error'>('idle')
  const [transactionHash, setTransactionHash] = useState<string | null>(null)
  const [deployedContractAddress, setDeployedContractAddress] = useState<string | null>(null)
  const [deploymentError, setDeploymentError] = useState<string | null>(null)
  const [populatedSolidityCode, setPopulatedSolidityCode] = useState<string | null>(null); // Bytecode from generate-smart-contract
  const [contractAbi, setContractAbi] = useState<any | null>(null); // ABI based on contractType
  // This hook might be for the older Solidity template system.// We are now using supabase function 'generate-smart-contract' for Solidity for deployment.const { generateSolidityContract: generateSolidityFromHook, deploySmartContract: deployViaHook } = useSmartContracts()
  // Prefill form with talent and client name(existing useEffect)
  useEffect(() => {
  // TODO: Add dependencies if needed
  return () => {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleDeployContract = async () => {
    // Check condition
if (return) {
  $2
}
    try {
      setDeployStatus ('deploying');
      const contract_info = await deploySmartContract (generated_contract, deploy_options);
      // Check condition
if ( {) {
  $2
}
        setDeploymentInfo (contract_info);
        setDeployStatus ('deployed');
        toast.success ("Smart contract deployed successfully!");
      } else {
        setDeployStatus ('error');
        toast.error ("Failed to deploy smart contract");
      }
    } catch (error) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onContractGenerated}: SmartContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({;
    network: 'ethereum',;
    useEscrow: true,;
    deployToChain: false;
  });
  const [deployStatus, setDeployStatus] = useState<string>('');
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
  const { deploySmartContract } = useSmartContracts();
  const handleLoadTemplate = (templateData: ContractFormValues,) => {;
    setFormValues(templateData);
  };
  // Convert ContractFormValues to contract content string;
  const handleDeployContract = async () => {;
    if (!generatedContract) return;
    try {;
      setDeployStatus('deploying');
      const contractInfo = await deploySmartContract(generatedContract, deployOptions);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const { deploySmartContract } = useSmartContracts();

  const handleLoadTemplate = (templateData: ContractFormValues,) => {;
    setFormValues(templateData);
  };

  // Convert ContractFormValues to contract content string;

  const handleDeployContract = async () => {;
    if (!generatedContract) return;

    try {;
      setDeployStatus('deploying');
      const contractInfo = await deploySmartContract(generatedContract, deployOptions);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (contractInfo) {;
        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');
        toast && toast.success("Smart contract deployed successfully!");
      } else {;
        setDeployStatus('error');
        toast && toast.error("Failed to deploy smart contract");
      }
    } catch (error) {;
      logErrorToProduction('Error deploying contract:', { data: error }),;
      setDeployStatus('error');
      toast && toast.error("Failed to deploy smart contract");
    }
  };
// Placeholder ABIs - these should be generated from compiled contracts;
const SIMPLE_AGREEMENT_ABI: ethers && ethers.InterfaceAbi = ["constructor(address client, address talent, string projectDetailsIPFSHash)",;
  "function client(): any () view returns(address)",;
  "function talent(): any () view returns(address)",;
  "function projectDetailsIPFSHash(): any () view returns(string)",;
];
const ESCROW_AGREEMENT_ABI: ethers && ethers.InterfaceAbi = [// From Ownable;
  "constructor(address initialOwner)",;
  "function owner(): any () view returns(address)",;
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",;
  "function renounceOwnership(): any ()",;
  "function transferOwnership(): any (address newOwner)",;
  // From Escrow;
  "event Deposited(address indexed payee, uint256 weiAmount)",;
  "event Withdrawn(address indexed payee, uint256 weiAmount)",;
  // EscrowAgreement specific(based on previous subtask's template);
  "constructor(address _talent, address _client, string memory _projectDetailsIPFSHash)", // Note: Ownable takes _client;
  "function talent(): any () view returns(address)",;
  "function projectDetailsIPFSHash(): any () view returns(string)",;
  "function currentState(): any () view returns(uint8)", // Enum EscrowState;
  "function depositFunds(): any () payable",;
  "function releaseFunds(): any ()",;
  "function markAsDelivered(): any ()",;
  "function raiseDispute(): any ()",;
];
interface SmartContractBuilderProps {;
  isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string; // Assuming clientName is passed as a prop;
  onContractGenerated?: (contractContent: string) => void; // For Solidity;
  onLegalDraftGenerated?: (markdownContent: string) => void; // For Markdown;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onDeploy?: (contractContent: string) => void}
// Helper to ensure milestones are always an array
      logErrorToProduction ('Error deploying contract:', { data: error }),
      setDeployStatus ('error');
      toast.error ("Failed to deploy smart contract");
    }
  }
// Placeholder ABIs - these should be generated from compiled contracts;
const SIMPLE_AGREEMENT_ABI: ethers.InterfaceAbi = ["constructor (address client, address talent, string projectDetailsIPFSHash)",
  "function client () view returns (address)",
  "function talent () view returns (address)",
  "function projectDetailsIPFSHash () view returns (string)",
];
const ESCROW_AGREEMENT_ABI: ethers.InterfaceAbi = [// From Ownable;
  "constructor (address initial_owner)",
  "function owner () view returns (address)",
  "event OwnershipTransferred (address indexed previous_owner, address indexed new_owner)",
  "function renounce_ownership ()",
  "function transfer_ownership (address new_owner)",
  // From Escrow;
  "event Deposited (address indexed payee, uint256 wei_amount)",
  "event Withdrawn (address indexed payee, uint256 wei_amount)",
  // EscrowAgreement specific (based on previous subtask's template);
  "constructor (address _talent, address _client, string memory _projectDetailsIPFSHash)", // Note: Ownable takes _client;
  "function talent () view returns (address)",
  "function projectDetailsIPFSHash () view returns (string)",
  "function current_state () view returns (uint8)", // Enum EscrowState;
  "function deposit_funds () payable",
  "function release_funds ()",
  "function markAsDelivered ()",
  "function raise_dispute ()",
];
interface SmartContractBuilderProps {
  is_open: boolean;
  on_close: () => void;
  talent: TalentProfile;
  client_name: string; // Assuming client_name is passed as a prop;
  onContractGenerated?: (contract_content: string) => void; // For Solidity;
  onLegalDraftGenerated?: (markdown_content: string) => void; // For Markdown;
  on_deploy?: (contract_content: string) => void}
// Helper to ensure milestones are always an array;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export /**
 * SmartContractBuilder - Function description
 */
function SmartContractBuilder() {
  const [active_tab, setActiveTab] = useState < string>("form");
  // State for Solidity contract (existing);
  const [generatedSolidityContract, setGeneratedSolidityContract] = useState < string | null>(null);
  // New state for Markdown legal draft;
  const [generatedMarkdownContract, setGeneratedMarkdownContract] = useState < string | null>(null);
  const [isLoadingLegalDraft, setIsLoadingLegalDraft] = useState < boolean>(false);
  const [legalDraftError, setLegalDraftError] = useState < string | null>(null);
  const [form_values, setFormValues] = useState < ContractFormValues | undefined>(undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
  const [deploy_options, setDeployOptions] = useState < DeploymentOptions>({
    network: 'ethereum', // Default network;
    use_escrow: true,
    deployToChain: false // Default to not deploying to chain immediately;
});
  const [deploy_status, setDeployStatus] = useState < string>(''); // e.g., 'deploying', 'deployed', 'error';
  const [deployment_info, setDeploymentInfo] = useState < SmartContractInfo | null>(null); // Existing from Solidity part;
  // States for on - chain agreement UI and deployment;
  const [enableOnChainAgreement, setEnableOnChainAgreement] = useState < boolean>(false);
  const [selected_network, setSelectedNetwork] = useState<'ethereum' | 'polygon' | ''>('');
  // clientWalletAddress and talentWalletAddress might be part of form_values or separate state;
  // For now, let's assume they can be part of form_values or derived if prefilled.// We'll use form_values.clientWalletAddress and form_values.talentWalletAddress;
  const [onChainDeploymentStatus, setOnChainDeploymentStatus] = useState<'idle' | 'connecting' | 'fetching_code' | 'deploying' | 'success' | 'error'>('idle');
  const [transaction_hash, setTransactionHash] = useState < string | null>(null);
  const [deployedContractAddress, setDeployedContractAddress] = useState < string | null>(null);
  const [deployment_error, setDeploymentError] = useState < string | null>(null);
  const [populatedSolidityCode, setPopulatedSolidityCode] = useState < string | null>(null); // Bytecode from generate - smart - contract;
  const [contract_abi, setContractAbi] = useState < any | null>(null); // ABI based on contract_type;
  // This hook might be for the older Solidity template system.// We are now using supabase function 'generate - smart - contract' for Solidity for deployment.const { generateSolidityContract: generateSolidityFromHook, deploySmartContract: deployViaHook } = useSmartContracts ();
  // Prefill form with talent and client name (existing useEffect);
  useEffect (() => {
  // TODO: Add dependencies if needed;
<<<<<<< HEAD
<<<<<<< HEAD
  return () => {
    // Cleanup function;
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return () => {
    // Cleanup function;
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return []};
export function SmartContractBuilder(): any ({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated, // This is for Solidity;
  onLegalDraftGenerated, // New prop for the markdown draft;
  onDeploy;
}: SmartContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  // State for Solidity contract(existing);
  const [generatedSolidityContract, setGeneratedSolidityContract] = useState<string | null>(null);
  // New state for Markdown legal draft;
  const [generatedMarkdownContract, setGeneratedMarkdownContract] = useState<string | null>(null);
  const [isLoadingLegalDraft, setIsLoadingLegalDraft] = useState<boolean>(false);
  const [legalDraftError, setLegalDraftError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({;
    network: 'ethereum', // Default network;
    useEscrow: true,;
    deployToChain: false // Default to not deploying to chain immediately;
});
  const [deployStatus, setDeployStatus] = useState<string>(''); // e && e.g., 'deploying', 'deployed', 'error';
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null); // Existing from Solidity part;
  // States for on-chain agreement UI and deployment;
  const [enableOnChainAgreement, setEnableOnChainAgreement] = useState<boolean>(false);
  const [selectedNetwork, setSelectedNetwork] = useState<'ethereum' | 'polygon' | ''>('');
  // clientWalletAddress and talentWalletAddress might be part of formValues or separate state;
  // For now, let's assume they can be part of formValues or derived if prefilled.// We'll use formValues && formValues.clientWalletAddress and formValues && formValues.talentWalletAddress;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [onChainDeploymentStatus, setOnChainDeploymentStatus] = useState<'idle' | 'connecting' | 'fetching_code' | 'deploying' | 'success' | 'error'>('idle');
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [deployedContractAddress, setDeployedContractAddress] = useState<string | null>(null);
  const [deploymentError, setDeploymentError] = useState<string | null>(null);
  const [populatedSolidityCode, setPopulatedSolidityCode] = useState<string | null>(null); // Bytecode from generate-smart-contract;
  const [contractAbi, setContractAbi] = useState<any | null>(null); // ABI based on contractType;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // This hook might be for the older Solidity template system.// We are now using supabase function 'generate-smart-contract' for Solidity for deployment && deployment.const { generateSolidityContract: generateSolidityFromHook, deploySmartContract: deployViaHook } = useSmartContracts();
  // Prefill form with talent and client name(existing useEffect);
  useEffect(() => {;
  // TODO: Add dependencies if needed;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return () => {;
    // Cleanup function;
};
}, []); []);
    if(talent && clientName && !formValues) { // Only prefill if formValues is not already set(e && e.g., by a template);
      setFormValues(prev => ({;
        ...prev,;
        projectTitle: prev?.projectTitle || '', // Keep existing or empty;
        clientName: clientName,;
        talentName: talent && talent.full_name || talent && talent.user_id, // Use full_name or fallback;
        deliverables: prev?.deliverables || '',;
        paymentStructure: prev?.paymentStructure || '',;
        milestones: ensureMilestonesArray(prev?.milestones), // Ensure milestones is an array;
        clientWalletAddress: prev?.clientWalletAddress || '',;
        talentWalletAddress: prev?.talentWalletAddress || '',;
        // Initialize other fields from ContractFormValues as needed;
        scopeSummary: prev?.scopeSummary || '',;
        paymentAmount: prev?.paymentAmount || 0,;
        currency: prev?.currency || 'USD',;
        deadline: prev?.deadline || '',;
        governingLaw: prev?.governingLaw || '',;
        disputeResolution: prev?.disputeResolution || '',,;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}, []); []);
    if ( { // Only prefill if form_values is not already set (e.g., by a template)) {
  $2
}
      setFormValues (prev => ({
        ...prev,
        project_title: prev?.project_title || '', // Keep existing or empty;
        client_name: client_name,
        talent_name: talent.full_name || talent.user_id, // Use full_name or fallback;
        deliverables: prev?.deliverables || '',
        payment_structure: prev?.payment_structure || '',
        milestones: ensureMilestonesArray (prev?.milestones), // Ensure milestones is an array;
        clientWalletAddress: prev?.clientWalletAddress || '',
        talentWalletAddress: prev?.talentWalletAddress || '',
        // Initialize other fields from ContractFormValues as needed;
        scope_summary: prev?.scope_summary || '',
        payment_amount: prev?.payment_amount || 0,
        currency: prev?.currency || 'USD',
        deadline: prev?.deadline || '',
        governing_law: prev?.governing_law || '',
        dispute_resolution: prev?.dispute_resolution || '', ,
}))}
  }, [talent, client_name, is_open]); // Re - run if talent, client_name, or is_open changes and form_values not set.// Clear any previously generated contracts when a new template is loaded;
    setGeneratedMarkdownContract (null);
    setGeneratedSolidityContract (null);
    setLegalDraftError (null);
    setActiveTab ("form")}
  // For generating Solidity (existing logic, adapted);
      return}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      // Assuming generateSolidityContract now primarily uses formValues;
      // and talent/clientName are for context or specific template variables && variables.setGeneratedSolidityContract(solidityCode);
      if(onContractGenerated) { // Existing prop for Solidity;
        onContractGenerated(solidityCode)}
      // Potentially switch to a Solidity preview tab if that's different;
      // For now, let's assume the main "Preview" tab can show Solidity if deployOptions && deployOptions.deployToChain is true;
      // Or if there's a specific action for "Preview Solidity";
      toast && toast.success("Solidity code generated (simulated).");
      // setActiveTab("preview"); // Or a specific solidity preview tab;
} catch(error) {;
      console && console.error("Error generating Solidity contract:", error);
      toast && toast.error("Failed to generate Solidity contract.")}
  };
  // New function for generating Markdown legal draft;
      return}
    setIsLoadingLegalDraft(true);
    setLegalDraftError(null);
    setGeneratedMarkdownContract(null);
    try {;
      const { data, error } = await supabase && supabase.functions.invoke('generate-contract', {;
        body: payload,,;
});
      if(error) {;
<<<<<<< HEAD
<<<<<<< HEAD
    // Cleanup function
}
}, []); [])
    if(talent && clientName && !formValues) { // Only prefill if formValues is not already set(e.g., by a template)
      setFormValues(prev => ({
        ...prev
        projectTitle: prev?.projectTitle |'', // Keep existing or empty
        clientName: clientName
        talentName: talent.full_name |talent.user_id, // Use full_name or fallback
        deliverables: prev?.deliverables |''
        paymentStructure: prev?.paymentStructure |''
        milestones: ensureMilestonesArray(prev?.milestones), // Ensure milestones is an array
        clientWalletAddress: prev?.clientWalletAddress |''
        talentWalletAddress: prev?.talentWalletAddress |''
        // Initialize other fields from ContractFormValues as needed
        scopeSummary: prev?.scopeSummary |''
        paymentAmount: prev?.paymentAmount |0
        currency: prev?.currency |'USD'
        deadline: prev?.deadline |''
        governingLaw: prev?.governingLaw |''
        disputeResolution: prev?.disputeResolution |'',
}))}
  }, [talent, clientName, isOpen]); // Re-run if talent, clientName, or isOpen changes and formValues not set.// Clear any previously generated contracts when a new template is loaded
    setGeneratedMarkdownContract(null)
    setGeneratedSolidityContract(null)
    setLegalDraftError(null)
    setActiveTab("form")}
  // For generating Solidity(existing logic, adapted)
      return}
    try {
      // Assuming generateSolidityContract now primarily uses formValues
      // and talent/clientName are for context or specific template variables.setGeneratedSolidityContract(solidityCode)
      if(onContractGenerated) { // Existing prop for Solidity
        onContractGenerated(solidityCode)}
      // Potentially switch to a Solidity preview tab if that's different
      // For now, let's assume the main "Preview" tab can show Solidity if deployOptions.deployToChain is true
      // Or if there's a specific action for "Preview Solidity"
      toast.success("Solidity code generated (simulated).")
      // setActiveTab("preview"); // Or a specific solidity preview tab
} catch(error) {
      console.error("Error generating Solidity contract:", error)
      toast.error("Failed to generate Solidity contract.")}
  }
  // New function for generating Markdown legal draft
      return}
    setIsLoadingLegalDraft(true)
    setLegalDraftError(null)
    setGeneratedMarkdownContract(null)
    try {
      const { data, error } = await supabase.functions.invoke('generate-contract', {
        body: payload,
})
      if(error) {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        throw error}
      if(data && data.markdownContent) { // Assuming your Supabase func returns { markdownContent: "..." }
        setGeneratedMarkdownContract(data.markdownContent)
        if(onLegalDraftGenerated) {
          onLegalDraftGenerated(data.markdownContent)}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { data, error } = await supabase.functions.invoke ('generate - contract', {
        body: payload, ,
});
      // Check condition
if ( {) {
  $2
}
        throw error}
      if ( { // Assuming your Supabase func returns { markdown_content: "..." }
        setGeneratedMarkdownContract (data.markdown_content)) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          onLegalDraftGenerated (data.markdown_content)}
        setActiveTab ("preview_markdown"); // Switch to a new tab for Markdown preview;
        toast.success ("Legal draft generated successfully!")} else {
        throw new Error ("No content received from draft generator.")}
    } catch (err: any) {
      console.error ("Error generating legal draft:", err);
      setLegalDraftError (err.message || "Failed to generate legal draft.");
      toast.error (err.message || "Failed to generate legal draft.")} finally {
      setIsLoadingLegalDraft (false)}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
      toast.info ("Generating PDF...");
      html2pdf ().from (element).set (opt).save ();
        .then (() => toast.success ("PDF downloaded successfully!"));
        .catch ((err) => {
          toast.error ("PDF generation failed.");
          console.error ("Error generating PDF:", err)})} else {
      toast.warn ("No draft content available to download or form values missing.")}
  }
      return}
<<<<<<< HEAD
<<<<<<< HEAD
        setActiveTab("preview_markdown"); // Switch to a new tab for Markdown preview
        toast.success("Legal draft generated successfully!")} else {
        throw new Error("No content received from draft generator.")}
    } catch(err: any) {
      console.error("Error generating legal draft:", err)
      setLegalDraftError(err.message |"Failed to generate legal draft.")
      toast.error(err.message |"Failed to generate legal draft.")} finally {
      setIsLoadingLegalDraft(false)}
  }
      toast.info("Generating PDF...")
      html2pdf().from(element).set(opt).save()
        .then(() => toast.success("PDF downloaded successfully!"))
        .catch((err) => {
          toast.error("PDF generation failed.")
          console.error("Error generating PDF:", err)})} else {
      toast.warn("No draft content available to download or form values missing.")}
  }
      return}
    setOnChainDeploymentStatus('connecting')
    setDeploymentError(null)
    setTransactionHash(null)
    setDeployedContractAddress(null)
    setPopulatedSolidityCode(null)
    try {
      if(!window.ethereum) {
        throw new Error("MetaMask is not installed.Please install it to continue.")}
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const targetChainId = selectedNetwork === 'ethereum' ? '0x1' : '0x89'; // 1 for Ethereum Mainnet, 137 for Polygon
      if(currentNetwork.chainId.toString() !== BigInt(targetChainId).toString()) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain'
            params: [{ chainId: targetChainId }],
})
          // Re-initialize provider and signer after network switch
          //
          // signer = await newProvider.getSigner()} catch(switchError: any) {
          if(switchError.code === 4902) { // Chain not added
            throw new Error(`Please add ${selectedNetwork} to MetaMask and switch to it.`)}
          throw new Error(`Failed to switch network: ${switchError.message}`)}
      }
      setOnChainDeploymentStatus('fetching_code')
      // Determine contractType(e.g. from a form field if it's selectable, or default)
      // For now, let's assume it's part of formValues or a fixed choice for this flow.const contractTypeToDeploy: ContractType = formValues.contractType |'simple'; // Default to 'simple'
      // Create a temporary projectDetailsIPFSHash(replace with actual IPFS hashing later)
      const projectDetailsIPFSHash = ethers.id(projectDetailsString); // Simple hash
      const { data, error: funcError } = await supabase.functions.invoke('generate-smart-contract', {
        body: {
          contractType: contractTypeToDeploy
          clientAddress: formValues.clientWalletAddress
          talentAddress: formValues.talentWalletAddress
          projectDetailsIPFSHash: projectDetailsIPFSHash,
}
})
      if(funcError) throw new Error(`Failed to fetch contract code: ${funcError.message}`)
      if(!data |!data.solidityCode) throw new Error("No Solidity code received from generator.")
      setPopulatedSolidityCode(data.solidityCode); // This is actually bytecode if Supabase func compiles
      // For now, assuming data.solidityCode IS the bytecode.This is a placeholder.// In reality, the Supabase function should return bytecode and ABI.// Or, if it returns Solidity, we'd compile it client-side(not recommended for production).setContractAbi(currentAbi)
      setOnChainDeploymentStatus('deploying')
      toast.info("Deploying contract... This may take a moment.Please confirm in MetaMask.")
      // IMPORTANT: populatedSolidityCode here should be BYTECODE.// The current 'generate-smart-contract' returns Solidity source.This will not work.// This is a placeholder for the actual deployment flow.// We need a compile step or the Supabase function must return bytecode.// For now, this will fail if populatedSolidityCode is not bytecode.let contract
      // Adjust constructor arguments based on contractTypeToDeploy
      if(contractTypeToDeploy === 'simple') {
        contract = await factory.deploy(formValues.clientWalletAddress, formValues.talentWalletAddress, projectDetailsIPFSHash)} else { // escrow
        // EscrowAgreement constructor: constructor(address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable(_client)
        // The Ownable(_client) is handled by OpenZeppelin's constructor if `initialOwner` is the first arg to Ownable's constructor.// Or, if our EscrowAgreement's constructor directly calls Ownable(_client), then that's fine.// Based on EscrowAgreement.sol: constructor(address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable(_client)
        // The ethers.js deploy will pass these args to the Solidity constructor.contract = await factory.deploy(formValues.talentWalletAddress, formValues.clientWalletAddress, projectDetailsIPFSHash)}
      await contract.waitForDeployment()
      setDeployedContractAddress(deployedAddr)
      setTransactionHash(contract.deploymentTransaction()?.hash |null)
      setOnChainDeploymentStatus('success')
      toast.success(`Contract deployed successfully at ${deployedAddr}`)} catch(err: any) {
      console.error("Deployment error:", err)
      setDeploymentError(err.message |"An unknown error occurred during deployment.")
      setOnChainDeploymentStatus('error')
      toast.error(err.message |"Deployment failed.")}
  }
  // This function is passed to ContractForm.// We now decide what "generate" means in this context.// The subtask asks for a "Generate Legal Draft" button.// Let's assume ContractForm's onContractGenerated is for the primary action, which could be Solidity or data pass-through.// For clarity, we will add a dedicated "Generate Legal Draft" button in SmartContractBuilder's JSX.// The onContractGenerated from ContractForm might be re-purposed or trigger our Solidity generation.const handleFormSubmitFromContractForm = (values: ContractFormValues) => {
    // This is called by ContractForm's own submit/generate button.// Let's make this one generate the Solidity code, as per existing flow.setFormValues(values); // Update formValues state first
    handleGenerateSolidity(); // Then generate Solidity.}
  return (<Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Smart Contract Builder</DialogTitle>
          <DialogDescription>
            Create, customize, and deploy your smart contract or generate a legal draft.</DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <TabsList className="grid grid-cols-3"> {/* Added new tab */}
              <TabsTrigger value="form">1.Details</TabsTrigger>
              <TabsTrigger value="preview_markdown" disabled={!generatedMarkdownContract}>2.Legal Draft</TabsTrigger>
              <TabsTrigger value="preview_solidity" disabled={!enableOnChainAgreement && !generatedSolidityContract}>3.On-Chain Contract</TabsTrigger>
            </TabsList>
            {/* This button seems out of place if it's just for templates, maybe move into "form" tab? */}
            {/* <Button
              variant="outline"
              size="sm"
              onClick={() => setTemplateManagerOpen(true)}
              className="flex gap-1">
              <Save className="h-4 w-4"  />
              Templates
            </Button>
          </div>
          <TabsContent value="form" className="pt-4 space-y-6">
            <ContractForm talent={talent}
              clientName={clientName}
              initialValues={formValues} // Pass the potentially prefilled/template-loaded values
              onFormValuesChange={setFormValues} // Keep SmartContractBuilder's state in sync
              onContractGenerated={handleFormSubmitFromContractForm} // This will now trigger Solidity generation
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}
             />
            <div className="flex justify-end pt-4">
              <Button
                onClick={handleGenerateLegalDraft}
                disabled={isLoadingLegalDraft |!formValues}
                size="lg"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                <FileText className="h-5 w-5"  />
                {isLoadingLegalDraft ? "Generating Draft..." : "Generate Legal Draft(GPT)"}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="preview_markdown" className="pt-4">
            {isLoadingLegalDraft && <p>Loading draft...</p>}
            {legalDraftError && <p className="text-red-500">Error: {legalDraftError}</p>}
            {generatedMarkdownContract && (
              <div>
                <div ref={legalDraftPreviewRef} className="prose dark:prose-invert max-w-none p-6 border rounded-md bg-background shadow-sm">
                  {/* Content to be PDF'd is wrapped by the ref div */}
                  <ReactMarkdown>{generatedMarkdownContract}</ReactMarkdown>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button onClick={handleDownloadPdf} variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4"  />
                    Download as PDF
                  </Button>
                </div>
              </div>
            )}
            {!generatedMarkdownContract && !isLoadingLegalDraft && <p>Generate a legal draft to preview and download.</p>}
          </TabsContent>
  // Modified to match the expected interface
  const handleFormSubmit = (contract: string,) => {
    // This should be a function that takes a string (contract content)
    // Since we need to adapt the interface, we'll implement the simplest solution that works
    if (onContractGenerated) {
      onContractGenerated(contract)
    }
    setGeneratedContract(contract)
    setActiveTab("preview")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Smart Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
            </div>
          </div>
          <TabsContent value="form" className="pt-4">
            <ContractForm
              talent = {talent,}
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleFormSubmit,}
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>
                <ContractPreview
                  generatedContract = {generatedContract,}
                  talent = {talent,}
                  onClose = {onClose,}
                  deploymentInfo = {deploymentInfo,}
                />
                {!deploymentInfo && deployOptions.deployToChain && (
                  <div className="mt-6 flex justify-center">
                    <Button
                      onClick = {handleDeployContract,}
                      disabled = {deployStatus === 'deploying',}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>
                  </div>                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
        <TemplateManager
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}
        />
      </DialogContent>
    </Dialog>
  )
}
//Modified to match the expected interface const handleFormSubmit = (contract: string) => {'
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {
  setGeneratedContract (contract);"
setActiveTab ("preview")
};"
  talent
}clientName= {
  clientName
}initialValues= {
  formValues
}onFormValuesChange= {
  setFormValues
}onContractGenerated= {
  handleFormSubmit
}/> </TabsContent> <div> <ContractPreview generatedContract= {
  generatedContract
}talent= {
  talent
}onClose= {
  onClose
}deploymentInfo= {
  deploymentInfo
}/> > {'
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'
}</Button> </div>)
}</div>)
}</TabsContent> </Tabs> <TemplateManager isOpen= {
  templateManagerOpen
}onClose= {
  () => setTemplateManagerOpen (false)
}onSelectTemplate= {
  handleLoadTemplate
}currentValues= {
  formValues
}/> </DialogContent> </Dialog>)
}'"            {!enableOnChainAgreement && <p className="text-muted-foreground p-4 text-center">Enable on-chain agreement to deploy this contract to a blockchain.</p>}
            {/* Fallback for old Solidity preview if needed, or remove if fully replaced by on-chain flow */}
            {/* {generatedSolidityContract && !deployOptions.deployToChain && !enableOnChainAgreement && ( ... )} */}
          </TabsContent>
        </Tabs>
        <TemplateManager
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setActiveTab("preview_markdown"); // Switch to a new tab for Markdown preview;
        toast && toast.success("Legal draft generated successfully!")} else {;
        throw new Error("No content received from draft generator.")}
    } catch(err: any) {;
      console && console.error("Error generating legal draft:", err);
      setLegalDraftError(err && err.message || "Failed to generate legal draft.");
      toast && toast.error(err && err.message || "Failed to generate legal draft.")} finally {;
      setIsLoadingLegalDraft(false)}
  };
      toast && toast.info("Generating PDF...");
      html2pdf().from(element).set(opt).save();
        .then(() => toast && toast.success("PDF downloaded successfully!"));
        .catch((err) => {;
          toast && toast.error("PDF generation failed.");
          console && console.error("Error generating PDF:", err)})} else {;
      toast && toast.warn("No draft content available to download or form values missing.")}
  };
      return}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setOnChainDeploymentStatus('connecting');
    setDeploymentError(null);
    setTransactionHash(null);
    setDeployedContractAddress(null);
    setPopulatedSolidityCode(null);
    try {;
      if(!window && window.ethereum) {;
        throw new Error("MetaMask is not installed && installed.Please install it to continue.")}
<<<<<<< HEAD
      await window && window.ethereum.request({ method: 'eth_requestAccounts' });
      const targetChainId = selectedNetwork === 'ethereum' ? '0x1' : '0x89'; // 1 for Ethereum Mainnet, 137 for Polygon;
=======

      await window && window.ethereum.request({ method: 'eth_requestAccounts' });
      const targetChainId = selectedNetwork === 'ethereum' ? '0x1' : '0x89'; // 1 for Ethereum Mainnet, 137 for Polygon;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if(currentNetwork && currentNetwork.chainId.toString() !== BigInt(targetChainId).toString()) {;
        try {;
          await window && window.ethereum.request({;
            method: 'wallet_switchEthereumChain',;
            params: [{ chainId: targetChainId }],,;
});
          // Re-initialize provider and signer after network switch;
          // ;
          // signer = await newProvider && newProvider.getSigner()} catch(switchError: any) {;
          if(switchError && switchError.code === 4902) { // Chain not added;
<<<<<<< HEAD
            throw new Error(`Please add ${selectedNetwork} to MetaMask and switch to it.`)}
          throw new Error(`Failed to switch network: ${switchError && switchError.message}`)}
      }
      setOnChainDeploymentStatus('fetching_code');
      // Determine contractType(e && e.g. from a form field if it's selectable, or default);
      // For now, let's assume it's part of formValues or a fixed choice for this flow && flow.const contractTypeToDeploy: ContractType = formValues && formValues.contractType || 'simple'; // Default to 'simple';
      // Create a temporary projectDetailsIPFSHash(replace with actual IPFS hashing later);
      const projectDetailsIPFSHash = ethers && ethers.id(projectDetailsString); // Simple hash;
=======

            throw new Error(`Please add ${selectedNetwork} to MetaMask and switch to it.`)}
          throw new Error(`Failed to switch network: ${switchError && switchError.message}`)}
      }


      setOnChainDeploymentStatus('fetching_code');
      // Determine contractType(e && e.g. from a form field if it's selectable, or default);
      // For now, let's assume it's part of formValues or a fixed choice for this flow && flow.const contractTypeToDeploy: ContractType = formValues && formValues.contractType || 'simple'; // Default to 'simple';

      // Create a temporary projectDetailsIPFSHash(replace with actual IPFS hashing later);
      const projectDetailsIPFSHash = ethers && ethers.id(projectDetailsString); // Simple hash;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { data, error: funcError } = await supabase && supabase.functions.invoke('generate-smart-contract', {;
        body: {;
          contractType: contractTypeToDeploy,;
          clientAddress: formValues && formValues.clientWalletAddress,;
          talentAddress: formValues && formValues.talentWalletAddress,;
          projectDetailsIPFSHash: projectDetailsIPFSHash,,;
},,;
});
      if(funcError) throw new Error(`Failed to fetch contract code: ${funcError && funcError.message}`);
      if(!data || !data && data.solidityCode) throw new Error("No Solidity code received from generator.");
      setPopulatedSolidityCode(data && data.solidityCode); // This is actually bytecode if Supabase func compiles;
      // For now, assuming data && data.solidityCode IS the bytecode && bytecode.This is a placeholder.// In reality, the Supabase function should return bytecode and ABI.// Or, if it returns Solidity, we'd compile it client-side(not recommended for production).setContractAbi(currentAbi);
      setOnChainDeploymentStatus('deploying');
      toast && toast.info("Deploying contract... This may take a moment && moment.Please confirm in MetaMask.");
      // IMPORTANT: populatedSolidityCode here should be BYTECODE.// The current 'generate-smart-contract' returns Solidity source && source.This will not work.// This is a placeholder for the actual deployment flow.// We need a compile step or the Supabase function must return bytecode.// For now, this will fail if populatedSolidityCode is not bytecode && bytecode.let contract;
      // Adjust constructor arguments based on contractTypeToDeploy;
      if(contractTypeToDeploy === 'simple') {;
        contract = await factory && factory.deploy(formValues && formValues.clientWalletAddress, formValues && formValues.talentWalletAddress, projectDetailsIPFSHash)} else { // escrow;
        // EscrowAgreement constructor: constructor(address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable(_client);
        // The Ownable(_client) is handled by OpenZeppelin's constructor if `initialOwner` is the first arg to Ownable's constructor.// Or, if our EscrowAgreement's constructor directly calls Ownable(_client), then that's fine.// Based on EscrowAgreement && EscrowAgreement.sol: constructor(address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable(_client);
        // The ethers && ethers.js deploy will pass these args to the Solidity constructor && constructor.contract = await factory && factory.deploy(formValues && formValues.talentWalletAddress, formValues && formValues.clientWalletAddress, projectDetailsIPFSHash)}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      await contract && contract.waitForDeployment();
      setDeployedContractAddress(deployedAddr);
      setTransactionHash(contract && contract.deploymentTransaction()?.hash || null);
      setOnChainDeploymentStatus('success');
      toast && toast.success(`Contract deployed successfully at ${deployedAddr}`)} catch(err: any) {;
      console && console.error("Deployment error:", err);
      setDeploymentError(err && err.message || "An unknown error occurred during deployment.");
      setOnChainDeploymentStatus('error');
      toast && toast.error(err && err.message || "Deployment failed.")}
  };
  // This function is passed to ContractForm.// We now decide what "generate" means in this context.// The subtask asks for a "Generate Legal Draft" button.// Let's assume ContractForm's onContractGenerated is for the primary action, which could be Solidity or data pass-through.// For clarity, we will add a dedicated "Generate Legal Draft" button in SmartContractBuilder's JSX.// The onContractGenerated from ContractForm might be re-purposed or trigger our Solidity generation && generation.const handleFormSubmitFromContractForm = (values: ContractFormValues) => {;
    // This is called by ContractForm's own submit/generate button.// Let's make this one generate the Solidity code, as per existing flow && flow.setFormValues(values); // Update formValues state first;
    handleGenerateSolidity(); // Then generate Solidity.};
  return (<Dialog open={isOpen} onOpenChange={onClose}>;
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager",
import { DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",
import { useSmartContracts } from "@/hooks/useSmartContracts",
import { toast } from "sonner",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>Smart Contract Builder</DialogTitle>;
          <DialogDescription>;
            Create, customize, and deploy your smart contract or generate a legal draft.</DialogDescription>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center mb-4">;
            <TabsList className="grid grid-cols-3"> {/* Added new tab */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <TabsTrigger value="form">1 && 1.Details</TabsTrigger>;
              <TabsTrigger value="preview_markdown" disabled={!generatedMarkdownContract}>2 && 2.Legal Draft</TabsTrigger>;
              <TabsTrigger value="preview_solidity" disabled={!enableOnChainAgreement && !generatedSolidityContract}>3 && 3.On-Chain Contract</TabsTrigger>;
            </TabsList>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* This button seems out of place if it's just for templates, maybe move into "form" tab? */}
            {/* <Button
              variant="outline"
              size="sm"
              onClick={() => setTemplateManagerOpen(true)}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex gap-1">;
              <Save className="h-4 w-4"  />;
              Templates;
            </Button>;
          </div>;
          <TabsContent value="form" className="pt-4 space-y-6">;
            <ContractFormtalent={talent}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              clientName={clientName}
              initialValues={formValues} // Pass the potentially prefilled/template-loaded values
              onFormValuesChange={setFormValues} // Keep SmartContractBuilder's state in sync
              onContractGenerated={handleFormSubmitFromContractForm} // This will now trigger Solidity generation
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
             />;
            <div className="flex justify-end pt-4">;
              <Button
                onClick={handleGenerateLegalDraft}
                disabled={isLoadingLegalDraft || !formValues}
                size="lg"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700">;
                <FileText className="h-5 w-5"  />;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {isLoadingLegalDraft ? "Generating Draft..." : "Generate Legal Draft(GPT)"}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="preview_markdown" className="pt-4">
            {isLoadingLegalDraft && <p>Loading draft...</p>}
            {legalDraftError && <p className="text-red-500">Error: {legalDraftError}</p>}
    setOnChainDeploymentStatus ('connecting');
    setDeploymentError (null);
    setTransactionHash (null);
    setDeployedContractAddress (null);
    setPopulatedSolidityCode (null);
    try {
      // Check condition
if ( {) {
  $2
}
        throw new Error ("MetaMask is not installed.Please install it to continue.")}
      await window.ethereum.request ({ method: 'eth_requestAccounts' });
      const targetChainId = selected_network === 'ethereum' ? '0x1' : '0x89'; // 1 for Ethereum Mainnet, 137 for Polygon;
      if (!== BigInt (targetChainId).to_string ()) {) {
  $2
}
        try {
          await window.ethereum.request ({
            method: 'wallet_switchEthereumChain',
            params: [{ chain_id: targetChainId }], ,
});
          // Re - initialize provider and signer after network switch;
          //;
          // signer = await new_provider.get_signer ()} catch (switch_error: any) {
          // Check condition
if ( { // Chain not added) {
  $2
}
            throw new Error (`Please add ${selected_network} to MetaMask and switch to it.`)}
          throw new Error (`Failed to switch network: ${switch_error.message}`)}
      }
      setOnChainDeploymentStatus ('fetching_code');
      // Determine contract_type (e.g. from a form field if it's selectable, or default);
      // For now, let's assume it's part of form_values or a fixed choice for this flow.const contractTypeToDeploy: ContractType = form_values.contract_type || 'simple'; // Default to 'simple';
      // Create a temporary projectDetailsIPFSHash (replace with actual IPFS hashing later);
      const projectDetailsIPFSHash = ethers.id (projectDetailsString); // Simple hash;
      const { data, error: func_error } = await supabase.functions.invoke ('generate - smart - contract', {
        body: {
          contract_type: contractTypeToDeploy,
          client_address: form_values.clientWalletAddress,
          talent_address: form_values.talentWalletAddress,
          projectDetailsIPFSHash: projectDetailsIPFSHash, ,
}, ,
});
      if (throw new Error (`Failed to fetch contract code: ${func_error.message}`)) {
  $2
}
      if (throw new Error ("No Solidity code received from generator.")) {
  $2
}
      setPopulatedSolidityCode (data.solidity_code); // This is actually bytecode if Supabase func compiles;
      // For now, assuming data.solidity_code IS the bytecode.This is a placeholder.// In reality, the Supabase function should return bytecode and ABI.// Or, if it returns Solidity, we'd compile it client - side (not recommended for production).setContractAbi (current_abi);
      setOnChainDeploymentStatus ('deploying');
      toast.info ("Deploying contract... This may take a moment.Please confirm in MetaMask.");
      // IMPORTANT: populatedSolidityCode here should be BYTECODE.// The current 'generate - smart - contract' returns Solidity source.This will not work.// This is a placeholder for the actual deployment flow.// We need a compile step or the Supabase function must return bytecode.// For now, this will fail if populatedSolidityCode is not bytecode.let contract;
      // Adjust constructor arguments based on contractTypeToDeploy;
      // Check condition
if ( {) {
  $2
}
        contract = await factory.deploy (form_values.clientWalletAddress, form_values.talentWalletAddress, projectDetailsIPFSHash)} else { // escrow;
        // EscrowAgreement constructor: constructor (address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable (_client);
        // The Ownable (_client) is handled by OpenZeppelin's constructor if `initial_owner` is the first arg to Ownable's constructor.// Or, if our EscrowAgreement's constructor directly calls Ownable (_client), then that's fine.// Based on EscrowAgreement.sol: constructor (address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable (_client);
        // The ethers.js deploy will pass these args to the Solidity constructor.contract = await factory.deploy (form_values.talentWalletAddress, form_values.clientWalletAddress, projectDetailsIPFSHash)}
      await contract.waitForDeployment ();
      setDeployedContractAddress (deployed_addr);
      setTransactionHash (contract.deployment_transaction ()?.hash || null);
      setOnChainDeploymentStatus ('success');
      toast.success (`Contract deployed successfully at ${deployed_addr}`)} catch (err: any) {
      console.error ("Deployment error:", err);
      setDeploymentError (err.message || "An unknown error occurred during deployment.");
      setOnChainDeploymentStatus ('error');
      toast.error (err.message || "Deployment failed.")}
  }
  // This function is passed to ContractForm.// We now decide what "generate" means in this context.// The subtask asks for a "Generate Legal Draft" button.// Let's assume ContractForm's onContractGenerated is for the primary action, which could be Solidity or data pass - through.// For clarity, we will add a dedicated "Generate Legal Draft" button in SmartContractBuilder's JSX.// The onContractGenerated from ContractForm might be re - purposed or trigger our Solidity generation.const handleFormSubmitFromContractForm = (values: ContractFormValues) =>: any {
    // This is called by ContractForm's own submit / generate button.// Let's make this one generate the Solidity code, as per existing flow.setFormValues (values); // Update form_values state first;
    handleGenerateSolidity (); // Then generate Solidity.}
  return (<Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="max - w-4xl max - h-[90vh] overflow - y-auto">;
        <DialogHeader>;
          <DialogTitle > Smart Contract Builder</DialogTitle>;
          <DialogDescription>;
            Create, customize, and deploy your smart contract or generate a legal draft.</DialogDescription>;
        </DialogHeader>;
        <Tabs value={active_tab} onValueChange={setActiveTab} className="mt - 4">;
          <div className="flex justify - between items - center mb - 4">;
            <TabsList className="grid grid - cols - 3"> {/* Added new tab */}
              <TabsTrigger value="form">1.Details</TabsTrigger>;
              <TabsTrigger value="preview_markdown" disabled={!generatedMarkdownContract}>2.Legal Draft</TabsTrigger>;
              <TabsTrigger value="preview_solidity" disabled={!enableOnChainAgreement && !generatedSolidityContract}>3.On - Chain Contract</TabsTrigger>;
            </TabsList>;
            {/* This button seems out of place if it's just for templates, maybe move into "form" tab? */}
            {/* <Button;
              variant="outline";
              size="sm";
              on_click={() => setTemplateManagerOpen (true)}
              className="flex gap - 1">;
              <Save className="h - 4 w - 4"  />;
              Templates;
            </Button>;
          </div>;
          <TabsContent value="form" className="pt - 4 space - y-6">;
            <ContractForm talent={talent}
              client_name={client_name}
              initial_values={form_values} // Pass the potentially prefilled / template - loaded values;
              onFormValuesChange={setFormValues} // Keep SmartContractBuilder's state in sync;
              onContractGenerated={handleFormSubmitFromContractForm} // This will now trigger Solidity generation;
              deploy_options={deploy_options}
              onDeployOptionsChange={setDeployOptions}
              />;
            <div className="flex justify - end pt - 4">;
              <Button;
                on_click={handleGenerateLegalDraft}
                disabled={isLoadingLegalDraft || !form_values}
                size="lg";
                className="flex items - center gap - 2 bg - green - 600 hover:bg - green - 700">;
                <FileText className="h - 5 w - 5"  />;
                {isLoadingLegalDraft ? "Generating Draft..." : "Generate Legal Draft (GPT)"}
              </Button>;
            </div>;
          </TabsContent>;
          <TabsContent value="preview_markdown" className="pt - 4">;
            {isLoadingLegalDraft && <p > Loading draft...</p>}
            {legalDraftError && <p className="text - red - 500">Error: {legalDraftError}</p>}
            {generatedMarkdownContract && (
              <div>;
                <div ref={legalDraftPreviewRef} className="prose dark:prose - invert max - w-none p - 6 border rounded - md bg - background shadow - sm">;
                  {/* Content to be PDF'd is wrapped by the ref div */}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <ReactMarkdown>{generatedMarkdownContract}</ReactMarkdown>;
                </div>;
                <div className="mt - 4 flex justify - end">;
                  <Button on_click={handleDownloadPdf} variant="outline" className="flex items - center gap - 2">;
                    <Download className="h - 4 w - 4"  />;
                    Download as PDF;
                  </Button>;
                </div>;
              </div>)}
            {!generatedMarkdownContract && !isLoadingLegalDraft && <p > Generate a legal draft to preview and download.</p>}
          </TabsContent>;
  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string, ) =>: any {
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    // Check condition
if ( {) {
  $2
}
      onContractGenerated (contract);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    setGeneratedContract (contract);
    setActiveTab ("preview");
  }
<<<<<<< HEAD
  return (
          </TabsContent>;
=======

  return (

          </TabsContent>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string,) => {;
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
    setGeneratedContract(contract);
    setActiveTab("preview");
  };
<<<<<<< HEAD
  return (
import { useState } from "react",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from 'lucide-react';
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
import { DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",;
import { useSmartContracts } from "@/hooks/useSmartContracts",;
import { toast } from "sonner",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface SmartContractBuilderProps {;
  isOpen:boolean,;
  onClose:() => void,;
  talent:TalentProfile,;
  clientName:string,;
  onContractGenerated?:(contractContent:string) => void;
}
;
export function SmartContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated} SmartContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form"),;
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({;
    network:'ethereum',;
    useEscrow:true,;
    deployToChain:false;
  }),;
  const [deployStatus, setDeployStatus] = useState<string>(''),;
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),;
  ;
  const { deploySmartContract } = useSmartContracts(),;
;
  const handleLoadTemplate = (templateData:ContractFormValues) => {;
    setFormValues(templateData);
  },;
;
  // Convert ContractFormValues to contract content string;
  ;
  const handleDeployContract = async () => {;
    if (!generatedContract) return,;
    ;
    try {;
      setDeployStatus('deploying'),;
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),;
      ;
      if (contractInfo) {;
        setDeploymentInfo(contractInfo),;
        setDeployStatus('deployed'),;
        toast.success("Smart contract deployed successfully!"),;
      } else {;
        setDeployStatus('error'),;
        toast.error("Failed to deploy smart contract"),;
      }
    } catch (error) {;
      logErrorToProduction('Error deploying contract:', { data:error }),;
      setDeployStatus('error'),;
      toast.error("Failed to deploy smart contract"),;
    }
  },;
;
  // Modified to match the expected interface;
  const handleFormSubmit = (contract:string) => {;
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract),;
    }
    setGeneratedContract(contract),;
    setActiveTab("preview"),;
  },;
;
  return (;
=======

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>Smart Contract Builder</DialogTitle>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD
            ;
            <div className="flex gap-2">;
              <Button ;
                variant="outline" ;
                size="sm";
              <TabsTrigger value="form">1.Details</TabsTrigger>;
              <TabsTrigger value="preview_markdown" disabled={!generatedMarkdownContract}>2.Legal Draft</TabsTrigger>;
              <TabsTrigger value="preview_solidity" disabled={!enableOnChainAgreement && !generatedSolidityContract}>3.On-Chain Contract</TabsTrigger>;
            </TabsList>;
            <div className="flex gap-2">;
              <Button;
                variant="outline";
                size="sm";
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
<<<<<<< HEAD
                <Save className="h-4 w-4" />;
=======
                <Save className="h - 4 w - 4" />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <div className="flex gap-2">;
              <Button
                variant="outline" 
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="max - w-4xl max - h-[90vh] overflow - y-auto">;
        <DialogHeader>;
          <DialogTitle > Smart Contract Builder</DialogTitle>;
        </DialogHeader>;
        <Tabs value={active_tab} onValueChange={setActiveTab} className="mt - 4">;
          <div className="flex justify - between items - center">;
            <TabsList className="grid grid - cols - 2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generated_contract}>Preview</TabsTrigger>;
            </TabsList>;
            <div className="flex gap - 2">;
              <Button;
                variant="outline";
                size="sm";
                on_click = {(, ) => setTemplateManagerOpen (true), }
                className="flex gap - 1";
              >;
                <Save className="h - 4 w - 4" />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Templates;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          <TabsContent value="form" className="pt-4">;
            <ContractForm;
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>
                <ContractPreview 
          
            {generatedContract && (
              <div>
                <ContractPreview 
                  generatedContract={generatedContract}
                  talent={talent}
                  onClose={onClose}
                  deploymentInfo={deploymentInfo}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;
          </TabsContent>;

          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <div>;

                <ContractPreview
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  generatedContract = {generatedContract,}
                  talent = {talent,}
                  onClose = {onClose,}
                  deploymentInfo = {deploymentInfo,}
<<<<<<< HEAD
<<<<<<< HEAD
                />
                {!deploymentInfo && deployOptions.deployToChain && (
                  <div className="mt-6 flex justify-center">
                    <Button 
                      onClick = {handleDeployContract,}
                      disabled = {deployStatus === 'deploying',}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>
                  </div>                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                />;

                {!deploymentInfo && deployOptions && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;

                    <Button
                      onClick = {handleDeployContract,}
                      disabled = {deployStatus === 'deploying',}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>                )}
              </div>;
            )}

          </TabsContent>;
        </Tabs>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <TemplateManager
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}
<<<<<<< HEAD
<<<<<<< HEAD
        />
      </DialogContent>
    </Dialog>
  )
}
//Modified to match the expected interface const handleFormSubmit = (contract: string) => {'
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {
  setGeneratedContract (contract);"
setActiveTab ("preview")
};"
  talent 
}clientName= {
  clientName 
}initialValues= {
  formValues 
}onFormValuesChange= {
  setFormValues 
}onContractGenerated= {
  handleFormSubmit 
}/> </TabsContent> <div> <ContractPreview generatedContract= {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
      </DialogContent>;
    </Dialog>;
  );

};
//Modified to match the expected interface const handleFormSubmit = (contract: string) => {';
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {;
  setGeneratedContract (contract);";
setActiveTab ("preview");
};";
  talent ;
}clientName= {;
  clientName ;
}initialValues= {;
  formValues ;
}onFormValuesChange= {;
  setFormValues ;
}onContractGenerated= {;
  handleFormSubmit ;
}/> </TabsContent> <div> <ContractPreviewgeneratedContract= {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  generatedContract 
}talent= {
  talent 
}onClose= {
  onClose 
}deploymentInfo= {
  deploymentInfo 
<<<<<<< HEAD
<<<<<<< HEAD
}/> > {'
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain' 
}</Button> </div>) 
}</div>) 
}</TabsContent> </Tabs> <TemplateManager isOpen= {
  templateManagerOpen 
}onClose= {
  () => setTemplateManagerOpen (false) 
}onSelectTemplate= {
  handleLoadTemplate 
}currentValues= {
  formValues 
}/> </DialogContent> </Dialog>) 
}'"            {!enableOnChainAgreement && <p className="text-muted-foreground p-4 text-center">Enable on-chain agreement to deploy this contract to a blockchain.</p>}

            {/* Fallback for old Solidity preview if needed, or remove if fully replaced by on-chain flow */}
            {/* {generatedSolidityContract && !deployOptions.deployToChain && !enableOnChainAgreement && ( ... )} */}
          </TabsContent>
        </Tabs>
        <TemplateManager
                  generatedContract={generatedContract}
                  talent={talent}
                  onClose={onClose}
                  deploymentInfo={deploymentInfo}
                />
                
                {!deploymentInfo && deployOptions.deployToChain && (
                  <div className="mt-6 flex justify-center">
                    <Button 
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>;
                )}
              </div>;
            )}
            {!generatedMarkdownContract && !isLoadingLegalDraft && <p>Generate a legal draft to preview and download.</p>}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
ursor/fix-website-loading-errors-and-merge-6662
          ;
          <TabsContent value="form" className="pt-4">;
            <ContractForm ;
              talent={talent}              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
            />;
          </TabsContent>;
          ;
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <div>;
                <ContractPreview ;
                  generatedContract={generatedContract}
                  talent={talent}
                  onClose={onClose}
                  deploymentInfo={deploymentInfo}
                />;
                ;
                {!deploymentInfo && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;
                    <Button ;
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700";
                    >;
                      {deployStatus === 'deploying' ? 'Deploying...' :'Deploy to Blockchain'}
                    </Button>;
                  </div>;                )}
              </div>;
            )}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}/> > {';
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain' ;
}</Button> </div>) ;
}</div>) ;
}</TabsContent> </Tabs> <TemplateManagerisOpen= {
  templateManagerOpen 
}onClose= {
  () => setTemplateManagerOpen (false) ;
}onSelectTemplate= {;
  handleLoadTemplate ;
}currentValues= {;
  formValues ;
}/> </DialogContent> </Dialog>) ;

}'"            {!enableOnChainAgreement && <p className="text-muted-foreground p-4 text-center">Enable on-chain agreement to deploy this contract to a blockchain.</p>}
            {/* Fallback for old Solidity preview if needed, or remove if fully replaced by on-chain flow */}

            {/* {generatedSolidityContract && !deployOptions && deployOptions.deployToChain && !enableOnChainAgreement && ( ... )} */}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </TabsContent>;
        </Tabs>;
        ;
        <TemplateManager;
=======
          </TabsContent>;
        </Tabs>;

        <TemplateManager
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>
                <ContractPreview 


          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
<<<<<<< HEAD
<<<<<<< HEAD
;



        />
      </DialogContent>
    </Dialog>
  )}
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

;




          <TabsContent value="form" className="pt - 4">;
            <ContractForm;
              talent = {talent, }
              client_name = {client_name, }
              initial_values = {form_values, }
              onFormValuesChange = {setFormValues, }
              onContractGenerated = {handleFormSubmit, }
            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt - 4">;
            {generated_contract && (
              <div>;
                <ContractPreview;
                  generated_contract = {generated_contract, }
                  talent = {talent, }
                  on_close = {on_close, }
                  deployment_info = {deployment_info, }
                />;
                {!deployment_info && deploy_options.deployToChain && (
                  <div className="mt - 6 flex justify - center">;
                    <Button;
                      on_click = {handleDeployContract, }
                      disabled = {deploy_status === 'deploying', }
                      className="bg - gradient - to - r from - blue - 600 to - indigo - 600 hover:from - blue - 700 hover:to - indigo - 700";
                    >;
                      {deploy_status === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>                )}
              </div>)}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          is_open = {templateManagerOpen, }
          on_close = {() => setTemplateManagerOpen (false), }
          onSelectTemplate = {handleLoadTemplate, }
          current_values = {form_values, }
      </DialogContent>;
    </Dialog>);
}
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
//Modified to match the expected interface const handleFormSubmit = (contract: string) =>: any {';
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works // Check condition
if ( {) {
  $2
}
  setGeneratedContract (contract);";
setActiveTab ("preview");
}";
  talent;
}client_name= {
  client_name;
}initial_values= {
  form_values;
}onFormValuesChange= {
  setFormValues;
}onContractGenerated= {
  handleFormSubmit;
}/> </TabsContent> <div> <ContractPreview generated_contract= {
  generated_contract;
}talent= {
  talent;
}on_close= {
  on_close;
}deployment_info= {
  deployment_info;
}/> > {';
  deploy_status === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain';
}</Button> </div>);
}</div>);
}</TabsContent> </Tabs> <TemplateManager is_open= {
  templateManagerOpen;
}on_close= {
  () => setTemplateManagerOpen (false);
}onSelectTemplate= {
  handleLoadTemplate;
}current_values= {
  form_values;
}/> </DialogContent> </Dialog>);
}'"            {!enableOnChainAgreement && <p className="text - muted - foreground p - 4 text - center">Enable on - chain agreement to deploy this contract to a blockchain.</p>}
            {/* Fallback for old Solidity preview if needed, or remove if fully replaced by on - chain flow */}
            {/* {generatedSolidityContract && !deploy_options.deployToChain && !enableOnChainAgreement && ( ... )} */}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          is_open={templateManagerOpen}
          on_close={() => setTemplateManagerOpen (false)}
          onSelectTemplate={handleLoadTemplate}
          current_values={form_values}
        />;
      </DialogContent>;
    </Dialog>)}
}
;
;
        />;
      </DialogContent>;
    </Dialog>;
  );
}
;
;
=======

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
