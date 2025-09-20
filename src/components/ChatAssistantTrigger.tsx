
import { useState,  } from "react",
import { MessageSquare,  } from 'lucide-react'
import { Button,  } from "@/components/ui/button",
import { ChatAssistant,  } from "@/components/ChatAssistant";
import { logErrorToProduction } from '@/utils/productionLogger';
export function ChatAssistantTrigger() {
role: 'Virtual Assistant'
          }}
          onSendMessage = {handleSendMessage,}
        />
      )}
    </>
  )
}