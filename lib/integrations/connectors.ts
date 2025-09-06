<<<<<<< HEAD
import { ProviderConnection, SyncLogEntry  } from './types';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
export async function simulateAction<T;
=======
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
async function mockProviderCall<T>(
  connection: ProviderConnection
  action: string
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: uuidv4()
    timestamp: Date.now()
    providerId: connection.providerId
    level: "info"
    action
    details
  }
=======

export async function simulateAction<T = any>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any> = {}
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
    details,
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  // In a real implementation, call provider SDK/API here using connection.accessToken
  return { log, result: { ok: true } as unknown as T }
}
// CRM actions
}

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
<<<<<<< HEAD
    return mockProviderCall(connection, "add_project_note", { note });
  }
}
=======
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },
  async addEmailTouchpoint(
    connection: ProviderConnection,
    touch: Record<string, any>
  ) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  },
};

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
// ATS actions
}

export const ats = {
<<<<<<< HEAD
=======
  async pushApplicant(
    connection: ProviderConnection,
    applicant: Record<string, any>
  ) {
    return simulateAction(connection, 'ats.pushApplicant', { applicant });
  },
  async uploadResume(
    connection: ProviderConnection,
    resume: Record<string, any>
  ) {
    return simulateAction(connection, 'ats.uploadResume', {
      resumeMeta: { name: resume?.name },
    });
  },
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  async updateStatus(
    connection: ProviderConnection
    status: Record<string, any>
  ) {
<<<<<<< HEAD
    return mockProviderCall(connection, "update_status", { status });
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
    return simulateAction(connection, 'ats.updateStatus', { change });
  },
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
