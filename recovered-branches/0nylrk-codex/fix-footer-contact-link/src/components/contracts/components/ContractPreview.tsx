import React from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {TalentProfile} from "@/types/talent";
import {SmartContractInfo} from "@/types/smart-contracts";
interface ContractPreviewProps {;
  contractContent?: string;
<<<<<<< HEAD
  generatedContract?: string, // Added to support both naming conventions;
import React from './react';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { TalentProfile } from '@/types / talent';
import { SmartContractInfo } from '@/types / smart - contracts';
interface ContractPreviewProps {
  contract_content?: string;
  generated_contract?: string, // Added to support both naming conventions;

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
=======
  generatedContract?: string, // Added to support both naming conventions;import React from "react",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { TalentProfile } from "@/types/talent";
import { SmartContractInfo } from "@/types/smart-contracts";
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
import { SmartContractInfo } from "@/types/smart-contracts",


interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions
  status?: 'draft' | 'ready' | 'pending',

}
export function ContractPreview({
=======
import { SmartContractInfo } from "@/types/smart-contracts",interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions
  status?: 'draft' | 'ready' | 'pending',
}
export function ContractPreview({
  contractContent;}
export function ContractPreview({
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  deploymentInfo
}: ContractPreviewProps) {
  // Use either contractContent or generatedContract, whichever is provided

  const displayContent = contractContent || generatedContract || "",
  

<<<<<<< HEAD
  const displayContent = contractContent || generatedContract || "",
  

  talent?: TalentProfile;
  return (
    <div className="space - y-4">;
      <div className="flex justify - between items - center mb - 4">;
        <h2 className="text - 2xl font - bold">Contract Preview</h2>;
        {status === 'ready' ? (


export function ContractPreview(): any ({ ;
=======
    <div className="space-y-4">;
      <div className="flex justify - between items - center mb-4">;
        <h2 className="text - 2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  contractContent;
  generatedContract, ;
  status = 'ready', ;
  onDeploy, ;
  onSign;
  onClose;
<<<<<<< HEAD
          <Badge
=======
=======          <Badge
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  deployStatus;
  deploymentInfo;
}: ContractPreviewProps) {;

  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || "";

<<<<<<< HEAD
  return (
    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;
          <Badge
=======
  return (    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
        )}
      {/* Contract content */}
      <div className="border rounded-lg p-6 bg-muted/50">;
        {/* Render the contract content as markdown or formatted text */}
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">;
<<<<<<< HEAD
          {displayContent}

        </div>;
      </div>;

      {/* Deployment info if available */}
      {deploymentInfo && (;
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">;
          <h3 className="font-medium mb-2">Contract Deployment Info</h3>;
          <p className="text-sm">Contract Address: {deploymentInfo && deploymentInfo.deployedAddress || "Pending..."}</p>;
          <p className="text-sm">Network: {deploymentInfo && deploymentInfo.networkName || "Unknown"}</p>;
          <p className="text-sm">Status: {deploymentInfo && deploymentInfo.status}</p>;
        </div>;
      )}


      {/* Actions */}
      <div className="flex justify-end space-x-3 mt-4">;
        {onClose && (;
          <Button variant="outline" onClick={onClose}>;
            Close;
          </Button>;
        )}


        


        {status === 'ready' && onDeploy && (
          <Button variant="outline" onClick={onDeploy}>
            Deploy on Blockchain
          </Button>
        )}
      </div>
    </div>
  )
}
        {status === 'ready' && onSign && (;
          <Button onClick={onSign}>;
            Sign Contract;
          </Button>;
        )}

        {status === 'ready' && onDeploy && (;
          <Button variant="outline" onClick={onDeploy}>;
            Deploy on Blockchain;
          </Button>;
        )}
      </div>;
    </div>;
  );
}
}
          <Badge;
            variant="secondary";
            className="text - sm bg - green - 100 text - green - 800";
=======
          {displayContent}            variant="secondary";
            className="text - sm bg - green - 100 text - green-800";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          >;
            Ready to Sign;
          </Badge>) : status === 'pending' ? (
          <Badge;
            variant="outline";
<<<<<<< HEAD
            className="text - sm bg - yellow - 100 text - yellow - 800";
=======
            className="text - sm bg - yellow - 100 text - yellow-800";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          >;
            Pending Review;
          </Badge>) : (
          <Badge variant="outline">Draft</Badge>)}
      </div>;
      {/* Contract content */}
<<<<<<< HEAD
      <div className="border rounded - lg p - 6 bg - muted / 50">;
        {/* Render the contract content as markdown or formatted text */}
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted - foreground">;
=======
      <div className="border rounded - lg p - 6 bg-muted / 50">;
        {/* Render the contract content as markdown or formatted text */}
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted-foreground">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          {display_content}
        </div>;
      </div>;
      {/* Deployment info if available */}
      {deployment_info && (
<<<<<<< HEAD
        <div className="mt - 4 p - 4 bg - primary / 10 rounded - lg">;
          <h3 className="font - medium mb - 2">Contract Deployment Info</h3>;
          <p className="text - sm">Contract Address: {deployment_info.deployed_address || "Pending..."}</p>;
          <p className="text - sm">Network: {deployment_info.network_name || "Unknown"}</p>;
          <p className="text - sm">Status: {deployment_info.status}</p>;
        </div>)}
      {/* Actions */}
      <div className="flex justify - end space - x-3 mt - 4">;
=======
        <div className="mt - 4 p - 4 bg - primary / 10 rounded-lg">;
          <h3 className="font - medium mb-2">Contract Deployment Info</h3>;
          <p className="text-sm">Contract Address: {deployment_info.deployed_address || "Pending..."}</p>;
          <p className="text-sm">Network: {deployment_info.network_name || "Unknown"}</p>;
          <p className="text-sm">Status: {deployment_info.status}</p>;
        </div>)}
      {/* Actions */}
      <div className="flex justify - end space - x-3 mt-4">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
