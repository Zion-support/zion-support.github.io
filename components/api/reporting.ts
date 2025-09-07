import type { NextApiRequest, NextApiResponse } from 'next';

import { authenticateRequest  } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';

interface ReportingData {
  byTenant: Record<string, {}
    funnel: { stage: string, count: number,}
}[];
    timeToHireDays: number;
    costPerHireUsd?: number;

    updatedAt: string
  }>
}
  >;

origin/cursor/automate-test-improve-and-merge-code-2533

  >;


    return res.status(200).json(updated.byTenant[tenantId])
  }
return res.status(405).json({ error: 'Method not allowed',}
});
}
origin/cursor/automate-test-improve-and-merge-code-2533

