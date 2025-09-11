
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  conversation: Conversation,
  isActive: boolean,
  onClick: () => void

import React from 'react';
import { format  } from 'date-fns';
import { cn  } from '@/lib/utils';
import { Conversation  } from '@/types/messaging';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
interface ConversationItemProps {
  conversation: Conversation,
  isActive: boolean,
  onClick: () => void
=======
==============
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',;
import { format } from 'date-fns',;
import { cn } from '@/lib/utils',;
import { Conversation } from '@/types/messaging',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
interface ConversationItemProps {;
  conversation: Conversation,;
  isActive: boolean,;
  onClick: () => void;

}
}
}
=======
=======


}
  conversation: Conversation
  isActive: boolean

  onClick: () => void
}
export function ConversationItem({ conversation, isActive, onClick }: ConversationItemProps) {
  return (


    <div 


      {conversation.unread_count > 0 && (
        <div className="bg - zion - purple text - white rounded - full h - 5 min - w-5 flex items - center justify - center text - xs">;
          {conversation.unread_count}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
