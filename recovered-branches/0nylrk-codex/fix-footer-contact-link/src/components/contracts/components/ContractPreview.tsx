


interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions

  status?: 'draft | ready' | 'pending,
import { SmartContractInfo } from "@/types/smart-contracts,interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions
  status?: draft' | 'ready | pending'}









        ) : status === 'pending ? (
          <Badge
            variant="outline
            className=text-sm bg-yellow-100 text-yellow-800"


        ) : ("
          <Badge variant="outline">Draft</Badge>




            variant="outline"
            className="text-sm bg-yellow-100 text-yellow-800">;



          <Badge variant="outline">Draft</Badge>;

        )}

          <Badge variant="outline">Draft</Badge>;




        ;


}: ContractPreviewProps) {
  //Use either contractContent or generatedContract, whichever is provided const displayContent = contractContent || generatedContract || "";
>Contract Preview</h2> {
  status === 'ready' ? (<Badge variant=" secondary"className="text-sm bg-green-100 text-green-800"> Ready to Sign </Badge>) : status === 'pending' ? (<Badge variant=" outline"className="text-sm bg-yellow-100 text-yellow-800"> Pending Review </Badge>) : (<Badge variant=" outline">Draft</Badge>) 
}</div> {
  /* Contract content */ 
}<div className="border rounded-lg p-6 bg-muted/50"> {
  /* Render the contract content as markdown or formatted text */ 
}<div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground"> {
  displayContent 
}</div> </div> {
  /* Deployment info if available */ 
}{
  deploymentInfo && (<div className="mt-4 p-4 bg-primary/10 rounded-lg"> <h3 className="font-medium mb-2">Contract Deployment Info</h3> Close </Button>) 
}{
  status === 'ready' && onSign && (<Button onClick= {
  onSign 
}> Sign Contract </Button>) 
}Deploy on Blockchain </Button>) 
}</div> </div>) 
}
}



