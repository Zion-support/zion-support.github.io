=======
import React, { useState } from './react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
interface Message {
  id: string,
  content: string,
  timestamp: string,
  is_me: boolean,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}
interface MobileChatViewProps {
  contact: {

    id: string
    name: string
    avatar?: string;
  const [newMessage, setNewMessage] = useState("");

  const navigate = useNavigate();
      onSendMessage(newMessage);
      setNewMessage("");
    }
                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml - 1">;
                    {message.status === 'read' ? '✓✓' : '✓'}
                )}
              </div>;
            </div>;
          </div>;
        ))}
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
=======
                  </span>)}
              </div>;
            </div>;
          </div>))}
      </div>;
      <div className="sticky bottom - 0 bg - background border - t border - border p - 2">;
        <div className="flex items - center gap - 2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h - 5 w - 5" />;
          </Button>;
          <Input;
            value={new_message}
            on_change={(e) => setNewMessage (e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex - 1";
          />;
          <Button;
            size="icon";
            on_click={handle_send}
            disabled={!new_message.trim ()}
            className={!new_message.trim () ? "opacity - 50" : ""}
          >;
            <Send className="h - 5 w - 5" />;
          </Button>;
        </div>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
