<<<<<<< HEAD
<<<<<<< HEAD
// Integration connectors
import { ProviderConnection, SyncLogEntry } from './types';
=======
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import { ProviderConnection, SyncLogEntry } from './types';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { v4 as uuidv4 } from 'uuid';
import { ProviderConnection, SyncLogEntry } from "./types";"
import { v4 as uuidv4 } from "uuid";'
import { ProviderConnection, SyncLogEntry } from './types';'
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
pr-12243

import { IntegrationConfig, IntegrationResponse, ApiEndpoint } from './types';

export class BaseConnector {
  protected config: IntegrationConfig;

  constructor(config: IntegrationConfig) {
    this.config = config;

origin/cursor/expand-services-advertise-and-build-project-c28b



origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

=======







>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { ProviderConnection, SyncLogEntry } from "./types";
=======








"
import { ProviderConnection, SyncLogEntry } from "./types";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { v4 as uuidv4 } from "uuid";
async function mockProviderCall<T>(
  connection: ProviderConnection;
  action: string;
  details: Record<string, any>
<<<<<<< HEAD
): Promise<{ log: SyncLogEntry; result: T }> {
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b


async function callProvider<T>(
  connection: ProviderConnection,
  action: string,
  details: Record<string, any>
): Promise<{ log: SyncLogEntry; result: T }> {
  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
    details,
  };
  // In a real implementation, call provider SDK/API here using connection.accessToken
  return { log, result: { ok: true } as unknown as T };
}

// CRM actions
export const crm = {
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
): Promise<{ log: SyncLogEntry; result: T }> {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  async syncContact(
    connection: ProviderConnection;
    contact: Record<string, any>
  ) {"
    return mockProviderCall(connection, "sync_contact", { contact });
  }
  async addEmailTouchpoint(
    connection: ProviderConnection;
    touchpoint: Record<string, any>
  ) {"
    return mockProviderCall(connection, "add_email_touchpoint", { touchpoint });
  }
  async addProjectNote(
    connection: ProviderConnection;
    note: Record<string, any>
<<<<<<< HEAD
  ) {
    return mockProviderCall(connection, "add_project_note", { note });
  }
}
// ATS actions
export const ats = {
<<<<<<< HEAD
  const log: SyncLogEntry = {
=======
  ) {"
    return mockProviderCall(connection, "add_project_note", { note });
  }
}
// ATS actions;
export const ats = {}
  const log: SyncLogEntry = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,'
    level: 'info',
    action,;
  return { log, result: { ok: true } as unknown as T };'
import { ProviderConnection, SyncLogEntry  } from './types';'
import { v4 as uuidv4  } from './uuid';
;
async function mockProviderCall < T>(
  connection: ProviderConnection,
  action: string,
  details: Record < string, any>,
): Promise<{ log: SyncLogEntry; result: T }> {}
  const log: SyncLogEntry = {}
    id: uuidv4 (),
    timestamp: Date.now (),
    provider_id: connection.provider_id,"
    level: "info",
    action,
    details,
  }
;
  // In a real implementation, call provider SDK / API here using connection.access_token;
  return { log, result: { ok: true } as unknown as T }
}
// CRM actions;
<<<<<<< HEAD
export const crm = {
=======
<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/expand-services-advertise-and-build-project-c28b

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
pr-12243
=======
export const crm = {}
  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {';
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
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

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }

  async connect(): Promise<IntegrationResponse> {
    throw new Error('Connect method must be implemented');
  }

<<<<<<< HEAD
  async disconnect(): Promise<IntegrationResponse> {
    throw new Error('Disconnect method must be implemented');
  }
// ATS actions
export const ats = {
<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  async test(): Promise<IntegrationResponse> {
    throw new Error('Test method must be implemented');
  }

  protected async makeRequest(endpoint: ApiEndpoint): Promise<any> {
    const response = await fetch(endpoint.url, {
      method: endpoint.method,
      headers: {
        'Content-Type': 'application/json',
        ...endpoint.headers,
      },
      body: endpoint.body ? JSON.stringify(endpoint.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

export class SlackConnector extends BaseConnector {
  async connect(): Promise<IntegrationResponse> {
    try {
      // Test Slack API connection
      const response = await this.makeRequest({
        url: 'https://slack.com/api/auth.test',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.config.credentials.token}`,
        },
      });

      return {
        success: response.ok,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
origin/cursor/expand-services-advertise-and-build-project-c28b
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
origin/cursor/automate-test-improve-and-merge-code-2533
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

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  async updateStatus(
    connection: ProviderConnection
=======
// ATS actions;
export const ats = {}
  async updateStatus(;
    connection: ProviderConnection;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    status: Record<string, any>
<<<<<<< HEAD
  ) {}
    connection: ProviderConnection,
    status: Record<string, any>,
  ) {;"
    return mockProviderCall(connection, "update_status", { status });
  }
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  ) {
<<<<<<< HEAD


=======
    connection: ProviderConnection,
    status: Record<string, any>,
  ) {;
    return mockProviderCall(connection, "update_status", { status });
  }
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  async sync_contact (
    connection: ProviderConnection,
    contact: Record < string, any>,
  ) {"
    return mockProviderCall (connection, "sync_contact", { contact });
  },
  async addEmailTouchpoint (
    connection: ProviderConnection,
    touchpoint: Record < string, any>,
  ) {"
    return mockProviderCall (connection, "add_email_touchpoint", { touchpoint });
  },
  async addProjectNote (
    connection: ProviderConnection,
    note: Record < string, any>,
  ) {"
    return mockProviderCall (connection, "add_project_note", { note });
  },
<<<<<<< HEAD
  const log: SyncLogEntry = {
    id: uuidv4()
    timestamp: Date.now()
    providerId: connection.providerId
    level: "info"
    action
    details
pr-12243
  }

  async disconnect(): Promise<IntegrationResponse> {
    return { success: true };
  }

  async test(): Promise<IntegrationResponse> {
    return this.connect();
  }
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;
// ATS actions;
export const ats = {}
  async update_status (
    connection: ProviderConnection,
    status: Record < string, any>,
  ) {";
    return mockProviderCall (connection, "update_status", { status });
  },
}

;





=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}
;
// ATS actions;
export const ats = {}
  async update_status (
    connection: ProviderConnection,
    status: Record < string, any>,
  ) {";
    return mockProviderCall (connection, "update_status", { status });
  },
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243

export class WebhookConnector extends BaseConnector {
  async connect(): Promise<IntegrationResponse> {
    return { success: true };
  }

  async disconnect(): Promise<IntegrationResponse> {
    return { success: true };
  }

  async test(): Promise<IntegrationResponse> {
    return { success: true };
  }
}
ursor/fix-website-loading-errors-and-merge-6662
// Email actions
export const email = {
=======



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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
  ) {'
    return executeProviderAction(connection, 'createCandidate', { candidate });
  },
};

<<<<<<< HEAD

<<<<<<< HEAD
// Email actions;
export const email = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
// Email actions
export const email = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  async sendNotification(
    connection: ProviderConnection,
    notification: Record<string, any>
  ) {';
    return executeProviderAction(connection, 'sendNotification', { notification });
  },
};

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
    return simulateAction(connection, 'ats.updateStatus', { change });
  },
};
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
