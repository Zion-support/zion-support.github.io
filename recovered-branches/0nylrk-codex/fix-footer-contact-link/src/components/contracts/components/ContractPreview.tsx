<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import React from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {TalentProfile} from "@/types/talent";
import {SmartContractInfo} from "@/types/smart-contracts";
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
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { SmartContractInfo } from "@/types/smart-contracts",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from './react';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { TalentProfile } from '@/types / talent';
=======
import React from "react";"
import {Badge} from "@/components/ui/badge";"
import {Button} from "@/components/ui/button";"
import {TalentProfile} from "@/types/talent";"
import {SmartContractInfo} from "@/types/smart-contracts";

import React from './react';'
import { Badge } from '@/components / ui / badge';'
import { Button } from '@/components / ui / button';'
import { TalentProfile } from '@/types / talent';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SmartContractInfo } from '@/types / smart - contracts';
interface ContractPreviewProps {}
  contract_content?: string;
  generated_contract?: string, // Added to support both naming conventions;



'
  status?: 'draft' | 'ready' | 'pending';
  talent?: TalentProfile;




  on_deploy?: () => void;
  on_sign?: () => void;
  on_close?: () => void;
  deploy_status?: string;
  deployment_info?: SmartContractInfo | null;
}
export /**;
 * ContractPreview - Function description;
 */
function ContractPreview() {}
  // Use either contract_content or generated_contract, whichever is provided;"
  const display_content = contract_content || generated_contract || "";
;



