


      

      console.error("Error in AI chat:", error);
      return Promise.resolve()

import {useState} from "react";
import {MessageSquare} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ChatAssistant} from "@/components/ChatAssistant";


    }
  }



        size="icon";
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;


      {isOpen && (;
        <ChatAssistant
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant',;
            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Virtual Assistant';





    </>;
  );
}


;

