interface Message {
id: string;
content: string;
timestamp: string;
isMe: boolean;
sender?: string;
avatar?: string;
status?: 'sent' | 'delivered' | 'read';
interface MobileChatViewProps {;
contact: {;
id: string;
name: string;
avatar?: string;
status?: string;
};
messages: Message[];
onBack: () => void;
onSendMessage: (content: string) => void;
{message.timestamp}
{message.isMe && message.status && (
<span className='ml-1'>
{message.status === 'read' ? '✓✓' : '✓'}
</span>
)}
</div>
</div>
</div>
))}
</div>
<div className='sticky bottom-0 bg-background border-t border-border p-2'>
<div className='flex items-center gap-2'>
<Button variant='ghost' size='icon' aria-label='Attach file'>
<PaperclipIcon className='h-5 w-5' />
</Button>
<Input;
value={newMessage}
onChange={e => setNewMessage(e.target.value)}
onKeyDown={handleKeyDown}
placeholder='Type a message...';
className='flex-1'          />
<Button;
size='icon';
onClick={handleSend}
disabled={!newMessage.trim()}
className={!newMessage.trim() ? 'opacity-50' : ''}
aria-label='Send message'          >
<Send className='h-5 w-5' />
</Button>
</div>
</div>
</div>
)
}