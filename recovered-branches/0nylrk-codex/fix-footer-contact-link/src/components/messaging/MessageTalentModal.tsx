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




  jobTitle;)
pr-12325
}: MessageTalentModalProps) {

  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),




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


      navigate("/messages");
    } catch (error) {;"
      console && console.error("Failed to send message:", error);
      toast({;"
        title: "Message not sent","
        description: "There was an error sending your message. Please try again.",;


        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);


    }
  }

  return (



    <Dialog open={isOpen} onOpenChange={onClose}>;

      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;
        <DialogHeader>;"
          <DialogTitle className="text-white flex items-center gap-3">;"
            <Avatar className="h-8 w-8 border border-zion-purple/20">;


                {talent.full_name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            Message {talent.full_name}
          </DialogTitle>
          <DialogDescription className="text-zion-slate">
            Send a direct message to start a conversation.
            {talent.professional_title && (
              <span className="block mt-1 text-zion-cyan">{talent.professional_title}</span>


        <div className="space-y-4">;
          <div>;
            <label className="block text-sm font-medium text-zion-slate mb-1">;
              Message;
            </label>;


              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple";

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




