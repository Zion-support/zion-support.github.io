import React, { useState } from 'react';
<<<<<<< HEAD

import {

=======
<<<<<<< HEAD
import {
=======

<<<<<<< HEAD
import {

  Dialog;
  DialogContent;

  DialogHeader;
  DialogTitle;
<<<<<<< HEAD
  DialogDescription;import React, { useState } from 'react','
  }
=======

=======
<<<<<<< HEAD



import React, { useState } from 'react';
import {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Dialog;
  DialogContent;

  DialogHeader;
  DialogTitle;
<<<<<<< HEAD
<<<<<<< HEAD
  DialogDescription;import React, { useState } from 'react','
  }
=======

=======
  DialogDescription;
=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from 'react',

import {

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Dialog,
  DialogContent,
  DialogHeader,

  DialogTitle,
  DialogDescription,
<<<<<<< HEAD

=======
<<<<<<< HEAD
  DialogFooter} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useMessaging } from "@/context/MessagingContext";
import { TalentProfile } from "@/types/talent";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
export interface MessageTalentModalProps {
  talent: TalentProfile,
  isOpen: boolean,
  onClose: () => void,
  jobTitle?: string
}

  talent: TalentProfile
  isOpen: boolean
  onClose: () => void

  jobTitle?: string
}
export function MessageTalentModal({
  talent;
  isOpen;
  onClose;
export function MessageTalentModal({
  talent,
  isOpen,
  onClose,
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  DialogFooter} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Textarea } from "@/components/ui/textarea",
import { useMessaging } from "@/context/MessagingContext",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD

=======
<<<<<<< HEAD
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",

import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",
=======

<<<<<<< HEAD
=======
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export interface MessageTalentModalProps {

  talent: TalentProfile
  isOpen: boolean
  onClose: () => void

  jobTitle?: string

}

export function MessageTalentModal({;
  talent;
  isOpen;
  onClose;
export function MessageTalentModal({}
  talent,
  isOpen,
  onClose,

export interface MessageTalentModalProps {
  // TODO: Implement
  talent: TalentProfile;,
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;

  talent: TalentProfile
  isOpen: boolean
  onClose: () => void

  jobTitle?: string
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function MessageTalentModal({;
  talent;
  isOpen;
  onClose;
export function MessageTalentModal({
  talent,
  isOpen,
  onClose,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  jobTitle;)
pr-12325
}: MessageTalentModalProps) {

  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  jobTitle

}: MessageTalentModalProps) {

  const { createConversation } = useMessaging();

<<<<<<< HEAD
  const [message, setMessage] = useState(
    jobTitle
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`

  ),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleSendMessage = async () => {

    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before sending."

  jobTitle;
}: MessageTalentModalProps) {}
  const { createConversation } = useMessaging();

  const navigate = useNavigate();
=======
=======
<<<<<<< HEAD
  jobTitle
}: MessageTalentModalProps) {
  const { createConversation } = useMessaging();

  const navigate = useNavigate();
  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [message, setMessage] = useState(
    jobTitle
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ),
  const [isSubmitting, setIsSubmitting] = useState(false),

<<<<<<< HEAD
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  ),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleSendMessage = async () => {

    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before sending."
<<<<<<< HEAD

  jobTitle;
}: MessageTalentModalProps) {}
  const { createConversation } = useMessaging();

  const navigate = useNavigate();
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
  const navigate = useNavigate(),  const handleSendMessage = async () => {
    }
    if (!message.trim()) {
      }
      toast({
        }
        "title": "title","
    "description": "Please enter a message before sending.""
        "variant": "destructive"      });"
=======
  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),

  const [message, setMessage] = useState(
    jobTitle'
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`'`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`

  ),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleSendMessage = async () => {}
    if (!message.trim()) {}
      toast({"
        title: "Message required""
        description: "Please enter a message before sending.""
        variant: "destructive"

<<<<<<< HEAD
=======
=======
        variant: "destructive"
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [message, setMessage] = useState(;
    jobTitle ;'`
      ? `Hi ${talent && talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`;'`

      : `Hi ${talent && talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`;
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD

  const handleSendMessage = async () => {;
    if (!message && message.trim()) {;
=======
  const handleSendMessage = async () => {;
    if (!message && message.trim()) {;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/chore/fix-lint-and-merge
      return;
    }

      });
      return;
    }

<<<<<<< HEAD
=======
=======
      toast({;
        title: "Message required",;
        description: "Please enter a message before sending.",;
        variant: "destructive";
      });
      return;
    }
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Textarea } from '@/components / ui / textarea';
import { use_messaging } from '@/context / MessagingContext';
import { TalentProfile } from '@/types / talent';
import { toast } from '@/components / ui / use - toast';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { use_navigate } from './react-router-dom';
export interface MessageTalentModalProps {}
  talent: TalentProfile,
  is_open: boolean,
  on_close: () => void,;
  job_title?: string;
}
export /**;
 * MessageTalentModal - Function description;
 */
function MessageTalentModal() {}
  const { create_conversation } = use_messaging ();
  const navigate = use_navigate ();
  const [message, set_message] = useState (
    job_title;'`
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${job_title}`;'`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const handleSendMessage = async () => {}
    if () {) {}
  $2;
}
      toast ({"
        title: "Message required","
        description: "Please enter a message before sending.","
        variant: "destructive";
      });
      return;
    }

      setIsSubmitting(true),
<<<<<<< HEAD
      // Create context data for the conversation,
const contextData = {
        }
        "title": jobTitle || `Discussion with ${talent.full_name}`,`        "description": talent.bio || talent.professional_title || "","
        "image_url": talent.profile_picture_url || "";"
      }
;
      // Create conversation with this talent;
      await create_conversation (
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  jobTitle
}: MessageTalentModalProps) {
  const { createConversation } = useMessaging($2);
  const navigate = useNavigate($2);
  const [message, setMessage] = useState($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
    if (!message.trim()) {
      toast($2);
      return
    }
    try {
      setIsSubmitting($2);
      // Create context data for the conversation
      const contextData = $2;
=======
      
      // Create context data for the conversation;
      const contextData = {}`
        title: jobTitle || `Discussion with ${talent.full_name}`,"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
        description: talent.bio || talent.professional_title || "",

"

        image_url: talent.profile_picture_url || ""
      },

      ),
      
      toast({"
        title: "Message sent",`

        description: `Your message has been sent to ${talent.full_name}.`}),
      
      onClose(),

      navigate("/messages")
    } catch (error) {"
      console.error("Failed to send message:", error),
      toast({"
        title: "Message not sent""
        description: "There was an error sending your message. Please try again.""
        variant: "destructive"
      })
    } finally {}

      setIsSubmitting(false)
    }
  const navigate = useNavigate();
      });
      return;
    }

        talent.user_id;

=======
        talent.user_id;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {;
      setIsSubmitting(true);
      // Create context data for the conversation;
<<<<<<< HEAD

      // Create conversation with this talent;
      await createConversation(;
        talent && talent.user_id;

        image_url: talent.profile_picture_url || ""
      },

        description: `Your message has been sent to ${talent.full_name}.`}),
      
      onClose(),

=======
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
      setIsSubmitting(true);
      // Create context data for the conversation
      const contextData = {
        title: jobTitle |`Discussion with ${talent.full_name}`
        description: talent.bio |talent.professional_title |""
        image_url: talent.profile_picture_url |""
      }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setIsSubmitting(true),
      
      // Create context data for the conversation
      const contextData = {
        title: jobTitle || `Discussion with ${talent.full_name}`,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        description: talent.bio || talent.professional_title || "",

"

        image_url: talent.profile_picture_url || ""
      },

      ),
      
<<<<<<< HEAD
      toast({"
        title: "Message sent",`

        description: `Your message has been sent to ${talent.full_name}.`}),
      
      onClose(),

      navigate("/messages")
    } catch (error) {"
      console.error("Failed to send message:", error),
      toast({"
        title: "Message not sent""
        description: "There was an error sending your message. Please try again.""
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Create conversation with this talent
      await createConversation(
        talent.user_id,
        message,
        jobTitle ? 'job' : 'talent',
        talent.id,
        contextData
<<<<<<< HEAD
      );
      toast({
        title: "Message sent"
        description: `Your message has been sent to ${talent.full_name}.`})
      onClose();
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ),
      
      toast({
        title: "Message sent",
        description: `Your message has been sent to ${talent.full_name}.`}),
      
      onClose(),
      
<<<<<<< HEAD
      // Navigate to messages inbox
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error),
=======


      // Navigate to messages inbox
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Message not sent"
        description: "There was an error sending your message. Please try again."
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        variant: "destructive"
      })
    } finally {}

      setIsSubmitting(false)


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
<<<<<<< HEAD
  const navigate = useNavigate();
      });
      return;
    }

        talent.user_id;
