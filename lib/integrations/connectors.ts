


import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
origin/cursor/expand-services-advertise-and-build-project-c28b




origin/cursor/expand-services-advertise-and-build-project-c28b








import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";






async function mockProviderCall<T>(
  connection: ProviderConnection
  action: string
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {



origin/cursor/expand-services-advertise-and-build-project-c28b

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });

  },
  async uploadResume(connection: ProviderConnection, resume: Record<string, any>) {
    return simulateAction(connection, 'ats.uploadResume', { resumeMeta: { name: resume?.name } });
  },
  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {




  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
  ) {'
    return executeProviderAction(connection, 'createCandidate', { candidate });
  },
};


    return simulateAction(connection, 'ats.updateStatus', { change });
  },
};
origin/cursor/automate-test-improve-and-merge-code-2533




