import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatAssistant } from '@/components/ChatAssistant';
import { logErrorToProduction } from '@/utils/productionLogger';

import { useState } from "react",
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { ChatAssistant } from "@/components/ChatAssistant";
import {logErrorToProduction} from '@/utils/productionLogger';
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false);
  // Handle sending messages to the AI chat assistant
  const handleSendMessage = null;
            role: 'Virtual Assistant'
          }}
          onSendMessage = {handleSendMessage,}
        />
      )}
    </>
  );

};
return (<> <Button > <MessageSquare className="h-5 w-5" /> </Button> {;
  isOpen && (<ChatAssistant isOpen= {;
  isOpen ;
}onClose= {;
  () => setIsOpen (false) ;
}recipient= {;
  {';
  id: 'ai-assistant', name: 'AI Assistant',  avatarUrl: 'https://placehold.co/64x64?text=AI', role: 'Virtual Assistant' ;

}onSendMessage= {;
  handleSendMessage ;
}/>) ;
}</>) ;
}'"
