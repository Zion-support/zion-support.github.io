import { useEffect, useState, useCallback } from "react"; // Added useCallback
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
 from "@/types/points";