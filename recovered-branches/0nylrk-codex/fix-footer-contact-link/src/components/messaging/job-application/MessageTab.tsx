<<<<<<< HEAD
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export interface MessageTabProps {
  message: string;
  setMessage: (message: string) => void;
  proposalLink: string;
  setProposalLink: (link: string) => void;
}

export function MessageTab({
  message,
  setMessage,
  proposalLink,
  setProposalLink,
}: MessageTabProps) {
  return (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='message' className='text-white'>
          Application Message
        </Label>
        <Textarea
          id='message'
          value={message}
          onChange={e => setMessage(e.target.value)}
          className='h-32 bg-zion-blue-dark/20 border-zion-purple/30 text-white'
          placeholder='Write a message to the job poster...'
        />
      </div>

      <div>
        <Label htmlFor='proposalLink' className='text-white'>
          Link to Proposal/Portfolio (Optional)
        </Label>
        <Input
          id='proposalLink'
          type='url'
          value={proposalLink}
          onChange={e => setProposalLink(e.target.value)}
          className='bg-zion-blue-dark/20 border-zion-purple/30 text-white'
          placeholder='https://...'
        />
      </div>
    </div>
  );
}
=======
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
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
