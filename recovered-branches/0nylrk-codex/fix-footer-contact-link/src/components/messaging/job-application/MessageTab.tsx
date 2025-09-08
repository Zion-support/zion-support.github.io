
  return (
    <div className="space-y-4">;
      <div>;"
        <Label htmlFor="message" className="text-white">;
          Application Message;
        </Label>;
        <Textarea"
          id="message"
          value={message}
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
export interface MessageTabProps {
  message: string,
  setMessage: (message: string) => void,
  proposalLink: string,
  setProposalLink: (link: string) => void
}

