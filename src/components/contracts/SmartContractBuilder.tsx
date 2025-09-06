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
  onClose;
  talent;
  clientName;
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

// Helper to ensure milestones are always an array;
}
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

  const [onChainDeploymentStatus, setOnChainDeploymentStatus] = useState<'idle' | 'connecting' | 'fetching_code' | 'deploying' | 'success' | 'error'>('idle');
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [deployedContractAddress, setDeployedContractAddress] = useState<string | null>(null);
  const [deploymentError, setDeploymentError] = useState<string | null>(null);
  const [populatedSolidityCode, setPopulatedSolidityCode] = useState<string | null>(null); // Bytecode from generate-smart-contract;
  const [contractAbi, setContractAbi] = useState<any | null>(null); // ABI based on contractType;

  // This hook might be for the older Solidity template system.// We are now using supabase function 'generate-smart-contract' for Solidity for deployment && deployment.const { generateSolidityContract: generateSolidityFromHook, deploySmartContract: deployViaHook } = useSmartContracts();
  // Prefill form with talent and client name(existing useEffect);
  useEffect(() => {;
  // TODO: Add dependencies if needed;

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
}))}
  }, [talent, clientName, isOpen]); // Re-run if talent, clientName, or isOpen changes and formValues not set.// Clear any previously generated contracts when a new template is loaded;
    setGeneratedMarkdownContract(null);
    setGeneratedSolidityContract(null);
    setLegalDraftError(null);
    setActiveTab("form")};
  // For generating Solidity(existing logic, adapted);
      return}
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
        throw error}

      if(data && data.markdownContent) { // Assuming your Supabase func returns { markdownContent: "..." }
        setGeneratedMarkdownContract(data.markdownContent);
        if(onLegalDraftGenerated) {;
          onLegalDraftGenerated(data.markdownContent)}
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

    setOnChainDeploymentStatus('connecting');
    setDeploymentError(null);
    setTransactionHash(null);
    setDeployedContractAddress(null);
    setPopulatedSolidityCode(null);
    try {;
      if(!window && window.ethereum) {;
        throw new Error("MetaMask is not installed && installed.Please install it to continue.")}

      await window && window.ethereum.request({ method: 'eth_requestAccounts' });
      const targetChainId = selectedNetwork === 'ethereum' ? '0x1' : '0x89'; // 1 for Ethereum Mainnet, 137 for Polygon;

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
            throw new Error(`Please add ${selectedNetwork} to MetaMask and switch to it.`)}
          throw new Error(`Failed to switch network: ${switchError && switchError.message}`)}
      }

      setOnChainDeploymentStatus('fetching_code');
      // Determine contractType(e && e.g. from a form field if it's selectable, or default);
      // For now, let's assume it's part of formValues or a fixed choice for this flow && flow.const contractTypeToDeploy: ContractType = formValues && formValues.contractType || 'simple'; // Default to 'simple';

      // Create a temporary projectDetailsIPFSHash(replace with actual IPFS hashing later);
      const projectDetailsIPFSHash = ethers && ethers.id(projectDetailsString); // Simple hash;

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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>Smart Contract Builder</DialogTitle>;
          <DialogDescription>;
            Create, customize, and deploy your smart contract or generate a legal draft.</DialogDescription>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center mb-4">;
            <TabsList className="grid grid-cols-3"> {/* Added new tab */}
              <TabsTrigger value="form">1 && 1.Details</TabsTrigger>;
              <TabsTrigger value="preview_markdown" disabled={!generatedMarkdownContract}>2 && 2.Legal Draft</TabsTrigger>;
              <TabsTrigger value="preview_solidity" disabled={!enableOnChainAgreement && !generatedSolidityContract}>3 && 3.On-Chain Contract</TabsTrigger>;
            </TabsList>;
            {/* This button seems out of place if it's just for templates, maybe move into "form" tab? */}
            {/* <Button
              variant="outline"
              size="sm"
              onClick={() => setTemplateManagerOpen(true)}
              className="flex gap-1">;
              <Save className="h-4 w-4"  />;
              Templates;
            </Button>;
          </div>;
          <TabsContent value="form" className="pt-4 space-y-6">;
            <ContractFormtalent={talent}
              clientName={clientName}
              initialValues={formValues} // Pass the potentially prefilled/template-loaded values
              onFormValuesChange={setFormValues} // Keep SmartContractBuilder's state in sync
              onContractGenerated={handleFormSubmitFromContractForm} // This will now trigger Solidity generation
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}
             />;
            <div className="flex justify-end pt-4">;
              <Button
                onClick={handleGenerateLegalDraft}
                disabled={isLoadingLegalDraft || !formValues}
                size="lg"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700">;
                <FileText className="h-5 w-5"  />;
                {isLoadingLegalDraft ? "Generating Draft..." : "Generate Legal Draft(GPT)"}
              </Button>;
            </div>;
          </TabsContent>;
          <TabsContent value="preview_markdown" className="pt-4">;
            {isLoadingLegalDraft && <p>Loading draft...</p>}
            {legalDraftError && <p className="text-red-500">Error: {legalDraftError}</p>}
            {generatedMarkdownContract && (;
              <div>;
                <div ref={legalDraftPreviewRef} className="prose dark:prose-invert max-w-none p-6 border rounded-md bg-background shadow-sm">;
                  {/* Content to be PDF'd is wrapped by the ref div */}
                  <ReactMarkdown>{generatedMarkdownContract}</ReactMarkdown>;
                </div>;
                <div className="mt-4 flex justify-end">;
                  <Button onClick={handleDownloadPdf} variant="outline" className="flex items-center gap-2">;
                    <Download className="h-4 w-4"  />;
                    Download as PDF;
                  </Button>;
                </div>;
              </div>;
            )}
            {!generatedMarkdownContract && !isLoadingLegalDraft && <p>Generate a legal draft to preview and download.</p>}
          </TabsContent>;

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

  return (
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

            <div className="flex gap-2">;
              <Button
                variant="outline" 
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
            </div>;
          </div>;

          <TabsContent value="form" className="pt-4">;
            <ContractForm
              talent = {talent,}
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleFormSubmit,}
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
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
        />;
      </DialogContent>;
    </Dialog>;
  )}
}
