
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react',
import { Textarea } from "@/components/ui/textarea",

}

export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export function MessageTab(): any ({;
  message,;
  setMessage,;
  proposalLink,;
  setProposalLink,;
}: MessageTabProps) {;
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  return (
    <div className="space-y-4">;
      <div>;"
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
        <Textarea"
          id="message"
          value={message}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          onChange={(e) => setMessage(e && e.target.value)}
=======
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
=======
import React from 'react',"
import { Textarea } from "@/components/ui/textarea",";
import { Input } from "@/components/ui/input";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Label } from "@/components/ui/label";
export interface MessageTabProps {};
  message: string;
  setMessage: (message: string) => void;
  proposalLink: string;
  setProposalLink: (link: string) => void;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react',
=======
          onChange={(e) => setMessage(e && e.target.value)}import React from 'react',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          onChange={(e) => setMessage(e && e.target.value)}import React from 'react',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          onChange={(e) => setMessage(e && e.target.value)}
import React from 'react',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Textarea } from "@/components/ui/textarea",
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export interface MessageTabProps {
  message: string;
  setMessage: (message: string) => void;
  proposalLink: string;
  setProposalLink: (link: string) => void
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
export function MessageTab() { return null; }
import { Input } from "@/components/ui/input","
import { Label } from "@/components/ui/label",
export interface MessageTabProps {}
  message: string,
  setMessage: (message: string) => void,;
  proposalLink: string,;
  setProposalLink: (link: string) => void;
}

<<<<<<< HEAD
export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
=======
export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {}
  return (";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className="space-y-4">;
      <div>;"
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
        <Textarea"
          id="message"
          value={message}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          onChange={(e) => setMessage(e.target.value)}
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="Write a message to the job poster..."
        />
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";
=======
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          placeholder="Write a message to the job poster...";
        />;
      </div>;

      <div>;
        <Label htmlFor="proposalLink" className="text-white">;
          Link to Proposal/Portfolio (Optional);
        </Label>;


      

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
      
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
        <Input
          id="proposalLink"
          type="url"
          value={proposalLink}

import React from './react';
import { Textarea  } from '@/components / ui / textarea';
import { Input  } from '@/components / ui / input';
=======


      

      <div>"
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>


      <div>"
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>

        <Input"
          id="proposalLink""
          type="url"
          value={proposalLink}


'
import React from './react';'
import { Textarea  } from '@/components / ui / textarea';'
import { Input  } from '@/components / ui / input';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Label  } from '@/components / ui / label';
export interface MessageTabProps {};
  message: string;
  set_message: (message: string) => void;
  proposal_link: string;
  setProposalLink: (link: string) => void;
}
export /**;
 * MessageTab - Function description;
 */
<<<<<<< HEAD
function MessageTab() {
  return (
    <div className="space - y-4">;
      <div>;
<<<<<<< HEAD
        <Label html_for="message" className="text-white">;
=======
function MessageTab() {}
  return ("
    <div className="space - y-4">;
      <div>;"
        <Label html_for="message" className="text - white">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <Label html_for="message" className="text - white">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          Application Message;
        </Label>;
        <Textarea;"
          id="message";
          value={message}
<<<<<<< HEAD
          on_change={(e) => set_message (e.target.value)}
<<<<<<< HEAD
          className="h - 32 bg - zion - blue - dark / 20 border - zion - purple / 30 text-white";
=======
          on_change={(e) => set_message (e.target.value)}"
          className="h - 32 bg - zion - blue - dark / 20 border - zion - purple / 30 text - white";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          className="h - 32 bg - zion - blue - dark / 20 border - zion - purple / 30 text - white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          placeholder="Write a message to the job poster...";
        />;
      </div>;
      <div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Label html_for="proposal_link" className="text-white">;
=======
        <Label html_for="proposal_link" className="text - white">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
          onChange={(e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"
=======

          onChange={(e) => setProposalLink(e.target.value)}"
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          placeholder="https: //..."
        />
      </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    </div>

    </div>;
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </div>
  );
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    </div>
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  )
import React from 'react',;
import { Textarea } from "@/components/ui/textarea",;
import { Input } from "@/components/ui/input",;
=======
  )'
import React from 'react',;"
import { Textarea } from "@/components/ui/textarea",;"
import { Input } from "@/components/ui/input",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Label } from "@/components/ui/label",;
export interface MessageTabProps {;
  message: string,;
  setMessage: (message: string) => void;
  proposalLink: string;
  setProposalLink: (link: string) => void;
}
;
export function MessageTab() { return null; }
          value={message}
          onChange={(e) => setMessage(e.target.value)}"
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white";"
          placeholder="Write a message to the job poster...";
        />;
      </div>;
      <div>;"
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>;
        <Input;"
          id="proposalLink";"
          type="url";
          value={proposalLink}
          onChange={(e) => setProposalLink(e.target.value)}"
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";"
          placeholder="https: //...";
        />;
      </div>;
=======
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    </div>;
  );
}


}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
