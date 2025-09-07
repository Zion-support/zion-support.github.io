id: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  sender?: string;
  avatar?: string;

  status?: 'sent' | 'delivered' | 'read';

interface MobileChatViewProps {;
  contact: {;

    name: string;
    status?: string
  },
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void

interface Message {
  is_me: boolean;
interface MobileChatViewProps {
  contact: {
    status?: string;
  }
  on_back: () => void;
  onSendMessage: (content: string) => void;
export /**
 * MobileChatView - Function description
 */
function MobileChatView() {
  const [new_message, setNewMessage] = useState ('');
  const router = use_router ();
  const handle_send = () =>: any {
    // Check condition
if (!== '') {) {
  $2
      onSendMessage (new_message);
      setNewMessage ('');

  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {    // Check condition
if ( {) {
      e.prevent_default ();
      handle_send ();

  const startVideoCall = () =>: any {
    const room_id = `mobile-${contact.id}`;
    toast.success ('Starting video call', {
      description: `Connecting with ${contact.name}...`,
    });
    // Navigate to video call page;
    router.push (`/call/${room_id}`);
  const startAudioCall = () =>: any {
    const room_id = `mobile - audio-${contact.id}`;
    toast.success ('Starting audio call', {
    // Navigate to video call page with audio - only flag;
    router.push (`/call/${room_id}?audio_only = true`);

export function MobileChatView(): any ({;
  contact,;
  messages,;
  onBack,;
  onSendMessage,;
}: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState('');
  const router = useRouter();
  const handleSend = () => {;
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
  };

  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault();
      handleSend();

  const startVideoCall = () => {;
    const roomId = `mobile-${contact && contact.id}`;
    toast && toast.success('Starting video call', {;
      description: `Connecting with ${contact && contact.name}...`,;

    router && router.push(`/call/${roomId}`);

  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact && contact.id}`;
    toast && toast.success('Starting audio call', {;

    // Navigate to video call page with audio-only flag;
    router && router.push(`/call/${roomId}?audioOnly=true`);

  return (

  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`,
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`
    }),

    // Navigate to video call page
    router.push(`/call/${roomId}`)

  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {

    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`)

    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button
            variant='ghost'
            size='icon'
            onClick={onBack}
            aria-label='Go back'          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <div className='flex items-center flex-1 gap-3 mx-2'>
            variant="ghost"
            size="icon"
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />

          <div className="flex items-center flex-1 gap-3 mx-2">

            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className='font-medium'>{contact.name}</h3>
              <p className='text-xs text-muted-foreground'>
                {contact.status |'Online'}
              </p>
            </div>
          <div className='flex'>
              onClick={startAudioCall}

              aria-label='Start audio call'>;
              <Phone className='h-5 w-5' />;
            </Button>;

              onClick={startVideoCall}
              aria-label='Start video call'            >
              <Video className='h-5 w-5' />
            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-xs text-muted-foreground">
                {contact.status || "Online"}

      </header>

              aria-label='Start video call'>;
              <Video className='h-5 w-5' />;

            <Button variant='ghost' size='icon' aria-label='More options'>;
              <MoreVertical className='h-5 w-5' />;
    <div className='flex flex - col h - full pb - safe'>;
      <header className='sticky top - 0 z - 10 bg - background border - b border - border'>;
        <div className='flex items - center h - 14 px - 4'>;
          <Button;
            variant='ghost';
            size='icon';
            on_click={on_back}
            aria - label='Go back'          >;
            <ChevronLeft className='h - 5 w - 5' />;
          <div className='flex items - center flex - 1 gap - 3 mx - 2'>;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>;
                {contact.name.char_at (0).toUpperCase ()}
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <h3 className='font - medium'>{contact.name}</h3>;
              <p className='text - xs text - muted - foreground'>;
                {contact.status || 'Online'}
              </p>;
            </div>;
          <div className='flex'>;
              on_click={startAudioCall}
              aria - label='Start audio call'            >;
              <Phone className='h - 5 w - 5' />;
              on_click={startVideoCall}
              aria - label='Start video call'            >;
              <Video className='h - 5 w - 5' />;
            <Button variant='ghost' size='icon' aria - label='More options'>;
              <MoreVertical className='h - 5 w - 5' />;

      </header>;

              'flex',
              message && message.isMe ? 'justify-end' : 'justify-start'
            )}>;
            <div
              className={cn(
                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe

                  ? 'bg-primary text-primary-foreground rounded-tr-none'
                  : 'bg-muted rounded-tl-none'
              )}            >
              <p>{message.content}</p>

                  'text-xs mt-1 flex justify-end',

                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                )}

      <div className='flex - 1 overflow - y-auto p - 4 space - y-4'>;
        {messages.map (message => (

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
            key={message.id} 
              "flex",
              message.isMe ? "justify-end" : "justify-start"
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
                  : "bg-muted rounded-tl-none"
              <div className={cn(
                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
  },;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {;
      description: `Connecting with ${contact.name}...`;
    }),;
    router.push(`/call/${roomId}`);
    const roomId = `mobile-audio-${contact.id}`,;
    toast.success("Starting audio call", {;
    router.push(`/call/${roomId}?audioOnly=true`);
  return (;
    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
            variant="ghost";
            size="icon";
            aria-label="Go back";
          >;
            <ChevronLeft className="h-5 w-5" />;
          <div className="flex items-center flex-1 gap-3 mx-2">;
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>;
              <h3 className="font-medium">{contact.name}</h3>;
              <p className="text-xs text-muted-foreground">;
          <div className="flex">;
              aria-label="Start audio call";
              <Phone className="h-5 w-5" />;
              aria-label="Start video call";
              <Video className="h-5 w-5" />;
            <Button variant="ghost" size="icon" aria-label="More options">;
              <MoreVertical className="h-5 w-5" />;
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {messages.map((message) => (;

          <div;
            key={message.id} ;
            className={cn(;
              "flex",;
              message.isMe ? "justify-end" : "justify-start";
                "max-w-[80%] rounded-2xl px-4 py-2";
                message.isMe;
                  ? "bg-primary text-primary-foreground rounded-tr-none";
                  : "bg-muted rounded-tl-none";
              <p>{message.content}</p>;
                className={cn (
                  'text - xs mt - 1 flex justify - end',
                  message.is_me;
                    ? 'text - primary - foreground / 80';
                    : 'text - muted - foreground')}
                {message.timestamp}

                {message.isMe && message.status && (;
                  <span className="ml-1">;

                    {message.status === 'read' ? '✓✓' : '✓'}

        ))}

      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Attach file">
            <PaperclipIcon className="h-5 w-5" />

          <Input
            value={newMessage}

            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...'
            className='flex-1'          />

            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : ''}
            aria-label='Send message'          >
            <Send className='h-5 w-5' />

  );

            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />

            className={!newMessage.trim() ? "opacity-50" : ""}
            aria-label="Send message"
            <Send className="h-5 w-5" />

      <div className='sticky bottom-0 bg-background border-t border-border p-2'>;
        <div className='flex items-center gap-2'>;
          <Button variant='ghost' size='icon' aria-label='Attach file'>;
            <PaperclipIcon className='h-5 w-5' />;

  )

                  </span>)}
          </div>))}
      <div className='sticky bottom - 0 bg - background border - t border - border p - 2'>;
        <div className='flex items - center gap - 2'>;
          <Button variant='ghost' size='icon' aria - label='Attach file'>;
            <PaperclipIcon className='h - 5 w - 5' />;
          <Input;
            value={new_message}
            on_change={e => setNewMessage (e.target.value)}
            placeholder='Type a message...';
            className='flex - 1'          />;
            on_click={handle_send}
            disabled={!new_message.trim ()}
            className={!new_message.trim () ? 'opacity - 50' : ''}
            aria - label='Send message'          >;
            <Send className='h - 5 w - 5' />;
    </div>);

;