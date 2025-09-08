
export function MessageTab(): any ({;
  message,;
  setMessage,;

  proposalLink,;
  setProposalLink,;
}: MessageTabProps) {;




  message: string;
  setMessage: (message: string) => void;
  proposalLink: string;
  setProposalLink: (link: string) => void
}
export function MessageTab({
  message
  setMessage
  proposalLink
  setProposalLink
}: MessageTabProps) {
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",



        <Input
          id="proposalLink"
          type="url"
          value={proposalLink}


}







