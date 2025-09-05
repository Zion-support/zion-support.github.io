

interface ProfileContactProps {_email?: string;
  profileName: string;
  profileType: 'service' | 'talent';}

export function ProfileContact(_{_email, _profileName, _profileType}: ProfileContactProps) {_const [message, _setMessage] = useState("");
  const [subject, _setSubject] = useState("");
  const [isSending, _setIsSending] = useState(false);
  
  const _handleSendMessage = (_e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Here would be the actual API call to send the message
    setTimeout__(() => {
      setIsSending(false);
      setMessage("");
      setSubject("");
      toast({
        title: "Message Sent", _description: `Your message has been sent to ${profileName}.`});
    }, 1000);
  };

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 h-5 w-5 text-zion-cyan" />
        Contact
      </h3>
      
      {_email && (
        <div className="mb-4 text-zion-slate-light">
          <span className="block">Email: </span>
          <a 
            href={`mailto:${email}`} 
            className="text-zion-cyan hover:underline truncate block"
          >
            {_email}
          </a>
        </div>
      )}
      
      <form onSubmit={_handleSendMessage}>
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Subject"
              value={_subject}
              onChange={_(_e) => setSubject(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder={_`Message to ${profileName}...`}
              value={_message}
              onChange={_(_e) => setMessage(e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={_isSending}
          >
            <Send className="mr-2 h-4 w-4" />
            {_isSending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
