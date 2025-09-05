
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { Textarea } from "@/components/ui/textarea",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
=======
import React from 'react';
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Label } from &quot;@/components/ui/label&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface MessageTabProps {
  message: string,
  setMessage: (message: string) => void,
  proposalLink: string,
  setProposalLink: (link: string) => void
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
<<<<<<< HEAD
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="https: //..."
=======
          className=&quot;bg-zion-blue-dark/20 border-zion-purple/30 text-white&quot;
          placeholder=&quot;https://...&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        />
      </div>
    </div>
  )
=======
import React from 'react',;
import { Textarea } from "@/components/ui/textarea",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
export interface MessageTabProps {;
  message: string,;
  setMessage: (message: string) => void;
  proposalLink: string;
  setProposalLink: (link: string) => void;
}
;
export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {;
  return (;
    <div className="space-y-4">;
      <div>;
        <Label htmlFor="message" className="text-white">Application Message</Label>;
        <Textarea;
          id="message";
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";
          placeholder="Write a message to the job poster...";
        />;
      </div>;
      <div>;
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>;
        <Input;
          id="proposalLink";
          type="url";
          value={proposalLink}
          onChange={(e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";
          placeholder="https: //...";
        />;
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;