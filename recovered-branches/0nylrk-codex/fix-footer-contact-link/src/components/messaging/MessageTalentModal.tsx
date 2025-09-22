
import React, { useState } from 'react';
import {
import {};

import {
  // TODO: Implement
}
pr-12325
  Dialog;
  DialogContent;

  DialogHeader;
  DialogTitle;
  DialogDescription;
  DialogDescription;
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Textarea} from "@/components/ui/textarea";
import {useMessaging} from "@/context/MessagingContext";
import {TalentProfile} from "@/types/talent";
import {toast} from "@/components/ui/use-toast";
import {useNavigate} from "react-router-dom";
import React, { useState } from 'react',

import React, { useState } from 'react',
import {
import {}
  DialogDescription;import React, { useState } from 'react',;
import {
  DialogDescription;
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from "@/components/ui/dialog";""
import {Button} from "@/components/ui/button";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import {Textarea} from "@/components/ui/textarea";""
import {useMessaging} from "@/context/MessagingContext";""
import {TalentProfile} from "@/types/talent";""
import {toast} from "@/components/ui/use-toast";""
import {useNavigate} from "react-router-dom";""
import React, { useState } from 'react',;
  // TODO: Implement
pr-12325
import React, { useState } from 'react','

import {
  // TODO: Implement
}
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
import { useNavigate } from "react-router-dom",
export interface MessageTalentModalProps {

  talent: TalentProfile
  isOpen: boolean
  onClose: () => void

  jobTitle?: string
export interface MessageTalentModalProps {};
  talent: TalentProfile;
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export function MessageTalentModal({;
  talent;
  isOpen;
  onClose;
export function MessageTalentModal({}
  talent,
  isOpen,
  onClose,

  DialogFooter} from "@/components/ui/dialog",

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
  jobTitle
  jobTitle;
}: MessageTalentModalProps) {

  const { createConversation } = useMessaging();

  const navigate = useNavigate(),
  const [message, setMessage] = useState(
    jobTitle
      ? `Hi ${talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`
      : `Hi ${talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`

  ),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleSendMessage = async () => {
  const navigate = useNavigate(),  const handleSendMessage = async () => {
  const navigate = useNavigate(),  const handleSendMessage = async () => {
  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before sending."
        variant: "destructive"
  jobTitle;
}: MessageTalentModalProps) {}
  const { createConversation } = useMessaging();

  const navigate = useNavigate();
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

  const [message, setMessage] = useState(;
    jobTitle ;'`
      ? `Hi ${talent && talent.full_name}, I'd like to invite you to discuss a project: ${jobTitle}`;'`
      : `Hi ${talent && talent.full_name}, I'm interested in your profile and would like to discuss a potential opportunity.`;
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendMessage = async () => {;
    if (!message && message.trim()) {;
toast({;"
        title: "Message required",;"
        description: "Please enter a message before sending.",;"
        variant: "destructive";
      });
      return;
    }

      toast({;
        title: "Message required",;
        description: "Please enter a message before sending.",;
        variant: "destructive";
      });
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
try {
setIsSubmitting(true),

      // Create context data for the conversation;
      const contextData = {}`
        title: jobTitle || `Discussion with ${talent.full_name}`,"
        description: talent.bio || talent.professional_title || "",
image_url: talent.profile_picture_url || "";
      }
;
      // Create conversation with this talent;
      await create_conversation (

"
        image_url: talent.profile_picture_url || ""
      },

// Create conversation with this talent;
      await createConversation(
        talent.user_id,
        message,'
        jobTitle ? 'job' : 'talent',
        talent.id,
contextData
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
        message;

      setIsSubmitting(true),

      // Create context data for the conversation;
      const contextData = {}`
        title: jobTitle || `Discussion with ${talent.full_name}`,"
        description: talent.bio || talent.professional_title || "","
        image_url: talent.profile_picture_url || ""
      },

// Create conversation with this talent;
      await createConversation(
        talent.user_id,
        message,'
        jobTitle ? 'job' : 'talent',
        talent.id,
        contextData;
      ),

      toast({"
        title: "Message sent",`
        description: `Your message has been sent to ${talent.full_name}.`}),

      onClose(),

toast({"
        title: "Message not sent""
        description: "There was an error sending your message. Please try again.""
        variant: "destructive"
      })
    } finally {}
      setIsSubmitting(false)
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
        title: "Message required",;"
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
        title: "Message sent",;`
        description: `Your message has been sent to ${talent && talent.full_name}.`}),;

      onClose();

      // Navigate to messages inbox;"
      navigate("/messages");
    } catch (error) {;"
      console && console.error("Failed to send message:", error);
      toast({;"
        title: "Message not sent",;"
        description: "There was an error sending your message. Please try again.",;
"
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
    }
}

    }

  return (

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

    <Dialog open={isOpen} onOpenChange={onClose}>;"
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;
        <DialogHeader>;"
          <DialogTitle className="text-white flex items-center gap-3">;"
            <Avatar className="h-8 w-8 border border-zion-purple/20">;
              <AvatarImage src={talent && talent.profile_picture_url} alt={talent && talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;
              <AvatarFallback className="bg-zion-blue-dark text-white">;              <AvatarFallback className="bg-zion-blue-dark text-white">;
              <AvatarFallback className="bg-zion-blue-dark text-white">;              <AvatarFallback className="bg-zion-blue-dark text-white">;
              <AvatarImage src={talent && talent.profile_picture_url} alt={talent && talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;

<AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;
                {talent.full_name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            Message {talent.full_name}
          </DialogTitle>"
          <DialogDescription className="text-zion-slate">
            Send a direct message to start a conversation.
{talent.professional_title && (
              <span className="block mt-1 text-zion-cyan">{talent.professional_title}</span>

              </AvatarFallback>;
            </Avatar>;
            Message {talent && talent.full_name}
          </DialogTitle>;"
          <DialogDescription className="text-zion-slate">;
            Send a direct message to start a conversation.;
            {talent && talent.professional_title && (;"
              <span className="block mt-1 text-zion-cyan">{talent && talent.professional_title}</span>;
            )}
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

className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple";
              placeholder="Write your message here...";

              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple";
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
          <Button
            type="button"
            onClick={handleSendMessage}
            disabled={isSubmitting}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}

              className="w-full bg-zion-blue-dark/30 border-zion-purple/20 text-white focus:ring-zion-purple";
              placeholder="Write your message here...";
            />;
          </div>;
        </div>;

        <DialogFooter className="gap - 2 sm:gap-0">;
          <Button;
            type="button";
            variant="outline";
            on_click={on_close}
            className="border - zion - purple / 30 text - white";
</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>;
  );
}
        ;
        <DialogFooter className="gap-2 sm:gap-0">;
          <Button;
            type="button";
            variant="outline";
            onClick={onClose}
            className="border-zion-purple/30 text-white";
          >;
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
        message;

    try {
  // TODO: Implement
})
      setIsSubmitting(true),
      // Create context data for the conversation;
      const contextData = {
        title: jobTitle || `Discussion with ${talent.full_name}`,"
        description: talent.bio || talent.professional_title || "",""
        image_url: talent.profile_picture_url || """
      },

      // Create conversation with this talent;
      await createConversation(
        talent.user_id,
        message,"
        jobTitle ? 'job' : 'talent','
        talent.id,
        contextData;)
      ),
      toast({'
        title: "Message sent",")
        description: `Your message has been sent to ${talent.full_name}.`}),
      onClose(),

      // Navigate to messages inbox;"
      navigate("/messages")"
    } catch (error) {"
      console.error("Failed to send message:", error);"
      toast({"
        title: "Message not sent"","
  description: "There was an error sending your message. Please try again."""
        variant: "destructive"")
      })
    } finally {
  // TODO: Implement
}
      setIsSubmitting(false)

    }

  },

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
</Dialog>"
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">"
</DialogContent>
        <DialogHeader>
</DialogHeader>"
          <DialogTitle className="text-white flex items-center gap-3">"
</DialogTitle>"
            <Avatar className="h-8 w-8 border border-zion-purple/20">"
</Avatar>
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />
</AvatarImage>"
              <AvatarFallback className="bg-zion-blue-dark text-white">"
</AvatarFallback>
    <Dialog open={isOpen} onOpenChange={onClose}>;
</Dialog>"
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>"
          <DialogTitle className="text-white flex items-center gap-3">;"
</DialogTitle>"
            <Avatar className="h-8 w-8 border border-zion-purple/20">;"
</Avatar>
              <AvatarImage src={talent && talent.profile_picture_url} alt={talent && talent.full_name} />;
</AvatarImage>"
              <AvatarFallback className="bg-zion-blue-dark text-white">;"
</AvatarFallback>"
              <AvatarFallback className="bg-zion-blue-dark text-white">;"
</AvatarFallback>
              </AvatarFallback>
            </Avatar>
          </DialogTitle>"
          <DialogDescription className="text-zion-slate">"
</DialogDescription>"
              <span className="block mt-1 text-zion-cyan">{talent.professional_title}</span>"
          </DialogDescription>;
        </DialogHeader>;
          </DialogDescription>;
        </DialogHeader>;
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />;
</AvatarImage>"
              <AvatarFallback className="bg-zion-blue-dark text-white">;"
</AvatarFallback>
              </AvatarFallback>;
            </Avatar>;
          </DialogTitle>;"
          <DialogDescription className="text-zion-slate">;"
</DialogDescription>"
              <span className="block mt-1 text-zion-cyan">{talent && talent.professional_title}</span>;"
          </DialogDescription>;
        </DialogHeader>;"
        <div className="space-y-4">;"
</div>
          <div>;
</div>"
            <label className="block text-sm font-medium text-zion-slate mb-1">;"
</label>
            </label>;
            <Textarea;
              value={message})
              onChange={(e) => setMessage(e && e.target.value)}
</Textarea>
          <Button;"
            type="button"""
            variant="outline""
            onClick={onClose}
          <Button;"
            type="button""
            onClick={handleSendMessage}
            disabled={isSubmitting}"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white""
          >
</Button>
          </div>;
        </div>;"
        <DialogFooter className="gap - 2 sm:gap - 0">;"
</DialogFooter>
          <Button;"
            type="button";""
            variant="outline";"
            on_click={on_close}"
            className="border - zion - purple / 30 text - white";"
          >;
</Button>
          </Button>;
          <Button;"
            type="button";"
            on_click={handleSendMessage}
            disabled={is_submitting}"
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";"
          >;
</Button>

          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>);
}

;
            type="button" ;
            onClick={handleSendMessage}
}            onClick={handleSendMessage}
            disabled={isSubmitting}
          >;
            Cancel;
          </Button>;
          <Button;

