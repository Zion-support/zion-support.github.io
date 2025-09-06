<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx


import React from 'react',
import { Textarea } from "@/components/ui/textarea",

}

export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx
export function MessageTab(): any ({;
  message,;
  setMessage,;
  proposalLink,;
  setProposalLink,;
}: MessageTabProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx
  return (
    <div className="space-y-4">;
      <div>;
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
        <Textarea
          id="message"
          value={message}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from 'react',
import { Textarea } from "@/components/ui/textarea",
<<<<<<< HEAD
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
=======
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
export interface MessageTabProps {
  message: string,
  setMessage: (message: string) => void,
  proposalLink: string,
  setProposalLink: (link: string) => void
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}

export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="message" className="text-white">Application Message</Label>
        <Textarea
          id="message"
          value={message}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onChange={(e) => setMessage(e.target.value)}
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="Write a message to the job poster..."
        />
      </div>
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx
          onChange={(e) => setMessage(e && e.target.value)}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";
          placeholder="Write a message to the job poster...";
        />;
      </div>;
<<<<<<< HEAD
      <div>;
        <Label htmlFor="proposalLink" className="text-white">;
          Link to Proposal/Portfolio (Optional);
        </Label>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx

=======

      

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx
=======
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Input
          id="proposalLink"
          type="url"
          value={proposalLink}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx

========
          onChange={(e) => setProposalLink(e && e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";
          placeholder="https: //...";
        />;
      </div>;
    </div>;
  );
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx

}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onChange={(e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="https: //..."
        />
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
}
=======
      ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div>;
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>;
        <Input;
          id="proposalLink";
          type="url";
          value={proposalLink}
          onChange={(e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx
          placeholder="https: //...";
        />;
      </div>;
=======
    </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    </div>;
  );
}

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          placeholder="https://...";
        />;
      </div>;
    </div>;
  );}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/job-application/MessageTab.tsx
=======
          placeholder="https: //...";
        />;
      </div>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </div>;
  );
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
