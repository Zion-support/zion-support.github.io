<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
<<<<<<< HEAD
import { ApiLogs } from "@/components/developers/ApiLogs",
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
=======
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
=======


  id: string;
  label: string;
  icon: LucideIcon;
}
import { useState } from "react";""
import { useAuth } from "@/hooks/useAuth";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {
  // TODO: Implement
}
  BookOpen,
  Code,
  Key,
  List,
  LucideIcon,
  Terminal,
<<<<<<< HEAD
  Webhook,
} from "lucide-react";

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";
import { WebhooksManager } from "@/components/developers/WebhooksManager";
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";
import { ApiLogs } from "@/components/developers/ApiLogs";
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
interface TabDefinition {
=======
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",
import { WebhooksManager } from "@/components/developers/WebhooksManager",
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",
import { ApiLogs } from "@/components/developers/ApiLogs",interface TabDefinition {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { ApiLogs } from "@/components/developers/ApiLogs",interface TabDefinition {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
interface TabDefinition {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  label: string;
  icon: LucideIcon;
pr-12325

<<<<<<< HEAD
interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export function DeveloperPortal() { return null; }
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState<string>("documentation");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======





=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
export function DeveloperPortal() {
=======
export function DeveloperPortal() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();

<<<<<<< HEAD
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState<string>("documentation");
=======
  const { user } = useAuth();
"
  const [activeTab, setActiveTab] = useState<string>("documentation");

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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


<<<<<<< HEAD
<<<<<<< HEAD
=======
            const Icon = tab.icon,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            const Icon = tab.icon,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            return (
=======
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
              return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
              return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <button
=======
            return (
              <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${}
                  activeTab === tab.id"
                    ? "text-white border-zion-purple""
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"`
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="border - b border - zinc - 800 mb-8">;
        <div className="flex flex - wrap -mb-px">;
          {tabs.map ((tab) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
                <Icon size={16} className="mr-2" />"
import { useState } from "react",;"
import { useAuth } from "@/hooks/useAuth",;
import {;
  BookOpen,;
  Code,;
  Key,;
  List,;
  LucideIcon,;
  Terminal,;
  Webhook;"
} from "lucide-react",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",;"
import { WebhooksManager } from "@/components/developers/WebhooksManager",;"
import { ApiDocumentation } from "@/components/developers/ApiDocumentation",;"
import { ApiLogs } from "@/components/developers/ApiLogs",;
interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
}
;
export function DeveloperPortal() { return null; }
  const { user } = useAuth(),;"
  const [activeTab, setActiveTab] = useState<string>("documentation"),;
"
      <div className="border - b border - zinc - 800 mb - 8">;"
        <div className="flex flex - wrap -mb - px">;
          {tabs.map ((tab) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======

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
    { id: "logs", label: "Logs", icon: List }];
  return (;
{ id: "logs", label: "Logs", icon: List }];
  return (;
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">;
      <div className="mb-8">;
        <h1 className="text-3xl font-bold text-white flex items-center">;
          <Terminal className="mr-3" size={32} />;
          Developer Portal;
        </h1>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <p className="text-zinc-400 mt-2">;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;
<<<<<<< HEAD
      {/* Tabs */}"
      <div className="border-b border-zinc-800 mb-8">;"
=======
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
                key={tab.id}`
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab.id;"
                    ? "text-white border-zion-purple";"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";`
=======
                key={tab.id}
<<<<<<< HEAD
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab.id;
                    ? "text-white border-zion-purple";
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id;"
                    ? "text-white border-zion-purple"""
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700""`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                }`}
                onClick={() => setActiveTab(tab.id)}
              >

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Icon size={16} className="mr-2" />
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                <Icon size={16} className="mr-2" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

<<<<<<< HEAD

=======
      {/* Tab content */}
      <div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {tabs && tabs.map((tab) => {;
            const Icon = tab && tab.icon;
            return (
      {/* Tab content */}
      <div>;
<<<<<<< HEAD
"
        {activeTab === "documentation" && <ApiDocumentation />}"
        {activeTab === "api-keys" && <ApiKeysManager />}"
        {activeTab === "webhooks" && <WebhooksManager />}"
=======
          })}
        </div>
      </div>
      {/* Tab content */}
      <div>
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        {activeTab === "logs" && <ApiLogs />}
      </div>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default function ProtectedDeveloperPortal() {
=======

;

export default function ProtectedDeveloperPortal() {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  )
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934







>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;

export default function ProtectedDeveloperPortal() { return null; }
}
<<<<<<< HEAD
<<<<<<< HEAD

;
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
=======
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
<<<<<<< HEAD
              >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Icon size={16} className="mr - 2" />;
                {tab.label}
=======
                <Icon size={16} className="mr - 2" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </button>);
        </div>;
<<<<<<< HEAD
      </div>;
      {/* Tab content */}
<<<<<<< HEAD
      <div>;"
        {active_tab === "documentation" && <ApiDocumentation />}"
        {active_tab === "api - keys" && <ApiKeysManager />}"
        {active_tab === "webhooks" && <WebhooksManager />}"
=======
      <div>;
        {active_tab === "documentation" && <ApiDocumentation />}
        {active_tab === "api - keys" && <ApiKeysManager />}
        {active_tab === "webhooks" && <WebhooksManager />}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        {active_tab === "logs" && <ApiLogs />}
      </div>;
    </div>);
}
<<<<<<< HEAD
export default /**;
 * ProtectedDeveloperPortal - Function description;
 */
function ProtectedDeveloperPortal() {}
=======
export default /**
 * ProtectedDeveloperPortal - Function description
 */
function ProtectedDeveloperPortal() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
=======
        {active_tab === "documentation" && <ApiDocumentation />}"
        {active_tab === "api - keys" && <ApiKeysManager />}"
        {active_tab === "webhooks" && <WebhooksManager />}"
        {active_tab === "logs" && <ApiLogs />}"

    </div>);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <ProtectedRoute>;

      <DeveloperPortal />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            const Icon = tab.icon;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            const Icon = tab.icon;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    );




    ;"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
