<<<<<<< HEAD
=======
<<<<<<< HEAD
id: uuidv4(),
    timestamp: Date && Date.now(),
    providerId: connection && connection.providerId,
    level: "info",
    action,
    details,
  };
  // In a real implementation, call provider SDK/API here using connection && connection.accessToken
  return { log, result: { ok: true } as unknown as T };
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
=======
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD

import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";

import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  async syncContact(

    return mockProviderCall(connection, "sync_contact", { contact });
=======

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }

};

// ATS actions
export const ats = {
<<<<<<< HEAD
  async updateStatus(

    return mockProviderCall(connection, "update_status", { status });
  }
}

// Email actions
export const email = {
  async sendNotification(
    connection: ProviderConnection,
    notification: Record<string, any>
  ) {
    return executeProviderAction(connection, 'sendNotification', { notification });
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

=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
// CRM actions
export const crm = {
  async syncContact(
<<<<<<< HEAD
    connection: ProviderConnection
    contact: Record<string, any>
  ) {
=======
    connection: ProviderConnection,
    contact: Record<string, any>,
  ) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
    connection: ProviderConnection
    status: Record<string, any>
  ) {
=======
    connection: ProviderConnection,
    status: Record<string, any>,
  ) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return mockProviderCall(connection, "update_status", { status });
  }
}
<<<<<<< HEAD
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
export async function simulateAction<T = any>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any> = {}
): Promise<{ log: SyncLogEntry, result: T }> {
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
    details
  };
  // In a real implementation, call provider SDK/API here using connection.accessToken
  return { log, result: { ok: true } as unknown as T };
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
}
// CRM actions;
export const crm = {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
  ) {
    return executeProviderAction(connection, 'createCandidate', { candidate });
  },
};
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

// Email actions
export const email = {
  async sendNotification(
    connection: ProviderConnection,
    notification: Record<string, any>
  ) {
    return executeProviderAction(connection, 'sendNotification', { notification });
  },
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
