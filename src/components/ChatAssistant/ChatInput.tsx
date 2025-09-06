
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
