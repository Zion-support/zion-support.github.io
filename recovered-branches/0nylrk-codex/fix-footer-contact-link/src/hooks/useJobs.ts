
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { Job, JobStatus } from "@/types/jobs",
import { toast } from "sonner",
import { useAuth } from "./useAuth";
import { createJob, updateJob, getJobById } from "@/services/jobService";
export const useJobs = null;
