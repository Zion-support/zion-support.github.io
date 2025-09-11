

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
import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook} from "lucide-react";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
import { ApiLogs } from "@/components/developers/ApiLogs",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TabDefinition {
  id: string
  label: string

  icon: LucideIcon
}
<<<<<<< HEAD

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
export function DeveloperPortal() {
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<string>("documentation");
<<<<<<< HEAD

  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
=======
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
}

export function DeveloperPortal() {;

  const { user } = useAuth();
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {

            const Icon = tab.icon,

<<<<<<< HEAD
      {/* Tabs */}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Tabs */}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            const Icon = tab.icon,
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      <div className="border - b border - zinc - 800 mb - 8">;
        <div className="flex flex - wrap -mb - px">;
          {tabs.map ((tab) => {
            const Icon = tab.icon;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Define the tabs;
  const tabs: TabDefinition[] = [;
    { id: "documentation", label: "Documentation", icon: BookOpen },;
    { id: "api-keys", label: "API Keys", icon: Key },;
    { id: "webhooks", label: "Webhooks", icon: Webhook },;
<<<<<<< HEAD
<<<<<<< HEAD
    { id: "logs", label: "Logs", icon: List }];
  return (;
=======
    { id: "logs", label: "Logs", icon: List }],;

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    { id: "logs", label: "Logs", icon: List }],;

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">;
        <div className="flex flex-wrap -mb-px">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">;
        <div className="flex flex-wrap -mb-px">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            )
<<<<<<< HEAD
<<<<<<< HEAD
          {tabs && tabs.map((tab) => {;
            const Icon = tab && tab.icon;
            return (
        </div>;
      </div>;

import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { ;
  BookOpen,;
  Code, ;
  Key, ;
  List, ;
  LucideIcon, ;
  Terminal, ;
  Webhook ;
} from "lucide-react",;
;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",;
import { WebhooksManager } from "@/components/developers/WebhooksManager",;
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",;
import { ApiLogs } from "@/components/developers/ApiLogs",;
;
interface TabDefinition {;
  id:string,;
  label:string,;
  icon:LucideIcon;
}
;
export function DeveloperPortal() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState<string>("documentation"),;
  ;
  // Define the tabs;
  const tabs:TabDefinition[] = [;
    { id:"documentation", label:"Documentation", icon:BookOpen },;
    { id:"api-keys", label:"API Keys", icon:Key },;
    { id:"webhooks", label:"Webhooks", icon:Webhook },;
    { id:"logs", label:"Logs", icon:List }],;
;
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
      ;
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">;
        <div className="flex flex-wrap -mb-px">;
          {tabs.map((tab) => {;
            const Icon = tab.icon,;
            return (;
              <button;
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab.id;
                    ? "text-white border-zion-purple";
                    :"text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";
                }`}
                onClick={() => setActiveTab(tab.id)}
              >;
                <Icon size={16} className="mr-2" />;
                {tab.label}
              </button>;
            ),;
          })}
        </div>;
      </div>;
      ;
      {/* Tab content */}
      <div>;
          })}
        </div>
      </div>
      {/* Tab content */}
      <div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          })}

        </div>;
      </div>;


      {/* Tab content */}
      <div>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======


=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;

export default function ProtectedDeveloperPortal() {;
  return (
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
