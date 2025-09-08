
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",












  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: "documentation", label: "Documentation", icon: BookOpen }
    { id: "api-keys", label: "API Keys", icon: Key }
    { id: "webhooks", label: "Webhooks", icon: Webhook }
    { id: "logs", label: "Logs", icon: List }]



      {/* Tabs */}
"
      <div className="border-b border-zinc-800 mb-8">"









        <div className="flex flex-wrap -mb-px">;





            )


        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}

      </div>;
    </div>;

  );
}





