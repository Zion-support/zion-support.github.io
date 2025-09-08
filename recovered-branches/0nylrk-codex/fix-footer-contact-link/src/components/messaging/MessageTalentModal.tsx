
import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;import React, { useState } from 'react',
import {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  jobTitle;)
pr-12325
}: MessageTalentModalProps) {

  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),

}: MessageTalentModalProps) {
  const { createConversation } = useMessaging();

  const navigate = useNavigate();
  const { createConversation } = useMessaging(),
  const navigate = useNavigate(),  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before sending."
        variant: "destructive"      });
      return;
    }
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
      
      // Create context data for the conversation
      const contextData = {
        title: jobTitle || `Discussion with ${talent.full_name}`,
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

<<<<<<< HEAD
      const contextData = {;
        title: jobTitle || `Discussion with ${talent && talent.full_name}`,,
  description: talent && talent.bio || talent && talent.professional_title || "",;
        image_url: talent && talent.profile_picture_url || ""
};

      // Create conversation with this talent;
      await createConversation(;
        talent && talent.user_id;
        message;        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
    }
  }

  return (    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;

      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;
        <DialogHeader>;"
          <DialogTitle className="text-white flex items-center gap-3">;"
            <Avatar className="h-8 w-8 border border-zion-purple/20">;
              <AvatarFallback className="bg-zion-blue-dark text-white">;              <AvatarFallback className="bg-zion-blue-dark text-white">;
                {talent.full_name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            Message {talent.full_name}
          </DialogTitle>
          <DialogDescription className="text-zion-slate">
            Send a direct message to start a conversation.
            {talent.professional_title && (
              <span className="block mt-1 text-zion-cyan">{talent.professional_title}</span>              placeholder="Write your message here...";
            />;
          </div>;
        </div>;

        <DialogFooter className="gap - 2 sm:gap-0">;
          <Button;
            type="button";
            variant="outline";
            on_click={on_close}
            className="border - zion - purple / 30 text-white";          >;
            Cancel;
          </Button>;
          <Button;
            type="button";
            on_click={handleSendMessage}
            disabled={is_submitting}
            className="bg - zion - purple hover:bg - zion - purple - dark text-white";
          >;
            {is_submitting ? 'Sending...' : 'Send Message'}
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>);
}            onClick={handleSendMessage}
            disabled={isSubmitting}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;'
            {isSubmitting ? 'Sending...' :'Send Message'}
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>;

<<<<<<< HEAD
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




=======
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df