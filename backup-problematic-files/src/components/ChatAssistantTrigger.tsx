import { useState } from "react",;

import { MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";""
import { ChatAssistant } from "@/components/ChatAssistant";""
import {logErrorToProduction} from '@/utils/productionLogger';
;
export function ChatAssistantTrigger() {;
  const [isOpen, setIsOpen] = useState(false),;
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message:string):Promise<void> => {;
</void>
    <>;
      <Button;
        onClick={() => setIsOpen(true)}

        size="icon";
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;

        <ChatAssistant;
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}

    </>;
  ),; export function ChatAssistantTrigger () {;
  const [isOpen, setIsOpen] = useState (false);
try {;
}return Promise.resolve () ;
}catch (error) {;"
  logErrorToProduction ('Error in AI chat: ';, {;
  data: error ;)
});
return Promise.resolve () ;
}
};
return (<> <Button > <MessageSquare className="h-5 w-5" />  {;"
  isOpen && (<ChatAssistant isOpen= {;
  isOpen ;
}onClose= {;)
  () => setIsOpen (false) ;
<<<<<<< HEAD

}</>) ;
=======
<<<<<<< HEAD

}</>) ;
=======
}recipient= {;
  {';
  id: 'ai-assistant', name: 'AI Assistant',  avatarUrl: 'https://placehold.co/64x64?text=AI', role: 'Virtual Assistant' ;
}
}onSendMessage= {;
  handleSendMessage ;
}/>) ;
}</>) ;
<<<<<<< HEAD
}'"
=======
}'"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
