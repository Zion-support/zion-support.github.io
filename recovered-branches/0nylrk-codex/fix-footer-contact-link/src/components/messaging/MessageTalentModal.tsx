import React, { useState } from 'react';

import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Textarea} from "@/components/ui/textarea";
import {useMessaging} from "@/context/MessagingContext";
import {TalentProfile} from "@/types/talent";
import {toast} from "@/components/ui/use-toast";
import {useNavigate} from "react-router-dom";

import React, { useState } from 'react',

import {

  Dialog,
  DialogContent,
  DialogHeader,

  DialogTitle,
  DialogDescription,

  DialogFooter} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Textarea } from "@/components/ui/textarea",
import { useMessaging } from "@/context/MessagingContext",
import { TalentProfile } from "@/types/talent",

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


export function MessageTalentModal({;
  talent;
  isOpen;
  onClose;
export function MessageTalentModal({
  talent,
  isOpen,
  onClose,


  jobTitle;)
pr-12325
}: MessageTalentModalProps) {

  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),


  jobTitle

}: MessageTalentModalProps) {

  const { createConversation } = useMessaging();


  const [message, setMessage] = useState(
    jobTitle
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`


  ),
  const [isSubmitting, setIsSubmitting] = useState(false),

  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  ),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
  const handleSendMessage = async () => {

    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before sending."

  const [message, setMessage] = useState(;
    jobTitle ;'`
      ? `Hi ${talent && talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`;'`

      : `Hi ${talent && talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`;
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendMessage = async () => {;
    if (!message && message.trim()) {;


      return;
    }

      });
      return;
    }


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
      // Create context data for the conversation,
const contextData = {
        }
        "title": jobTitle || `Discussion with ${talent.full_name}`,`        "description": talent.bio || talent.professional_title || "","
        "image_url": talent.profile_picture_url || "";"
      }
;
      // Create conversation with this talent;
      await create_conversation (

      
      // Create context data for the conversation;
      const contextData = {}`
        title: jobTitle || `Discussion with ${talent.full_name}`,"
    try {;
      setIsSubmitting(true);
      // Create context data for the conversation;

      // Create conversation with this talent;
      await createConversation(;
        talent && talent.user_id;

        image_url: talent.profile_picture_url || ""
      },

        description: `Your message has been sent to ${talent.full_name}.`}),
      
      onClose(),

      setIsSubmitting(true),
      
      // Create context data for the conversation
      const contextData = {
        title: jobTitle || `Discussion with ${talent.full_name}`,
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
      // Create conversation with this talent
      await createConversation(
        talent.user_id,
        message,
        jobTitle ? 'job' : 'talent',
        talent.id,
        contextData
      );
      toast({
        title: "Message sent"
        description: `Your message has been sent to ${talent.full_name}.`})
      onClose();
      ),
      
      toast({
        title: "Message sent",
        description: `Your message has been sent to ${talent.full_name}.`}),
      
      onClose(),
      
      // Navigate to messages inbox
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error),
      toast({
        title: "Message not sent"
        description: "There was an error sending your message. Please try again."
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-3">
            <Avatar className="h-8 w-8 border border-zion-purple/20">
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />
              <AvatarFallback className="bg-zion-blue-dark text-white">

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
        talent.user_id,;
        message,;'
        jobTitle ? 'job' : 'talent',;
        talent.id,;
        contextData;
      ),;

      toast({;"
        title: "Message sent",`
        description: `Your message has been sent to ${talent && talent.full_name}.`}),;

      onClose();


      // Navigate to messages inbox;"
      navigate("/messages");
    } catch (error) {;"
      console && console.error("Failed to send message:", error);
      toast({;"
        title: "Message not sent","
        description: "There was an error sending your message. Please try again.",;

"
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);


    }

  return (


}
;
export function MessageTalentModal({;
  talent,;
  isOpen,;
  onClose,;
  jobTitle;


      // Create conversation with this talent;
      await createConversation(;
        talent.user_id,;
        message,;


      });
    } finally {;
      setIsSubmitting(false);


    }
  }

  return (

    }
  }

  return (


    <Dialog open={isOpen} onOpenChange={onClose}>;

      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;
        <DialogHeader>;"
          <DialogTitle className="text-white flex items-center gap-3">;"
            <Avatar className="h-8 w-8 border border-zion-purple/20">;


              <AvatarFallback className="bg-zion-blue-dark text-white">;

            <Textarea
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}

            <Textarea;
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}


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


          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>;

}
;
