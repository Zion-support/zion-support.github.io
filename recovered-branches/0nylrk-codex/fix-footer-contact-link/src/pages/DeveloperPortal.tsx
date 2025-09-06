
<<<<<<< HEAD
<<<<<<< HEAD

import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {ApiKeysManager} from "@/components/developers/ApiKeysManager";
import {WebhooksManager} from "@/components/developers/WebhooksManager";
import {ApiDocumentation} from "@/components/developers/ApiDocumentation";
import {ApiLogs} from "@/components/developers/ApiLogs";
<<<<<<< HEAD
=======
=======
import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook} from "lucide-react";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
import { ApiLogs } from "@/components/developers/ApiLogs",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface TabDefinition {
  id: string
  label: string

  icon: LucideIcon
}
<<<<<<< HEAD
export function DeveloperPortal() {
=======
<<<<<<< HEAD
=======

interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
}

export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function DeveloperPortal() {
<<<<<<< HEAD
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<string>("documentation");

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<string>("documentation");

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
      {/* Tabs */}
      <div className="border - b border - zinc - 800 mb - 8">;
        <div className="flex flex - wrap -mb - px">;
          {tabs.map ((tab) => {
            const Icon = tab.icon;

  // Define the tabs;
  const tabs: TabDefinition[] = [;
    { id: "documentation", label: "Documentation", icon: BookOpen },;
    { id: "api-keys", label: "API Keys", icon: Key },;
    { id: "webhooks", label: "Webhooks", icon: Webhook },;
    { id: "logs", label: "Logs", icon: List }],;

  return (
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
          {tabs && tabs.map((tab) => {;
            const Icon = tab && tab.icon;
            return (
              <button
                key={tab && tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab && tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
<<<<<<< HEAD
                onClick={() => setActiveTab(tab && tab.id)}
              >;
                <Icon size={16} className="mr-2" />;
                {tab && tab.label}
              </button>;
            );
=======
                onClick={() => setActiveTab(tab.id)}
              >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            )
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          })}
        </div>
      </div>
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
<<<<<<< HEAD
export default function ProtectedDeveloperPortal() {
=======
<<<<<<< HEAD
export default function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
=======

;

export default function ProtectedDeveloperPortal() {;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
              <button;
                key={tab.id}
                className={`inline - flex items - center px - 4 py - 3 border - b-2 text - sm font - medium ${
                  active_tab === tab.id;
                    ? "text - white border - zion - purple";
                    : "text - zinc - 500 border - transparent hover:text - zinc - 400 hover:border - zinc - 700";
                }`}
                on_click={() => setActiveTab (tab.id)}
              >;
                <Icon size={16} className="mr - 2" />;
                {tab.label}
              </button>);
          })}
        </div>;
      </div>;
      {/* Tab content */}
      <div>;
        {active_tab === "documentation" && <ApiDocumentation />}
        {active_tab === "api - keys" && <ApiKeysManager />}
        {active_tab === "webhooks" && <WebhooksManager />}
        {active_tab === "logs" && <ApiLogs />}
      </div>;
    </div>);
}
export default /**
 * ProtectedDeveloperPortal - Function description
 */
function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>);
}
=======

;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
