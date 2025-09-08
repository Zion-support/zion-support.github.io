
import { supabase } from "@/integrations/supabase/client",
import { toast } from "sonner",

import {supabase} from "@/integrations/supabase/client";
import {toast} from "sonner";

import { supabase } from "@/integrations/supabase/client",
import { toast } from "sonner",












      .select()
      .single();




  }
}






  // TODO: Implement
pr-12325


function getJobById() {}
  try {}
    const { data, error } = await supabase;'
      .from ('jobs');'
      .select ('*');'


  }
  const {
  data, error 
}= await supabase 
}
}export async function updateJob (jobId: string, jobData: unknown) {
  try {
  const {
  data, error 
}= await supabase .from ('jobs') .update (jobData) .eq ('id', jobId) .select () .single ();
}
}export async function getJobById (jobId: string) {
  try {
  const {
  data, error 
}= await supabase .from ('jobs') .select ('*') .eq ('id', jobId) .single ();
}
}
    if (error) throw error,;
    return data;
  } catch (error: any) {;
    console.error("Error fetching job:", error);
    toast.error("Failed to load job details");
    return null;
  }
}
;



