 export interface MessageTalentModalProps {
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
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
};
return (<Dialog open= {
  isOpen 
}onOpenChange= {
  onClose 
}> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-purple/20" > <DialogHeader> <DialogTitle className="text-white flex items-center gap-3" > <Avatar className="h-8 w-8 border border-zion-purple/20" > <AvatarImage src= {
  talent.profile picture url 
}alt= {
  talent.full name 
}/> <AvatarFallback className="bg-zion-blue-dark text-white" > {
  talent.full name.charAt (0) .toUpperCase () 
}talent.full name 
}</DialogTitle> <DialogDescription className="text-zion-slate" > Send a direct message to start a conversation.) 
}</DialogDescription> </DialogHeader> <div className="space-y-4" > <div> <label className="block text-sm font-medium text-zion-slate mb-1" > Message </label> <Textarea /> </div> </div> <DialogFooter className="gap-2 sm:gap-0" > <Button > Cancel </Button> <Button > {
  isSubmitting ? 'Sending...' : 'Send Message' 
}</Button> </DialogFooter> </DialogContent> </Dialog>) 
}