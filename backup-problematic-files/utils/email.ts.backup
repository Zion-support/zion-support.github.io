<<<<<<< HEAD



=======
import fs from 'fs-extra';
import path from 'path';
export interface WarningEmailPayload {
export interface WarningEmailPayload {;
  toUserId: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  toAddress?: string | null;
  subject: string;
  body: string;
}
<<<<<<< HEAD




=======
export interface EmailOptions {
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
;
export async function sendWarningEmail(payload: WarningEmailPayload): Promise<void> {;
  const logDir = path.resolve(process.cwd(), 'data/fraud'),;
  const logPath = path.join(logDir, 'emails.log'),;
  await fs.ensureDir(logDir);
  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress || 'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
