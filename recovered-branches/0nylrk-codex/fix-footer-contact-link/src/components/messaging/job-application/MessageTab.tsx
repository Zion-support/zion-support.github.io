
import React from 'react';
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Label } from &quot;@/components/ui/label&quot;;

export interface MessageTabProps {
  message: string;
  setMessage: (message: string) => void;
  proposalLink: string;
  setProposalLink: (link: string) => void;
}

export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {
  return (
    <div className=&quot;space-y-4&quot;>
      <div>
        <Label htmlFor=&quot;message&quot; className=&quot;text-white&quot;>Application Message</Label>
        <Textarea
          id=&quot;message&quot;
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=&quot;h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white&quot;
          placeholder=&quot;Write a message to the job poster...&quot;
        />
      </div>
      
      <div>
        <Label htmlFor=&quot;proposalLink&quot; className=&quot;text-white&quot;>Link to Proposal/Portfolio (Optional)</Label>
        <Input
          id=&quot;proposalLink&quot;
          type=&quot;url&quot;
          value={proposalLink}
          onChange={(e) => setProposalLink(e.target.value)}
          className=&quot;bg-zion-blue-dark/20 border-zion-purple/30 text-white&quot;
          placeholder=&quot;https://...&quot;
        />
      </div>
    </div>
  );
}
