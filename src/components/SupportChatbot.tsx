import { useState, useRef, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessage, ChatInput } from "@/components/ChatAssistant";
}catch () {//ignore parse errors}'
}{messages.map (m => (<ChatMessage key= {
  m.id}role= {m.role}message= {m.message}/>) )
})
}<div ref= {endRef}/> </div> </div> </div>)