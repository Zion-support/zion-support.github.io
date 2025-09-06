import React, { useState } from 'react';
  talent;
  isOpen;
  onClose;
  jobTitle;
}: MessageTalentModalProps) {;
  const { createConversation } = useMessaging();

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



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  jobTitle
}: MessageTalentModalProps) {
  const { createConversation } = useMessaging();

  const navigate = useNavigate();
  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),
  const [message, setMessage] = useState(
    jobTitle
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  ),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
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
      setIsSubmitting(true);
      // Create context data for the conversation
      const contextData = {
        title: jobTitle |`Discussion with ${talent.full_name}`
        description: talent.bio |talent.professional_title |""
        image_url: talent.profile_picture_url |""
      }
      setIsSubmitting(true),
      
      // Create context data for the conversation
      const contextData = {
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
      console.error("Failed to send message:", error);
      toast({
        title: "Message not sent"
        description: "There was an error sending your message. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  },

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-3">
            <Avatar className="h-8 w-8 border border-zion-purple/20">
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />
              <AvatarFallback className="bg-zion-blue-dark text-white">
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
=======
  const navigate = useNavigate();
      });
      return;
    }
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                {talent.full_name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            Message {talent.full_name}
          </DialogTitle>
          <DialogDescription className="text-zion-slate">
            Send a direct message to start a conversation.
            {talent.professional_title && (
              <span className="block mt-1 text-zion-cyan">{talent.professional_title}</span>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                {talent && talent.full_name.charAt(0).toUpperCase()}
              </AvatarFallback>;
            </Avatar>;
            Message {talent && talent.full_name}
          </DialogTitle>;
          <DialogDescription className="text-zion-slate">;
            Send a direct message to start a conversation.;
            {talent && talent.professional_title && (;
              <span className="block mt-1 text-zion-cyan">{talent && talent.professional_title}</span>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            )}
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
              placeholder="Write your message here...";
            />;
          </div>;
        </div>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
<<<<<<< HEAD
            className="border-zion-purple/30 text-white"
          >
            Cancel
          </Button>
=======
            className="border-zion-purple/30 text-white">;
            Cancel;
          </Button>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <Button
            type="button"
            onClick={handleSendMessage}
            disabled={isSubmitting}
<<<<<<< HEAD
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
=======
            className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
            {isSubmitting ? 'Sending...' : 'Send Message'}
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>);
}
<<<<<<< HEAD

=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
