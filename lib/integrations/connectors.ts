import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";

async function mockProviderCall<T>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any>,
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: "info",
    action,
    details,
  };
  // In a real implementation, call provider SDK/API here using connection.accessToken
  return { log, result: { ok: true } as unknown as T };
}

// CRM actions
export const crm = {
  async syncContact(
    connection: ProviderConnection,
    contact: Record<string, any>,
  ) {
    return mockProviderCall(connection, "sync_contact", { contact });
  },

  async addEmailTouchpoint(
    connection: ProviderConnection,
    touchpoint: Record<string, any>,
  ) {
    return mockProviderCall(connection, "add_email_touchpoint", { touchpoint });
  },

  async addProjectNote(
    connection: ProviderConnection,
    note: Record<string, any>,
  ) {
    return mockProviderCall(connection, "add_project_note", { note });
  },
};

// ATS actions
export const ats = {
  async updateStatus(
    connection: ProviderConnection,
    status: Record<string, any>,
  ) {
    return mockProviderCall(connection, "update_status", { status });
  },
};
