

=======
import { useState, useEffect  } from './react';
import { format  } from './date - fns';
import { List, RefreshCw } from 'lucide-react'import { useApiKeys  } from '@/hooks / useApiKeys';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components / ui / select';
import { Badge  } from '@/components / ui / badge';
import { ApiLogsChart  } from './ApiLogsChart';
export /**
 * ApiLogs - Function description
 */
function ApiLogs() {
  const { logs, total_logs, loading, fetchApiLogs } = useApiKeys ();
  const [page_size, setPageSize] = useState (25);
  const [current_page, setCurrentPage] = useState (0);
  const hasNextPage = current_page < total_pages - 1;
  const hasPrevPage = current_page > 0);
}
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
