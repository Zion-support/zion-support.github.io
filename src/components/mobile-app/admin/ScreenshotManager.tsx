import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Trash2, Plus } from 'lucide-react';
import { AppPlatform } from './MetadataManager';
import { toast } from 'sonner';

import React, { useState, useRef } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Upload, Trash2, Plus } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
import { toast } from "sonner";
interface ScreenshotManagerProps {
  platform: AppPlatform
}
  );
}setScreenshots (prev => [...prev, ...newScreenshots]);

};
return filtered;
}) ;
};
<CardHeader> <CardTitle className="text-lg" >App Screenshots</CardTitle> </CardHeader> <CardContent> <div className= {;
  `border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors $ {";
  isDragging > <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" /> <p className="text-sm mb-2" >Drag & drop screenshots here</p> <input > <Plus className="mr-2 h-4 w-4" /> Select Files </Button> </div> > <Trash2 className="h-3 w-3" /> </button> </div>) ) ;
}</div> </CardContent> </Card>) ;
};
"
