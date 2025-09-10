import { _useEffect, useState, useCallback } from "react"; // Added useCallback
import { _supabase } from "@/integrations/supabase/client";
import { _useAuth } from "@/hooks/useAuth";
 from "@/types/points";