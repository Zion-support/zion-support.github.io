#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Creating clean TypeScript files...');

// Clean lib/integrations/connectors.ts
const connectorsContent = `import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';

async function mockProviderCall<T>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    provider_id: connection.provider_id,
    level: 'info',
    action,
    details
  };
  
  return { log, result: { ok: true } as unknown as T };
}

export const connectors = {
  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return mockProviderCall(connection, 'addEmailTouchpoint', touch);
  },

  async update_status(connection: ProviderConnection, status: Record<string, any>) {
    return mockProviderCall(connection, 'update_status', status);
  }
};

export async function executeProviderAction<T>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {
  return mockProviderCall(connection, action, details);
}

export const notificationConnector = {
  async sendNotification(connection: ProviderConnection, notification: any) {
    return executeProviderAction(connection, 'sendNotification', { notification });
  }
};
`;

// Clean lib/integrations/registry.ts
const registryContent = `import { BaseConnector, IntegrationConfig } from './types';

export class ConnectorRegistry {
  private connectors = new Map<string, BaseConnector>();

  registerConnector(type: string, connector: BaseConnector): void {
    this.connectors.set(type, connector);
  }

  getConnector(type: string): BaseConnector | undefined {
    return this.connectors.get(type);
  }

  createConnector(config: IntegrationConfig): BaseConnector {
    const connector = this.getConnector(config.type);
    if (!connector) {
      throw new Error(\`Unknown connector type: \${config.type}\`);
    }
    return connector;
  }
}

export const defaultConnectors = [
  {
    id: "hubspot",
    name: "HubSpot",
    category: "crm",
    description: "HubSpot CRM integration",
    icon: "hubspot-icon"
  }
];
`;

// Clean lib/integrations/types.ts
const typesContent = `export type IntegrationProviderId = 
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'workable';

export type IntegrationCategory = 'crm' | 'ats' | 'email' | 'calendar';

export interface IntegrationConfig {
  id: IntegrationProviderId;
  name: string;
  category: IntegrationCategory;
  description?: string;
  oauthScopes?: string[];
  icon?: string;
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
}

export interface ProviderConnection {
  id: string;
  provider_id: IntegrationProviderId;
  name: string;
  status: 'active' | 'inactive' | 'error';
  lastSync?: string;
  autoCreateContacts?: boolean;
}

export interface ManualOverride {
  id: string;
  connectionId: string;
  field: string;
  value: any;
  reason: string;
}

export interface ZapierEvent {
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  event_type: string;
  data: Record<string, any>;
}

export interface SyncLogEntry {
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
  details: Record<string, any>;
}

export interface BaseConnector {
  connect(config: any): Promise<boolean>;
  disconnect(): Promise<boolean>;
  sync(data: any): Promise<any>;
}
`;

// Clean types/disputes.ts
const disputesContent = `export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';

export type DisputeReason = 
  | 'Scope Disagreement'
  | 'Quality Issues'
  | 'Delivery Delay'
  | 'Payment Issue'
  | 'Communication Breakdown'
  | 'Other';

export interface DisputeCase {
  id: string;
  talentId: string;
  clientId: string;
  projectId?: string;
  status: DisputeStatus;
  reason: DisputeReason;
  reasonDetails?: string;
  createdAt: string;
  attachments: DisputeAttachment[];
  messages: DisputeMessage[];
  adminNotes?: string;
  resolvedAt?: string;
  resolutionSummary?: string;
}

export type DisputeListItem = Pick<DisputeCase, 'id' | 'status' | 'reason' | 'createdAt'> & {
  talentName: string;
  clientName: string;
  projectName?: string;
};

export type UserSummary = {
  id: string;
  name: string;
  email: string;
};

export interface DisputeAttachment {
  id: string;
  filename: string;
  url: string;
  uploadedAt: string;
}

export type DisputeMessage = {
  id: string;
  disputeId: string;
  senderId: string;
  senderType: 'talent' | 'client' | 'admin';
  content: string;
  timestamp: string;
  attachments?: DisputeAttachment[];
  entityType?: 'milestone' | 'contract' | 'thread';
  entityId?: string;
};

export type DisputeCase = {
  id: string;
  talentId: string;
  clientId: string;
  projectId?: string;
  status: DisputeStatus;
  reason: DisputeReason;
  reasonDetails?: string;
  createdAt: string;
  attachments: DisputeAttachment[];
  messages: DisputeMessage[];
  adminNotes?: string;
  resolvedAt?: string;
  resolutionSummary?: string;
  refundAmount?: number;
  resolution?: string;
  resolvedAt?: Date;
};
`;

// Clean src/data/enhancedServices.ts
const enhancedServicesContent = `export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  features: string[];
}

export const enhancedServices: Service[] = [
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    description: 'Intelligent chatbot solution',
    category: 'AI',
    price: 99,
    features: ['Natural Language Processing', 'Multi-language Support', 'Custom Training']
  }
];
`;

// Clean vite.config.ts
const viteConfigContent = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
`;

// Write all files
const files = [
  { path: 'lib/integrations/connectors.ts', content: connectorsContent },
  { path: 'lib/integrations/registry.ts', content: registryContent },
  { path: 'lib/integrations/types.ts', content: typesContent },
  { path: 'types/disputes.ts', content: disputesContent },
  { path: 'src/data/enhancedServices.ts', content: enhancedServicesContent },
  { path: 'vite.config.ts', content: viteConfigContent }
];

files.forEach(({ path: filePath, content }) => {
  try {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created clean file: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error creating ${filePath}:`, error.message);
  }
});

console.log('🎉 Clean TypeScript files created successfully!');