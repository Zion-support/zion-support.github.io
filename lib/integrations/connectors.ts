import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';


async function mockProviderCall<T>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: new Date().toISOString(),
    connectionId: connection.id,
    action,
    status: 'success',
    details: JSON.stringify(details),
    result: 'Mock result'
  };

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    log,
    result: {} as T
  };
}

export class CRMConnector {
  async syncContact(
    connection: ProviderConnection,
    contact: Record<string, any>
  ): Promise<SyncLogEntry> {
    const { log } = await mockProviderCall(connection, 'sync_contact', contact);
    return log;
  }

  async syncTouchpoint(
    connection: ProviderConnection,
    touchpoint: Record<string, any>
  ): Promise<SyncLogEntry> {
    const { log } = await mockProviderCall(connection, 'sync_touchpoint', touchpoint);
    return log;
  }
}

export class EmailConnector {
  async syncEmail(
    connection: ProviderConnection,
    email: Record<string, any>
  ): Promise<SyncLogEntry> {
    const { log } = await mockProviderCall(connection, 'sync_email', email);
    return log;
  }

  async syncCampaign(
    connection: ProviderConnection,
    campaign: Record<string, any>
  ): Promise<SyncLogEntry> {
    const { log } = await mockProviderCall(connection, 'sync_campaign', campaign);
    return log;
  }
}

export class AnalyticsConnector {
  async syncEvent(
    connection: ProviderConnection,
    event: Record<string, any>
  ): Promise<SyncLogEntry> {
    const { log } = await mockProviderCall(connection, 'sync_event', event);
    return log;
  }

  async syncMetric(
    connection: ProviderConnection,
    metric: Record<string, any>
  ): Promise<SyncLogEntry> {
    const { log } = await mockProviderCall(connection, 'sync_metric', metric);
    return log;

  }
}