
import { useState, useEffect  } from 'react';
import { GetServerSideProps  } from 'next';
import fs from 'fs',
import fs from 'fs',;
import path from 'path';

import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw  } from 'lucide-react';


  stack?: string;
  url?: string;
  userAgent?: string;
  userId?: string;

  error?: {
  error?: {;
    name: string;
    message: string;
    stack?: string;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
interface LogEntry {
  id: string;
  timestamp: string;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical',;
  message: string;
  category: string;
  context?: Record<string, unknown>,;
  stack?: string,;
  url?: string,;
  userAgent?: string,;
  userId?: string,;
  sessionId: string;
  source: 'client' | 'server' | 'middleware' | 'api',;
  component?: string,;
  feature?: string,;
  error?: {;
    name: string;
    message: string;
    stack?: string,;
    cause?: unknown;
  },;
  performance?: {;
    memory?: number,;
    timing?: number,;
    fps?: number;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface LogsPageProps {;

  };
  performance?: {;
    duration: number;

    memory?: number;
  }
interface LogsPageProps {;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  category: string;

    cause?: unknown
  },
  performance?: {
    memory?: number;
    timing?: number;
    fps?: number
  }
}


interface LogsPageProps {
origin/cursor/automate-test-improve-and-merge-code-2533
  logs: LogEntry[];
  errorCount: number;
  warningCount: number;
  totalCount: number;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

const LogLevelIcon = ({ level }: { level: LogEntry['level'] }) => {
  switch (level) {
    case 'debug':
      return <Info className="h-4 w-4 text-blue-500" />,

  lastUpdated: string
}

const LogLevelIcon = null;

