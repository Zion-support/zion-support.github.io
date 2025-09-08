import React from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {TalentProfile} from "@/types/talent";
import {SmartContractInfo} from "@/types/smart-contracts";
interface ContractPreviewProps {;
  contractContent?: string;
  generatedContract?: string, // Added to support both naming conventions;import React from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { TalentProfile } from "@/types/talent";
import { SmartContractInfo } from "@/types/smart-contracts";
import { TalentProfile } from "@/types/talent",
import { SmartContractInfo } from "@/types/smart-contracts",interface ContractPreviewProps {
  contractContent?: string,
  generatedContract?: string, // Added to support both naming conventions
  status?: 'draft' | 'ready' | 'pending',
}
export function ContractPreview({
  contractContent;}
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
  talent?: TalentProfile,
  onDeploy?: () => void,
  onSign?: () => void,
  onClose?: () => void,
  deployStatus?: string,
  deploymentInfo?: SmartContractInfo | null
}

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
=======          <Badge
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

  return (    <div className="space-y-4">;
      <div className="flex justify-between items-center mb-4">;
        <h2 className="text-2xl font-bold">Contract Preview</h2>;
        {status === 'ready' ? (;
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
