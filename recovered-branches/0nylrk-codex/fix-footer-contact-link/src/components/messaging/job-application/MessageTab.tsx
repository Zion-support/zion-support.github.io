
<<<<<<< HEAD

export function MessageTab(): any ({;
  message,;
  setMessage,;
  proposalLink,;
  setProposalLink,;
}: MessageTabProps) {;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className="space-y-4">;
      <div>;
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
        <Textarea
          id="message"
          value={message}
<<<<<<< HEAD

          onChange={(e) => setMessage(e && e.target.value)}
=======
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export interface MessageTabProps {;
  message: string;
  setMessage: (message: string) => void;
  proposalLink: string;
  setProposalLink: (link: string) => void;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react',
import { Textarea } from "@/components/ui/textarea",
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export interface MessageTabProps {
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
export interface MessageTabProps {
  message: string,
  setMessage: (message: string) => void,
  proposalLink: string,
  setProposalLink: (link: string) => void
}

export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {
  return (
    <div className="space-y-4">;
      <div>;
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
        <Textarea
          id="message"
          value={message}
<<<<<<< HEAD
          onChange={(e) => setMessage(e.target.value)}
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="Write a message to the job poster..."
        />
      </div>

          onChange={(e) => setMessage(e && e.target.value)}

import React from 'react',;
import { Textarea } from "@/components/ui/textarea",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
;
export interface MessageTabProps {;
  message:string,;
  setMessage:(message:string) => void,;
  proposalLink:string,;
  setProposalLink:(link:string) => void;
}
;
export function MessageTab({ message, setMessage, proposalLink, setProposalLink } MessageTabProps) {;
  return (;
    <div className="space-y-4">;
      <div>;
        <Label htmlFor="message" className="text-white">Application Message</Label>;
        <Textarea;
          id="message";
          value={message}
          onChange={(e) => setMessage(e.target.value)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";
          placeholder="Write a message to the job poster...";
        />;
      </div>;
<<<<<<< HEAD

      <div>;
        <Label htmlFor="proposalLink" className="text-white">;
          Link to Proposal/Portfolio (Optional);
        </Label>;

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      

      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Input
          id="proposalLink"
          type="url"
          value={proposalLink}
<<<<<<< HEAD
<<<<<<< HEAD

=======
          onChange={(e) => setProposalLink(e && e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";
          placeholder="https: //...";
        />;
      </div>;
    </div>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from './react';
import { Textarea  } from '@/components / ui / textarea';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
export interface MessageTabProps {
  message: string;
  set_message: (message: string) => void;
  proposal_link: string;
  setProposalLink: (link: string) => void;
}
export /**
 * MessageTab - Function description
 */
function MessageTab() {
  return (
    <div className="space - y-4">;
      <div>;
        <Label html_for="message" className="text - white">;
          Application Message;
        </Label>;
        <Textarea;
          id="message";
          value={message}
          on_change={(e) => set_message (e.target.value)}
          className="h - 32 bg - zion - blue - dark / 20 border - zion - purple / 30 text - white";
          placeholder="Write a message to the job poster...";
        />;
      </div>;
      <div>;
<<<<<<< HEAD
        <Label html_for="proposal_link" className="text - white">;
          Link to Proposal / Portfolio (Optional);
        </Label>;
        <Input;
          id="proposal_link";
          type="url";
          value={proposal_link}
          on_change={(e) => setProposalLink (e.target.value)}
          className="bg - zion - blue - dark / 20 border - zion - purple / 30 text - white";
          placeholder="https: //...";
        />;
      </div>;
    </div>);
<<<<<<< HEAD

}
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          onChange={(e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="https: //..."
        />
      </div>
<<<<<<< HEAD

    </div>

    </div>;
  );
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </div>
  );
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  )
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
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

    </div>;
  );
}


}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
