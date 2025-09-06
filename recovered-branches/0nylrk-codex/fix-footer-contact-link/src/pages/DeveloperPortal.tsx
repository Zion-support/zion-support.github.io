
import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {BookOpen, Code, Key, List, LucideIcon, Terminal, Webhook} from "lucide-react";
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
interface TabDefinition {
  id: string
  label: string

  icon: LucideIcon
}

interface TabDefinition {;
  id: string,;
  label: string,;
  icon: LucideIcon;
}

export function DeveloperPortal() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("documentation");
export function DeveloperPortal() {
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
      <div>;
        {activeTab === "documentation" && <ApiDocumentation />}
        {activeTab === "api-keys" && <ApiKeysManager />}
        {activeTab === "webhooks" && <WebhooksManager />}
        {activeTab === "logs" && <ApiLogs />}
      </div>;
    </div>;
  );
}

;

export default function ProtectedDeveloperPortal() {;
  return (
    <ProtectedRoute>
      <DeveloperPortal />
    </ProtectedRoute>
  )
}

;
;
