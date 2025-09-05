
<<<<<<< HEAD
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
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;
        <DialogHeader>;
          <DialogTitle className="text-white flex items-center gap-3">;
            <Avatar className="h-8 w-8 border border-zion-purple/20">;
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
        <div className="space-y-4">;
          <div>;
            <label className="block text-sm font-medium text-zion-slate mb-1">;
              Message;
            </label>;
            <Textarea;
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple";
              placeholder="Write your message here...";
            />;
          </div>;
        </div>;
        ;
        <DialogFooter className="gap-2 sm:gap-0">;
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
  ),;
=======
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
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",export interface MessageTalentModalProps {
  talent: TalentProfile,
  isOpen: boolean,
  onClose: () => void,
  jobTitle?: string
}

export function MessageTalentModal({
  talent,
  isOpen,
  onClose,
  jobTitle
}: MessageTalentModalProps) {
  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),
  const [message, setMessage] = useState(
    jobTitle 
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`
  ),
  const [isSubmitting, setIsSubmitting] = useState(false),
import React, {_useState} from 'react';
import {_Dialog, _DialogContent, _DialogHeader, _DialogTitle, _DialogDescription, _DialogFooter} from "@/components/ui/dialog";

export interface MessageTalentModalProps {_talent: TalentProfile;
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;}

export function MessageTalentModal(_{_talent, _isOpen, _onClose, _jobTitle}: MessageTalentModalProps) {_const { createConversation} = useMessaging();
  const _navigate = useNavigate();
  const [message, setMessage] = useState(
    jobTitle 
      ? `Hi ${_talent.full_name}, I'd like to invite you to discuss a project: ${_jobTitle}`
      : `Hi ${_talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const _handleSendMessage = async () => {_if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message before sending.",
        variant: "destructive"
      }),
      return      return;
    }
    
    try {
      setIsSubmitting(true),      
      // Create context data for the conversation
      const _contextData = {
        title: jobTitle || `Discussion with ${talent.full_name}`,
        description: talent.bio || talent.professional_title || "",
        image_url: talent.profile_picture_url || ""
      },      
      // Create conversation with this talent
      await createConversation(
        talent.user_id,
        message,
        jobTitle ? 'job' : 'talent',
        talent.id,
        contextData
      ),
      
      toast({
        title: "Message sent",
        description: `Your message has been sent to ${talent.full_name}.`}),      toast({_title: "Message sent", _description: `Your message has been sent to ${talent.full_name}.`});
      
      onClose(),
      
      // Navigate to messages inbox
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error),
      toast({
        title: "Message not sent",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      })    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;sm:max-w-md bg-zion-blue border-zion-purple/20&quot;>
        <DialogHeader>
          <DialogTitle className=&quot;text-white flex items-center gap-3&quot;>
            <Avatar className=&quot;h-8 w-8 border border-zion-purple/20&quot;>
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />
              <AvatarFallback className=&quot;bg-zion-blue-dark text-white&quot;>
                {talent.full_name.charAt(0).toUpperCase()}
      navigate("/messages");
    } catch (error) {_toast({
        title: "Message not sent", _description: "There was an error sending your message. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  return (
    <Dialog open={_isOpen} onOpenChange={_onClose}>
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-3">
            <Avatar className="h-8 w-8 border border-zion-purple/20">
              <AvatarImage src={_talent.profile_picture_url} alt={_talent.full_name} />
              <AvatarFallback className="bg-zion-blue-dark text-white">
                {_talent.full_name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            Message {_talent.full_name}
          </DialogTitle>
          <DialogDescription className=&quot;text-zion-slate&quot;>
            Send a direct message to start a conversation.
            {talent.professional_title && (
              <span className=&quot;block mt-1 text-zion-cyan&quot;>{talent.professional_title}</span>            )}
          </DialogDescription>
        </DialogHeader>
        
        <div className=&quot;space-y-4&quot;>
          <div>
            <label className=&quot;block text-sm font-medium text-zion-slate mb-1&quot;>
              Message
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className=&quot;w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple&quot;
              placeholder=&quot;Write your message here...&quot;            />
          </div>
        </div>
        
        <DialogFooter className=&quot;gap-2 sm:gap-0&quot;>
          <Button
            type=&quot;button&quot;
            variant=&quot;outline&quot;
            onClick={onClose}
            className=&quot;border-zion-purple/30 text-white&quot;          >
            Cancel
          </Button>
          <Button
            type=&quot;button&quot; 
            onClick={handleSendMessage}
            disabled={isSubmitting}
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;          >
            {_isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
