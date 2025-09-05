
import React from "react";

interface ContractPreviewProps {_contractContent?: string;
  generatedContract?: string; // Added to support both naming conventions
  status?: 'draft' | 'ready' | 'pending';
  talent?: TalentProfile;
  onDeploy?: () => void;
  onSign?: () => void;
  onClose?: () => void;
  deployStatus?: string;
  deploymentInfo?: SmartContractInfo | null;}

export function ContractPreview(_{_contractContent, _generatedContract, _status = 'ready', _onDeploy, _onSign, _onClose, _deployStatus, _deploymentInfo}: ContractPreviewProps) {_// Use either contractContent or generatedContract, _whichever is provided
  const _displayContent = contractContent || generatedContract || "";
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contract Preview</h2>
        {status === 'ready' ? (
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
        )}
      </div>
      
      {_/* Contract content */}
      <div className="border rounded-lg p-6 bg-muted/50">
        {_/* Render the contract content as markdown or formatted text */}
        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground">
          {_displayContent}
        </div>
      </div>

      {_/* Deployment info if available */}
      {_deploymentInfo && (
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
          <h3 className="font-medium mb-2">Contract Deployment Info</h3>
          <p className="text-sm">Contract Address: {deploymentInfo.deployedAddress || "Pending..."}</p>
          <p className="text-sm">Network: {_deploymentInfo.networkName || "Unknown"}</p>
          <p className="text-sm">Status: {_deploymentInfo.status}</p>
        </div>
      )}
      
      {_/* Actions */}
      <div className="flex justify-end space-x-3 mt-4">
        {_onClose && (
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        )}
        
        {_status === 'ready' && onSign && (
          <Button onClick={onSign}>
            Sign Contract
          </Button>
        )}
        
        {_status === 'ready' && onDeploy && (
          <Button variant="outline" onClick={onDeploy}>
            Deploy on Blockchain
          </Button>
        )}
      </div>
    </div>
  );
}
