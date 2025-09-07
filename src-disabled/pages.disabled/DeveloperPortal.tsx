<<<<<<< HEAD:src-disabled/pages.disabled/DeveloperPortal.tsx


import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
=======
<<<<<<< HEAD

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import {
  BookOpen
  Code
  Key
  List
  LucideIcon
  Terminal
  Webhook
} from 'lucide-react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { ApiKeysManager } from '@/components/developers/ApiKeysManager'
import { WebhooksManager } from '@/components/developers/WebhooksManager'
import { ApiDocumentation } from '@/components/developers/ApiDocumentation'
import { ApiLogs } from '@/components/developers/ApiLogs'

interface TabDefinition {
  id: string;
  label: string;
  icon: LucideIcon
export function DeveloperPortal() {
  const { user } = useAuth();
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [


<<<<<<< HEAD
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],


  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Terminal className="mr-3" size={32} />

          Developer Portal
        </h1>
        <p className='text-zinc-400 mt-2'>
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>


import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";
import { WebhooksManager } from "@/components/developers/WebhooksManager";
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";
import { ApiLogs } from "@/components/developers/ApiLogs";
  const { user } = useAuth();
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<string>('documentation')
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'api-keys', label: 'API Keys', icon: Key },
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'logs', label: 'Logs', icon: List },
  ]

