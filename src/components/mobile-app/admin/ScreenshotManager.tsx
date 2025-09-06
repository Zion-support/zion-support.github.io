<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Trash2, Plus } from 'lucide-react';
import { AppPlatform } from './MetadataManager';
import { toast } from 'sonner';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import React, { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Trash2, Plus } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
import { toast } from "sonner";
interface ScreenshotManagerProps {
  platform: AppPlatform
}

type Screenshot = {
  id: string,
  url: string,
  file: File
};

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addScreenshots(Array.from(e.target.files))
    }
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    const maxScreenshots = platform === "ios" ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots.length;
    
      
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
return filtered;
}) ;
};
<CardHeader> <CardTitle className="text-lg" >App Screenshots</CardTitle> </CardHeader> <CardContent> <div className= {;
  `border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors $ {";
  isDragging > <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" /> <p className="text-sm mb-2" >Drag & drop screenshots here</p> <input > <Plus className="mr-2 h-4 w-4" /> Select Files </Button> </div> > <Trash2 className="h-3 w-3" /> </button> </div>) ) ;
}</div> </CardContent> </Card>) ;
};
"
=======

<<<<<<< HEAD
  
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
<<<<<<< HEAD
    const maxScreenshots = platform === "ios" ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots.length;
    
<<<<<<< HEAD
      
<<<<<<< HEAD

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
