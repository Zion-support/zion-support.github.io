import { useState } from "react";""
import { useAuth } from "@/hooks/useAuth";"
import {
  // TODO: Implement
}
  BookOpen,
  Code,
  Key,
  List,
  LucideIcon,
  Terminal,
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

interface TabDefinition {;
  id: string,;
  label: string,;

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
                key={tab.id}
                className={`inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium ${
                  activeTab === tab.id;"
                    ? "text-white border-zion-purple"""
                    : "text-zinc-500 border-transparent hover:text-zinc-400 hover:border-zinc-700""`;
                }`}
                onClick={() => setActiveTab(tab.id)}
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

    
                className={`inline - flex items - center px - 4 py - 3 border - b-2 text - sm font - medium ${
                  active_tab === tab.id;"
                    ? "text - white border - zion - purple";""
                    : "text - zinc - 500 border - transparent hover:text - zinc - 400 hover:border - zinc - 700";"`;
                on_click={() => setActiveTab (tab.id)}
                <Icon size={16} className="mr - 2" />;"

              </button>);
        </div>;
        {active_tab === "documentation" && <ApiDocumentation />}"
        {active_tab === "api - keys" && <ApiKeysManager />}"
        {active_tab === "webhooks" && <WebhooksManager />}"
        {active_tab === "logs" && <ApiLogs />}"

    </div>);
    <ProtectedRoute>;

      <DeveloperPortal />;

    );


    


    ;"`;