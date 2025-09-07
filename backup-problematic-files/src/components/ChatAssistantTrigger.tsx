
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState } from "react",;
=======
import { useState } from "react";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        size="icon";
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
      ;
      {isOpen && (;
=======

        <MessageSquare className="h-5 w-5" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

}</>) ;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
