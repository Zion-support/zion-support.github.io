<<<<<<< HEAD
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
=======
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface TabDefinition {
  id: string;
  label: string;
  icon: LucideIcon;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
}

export function DeveloperPortal() {;

  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");

=======





=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
export function DeveloperPortal() {
  const { user } = useAuth();

  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<string>("documentation");


  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
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
      {/* Tabs */}
=======

      {/* Tabs */}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {

            const Icon = tab.icon,

<<<<<<< HEAD
=======
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            const Icon = tab.icon,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            return (
              <button
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <Icon size={16} className="mr-2" />
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
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <div className="border - b border - zinc - 800 mb - 8">;
        <div className="flex flex - wrap -mb - px">;
          {tabs.map ((tab) => {
            const Icon = tab.icon;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Define the tabs;
  const tabs: TabDefinition[] = [;
    { id: "documentation", label: "Documentation", icon: BookOpen },;
    { id: "api-keys", label: "API Keys", icon: Key },;
    { id: "webhooks", label: "Webhooks", icon: Webhook },;
<<<<<<< HEAD
    { id: "logs", label: "Logs", icon: List }];
  return (;
=======
<<<<<<< HEAD
<<<<<<< HEAD
    { id: "logs", label: "Logs", icon: List }],;

  return (
=======
    { id: "logs", label: "Logs", icon: List }];
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    { id: "logs", label: "Logs", icon: List }];
  return (;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            )
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
              >
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            );
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          })}
        </div>
      </div>

<<<<<<< HEAD
        </div>;
      </div>;


=======
<<<<<<< HEAD
      {/* Tab content */}
      <div>;
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          {tabs && tabs.map((tab) => {;
            const Icon = tab && tab.icon;
            return (
      {/* Tab content */}
      <div>;
<<<<<<< HEAD
          })}
        </div>
      </div>
      {/* Tab content */}
      <div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
<<<<<<< HEAD
=======
      </div>
    </div>
  );
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


;

export default function ProtectedDeveloperPortal() {;
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

;
;


<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
