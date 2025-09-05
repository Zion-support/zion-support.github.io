
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
=======
import { useState } from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  BookOpen,
  Code, 
  Key, 
  List, 
  LucideIcon, 
  Terminal, 
  Webhook 
<<<<<<< HEAD
} from "lucide-react",
=======
} from &quot;lucide-react&quot;;

import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { ApiKeysManager } from &quot;@/components/developers/ApiKeysManager&quot;;
import { WebhooksManager } from &quot;@/components/developers/WebhooksManager&quot;;
import { ApiDocumentation } from &quot;@/components/developers/ApiDocumentation&quot;;
import { ApiLogs } from &quot;@/components/developers/ApiLogs&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
import { ApiLogs } from "@/components/developers/ApiLogs",
interface TabDefinition {
  id: string,
  label: string,
  icon: LucideIcon
}

export function DeveloperPortal() {
<<<<<<< HEAD
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],
=======
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>(&quot;documentation&quot;);
  
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: &quot;documentation&quot;, label: &quot;Documentation&quot;, icon: BookOpen },
    { id: &quot;api-keys&quot;, label: &quot;API Keys&quot;, icon: Key },
    { id: &quot;webhooks&quot;, label: &quot;Webhooks&quot;, icon: Webhook },
    { id: &quot;logs&quot;, label: &quot;Logs&quot;, icon: List }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;w-full max-w-7xl mx-auto p-4 md:p-8&quot;>
      <div className=&quot;mb-8&quot;>
        <h1 className=&quot;text-3xl font-bold text-white flex items-center&quot;>
          <Terminal className=&quot;mr-3&quot; size={32} />
          Developer Portal
        </h1>
        <p className=&quot;text-zinc-400 mt-2&quot;>
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
      
      {/* Tabs */}
      <div className=&quot;border-b border-zinc-800 mb-8&quot;>
        <div className=&quot;flex flex-wrap -mb-px&quot;>
          {tabs.map((tab) => {
            const Icon = tab.icon,
            return (
              <button
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? &quot;text-white border-zion-purple&quot;
                    : &quot;text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700&quot;
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className=&quot;mr-2&quot; />
=======
import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import {;
  BookOpen,;
  Code,;
  Key,;
  List,;
  LucideIcon,;
  Terminal,;
  Webhook;
} from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",;
import { WebhooksManager } from "@/components/developers/WebhooksManager",;
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",;
import { ApiLogs } from "@/components/developers/ApiLogs",;
interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
}
;
export function DeveloperPortal() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState<string>("documentation"),;
  // Define the tabs;
  const tabs: TabDefinition[] = [;
    { id: "documentation", label: "Documentation", icon: BookOpen },;
    { id: "api-keys", label: "API Keys", icon: Key },;
    { id: "webhooks", label: "Webhooks", icon: Webhook },;
    { id: "logs", label: "Logs", icon: List }];
  return (;
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">;
      <div className="mb-8">;
        <h1 className="text-3xl font-bold text-white flex items-center">;
          <Terminal className="mr-3" size={32} />;
          Developer Portal;
        </h1>;
        <p className="text-zinc-400 mt-2">;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">;
        <div className="flex flex-wrap -mb-px">;
          {tabs.map((tab) => {;
            const Icon = tab.icon;
            return (;
              <button;
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab.id;
                    ? "text-white border-zion-purple";
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";
                }`}
                onClick={() => setActiveTab(tab.id)}
              >;
                <Icon size={16} className="mr-2" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {tab.label}
              </button>;
            );
          })}
        </div>;
      </div>;
      {/* Tab content */}
<<<<<<< HEAD
      <div>
        {activeTab === &quot;documentation&quot; && <ApiDocumentation />}
        {activeTab === &quot;api-keys&quot; && <ApiKeysManager />}
        {activeTab === &quot;webhooks&quot; && <WebhooksManager />}
        {activeTab === &quot;logs&quot; && <ApiLogs />}
      </div>
    </div>
  )
=======
      <div>;
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export default function ProtectedDeveloperPortal() {;
  return (;
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
}
;