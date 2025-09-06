import React, { useState } from "react";
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,";
} from "@/components/ui/card";"
import { Switch } from "@/components/ui/switch";"
import { Button } from "@/components/ui/button";"
import { Label } from "@/components/ui/label";"
import { ShieldAlert, Info } from "lucide-react";
import {}
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,";
} from "@/components/ui/accordion";"
import { toast } from "@/hooks/use-toast";"
import { supabase } from "@/integrations/supabase/client";"
import { useAuth } from "@/hooks/useAuth";
export function FraudDetectionSettings() {};
  const { user } = useAuth();
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] =
    useState(true);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleSavePreferences = async () => {}
    if (!user?.id) return;
    setIsSaving(true);
    try {}
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({"
        title: "Settings saved","
        description: "Your fraud detection preferences have been updated.",
      });
    } catch (error) {"
      console.error("Error saving preferences:", error);
      toast({"
        title: "Error","
        description: "Failed to save your preferences. Please try again.","
        variant: "destructive",
      });
    } finally {}
      setIsSaving(false);
    }



            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}



  )

  )



    </Card>;
  ),; export function FraudDetectionSettings () {}
  const {};
  user;
}= useAuth ();
const [messageScanningEnabled, setMessageScanningEnabled] = useState (true);
const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState (true);
const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState (true);
const [isSaving, setIsSaving] = useState (false);
const handleSavePreferences = async () => {}
  if (!user?.id) return;
try {}
}catch (error) {'
  console.error ('Error saving preferences:', error);
toast ({}
}finally {}
  setIsSaving (false) 
}




  )
  )


'"