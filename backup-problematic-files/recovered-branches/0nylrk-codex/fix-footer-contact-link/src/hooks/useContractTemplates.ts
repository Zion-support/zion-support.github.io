import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/
import { supabase } from "@/integrations/supabase/
import { useToast } from "@/hooks/
import { useAuth } from "@/hooks/
import { ContractTemplate } from "@/types/
import { ContractFormValues } from "@/components/contracts/components/