"
import React from "react","
import { Badge } from "@/components/ui/badge","
import { Button } from "@/components/ui/button",";
import { TalentProfile } from "@/types/talent";"
import { SmartContractInfo } from "@/types/smart-contracts";"
import { TalentProfile } from "@/types/talent","
import { SmartContractInfo } from "@/types/smart-contracts",


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ContractPreviewProps {
=======
import { SmartContractInfo } from "@/types/smart-contracts",interface ContractPreviewProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { SmartContractInfo } from "@/types/smart-contracts",interface ContractPreviewProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



interface ContractPreviewProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { SmartContractInfo } from "@/types/smart-contracts",


interface ContractPreviewProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions'
  status?: 'draft' | 'ready' | 'pending',
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
export function ContractPreview({
  contractContent;}
export function ContractPreview({
  contractContent;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  generatedContract,
  status = 'ready',
  onDeploy,
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

        {status === 'ready' ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======

}
export function ContractPreview({};
=======


export function ContractPreview(): any ({ ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  contractContent;



  talent?: TalentProfile;

  return ("
    <div className="space - y-4">;"
      <div className="flex justify - between items - center mb - 4">;"
        <h2 className="text - 2xl font - bold">Contract Preview</h2>;'
        {status === 'ready' ? (

export function ContractPreview(): any ({ ;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  contractContent;
  generatedContract, ;'
  status = 'ready', ;
  onDeploy, ;
  onSign;
  onClose;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function ContractPreview({ ;
  contractContent;
export function ContractPreview({ 
  contractContent,
  generatedContract, 
  status = 'ready', 
  onDeploy, 
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  onSign,
  onClose,
  deployStatus,

=======
  onSign,
  onClose,
  deployStatus,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  deploymentInfo
}: ContractPreviewProps) {
  // Use either contractContent or generatedContract, whichever is provided
  const displayContent = contractContent |generatedContract |"";

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  const displayContent = contractContent || generatedContract || "",
  
=======
  const displayContent = contractContent || generatedContract || "",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contract Preview</h2>
        {status === 'ready' ? (
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <Badge
=======
=======          <Badge
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======          <Badge
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <Badge
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            variant="secondary"
=======

          <Badge"
            variant="secondary""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="text-sm bg-green-100 text-green-800"
          >
            Ready to Sign;
          </Badge>'
        ) : status === 'pending' ? (
          <Badge"
            variant="outline""
            className="text-sm bg-yellow-100 text-yellow-800"
          >
            Pending Review;
          </Badge>
        ) : ("
          <Badge variant="outline">Draft</Badge>
<<<<<<< HEAD
<<<<<<< HEAD
=======

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  deployStatus;
  deploymentInfo;
}: ContractPreviewProps) {;

  // Use either contractContent or generatedContract, whichever is provided;
  const displayContent = contractContent || generatedContract || "";

  return (
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
    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Badge
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <Badge
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return (    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
import React from "react",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { TalentProfile } from "@/types/talent",;"
import { SmartContractInfo } from "@/types/smart-contracts",;
interface ContractPreviewProps {;
  contractContent?: string,;
  generatedContract?: string, // Added to support both naming conventions;'
  status?: 'draft' | 'ready' | 'pending',;
  talent?: TalentProfile,;
  onDeploy?: () => void,;
  onSign?: () => void,;
  onClose?: () => void,;
  deployStatus?: string,;
  deploymentInfo?: SmartContractInfo | null;
}
;
export function ContractPreview() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        )}
      {/* Contract content */}"
      <div className="border rounded-lg p-6 bg-muted/50">;
        {/* Render the contract content as markdown or formatted text */}"
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {displayContent}

      {/* Deployment info if available */}
      {deploymentInfo && (;"
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">;"
          <h3 className="font-medium mb-2">Contract Deployment Info</h3>;



      {/* Actions */}"
      <div className="flex justify-end space-x-3 mt-4">;
        {onClose && (;"
=======
          {displayContent}

        </div>;
      </div>;

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
            Pending Review;
          </Badge>;
        </div>;
      </div>;
;
      {/* Deployment info if available */}
      {deploymentInfo && (;
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">;
          <h3 className="font-medium mb-2">Contract Deployment Info</h3>;
          <p className="text-sm">Contract Address: {deploymentInfo && deploymentInfo.deployedAddress || "Pending..."}</p>;
          <p className="text-sm">Network: {deploymentInfo && deploymentInfo.networkName || "Unknown"}</p>;
          <p className="text-sm">Status: {deploymentInfo && deploymentInfo.status}</p>;
        </div>;
      )}

<p className="text-sm">Contract Address:{deploymentInfo.deployedAddress || "Pending..."}</p>;
          <p className="text-sm">Network:{deploymentInfo.networkName || "Unknown"}</p>;
          <p className="text-sm">Status:{deploymentInfo.status}</p>;
        </div>;      )}
      ;
      {/* Actions */}
      <div className="flex justify-end space-x-3 mt-4">;
        {onClose && (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Button variant="outline" onClick={onClose}>;
            Close;
          </Button>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        ) : (;
=======
) : (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
        {status === 'ready' && onSign && (
          <Button onClick={onSign}>
            Sign Contract
          </Button>
        )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


        

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {status === 'ready' && onDeploy && (
=======


'
        {status === 'ready' && onDeploy && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Button variant="outline" onClick={onDeploy}>
            Deploy on Blockchain;
=======
        {status === 'ready' && onDeploy && (
          <Button variant="outline" onClick={onDeploy}>
            Deploy on Blockchain
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </Button>
        )}
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
        ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {status === 'ready' && onSign && (;
          <Button onClick={onSign}>;
            Sign Contract;
          </Button>;
        )}
<<<<<<< HEAD
'
        {status === 'ready' && onDeploy && (;"
=======

;
        {status === 'ready' && onDeploy && (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Button variant="outline" onClick={onDeploy}>;
            Deploy on Blockchain;
          </Button>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Badge;
            variant="secondary";
=======

          <Badge;"
            variant="secondary";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="text - sm bg - green - 100 text - green - 800";
=======
          {displayContent}            variant="secondary";
            className="text - sm bg - green - 100 text - green-800";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          {displayContent}            variant="secondary";
            className="text - sm bg - green - 100 text - green-800";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
}
}
          <Badge;
            variant="secondary";
            className="text - sm bg - green - 100 text - green - 800";
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          {displayContent}            variant="secondary";
            className="text - sm bg - green - 100 text - green-800";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          >;
            Ready to Sign;'
          </Badge>) : status === 'pending' ? (
<<<<<<< HEAD
          <Badge;
            variant="outline";
<<<<<<< HEAD
<<<<<<< HEAD
            className="text - sm bg - yellow - 100 text - yellow-800";
=======
          <Badge;"
            variant="outline";"
            className="text - sm bg - yellow - 100 text - yellow - 800";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            className="text - sm bg - yellow - 100 text - yellow - 800";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            className="text - sm bg - yellow - 100 text - yellow-800";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          >;
            Pending Review;
          </Badge>) : ("
          <Badge variant="outline">Draft</Badge>)}
      </div>;
<<<<<<< HEAD
      {/* Contract content */}
      <div className="border rounded - lg p - 6 bg-muted / 50">;
        {/* Render the contract content as markdown or formatted text */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted-foreground">;
=======
      {/* Contract content */}"
      <div className="border rounded - lg p - 6 bg - muted / 50">;
        {/* Render the contract content as markdown or formatted text */}"
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted - foreground">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        <div className="prose prose - sm max - w-none prose - headings:font - semibold prose - headings:text - foreground prose - p:text - muted-foreground">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          {display_content}
        </div>;
      </div>;
      {/* Deployment info if available */}
<<<<<<< HEAD
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
=======
      {deployment_info && ("
        <div className="mt - 4 p - 4 bg - primary / 10 rounded - lg">;"
          <h3 className="font - medium mb - 2">Contract Deployment Info</h3>;"
          <p className="text - sm">Contract Address: {deployment_info.deployed_address || "Pending..."}</p>;"
          <p className="text - sm">Network: {deployment_info.network_name || "Unknown"}</p>;"
          <p className="text - sm">Status: {deployment_info.status}</p>;
        </div>)}
      {/* Actions */}"
      <div className="flex justify - end space - x-3 mt - 4">;
        {on_close && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Button variant="outline" on_click={on_close}>;
            Close;
          </Button>)}'
        {status === 'ready' && on_sign && (
          <Button on_click={on_sign}>;
            Sign Contract;
          </Button>)}'
        {status === 'ready' && on_deploy && ("
          <Button variant="outline" on_click={on_deploy}>;
            Deploy on Blockchain;
          </Button>)}
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
