 
}const {
  modelId, jobId 
}= await req.json ();
if (!modelId && !jobId) {
  
}//If we have a specific job ID, check that job //Otherwise, look up the job ID from our database first let finetuneJobId = jobId;
//This would require a database lookup in the real implementation //For now, we'll simulate a response //In a real implementation, you would: //1. Query your database to find the job ID associated with this model ID //2. Then use that job ID to check status with OpenAI "Authorization": `Bearer $ {
  openAIApiKey 
}`;
"Content-Type": "application/json" 
}
});
//If 404, the job doesn't exist or is deleted if (response.status === 404) {
  return new Response ();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}case "failed": status = "failed";
error = data.error?.message || "Unknown error occurred during training";
break;
case "cancelled": status = "failed";
error = "Training job was cancelled";
break;
case "running": status = "running";
break;
default: status = "queued" 
}
});
