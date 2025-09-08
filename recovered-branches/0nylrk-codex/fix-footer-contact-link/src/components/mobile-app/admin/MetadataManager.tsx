
<<<<<<< HEAD

  appTitle: string,

=======
appTitle: string,
>>>>>>> origin/cursor/delete-old-data-records-6bba
  shortDescription: string,
  longDescription: string,
  keywords: string[],
  version: string,


<<<<<<< HEAD

  const handleSaveMetadata = async (data: AppMetadataValues) => {

=======
  const handleSaveMetadata = async (data: AppMetadataValues) => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setIsSaving(true)
    try {
      // This would be implemented with actual API calls in production

<<<<<<< HEAD

=======
  const handleSaveMetadata = async (data: AppMetadataValues) => {}
    setIsSaving(true)
    try {};
      // This would be implemented with actual API calls in production;
'
import React, { useState } from './react';'
import { use_form } from './react - hook - form';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { MetadataForm } from './MetadataForm';'
import { ScreenshotManager } from './ScreenshotManager';'
import { ChangelogManager } from './ChangelogManager';'
import { ExportPanel } from './ExportPanel';'
import { Button } from '@/components / ui / button';'
import { toast } from './sonner';"
>>>>>>> origin/cursor/delete-old-data-records-6bba

export type AppPlatform = "ios" | "android";
;
export type AppMetadataValues = {}
  app_title: string,
  short_description: string,
  long_description: string,
  keywords: string[],
  version: string,;
  platform: AppPlatform;
}
;
const default_values: AppMetadataValues = {"
  app_title: "Zion AI Marketplace","
  short_description: "Hire top AI talent or find global IT jobs on the go.",'"
  long_description: "Zion AI Marketplace is your one - stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI - powered matching, secure messaging, and streamlined hiring.";"
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"];"
  version: "1.0.0","
  platform: "ios";
}
;
export const MetadataManager: React.FC = () => {";
  const [current_platform, setCurrentPlatform] = useState < AppPlatform>("ios");
  const [is_saving, setIsSaving] = useState (false);
;
  // Separate form instances for each platform;"
  const ios_form = use_form < AppMetadataValues>({ default_values: { ...default_values, platform: "ios" } }),"
  const android_form = use_form < AppMetadataValues>({ default_values: { ...default_values, platform: "android" } }),"
  const current_form = current_platform === "ios" ? ios_form : android_form;
;
  const handleSaveMetadata = async (data: AppMetadataValues) => {}
    setIsSaving (true),
    try {}
      // This would be implemented with actual API calls in production;"
      console.log ("Saving metadata for", current_platform, data);
;
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 1000));
;"
      toast.success (`${current_platform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
<<<<<<< HEAD

    } catch (error) {

=======


    } catch (error) {"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast.error ("Failed to save metadata");
      console.error (error);
    } finally {}
      setIsSaving (false);
    }
  }

<<<<<<< HEAD

=======
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // // // console.log("Saving metadata for", currentPlatform, data),
      
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),

<<<<<<< HEAD
      
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {"
      toast.error("Failed to save metadata"),
      console.error(error)
    } finally {}
      setIsSaving(false)
    }

<<<<<<< HEAD


  },



=======
  },

  },

  }
  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="bg-zion-blue-dark rounded-lg p-6">

      <Tabs defaultValue="ios" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList className="bg-zion-blue">

            <TabsTrigger value="ios" onClick={() => setCurrentPlatform("ios")}>
              App Store (iOS)
            </TabsTrigger>"
            <TabsTrigger value="android" onClick={() => setCurrentPlatform("android")}>
              Google Play (Android)
            </TabsTrigger>
          </TabsList>


<<<<<<< HEAD
=======
          <Button 
>>>>>>> origin/cursor/delete-old-data-records-6bba

            onClick={currentForm.handleSubmit(handleSaveMetadata)}
            disabled={isSaving}
          >"
            {isSaving ? "Saving..." : "Save Metadata"}
          </Button>
        </div>"
        <TabsContent value="ios" className="mt-0">"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">"
            <div className="lg:col-span-2 space-y-6">
              <MetadataForm form={iosForm} />"
              <ChangelogManager platform="ios" />
            </div>"
            <div className="space-y-6">"
              <ScreenshotManager platform="ios" />"
              <ExportPanel platform="ios" metadata={iosForm.getValues()} />
            </div>
          </div>
        </TabsContent>"
        <TabsContent value="android" className="mt-0">"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">"
            <div className="lg:col-span-2 space-y-6">
              <MetadataForm form={androidForm} />"
              <ChangelogManager platform="android" />
            </div>"
            <div className="space-y-6">"
              <ScreenshotManager platform="android" />"
              <ExportPanel platform="android" metadata={androidForm.getValues()} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )


<<<<<<< HEAD


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

=======
},
import { useForm } from "react-hook-form";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { MetadataForm } from "./MetadataForm",;"
import { ScreenshotManager } from "./ScreenshotManager",;"
import { ChangelogManager } from "./ChangelogManager",;"
import { ExportPanel } from "./ExportPanel",;"
import { Button } from "@/components/ui/button",;"
import { toast } from "sonner",;"
export type AppPlatform = "ios" | "android",;    } finally {;"
      }
export type AppMetadataValues = {;
  appTitle: string,;
  shortDescription: string,;
  longDescription: string,;
  keywords: string[],;
  version: string,;
  platform: AppPlatform;


  const handleSaveMetadata = async (data: AppMetadataValues) => {;
    setIsSaving(true),;

    try {;
      // This would be implemented with actual API calls in production;


      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast && toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
    } catch (error) {;
      toast && toast.error("Failed to save metadata");
      console && console.error(error);
    } finally {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsSaving(false);
    }
  };


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <Tabs defaultValue="ios" className="w-full">;
        <div className="flex justify-between items-center mb-6">;
          <TabsList className="bg-zion-blue">;

            <TabsTrigger value="ios" onClick={() => setCurrentPlatform("ios")}>;
              App Store (iOS);
            </TabsTrigger>;"
            <TabsTrigger value="android" onClick={() => setCurrentPlatform("android")}>;
              Google Play (Android);
            </TabsTrigger>;

<<<<<<< HEAD
          </TabsList>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;

            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={iosForm} />;"
              <ChangelogManager platform="ios" />;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

            </div>;


            </div>;
          </div>;
        </TabsContent>;
      </Tabs>;


<<<<<<< HEAD




};
    </div>);
}

;




=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
