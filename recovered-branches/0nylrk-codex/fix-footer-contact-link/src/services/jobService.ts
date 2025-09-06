
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client",
import { toast } from "sonner",
import {supabase} from "@/integrations/supabase/client";
import {toast} from "sonner";
import { supabase } from "@/integrations/supabase/client",
import { toast } from "sonner",
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export async function createJob(jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert([jobData])

    if (error) throw error,
    return data
  } catch (error: any) {
    console.error("Error creating job:", error),
    throw new Error(error.message || "Failed to create job")

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (error) throw error,
    return data
  } catch (error: any) {
    console.error("Error updating job:", error),
    throw new Error(error.message || "Failed to update job")

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return data
  } catch (error: any) {
    console && console.error("Error fetching job:", error);
    toast && toast.error("Failed to load job details");
    return null
=======

import { supabase } from '@/integrations / supabase / client';
import { toast } from './sonner';
export async /**
 * create_job - Function description
 */
function create_job() {
  try {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }

}
;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
