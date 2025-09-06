import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';
import { AppPlatform } from './MetadataManager';

import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
interface ChangelogManagerProps {
  platform: AppPlatform
}
  );
};
setEntries ([entry, ...entries]);
setNewEntry ({;
  version: "";
date: new Date () .toISOString () .split ('T') [0] || new Date () .toLocaleDateString ('en-CA');
};";
  handleAddEntry ;
}disabled= {;
  !newEntry.version || !newEntry.changes ";
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {;
  entry.id ";
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>) ;
}</div> </div> </CardContent> </Card>) ;
};
'"
