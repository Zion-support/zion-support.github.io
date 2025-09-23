import { v4 as uuidv4 } from 'uuid';
import { ProviderConnection, SyncLogEntry } from './types';

async function simulateAction<T = any>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any> = {}
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
    details,
  };
  return { log, result: { ok: true } as unknown as T };
}

export const crm = {
  async syncContact(connection: ProviderConnection, contact: Record<string, any>) {
    return simulateAction(connection, 'crm.syncContact', { contact });
  },
  async addProjectNote(connection: ProviderConnection, note: Record<string, any>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },
  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  },
};

export const ats = {
  async updateStatus(connection: ProviderConnection, status: Record<string, any>) {
    return simulateAction(connection, 'ats.updateStatus', { status });
  },
  async createCandidate(connection: ProviderConnection, candidate: Record<string, any>) {
    return simulateAction(connection, 'ats.createCandidate', { candidate });
  },
};









