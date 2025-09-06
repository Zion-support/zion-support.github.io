import React, {
  useState
  useRef
  useEffect
  FormEvent
  KeyboardEvent
} from 'react'
import { Button } from '@/components/ui/button'
=======
=======
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Send } from 'lucide-react'
interface ChatInputProps {

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        ref={inputRef}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
