<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';
import { AppPlatform } from './MetadataManager';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
interface ChangelogManagerProps {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  platform: AppPlatform;
}

type ChangelogEntry = {
  id: string;
  version: string;
  date: string;
  changes: string;
};

  
  
    });
  };
  
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };
  
  );
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
  
<<<<<<< HEAD

  

<<<<<<< HEAD
  );

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
