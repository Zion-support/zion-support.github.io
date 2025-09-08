<<<<<<< HEAD



interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions

  status?: 'draft | ready' | 'pending,
import { SmartContractInfo } from "@/types/smart-contracts,interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions
  status?: draft' | 'ready | pending'}


=======

  generatedContract?: string, // Added to support both naming conventions;import React from "react,
import React from react",
import { Badge } from "@/components/ui/badge,
import { Button } from @/components/ui/button",
import { TalentProfile } from "@/types/talent;
import { SmartContractInfo } from @/types/smart-contracts";
  status?: 'draft' | 'ready' | 'pending';
  talent?: TalentProfile;
  on_deploy?: () => void;
  on_sign?: () => void;
  on_close?: () => void;
  deploy_status?: string;
  deployment_info?: SmartContractInfo | null;
}
export /**
 * ContractPreview - Function description
 */
function ContractPreview() {
  // Use either contract_content or generated_contract, whichever is provided;
  const display_content = contract_content || generated_contract || "";
;


import React from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { TalentProfile } from "@/types/talent";
import { SmartContractInfo } from "@/types/smart-contracts";
interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions
  status?: 'draft' | 'ready' | 'pending',
import { SmartContractInfo } from "@/types/smart-contracts",interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions
  status?: 'draft' | 'ready' | 'pending',
}
export function ContractPreview({
}
export function ContractPreview({
  contractContent;}
export function ContractPreview({
  contractContent;

  generatedContract
  status = 'ready'
  onDeploy
  onSign;
  onClose;
  deployStatus;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  talent?: TalentProfile,
  onDeploy?: () => void,
  onSign?: () => void,
  onClose?: () => void,
  deployStatus?: string,
  deploymentInfo?: SmartContractInfo | null
}
<<<<<<< HEAD



=======
  const displayContent = contractContent || generatedContract || ",
  

    <div className="space-y-4>;
      <div className=flex justify - between items - center mb-4">;
        <h2 className="text - 2xl font-bold>Contract Preview</h2>;
        {status === ready' ? (
  contractContent;
  generatedContract,
  status = 'ready,
  onDeploy,
        {status === 'ready' ? (

  contractContent;

  talent?: TalentProfile;

  return ("
    <div className="space - y-4">;"
      <div className="flex justify - between items - center mb - 4">;"
        <h2 className="text - 2xl font - bold">Contract Preview</h2>;'
        {status === 'ready' ? (

export function ContractPreview(): any ({ ;

  contractContent;
  generatedContract, ;'
  status = 'ready', ;
  onDeploy, ;
  onSign;
  onClose;

export function ContractPreview({ ;
  contractContent;
export function ContractPreview({ 
  contractContent,
  generatedContract, 
  status = 'ready', 
>>>>>>> origin/cursor/delete-old-data-records-6bba

  deploymentInfo
}: ContractPreviewProps) {
  // Use either contractContent or generatedContract, whichever is provided

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const displayContent = contractContent || generatedContract || "",
  

    <div className="space-y-4">;
      <div className="flex justify - between items - center mb-4">;
        <h2 className="text - 2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (
  contractContent;
  generatedContract, ;
  status = 'ready', ;
  onDeploy, ;
  onSign;
  onClose;
<<<<<<< HEAD


=======
export function ContractPreview({
  contractContent;

export function ContractPreview({ 
  contractContent,
  generatedContract, 

  const displayContent = contractContent || generatedContract || "",
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contract Preview</h2>
        {status === 'ready' ? (
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Badge
            variant="secondary"
            className="text-sm bg-green-100 text-green-800"
          >
            Ready to Sign
          </Badge>
<<<<<<< HEAD
        ) : status === 'pending ? (
          <Badge
            variant="outline
            className=text-sm bg-yellow-100 text-yellow-800"

=======
        ) : status === 'pending' ? (
          <Badge
            variant="outline"
            className="text-sm bg-yellow-100 text-yellow-800"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          >
            Pending Review
          </Badge>
<<<<<<< HEAD

        ) : ("
          <Badge variant="outline">Draft</Badge>
=======
        ) : (
          <Badge variant="outline">Draft</Badge>
  deployStatus;
  deploymentInfo;
}: ContractPreviewProps) {

  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || ";

  return (    <div className="space-y-4>;
      <div className=flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold>Contract Preview</h2>;
        {status === ready' ? (;
            variant=secondary"
            className="text-sm bg-green-100 text-green-800>;
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { TalentProfile } from "@/types/talent",;
import { SmartContractInfo } from "@/types/smart-contracts",;
;
interface ContractPreviewProps {;
  contractContent?:string,;
  generatedContract?:string, // Added to support both naming conventions;
  status?:'draft' | 'ready' | 'pending',;
  talent?:TalentProfile,;
  onDeploy?:() => void,;
  onSign?:() => void,;
  onClose?:() => void,;
  deployStatus?:string,;
  deploymentInfo?:SmartContractInfo | null,;
}
;
export function ContractPreview({ ;
  contractContent,;
  generatedContract, ;
  status = 'ready', ;
  onDeploy, ;
  onSign,;
  onClose,;
  deployStatus,;
  deployStatus;
  deploymentInfo;
}: ContractPreviewProps) {;

  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || "";
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;
            variant="secondary"
            className="text-sm bg-green-100 text-green-800">;
            Ready to Sign;
          </Badge>;
        ) : status === 'pending' ? (;
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { TalentProfile } from "@/types/talent",;
import { SmartContractInfo } from "@/types/smart-contracts",;
;
interface ContractPreviewProps {;
  contractContent?:string,;
  generatedContract?:string, // Added to support both naming conventions;
  status?:'draft' | 'ready' | 'pending',;
  talent?:TalentProfile,;
  onDeploy?:() => void,;
  onSign?:() => void,;
  onClose?:() => void,;
  deployStatus?:string,;
  deploymentInfo?:SmartContractInfo | null,;
}
;
export function ContractPreview({ ;
  contractContent,;
  generatedContract, ;
  status = 'ready', ;
  onDeploy, ;
  onSign,;
  onClose,;
<<<<<<< HEAD


=======
  deployStatus,;
  deploymentInfo;
} ContractPreviewProps) {;
  ;
  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || "",;
  ;
  return (;
  return (;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;


          <Badge

            variant="secondary"
            className="text-sm bg-green-100 text-green-800">;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Ready to Sign;
          </Badge>;
        ) : status === 'pending ? (;
          <Badge
<<<<<<< HEAD

            variant="outline"
            className="text-sm bg-yellow-100 text-yellow-800">;


=======
            variant=outline"
            className="text-sm bg-yellow-100 text-yellow-800>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Pending Review;
          </Badge>;
        ) : (;
<<<<<<< HEAD

          <Badge variant="outline">Draft</Badge>;

        )}

          <Badge variant="outline">Draft</Badge>;

=======
          <Badge variant="outline">Draft</Badge>;
        )}
      {/* Contract content */}
      <div className="border rounded-lg p-6 bg-muted/50">;
        {/* Render the contract content as markdown or formatted text */}
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">;
        )}
      </div>
      {/* Contract content */}
      <div className="border rounded-lg p-6 bg-muted/50">
        {/* Render the contract content as markdown or formatted text */}
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">
          {displayContent}
        </div>
      </div>
      {/* Deployment info if available */}
      {deploymentInfo && (
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
          <h3 className="font-medium mb-2">Contract Deployment Info</h3>
          <p className="text-sm">Contract Address: {deploymentInfo.deployedAddress |"Pending..."}</p>
          <p className="text-sm">Network: {deploymentInfo.networkName |"Unknown"}</p>
          <p className="text-sm">Status: {deploymentInfo.status}</p>
        </div>
      )}
      {/* Actions */}
      <div className="flex justify-end space-x-3 mt-4">
        {onClose && (
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        )}
        {status === 'ready' && onSign && (
          <Button onClick={onSign}>
            Sign Contract
          </Button>
        )}

        )}
      {/* Contract content */}"
      <div className="border rounded-lg p-6 bg-muted/50">;
        {/* Render the contract content as markdown or formatted text */}"
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">;

          <Button variant="outline" onClick={onClose}>;
            Close;
          </Button>;
        )}

          <Badge variant="outline">Draft</Badge>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        )}
      </div>
      {/* Contract content */}
      <div className="border rounded-lg p-6 bg-muted/50>
        {/* Render the contract content as markdown or formatted text */}
        <div className=prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">
          {displayContent}
        </div>
      </div>
      {/* Deployment info if available */}
      {deploymentInfo && (
        <div className="mt-4 p-4 bg-primary/10 rounded-lg>
          <h3 className=font-medium mb-2">Contract Deployment Info</h3>
          <p className="text-sm>Contract Address: {deploymentInfo.deployedAddress |Pending..."}</p>
          <p className="text-sm>Network: {deploymentInfo.networkName |Unknown"}</p>
          <p className="text-sm>Status: {deploymentInfo.status}</p>
        </div>
      )}
      {/* Actions */}
      <div className=flex justify-end space-x-3 mt-4">
        {onClose && (
          <Button variant="outline onClick={onClose}>
            Close
          </Button>
        )}
        {status === ready' && onSign && (
          <Button onClick={onSign}>
            Sign Contract
          </Button>
        )}
<<<<<<< HEAD



=======
        {status === 'ready && onDeploy && (
          <Button variant=outline" onClick={onDeploy}>
            Deploy on Blockchain
        {status === 'ready' && onDeploy && (
          <Button variant="outline" onClick={onDeploy}>
            Deploy on Blockchain
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </Button>
        )}
      </div>
    </div>
  )

<<<<<<< HEAD
        ;

=======
}
          {displayContent}            variant="secondary";
            className="text - sm bg - green - 100 text - green-800";
          >;
            Ready to Sign;
          </Badge>) : status === 'pending' ? (
          <Badge;
            variant="outline";
            className="text - sm bg - yellow - 100 text - yellow-800";
          >;
            Pending Review;
          </Badge>) : (
        {status === 'ready' && onSign && (;
          <Button onClick={onSign}>;
            Sign Contract;
          </Button>;
        )}


          <Button variant="outline" onClick={onDeploy}>;
            Deploy on Blockchain;
          </Button>;
        )}
      </div>;
    </div>;


          <Badge;
            variant="secondary";

            className="text - sm bg - green - 100 text - green - 800";

          >;
            Pending Review;
          </Badge>) : ("
          <Badge variant="outline">Draft</Badge>)}
      </div>;
      {/* Contract content */}
      <div className="border rounded - lg p - 6 bg-muted / 50">;
        {/* Render the contract content as markdown or formatted text */}
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted-foreground">;
          {display_content}
        </div>;
      </div>;
      {/* Deployment info if available */}
      {deployment_info && (
        <div className="mt - 4 p - 4 bg - primary / 10 rounded-lg">;
          <h3 className="font - medium mb-2">Contract Deployment Info</h3>;
          <p className="text-sm">Contract Address: {deployment_info.deployed_address || "Pending..."}</p>;
          <p className="text-sm">Network: {deployment_info.network_name || "Unknown"}</p>;
          <p className="text-sm">Status: {deployment_info.status}</p>;
        </div>)}
      {/* Actions */}
      <div className="flex justify - end space - x-3 mt-4">;
        {on_close && (
          <Button variant="outline" on_click={on_close}>;
            Close;
          </Button>)}
        {status === 'ready' && on_sign && (
          <Button on_click={on_sign}>;
            Sign Contract;
          </Button>)}
        {status === 'ready' && on_deploy && (
          <Button variant="outline" on_click={on_deploy}>;
            Deploy on Blockchain;
          </Button>)}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ),;}
 interface ContractPreviewProps {
  contractContent?: string;
generatedContract?: string, //Added to support both naming conventions status?: 'draft' | 'ready' | 'pending';
talent?: TalentProfile;
onDeploy?: () => void;
onSign?: () => void;
onClose?: () => void;
deployStatus?: string;
deploymentInfo?: SmartContractInfo | null 
}export function ContractPreview ({
  contractContent;
generatedContract;
status = 'ready';
onDeploy;
onSign;
onClose;
deployStatus;
deploymentInfo 
<<<<<<< HEAD

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



=======

  deploymentInfo?: SmartContractInfo | null;

  deploymentInfo;
}: ContractPreviewProps) {
  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || "",""
  const displayContent = contractContent || generatedContract || "","
  return ("
    <div className="space - y-4">;"
</div>"
      <div className="flex justify - between items - center mb - 4">;"
        <h2 className="text - 2xl font - bold">Contract Preview</h2>;"
          <Badge;"
            variant="secondary"""
            className="text-sm bg-green-100 text-green-800""
          >

            variant="outline"""
            className="text-sm bg-yellow-100 text-yellow-800""

          <Badge variant="outline">Draft""
    <div className="space-y-4">;"
      <div className="flex justify-between items-center mb-4">;"
        <h2 className="text-2xl font-bold">Contract Preview</h2>;"
            className="text-sm bg-green-100 text-green-800">;"

            className="text-sm bg-yellow-100 text-yellow-800">;"

          ;"
          <Badge variant="outline">Draft;""
      <div className="border rounded-lg p-6 bg-muted/50">;"
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">;"
</div>
        </div>;
      </div>;"
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">;"
          <h3 className="font-medium mb-2">Contract Deployment Info</h3>;""
          <p className="text-sm">Contract Address: {deploymentInfo && deploymentInfo.deployedAddress || "Pending..."}</p>;""
          <p className="text-sm">Network: {deploymentInfo && deploymentInfo.networkName || "Unknown"}</p>;""
          <p className="text-sm">Status: {deploymentInfo && deploymentInfo.status}</p>;"
      <div className="flex justify-end space-x-3 mt-4">;"
          <Button variant="outline" onClick={onClose}>;"

          <Button variant="outline" onClick={onDeploy}>"

          <Button onClick={onSign}>;

          <Button variant="outline" onClick={onDeploy}>;"

            variant="secondary";""
            className="text - sm bg - green - 100 text - green - 800";"
          >;
)"
          ) : status === 'pending' ? (
          <Badge;
            variant="outline";""
            className="text - sm bg - yellow - 100 text - yellow - 800";"
)
          ) : ()"
          <Badge variant="outline">Draft)}"
      <div className="border rounded - lg p - 6 bg - muted / 50">;"
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted - foreground">;"
        <div className="mt - 4 p - 4 bg - primary / 10 rounded - lg">;"
          <h3 className="font - medium mb - 2">Contract Deployment Info</h3>;""
          <p className="text - sm">Contract Address: {deployment_info.deployed_address || "Pending..."}</p>;""
          <p className="text - sm">Network: {deployment_info.network_name || "Unknown"}</p>;""
          <p className="text - sm">Status: {deployment_info.status}</p>;"
        </div>)}"
      <div className="flex justify - end space - x-3 mt - 4">;"
          <Button variant="outline" on_click={on_close}>;"

          )}
          <Button on_click={on_sign}>;

          )}"
          <Button variant="outline" on_click={on_deploy}>;"

    </div>);
>Contract Preview</h2> {"
  status === 'ready' ? (<Badge variant=" secondary"className="text-sm bg-green-100 text-green-800"> Ready to Sign ) : status === 'pending' ? (<Badge variant=" outline"className="text-sm bg-yellow-100 text-yellow-800"> Pending Review ) : (<Badge variant=" outline">Draft)"
}</div> {"
}<div className="border rounded-lg p-6 bg-muted/50"> {"
}<div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground"> {"
}</div> </div> {"
  deploymentInfo && (<div className="mt-4 p-4 bg-primary/10 rounded-lg"> <h3 className="font-medium mb-2">Contract Deployment Info</h3> Close )"
  status === 'ready' && onSign && (<Button onClick= {
  onSign;)
}> Sign Contract ) 
}Deploy on Blockchain ) 
}</div> </div>) 
}

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
