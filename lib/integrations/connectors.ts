import type { ProviderConnection, SyncLogEntry } from './types';

// Simple UUID generator
const generateId = (): string => {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export async function simulateAction<T = unknown>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, unknown> = {}
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: generateId(),
    connectionId: connection.id,
    providerId: connection.providerId,
    action,
    status: 'success',
    timestamp: Date.now(),
    details,
  };

  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));

  const result = {
    success: true,
    message: `Action ${action} completed successfully`,
    data: details,
  } as T;

  return { log, result };
}

export async function syncData(
  connection: ProviderConnection,
  syncType: 'full' | 'incremental' = 'incremental'
): Promise<SyncLogEntry> {
  const log: SyncLogEntry = {
    id: generateId(),
    connectionId: connection.id,
    providerId: connection.providerId,
    action: `sync_${syncType}`,
    status: 'in_progress',
    timestamp: Date.now(),
    details: { syncType },
  };

  try {
    // Simulate sync operation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    log.status = 'success';
    log.details = {
      ...log.details,
      recordsProcessed: Math.floor(Math.random() * 1000) + 100,
      duration: 500,
    };
  } catch (error) {
    log.status = 'error';
    log.details = {
      ...log.details,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }

  return log;
}

export async function testConnection(connection: ProviderConnection): Promise<boolean> {
  try {
    await new Promise(resolve => setTimeout(resolve, 200));
    return true;
  } catch {
    return false;
  }
}

export async function refreshToken(connection: ProviderConnection): Promise<string> {
  // Simulate token refresh
  await new Promise(resolve => setTimeout(resolve, 300));
  return `new_token_${generateId()}`;
}

export interface SyncLogEntry {
  id: string;
  connectionId: string;
  providerId: string;
  action: string;
  status: 'in_progress' | 'success' | 'error';
  timestamp: number;
  details: Record<string, unknown>;
}