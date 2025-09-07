<<<<<<< HEAD
<<<<<<< HEAD




import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
=======
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



<<<<<<< HEAD

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b






async function callProvider<T>(
  connection: ProviderConnection,
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
}
=======
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';
import { ProviderConnection, SyncLogEntry } from "./types";
import { v4 as uuidv4 } from "uuid";
import { ProviderConnection, SyncLogEntry } from './types';
import { v4 as uuidv4 } from 'uuid';

pr-12243
>>>>>>> origin/chore/fix-lint-and-merge

import { IntegrationConfig, IntegrationResponse, ApiEndpoint } from './types';

export class BaseConnector {
  protected config: IntegrationConfig;

  constructor(config: IntegrationConfig) {
    this.config = config;

<<<<<<< HEAD
  async sync(): Promise<SyncLogEntry[]> {
    // Implementation for Slack sync
}
// ATS actions
export const ats = {
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const log: SyncLogEntry = {
    id: uuidv4(),
    timestamp: Date.now(),
    providerId: connection.providerId,
    level: 'info',
    action,
  return { log, result: { ok: true } as unknown as T };
import { ProviderConnection, SyncLogEntry  } from './types';
import { v4 as uuidv4  } from 'uuid';
async function mockProviderCall<T>(connection: ProviderConnection;
  action: string;
  details: Record<string, any>;
): Promise<{ log: SyncLogEntry; result: T }> {async function callProvider<T>(connection: ProviderConnection,action: string,details: Record<string, any>;
): Promise<{ log: SyncLogEntry; result: T }> {const log: SyncLogEntry = {id: uuidv4(),timestamp: Date.now(),providerId: connection.providerId,level: 'info',action,details;
  }// In a real implementation, call provider SDK/API here using connection.accessToken;
  return { log, result: { ok: true } as unknown as T }}// CRM actions;
export const crm = {async syncContact(connection: ProviderConnection;
    contact: Record<string, any>;
  ) {return mockProviderCall(connection, "sync_contact", { contact })}
  async addEmailTouchpoint(connection: ProviderConnection;
    touchpoint: Record<string, any>;
  ) {return mockProviderCall(connection, "add_email_touchpoint", { touchpoint })}
  async addProjectNote(connection: ProviderConnection;
    note: Record<string, any>;
  ) {return mockProviderCall(connection, "add_project_note", { note })}
}
// ATS actions;
export const ats = {return simulateAction(connection, 'crm.addProjectNote', { note })},async addEmailTouchpoint(connection: ProviderConnection,touch: Record<string, any>;
  ) {return simulateAction(connection, 'crm.addEmailTouchpoint', { touch })}
}// ATS actions;
export const ats = {const log: SyncLogEntry = {id: uuidv4(),timestamp: Date.now(),providerId: connection.providerId,level: 'info',action,return { log, result: { ok: true } as unknown as T }import { ProviderConnection, SyncLogEntry   } from './types';
import { v4 as uuidv4    } from './uuid';async function mockProviderCall < T>(connection: ProviderConnection,action: string,details: Record < string, any>,): Promise<{ log: SyncLogEntry; result: T }> {const log: SyncLogEntry = {id: uuidv4 (),timestamp: Date.now (),provider_id: connection.provider_id,level: "info",action,details;
    details;
    details;
  }// In a real implementation, call provider SDK / API here using connection.access_token;
  return { log, result: { ok: true } as unknown as T }
}
// CRM actions;
export const crm = {async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {return simulateAction(connection, 'crm.addEmailTouchpoint', { touch })async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {return simulateAction(connection, 'crm.addEmailTouchpoint', { touch })async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {return simulateAction(connection, 'crm.addEmailTouchpoint', { touch })}}// ATS actions;
export const ats = {async pushApplicant($2) {return simulateAction($3)},async uploadResume($2) {return simulateAction($3)},async updateStatus(connection: ProviderConnection, change: Record<string, any>) {return simulateAction(connection, 'ats.updateStatus', { change })}}async pushApplicant(connection: ProviderConnection,applicant: Record<string, any>;
  ) {return simulateAction(connection, 'ats.pushApplicant', { applicant })},async uploadResume(connection: ProviderConnection,resume: Record<string, any>;
  ) {return simulateAction(connection, 'ats.uploadResume', {resumeMeta: { name: resume?.name }
    })},async updateStatus(connection: ProviderConnection;
    status: Record<string, any>;
  ) {connection: ProviderConnection,status: Record<string, any>,) {return mockProviderCall(connection, "update_status", { status })}
}
  async sync_contact (connection: ProviderConnection,contact: Record < string, any>,) {return mockProviderCall (connection, "sync_contact", { contact })},async addEmailTouchpoint (connection: ProviderConnection,touchpoint: Record < string, any>,) {return mockProviderCall (connection, "add_email_touchpoint", { touchpoint })},async addProjectNote (connection: ProviderConnection,note: Record < string, any>,) {return mockProviderCall (connection, "add_project_note", { note })},const log: SyncLogEntry = {id: uuidv4()timestamp: Date.now()providerId: connection.providerId;
    level: "info";
    action;
    details;
  }
  // In a real implementation, call provider SDK/API here using connection.accessToken;
  return { log, result: { ok: true } as unknown as T }}// ATS actions;
export const ats = {async update_status (connection: ProviderConnection,status: Record < string, any>,) {return mockProviderCall (connection, "update_status", { status })}
}}
}}
}}// ATS actions;
export const ats = {async update_status (connection: ProviderConnection,status: Record < string, any>,) {return mockProviderCall (connection, "update_status", { status })}
}}
}async createCandidate(connection: ProviderConnection,candidate: Record<string, any>;
  ) {return executeProviderAction(connection, 'createCandidate', { candidate })}
}}
}}
}ursor/fix-website-loading-errors-and-merge-6662;
// Email actions;
export const email = {async sendNotification(connection: ProviderConnection,notification: Record<string, any>;
  ) {return executeProviderAction(connection, 'sendNotification', { notification })}
}}
}ursor/fix-website-loading-errors-and-merge-6662;
    return simulateAction(connection, 'ats.updateStatus', { change })}
}
export const crm = {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/expand-services-advertise-and-build-project-c28b

import { ProviderConnection, SyncLogEntry } from "./types";

import { v4 as uuidv4 } from "uuid";
async function mockProviderCall<T>(
  connection: ProviderConnection;
  action: string;
  details: Record<string, any>

origin/cursor/expand-services-advertise-and-build-project-c28b

async function callProvider<T>(

async function mockProviderCall<T>(
pr-12325

async function mockProviderCall<T>(
  connection: ProviderConnection;,
  action: string;,
  details: Record<string;, any>
): Promise<{ log: SyncLogEntry; result: T ;}> {
  const log: SyncLogEntry = {
    id: uuidv4();,
    timestamp: Date.now();,
    providerId: connection.providerId;,
    level: 'info';,
    action,
    details,
  };
  // In a real implementation, call provider SDK/API here using connection.accessToken
  return { log, result: { ok: true ;} as unknown as T };
}

// CRM actions
export const crm = {
origin/cursor/automate-test-improve-and-merge-code-2533

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

  ) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },
  async addEmailTouchpoint(
    connection: ProviderConnection;,
    touch: Record<string;, any>
  ) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  },
};

// ATS actions
export const ats = {

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
>>>>>>> origin/chore/fix-lint-and-merge

origin/cursor/expand-services-advertise-and-build-project-c28b

  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
<<<<<<< HEAD



  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });


  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });




  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  }

};

