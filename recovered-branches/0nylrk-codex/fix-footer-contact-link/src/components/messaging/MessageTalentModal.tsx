<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

<<<<<<< HEAD

=======
=======



========
<<<<<<< HEAD
import React, { useState } from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
=======

<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Textarea} from "@/components/ui/textarea";
import {useMessaging} from "@/context/MessagingContext";
import {TalentProfile} from "@/types/talent";
import {toast} from "@/components/ui/use-toast";
import {useNavigate} from "react-router-dom";
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from 'react',
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  DialogFooter} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Textarea } from "@/components/ui/textarea",
import { useMessaging } from "@/context/MessagingContext",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD

<<<<<<< HEAD
=======
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
=======
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface MessageTalentModalProps {

  talent: TalentProfile
  isOpen: boolean
  onClose: () => void

  jobTitle?: string
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function MessageTalentModal({;
  talent;
  isOpen;
  onClose;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function MessageTalentModal({
  talent,
  isOpen,
  onClose,
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  jobTitle
}: MessageTalentModalProps) {

<<<<<<< HEAD
=======
  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  jobTitle
}: MessageTalentModalProps) {
<<<<<<< HEAD
  const { createConversation } = useMessaging();

  const navigate = useNavigate();
=======
  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [message, setMessage] = useState(
    jobTitle
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`
<<<<<<< HEAD

<<<<<<< HEAD
=======

  ),
  const [isSubmitting, setIsSubmitting] = useState(false),
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
  ),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before sending."
        variant: "destructive"
<<<<<<< HEAD
=======
========
export function MessageTalentModal(): any ({;
  talent;
  isOpen;
  onClose;
  jobTitle;
}: MessageTalentModalProps) {;
  const { createConversation } = useMessaging();
  const navigate = useNavigate();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
  const [message, setMessage] = useState(;
    jobTitle ;
      ? `Hi ${talent && talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`;
      : `Hi ${talent && talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`;
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSendMessage = async () => {;
    if (!message && message.trim()) {;
      toast({;
        title: "Message required",;
        description: "Please enter a message before sending.",;
        variant: "destructive";
      });
      return;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Textarea } from '@/components / ui / textarea';
import { use_messaging } from '@/context / MessagingContext';
import { TalentProfile } from '@/types / talent';
import { toast } from '@/components / ui / use - toast';
import { use_navigate } from './react-router-dom';
export interface MessageTalentModalProps {
  talent: TalentProfile,
  is_open: boolean,
  on_close: () => void,
  job_title?: string;
}
export /**
 * MessageTalentModal - Function description
 */
function MessageTalentModal() {
  const { create_conversation } = use_messaging ();
  const navigate = use_navigate ();
  const [message, set_message] = useState (
    job_title;
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${job_title}`;
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const handleSendMessage = async () => {
    if () {) {
  $2
}
      toast ({
        title: "Message required",
        description: "Please enter a message before sending.",
        variant: "destructive";
      });
      return;
    }
    try {
<<<<<<< HEAD
=======
      setIsSubmitting (true);
;
      // Create context data for the conversation;
      const context_data = {
        title: job_title || `Discussion with ${talent.full_name}`,
        description: talent.bio || talent.professional_title || "",
        image_url: talent.profile_picture_url || "";
      }
;
      // Create conversation with this talent;
      await create_conversation (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
        talent.user_id;
    try {;
      setIsSubmitting(true);
      // Create context data for the conversation;
      const contextData = {;
        title: jobTitle || `Discussion with ${talent && talent.full_name}`,;
        description: talent && talent.bio || talent && talent.professional_title || "",;
        image_url: talent && talent.profile_picture_url || "";
      };
      // Create conversation with this talent;
      await createConversation(;
        talent && talent.user_id;
        message;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

    try {

=======
      }),
      return
    }
    try {
<<<<<<< HEAD
      setIsSubmitting(true);
      // Create context data for the conversation
      const contextData = {
        title: jobTitle |`Discussion with ${talent.full_name}`
        description: talent.bio |talent.professional_title |""
        image_url: talent.profile_picture_url |""
      }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setIsSubmitting(true),
      
      // Create context data for the conversation
      const contextData = {
        title: jobTitle || `Discussion with ${talent.full_name}`,
        description: talent.bio || talent.professional_title || "",
        image_url: talent.profile_picture_url || ""
      },
      
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Create conversation with this talent
      await createConversation(
        talent.user_id,
        message,
        jobTitle ? 'job' : 'talent',
        talent.id,
        contextData
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
      );
      toast({
        title: "Message sent"
        description: `Your message has been sent to ${talent.full_name}.`})
      onClose();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      ),
      
      toast({
        title: "Message sent",
        description: `Your message has been sent to ${talent.full_name}.`}),
      
      onClose(),
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Navigate to messages inbox
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error);
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Navigate to messages inbox
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Message not sent"
        description: "There was an error sending your message. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======


=======
    }

  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    }
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-3">
            <Avatar className="h-8 w-8 border border-zion-purple/20">
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />
              <AvatarFallback className="bg-zion-blue-dark text-white">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
import React, { useState } from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription,;
  DialogFooter} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Textarea } from "@/components/ui/textarea",;
import { useMessaging } from "@/context/MessagingContext",;
import { TalentProfile } from "@/types/talent",;
import { toast } from "@/components/ui/use-toast",;
import { useNavigate } from "react-router-dom",;
export interface MessageTalentModalProps {;
  talent: TalentProfile,;
  isOpen: boolean,;
  onClose: () => void,;
  jobTitle?: string;
}
;
export function MessageTalentModal({;
  talent,;
  isOpen,;
  onClose,;
  jobTitle;
}: MessageTalentModalProps) {;
  const { createConversation } = useMessaging(),;
  const navigate = useNavigate(),;
  const [message, setMessage] = useState(;
    jobTitle;
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`;
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`;
  ),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleSendMessage = async () => {;
    if (!message.trim()) {;
      toast({;
        title: "Message required",;
        description: "Please enter a message before sending.",;
        variant: "destructive";
      }),;
      return;
    }
;
    try {;
      setIsSubmitting(true),;
      // Create context data for the conversation;
      const contextData = {;
        title: jobTitle || `Discussion with ${talent.full_name}`,;
        description: talent.bio || talent.professional_title || "",;
        image_url: talent.profile_picture_url || "";
      },;
      // Create conversation with this talent;
      await createConversation(;
        talent.user_id,;
        message,;
        jobTitle ? 'job' : 'talent',;
        talent.id,;
        contextData;
      ),;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
      toast({;
        title: "Message sent",;
        description: `Your message has been sent to ${talent && talent.full_name}.`}),;
      onClose();
      // Navigate to messages inbox;
      navigate("/messages");
    } catch (error) {;
      console && console.error("Failed to send message:", error);
      toast({;
        title: "Message not sent",;
        description: "There was an error sending your message. Please try again.",;
=======
      toast({;
        title: "Message sent",;
        description: `Your message has been sent to ${talent.full_name}.`}),;
      onClose(),;
      // Navigate to messages inbox;
      navigate("/messages");
    } catch (error) {;
      console.error("Failed to send message:", error),;
      toast({;
        title: "Message not sent",;
        description: "There was an error sending your message. Please try again.";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
    }
<<<<<<< HEAD
  }
  return (
=======

import React, { useState } from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription,;
  DialogFooter} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Textarea } from "@/components/ui/textarea",;
import { useMessaging } from "@/context/MessagingContext",;
import { TalentProfile } from "@/types/talent",;
import { toast } from "@/components/ui/use-toast",;
import { useNavigate } from "react-router-dom",;
;
export interface MessageTalentModalProps {;
  talent:TalentProfile,;
  isOpen:boolean,;
  onClose:() => void,;
  jobTitle?:string;
}
;
export function MessageTalentModal({;
  talent,;
  isOpen,;
  onClose,;
  jobTitle;
} MessageTalentModalProps) {;
  const { createConversation } = useMessaging(),;
  const navigate = useNavigate(),;
  const [message, setMessage] = useState(;
    jobTitle ;
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project:${jobTitle}`;
      :`Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`;
  ),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  ;
  const handleSendMessage = async () => {;
    if (!message.trim()) {;
      toast({;
        title:"Message required",;
        description:"Please enter a message before sending.",;
        variant:"destructive";
      }),;
      return,;
    }
    ;
    try {;
      setIsSubmitting(true),;
      ;
      // Create context data for the conversation;
      const contextData = {;
        title:jobTitle || `Discussion with ${talent.full_name}`,;
        description:talent.bio || talent.professional_title || "",;
        image_url:talent.profile_picture_url || "";
      },;
      ;
      // Create conversation with this talent;
      await createConversation(;
        talent.user_id,;
        message,;
        jobTitle ? 'job' :'talent',;
        talent.id,;
        contextData;
      ),;
      ;
      toast({;
        title:"Message sent",;
        description:`Your message has been sent to ${talent.full_name}.`}),;
      ;
      onClose(),;
      ;
      // Navigate to messages inbox;
      navigate("/messages"),;
    } catch (error) {;
      console.error("Failed to send message:", error),;
      toast({;
        title:"Message not sent",;
        description:"There was an error sending your message. Please try again.",;
        variant:"destructive";
      }),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;
        <DialogHeader>;
          <DialogTitle className="text-white flex items-center gap-3">;
            <Avatar className="h-8 w-8 border border-zion-purple/20">;
<<<<<<< HEAD
<<<<<<< HEAD
              <AvatarImage src={talent && talent.profile_picture_url} alt={talent && talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {talent.full_name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            Message {talent.full_name}
          </DialogTitle>
          <DialogDescription className="text-zion-slate">
            Send a direct message to start a conversation.
            {talent.professional_title && (
              <span className="block mt-1 text-zion-cyan">{talent.professional_title}</span>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
          </DialogDescription>;
        </DialogHeader>;
=======
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;
                {talent.full_name.charAt(0).toUpperCase()}
              </AvatarFallback>;
            </Avatar>;
            Message {talent.full_name}
          </DialogTitle>;
          <DialogDescription className="text-zion-slate">;
            Send a direct message to start a conversation.;
            {talent.professional_title && (;
              <span className="block mt-1 text-zion-cyan">{talent.professional_title}</span>;
            )}
          </DialogDescription>;
        </DialogHeader>;
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="space-y-4">;
          <div>;
            <label className="block text-sm font-medium text-zion-slate mb-1">;
              Message;
            </label>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
            <Textarea
=======
            <Textarea;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
<<<<<<< HEAD
=======
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zion-slate mb-1">
              Message
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple"
              placeholder="Write your message here..."
            />
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="border-zion-purple/30 text-white"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSendMessage}
            disabled={isSubmitting}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple";
<<<<<<< HEAD
        job_title ? 'job' : 'talent';
        talent.id;
        context_data);
;
      toast ({
        title: "Message sent",
        description: `Your message has been sent to ${talent.full_name}.`}),
      on_close ();
;
      // Navigate to messages inbox;
      navigate ("/messages");
    } catch (error) {
      console.error ("Failed to send message:", error);
      toast ({
        title: "Message not sent",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive";
      });
    } finally {
      setIsSubmitting (false);
    }
  }
;
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="sm:max - w-md bg - zion - blue border - zion - purple / 20">;
        <DialogHeader>;
          <DialogTitle className="text - white flex items - center gap - 3">;
            <Avatar className="h - 8 w - 8 border border - zion - purple / 20">;
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />;
              <AvatarFallback className="bg - zion - blue - dark text - white">;
                {talent.full_name.char_at (0).toUpperCase ()}
              </AvatarFallback>;
            </Avatar>;
            Message {talent.full_name}
          </DialogTitle>;
          <DialogDescription className="text - zion - slate">;
            Send a direct message to start a conversation.;
            {talent.professional_title && (
              <span className="block mt - 1 text - zion - cyan">{talent.professional_title}</span>)}
          </DialogDescription>;
        </DialogHeader>;
        <div className="space - y-4">;
          <div>;
            <label className="block text - sm font - medium text - zion - slate mb - 1">;
              Message;
            </label>;
            <Textarea;
              value={message}
              on_change={(e) => set_message (e.target.value)}
              rows={5}
              className="w - full bg - zion - blue - dark / 30 border - zion - purple / 20 text - white focus:ring - zion - purple";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
              placeholder="Write your message here...";
            />;
          </div>;
        </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

========
<<<<<<< HEAD
=======
<<<<<<< HEAD
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>;
  );
}
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
        <DialogFooter className="gap - 2 sm:gap - 0">;
          <Button;
            type="button";
            variant="outline";
            on_click={on_close}
            className="border - zion - purple / 30 text - white";
=======
        ;
        <DialogFooter className="gap-2 sm:gap-0">;
          <Button;
            type="button";
            variant="outline";
            onClick={onClose}
            className="border-zion-purple/30 text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >;
            Cancel;
          </Button>;
          <Button;
<<<<<<< HEAD
            type="button";
            on_click={handleSendMessage}
            disabled={is_submitting}
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
          >;
            {is_submitting ? 'Sending...' : 'Send Message'}
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>);
=======
            type="button" ;
            onClick={handleSendMessage}
            disabled={isSubmitting}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            {isSubmitting ? 'Sending...' :'Send Message'}
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>;
  ),; export interface MessageTalentModalProps {
  talent: TalentProfile;
isOpen: boolean;
onClose: () => void;
jobTitle?: string 
}export function MessageTalentModal ({
  talent;
isOpen;
onClose;
jobTitle 
}: MessageTalentModalProps) {
  const {
  createConversation 
}= useMessaging ();
const navigate = useNavigate ();
const [message, setMessage] = useState (jobTitle ? `Hi $ {
  talent.full name 
}, I'd like to invite you to discuss a project: $ {
  jobTitle 
}` : `Hi $ {
  talent.full name 
}, I'm interested in your profile and would like to discuss a potential opportunity.`);
const [isSubmitting, setIsSubmitting] = useState (false);
if (!message.trim () ) {
  toast ({
  return;
}//Create context data for the conversation const contextData = {
  title: jobTitle || `Discussion with $ {
  talent.full name 
}`;
//Create conversation with this talent await createConversation (talent.user id;
message;
jobTitle ? 'job' : 'talent';
talent.id;
contextData);
//Navigate to messages inbox 
}finally {
  setIsSubmitting (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
return (<Dialog open= {
  isOpen 
}onOpenChange= {
  onClose 
}> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20" > <DialogHeader> <DialogTitle className="text-white flex items-center gap-3" > <Avatar className="h-8 w-8 border border-zion-purple/20" > <AvatarImage src= {
  talent.profile picture url 
}alt= {
  talent.full name 
}/> <AvatarFallback className="bg-zion-blue-dark text-white" > {
  talent.full name.charAt (0) .toUpperCase () 
}talent.full name 
}</DialogTitle> <DialogDescription className="text-zion-slate" > Send a direct message to start a conversation.) 
}</DialogDescription> </DialogHeader> <div className="space-y-4" > <div> <label className="block text-sm font-medium text-zion-slate mb-1" > Message </label> <Textarea /> </div> </div> <DialogFooter className="gap-2 sm:gap-0" > <Button > Cancel </Button> <Button > {
  isSubmitting ? 'Sending...' : 'Send Message' 
}</Button> </DialogFooter> </DialogContent> </Dialog>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageTalentModal.tsx
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