=======
<<<<<<< HEAD
  },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-3">
            <Avatar className="h-8 w-8 border border-zion-purple/20">
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />
              <AvatarFallback className="bg-zion-blue-dark text-white">
=======

  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>"
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">
        <DialogHeader>"
          <DialogTitle className="text-white flex items-center gap-3">"
            <Avatar className="h-8 w-8 border border-zion-purple/20">
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />"
              <AvatarFallback className="bg-zion-blue-dark text-white">
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription,;"
  DialogFooter} from "@/components/ui/dialog",;"
import { Button } from "@/components/ui/button",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Textarea } from "@/components/ui/textarea",;"
import { useMessaging } from "@/context/MessagingContext",;"
import { TalentProfile } from "@/types/talent",;"
import { toast } from "@/components/ui/use-toast",;"
import { useNavigate } from "react-router-dom",;
export interface MessageTalentModalProps {;
  talent: TalentProfile,;
  isOpen: boolean,;
  onClose: () => void,;
  jobTitle?: string;
}
;
export function MessageTalentModal() { return null; }
  const { createConversation } = useMessaging(),;
  const navigate = useNavigate(),;
  const [message, setMessage] = useState(;
    jobTitle;'`
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`;'`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`;
  ),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleSendMessage = async () => {;
    if (!message.trim()) {;
      toast({;"
        title: "Message required","
        description: "Please enter a message before sending.",;"
        variant: "destructive";
      }),;
      return;
    }
;
    try {;
<<<<<<< HEAD
      setIsSubmitting(true);

      // Create context data for the conversation;

      // Create conversation with this talent;
      await createConversation(;
        talent && talent.user_id;

        image_url: talent.profile_picture_url || ""
      },

        description: `Your message has been sent to ${talent.full_name}.`}),
      
      onClose(),

    }

  },

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>"
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">
        <DialogHeader>"
          <DialogTitle className="text-white flex items-center gap-3">"
            <Avatar className="h-8 w-8 border border-zion-purple/20">
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />"
              <AvatarFallback className="bg-zion-blue-dark text-white">

import React, { useState } from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription,;"
  DialogFooter} from "@/components/ui/dialog",;"
import { Button } from "@/components/ui/button",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Textarea } from "@/components/ui/textarea",;"
import { useMessaging } from "@/context/MessagingContext",;"
import { TalentProfile } from "@/types/talent",;"
import { toast } from "@/components/ui/use-toast",;"
import { useNavigate } from "react-router-dom",;
export interface MessageTalentModalProps {;
  talent: TalentProfile,;
  isOpen: boolean,;
  onClose: () => void,;
  jobTitle?: string;
}
;
export function MessageTalentModal() { return null; }
  const { createConversation } = useMessaging(),;
  const navigate = useNavigate(),;
  const [message, setMessage] = useState(;
    jobTitle;'`
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`;'`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`;
  ),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleSendMessage = async () => {;
    if (!message.trim()) {;
      toast({;"
        title: "Message required","
        description: "Please enter a message before sending.",;"
        variant: "destructive";
      }),;
      return;
    }
;
    try {;
      setIsSubmitting(true),;
      // Create context data for the conversation;
      const contextData = {;`
        title: jobTitle || `Discussion with ${talent.full_name}`,;"
        description: talent.bio || talent.professional_title || "",;"
        image_url: talent.profile_picture_url || "";
      },;
      // Create conversation with this talent;
      await createConversation(;
=======
      setIsSubmitting(true),;
      // Create context data for the conversation;
      const contextData = {;`
        title: jobTitle || `Discussion with ${talent.full_name}`,;"
        description: talent.bio || talent.professional_title || "",;"
        image_url: talent.profile_picture_url || "";
      },;
      // Create conversation with this talent;
      await createConversation(;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        talent.user_id,;
        message,;'
        jobTitle ? 'job' : 'talent',;
        talent.id,;
        contextData;
      ),;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      toast({;
        title: "Message sent",;
        description: `Your message has been sent to ${talent && talent.full_name}.`}),;
      onClose();
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      toast({;"
        title: "Message sent",`
        description: `Your message has been sent to ${talent && talent.full_name}.`}),;

      onClose();

