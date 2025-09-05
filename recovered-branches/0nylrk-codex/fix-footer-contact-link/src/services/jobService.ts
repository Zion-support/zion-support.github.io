

export async function createJob(_jobData: unknown) {_try {
    const { data, _error} = await supabase
      .from('jobs')
      .insert([jobData])
      .select()
      .single();
      
    if (error) throw error;
    return data;
  } catch (error: unknown) {_throw new Error(error.message || "Failed to create job");}
}

export async function updateJob(_jobId: string, _jobData: unknown) {_try {
    const { data, _error} = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', jobId)
      .select()
      .single();
      
    if (error) throw error;
    return data;
  } catch (error: unknown) {_throw new Error(error.message || "Failed to update job");}
}

export async function getJobById(_jobId: string) {_try {
    const { data, _error} = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .single();
      
    if (error) throw error;
    return data;
  } catch (error: unknown) {_toast.error("Failed to load job details");
    return null;}
}
