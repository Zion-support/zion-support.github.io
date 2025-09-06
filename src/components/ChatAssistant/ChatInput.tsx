
import React, {
  useState
  useRef
  useEffect
  FormEvent
  KeyboardEvent
} from 'react'
import { Button } from '@/components/ui/button'

import { Send } from 'lucide-react'
interface ChatInputProps {

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}

        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />

=======
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}


        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />

      <Button 
        type="submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
        disabled={!message.trim() || disabled}

      >
        <Send className="h-5 w-5" />


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      </Button>
    </form>
  )
}

      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  )
}
<<<<<<< HEAD
