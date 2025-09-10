

import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { Button } from "@/components/ui/button";
origin/cursor/automate-test-improve-and-merge-code-2533

import { Send } from 'lucide-react'
interface ChatInputProps {

import React, {
  useState
  useRef
  useEffect
  FormEvent
  KeyboardEvent
} from 'react'
import { Button } from '@/components/ui/button'

interface ChatInputProps {
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
  onSend: (message: string) => void
disabled?: boolean
}export function ChatInput ({
  onSend, disabled = false
}: ChatInputProps) {'
  const [message, setMessage] = useState ('')
const inputRef = useRef<HTMLTextAreaElement> (null)
//Focus input when component mounts
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [ message, setMessage ] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {    // Focus input when component mounts
    inputRef.current?.focus() }, [])
    inputRef.current?.focus()
interface ChatInputProps {


interface ChatInputProps {;
  onSend: (message: string) => void,;
  disabled?: boolean;
}


  useEffect(() => {;
    // Focus input when component mounts;





        className='bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center'        on_change={(e) => set_message (e.target.value)}

        disabled={!message.trim() |disabled}



      />

      />

      >
        <Send className="h-5 w-5" />



      >
        <Send className="h-5 w-5" />

        disabled={!message.trim() || disabled}

        disabled={!message.trim() || disabled}


        disabled={!message.trim() || disabled}



}

        disabled={!message && message.trim() || disabled}>;
        <Send className='h-5 w-5' />;
      </Button>;
    </form>;
  );
}



<Button
        type='submit'
        className='bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center'
        disabled={!message.trim() |disabled}      >
        <Send className='h-5 w-5' />
      </Button>
    </form>
  );
      />;
      <Button ;
        type="submit" ;
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center";
        disabled={!message.trim() || disabled}
      >;
        <Send className="h-5 w-5" />;
      </Button>;
    </form>;
  ),;}
 import {;
  {;
  {;
  Send ;
}from 'lucide-react' interface ChatInputProps {;
  onSend: (message: string) => void;
disabled?: boolean ;
}export function ChatInput ({;
  onSend, disabled = false ;
}: ChatInputProps) {';
  const [message, setMessage] = useState ('');
const inputRef = useRef<HTMLTextAreaElement> (null);
//Focus input when component mounts ;
}
};
> <Send className="h-5 w-5" /> </Button> </form>) ;
}'"
}
