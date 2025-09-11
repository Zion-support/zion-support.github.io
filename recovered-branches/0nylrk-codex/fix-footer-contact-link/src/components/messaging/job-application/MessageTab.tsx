
<<<<<<< HEAD

export function MessageTab(): any ({;
  message,;
  setMessage,;
  proposalLink,;
  setProposalLink,;
}: MessageTabProps) {;

<<<<<<< HEAD

=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    <div className="space-y-4">
      <div>
        <Label htmlFor="message" className="text-white">Application Message</Label>
=======
    <div className="space-y-4">;
      <div>;
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="Write a message to the job poster..."
        />
      </div>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
          placeholder="Write a message to the job poster...";
        />;
      </div>;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      

      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
<<<<<<< HEAD
<<<<<<< HEAD
      
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Input
          id="proposalLink"
          type="url"
          value={proposalLink}
<<<<<<< HEAD
<<<<<<< HEAD
          onChange={(e) => setProposalLink(e && e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";
          placeholder="https: //...";
        />;
      </div>;
    </div>;
  );
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onChange={(e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="https: //..."
        />
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  );
}
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
}
      ;
      <div>;
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>;
        <Input;
          id="proposalLink";
          type="url";
          value={proposalLink}
          onChange={(e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>

    </div>;
  );
}


<<<<<<< HEAD
<<<<<<< HEAD
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
          placeholder="https: //...";
        />;
      </div>;
    </div>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
