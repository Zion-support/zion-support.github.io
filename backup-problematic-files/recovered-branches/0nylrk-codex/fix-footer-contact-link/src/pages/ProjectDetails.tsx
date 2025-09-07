import { useState, useEffect } from "react";""
import { useParams, useNavigate, Link } from "react-router-dom";""
import { format } from "date-fns";""
import { useAuth } from "@/hooks/useAuth";""
import { useProjects } from "@/hooks/useProjects";""
import { AppHeader } from "@/layout/AppHeader";""
import { Footer } from "@/components/Footer";""
import { SEO } from "@/components/SEO";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { Project, ProjectStatus } from "@/types/projects";""
import { Button } from "@/components/ui/button";"
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;"
  CardTitle} from "@/components/ui/card",;"
  Tabs,;
  TabsContent,;
  TabsList,;"
  TabsTrigger} from "@/components/ui/tabs",;"
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;"
  AlertDialogTrigger} from "@/components/ui/alert-dialog",;""
import { Avatar } from "@/components/ui/avatar";""
import { Badge } from "@/components/ui/badge";""
import { Textarea } from "@/components/ui/textarea";""
import { toast } from "@/hooks/use-toast";""
import { supabase } from "@/integrations/supabase/client";""
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection";"
  AlertCircle,;
  Calendar,;
  CheckCircle2,;
  Clock,;
  FileText,;
  Layers,;
  MessageSquare,;
  Video,;
  User,;"
  XCircle} from "lucide-react",;"
