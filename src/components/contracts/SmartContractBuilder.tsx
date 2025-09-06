
interface SmartContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string,) => void

}
export function SmartContractBuilder({
  isOpen;
  onClose;
  talent;
  clientName;

interface SmartContractBuilderProps {
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
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
