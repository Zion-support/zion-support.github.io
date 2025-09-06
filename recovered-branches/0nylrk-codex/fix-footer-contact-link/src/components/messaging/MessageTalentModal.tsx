import React, { useState } from 'react';
  talent;
  isOpen;
  onClose;
  jobTitle;
}: MessageTalentModalProps) {;
  const { createConversation } = useMessaging();

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
            <Textarea
              value={message}
              onChange={(e) => setMessage(e && e.target.value)}
              rows={5}
              placeholder="Write your message here...";
            />;
          </div>;
        </div>;
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
