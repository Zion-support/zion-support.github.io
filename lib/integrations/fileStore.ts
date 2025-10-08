import type { ProviderConnection } from './types';

interface StoredConnection {
  id: string;
  providerId: string;
  name: string;
  status: 'connected' | 'warning' | 'disconnected';
  createdAt: number;
  updatedAt: number;
  lastSyncAt?: number;
}

// In-memory storage for development
const connections: Map<string, StoredConnection> = new Map();

export async function saveConnection(connection: ProviderConnection): Promise<void> {
  const stored: StoredConnection = {
    id: connection.id,
    providerId: connection.providerId,
    name: connection.name,
    status: connection.status,
    createdAt: connection.createdAt,
    updatedAt: Date.now(),
    lastSyncAt: connection.lastSyncAt,
  };
  
  connections.set(connection.id, stored);
}

export async function loadConnection(id: string): Promise<StoredConnection | null> {
  return connections.get(id) || null;
}

export async function loadAllConnections(): Promise<StoredConnection[]> {
  return Array.from(connections.values());
}

export async function deleteConnection(id: string): Promise<boolean> {
  return connections.delete(id);
}

export async function updateConnectionStatus(
  id: string,
  status: 'connected' | 'warning' | 'disconnected'
): Promise<void> {
  const connection = connections.get(id);
  if (connection) {
    connection.status = status;
    connection.updatedAt = Date.now();
    connections.set(id, connection);
  }
}

export async function updateLastSync(id: string): Promise<void> {
  const connection = connections.get(id);
  if (connection) {
    connection.lastSyncAt = Date.now();
    connection.updatedAt = Date.now();
    connections.set(id, connection);
  }
}