// ATS actions
export const ats = {


  async pushApplicant($2) {
    return simulateAction($3);
  async syncContact(connection: ProviderConnection, contact: Record<string, any>) {
    return simulateAction(connection, 'crm.syncContact', { contact });
  },
  async addProjectNote(connection: ProviderConnection, note: Record<string, any>) {
    return simulateAction(connection, 'crm.addProjectNote', { note });
  },
  async addEmailTouchpoint(connection: ProviderConnection, touch: Record<string, any>) {
    return simulateAction(connection, 'crm.addEmailTouchpoint', { touch });
  }
};

// ATS actions
export const ats = {
  async pushApplicant(connection: ProviderConnection, applicant: Record<string, any>) {
    return simulateAction(connection, 'ats.pushApplicant', { applicant });
  },
  async uploadResume(connection: ProviderConnection, resume: Record<string, any>) {
    return simulateAction(connection, 'ats.uploadResume', { resumeMeta: { name: resume?.name } });
  },
  async updateStatus(connection: ProviderConnection, change: Record<string, any>) {
<<<<<<< HEAD
    return simulateAction(connection, 'ats.updateStatus', { change });
  }
};
    return executeProviderAction(connection, 'sendNotification', { notification });
=======
pr-12243

    status: Record<string, any>

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

origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243

export class WebhookConnector extends BaseConnector {
  async connect(): Promise<IntegrationResponse> {
    return { success: true ;};
>>>>>>> origin/chore/fix-lint-and-merge
  }

  async disconnect(): Promise<IntegrationResponse> {
    return { success: true ;};
  }

  async test(): Promise<IntegrationResponse> {
    return { success: true ;};
  }
}
ursor/fix-website-loading-errors-and-merge-6662
// Email actions
export const email = {
=======
    return simulateAction(connection, 'ats.updateStatus', { change })
  }};

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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  async createCandidate(
    connection: ProviderConnection,
    candidate: Record<string, any>
  ) {'
    return executeProviderAction(connection, 'createCandidate', { candidate });
  },
};

<<<<<<< HEAD
// Email actions
export const email = {

  async sendNotification(

    return executeProviderAction(connection, 'sendNotification', { notification });
  },

};

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD

    return simulateAction(connection, 'ats.updateStatus, { change });
  }}
origin/cursor/automate-test-improve-and-merge-code-2533





    return simulateAction(connection, ats.updateStatus', { change });
  }}

  }},
=======
    return simulateAction(connection, 'ats.updateStatus', { change });
  },
};
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
