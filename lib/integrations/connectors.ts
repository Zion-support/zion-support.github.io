<<<<<<< HEAD
import { ProviderConnection, SyncLogEntry } from './types';''
import { v4 as uuidv4 } from 'uuid';''
import { ProviderConnection, SyncLogEntry } from "./types";""
import { v4 as uuidv4 } from "uuid";""
import { ProviderConnection, SyncLogEntry } from './types';''
import { v4 as uuidv4 } from 'uuid';''
import { ProviderConnection, SyncLogEntry } from "./types";""
import { v4 as uuidv4 } from "uuid";"
async function mockProviderCall<T>(
</T>
=======
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';

async function mockProviderCall<T>(
  connection: ProviderConnection,
  action: string,
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
  details: Record<string, any>
</string>)
): Promise<{ log: SyncLogEntry; result: T }> {
<<<<<<< HEAD

  async syncContact(
    connection: ProviderConnection;,
  contact: Record<string, any>
</string>
    touchpoint: Record<string, any>
</string>
    note: Record<string, any>
</string>
async function mockProviderCall < T>(
  connection: ProviderConnection,
  action: string,
  details: Record < string, any>,)
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {,
  id: uuidv4 (),
    timestamp: Date.now (),
    provider_id: connection.provider_id,"
    level: "info","
=======
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
    action,
    details,
  };

  // In a real implementation, call provider SDK/API here using connection.accessToken
  return { log, result: { ok: true } as unknown as T };
}

// CRM actions
export const crm = {
<<<<<<< HEAD

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
</string>
  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {
</string>
    status: Record<string, any>
</string>
    status: Record<string, any>,
</string>
    contact: Record < string, any>,
  ) {"
    return mockProviderCall (connection, "sync_contact", { contact });"
  },
  async addEmailTouchpoint (
    connection: ProviderConnection,
    touchpoint: Record < string, any>,)
  ) {"
    return mockProviderCall (connection, "add_email_touchpoint", { touchpoint });"
  },
  async addProjectNote (
    connection: ProviderConnection,
    note: Record < string, any>,)
  ) {"
    return mockProviderCall (connection, "add_project_note", { note });"
  },
}
;
// ATS actions;
export const ats = {
  async update_status (
    connection: ProviderConnection,
    status: Record < string, any>,)
  ) {"
    return mockProviderCall (connection, "update_status", { status });"
  },
}
;
}
;
// ATS actions;
export const ats = {
  async update_status (
    connection: ProviderConnection,
    status: Record < string, any>,)
  ) {"
    return mockProviderCall (connection, "update_status", { status });"
  },
}
;

  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
</string>
    notification: Record<string, any>
</string>)"
=======
  async syncContact(
    connection: ProviderConnection,
    contact: Record<string, any>
  ) {
    return mockProviderCall(connection, "sync_contact", { contact });
  },
  async addEmailTouchpoint(
    connection: ProviderConnection,
    touchpoint: Record<string, any>
  ) {
    return mockProviderCall(connection, "add_email_touchpoint", { touchpoint });
  },
  async addProjectNote(
    connection: ProviderConnection,
    note: Record<string, any>
  ) {
    return mockProviderCall(connection, "add_project_note", { note });
  }
};

// ATS actions
export const ats = {
  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
  ) {
    return mockProviderCall(connection, "create_candidate", { candidate });
  },
  async updateStatus(
    connection: ProviderConnection,
    status: Record<string, any>
  ) {
    return mockProviderCall(connection, "update_status", { status });
  }
};

// Email actions
export const email = {
  async sendNotification(
    connection: ProviderConnection,
    notification: Record<string, any>
  ) {
    return mockProviderCall(connection, "send_notification", { notification });
  }
};
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
