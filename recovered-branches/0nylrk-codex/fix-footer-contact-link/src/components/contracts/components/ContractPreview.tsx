<<<<<<< HEAD
  generatedContract?: string, // Added to support both naming conventions;import React from "react",
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  generatedContract?: string, // Added to support both naming conventions;import React from "react,
import React from react",
import { Badge } from "@/components/ui/badge,
import { Button } from @/components/ui/button",
import { TalentProfile } from "@/types/talent;
import { SmartContractInfo } from @/types/smart-contracts";
=======

import React from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {TalentProfile} from "@/types/talent";
import {SmartContractInfo} from "@/types/smart-contracts";
<<<<<<< HEAD
=======
interface ContractPreviewProps {;
  contractContent?: string;
  generatedContract?: string, // Added to support both naming conventions;
=======
import React from './react';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { TalentProfile } from '@/types / talent';
import { SmartContractInfo } from '@/types / smart - contracts';
interface ContractPreviewProps {
  contract_content?: string;
  generated_contract?: string, // Added to support both naming conventions;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
}
export function ContractPreview({
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
  talent?: TalentProfile;
  onDeploy?: () => void;
  onSign?: () => void;
  onClose?: () => void;
  deployStatus?: string;
  deploymentInfo?: SmartContractInfo | null
}
export function ContractPreview({
  contractContent;

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
>>>>>>> origin/chore/fix-lint-and-merge
export function ContractPreview({
>>>>>>> origin/resolved-merge-conflicts
  contractContent;}
export function ContractPreview({
  contractContent;

  generatedContract
  status = 'ready'
  onDeploy
  onSign;
  onClose;
  deployStatus;
  talent?: TalentProfile,
  onDeploy?: () => void,
  onSign?: () => void,
  onClose?: () => void,
  deployStatus?: string,
  deploymentInfo?: SmartContractInfo | null
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
export function ContractPreview({
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const displayContent = contractContent || generatedContract || ",
  

    <div className="space-y-4>;
      <div className=flex justify - between items - center mb-4">;
        <h2 className="text - 2xl font-bold>Contract Preview</h2>;
        {status === ready' ? (
  contractContent;
  generatedContract,
  status = 'ready,
  onDeploy,
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
  onSign;
  onClose;

export function ContractPreview({ ;
  contractContent;
export function ContractPreview({ 
  contractContent,
  generatedContract, 
  status = 'ready', 
<<<<<<< HEAD
=======
  onDeploy, 
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> origin/resolved-merge-conflicts
  deploymentInfo
}: ContractPreviewProps) {
  // Use either contractContent or generatedContract, whichever is provided

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
export function ContractPreview({
  contractContent;

export function ContractPreview({ 
  contractContent,
  generatedContract, 
<<<<<<< HEAD
  status = $2;
=======
  status = 'ready', 
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  onDeploy, 

  deploymentInfo
}: ContractPreviewProps) {
  // Use either contractContent or generatedContract, whichever is provided
<<<<<<< HEAD
  const displayContent = $2;
=======
  const displayContent = contractContent |generatedContract |"";

<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div className=space-y-4">
      <div className="flex justify-between items-center mb-4>
        <h2 className=text-2xl font-bold">Contract Preview</h2>
        {status === ready' ? (
=======
  const displayContent = contractContent || generatedContract || "",
  
>>>>>>> origin/resolved-merge-conflicts
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contract Preview</h2>
        {status === 'ready' ? (
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          <Badge
            variant="secondary"
            className="text-sm bg-green-100 text-green-800"
          >
            Ready to Sign
          </Badge>
        ) : status === 'pending' ? (
          <Badge
            variant="outline"
            className="text-sm bg-yellow-100 text-yellow-800"
          >
            Pending Review
          </Badge>
        ) : (
          <Badge variant="outline">Draft</Badge>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/chore/fix-lint-and-merge
  deployStatus;
  deploymentInfo;
}: ContractPreviewProps) {

  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || ";

<<<<<<< HEAD
  return (    <div className="space-y-4>;
      <div className=flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold>Contract Preview</h2>;
        {status === ready' ? (;
            variant=secondary"
            className="text-sm bg-green-100 text-green-800>;
=======
  return (
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  deployStatus,;
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  deployStatus;
  deploymentInfo;
}: ContractPreviewProps) {;

  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || "";

<<<<<<< HEAD
  return (    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;
            variant="secondary"
            className="text-sm bg-green-100 text-green-800">;
            Ready to Sign;
          </Badge>;
        ) : status === 'pending' ? (;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  deploymentInfo;
} ContractPreviewProps) {;
  ;
  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || "",;
  ;
  return (;
  return (;
<<<<<<< HEAD
=======
=======

  deployStatus;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  deploymentInfo;
} ContractPreviewProps) {;
  ;
  // Use either contractContent or generatedContract, whichever is provided;
<<<<<<< HEAD
  const displayContent = contractContent || generatedContract || "",;
  ;
  return (;
  return (;
=======
  const displayContent = contractContent || generatedContract || "";

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
      </div>;
          <Badge ;
          <Badge;
            variant="secondary";
            className="text-sm bg-green-100 text-green-800";
          >;
            Ready to Sign;
          </Badge>;
        ) : status === 'pending' ? (;
          <Badge;
            variant="outline";
            className="text-sm bg-yellow-100 text-yellow-800";
          >;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          <Badge
            variant="outline"
            className="text-sm bg-yellow-100 text-yellow-800">;
            Pending Review;
          </Badge>;
        ) : (;
          <Badge variant="outline">Draft</Badge>;
        )}
      {/* Contract content */}
      <div className="border rounded-lg p-6 bg-muted/50">;
        {/* Render the contract content as markdown or formatted text */}
<<<<<<< HEAD
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">;
=======
        <div className=prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">;
=======
          <Badge variant="outline">Draft</Badge>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
        )}
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        )}
      {/* Contract content */}"
      <div className="border rounded-lg p-6 bg-muted/50">;
        {/* Render the contract content as markdown or formatted text */}"
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">;

          <Button variant="outline" onClick={onClose}>;
            Close;
          </Button>;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        )}

          <Badge variant="outline">Draft</Badge>;
>>>>>>> origin/chore/fix-lint-and-merge
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
        {status === 'ready && onDeploy && (
          <Button variant=outline" onClick={onDeploy}>
            Deploy on Blockchain
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
        
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        {status === 'ready' && onDeploy && (
          <Button variant="outline" onClick={onDeploy}>
            Deploy on Blockchain
          </Button>
        )}
      </div>
    </div>
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        ;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
          <Badge variant="outline>Draft</Badge>)}
      </div>;
      {/* Contract content */}
      <div className=border rounded - lg p - 6 bg-muted / 50">;
        {/* Render the contract content as markdown or formatted text */}
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted-foreground>;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {status === 'ready' && onSign && (;
          <Button onClick={onSign}>;
            Sign Contract;
          </Button>;
        )}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
        ;
        {status === 'ready' && onDeploy && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Button variant="outline" onClick={onDeploy}>;
            Deploy on Blockchain;
          </Button>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          <Badge;
            variant="secondary";

            className="text - sm bg - green - 100 text - green - 800";

          >;
            Pending Review;
          </Badge>) : ("
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
=======
}
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
