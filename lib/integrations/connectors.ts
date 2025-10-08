import type { ProviderConnection, SyncLogEntry } from './types';
import type { ProviderConnection, SyncLogEntry } from './types';

export async function simulateAction<T = unknown>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, unknown> = {}
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: Math.random().toString(36).substr(2, 9),

export async function simulateAction<T = any>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any> = {}
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
    status: 'success',
    message: `Action ${action} completed successfully`,
    details,
    timestamp: new Date(),
  };

  // Simulate occasional errors
  if (Math.random() < 0.1) {
    log.status = 'error';
    log.message = `Action ${action} failed: Simulated error`;
    throw new Error(log.message);
  }

  // Simulate occasional warnings
  if (Math.random() < 0.2) {
    log.status = 'warning';
    log.message = `Action ${action} completed with warnings`;
  }

  const result = {
    success: true,
    data: details,
    timestamp: new Date().toISOString(),
  } as T;

  return { log, result };
}
  
  async addProjectNote(connection: ProviderConnection, note: Record<string, any>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },
  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  }
};
// ATS actions
export const ats = {
  async pushApplicant(connection: ProviderConnection, applicant: Record<string, unknown>) {
    return simulateAction(connection, 'ats.pushApplicant', { applicant });
  },
  

export async function syncData(
  connection: ProviderConnection
): Promise<SyncLogEntry[]> {
  const logs: SyncLogEntry[] = [];

  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {

// CRM actions
export const crm = {
  async syncContact(connection: ProviderConnection, contact: Record<string, any>) {
    return simulateAction(connection, 'crm.syncContact', { contact });
  },

  async addProjectNote(connection: ProviderConnection, note: Record<string, any>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  }

  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {
    return simulateAction(connection, 'ats.updateStatus', { change });
  }
};
