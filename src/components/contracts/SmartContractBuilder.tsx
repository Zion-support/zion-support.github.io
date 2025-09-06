isOpen;
  onClose;
  talent;
  clientName;
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
        throw error}
      if(data && data.markdownContent) { // Assuming your Supabase func returns { markdownContent: "..." }
        setGeneratedMarkdownContract(data.markdownContent)
        if(onLegalDraftGenerated) {
          onLegalDraftGenerated(data.markdownContent)}
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>Smart Contract Builder</DialogTitle>;
          <DialogDescription>;
            Create, customize, and deploy your smart contract or generate a legal draft.</DialogDescription>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center mb-4">;
            <TabsList className="grid grid-cols-3"> {/* Added new tab */}
            {/* This button seems out of place if it's just for templates, maybe move into "form" tab? */}
            {/* <Button
              variant="outline"
              size="sm"
              onClick={() => setTemplateManagerOpen(true)}
              clientName={clientName}
              initialValues={formValues} // Pass the potentially prefilled/template-loaded values
              onFormValuesChange={setFormValues} // Keep SmartContractBuilder's state in sync
              onContractGenerated={handleFormSubmitFromContractForm} // This will now trigger Solidity generation
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}
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
    }
    setGeneratedContract (contract);
    setActiveTab ("preview");
  }
  return (
                Templates;
              </Button>;
            </div>;
          </div>;
                  generatedContract = {generatedContract,}
                  talent = {talent,}
                  onClose = {onClose,}
                  deploymentInfo = {deploymentInfo,}
                      onClick = {handleDeployContract,}
                      disabled = {deployStatus === 'deploying',}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>                )}
              </div>;
            )}
        <TemplateManager
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
