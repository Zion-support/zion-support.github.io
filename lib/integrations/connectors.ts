import type { ProviderConnection, SyncLogEntry } from './types';
<<<<<<< HEAD
// import { v4 as uuidv4 } from 'uuid';
=======
import { v4 as uuidv4 } from 'uuid';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bcb8

export async function simulateAction<T = unknown>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, unknown> = {}
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: Math.random().toString(36).substr(2, 9),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
    details
  };
  // In a real implementation, call provider SDK/API here using connection.accessToken
  return {
    log,
    result: { ok: true } as unknown as T
  };
}
// CRM actions
export const crm = {
  async syncContact(connection: ProviderConnection, contact: Record<string, unknown>) {
    return simulateAction(connection, 'crm.syncContact', { contact });
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  async addProjectNote(connection: ProviderConnection, note: Record<string, unknown>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },
<<<<<<< HEAD
  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, unknown>) {
=======
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
  
  async addProjectNote(connection: ProviderConnection, note: Record<string, any>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bcb8
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  }
};
// ATS actions
export const ats = {
  async pushApplicant(connection: ProviderConnection, applicant: Record<string, unknown>) {
    return simulateAction(connection, 'ats.pushApplicant', { applicant });
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  async updateStatus(connection: ProviderConnection, change: Record<string, unknown>) {
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
  
  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
    return simulateAction(connection, 'ats.updateStatus', { change });
  }
};