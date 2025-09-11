
<<<<<<< HEAD
<<<<<<< HEAD



import React, { useState } from 'react';
import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Textarea} from "@/components/ui/textarea";
import {useMessaging} from "@/context/MessagingContext";
import {TalentProfile} from "@/types/talent";
import {toast} from "@/components/ui/use-toast";
import {useNavigate} from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react',
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  DialogFooter} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Textarea } from "@/components/ui/textarea",
import { useMessaging } from "@/context/MessagingContext",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
<<<<<<< HEAD
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",
<<<<<<< HEAD
=======

import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface MessageTalentModalProps {

  talent: TalentProfile
  isOpen: boolean
  onClose: () => void

  jobTitle?: string
}

<<<<<<< HEAD
<<<<<<< HEAD
export function MessageTalentModal({;
  talent;
  isOpen;
  onClose;
export function MessageTalentModal({
  talent,
  isOpen,
  onClose,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  jobTitle
}: MessageTalentModalProps) {
<<<<<<< HEAD

  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),

<<<<<<< HEAD
  jobTitle
}: MessageTalentModalProps) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { createConversation } = useMessaging();

  const navigate = useNavigate();
  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [message, setMessage] = useState(
    jobTitle
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ),
  const [isSubmitting, setIsSubmitting] = useState(false),
  


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  ),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before sending."
        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD
export function MessageTalentModal(): any ({;
  talent;
  isOpen;
  onClose;
  jobTitle;
}: MessageTalentModalProps) {;
  const { createConversation } = useMessaging();
  const navigate = useNavigate();
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [message, setMessage] = useState(;
    jobTitle ;
      ? `Hi ${talent && talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`;
      : `Hi ${talent && talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`;
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSendMessage = async () => {;
    if (!message && message.trim()) {;
      toast({;
        title: "Message required",;
        description: "Please enter a message before sending.",;
        variant: "destructive";
<<<<<<< HEAD
      });
      return;
    }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      return;
    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      }),
      return
    }
    try {
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsSubmitting(true);
      // Create context data for the conversation
      const contextData = {
        title: jobTitle |`Discussion with ${talent.full_name}`
        description: talent.bio |talent.professional_title |""
        image_url: talent.profile_picture_url |""
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsSubmitting(true),
      
      // Create context data for the conversation
      const contextData = {
        title: jobTitle || `Discussion with ${talent.full_name}`,
        description: talent.bio || talent.professional_title || "",
        image_url: talent.profile_picture_url || ""
      },
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      );
      toast({
        title: "Message sent"
        description: `Your message has been sent to ${talent.full_name}.`})
      onClose();
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ),
      
      toast({
        title: "Message sent",
        description: `Your message has been sent to ${talent.full_name}.`}),
      
      onClose(),
      
<<<<<<< HEAD
<<<<<<< HEAD
      // Navigate to messages inbox
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error),
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Navigate to messages inbox
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Message not sent"
        description: "There was an error sending your message. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }

  },

<<<<<<< HEAD
    }
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-3">
            <Avatar className="h-8 w-8 border border-zion-purple/20">
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />
              <AvatarFallback className="bg-zion-blue-dark text-white">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      toast({;
        title: "Message sent",;
        description: `Your message has been sent to ${talent && talent.full_name}.`}),;
      onClose();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      toast({;
        title: "Message sent",;
        description: `Your message has been sent to ${talent && talent.full_name}.`}),;

      onClose();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Navigate to messages inbox;
      navigate("/messages");
    } catch (error) {;
      console && console.error("Failed to send message:", error);
      toast({;
        title: "Message not sent",;
        description: "There was an error sending your message. Please try again.",;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD
<<<<<<< HEAD
    }

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
  };
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;
        <DialogHeader>;
          <DialogTitle className="text-white flex items-center gap-3">;
            <Avatar className="h-8 w-8 border border-zion-purple/20">;
<<<<<<< HEAD
<<<<<<< HEAD
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <AvatarImage src={talent && talent.profile_picture_url} alt={talent && talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          </DialogDescription>;
        </DialogHeader>;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            )}

          </DialogDescription>;
        </DialogHeader>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="space-y-4">;
          <div>;
            <label className="block text-sm font-medium text-zion-slate mb-1">;
              Message;
            </label>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Textarea;
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}
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
=======

            <Textarea
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              rows={5}
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

              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple";
=======

            <Textarea
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}

              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple";
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              placeholder="Write your message here...";
            />;
          </div>;
        </div>;
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
          </Button>;
        </DialogFooter>;
      </DialogContent>;
<<<<<<< HEAD
    </Dialog>;
  );
}
        ;
        <DialogFooter className="gap-2 sm:gap-0">;
=======

        <DialogFooter className="gap - 2 sm:gap - 0">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Button;
            type="button";
            variant="outline";
            onClick={onClose}
            className="border-zion-purple/30 text-white";
          >;
            Cancel;
          </Button>;
          <Button;
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
;

<<<<<<< HEAD
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
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </Dialog>);
}

=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
