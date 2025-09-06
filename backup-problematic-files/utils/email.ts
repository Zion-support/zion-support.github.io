<<<<<<< HEAD
import fs from 'fs-extra';
import path from 'path';
export interface WarningEmailPayload {
import fs from 'fs-extra',;
import path from 'path',;
export interface WarningEmailPayload {;
=======
<<<<<<< HEAD:utils/email.ts
import fs from 'fs-extra';
import path from 'path';
<<<<<<< HEAD
export interface WarningEmailPayload {
=======

=======
<<<<<<< HEAD:backup-problematic-files/utils/email.ts
import fs from 'fs-extra',;
import path from 'path',;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/utils/email.ts
export interface WarningEmailPayload {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  toUserId: string;
  toAddress?: string | null;
  subject: string;
  body: string;
}
<<<<<<< HEAD
export interface EmailOptions {

export interface EmailOptions {;
=======
<<<<<<< HEAD
export interface EmailOptions {
=======
<<<<<<< HEAD:utils/email.ts

export interface EmailOptions {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  to: string;
  subject: string;
  body: string;
}
export async function sendWarningEmail(
  payload: WarningEmailPayload
): Promise<void> {;
  const logDir = path.resolve(process.cwd(), 'data/fraud');
  const logPath = path.join(logDir, 'emails.log');
  await fs.ensureDir(logDir);
  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress |'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
}
export async function sendEmail(options: EmailOptions): Promise<void> {
  // Mock implementation - in production, this would send actual emails;
  console.log('Email would be sent:', options);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:backup-problematic-files/utils/email.ts
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import fs from 'fs-extra',;
import path from 'path',;
export interface WarningEmailPayload {;
  toUserId: string,;
  toAddress?: string | null,;
  subject: string,;
  body: string;
}
<<<<<<< HEAD
=======
=======
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
;
export async function sendWarningEmail(payload: WarningEmailPayload): Promise<void> {;
  const logDir = path.resolve(process.cwd(), 'data/fraud'),;
  const logPath = path.join(logDir, 'emails.log'),;
  await fs.ensureDir(logDir);
  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress || 'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export async function sendWarningEmail(record: any): Promise<void> {
  console.log('Sending warning email for fraud record:', record.id);
  // Implementation would send actual email
}

export async function sendNotificationEmail(to: string, subject: string, body: string): Promise<void> {
  console.log('Sending notification email to:', to);
  // Implementation would send actual email
<<<<<<< HEAD
}
}
=======
>>>>>>> main:utils/email.ts
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/utils/email.ts
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/utils/email.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
