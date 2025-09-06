<<<<<<< HEAD


import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";

import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
async function mockProviderCall<T>(
  connection: ProviderConnection
  action: string
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {

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
=======

  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
  ) {
    return executeProviderAction(connection, 'createCandidate', { candidate });
  },
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
