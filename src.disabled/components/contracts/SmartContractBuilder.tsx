import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TalentProfile } from "@/types/talent";

interface SmartContractBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated: (contract: string) => void;
}

export function SmartContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated,
}: SmartContractBuilderProps) {
  const [contractCode, setContractCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSmartContract = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate AI generation of smart contract
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const smartContract = `
// Smart Contract for ${talent.name} - ${clientName}
pragma solidity ^0.8.0;

contract TalentContract {
    address public client;
    address public talent;
    uint256 public projectValue;
    uint256 public milestoneCount;
    uint256 public currentMilestone;
    bool public isCompleted;
    
    struct Milestone {
        string description;
        uint256 value;
        bool isCompleted;
    }
    
    mapping(uint256 => Milestone) public milestones;
    
    event MilestoneCompleted(uint256 milestoneId, uint256 value);
    event ProjectCompleted(uint256 totalValue);
    
    constructor(
        address _client,
        address _talent,
        uint256 _projectValue,
        uint256 _milestoneCount
    ) {
        client = _client;
        talent = _talent;
        projectValue = _projectValue;
        milestoneCount = _milestoneCount;
        currentMilestone = 0;
        isCompleted = false;
    }
    
    function addMilestone(uint256 _milestoneId, string memory _description, uint256 _value) public {
        require(msg.sender == talent, "Only talent can add milestones");
        require(_milestoneId < milestoneCount, "Invalid milestone ID");
        
        milestones[_milestoneId] = Milestone({
            description: _description,
            value: _value,
            isCompleted: false
        });
    }
    
    function completeMilestone(uint256 _milestoneId) public {
        require(msg.sender == client, "Only client can complete milestones");
        require(_milestoneId < milestoneCount, "Invalid milestone ID");
        require(!milestones[_milestoneId].isCompleted, "Milestone already completed");
        
        milestones[_milestoneId].isCompleted = true;
        currentMilestone = _milestoneId + 1;
        
        emit MilestoneCompleted(_milestoneId, milestones[_milestoneId].value);
        
        if (currentMilestone == milestoneCount) {
            isCompleted = true;
            emit ProjectCompleted(projectValue);
        }
    }
    
    function withdrawPayment() public {
        require(msg.sender == talent, "Only talent can withdraw");
        require(isCompleted, "Project not completed");
        
        payable(talent).transfer(address(this).balance);
    }
}
      `;
      
      setContractCode(smartContract);
      onContractGenerated(smartContract);
    } catch (error) {
      console.error("Smart contract generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Smart Contract Builder</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">AI-Generated Smart Contract</h3>
            <p className="text-blue-700 text-sm">
              This will generate a Solidity smart contract for your project with {talent.name}.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contractCode">Generated Contract Code</Label>
            <Textarea
              id="contractCode"
              value={contractCode}
              onChange={(e) => setContractCode(e.target.value)}
              placeholder="Smart contract code will appear here..."
              rows={20}
              className="font-mono text-sm"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button  onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleGenerateSmartContract}
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate Smart Contract"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}