
import {useState, useEffect} from "react"
import {supabase} from "@/integrations/supabase/
import {Job, JobStatus} from "@/types/
import {useAuth} from "./
import {createJob, updateJob, getJobById} from "@/services/