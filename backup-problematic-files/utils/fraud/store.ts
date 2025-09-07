  id: string;,
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';',
  description: string;
  source: string;,
  timestamp: string;'
  status: 'pending' | 'investigating' | 'resolved' | 'false_positive';'
  adminId?: string;
  resolution?: string;
}
  month: string;,
  totalCases: number;
  resolvedCases: number;,
  falsePositives: number;
  averageResolutionTime: number;,
  topFraudTypes: Array<{ type: string; count: number }>;
}
class FraudStore {
  // TODO: Implement
}
  private records: Map<string, FraudRecord> = new Map();
</string>'
  createRecord(record: Omit<FraudRecord, 'id' | 'timestamp'>): FraudRecord {'
</FraudRecord>
  updateRecord(id: string, updates: Partial<FraudRecord>): FraudRecord | undefined {
</FraudRecord>
  async generateMonthlyReport(month: string): Promise<MonthlyReport> {
</MonthlyReport>'