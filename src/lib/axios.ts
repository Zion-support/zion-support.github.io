import { Code } from 'lucide-react';

export interface AxiosErrorData {
  message?: string;
  statusCode?: number;
  details?: unknown;
}
