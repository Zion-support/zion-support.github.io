import { ProviderConnection, SyncLogEntry } from './types';
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
