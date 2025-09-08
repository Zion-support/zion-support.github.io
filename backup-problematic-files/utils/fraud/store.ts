<<<<<<< HEAD
import fs from 'fs-extra';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import {;
  AdminActionRecord;
  FraudEvent;
  ListFilters;
  MonthlyReport;
  MonitoredSource;
  PrivacySettings;
  StoredFraudRecord} from './types';
const dataDir = path.resolve(process.cwd(), 'data/fraud');
const eventsPath = path.join(dataDir, 'events.jsonl');
const actionsPath = path.join(dataDir, 'actions.jsonl');
const privacyPath = path.join(dataDir, 'privacy.json');
function ensureFiles() {;
  fs.ensureDirSync(dataDir);
  if (!fs.existsSync(eventsPath)) fs.writeFileSync(eventsPath, '');
  if (!fs.existsSync(actionsPath)) fs.writeFileSync(actionsPath, '');
  if (!fs.existsSync(privacyPath)) fs.writeFileSync(privacyPath, JSON.stringify({}));
}



=======
export interface FraudRecord {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  source: string;
  timestamp: string;
  status: 'pending' | 'investigating' | 'resolved' | 'false_positive';
  adminId?: string;
  resolution?: string;
}
<<<<<<< HEAD



export interface MonthlyReport {;


=======
export interface MonthlyReport {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  month: string;
  totalCases: number;
  resolvedCases: number;
  falsePositives: number;
  averageResolutionTime: number;
  topFraudTypes: Array<{ type: string; count: number }>;
}
class FraudStore {
  private records: Map<string, FraudRecord> = new Map();
  createRecord(record: Omit<FraudRecord, 'id' | 'timestamp'>): FraudRecord {
    const id = Date.now().toString();
    const newRecord: FraudRecord = {
      ...record
      id
      timestamp: new Date().toISOString()
    }
    this.records.set(id, newRecord);
    return newRecord;
  }
  getRecord(id: string): FraudRecord | undefined {
    return this.records.get(id);
  }
  updateRecord(id: string, updates: Partial<FraudRecord>): FraudRecord | undefined {
    const record = this.records.get(id);
    if (!record) return undefined;
    const updatedRecord = { ...record, ...updates }
    this.records.set(id, updatedRecord);
    return updatedRecord;
  }
  listRecords(): FraudRecord[] {
    return Array.from(this.records.values());
  }
  async generateMonthlyReport(month: string): Promise<MonthlyReport> {
    const records = this.listRecords();
    const monthRecords = records.filter(r => r.timestamp.startsWith(month));
    return {
      month
      totalCases: monthRecords.length
      resolvedCases: monthRecords.filter(r => r.status === 'resolved').length
      falsePositives: monthRecords.filter(r => r.status === 'false_positive').length
      averageResolutionTime: 24, // placeholder
      topFraudTypes: [
        { type: 'suspicious_activity', count: 5 }
        { type: 'unauthorized_access', count: 3 }
      ]
    }
  }
}
export const fraudStore = new FraudStore();
<<<<<<< HEAD


export const getFraudStore = () => fraudStore;






=======
export const getFraudStore = () => fraudStore;
>>>>>>> origin/cursor/delete-old-data-records-6bba
