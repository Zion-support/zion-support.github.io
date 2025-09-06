<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
async function mockProviderCall<T>(
  connection: ProviderConnection
  action: string
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {
<<<<<<< HEAD
=======
  const log: SyncLogEntry = {
<<<<<<< HEAD
    id: uuidv4()
    timestamp: Date.now()
    providerId: connection.providerId
    level: "info"
    action
    details
  }
  // In a real implementation, call provider SDK/API here using connection.accessToken
  return { log, result: { ok: true } as unknown as T }
=======
    id: uuidv4(),
    timestamp: Date && Date.now(),
    providerId: connection && connection.providerId,
    level: "info",
    action,
    details,
  };
  // In a real implementation, call provider SDK/API here using connection && connection.accessToken
  return { log, result: { ok: true } as unknown as T };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
// CRM actions
export const crm = {
  async syncContact(
    connection: ProviderConnection
    contact: Record<string, any>
  ) {
    return mockProviderCall(connection, "sync_contact", { contact });
  }
  async addEmailTouchpoint(
    connection: ProviderConnection
    touchpoint: Record<string, any>
  ) {
    return mockProviderCall(connection, "add_email_touchpoint", { touchpoint });
  }
  async addProjectNote(
    connection: ProviderConnection
    note: Record<string, any>
  ) {
    return mockProviderCall(connection, "add_project_note", { note });
  }
}
// ATS actions
export const ats = {
  async updateStatus(
    connection: ProviderConnection
    status: Record<string, any>
  ) {
    return mockProviderCall(connection, "update_status", { status });
  }
}

=======
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
export async function simulateAction<T = any>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any> = {}
): Promise<{ log: SyncLogEntry, result: T }> {
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
<<<<<<< HEAD
    details,
  };
  // In a real implementation, call provider SDK/API here using connection && connection.accessToken
=======
    details
  };
  // In a real implementation, call provider SDK/API here using connection.accessToken
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return { log, result: { ok: true } as unknown as T };
=======
import { ProviderConnection, SyncLogEntry  } from './types';
import { v4 as uuidv4  } from './uuid';
;
async function mockProviderCall < T>(
  connection: ProviderConnection,
  action: string,
  details: Record < string, any>,
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: uuidv4 (),
    timestamp: Date.now (),
    provider_id: connection.provider_id,
    level: "info",
    action,
    details,
  }
;
  // In a real implementation, call provider SDK / API here using connection.access_token;
  return { log, result: { ok: true } as unknown as T }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
// CRM actions;
export const crm = {
<<<<<<< HEAD
  async syncContact(connection: ProviderConnection, contact: Record<string, any>) {
    return simulateAction(connection, 'crm.syncContact', { contact });
  },
  async addProjectNote(connection: ProviderConnection, note: Record<string, any>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },
<<<<<<< HEAD

  async addProjectNote(
    connection: ProviderConnection,
    note: Record<string, any>,
  ) {
    return mockProviderCall(connection, "add_project_note", { note });
  },
=======
  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  }
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};

// ATS actions
export const ats = {
<<<<<<< HEAD
  async updateStatus(
    connection: ProviderConnection,
    status: Record<string, any>,
  ) {
    return mockProviderCall(connection, "update_status", { status });
  },
};
=======
  async pushApplicant($2) {
    return simulateAction($3);
  },
  async uploadResume($2) {
    return simulateAction($3);
  },
  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {
    return simulateAction(connection, 'ats.updateStatus', { change })
  }};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  async sync_contact (
    connection: ProviderConnection,
    contact: Record < string, any>,
  ) {
    return mockProviderCall (connection, "sync_contact", { contact });
  },
  async addEmailTouchpoint (
    connection: ProviderConnection,
    touchpoint: Record < string, any>,
  ) {
    return mockProviderCall (connection, "add_email_touchpoint", { touchpoint });
  },
  async addProjectNote (
    connection: ProviderConnection,
    note: Record < string, any>,
  ) {
    return mockProviderCall (connection, "add_project_note", { note });
  },
}
;
// ATS actions;
export const ats = {
  async update_status (
    connection: ProviderConnection,
    status: Record < string, any>,
  ) {
    return mockProviderCall (connection, "update_status", { status });
  },
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