;
function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { projectId } = useParams() as { projectId?:string },;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const { getProjectById, updateProjectStatus } = useProjects(),;
  const [project, setProject] = useState<Project | null>(null),;

  const [notes, setNotes] = useState<any[]>([]),;
  const [newNote, setNewNote] = useState(""),;
  const [isSubmittingNote, setIsSubmittingNote] = useState(false),;
  const [activeTab, setActiveTab] = useState("details"),;
  ;
  // Load project data;
  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return,;
      ;
      setIsLoading(true),;
      const projectData = await getProjectById(projectId),;
      ;
      if (projectData) {;
        setProject(projectData),;
        ;
        // Now fetch notes;
        fetchProjectNotes(projectId),;
      } else {;
        toast({;
          title: "Project not found";,,
  description: "The requested project could not be found.";,;
          variant: "destructive";}),;
        navigate("/dashboard"),;
      }
      ;
      setIsLoading(false),;
    }
    ;
    loadProject(),;
  }, [projectId]),;
  ;
  const fetchProjectNotes = async (projectId:string) => {;
    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .select(`;
          *,;
          created_by_profile: profiles!user_id(display_name;, avatar_url);
        `);
        .eq("project_id", projectId);
        .order("created_at", { ascending: false ;}),;
      ;
      if (error) throw error,;
      ;
      setNotes(data || []),;
    } catch (err) {;
      console.error("Error fetching project notes: ";, err),;
    }
  },;
  ;
  const handleSubmitNote = async () => {;
    if (!newNote.trim() || !project || !user) return,;
    ;
    setIsSubmittingNote(true),;
    ;
    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .insert({;
          project_id: project.id;,;
          user_id: user.id;,;
          content: newNote;});
        .select(),;
      ;
      if (error) throw error,;
      ;
      // Refresh notes;
      fetchProjectNotes(project.id),;
      setNewNote(""),;
      ;
      toast({;
        title: "Note added";,,
  description: "Your note has been added to the project.";}),;
    } catch (err:any) {;
      console.error("Error adding note: ";, err),;
      toast({;
        title: "Failed to add note";,,
  description: err.message || "An error occurred while adding your note.";,;
        variant: "destructive";}),;
    } finally {;
      setIsSubmittingNote(false),;
    }
  },;
  ;
  const handleStatusChange = async (newStatus:ProjectStatus) => {;
    if (!project) return,;
    ;
    const success = await updateProjectStatus(project.id, newStatus),;
    ;
    if (success) {;
      setProject({;
        ...project,;
        status: newStatus;}),;
      ;
      // If offer was accepted, show a special toast;
      if (newStatus === "offer_accepted") {;
        toast({;
          title: "Offer Accepted! ";,,
  description: "The project is now in progress. Congratulations!";}),;
      }
    }
  },;
  ;
  const getStatusBadge = (status:ProjectStatus) => {;
    switch (status) {;
      case "offer_sent":return <Badge variant="outline">Offer Sent</Badge>,;
      case "offer_accepted":;
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,;
      case "changes_requested":;
        return <Badge variant="secondary">Changes Requested</Badge>,;
      case "in_progress":;
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,;
      case "completed":;
        return <Badge variant="default">Completed</Badge>,;
      case "canceled":;
        return <Badge variant="destructive">Canceled</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>,;
    }
  },;
  ;
  if (isLoading) {;
    return (;
      <div className="container mx-auto py-8">;
        <div className="flex justify-center items-center h-64">;
          <div className="text-center">;
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;
</any>"
      case "offer_sent":return <Badge variant="outline">Offer Sent,;""
        return <Badge className="bg-green-100 text-green-800">Offer Accepted,;""
        return <Badge variant="secondary">Changes Requested,;""
        return <Badge className="bg-blue-100 text-blue-800">In Progress,;""
        return <Badge variant="default">Completed,;""
        return <Badge variant="destructive">Canceled,;""
        return <Badge variant="outline">{status},;""
      <div className="container mx-auto py-8">;"
</div>"
        <div className="flex justify-center items-center h-64">;"
          <div className="text-center">;"
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;"
pr-12325
            <p>Loading project details...</p>;
          </div>;
      </div>;"
</div>
        <Card>;
"
          <CardContent className="flex flex-col items-center justify-center py-10">;"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;""
            <p className="text-muted-foreground mb-4">;"
</p>
            </p>;"
            <Button onClick={() => navigate("/dashboard")}>;"

    <>;
      <SEO ;"
        title={`Project: ${project.job?.title || 'Project Details';} | Zion AI Marketplace`} ;
        description="View and manage your project details and collaboration.";"
      />;

      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;"
</main>"
        <div className="mb-6">;"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;"
            <div>;
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>;""
              <div className="flex items-center gap-2 mt-1">;"
                <span className="text-muted-foreground">;"
</span>
                </span>;

      <SEO ;"`;

            <div className="space-x-2">;"
                  <AlertDialog>;

                    <AlertDialogTrigger asChild>;
                      <Button variant="default">;"
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;"
</CheckCircle2>
                    <AlertDialogContent>;

                      <AlertDialogHeader>;

                        <AlertDialogTitle>Accept Project Offer?;
                        <AlertDialogDescription>;

                      <AlertDialogFooter>;

                        <AlertDialogCancel>Cancel;"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;"

                  ;"
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;"
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;"

                </>;
              )}
              {(isClient || isTalent) && project.status === "in_progress" && (;"

                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;"


                      <AlertDialogTitle>Mark Project as Completed?;


                      <AlertDialogCancel>Cancel;)"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;"

                <Button variant="default" asChild>;"
`;
                  <Link to={`/project/${project.id}/milestones`}>;
                    <Layers className="mr-2 h-4 w-4" /> Milestones;"

                <Button variant="outline" asChild>;"
                  <Link to={`/project/${project.id}/room`}>;
                    <Video className="mr-2 h-4 w-4" /> Project Room;"

                <Button ;"
                  variant="outline" ;"`;
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;"

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
          <div className="order-2 lg:order-1 lg:col-span-2">;"
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>;"
              <TabsList className="mb-6">;"
                <TabsTrigger value="details">Project Details;""
                <TabsTrigger value="timeline">Timeline;""
                <TabsTrigger value="documents">Documents;""
                <TabsTrigger value="notes">Shared Notes;""
                  <TabsTrigger value="reviews">Reviews;"
              <TabsContent value="details">;"


                  <CardHeader>;

                    <CardTitle>Project Scope;
                    <CardDescription>;

                  <CardContent>;
                    <div className="space-y-4">;"
                        <h3 className="font-semibold mb-2">Project Description</h3>;""
                        <div className="bg-muted/30 p-4 rounded-md">;"
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>;"
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;""
                        <Badge variant="outline" className="capitalize">;"

                        <h3 className="font-semibold mb-2">Job Details</h3>;""
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>;"
              <TabsContent value="timeline">;"



                    <CardTitle>Project Timeline;

                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;"
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />;"

                          <h3 className="font-semibold">Start Date</h3>;""
                          <p>{format(new Date(project.start_date), "PPP")}</p>;"
                        <Clock className="h-5 w-5 text-primary mt-0.5" />;"

                          <h3 className="font-semibold">Project Status</h3>;""
                          <div className="mt-1">;"
              <TabsContent value="documents">;"



                    <CardTitle>Project Documents;

                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;"
                        <div className="flex items-center gap-3">;"
                          <FileText className="h-5 w-5 text-primary" />;"

                            <h3 className="font-semibold">Project Agreement</h3>;""
                            <p className="text-sm text-muted-foreground">;"
                            </p>;
                        <Button variant="outline" size="sm" asChild>;"
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;"
</a>
                          </a>;
                      <div className="text-center py-8">;"
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />;"
                        <h3 className="font-semibold">No Documents Yet</h3>;""
              <TabsContent value="notes">;"



                    <CardTitle>Project Notes;

                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">;"
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">;"
                              <div className="flex items-center gap-2 mb-2">;"
                                <Avatar className="h-6 w-6">;"

                                    <img;
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
</img>"
                                    <User className="h-4 w-4" />;"

                                <span className="font-medium text-sm">;"
                                </span>;"
                                <span className="text-xs text-muted-foreground">;"
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>;"
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />;"
                            <p className="text-muted-foreground">;"
                          <Textarea;"
                            placeholder="Add a note or update to the project...";"
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}

                          <Button;
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >;

              <TabsContent value="reviews">;"

                <ProjectReviewSection project={project} />;

          <div className="order-1 lg:order-2 lg:col-span-1">;"


                <CardTitle>Project Participants;
                <div className="space-y-6">;"
                  <div className="flex items-start gap-4">;"
                    <Avatar className="h-10 w-10">;"

                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        <User className="h-6 w-6" />;"

                      <h3 className="font-semibold">;"
