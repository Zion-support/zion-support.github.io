
import {useState, useEffect} from "react";""
import {useParams, useNavigate, Link} from "react-router-dom";""
import {format} from "date-fns";""
import {useAuth} from "@/hooks/useAuth";""
import {useProjects} from "@/hooks/useProjects";""
import {AppHeader} from "@/layout/AppHeader";""
import {Footer} from "@/components/Footer";""
import {SEO} from "@/components/SEO";""
import {ProtectedRoute} from "@/components/ProtectedRoute";""
import {Project, ProjectStatus} from "@/types/projects";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";""
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog";""
import {Avatar} from "@/components/ui/avatar";""
import {Badge} from "@/components/ui/badge";""
import {Textarea} from "@/components/ui/textarea";""
import {toast} from "@/hooks/use-toast";""
import {supabase} from "@/integrations/supabase/client";""
import {ProjectReviewSection} from "@/components/projects/reviews/ProjectReviewSection";""
import {AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle} from "lucide-react";"
function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { projectId } = useParams() as { projectId?: string };
  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();


  const [project, setProject] = useState<Project | null>(null);

  const [notes, setNotes] = useState<any[]>([]);
</any>
  const [project, setProject] = useState<Project | null>(null),

  const [notes, setNotes] = useState<any[]>([]),
  const [project, set_project] = useState < Project | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [notes, set_notes] = useState < any[]>([]);"
  const [new_note, setNewNote] = useState ("");"
  const [isSubmittingNote, setIsSubmittingNote] = useState (false);"
  const [active_tab, setActiveTab] = useState ("details");"
