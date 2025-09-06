<<<<<<< HEAD
=======
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
async function mockProviderCall<T>(
  connection: ProviderConnection
  action: string
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {
<<<<<<< HEAD

  const log: SyncLogEntry = {

}
// CRM actions;
export const crm = {
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  }

};

// ATS actions
export const ats = {

  async pushApplicant($2) {
    return simulateAction($3);
  },
  async uploadResume($2) {
    return simulateAction($3);
  },
  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {
    return simulateAction(connection, 'ats.updateStatus', { change })
  }};

<<<<<<< HEAD
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
=======
  const log: SyncLogEntry = {
    id: uuidv4()
    timestamp: Date.now()
    providerId: connection.providerId
    level: "info"
    action
    details
  }
  // In a real implementation, call provider SDK/API here using connection.accessToken
  return { log, result: { ok: true } as unknown as T }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
// CRM actions
export const crm = {
  async syncContact(
    connection: ProviderConnection
    contact: Record<string, any>
  ) {
    connection: ProviderConnection,
    contact: Record<string, any>,
  ) {;
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
    connection: ProviderConnection,
    status: Record<string, any>,
  ) {;
    return mockProviderCall(connection, "update_status", { status });
  }
}
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
  ) {
    return executeProviderAction(connection, 'createCandidate', { candidate });
  },
};

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
// Email actions
export const email = {
  async sendNotification(
    connection: ProviderConnection,
    notification: Record<string, any>
  ) {
    return executeProviderAction(connection, 'sendNotification', { notification });
  },
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
