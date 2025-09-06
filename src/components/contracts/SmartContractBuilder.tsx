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


            />;
          </TabsContent>;

          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <div>;

                <ContractPreview
                  generatedContract = {generatedContract,}
                  talent = {talent,}
                  onClose = {onClose,}
                  deploymentInfo = {deploymentInfo,}

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


        <TemplateManager
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}

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
  generatedContract 
}talent= {
  talent 
}onClose= {
  onClose 
}deploymentInfo= {
  deploymentInfo 
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
          </TabsContent>;
        </Tabs>;

        <TemplateManager


          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>
                <ContractPreview 


;



;
