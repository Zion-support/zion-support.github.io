import {_Card, _CardContent, _CardDescription, _CardFooter, _CardHeader, _CardTitle} from "@/components/ui/card";
import {_Tabs, _TabsContent, _TabsList, _TabsTrigger} from "@/components/ui/tabs";
import {_AlertDialog, _AlertDialogAction, _AlertDialogCancel, _AlertDialogContent, _AlertDialogDescription, _AlertDialogFooter, _AlertDialogHeader, _AlertDialogTitle, _AlertDialogTrigger} from "@/components/ui/alert-dialog";
import {_AlertCircle, _Calendar, _CheckCircle2, _Clock, _FileText, _Layers, _MessageSquare, _Video, _User, _XCircle} from "lucide-react";

function ProjectDetailsContent() {_// useParams may be untyped in this environment, _so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { projectId} = useParams() as {_projectId?: string};
  const {_user} = useAuth();
  const _navigate = useNavigate();
  const {_getProjectById, _updateProjectStatus} = useProjects();
  
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<any[]>([]);
  const [newNote, setNewNote] = useState("");
  const [isSubmittingNote, setIsSubmittingNote] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  
  // Load project data
  useEffect__(() => {_async function loadProject() {
      if (!projectId) return;
      
      setIsLoading(true);
      const _projectData = await getProjectById(projectId);
      
      if (projectData) {
        setProject(projectData);
        
        // Now fetch notes
        fetchProjectNotes(projectId);} else {_toast({
          title: "Project not found", _description: "The requested project could not be found.", _variant: "destructive"});
        navigate("/dashboard");
      }
      
      setIsLoading(false);
    }
    
    loadProject();
  }, [projectId]);
  
  const _fetchProjectNotes = async (_projectId: string) => {_try {
      const { data, _error} = await supabase
        .from("project_notes")
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)
        .order("created_at", {_ascending: false});
      
      if (error) throw error;
      
      setNotes(data || []);
    } catch (err) {}
  };
  
  const _handleSubmitNote = async () => {_if (!newNote.trim() || !project || !user) return;
    
    setIsSubmittingNote(true);
    
    try {
      const { data, _error} = await supabase
        .from("project_notes")
        .insert({_project_id: project.id, _user_id: user.id, _content: newNote})
        .select();
      
      if (error) throw error;
      
      // Refresh notes
      fetchProjectNotes(project.id);
      setNewNote("");
      
      toast({_title: "Note added", _description: "Your note has been added to the project."});
    } catch (err: unknown) {_toast({
        title: "Failed to add note", _description: err.message || "An error occurred while adding your note.", _variant: "destructive"});
    } finally {_setIsSubmittingNote(false);}
  };
  
  const _handleStatusChange = async (_newStatus: ProjectStatus) => {_if (!project) return;
    
    const _success = await updateProjectStatus(project.id, _newStatus);
    
    if (success) {
      setProject({
        ...project, _status: newStatus});
      
      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {_toast({
          title: "Offer Accepted! 🎉", _description: "The project is now in progress. Congratulations!"});
      }
    }
  };
  
  const _getStatusBadge = (_status: ProjectStatus) => {_switch (status) {
      case "offer_sent":
        return <Badge variant="outline">Offer Sent</Badge>;
      case "offer_accepted":
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>;
      case "changes_requested":
        return <Badge variant="secondary">Changes Requested</Badge>;
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case "completed":
        return <Badge variant="default">Completed</Badge>;
      case "canceled":
        return <Badge variant="destructive">Canceled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  if (isLoading) {_return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading project details...</p>
          </div>
        </div>
      </div>
    );}
  
  if (!project) {_return (_<div className="container mx-auto py-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The project you're looking for doesn't exist or you don't have access to it.
            </p>
            <Button onClick={() => navigate("/dashboard")}>
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Check if user is either the client or the talent
  const _isClient = user?.id === project.client_id;
  const _isTalent = user?.id === project.talent_id;
  
  if (!isClient && !isTalent) {_navigate("/unauthorized");
    return null;}
  
  const _isOfferPending = project.status === "offer_sent";
  const _isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status);
  const _isActiveProject = ["offer_accepted", "in_progress"].includes(project.status);
  
  return (
    <>
      <SEO 
        title={_`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} 
        description="View and manage your project details and collaboration."
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
            <div>
              <h1 className="text-3xl font-bold">{_project.job?.title || "Project"}</h1>
              <div className="flex items-center gap-2 mt-1">
                {_getStatusBadge(project.status)}
                <span className="text-muted-foreground">
                  Started on {_format(new Date(project.start_date), _"PPP")}
                </span>
              </div>
            </div>
            
            {_/* Action Buttons Based on Role and Status */}
            <div className="space-x-2">
              {_isTalent && isOfferPending && (_<>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="default">
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>
                        <AlertDialogDescription>
                          By accepting this offer, _you agree to the project terms and timeline. 
                          This will initiate the contract and start the project.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>
                          Accept Offer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <Button variant="outline" onClick={_() => handleStatusChange("changes_requested")}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
                  </Button>
                </>
              )}
              
              {_(isClient || isTalent) && project.status === "in_progress" && (_<AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="default">
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will finalize the project and mark it as complete. 
                        Make sure all deliverables have been provided and approved.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>
                        Mark as Completed
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              
              {_isActiveProject && (
                <Button variant="default" asChild>
                  <Link to={`/project/${project.id}/milestones`}>
                    <Layers className="mr-2 h-4 w-4" /> Milestones
                  </Link>
                </Button>
              )}

              {_isActiveProject && (
                <Button variant="outline" asChild>
                  <Link to={`/project/${project.id}/room`}>
                    <Video className="mr-2 h-4 w-4" /> Project Room
                  </Link>
                </Button>
              )}
              
              {_(isClient || isTalent) && ["offer_sent", _"offer_accepted", _"in_progress"].includes(project.status) && (_<Button 
                  variant="outline" 
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${_project.client_id}`)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Message
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <Tabs defaultValue="details" value={_activeTab} onValueChange={_setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="details">Project Details</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>
                {_project.status === "completed" && (
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Scope</CardTitle>
                    <CardDescription>
                      Project details and expectations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Project Description</h3>
                        <div className="bg-muted/30 p-4 rounded-md">
                          <p className="whitespace-pre-wrap">{_project.scope_summary}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Payment Terms</h3>
                        <Badge variant="outline" className="capitalize">
                          {_project.payment_terms} Payment
                        </Badge>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Job Details</h3>
                        <div className="bg-muted/30 p-4 rounded-md">
                          <p className="whitespace-pre-wrap">{_project.job?.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="timeline">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                    <CardDescription>
                      Key dates and milestones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Start Date</h3>
                          <p>{_format(new Date(project.start_date), _"PPP")}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Project Status</h3>
                          <div className="mt-1">
                            {_getStatusBadge(project.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>
                      Agreements and relevant files
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {_project.agreement_url ? (
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold">Project Agreement</h3>
                            <p className="text-sm text-muted-foreground">
                              Uploaded when project was created
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">
                            View
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <h3 className="font-semibold">No Documents Yet</h3>
                        <p className="text-sm text-muted-foreground">
                          No documents have been uploaded to this project.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notes">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Notes</CardTitle>
                    <CardDescription>
                      Shared notes and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                        {_notes.length > 0 ? (_notes.map((note) => (
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">
                              <div className="flex items-center gap-2 mb-2">
                                <Avatar className="h-6 w-6">
                                  {_note.created_by_profile?.avatar_url ? (
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={_note.created_by_profile.display_name}
                                    />
                                  ) : (
                                    <User className="h-4 w-4" />
                                  )}
                                </Avatar>
                                <span className="font-medium text-sm">
                                  {_note.created_by_profile?.display_name || "User"}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {_format(new Date(note.created_at), _"PPp")}
                                </span>
                              </div>
                              <p className="text-sm whitespace-pre-wrap">{_note.content}</p>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8">
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-muted-foreground">
                              No notes yet. Add the first note to this project.
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {_isOfferAccepted && (_<div>
                          <Textarea
                            placeholder="Add a note or update to the project..."
                            value={newNote}
                            onChange={_(e) => setNewNote(e.target.value)}
                            className="min-h-[100px] mb-2"
                          />
                          <Button
                            onClick={_handleSubmitNote}
                            disabled={_!newNote.trim() || isSubmittingNote}
                          >
                            {_isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews">
                <ProjectReviewSection project={_project} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="order-1 lg:order-2 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Project Participants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      {_project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={_project.talent_profile.full_name}
                        />
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {_project.talent_profile?.full_name || "Talent"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {_project.talent_profile?.professional_title || "Professional"}
                      </p>
                      {_isClient && (_<Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      {_project.client_profile?.avatar_url ? (
                        <img
                          src={project.client_profile.avatar_url}
                          alt={_project.client_profile.display_name}
                        />
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {_project.client_profile?.display_name || "Client"}
                      </h3>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {_isTalent && (_<Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => navigate(`/messages?clientId=${project.client_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {_/* Project Status Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Current Status:</span>
                    <div>{_getStatusBadge(project.status)}</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Creation Date:</span>
                    <span className="text-sm">
                      {_format(new Date(project.created_at), _"PPP")}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Start Date:</span>
                    <span className="text-sm">
                      {_format(new Date(project.start_date), _"PPP")}
                    </span>
                  </div>
                </div>
              </CardContent>
              
              {_/* Conditional Footer Based on Status */}
              {_project.status === "changes_requested" && isClient && (_<CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
                    className="w-full"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes
                  </Button>
                </CardFooter>
              )}
              
              {_project.status === "offer_sent" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-muted-foreground">
                    Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}
              
              {_project.status === "completed" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> This project has been completed.
                  </p>
                </CardFooter>
              )}
              
              {_project.status === "canceled" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <XCircle className="h-4 w-4" /> This project has been canceled.
                  </p>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ProjectDetails() {_return (
    <ProtectedRoute>
      <ProjectDetailsContent />
    </ProtectedRoute>
  );}
