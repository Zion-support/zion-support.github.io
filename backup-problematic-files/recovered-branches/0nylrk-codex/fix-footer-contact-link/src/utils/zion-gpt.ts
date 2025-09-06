
  }
} // ZionGPT Utility Functions // This file handles interaction with the fine-tuned ZionGPT model // Get the latest active model ID for a specific purpose export async function getActiveModelId (purpose: 'job' | 'resume' | 'support') : Promise<ModelVersion> {
  try {
  const {
  data, error
}= await supabase .from ('model versions') .select ('id') .eq ('purpose', purpose) .eq ('active', true) .order ('version', {
  ascending: false
}) .limit (1) .single ();
await supabase .from ('model usage logs') .insert ({
  if (error) throw error;
// Log usage for analytics if (data.tokensUsed) {
  await logModelUsage (modelId, data.tokensUsed, `$ {
  purpose
}-generation`;
userId)
}
}
