
import React from 'react';

export interface MessageTabProps {_message: string;
  setMessage: (_message: string) => void;
  proposalLink: string;
  setProposalLink: (_link: string) => void;}

export function MessageTab(_{_message, _setMessage, _proposalLink, _setProposalLink}: MessageTabProps) {_return (_<div className="space-y-4">
      <div>
        <Label htmlFor="message" className="text-white">Application Message</Label>
        <Textarea
          id="message"
          value={message}
          onChange={_(e) => setMessage(e.target.value)}
          className="h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="Write a message to the job poster..."
        />
      </div>
      
      <div>
        <Label htmlFor="proposalLink" className="text-white">Link to Proposal/Portfolio (Optional)</Label>
        <Input
          id="proposalLink"
          type="url"
          value={_proposalLink}
          onChange={_(_e) => setProposalLink(e.target.value)}
          className="bg-zion-blue-dark/20 border-zion-purple/30 text-white"
          placeholder="https://..."
        />
      </div>
    </div>
  );
}
