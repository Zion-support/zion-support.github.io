import type { ProviderConnection, SyncLogEntry } from './types';

// Simple UUID generator since uuid package is not available
const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export async function simulateAction<T = unknown>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, unknown> = {}
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: generateId(),
    timestamp: Date.now(),
    action,
    provider: connection.provider,
    status: 'pending',
    details
  };

  try {
    // Simulate occasional errors
    if (Math.random() < 0.1) {
      log.status = 'error';
      log.error = `Action ${action} failed: Simulated error`;
      throw new Error(log.error);
    }

    // Simulate occasional warnings
    if (Math.random() < 0.2) {
      log.status = 'warning';
    }

    const result = {
      success: true,
      data: details,
      timestamp: new Date().toISOString(),
    } as T;

    log.status = 'success';
    log.result = result;

    return { log, result };
  } catch (error) {
    log.status = 'error';
    log.error = error instanceof Error ? error.message : 'Unknown error';
    throw error;
  }
}

// CRM actions
export const crm = {
  async syncContact(connection: ProviderConnection, contact: Record<string, unknown>) {
    return simulateAction(connection, 'crm.syncContact', { contact });
  },

  async addProjectNote(connection: ProviderConnection, note: Record<string, unknown>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, unknown>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  }
};

// ATS actions
export const ats = {
  async pushApplicant(connection: ProviderConnection, applicant: Record<string, unknown>) {
    return simulateAction(connection, 'ats.pushApplicant', { applicant });
  },

  async updateStatus(connection: ProviderConnection, change: Record<string, unknown>) {
    return simulateAction(connection, 'ats.updateStatus', { change });
  }
};

export async function testConnection(
  connection: ProviderConnection
): Promise<boolean> {
  try {
    await simulateAction(connection, 'test_connection');
    return true;
  } catch {
    return false;
  }
}

export async function syncData(
  connection: ProviderConnection
): Promise<SyncLogEntry[]> {
  const logs: SyncLogEntry[] = [];

  try {
    const { log } = await simulateAction(connection, 'sync_data', {
      lastSync: connection.lastSync?.toISOString(),
    });
    logs.push(log);
  } catch (error) {
    logs.push({
      id: generateId(),
      timestamp: Date.now(),
      action: 'sync_data',
      provider: connection.provider,
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  return logs;
}
