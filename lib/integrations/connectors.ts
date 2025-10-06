<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { ProviderConnection, SyncLogEntry } from './types';
<<<<<<< HEAD
// import { v4 as uuidv4 } from 'uuid';
=======
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bcb8

export async function simulateAction<T = unknown>(
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231

export async function simulateAction<T = any>(
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
  connection: ProviderConnection,
  action: string,
  details: Record<string, unknown> = {}
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: Math.random().toString(36).substr(2, 9),
=======
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
=======
import type { ProviderConnection, SyncLogEntry } from './types';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
import type { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed

export async function simulateAction<T = any>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any> = {}
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    id: uuidv4(),
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
    id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
    id: uuidv4(),
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
    id: uuidv4(),
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
    details
  };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
  // In a real implementation, call provider SDK/API here using connection.accessToken
  return {
    log,
    result: { ok: true } as unknown as T
  };
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// CRM actions
export const crm = {
  async syncContact(connection: ProviderConnection, contact: Record<string, unknown>) {
    return simulateAction(connection, 'crm.syncContact', { contact });
  },
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======

  async addProjectNote(connection: ProviderConnection, note: Record<string, any>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======

  async addProjectNote(connection: ProviderConnection, note: Record<string, any>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
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
<<<<<<< HEAD
<<<<<<< HEAD
  async updateStatus(connection: ProviderConnection, change: Record<string, unknown>) {
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
  
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed

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
};

// ATS actions
export const ats = {
  async pushApplicant(connection: ProviderConnection, applicant: Record<string, any>) {
    return simulateAction(connection, 'ats.pushApplicant', { applicant });
  },
  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
    return simulateAction(connection, 'ats.updateStatus', { change });
  }
};