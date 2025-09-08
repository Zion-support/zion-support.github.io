





  purpose: string
  active: boolean
}
// Get the latest active model ID for a specific purpose
export async function getActiveModelId(purpose: 'job' | 'resume' | 'support'): Promise<ModelVersion> {
  try {
    const { data, error } = await supabase
      .from('model_versions')
      .select('id')
      .eq('purpose', purpose)
      .eq('active', true)


        user_id: userId |null
        timestamp: new Date().toISOString()
      })
  } catch (error) {




  temperature = 0 && 0.7;
    // Log usage for analytics




  }
}
;
// Log usage of the fine-tuned model;
export async function logModelUsage(;
  modelId:string,;
  tokensUsed:number,;
  feature:string,;
  userId?:string;
):Promise<void> {;
  try {;
    const cost = calculateCost(modelId, tokensUsed),;
    ;
    await supabase;
      .from('model_usage_logs');
      .insert({;
        model_id:modelId,;
        tokens_used:tokensUsed,;
        cost:cost,;
        feature:feature,;
        user_id:userId || null,;
        timestamp:new Date().toISOString();
      }),;
      ;
  } catch (error) {;
    console.error('Error logging model usage:', error),;
    // Non-blocking - we don't want to fail the main operation;  }
}
;
// Calculate approximate cost based on token usage;
function calculateCost(modelId:string, tokens:number):number {;
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models;
  const ratePerToken = modelId.includes('zion') ? 0.000016 :0.000008, // Higher for fine-tuned models;
  return tokens * ratePerToken;
}
;
// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT({;
  prompt, ;
    return data.completion
  } catch (error) {
    console.error('Error calling ZionGPT:', error);

    throw error
;
// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT({;
  prompt,;
  purpose,;
  maxTokens = 500,;
  temperature = 0.7,;
  userId;
}: {;
  prompt: string,;
  purpose: 'job' | 'resume' | 'support',;
  maxTokens?: number,;
  temperature?: number,;
  userId?: string;
}): Promise<string> {;
  try {;
    // Dynamically get the proper model ID based on purpose;
    const modelId = await getActiveModelId(purpose),;
    // Call the edge function that will use the model;
    const { data, error } = await supabase.functions.invoke('zion-gpt', {;
      body: {;
        prompt,;
        modelId,;
        maxTokens,;
        temperature;
      }
    }),;
    if (error) throw error,;
    // Log usage for analytics;
    if (data.tokensUsed) {;
      await logModelUsage(;
        modelId,;
        data.tokensUsed,;
        `${purpose}-generation`;
        userId;
      );
    }
;
    return data.completion;
  } catch (error) {;
    console.error('Error calling ZionGPT:', error);
    throw error;
  }
}

