import React, {;
  useState,;
  useEffect,;
  useRef,;
  ReactNode,;
  useContext} from 'react',;
import { AuthContext } from '../../context/auth/AuthContext',;
import { useDebounce } from '../../hooks/useDebounce',;
import { useLocalStorage } from '../../hooks/useLocalStorage',;
import { ChatMessage } from './ChatMessage',;
import { ChatInput } from './ChatInput',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { Button } from '@/components/ui/button',;
import { X } from 'lucide-react';
export interface Message {;
  id: string,;
  role: 'user' | 'assistant',;
  message: string,;
  timestamp: Date,;
  read?: boolean;
  const isGuest = !auth?.isAuthenticated;
            onClick = {onClose,}
                      onClick = {(,) => handleSendMessage(q),}
                    >
                onClick = {handleModalSendConfirm,}
      )}
    </div>;
  );



        </div>)}
    </div>);
}
}

}
