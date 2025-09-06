

import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


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



  async syncContact(
    connection: ProviderConnection
    contact: Record<string, any>
  ) {
    connection: ProviderConnection,
    contact: Record<string, any>,
  ) {;

    return mockProviderCall(connection, "sync_contact", { contact });

  }

};

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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39


  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
  ) {
    return executeProviderAction(connection, 'createCandidate', { candidate });
  },
};



// Email actions
export const email = {
  async sendNotification(
    connection: ProviderConnection,
    notification: Record<string, any>
  ) {
    return executeProviderAction(connection, 'sendNotification', { notification });
  },
};


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
