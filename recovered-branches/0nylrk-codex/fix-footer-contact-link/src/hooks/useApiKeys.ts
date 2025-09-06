
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
export type ApiKeyScope = any;
    clearNewApiKey: () => setNewApiKey(null)
  }
}
