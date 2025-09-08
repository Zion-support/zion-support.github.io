<<<<<<< HEAD

export function MessageTab(): any ({;
  message,;
  setMessage,;

  proposalLink,;
  setProposalLink,;
}: MessageTabProps) {;



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======

import { Label } from "@/components/ui/label";
export interface MessageTabProps {};
  message: string;
  setMessage: (message: string) => void;
  proposalLink: string;
  setProposalLink: (link: string) => void;

import React from 'react',

import { Textarea } from "@/components/ui/textarea",
          onChange={(e) => setMessage(e && e.target.value)}import React from 'react',;
import { Textarea } from "@/components/ui/textarea",;

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export interface MessageTabProps {
  message: string;
  setMessage: (message: string) => void;
  proposalLink: string;

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

    <div className="space-y-4">;
      <div>;"
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
        <Textarea"
import React from 'react',
import { Textarea } from "@/components/ui/textarea",
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
>>>>>>> origin/cursor/delete-old-data-records-6bba
export interface MessageTabProps {
  message: string,
  setMessage: (message: string) => void,
  proposalLink: string,
  setProposalLink: (link: string) => void
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function MessageTab({ message, setMessage, proposalLink, setProposalLink }: MessageTabProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="message" className="text-white">Application Message</Label>
        <Textarea
          id="message"
          value={message}

          onChange={(e) => setMessage(e.target.value)}
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="Write a message to the job poster..."
        />
      </div>
<<<<<<< HEAD


        <Input
          id="proposalLink"
          type="url"
          value={proposalLink}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
import { Textarea } from "@/components/ui/textarea",
          onChange={(e) => setMessage(e && e.target.value)}import React from 'react',;
import { Textarea } from "@/components/ui/textarea",;

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export interface MessageTabProps {
  message: string;
  setMessage: (message: string) => void;
  proposalLink: string;

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

    <div className="space-y-4">;
      <div>;"
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
        <Textarea"
          id="message"
          value={message}

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


          placeholder="Write a message to the job poster...";
        />;
      </div>;


        <Input
          id="proposalLink"
          type="url"
          value={proposalLink}
          onChange={(e) => setProposalLink(e && e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";
          placeholder="https: //...";
        />;
      </div>;
    </div>;
  );
onChange={(e) => setProposalLink(e && e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white";
          placeholder="https: //...";
        />;
      </div>;
    </div>;
  );

      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
        <Input
          id="proposalLink"
          type="url"
          value={proposalLink}import React from './react';
  setProposalLink,;)
}: MessageTabProps) {;

  return (
  setProposalLink,;)

}: MessageTabProps) {;
  return (

    <div className="space-y-4">;"
</div>
      <div>;
</div>"
        <Label htmlFor="message" className="text-white">;"

        ;
</Label>
        </Label>;
        <Textarea;"
          id="message""
          value={message}
)
          onChange={(e) => setMessage(e && e.target.value)}
"

          onChange={(e) => setMessage(e.target.value)}

        <Label htmlFor="message" className="text-white">Application Message;"
          id="message";"

      </div>;
        <Label htmlFor="proposalLink" className="text-white">;"

      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)"
</Textarea>"
    <div className="space-y-4">;"
</div>
      <div>;
</div>"
        <Label htmlFor="message" className="text-white">;"
</Label>
        </Label>;
        <Textarea;"
          id="message""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
</Textarea>
      </div>"
    <div className="space-y-4">;"
</div>
      <div>;
</div>"
        <Label htmlFor="message" className="text-white">Application Message</Label>;"
        <Textarea;"
          id="message";"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
</Textarea>
      </div>;
      <div>;
</div>"
        <Label htmlFor="proposalLink" className="text-white">;"
</Label>
        </Label>;
      <div>
</div>"
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>"
      <div>
</div>"
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>"
      <div>
</div>"
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>"
        <Input;"
          id="proposalLink"""
          type="url""
          value={proposalLink}
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from './react';
pr-12325
import { Textarea  } from '@/components / ui / textarea';
import { Input  } from '@/components / ui / input';

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

          Application Message;
        </Label>;
        <Textarea;"
          id="message";
          value={message}

          placeholder="Write a message to the job poster...";
        />;
      </div>;
      <div>;

          Link to Proposal / Portfolio (Optional);
        </Label>;
        <Input;
          id="proposal_link";
          type="url";
          value={proposal_link}
          on_change={(e) => setProposalLink (e.target.value)}
          className="bg - zion - blue - dark / 20 border - zion - purple / 30 text-white";
          placeholder="https: //...";
        />;
      </div>;
    </div>);
<<<<<<< HEAD


}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          onChange={(e) => setProposalLink(e.target.value)}
}          onChange={(e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"

          placeholder="https: //..."
        />
"
import React from './react';''
import { Textarea  } from '@/components / ui / textarea';''
import { Input  } from '@/components / ui / input';''
import { Label  } from '@/components / ui / label';'
export interface MessageTabProps {
  // TODO: Implement
}
  message: string;,
  set_message: (message: string) => void;
</Input>'
    <div className="space - y-4">;"
</div>
      <div>;
</div>"
        <Label html_for="message" className="text - white">;"
</Label>
        </Label>;
        <Textarea;"
          id="message";"
          value={message}
          on_change={(e) => set_message (e.target.value)}
</Textarea>
      </div>;
      <div>;
</div>"
        <Label html_for="proposal_link" className="text - white">;"
</Label>
        </Label>;
        <Input;"
          id="proposal_link";""
          type="url";"
          value={proposal_link}
          on_change={(e) => setProposalLink (e.target.value)}
</Input>
      </div>;
    </div>);

      </div>
<<<<<<< HEAD



=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>
    </div>;
  );
});
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

    </div>;
  );
  // TODO: Implement
}
  message: string;,
  set_message: (message: string) => void;

    <div className="space - y-4">;"
        <Label html_for="message" className="text - white">;"


<<<<<<< HEAD



=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