;
  // Load project data;
  useEffect (() => {
    async /**
 * load_project - Function description;
 */
function load_project() {
      // Check condition;
if (return) {
  $2;
}
      setIsLoading (true);
      const project_data = await getProjectById (project_id);
      // Check condition;
if ( {) {
        set_project (project_data);
        // Now fetch notes;
        fetchProjectNotes (project_id);
      } else {
  // TODO: Implement
        toast ({"
          title: "Project not found",""
          description: "The requested project could not be found.",")"
          variant: "destructive"}),""
        navigate ("/dashboard");"
      setIsLoading (false);
    load_project ();
  }, [project_id]);
  const fetchProjectNotes = async (project_id: string) => {
    try {
  // TODO: Implement
      const { data, error } = await supabase;"
        .from ("project_notes");"
        .select (`;
          *;
)
          created_by_profile:profiles ! user_id (display_name, avatar_url);`;
        `);"
        .eq ("project_id", project_id);""
        .order ("created_at", { ascending: false }),"
      // Check condition;
if (throw error) {
      set_notes (data || []);

    } catch (err) {"
      console.error ("Error fetching project notes:", err);"

  const handleSubmitNote = async () => {
    if (|| !project || !user) return) {
    setIsSubmittingNote (true);
  // TODO: Implement
        .insert ({
          project_id: project.id,
          user_id: user.id,)
          content: new_note});
        .select ();
      // Check condition;
      // Refresh notes;
      fetchProjectNotes (project.id);"
      setNewNote ("");"
        title: "Note added",")"
        description: "Your note has been added to the project."});"
    } catch (err: any) {"
      console.error ("Error adding note:", err);"
        title: "Failed to add note",""
        description: err.message || "An error occurred while adding your note.",")"
        variant: "destructive"});"
    } finally {
  // TODO: Implement
      setIsSubmittingNote (false);

  const handleStatusChange = async (new_status: ProjectStatus) => {
    // Check condition;
if (return, ) {
    const success = await updateProjectStatus (project.id, new_status);
    // Check condition;
      set_project ({
        ...project;)
        status: new_status}),
      // If offer was accepted, show a special toast;
      // Check condition;
          title: "Offer Accepted! 🎉",")"
          description: "The project is now in progress. Congratulations!"});"
  const getStatusBadge = (status: ProjectStatus) =>: any {
  // TODO: Implement
    switch (status) {

  // Load project data;
  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return;

      setIsLoading(true);
      const projectData = await getProjectById(projectId);

      if (projectData) {;
        setProject(projectData);

        // Now fetch notes;
        fetchProjectNotes(projectId);
      } else {;
        toast({;"
          title: "Project not found",;""
          description: "The requested project could not be found.",;")"
          variant: "destructive"}),;""
        navigate("/dashboard");"

      setIsLoading(false);


    
    loadProject()
  }, [projectId]),
  

  const fetchProjectNotes = async (projectId: string) => {
  // TODO: Implement
        .from("project_notes")"`;
        .select(`
          *,)
          created_by_profile:profiles!user_id(display_name, avatar_url)`;
        `)"
        .eq("project_id", projectId)""
        .order("created_at", { ascending: false }),"
      if (error) throw error,
      
      setNotes(data || [])
      console.error("Error fetching project notes:", err)"
  },
  
    if (!newNote.trim() || !project || !user) return,
    
    setIsSubmittingNote(true),
    

  // TODO: Implement
        .from("project_notes")"
        .insert({
          project_id: project.id;,
  user_id: user.id;)
          content: newNote})

        .select(),
      
      
      // Refresh notes;
      fetchProjectNotes(project.id),"
      setNewNote(""),"
      toast({"
        title: "Note added"",)"
  description: "Your note has been added to the project."})"
      console.error("Error adding note:", err),"
        title: "Failed to add note"","
  description: err.message |"An error occurred while adding your note."")"
        variant: "destructive"})"
  // TODO: Implement
      setIsSubmittingNote(false)

  
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return,
    
    const success = await updateProjectStatus(project.id, newStatus),
    
    if (success) {
      setProject({
        ...project,)
        status: newStatus}),
      

      // If offer was accepted, show a special toast;"
      if (newStatus === "offer_accepted") {"
          title: "Offer Accepted! 🎉"",)"
  description: "The project is now in progress. Congratulations!"})"

  

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {"
      case "offer_sent": return <Badge variant="outline">Offer Sent,""
        return <Badge className="bg-green-100 text-green-800">Offer Accepted,""
        return <Badge variant="secondary">Changes Requested,""
        return <Badge className="bg-blue-100 text-blue-800">In Progress,""
        return <Badge variant="default">Completed,""
        return <Badge variant="destructive">Canceled""
        return <Badge variant="outline">{status}""
        return <Badge variant="destructive">Canceled,;""
        return <Badge variant="outline">{status};""
      case "offer_sent": return <Badge variant="outline">Offer Sent;""
      <div className="container mx-auto py-8">;"
</div>"
        <div className="flex justify-center items-center h-64">;"
          <div className="text-center">;"
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;"
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
        return <Badge className="bg - green - 100 text - green - 800">Offer Accepted;""
        return <Badge variant="secondary">Changes Requested;""
        return <Badge className="bg - blue - 100 text - blue - 800">In Progress;""
        return <Badge variant="default">Completed;""
        return <Badge variant="destructive">Canceled,""
      <div className="container mx - auto py - 8">;"
        <div className="flex justify - center items - center h - 64">;"
          <div className="text - center">;"
            <div className="animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full mx - auto mb - 4"></div>;"
            <p > Loading project details...</p>;
      </div>);"
          <CardContent className="flex flex - col items - center justify - center py - 10">;"
            <AlertCircle className="h - 10 w - 10 text - muted - foreground mb - 4" />;"
            <h2 className="text - xl font - bold mb - 2">Project Not Found</h2>;""
            <p className="text - muted - foreground mb - 4">;"
            <Button on_click={() => navigate ("/dashboard")}>;"

        ;"
      <div className="container mx-auto py-8">"
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>""
            <p className="text-muted-foreground mb-4">"
            </p>"
            <Button onClick={() => navigate("/dashboard")}>"

            
          
        
    <>
      <SEO;"`;
        title={`Project: ${project.job?.title |'Project Details'} | Zion AI Marketplace`}
        description="View and manage your project details and collaboration.""
      />

      <AppHeader />
      <main className="container mx-auto px-4 py-8">"
</main>"
        <div className="mb-6">"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">"
            <div>
              <h1 className="text-3xl font-bold">{project.job?.title |"Project"}</h1>""
              <div className="flex items-center gap-2 mt-1">"
                <span className="text-muted-foreground">"
</span>
            <div className="space-x-2">"
                  <AlertDialog>

                    <AlertDialogTrigger asChild>
                      <Button variant="default">"
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;"
</CheckCircle2>
                      
                    
                    <AlertDialogContent>

                      <AlertDialogHeader>

                        <AlertDialogTitle>Accept Project Offer?
                        <AlertDialogDescription>

                        
                      
                      <AlertDialogFooter>

                        <AlertDialogCancel>Cancel"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>"

                        
                      
                    
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>"
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;"

                  
                </>
              )}"
              {(isClient |isTalent) && project.status === "in_progress" && ("

                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;"
                    
                  


                      <AlertDialogTitle>Mark Project as Completed?

                      
                    

                      <AlertDialogCancel>Cancel)"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>"

                      
                    
                  
                <Button variant="default" asChild>"
`;
                  <Link to={`/project/${project.id}/milestones`}>
                    <Layers className="mr-2 h-4 w-4" /> Milestones;"

                  
                <Button variant="outline" asChild>"
                  <Link to={`/project/${project.id}/room`}>
                    <Video className="mr-2 h-4 w-4" /> Project Room;"

                  
                
                <Button;"
                  variant="outline""`;
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;"

                
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
          <div className="order-2 lg:order-1 lg:col-span-2">"
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>"
              <TabsList className="mb-6">"
                <TabsTrigger value="details">Project Details""
                <TabsTrigger value="timeline">Timeline""
                <TabsTrigger value="documents">Documents""
                <TabsTrigger value="notes">Shared Notes""
                  <TabsTrigger value="reviews">Reviews"
              <TabsContent value="details">"


                  <CardHeader>

                    <CardTitle>Project Scope
                    <CardDescription>

                    
                  
                  <CardContent>
                    <div className="space-y-4">"
                        <h3 className="font-semibold mb-2">Project Description</h3>""
                        <div className="bg-muted/30 p-4 rounded-md">"
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>"
                        <h3 className="font-semibold mb-2">Payment Terms</h3>""
                        <Badge variant="outline" className="capitalize">"

                        
                        <h3 className="font-semibold mb-2">Job Details</h3>""
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>"
                  
                
              <TabsContent value="timeline">"



                    <CardTitle>Project Timeline

                    
                  
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">"
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />"

                          <h3 className="font-semibold">Start Date</h3>""
                          <p>{format(new Date(project.start_date), "PPP")}</p>"
                        <Clock className="h-5 w-5 text-primary mt-0.5" />"

                          <h3 className="font-semibold">Project Status</h3>""
                          <div className="mt-1">"
                  
                
              <TabsContent value="documents">"



                    <CardTitle>Project Documents

                    
                  
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">"
                        <div className="flex items-center gap-3">"
                          <FileText className="h-5 w-5 text-primary" />"

                            <h3 className="font-semibold">Project Agreement</h3>""
                            <p className="text-sm text-muted-foreground">"
                        <Button variant="outline" size="sm" asChild>"
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">"
</a>
                          
                        
                      <div className="text-center py-8">"
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />"
                        <h3 className="font-semibold">No Documents Yet</h3>""
                  
                
              <TabsContent value="notes">"



                    <CardTitle>Project Notes

                    
                  
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">"
      </div>);
    <>;
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`}
        description="View and manage your project details and collaboration.";"
      />;

      <AppHeader />;
      <main className="container mx - auto px - 4 py - 8">;"
        <div className="mb - 6">;"
          <div className="flex flex - col md:flex - row justify - between md:items - center gap - 4 mb - 2">;"
            <div>;
              <h1 className="text - 3xl font - bold">{project.job?.title || "Project"}</h1>;""
              <div className="flex items - center gap - 2 mt - 1">;"
                <span className="text - muted - foreground">;"
                </span>;
            <div className="space - x-2">;"
                  <AlertDialog>;

                    <AlertDialogTrigger as_child>;
                      <Button variant="default">;"
                        <CheckCircle2 className="mr - 2 h - 4 w - 4" /> Accept Offer;"
                    <AlertDialogContent>;

                      <AlertDialogHeader>;

                        <AlertDialogTitle > Accept Project Offer?;
                        <AlertDialogDescription>;

                      <AlertDialogFooter>;

                        <AlertDialogCancel > Cancel;"
                        <AlertDialogAction on_click={() => handleStatusChange ("offer_accepted")}>;"


                      <CheckCircle2 className="mr - 2 h - 4 w - 4" /> Mark as Completed;"


                      <AlertDialogTitle > Mark Project as Completed?;


                      <AlertDialogAction on_click={() => handleStatusChange ("completed")}>;"

                  <MessageSquare className="mr - 2 h - 4 w - 4" /> Message;"

                )}
                <TabsTrigger value="details">Project Details;""
                <TabsTrigger value="timeline">Timeline;""
                <TabsTrigger value="documents">Documents;""
                <TabsTrigger value="notes">Shared Notes;""
              <TabsContent value="details">;"


                  <CardHeader>;

                    <CardTitle > Project Scope;
                    <CardDescription>;

                  <CardContent>;
                    <div className="space - y-4">;"
                        <h3 className="font - semibold mb - 2">Payment Terms</h3>;""
                        <Badge variant="outline" className="capitalize">;"

              <TabsContent value="timeline">;"



                    <CardTitle > Project Timeline;


              <TabsContent value="documents">;"



                    <CardTitle > Project Documents;


                            <h3 className="font - semibold">Project Agreement</h3>;""
                            <p className="text - sm text - muted - foreground">;"
                            </p>;
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;"
                          </a>;
                      </div>)}
              <TabsContent value="notes">;"



                    <CardTitle > Project Notes;

                            <div key={note.id} className="bg - muted / 30 p - 3 rounded - md">;"
                              <div className="flex items - center gap - 2 mb - 2">;"
                                <Avatar className="h - 6 w - 6">;"

        title={`Project: ${project && project.job?.title || 'Project Details'} | Zion AI Marketplace`}

      <main className="container mx-auto px-4 py-8">;"
        <div className="mb-6">;"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;"
              <h1 className="text-3xl font-bold">{project && project.job?.title || "Project"}</h1>;""
              <div className="flex items-center gap-2 mt-1">;"
                <span className="text-muted-foreground">;"
            <div className="space-x-2">;"

                    <AlertDialogTrigger asChild>;


                        <AlertDialogTitle>Accept Project Offer?;


                        <AlertDialogCancel>Cancel;"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;"

                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;"

                </>;
              {(isClient || isTalent) && project && project.status === "in_progress" && (;"



                      <AlertDialogTitle>Mark Project as Completed?;


                      <AlertDialogCancel>Cancel;)"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;"

                <Button variant="default" asChild>;"
                  <Link to={`/project/${project && project.id}/milestones`}>;

                <Button variant="outline" asChild>;"
                  <Link to={`/project/${project && project.id}/room`}>;

                  onClick={() => navigate(`/messages?talentId=${project && project.talent_id}&clientId=${project && project.client_id}`)}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
          <div className="order-2 lg:order-1 lg:col-span-2">;"
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>;"
              <TabsList className="mb-6">;"
                  <TabsTrigger value="reviews">Reviews;"



                    <CardTitle>Project Scope;

                    <div className="space-y-4">;"
                        <h3 className="font-semibold mb-2">Project Description</h3>;""
                        <div className="bg-muted/30 p-4 rounded-md">;"
                          <p className="whitespace-pre-wrap">{project && project.scope_summary}</p>;"
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;""

                        <h3 className="font-semibold mb-2">Job Details</h3>;""
                          <p className="whitespace-pre-wrap">{project && project.job?.description}</p>;"



                    <CardTitle>Project Timeline;

                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;"
                        <Calendar className="h-5 w-5 text-primary mt-0 && 0.5" />;"

                          <h3 className="font-semibold">Start Date</h3>;""
                          <p>{format(new Date(project && project.start_date), "PPP")}</p>;"
                        <Clock className="h-5 w-5 text-primary mt-0 && 0.5" />;"

                          <h3 className="font-semibold">Project Status</h3>;""
                          <div className="mt-1">;"



                    <CardTitle>Project Documents;

                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;"
                        <div className="flex items-center gap-3">;"
                          <FileText className="h-5 w-5 text-primary" />;"

                            <h3 className="font-semibold">Project Agreement</h3>;""
                            <p className="text-sm text-muted-foreground">;"
                        <Button variant="outline" size="sm" asChild>;"
                          <a href={project && project.agreement_url} target="_blank" rel="noopener noreferrer">;"
                      <div className="text-center py-8">;"
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />;"
                        <h3 className="font-semibold">No Documents Yet</h3>;""



                    <CardTitle>Project Notes;

                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">;"
                            <div key={note && note.id} className="bg-muted/30 p-3 rounded-md">;"
                              <div className="flex items-center gap-2 mb-2">;"
                                <Avatar className="h-6 w-6">;"

                                    <img;
                                      src={note && note.created_by_profile.avatar_url}
                                      alt={note && note.created_by_profile.display_name}
</img>"
                                    <User className="h-4 w-4" />;"

                                <span className="font-medium text-sm">;"
                                </span>;"
                                <span className="text-xs text-muted-foreground">;"
                              <p className="text-sm whitespace-pre-wrap">{note && note.content}</p>;"
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />;"
                            <p className="text-muted-foreground">;"

                          <Textarea;"
                            placeholder="Add a note or update to the project...""
                            value={newNote}
                            onChange={(e) => setNewNote(e && e.target.value)}

                          <Button;
                            onClick={handleSubmitNote}

                            disabled={!newNote && newNote.trim() || isSubmittingNote}>;

                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        <User className="h-6 w-6" />"

                    
                      <h3 className="font-semibold">"
</h3>
                      </h3>"
                          variant="outline"""
                          size="sm"""
                          className="mt-2""`;
                          onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;"

                        
                  <div className="flex items-start gap-4">"
                    <Avatar className="h-10 w-10">"

                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}

                    
                      <p className="text-sm text-muted-foreground">Project Owner</p>"
                          onClick={() => navigate(`/messages?clientId=${project.client_id}`)}

      case "offer_sent": return <Badge variant="outline">Offer Sent,;""
        return <Badge className="bg-green-100 text-green-800">Offer Accepted,;""
        return <Badge variant="secondary">Changes Requested,;""
        return <Badge className="bg-blue-100 text-blue-800">In Progress,;""
        return <Badge variant="default">Completed,;""

        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} ;

              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>;""







              {(isClient || isTalent) && project.status === "in_progress" && (;"






                  <Link to={`/project/${project.id}/milestones`}>;

              <TabsContent value="reviews">;"

                <ProjectReviewSection project={project} />;

          <div className="order-1 lg:order-2 lg:col-span-1">;"


                <CardTitle>Project Participants;
                <div className="space-y-6">;"
                  <div className="flex items-start gap-4">;"
                    <Avatar className="h-10 w-10">;"

                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                        <User className="h-6 w-6" />;"

                      <h3 className="font-semibold">;"
                      </h3>;"
                          onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}

            <Card className="mt-6">"


                <CardTitle>Project Status
              
                <div className="space-y-2">"
                  <div className="flex justify-between items-center">"
                    <span className="text-sm font-medium">Current Status:</span>"
                    <div>{getStatusBadge(project.status)}</div>
                    <span className="text-sm font-medium">Creation Date:</span>""
                    <span className="text-sm">"
                    <span className="text-sm font-medium">Start Date:</span>""
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">"
                  <p className="text-sm text-amber-600 flex items-center gap-1">"
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer."

            <Card className="mt-6">;"


                <CardTitle>Project Status;
                <div className="space-y-2">;"
                  <div className="flex justify-between items-center">;"
                    <span className="text-sm font-medium">Current Status:</span>;"
                    <div>{getStatusBadge(project && project.status)}</div>;
                    <span className="text-sm font-medium">Creation Date:</span>;""
                    <span className="text-sm">;"
                    <span className="text-sm font-medium">Start Date:</span>;""
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;"
                  <p className="text-sm text-amber-600 flex items-center gap-1">;"
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.;"


                  <Button ;"
                    variant="outline";"`;

                          src={project && project.client_profile.avatar_url}
                          alt={project && project.client_profile.display_name}

                          onClick={() => navigate(`/messages?clientId=${project && project.client_id}`)}

                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes;"

      </main>;
      <Footer />;


  );

    </>);
export default /**
 * ProjectDetails - Function description;
function ProjectDetails() {
  return (
    <ProtectedRoute>;

      <ProjectDetailsContent />;
  ),;

export default function ProjectDetails() {;
  return (;


    ;)"`;