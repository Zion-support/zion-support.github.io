







  ),
  const [isSubmitting, setIsSubmitting] = useState(false),



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




