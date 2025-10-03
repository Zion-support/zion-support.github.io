




  AlertDialogTitle,;"
  AlertDialogTrigger} from "@/components/ui/alert-dialog",;""
import { Avatar } from "@/components/ui/avatar";""
import { Badge } from "@/components/ui/badge";""
import { Textarea } from "@/components/ui/textarea";""
import { toast } from "@/hooks/use-toast";""
import { supabase } from "@/integrations/supabase/client";""
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection";"
      const { data, error } = await supabase;
        .from("project_notes");





case "offer accepted": return <Badge className="bg-green-100 text-green-800">Offer Accepted;""
case "changes requested": return <Badge variant="secondary">Changes Requested;""
case "in progress": return <Badge className="bg-blue-100 text-blue-800">In Progress;""
case "completed": return <Badge variant="default">Completed;""
case "canceled": return <Badge variant="destructive">Canceled;""
default: return <Badge variant="outline"> {";

} "
<p>Loading project details...</p> </div> </div> </div> <Card> <CardContent className="flex flex-col items-center justify-center py-10" > <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" /> <h2 className="text-xl font-bold mb-2" >Project Not Found</h2> <p className="text-muted-foreground mb-4" > The project you're looking for doesn't exist or you don't have access to it. </p> <Button onClick= {')
  () => navigate ("/dashboard")"
}> Return to Dashboard    </div>) "
}//Check if user is either the client or the talent container mx-auto px-4 py-8"> <div className=" mb-6"> <div className=" flex flex-col md: flex-row justify-between md:items-center gap-4 mb-2"> <div> </span> </div> </div> <AlertDialog> <AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Accept Offer   <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Accept Project Offer? <AlertDialogDescription> By accepting this offer;, you agree to the project terms and timeline. This will initiate the contract and start the project.   <AlertDialogFooter> <AlertDialogCancel>Cancel <AlertDialogAction onClick= {""
  () => handleStatusChange (" offer accepted")"
}> Accept Offer      </>) "
}<AlertDialogTrigger asChild> <Button variant=" default"> <CheckCircle2 className=" mr-2 h-4 w-4"/> Mark as Completed   <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Mark Project as Completed? <AlertDialogDescription> This will finalize the project and mark it as complete. Make sure all deliverables have been provided and approved.   <AlertDialogFooter> <AlertDialogCancel>Cancel <AlertDialogAction onClick= {""
  () => handleStatusChange (" completed")"
}> Mark as Completed    ) 
}<Link to= {`;
  `/project/$ {
  project.id;`;
}/milestones` "
}> <Layers className=" mr-2 h-4 w-4"/> Milestones  )"
}/room` "
}> <Video className=" mr-2 h-4 w-4"/> Project Room  )""
}> <MessageSquare className=" mr-2 h-4 w-4"/> Message )"
}</div> </div> </div>) "
} <TabsContent value=" details"> <Card> <CardHeader> <CardTitle>Project Scope <CardDescription> Project details and expectations   <CardContent> <div className=" space-y-4"> <div> </div> </div> <div>  </div> <div> </div> </div> </div>    <TabsContent value=" timeline"> <Card> <CardHeader> <CardTitle>Project Timeline <CardDescription> Key dates and milestones   <CardContent> <div className=" space-y-4"> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Calendar className=" h-5 w-5 text-primary mt-0.5"/> <div> </div> </div> <div className=" flex items-start gap-3 p-3 bg-muted/30 rounded-md"> <Clock className=" h-5 w-5 text-primary mt-0.5"/> <div> </div> </div> </div> </div>    <TabsContent value=" documents"> <Card> <CardHeader> <CardTitle>Project Documents <CardDescription> Agreements and relevant files   <CardContent> <div> <h3 className=" font-semibold">Project Agreement</h3> <p className=" text-sm text-muted-foreground"> Uploaded when project was created </p> </div> </div> <Button variant=" outline"size=" sm"asChild> <a href= {"
  project.agreement url;"
}target=" blank"rel=" noopener noreferrer"> View   </div>) : (<div className=" text-center py-8"> <FileText className=" h-10 w-10 text-muted-foreground mx-auto mb-2"/> <h3 className=" font-semibold">No Documents Yet</h3> <p className=" text-sm text-muted-foreground"> No documents have been uploaded to this project. </p> </div>)""
}   <TabsContent value=" notes"> <Card> <CardHeader> <CardTitle>Project Notes <CardDescription> Shared notes and updates   <CardContent> <img src= {"
}/>) : (<User className=" h-4 w-4"/>)"
} </div>) ) ) : (<div className=" text-center py-8"> <MessageSquare className=" h-8 w-8 text-muted-foreground mx-auto mb-2"/> <p className=" text-muted-foreground"> No notes yet. Add the first note to this project. </p> </div>)"
}</div> {"

