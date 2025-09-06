<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b



<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
async function mockProviderCall<T>(
  connection: ProviderConnection
  action: string
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {
<<<<<<< HEAD

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

}
// CRM actions
export const crm = {
  async syncContact(

    return mockProviderCall(connection, "sync_contact", { contact });
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
  async updateStatus(

    return mockProviderCall(connection, "update_status", { status });
  }
}

// Email actions
export const email = {
  async sendNotification(
=======
<<<<<<< HEAD

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  async sync_contact (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    connection: ProviderConnection,
    notification: Record<string, any>
  ) {
    return executeProviderAction(connection, 'sendNotification', { notification });
  },
<<<<<<< HEAD
};
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
  ) {
    return executeProviderAction(connection, 'createCandidate', { candidate });
  },
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
