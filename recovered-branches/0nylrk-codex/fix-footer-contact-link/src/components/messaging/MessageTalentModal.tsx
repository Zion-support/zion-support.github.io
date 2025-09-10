import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;import React, { useState } from 'react',
import {



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

