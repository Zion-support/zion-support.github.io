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
import { ApiLogs } from "@/components/developers/ApiLogs",interface TabDefinition {
  id: string;

  label: string;
  icon: LucideIcon;
pr-12325

interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
}

export function DeveloperPortal() {;

  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
export function DeveloperPortal() {
  const { user } = useAuth();
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState<string>("documentation"),
              return (
              <button

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
