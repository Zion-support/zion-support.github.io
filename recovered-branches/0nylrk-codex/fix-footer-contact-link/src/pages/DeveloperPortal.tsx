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

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
import { ApiLogs } from "@/components/developers/ApiLogs",
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
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

import {
  // TODO: Implement
}
  BookOpen,
  Code,
  Key,
  List,
  LucideIcon,
  Terminal,
Webhook,
} from "lucide-react";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";
import { WebhooksManager } from "@/components/developers/WebhooksManager";
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";
import { ApiLogs } from "@/components/developers/ApiLogs";
interface TabDefinition {
import { useState } from "react";"
import { useAuth } from "@/hooks/useAuth";
import {}
  BookOpen,
  Code,
  Key,
  List,
  LucideIcon,
  Terminal,
  Webhook,";
} from "lucide-react";
"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";"
import { WebhooksManager } from "@/components/developers/WebhooksManager";"
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";"
import { ApiLogs } from "@/components/developers/ApiLogs";
interface TabDefinition {}
interface TabDefinition {
  id: string;
  Webhook,"
} from "lucide-react";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";""
import { WebhooksManager } from "@/components/developers/WebhooksManager";""
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";""
import { ApiLogs } from "@/components/developers/ApiLogs";"
interface TabDefinition {
  // TODO: Implement
  id: string;,
  label: string;
  icon: LucideIcon;
pr-12325

interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
}

export function DeveloperPortal() { return null; }
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState<string>("documentation");

