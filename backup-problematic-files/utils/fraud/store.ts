

export interface FraudRecord {
:backup-problematic-files/utils/fraud/store.ts
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



