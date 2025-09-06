<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


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

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  }

};

// ATS actions
export const ats = {
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

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
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
