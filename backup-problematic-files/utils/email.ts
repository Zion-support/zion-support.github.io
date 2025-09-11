
<<<<<<< HEAD
:utils/email.ts
import fs from 'fs-extra';
import path from 'path';
export interface WarningEmailPayload {

:backup-problematic-files/utils/email.ts
import fs from 'fs-extra',;
import path from 'path',;
:backup-problematic-files/utils/email.ts
export interface WarningEmailPayload {;
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  toUserId: string;
  toAddress?: string | null;
  subject: string;
  body: string;
}
<<<<<<< HEAD
export interface EmailOptions {
:utils/email.ts

export interface EmailOptions {;
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
:backup-problematic-files/utils/email.ts
import fs from 'fs-extra',;
import path from 'path',;
export interface WarningEmailPayload {;
  toUserId: string,;
  toAddress?: string | null,;
  subject: string,;
  body: string;
}
}
;
export async function sendWarningEmail(payload: WarningEmailPayload): Promise<void> {;
  const logDir = path.resolve(process.cwd(), 'data/fraud'),;
  const logPath = path.join(logDir, 'emails.log'),;
  await fs.ensureDir(logDir);
  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress || 'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
export async function sendWarningEmail(record: any): Promise<void> {
  console.log('Sending warning email for fraud record:', record.id);
  // Implementation would send actual email
}

export async function sendNotificationEmail(to: string, subject: string, body: string): Promise<void> {
  console.log('Sending notification email to:', to);
  // Implementation would send actual email
main:utils/email.ts
:backup-problematic-files/utils/email.ts
}
}
:backup-problematic-files/utils/email.ts
=======



}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
