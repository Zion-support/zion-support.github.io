

import React from 'react',
import { Textarea } from "@/components/ui/textarea",

}

export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <div className="space-y-4">;
      <div>;
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="Write a message to the job poster..."
        />
      </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <Input
          id="proposalLink"
          type="url"
          value={proposalLink}

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

}
=======
          onChange={(e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="https: //..."
        />
      </div>

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
=======
    </div>;
  );
}
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
