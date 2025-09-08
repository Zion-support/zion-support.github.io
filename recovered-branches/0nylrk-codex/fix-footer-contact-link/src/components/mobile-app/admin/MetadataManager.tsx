
  appTitle: string,


  const handleSaveMetadata = async (data: AppMetadataValues) => {



    } catch (error) {


      


  },





},

import React, { useState } from "react",;
import { useForm } from "react-hook-form",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { MetadataForm } from "./MetadataForm",;
import { ScreenshotManager } from "./ScreenshotManager",;
import { ChangelogManager } from "./ChangelogManager",;
import { ExportPanel } from "./ExportPanel",;
import { Button } from "@/components/ui/button",;
import { toast } from "sonner",;

export type AppPlatform = "ios" | "android",;


          </TabsList>;




};
    </div>);
}

;




