
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TalentProfile } from "@/types/talent";
import { SmartContractInfo } from "@/types/smart-contracts";

interface ContractPreviewProps {
  contractContent?: string;
  generatedContract?: string; // Added to support both naming conventions
  status?: 'draft' | 'ready' | 'pending';
  talent?: TalentProfile;
  onDeploy?: () => void;
  onSign?: () => void;
  onClose?: () => void;
  deployStatus?: string;
  deploymentInfo?: SmartContractInfo | null;
}

export function ContractPreview({ 