<<<<<<< HEAD
      // Navigate to messages inbox;"
=======
<<<<<<< HEAD
      // Navigate to messages inbox;"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Navigate to messages inbox;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      navigate("/messages");
    } catch (error) {;"
      console && console.error("Failed to send message:", error);
      toast({;"
        title: "Message not sent","
        description: "There was an error sending your message. Please try again.",;
<<<<<<< HEAD
"
=======
<<<<<<< HEAD
"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    }

  return (

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;
export function MessageTalentModal({;
  talent,;
  isOpen,;
  onClose,;
  jobTitle;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Create conversation with this talent;
      await createConversation(;
        talent.user_id,;
        message,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      });
    } finally {;
      setIsSubmitting(false);

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  }

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  }

  return (

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Dialog open={isOpen} onOpenChange={onClose}>;

      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;
        <DialogHeader>;"
          <DialogTitle className="text-white flex items-center gap-3">;"
            <Avatar className="h-8 w-8 border border-zion-purple/20">;
<<<<<<< HEAD

              <AvatarFallback className="bg-zion-blue-dark text-white">;

=======
<<<<<<< HEAD

              <AvatarFallback className="bg-zion-blue-dark text-white">;

=======
<<<<<<< HEAD
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;
=======
              <AvatarImage src={talent && talent.profile_picture_url} alt={talent && talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            )}

          </DialogDescription>;
        </DialogHeader>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="space-y-4">;
          <div>;
            <label className="block text-sm font-medium text-zion-slate mb-1">;
              Message;
            </label>;
<<<<<<< HEAD
            <Textarea;
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}
>>>>>>> merged-prs-20250907-203621
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

              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple";
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Textarea
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}

            <Textarea;
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Button"
            type="button""
            variant="outline"
            onClick={onClose}
          <Button"
            type="button"
            onClick={handleSendMessage}
            disabled={isSubmitting}

            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;'
            {isSubmitting ? 'Sending...' :'Send Message'}

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              placeholder="Write your message here...";
            />;
          </div>;
        </div>;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ),; export interface MessageTalentModalProps {};
  talent: TalentProfile;
isOpen: boolean;

}`;
//Create conversation with this talent await createConversation (talent.user id;
message;'
jobTitle ? 'job' : 'talent';
talent.id;
contextData);
//Navigate to messages inbox;
}finally {}

<<<<<<< HEAD
=======
}
;
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