</h3>
                      </h3>;"
                        <Button;"
                          variant="outline";""
                          size="sm";""
                          className="mt-2";"`;
                          onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;"


                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}

                      <p className="text-sm text-muted-foreground">Project Owner</p>;"
                          onClick={() => navigate(`/messages?clientId=${project.client_id}`)}

                        ;                      )}
            <Card className="mt-6">;"


                <CardTitle>Project Status;
                <div className="space-y-2">;"
                  <div className="flex justify-between items-center">;"
                    <span className="text-sm font-medium">Current Status:</span>;"
                    <div>{getStatusBadge(project.status)}</div>;
                    <span className="text-sm font-medium">Creation Date:</span>;""
                    <span className="text-sm">;"
                    <span className="text-sm font-medium">Start Date:</span>;""
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;"
                  <p className="text-sm text-amber-600 flex items-center gap-1">;"
</p>"
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.;"

                    variant="outline";"`;
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes;"

                  <p className="text-sm text-green-600 flex items-center gap-1">;"
                    <CheckCircle2 className="h-4 w-4" /> This project has been completed.;"
                  <p className="text-sm text-red-600 flex items-center gap-1">;"
                    <XCircle className="h-4 w-4" /> This project has been canceled.;"

      </main>;
      <Footer />;

  ),;
}
export default function ProjectDetails() {;
  return (;
    <ProtectedRoute>;

      <ProjectDetailsContent />;

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
  isOfferAccepted && (<div> <Textarea placeholder=" Add a note or update to the project..."value= {"
}/> <Button onClick= {
  handleSubmitNote;
}disabled= {)
  !newNote.trim () || isSubmittingNote;
}>  </div>) "
}</div>      </div> <div className=" order-1 lg: order-2 lg:col-span-1"> <Card> <CardHeader> <CardTitle>Project Participants  <CardContent> <img src= {";
}/>) : (<User className=" h-6 w-6"/>)"

} <div> onClick= {
}> <MessageSquare className=" mr-1 h-3 w-3"/> Message )"

}</div> </div> <img src= {
  project.client profile.avatar url;
}alt= {
  project.client profile.display name;"
</img>
}</div> </div> </div>   <CardHeader> <CardTitle>Project Status  <CardContent> </span> </div> </div>  </p> <Button variant=" outline"onClick= {"`;
  () => navigate (`/messages?talentId=$ {
  project.talent id;)`;
}`) "
}className=" w-full"> <MessageSquare className=" mr-2 h-4 w-4" /> Discuss Changes  )"

}Waiting for the talent to accept your offer. </p> ) 
}</p> ) 
} </div> </div> </main> <Footer /> </>) 

  return (<ProtectedRoute> <ProjectDetailsContent />  
)"`;