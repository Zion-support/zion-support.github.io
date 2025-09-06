import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;
  DialogFooter} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Textarea } from "@/components/ui/textarea",
import { useMessaging } from "@/context/MessagingContext",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
export interface MessageTalentModalProps {

  talent: TalentProfile
  isOpen: boolean
  onClose: () => void

  jobTitle?: string
}
export function MessageTalentModal({
=======
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Textarea} from "@/components/ui/textarea";
import {useMessaging} from "@/context/MessagingContext";
import {TalentProfile} from "@/types/talent";
import {toast} from "@/components/ui/use-toast";
import {useNavigate} from "react-router-dom";
export interface MessageTalentModalProps {;
  talent: TalentProfile,;
  isOpen: boolean,;
  onClose: () => void,;
  jobTitle?: string;
}

export function MessageTalentModal(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  talent;
  isOpen;
  onClose;
  jobTitle;
}: MessageTalentModalProps) {;
  const { createConversation } = useMessaging();

  const navigate = useNavigate();
<<<<<<< HEAD
  const [message, setMessage] = useState(
    jobTitle
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before sending."
        variant: "destructive"
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      return;
    }
<<<<<<< HEAD
    try {
      setIsSubmitting(true);
      // Create context data for the conversation
      const contextData = {
        title: jobTitle |`Discussion with ${talent.full_name}`
        description: talent.bio |talent.professional_title |""
        image_url: talent.profile_picture_url |""
      }
      // Create conversation with this talent
      await createConversation(
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        talent.user_id;
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        message;
<<<<<<< HEAD
        jobTitle ? 'job' : 'talent';
        talent && talent.id;
        contextData;
      );
<<<<<<< HEAD
      toast({
        title: "Message sent"
        description: `Your message has been sent to ${talent.full_name}.`})
      onClose();
      // Navigate to messages inbox
      navigate("/messages")
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Message not sent"
        description: "There was an error sending your message. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
=======

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
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;
        <DialogHeader>;
          <DialogTitle className="text-white flex items-center gap-3">;
            <Avatar className="h-8 w-8 border border-zion-purple/20">;
              <AvatarImage src={talent && talent.profile_picture_url} alt={talent && talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;
                {talent && talent.full_name.charAt(0).toUpperCase()}
              </AvatarFallback>;
            </Avatar>;
            Message {talent && talent.full_name}
          </DialogTitle>;
          <DialogDescription className="text-zion-slate">;
            Send a direct message to start a conversation.;
            {talent && talent.professional_title && (;
              <span className="block mt-1 text-zion-cyan">{talent && talent.professional_title}</span>;
            )}
<<<<<<< HEAD
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zion-slate mb-1">
              Message
            </label>
=======
          </DialogDescription>;
        </DialogHeader>;

        <div className="space-y-4">;
          <div>;
            <label className="block text-sm font-medium text-zion-slate mb-1">;
              Message;
            </label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Textarea
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}
<<<<<<< HEAD
              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple"
              placeholder="Write your message here..."
            />
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              placeholder="Write your message here...";
            />;
          </div>;
        </div>;
<<<<<<< HEAD

        <DialogFooter className="gap-2 sm:gap-0">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="border-zion-purple/30 text-white">;
            Cancel;
          </Button>;
          <Button
            type="button"
            onClick={handleSendMessage}
            disabled={isSubmitting}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
            {isSubmitting ? 'Sending...' : 'Send Message'}
<<<<<<< HEAD
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
=======
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        <DialogFooter className="gap - 2 sm:gap - 0">;
          <Button;
            type="button";
            variant="outline";
            on_click={on_close}
            className="border - zion - purple / 30 text - white";
          >;
            Cancel;
          </Button>;
          <Button;
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
