 export interface MessageTabProps {
  message: string;
setMessage: (message: string) => void;
proposalLink: string;
setProposalLink: (link: string) => void 
}export function MessageTab ({
  message, setMessage, proposalLink, setProposalLink 
}: MessageTabProps) {
  return (<div className="space-y-4" > message"className=" text-white">Application Message</Label> <Textarea id=" message"value= {
  message 
}/> </div> <div> <Label htmlFor=" proposalLink"className=" text-white">Link to Proposal/Portfolio (Optional) </Label> <Input className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"placeholder="https: //..." 
}