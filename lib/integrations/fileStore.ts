// File storage for integrations

import { IntegrationConfig } from './types';

export class FileStore {
  private storageKey = 'integrations';

  saveIntegration(config: IntegrationConfig): void {
    const integrations = this.getAllIntegrations();
    const index = integrations.findIndex(i => i.id === config.id);
    
    if (index >= 0) {
      integrations[index] = config;
    } else {
      integrations.push(config);
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(integrations));
  }

  getIntegration(id: string): IntegrationConfig | null {
    const integrations = this.getAllIntegrations();
    return integrations.find(i => i.id === id) || null;
  }

  getAllIntegrations(): IntegrationConfig[] {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  deleteIntegration(id: string): boolean {
    const integrations = this.getAllIntegrations();
    const filtered = integrations.filter(i => i.id !== id);
    
    if (filtered.length < integrations.length) {
      localStorage.setItem(this.storageKey, JSON.stringify(filtered));
      return true;
    }
    
    return false;
  }

  clearAll(): void {
    localStorage.removeItem(this.storageKey);
  }
}

// Global file store instance
export const fileStore = new FileStore();