"
            type="button" ;
            onClick={handleSendMessage}
            disabled={isSubmitting}"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;'
            {isSubmitting ? 'Sending...' :'Send Message'}

          </Button>;
        </DialogFooter>;
      </DialogContent>;
    </Dialog>;
  ),; export interface MessageTalentModalProps {};
  talent: TalentProfile;
isOpen: boolean;
onClose: () => void;
jobTitle?: string;
}export function MessageTalentModal ({};
  talent;
isOpen;
onClose;
jobTitle;
}: MessageTalentModalProps) {}
  const {}
  createConversation;
}= useMessaging ();
const navigate = useNavigate ();`
const [message, setMessage] = useState (jobTitle ? `Hi $ {}
  talent.full name '
}, I'd like to invite you to discuss a project: $ {}
  jobTitle;`
}` : `Hi $ {}
  talent.full name '`
}, I'm interested in your profile and would like to discuss a potential opportunity.`);
const [isSubmitting, setIsSubmitting] = useState (false);
if (!message.trim () ) {}
  toast ({}
  return;
}//Create context data for the conversation const contextData = {}`
  title: jobTitle || `Discussion with $ {}
  talent.full name;`
}`;
//Create conversation with this talent await createConversation (talent.user id;
message;'
jobTitle ? 'job' : 'talent';
talent.id;
contextData);
//Navigate to messages inbox;
}finally {}
setIsSubmitting (false)
}
;

};
return (<Dialog open= {}
  isOpen }
}onOpenChange= {}
  onClose }
} /> <DialogContent className=\"sm:max-w-md bg-zion-blue border-zion-purple/20\"  /> <DialogHeader /> <DialogTitle className=\"text-white flex items-center gap-3\"  /> <Avatar className=\"h-8 w-8 border border-zion-purple/20\"  /> <AvatarImage src= {}
  talent.profile picture url }
}alt= {}
  talent.full name }
}/> <AvatarFallback className=\"bg-zion-blue-dark text-white\"  /> {}
  talent.full name.charAt (0) .toUpperCase () }
}talent.full name;
}</DialogTitle> <DialogDescription className=\"text-zion-slate\"  /> Send a direct message to start a conversation.) 
}</DialogDescription> </DialogHeader> <div className=\"space-y-4\"  /> <div /> <label className=\"block text-sm font-medium text-zion-slate mb-1\"  /> Message </label> <Textarea /> </div> </div> <DialogFooter className=\"gap-2 sm:gap-0\"  /> <Button  /> Cancel </Button> <Button  /> {}
  isSubmitting ? 'Sending...' : 'Send Message' }
}</Button> </DialogFooter> </DialogContent> </Dialog>) 
}
;
'"`
        message;

  // TODO: Implement
      // Create context data for the conversation;

      // Create conversation with this talent;

      // Navigate to messages inbox;"
      console.error("Failed to send message:", error);"
  // TODO: Implement

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">"

        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-3">"
            <Avatar className="h-8 w-8 border border-zion-purple/20">"

              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />
              <AvatarFallback className="bg-zion-blue-dark text-white">"

    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20">;"

        <DialogHeader>;
          <DialogTitle className="text-white flex items-center gap-3">;"
            <Avatar className="h-8 w-8 border border-zion-purple/20">;"

              <AvatarImage src={talent && talent.profile_picture_url} alt={talent && talent.full_name} />;
              <AvatarFallback className="bg-zion-blue-dark text-white">;"

          <DialogDescription className="text-zion-slate">"
              <span className="block mt-1 text-zion-cyan">{talent.professional_title}</span>"
              <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />;

          ;"
          <DialogDescription className="text-zion-slate">;"
              <span className="block mt-1 text-zion-cyan">{talent && talent.professional_title}</span>;"
        <div className="space-y-4">;"
