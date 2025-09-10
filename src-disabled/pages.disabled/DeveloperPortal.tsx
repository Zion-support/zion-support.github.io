
import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react';
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",;
import { WebhooksManager } from "@/components/developers/WebhooksManager",;
  const tabs: TabDefinition[] = [;


      <div className="border-b border-zinc-800 mb-8">;
        <div className="flex flex-wrap -mb-px">;
          {tabs.map((tab) => {;
            const Icon = tab.icon;
            return (;
              <button;
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab.id;






}
}
  )
}
;

};
};
  );
};