import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react'

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
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
  
  // Define the tabs
  const tabs: TabDefinition[] = [
  
  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: 'documentation', label: 'Documentation', icon: BookOpen }
    { id: 'api-keys', label: 'API Keys', icon: Key }
    { id: 'webhooks', label: 'Webhooks', icon: Webhook }
    { id: 'logs', label: 'Logs', icon: List }
  ]
  return (

    <div className='w-full max-w-7xl mx-auto p-4 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-white flex items-center'>
          <Terminal className='mr-3' size={32} />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Terminal className="mr-3" size={32} />
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          Developer Portal
        </h1>
        <p className="text-zinc-400 mt-2">
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
<<<<<<< HEAD
      {/* Tabs */}
      <div className='border-b border-zinc-800 mb-8'>
        <div className='flex flex-wrap -mb-px'>
          {tabs.map(tab => {
            const Icon = tab.icon
                onClick={() => setActiveTab(tab.id)}                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${

                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
                onClick = {(,) => setActiveTab(tab.id),}
              >
                <Icon size={16} className='mr-2' />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
      {/* Tab content */}
      <div>
        {activeTab === 'documentation' && <ApiDocumentation />}
        {activeTab === 'api-keys' && <ApiKeysManager />}
        {activeTab === 'webhooks' && <WebhooksManager />}
        {activeTab === 'logs' && <ApiLogs />}
      </div>
    </div>
  )
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
      {/* Tab content */}
      <div>
=======


import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/DeveloperPortal.tsx
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react'

import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { ApiKeysManager } from "@/components/developers/ApiKeysManager",;
import { WebhooksManager } from "@/components/developers/WebhooksManager",;
import { ApiDocumentation } from "@/components/developers/ApiDocumentation";
import { ApiLogs } from "@/components/developers/ApiLogs";
origin/cursor/automate-test-improve-and-merge-code-2533
import {
  BookOpen
  Code
  Key
  List
  LucideIcon
  Terminal
  Webhook
} from 'lucide-react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { ApiKeysManager } from '@/components/developers/ApiKeysManager'
import { WebhooksManager } from '@/components/developers/WebhooksManager'
import { ApiDocumentation } from '@/components/developers/ApiDocumentation'
import { ApiLogs } from '@/components/developers/ApiLogs'

origin/cursor/automate-test-improve-and-merge-code-2533
interface TabDefinition {
  id: string;
  label: string;
  icon: LucideIcon
export function DeveloperPortal() {


import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ApiKeysManager } from "@/components/developers/ApiKeysManager";
import { WebhooksManager } from "@/components/developers/WebhooksManager";

import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",

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
export function DeveloperPortal() { const { user  } = useAuth(),
  const [ activeTab, setActiveTab ] = useState<string>("documentation"),"
  // Define the tabs
  const tabs: TabDefinition[] = [,
    { id: "documentation", label: "Documentation", icon: BookOpen },"
    { id: "api-keys", label: "API Keys", icon: Key },"
    { id: "webhooks", label: "Webhooks", icon: Webhook },"
    { id: "logs", label: "Logs", icon: List }],"
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">"
      <div className="mb-8">"
        <h1 className="text-3xl font-bold text-white flex items-center">"
          <Terminal className="mr-3" size={32} />"
          Developer Portal
        </h1>
        <p className="text-zinc-400 mt-2">"
          Access the Zion API, manage your API keys, and set up webhooks.
        </p>
      </div>
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">"
        <div className="flex flex-wrap -mb-px">"

export function DeveloperPortal() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),

  // Define the tabs
  const tabs: TabDefinition[] = [
    { id: "documentation", label: "Documentation", icon: BookOpen },
    { id: "api-keys", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Webhook },
    { id: "logs", label: "Logs", icon: List }],

  return (


    <div className;
            return (
              <button
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${

                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
                onClick = {(,) => setActiveTab(tab.id),}
              >
                <Icon size={16} className='mr-2' />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
<<<<<<< HEAD:src-disabled/pages.disabled/DeveloperPortal.tsx
      {/* Tab content */}
      <div>
        {activeTab === 'documentation' && <ApiDocumentation />}
        {activeTab === 'api-keys' && <ApiKeysManager />}
        {activeTab === 'webhooks' && <WebhooksManager />}
        {activeTab === 'logs' && <ApiLogs />}
      </div>
    </div>
  )
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
      {/* Tab content */}
      <div>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/DeveloperPortal.tsx
      {/* Tabs */}
      <div className="border-b border-zinc-800 mb-8">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon,
            return (
              <button
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${`
                  activeTab === tab.id
                    ? "text-white border-zion-purple""
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"",
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
import { useState } from 'react';
import { use_auth } from '@/hooks / use_auth';
  BookOpen,
  Code,
  Key,
  List,
  LucideIcon,
  Terminal,
  Webhook,
} from 'lucide-react';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { ApiKeysManager } from '@/components / developers / ApiKeysManager';
import { WebhooksManager } from '@/components / developers / WebhooksManager';
import { ApiDocumentation } from '@/components / developers / ApiDocumentation';
import { ApiLogs } from '@/components / developers / ApiLogs';
interface TabDefinition {
  id: string;,
  label: string;,
  icon: LucideIcon;,
  id: string;
  label: string;
  icon: LucideIcon;
export /**
 * DeveloperPortal - Function description
 */
function DeveloperPortal() {
  const { user } = use_auth ();,
  const [active_tab, setActiveTab] = useState < string>('documentation');
  // Define the tabs;
  const tabs: TabDefinition[] = [;,
    { id: 'documentation', label: 'Documentation', icon: BookOpen },'
    { id: 'api - keys', label: 'API Keys', icon: Key },'
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },'
    { id: 'logs', label: 'Logs', icon: List },'
  const { user } = use_auth ();
  // Define the tabs;
  const tabs: TabDefinition[] = [;
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'api - keys', label: 'API Keys', icon: Key },
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'logs', label: 'Logs', icon: List },
  ];
  return (
    <div className='w - full max - w-7xl mx - auto p - 4 md:p - 8'>;
      <div className='mb - 8'>;
        <h1 className='text - 3xl font - bold text - white flex items - center'>;
          <Terminal className='mr - 3' size={32} />;
          Developer Portal;
        </h1>;
        <p className='text - zinc - 400 mt - 2'>;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;
      {/* Tabs */}
      <div className='border - b border - zinc - 800 mb - 8'>;
        <div className='flex flex - wrap -mb - px'>;
          {tabs.map (tab => {
            const Icon = tab.icon;
                on_click={() => setActiveTab (tab.id)}                className={`inline - flex items - center px - 4 py - 3 border - b-2 text - sm font - medium ${`
                  active_tab === tab.id;
                    ? "text - white border - zion - purple";
                    : "text - zinc - 500 border - transparent hover:text - zinc - 400 hover:border - zinc - 700";
<<<<<<< HEAD:src-disabled/pages.disabled/DeveloperPortal.tsx
                }`}`
                on_click = {(, ) => setActiveTab (tab.id), }
              >;
                <Icon size={16} className='mr - 2' />;
                {tab.label}
              </button>);
          })}
import { useAuth } from '@/hooks/useAuth';
import {;
  BookOpen,;
  Code,;
  Key,;
  List,;
  LucideIcon,;
  Terminal,;
  Webhook,;
} from 'lucide-react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ApiKeysManager } from '@/components/developers/ApiKeysManager';
import { WebhooksManager } from '@/components/developers/WebhooksManager';
import { ApiDocumentation } from '@/components/developers/ApiDocumentation';
import { ApiLogs } from '@/components/developers/ApiLogs';
interface TabDefinition {;
  id: string;,
  label: string;,
  icon: LucideIcon;,
export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('documentation');
  // Define the tabs;
    { id: 'documentation', label: 'Documentation', icon: BookOpen },;
    { id: 'api-keys', label: 'API Keys', icon: Key },;
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },;
    { id: 'logs', label: 'Logs', icon: List },;
  ];
  return (
    <div className='w-full max-w-7xl mx-auto p-4 md:p-8'>;
      <div className='mb-8'>;
        <h1 className='text-3xl font-bold text-white flex items-center'>;
          <Terminal className='mr-3' size={32} />;
          Developer Portal;
        </h1>;
        <p className='text-zinc-400 mt-2'>;
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-white border-zion-purple"
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className="mr-2" />
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react';
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
=======
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className="mr-2" />
import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook } from 'lucide-react';
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/DeveloperPortal.tsx
        <p className="text-zinc-400 mt-2">;
          Access the Zion API, manage your API keys, and set up webhooks.;
        </p>;
      </div>;
      {/* Tabs */}
<<<<<<< HEAD:src-disabled/pages.disabled/DeveloperPortal.tsx
      <div className='border-b border-zinc-800 mb-8'>;
        <div className='flex flex-wrap -mb-px'>;
          {tabs && tabs.map(tab => {;
            const Icon = tab && tab.icon;
                onClick={() => setActiveTab(tab && tab.id)}                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;`
                  activeTab === tab && tab.id;
=======
      <div className="border-b border-zinc-800 mb-8">;
        <div className="flex flex-wrap -mb-px">;
          {tabs.map((tab) => {;
            const Icon = tab.icon;
            return (;
              <button;
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${;
                  activeTab === tab.id;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/DeveloperPortal.tsx
                    ? "text-white border-zion-purple";
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";
                }`}`
                on_click={() => setActiveTab (tab.id)}                className={`inline - flex items - center px - 4 py - 3 border - b-2 text - sm font - medium ${
                  active_tab === tab.id;
                    ? "text - white border - zion - purple";
                    : "text - zinc - 500 border - transparent hover:text - zinc - 400 hover:border - zinc - 700";
                }`}
                    ? "text-white border-zion-purple";
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700";
                }`}
                onClick = {(,) => setActiveTab(tab && tab.id),}
              >;
                <Icon size={16} className='mr-2' />;
                {tab && tab.label}
              </button>;
            );
          })}
        </div>;
      </div>;
      {/* Tab content */}
        </div>;
      </div>;
      {/* Tab content */}
      <div>;
        {active_tab === 'documentation' && <ApiDocumentation />}'
        {active_tab === 'api - keys' && <ApiKeysManager />}'
        {active_tab === 'webhooks' && <WebhooksManager />}'
        {active_tab === 'logs' && <ApiLogs />}'
      </div>;
    </div>);
                on_click={() => setActiveTab (tab.id)}
              >;
                <Icon size={16} className="mr - 2" />;
                {tab.label}
              </button>);
          })}
      </div>;
    </div>;
  );
                onClick={() => setActiveTab(tab && tab.id)}
      <div className="border-b border-zinc-800 mb-8">;
        <div className="flex flex-wrap -mb-px">;
          {tabs.map((tab) => {;
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
                {tab.label}
              </button>;
            );
          })}
        </div>;
      </div>;
<<<<<<< HEAD:src-disabled/pages.disabled/DeveloperPortal.tsx
=======
<<<<<<< HEAD
      {/* Tab content */}
      <div>;
      <div>
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/DeveloperPortal.tsx
      {/* Tab content */}
      <div>;
      <div>
        {activeTab === "documentation" && <ApiDocumentation />}"
        {activeTab === "api-keys" && <ApiKeysManager />}"
        {activeTab === "webhooks" && <WebhooksManager />}"
        {activeTab === "logs" && <ApiLogs />}"
export default function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
      </div>;
    </div>;
  );
}
  )
};
};
  );
};
      <div>

      {/* Tab content */}
      <div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
<<<<<<< HEAD:src-disabled/pages.disabled/DeveloperPortal.tsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/DeveloperPortal.tsx
      </div>
    </div>
  )
}
<<<<<<< HEAD:src-disabled/pages.disabled/DeveloperPortal.tsx
;
=======


export default function ProtectedDeveloperPortal() {
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/DeveloperPortal.tsx





  );
origin/cursor/automate-test-improve-and-merge-code-2533

export default function ProtectedDeveloperPortal() {
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
};
};
  );
};

  )
<<<<<<< HEAD:src-disabled/pages.disabled/DeveloperPortal.tsx
=======
}
}
  )
}
;

};
};
  );
};
<<<<<<< HEAD
;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/DeveloperPortal.tsx
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function ProtectedDeveloperPortal() {;
  return (;
    <ProtectedRoute>;
      <DeveloperPortal />;
    </ProtectedRoute>;
  );
<<<<<<< HEAD
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
}
  )
}
  );
}
        </div>;
      </div>;
      {/* Tab content */}
      <div>;
        {active_tab === "documentation" && <ApiDocumentation />}"
        {active_tab === "api - keys" && <ApiKeysManager />}"
        {active_tab === "webhooks" && <WebhooksManager />}"
        {active_tab === "logs" && <ApiLogs />}"
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
}
  );
}
<<<<<<< HEAD:src-disabled/pages.disabled/DeveloperPortal.tsx
;
;
origin/cursor/automate-test-improve-and-merge-code-2533
  );
}
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/DeveloperPortal.tsx
