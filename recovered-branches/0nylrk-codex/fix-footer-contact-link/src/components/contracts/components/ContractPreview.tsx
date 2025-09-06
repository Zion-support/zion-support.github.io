<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx

<<<<<<< HEAD

import React from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {TalentProfile} from "@/types/talent";
import {SmartContractInfo} from "@/types/smart-contracts";
<<<<<<< HEAD
<<<<<<< HEAD
interface ContractPreviewProps {;
  contractContent?: string;
  generatedContract?: string, // Added to support both naming conventions;
import React from './react';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { TalentProfile } from '@/types / talent';
import { SmartContractInfo } from '@/types / smart - contracts';
interface ContractPreviewProps {
  contract_content?: string;
  generated_contract?: string, // Added to support both naming conventions;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
  status?: 'draft' | 'ready' | 'pending';
  talent?: TalentProfile;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { TalentProfile } from "@/types/talent";
import { SmartContractInfo } from "@/types/smart-contracts";
import { TalentProfile } from "@/types/talent",
import { SmartContractInfo } from "@/types/smart-contracts",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions
  status?: 'draft' | 'ready' | 'pending',
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  generatedContract, 
  status = 'ready', 
  onDeploy, 
  onSign,
  onClose,
  deployStatus,
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  talent?: TalentProfile;
  onDeploy?: () => void;
  onSign?: () => void;
  onClose?: () => void;
  deployStatus?: string;
  deploymentInfo?: SmartContractInfo | null
}
export function ContractPreview({
  contractContent;

  generatedContract
  status = 'ready'
  onDeploy
  onSign;
  onClose;
  deployStatus;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  talent?: TalentProfile,
  onDeploy?: () => void,
  onSign?: () => void,
  onClose?: () => void,
  deployStatus?: string,
  deploymentInfo?: SmartContractInfo | null
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  deploymentInfo
}: ContractPreviewProps) {
  // Use either contractContent or generatedContract, whichever is provided

<<<<<<< HEAD
=======
  const displayContent = contractContent || generatedContract || "",
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
  return (
    <div className="space - y-4">;
      <div className="flex justify - between items - center mb - 4">;
        <h2 className="text - 2xl font - bold">Contract Preview</h2>;
        {status === 'ready' ? (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
export function ContractPreview(): any ({ ;
  contractContent;
  generatedContract, ;
  status = 'ready', ;
  onDeploy, ;
  onSign;
  onClose;
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ContractPreview({ ;
  contractContent;
export function ContractPreview({ 
  contractContent,
  generatedContract, 
  status = 'ready', 
  onDeploy, 
  onSign,
  onClose,
  deployStatus,
  deploymentInfo
}: ContractPreviewProps) {
  // Use either contractContent or generatedContract, whichever is provided
  const displayContent = contractContent |generatedContract |"";

  const displayContent = contractContent || generatedContract || "",
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contract Preview</h2>
        {status === 'ready' ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { TalentProfile } from "@/types/talent",;
import { SmartContractInfo } from "@/types/smart-contracts",;
interface ContractPreviewProps {;
  contractContent?: string,;
  generatedContract?: string, // Added to support both naming conventions;
  status?: 'draft' | 'ready' | 'pending',;
  talent?: TalentProfile,;
  onDeploy?: () => void,;
  onSign?: () => void,;
  onClose?: () => void,;
  deployStatus?: string,;
  deploymentInfo?: SmartContractInfo | null;
}
;
export function ContractPreview({;
  contractContent,;
  generatedContract,;
  status = 'ready',;
  onDeploy,;
  onSign,;
  onClose,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  deployStatus;
  deploymentInfo;
}: ContractPreviewProps) {;
  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || "";
<<<<<<< HEAD
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;
<<<<<<< HEAD
<<<<<<< HEAD
          <Badge
            variant="secondary"
            className="text-sm bg-green-100 text-green-800">;
            Ready to Sign;
          </Badge>;
        ) : status === 'pending' ? (;
          <Badge
            variant="outline"
            className="text-sm bg-yellow-100 text-yellow-800">;
            Pending Review;
          </Badge>;
        ) : (;
          <Badge variant="outline">Draft</Badge>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx

      </div>;


========
      </div>;
=======
          <Badge ;
=======
          <Badge;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            variant="secondary";
            className="text-sm bg-green-100 text-green-800";
          >;
            Ready to Sign;
          </Badge>;
<<<<<<< HEAD
        ) :status === 'pending' ? (;
=======
        ) : status === 'pending' ? (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Badge;
            variant="outline";
            className="text-sm bg-yellow-100 text-yellow-800";
          >;
            Pending Review;
          </Badge>;
<<<<<<< HEAD
        ) :(;
          <Badge variant="outline">Draft</Badge>;
        )}
      </div>;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
      {/* Contract content */}
      <div className="border rounded-lg p-6 bg-muted/50">;
        {/* Render the contract content as markdown or formatted text */}
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">;
          {displayContent}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
        </div>;
      </div>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* Deployment info if available */}
      {deploymentInfo && (;
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">;
          <h3 className="font-medium mb-2">Contract Deployment Info</h3>;
<<<<<<< HEAD
          <p className="text-sm">Contract Address: {deploymentInfo && deploymentInfo.deployedAddress || "Pending..."}</p>;
          <p className="text-sm">Network: {deploymentInfo && deploymentInfo.networkName || "Unknown"}</p>;
          <p className="text-sm">Status: {deploymentInfo && deploymentInfo.status}</p>;
        </div>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx


========
=======
          <p className="text-sm">Contract Address:{deploymentInfo.deployedAddress || "Pending..."}</p>;
          <p className="text-sm">Network:{deploymentInfo.networkName || "Unknown"}</p>;
          <p className="text-sm">Status:{deploymentInfo.status}</p>;
        </div>;      )}
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
      {/* Actions */}
      <div className="flex justify-end space-x-3 mt-4">;
        {onClose && (;
          <Button variant="outline" onClick={onClose}>;
            Close;
          </Button>;
        )}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
=======
        ) : (;
          <Badge variant="outline">Draft</Badge>;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {status === 'ready' && onSign && (
          <Button onClick={onSign}>
            Sign Contract
          </Button>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======


        

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {status === 'ready' && onDeploy && (
          <Button variant="outline" onClick={onDeploy}>
            Deploy on Blockchain
          </Button>
        )}
      </div>
    </div>
  )
<<<<<<< HEAD
}
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/ContractPreview.tsx
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {status === 'ready' && onSign && (;
          <Button onClick={onSign}>;
            Sign Contract;
          </Button>;
        )}
<<<<<<< HEAD
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {status === 'ready' && onDeploy && (;
          <Button variant="outline" onClick={onDeploy}>;
            Deploy on Blockchain;
          </Button>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
          <Badge;
            variant="secondary";
            className="text - sm bg - green - 100 text - green - 800";
          >;
            Ready to Sign;
          </Badge>) : status === 'pending' ? (
          <Badge;
            variant="outline";
            className="text - sm bg - yellow - 100 text - yellow - 800";
          >;
            Pending Review;
          </Badge>) : (
          <Badge variant="outline">Draft</Badge>)}
      </div>;
      {/* Contract content */}
      <div className="border rounded - lg p - 6 bg - muted / 50">;
        {/* Render the contract content as markdown or formatted text */}
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted - foreground">;
          {display_content}
        </div>;
      </div>;
      {/* Deployment info if available */}
      {deployment_info && (
        <div className="mt - 4 p - 4 bg - primary / 10 rounded - lg">;
          <h3 className="font - medium mb - 2">Contract Deployment Info</h3>;
          <p className="text - sm">Contract Address: {deployment_info.deployed_address || "Pending..."}</p>;
          <p className="text - sm">Network: {deployment_info.network_name || "Unknown"}</p>;
          <p className="text - sm">Status: {deployment_info.status}</p>;
        </div>)}
      {/* Actions */}
      <div className="flex justify - end space - x-3 mt - 4">;
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
