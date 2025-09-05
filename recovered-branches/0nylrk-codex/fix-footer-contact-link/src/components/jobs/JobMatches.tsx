 interface JobMatchesProps {
  jobId: string 
}export function JobMatches ({
  jobId 
}: JobMatchesProps) {
  const {
  matches, isLoading, isProcessing, triggerAIMatching 
}= useJobMatches (jobId);
return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Skeleton className="h-4 w-24" /> </CardTitle> <CardDescription> <Skeleton className="h-4 w-full" /> </CardDescription> </CardHeader> </div> </div>) ) 
}</CardContent> </Card>) 
}/>) ) 
}</div>) 
}