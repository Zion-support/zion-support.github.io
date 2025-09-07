

export function MessageTab(): any ({;
  message,;
  setMessage,;
  proposalLink,;
  setProposalLink,;
}: MessageTabProps) {;

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
import React from 'react',
=======
          onChange={(e) => setMessage(e && e.target.value)}import React from 'react',
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";
=======
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          placeholder="Write a message to the job poster...";
        />;
      </div>;

      <div>;
        <Label htmlFor="proposalLink" className="text-white">;
          Link to Proposal/Portfolio (Optional);
        </Label>;

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      

      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
<<<<<<< HEAD
      
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
      <div>
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
        <Input
          id="proposalLink"
          type="url"
<<<<<<< HEAD
          value={proposalLink}

import React from './react';
=======
          value={proposalLink}import React from './react';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="space - y-4">;
      <div>;
        <Label html_for="message" className="text - white">;
=======
    <div className="space-y-4">;
      <div>;
        <Label html_for="message" className="text-white">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          Application Message;
        </Label>;
        <Textarea;
          id="message";
          value={message}
          on_change={(e) => set_message (e.target.value)}
<<<<<<< HEAD
          className="h - 32 bg - zion - blue - dark / 20 border - zion - purple / 30 text - white";
=======
          className="h - 32 bg - zion - blue - dark / 20 border - zion - purple / 30 text-white";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          placeholder="Write a message to the job poster...";
        />;
      </div>;
      <div>;
<<<<<<< HEAD
        <Label html_for="proposal_link" className="text - white">;
=======
        <Label html_for="proposal_link" className="text-white">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          Link to Proposal / Portfolio (Optional);
        </Label>;
        <Input;
          id="proposal_link";
          type="url";
          value={proposal_link}
          on_change={(e) => setProposalLink (e.target.value)}
<<<<<<< HEAD
          className="bg - zion - blue - dark / 20 border - zion - purple / 30 text - white";
=======
          className="bg - zion - blue - dark / 20 border - zion - purple / 30 text-white";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          placeholder="https: //...";
        />;
      </div>;
    </div>);

<<<<<<< HEAD
}
          onChange={(e) => setProposalLink(e.target.value)}
=======
}          onChange={(e) => setProposalLink(e.target.value)}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="https: //..."
        />
      </div>

    </div>

    </div>;
  );
}

<<<<<<< HEAD

    </div>
  );
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
;

    </div>;
  );
}


}
=======
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
