
,
export interface OperatorSession {,
  id: string,
  name: string,
  status: 'active' | 'inactive' | 'busy',
  currentSessions: string[],
  tags: string[],
  createdAt: Date,
  updatedAt: Date}
,
export interface SupportEvent {,
  type: string,
  sessionId: string,
  payload: any,
  timestamp: Date
}