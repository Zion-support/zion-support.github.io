
=======
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { 
  BookOpen,
  Code, 
  Key, 
  List, 
  LucideIcon, 
  Terminal, 
  Webhook 
} from "lucide-react",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
import { ApiLogs } from "@/components/developers/ApiLogs",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
export function DeveloperPortal() {
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<string>("documentation");

  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: "documentation", label: "Documentation", icon: BookOpen }
    { id: "api-keys", label: "API Keys", icon: Key }
    { id: "webhooks", label: "Webhooks", icon: Webhook }
    { id: "logs", label: "Logs", icon: List }]
  return (

    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Terminal className="mr-3" size={32} />
          Developer Portal
        </h1>
        <p className="text-zinc-400 mt-2">
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
=======
import { useState } from './react';
import { use_auth } from '@/hooks / use_auth';
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from './lucide-react';
;
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { ApiKeysManager } from '@/components / developers / ApiKeysManager';
import { WebhooksManager } from '@/components / developers / WebhooksManager';
import { ApiDocumentation } from '@/components / developers / ApiDocumentation';
import { ApiLogs } from '@/components / developers / ApiLogs';
interface TabDefinition {
  id: string,
  label: string,
  icon: LucideIcon;
}
export /**
 * DeveloperPortal - Function description
 */
function DeveloperPortal() {
  const { user } = use_auth ();
  const [active_tab, setActiveTab] = useState < string>("documentation");
;
  // Define the tabs;
  const tabs: TabDefinition[] = [;
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api - keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],
  return (
    <div className="w - full max - w-7xl mx - auto p - 4 md:p - 8">;
      <div className="mb - 8">;
        <h1 className="text - 3xl font - bold text - white flex items - center">;
          <Terminal className="mr - 3" size={32} />;
          Developer Portal;
        </h1>;
        <p className="text - zinc - 400 mt - 2">;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Tabs */}

=======
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;

=======
            const Icon = tab.icon,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <Icon size={16} className="mr-2" />
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                {tab.label}
              </button>
            )
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          })}

        </div>;
      </div>;


      {/* Tab content */}
      <div>;
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
      </div>;
    </div>;
  );
}
=======
<<<<<<< HEAD
export default function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  )
}
;

export default function ProtectedDeveloperPortal() {;
  return (
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
}

;
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