export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
export function DeveloperPortal() {
export function DeveloperPortal() {};
  const { user } = useAuth();

const [activeTab, setActiveTab] = useState<string>("documentation");

  const { user } = useAuth(),"
  const [activeTab, setActiveTab] = useState<string>("documentation"),

  // Define the tabs;
  const tabs: TabDefinition[] = ["
    { id: "documentation", label: "Documentation", icon: BookOpen },"
    { id: "api-keys", label: "API Keys", icon: Key },"
    { id: "webhooks", label: "Webhooks", icon: Webhook },"
    { id: "logs", label: "Logs", icon: List },
  ];

  return (
"
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">"
      <div className="mb-8">"
        <h1 className="text-3xl font-bold text-white flex items-center">"
          <Terminal className="mr-3" size={32} />
          Developer Portal;
        </h1>"
        <p className="text-zinc-400 mt-2">
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>

      {/* Tabs */}
"
      <div className="border-b border-zinc-800 mb-8">"
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {}
            const Icon = tab.icon,

            return (
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
              return (
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
              return (

  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),

  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List },
  ];

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

      {/* Tabs */}

      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {

            const Icon = tab.icon,

            return (
              <button
            return (
              <button;
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${}
                  activeTab === tab.id"
                    ? "text-white border-zion-purple""
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"`
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
<div className="border - b border - zinc - 800 mb-8">;
        <div className="flex flex - wrap -mb-px">;
          {tabs.map ((tab) => {
            const Icon = tab.icon;

  // Define the tabs;
  const tabs: TabDefinition[] = [;"
    { id: "documentation", label: "Documentation", icon: BookOpen },;"
    { id: "api-keys", label: "API Keys", icon: Key },;"
    { id: "webhooks", label: "Webhooks", icon: Webhook },;

"
    { id: "logs", label: "Logs", icon: List }];
  return (;
"
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">;"
      <div className="mb-8">;"
        <h1 className="text-3xl font-bold text-white flex items-center">;"
          <Terminal className="mr-3" size={32} />;
          Developer Portal;
        </h1>;"
        <p className="text-zinc-400 mt-2">;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;
{/* Tabs */}"
      <div className="border-b border-zinc-800 mb-8">;"
        <div className="flex flex-wrap -mb-px">;

          {tabs.map((tab) => {;
            const Icon = tab.icon;
            return (;
      <div className="border - b border - zinc - 800 mb-8">;
        <div className="flex flex - wrap -mb-px">;
          {tabs.map ((tab) => {
            const Icon = tab.icon;

export function DeveloperPortal() {;

  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState<string>("documentation");"
</string>"
  const [activeTab, setActiveTab] = useState<string>("documentation"),"
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">"
</div>"
      <div className="mb-8">"
        <h1 className="text-3xl font-bold text-white flex items-center">"
</h1>"
          <Terminal className="mr-3" size={32} />"

        <p className="text-zinc-400 mt-2">"
</p>
      <div className="border-b border-zinc-800 mb-8">"
        <div className="flex flex-wrap -mb-px">"
</div>
              <button;
key={tab.id}`
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab.id;"
                    ? "text-white border-zion-purple";"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";`
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id;"
                    ? "text-white border-zion-purple"""
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700""`;
                }`}
                onClick={() => setActiveTab(tab.id)}
              >

"
                <Icon size={16} className="mr-2" />
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

          {tabs && tabs.map((tab) => {;
            const Icon = tab && tab.icon;
            return (
      {/* Tab content */}
      <div>;
"
        {activeTab === "documentation" && <ApiDocumentation />}"
        {activeTab === "api-keys" && <ApiKeysManager />}"
        {activeTab === "webhooks" && <WebhooksManager />}"
        {activeTab === "logs" && <ApiLogs />}
      </div>
    </div>
  );
}
return (
</button>"
                <Icon size={16} className="mr-2" />"
"
  const [activeTab, setActiveTab] = useState<string>("documentation"),;"
      <div className="border - b border - zinc - 800 mb - 8">;"
        <div className="flex flex - wrap -mb - px">;"
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">;"
      <div className="mb-8">;"
        <h1 className="text-3xl font-bold text-white flex items-center">;"
          <Terminal className="mr-3" size={32} />;"

        </h1>;"
        <p className="text-zinc-400 mt-2">;"
        </p>;
      </div>;"
      <div className="border-b border-zinc-800 mb-8">;"
        <div className="flex flex-wrap -mb-px">;"
                key={tab.id}`;
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                    ? "text-white border-zion-purple";""
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";"`;

              </button>
      <div>;
      <div>
        {activeTab === "documentation" && <ApiDocumentation />}"
        {activeTab === "api-keys" && <ApiKeysManager />}"
        {activeTab === "webhooks" && <WebhooksManager />}"
        {activeTab === "logs" && <ApiLogs />}"

    <ProtectedRoute>

      <DeveloperPortal />
    </ProtectedRoute>
)
}

;

export default function ProtectedDeveloperPortal() { return null; }
}
;
;

;
;

              <button;
                key={tab.id}`
                className={`inline - flex items - center px - 4 py - 3 border - b-2 text - sm font - medium ${}
                  active_tab === tab.id;"
                    ? "text - white border - zion - purple";"
                    : "text - zinc - 500 border - transparent hover:text - zinc - 400 hover:border - zinc - 700";`
                }`}
                on_click={() => setActiveTab (tab.id)}
              >;"
  );
}

;
;

              <button;
                key={tab.id}

                className={`inline - flex items - center px - 4 py - 3 border - b-2 text - sm font - medium ${
                  active_tab === tab.id;"
                    ? "text - white border - zion - purple";""
                    : "text - zinc - 500 border - transparent hover:text - zinc - 400 hover:border - zinc - 700";"`;
                on_click={() => setActiveTab (tab.id)}
>;
                <Icon size={16} className="mr - 2" />;
                {tab.label}
              </button>);
        </div>;
</div>;
      {/* Tab content */}
<div>;"
        {active_tab === "documentation" && <ApiDocumentation />}"
        {active_tab === "api - keys" && <ApiKeysManager />}"
        {active_tab === "webhooks" && <WebhooksManager />}"
        {active_tab === "logs" && <ApiLogs />}
      </div>;
    </div>);
}
export default /**;
 * ProtectedDeveloperPortal - Function description;
 */
function ProtectedDeveloperPortal() {}
  return (
    <ProtectedRoute>;

      <DeveloperPortal />;
    </ProtectedRoute>);
}
  ),;
}
      </div>
    </div>
  )
}
export default function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  )
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
;
            const Icon = tab.icon;

"`

    );

    ;"`;
pr-12325