</div>
          <div>;
</div>"
            <label className="block text-sm font-medium text-zion-slate mb-1">;"
</label>
            </label>;
            <Textarea;
              value={message})
              onChange={(e) => setMessage(e && e.target.value)}

          <Button;"
            type="button"""
            variant="outline""
            onClick={onClose}
            type="button""
            onClick={handleSendMessage}
            disabled={isSubmitting}"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white""
          >

          </div>;
        </div>;"
        <DialogFooter className="gap - 2 sm:gap - 0">;"

            type="button";""
            variant="outline";"
            on_click={on_close}"
            className="border - zion - purple / 30 text - white";"
          >;

            type="button";"
            on_click={handleSendMessage}
            disabled={is_submitting}"
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";"

return (<Dialog open= {
}onOpenChange= {
  onClose;"
}> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20" > <DialogHeader> <DialogTitle className="text-white flex items-center gap-3" > <Avatar className="h-8 w-8 border border-zion-purple/20" > <AvatarImage src= {"
}/> <AvatarFallback className="bg-zion-blue-dark text-white" > {"
)"
} <DialogDescription className="text-zion-slate" > Send a direct message to start a conversation.)"
}  <div className="space-y-4" > <div> <label className="block text-sm font-medium text-zion-slate mb-1" > Message </label> <Textarea /> </div> </div> <DialogFooter className="gap-2 sm:gap-0" > <Button > Cancel  <Button > {""
  isSubmitting ? 'Sending...' : 'Send Message
}   ) `;
pr-12325
;
