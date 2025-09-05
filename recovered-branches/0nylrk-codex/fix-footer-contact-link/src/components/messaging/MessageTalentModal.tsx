
<<<<<<< HEAD
import React, { useState } from 'react',
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
<<<<<<< HEAD
  DialogFooter} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Textarea } from "@/components/ui/textarea",
import { useMessaging } from "@/context/MessagingContext",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",
=======
  DialogFooter} from &quot;@/components/ui/dialog&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { useMessaging } from &quot;@/context/MessagingContext&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface MessageTalentModalProps {
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleSendMessage = async () => {_if (!message.trim()) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Message required",
        description: "Please enter a message before sending.",
        variant: "destructive"
      }),
      return
=======
        title: &quot;Message required&quot;,
        description: &quot;Please enter a message before sending.&quot;,
        variant: &quot;destructive&quot;
      });
=======
        title: "Message required", _description: "Please enter a message before sending.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
<<<<<<< HEAD
    try {
      setIsSubmitting(true),
=======
    try {_setIsSubmitting(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Create context data for the conversation
      const _contextData = {
        title: jobTitle || `Discussion with ${talent.full_name}`,
<<<<<<< HEAD
        description: talent.bio || talent.professional_title || "",
        image_url: talent.profile_picture_url || ""
      },
=======
        description: talent.bio || talent.professional_title || "&quot;,
        image_url: talent.profile_picture_url || "&quot;
      };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Create conversation with this talent
      await createConversation(
        talent.user_id,
        message,
        jobTitle ? 'job' : 'talent',
        talent.id,
        contextData
      ),
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Message sent",
        description: `Your message has been sent to ${talent.full_name}.`}),
=======
        title: &quot;Message sent&quot;,
        description: `Your message has been sent to ${talent.full_name}.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      toast({_title: "Message sent", _description: `Your message has been sent to ${talent.full_name}.`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      onClose(),
      
      // Navigate to messages inbox
<<<<<<< HEAD
<<<<<<< HEAD
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error),
      toast({
        title: "Message not sent",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      })
=======
      navigate(&quot;/messages&quot;);
    } catch (error) {
      console.error(&quot;Failed to send message:&quot;, error);
      toast({
        title: &quot;Message not sent&quot;,
        description: &quot;There was an error sending your message. Please try again.&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </AvatarFallback>
            </Avatar>
            Message {_talent.full_name}
          </DialogTitle>
          <DialogDescription className=&quot;text-zion-slate&quot;>
            Send a direct message to start a conversation.
<<<<<<< HEAD
            {talent.professional_title && (
              <span className=&quot;block mt-1 text-zion-cyan&quot;>{talent.professional_title}</span>
=======
            {_talent.professional_title && (
              <span className="block mt-1 text-zion-cyan">{talent.professional_title}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            )}
          </DialogDescription>
        </DialogHeader>
        
        <div className=&quot;space-y-4&quot;>
          <div>
            <label className=&quot;block text-sm font-medium text-zion-slate mb-1&quot;>
              Message
            </label>
            <Textarea
<<<<<<< HEAD
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className=&quot;w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple&quot;
              placeholder=&quot;Write your message here...&quot;
=======
              value={_message}
              onChange={_(_e) => setMessage(e.target.value)}
              rows={_5}
              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple"
              placeholder="Write your message here..."
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
        </div>
        
        <DialogFooter className=&quot;gap-2 sm:gap-0&quot;>
          <Button
<<<<<<< HEAD
            type=&quot;button&quot;
            variant=&quot;outline&quot;
            onClick={onClose}
            className=&quot;border-zion-purple/30 text-white&quot;
=======
            type="button"
            variant="outline"
            onClick={_onClose}
            className="border-zion-purple/30 text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Cancel
          </Button>
          <Button
<<<<<<< HEAD
            type=&quot;button&quot; 
            onClick={handleSendMessage}
            disabled={isSubmitting}
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
=======
            type="button" 
            onClick={_handleSendMessage}
            disabled={_isSubmitting}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
