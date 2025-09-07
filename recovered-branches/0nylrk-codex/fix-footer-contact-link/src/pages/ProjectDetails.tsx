

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
  // useParams may be untyped in this environment, so avoid passing a;}
  // type argument and cast the result instead to prevent TS2347 errors.;}
  const { projectId } = useParams() as { projectId?: string };  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();



  const [project, setProject] = useState<Project | null>(null);
</Project>
  const [notes, setNotes] = useState<any[]>([]);
</any>
  const [project, setProject] = useState<Project | null>(null),
</Project>
  const [notes, setNotes] = useState<any[]>([]),
</any>
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
;
      // Check condition;
if ( {) {
  $2;
}
        set_project (project_data);
;
        // Now fetch notes;
        fetchProjectNotes (project_id);
      } else {
  // TODO: Implement
}
        toast ({"
          title: "Project not found",""
          description: "The requested project could not be found.",")"
          variant: "destructive"}),""
        navigate ("/dashboard");"
      }
      setIsLoading (false);
    }
    load_project ();
  }, [project_id]);
;
  const fetchProjectNotes = async (project_id: string) => {
    try {
  // TODO: Implement
}
      const { data, error } = await supabase;"
        .from ("project_notes");"
        .select (`;
          *;
)
          created_by_profile:profiles ! user_id (display_name, avatar_url);
        `);"
        .eq ("project_id", project_id);""
        .order ("created_at", { ascending: false }),"
      // Check condition;
if (throw error) {
  $2;
}
      set_notes (data || []);

    } catch (err) {"
      console.error ("Error fetching project notes:", err);"
    }
  }

;
  const handleSubmitNote = async () => {
    if (|| !project || !user) return) {
  $2;
}
    setIsSubmittingNote (true);
;
    try {
  // TODO: Implement
}
      const { data, error } = await supabase;"
        .from ("project_notes");"
        .insert ({
          project_id: project.id,
          user_id: user.id,)
          content: new_note});
        .select ();
;
      // Check condition;
if (throw error) {
  $2;
}
      // Refresh notes;
      fetchProjectNotes (project.id);"
      setNewNote ("");"
;
      toast ({"
        title: "Note added",")"
        description: "Your note has been added to the project."});"
    } catch (err: any) {"
      console.error ("Error adding note:", err);"
      toast ({"
        title: "Failed to add note",""
        description: err.message || "An error occurred while adding your note.",")"
        variant: "destructive"});"
    } finally {
  // TODO: Implement
}
      setIsSubmittingNote (false);
    }
  }

;
  const handleStatusChange = async (new_status: ProjectStatus) => {
    // Check condition;
if (return, ) {
  $2;
}
    const success = await updateProjectStatus (project.id, new_status);
;
    // Check condition;
if ( {) {
  $2;
}
      set_project ({
        ...project;)
        status: new_status}),
      // If offer was accepted, show a special toast;
      // Check condition;
if ( {) {
  $2;
}
        toast ({"
          title: "Offer Accepted! 🎉",")"
          description: "The project is now in progress. Congratulations!"});"
      }
    }
  }
;
  const getStatusBadge = (status: ProjectStatus) =>: any {
  // TODO: Implement
}
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
      }

      setIsLoading(false);
    }


    
    loadProject()
  }, [projectId]),
  

  const fetchProjectNotes = async (projectId: string) => {
    try {
  // TODO: Implement
}
      const { data, error } = await supabase;"
        .from("project_notes")"
        .select(`
          *,)
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)"
        .eq("project_id", projectId)""
        .order("created_at", { ascending: false }),"
      if (error) throw error,
      
      setNotes(data || [])
    } catch (err) {"
      console.error("Error fetching project notes:", err)"
    }
  },
  
  const handleSubmitNote = async () => {
    if (!newNote.trim() || !project || !user) return,
    
    setIsSubmittingNote(true),
    

    try {
  // TODO: Implement
}
      const { data, error } = await supabase;"
        .from("project_notes")"
        .insert({
          project_id: project.id;,
  user_id: user.id;)
          content: newNote})

        .select(),
      
      if (error) throw error,
      
      // Refresh notes;
      fetchProjectNotes(project.id),"
      setNewNote(""),"
      toast({"
        title: "Note added"",)"
  description: "Your note has been added to the project."})"
    } catch (err: any) {"
      console.error("Error adding note:", err),"
      toast({"
        title: "Failed to add note"","
  description: err.message |"An error occurred while adding your note."")"
        variant: "destructive"})"
    } finally {
  // TODO: Implement
}
      setIsSubmittingNote(false)
    }

  },
  
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return,
    
    const success = await updateProjectStatus(project.id, newStatus),
    
    if (success) {
      setProject({
        ...project,)
        status: newStatus}),
      

      // If offer was accepted, show a special toast;"
      if (newStatus === "offer_accepted") {"
        toast({"
          title: "Offer Accepted! 🎉"",)"
  description: "The project is now in progress. Congratulations!"})"
      }
    }

  },
  

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {"
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>,""
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,""
        return <Badge variant="secondary">Changes Requested</Badge>,""
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,""
        return <Badge variant="default">Completed</Badge>,""
        return <Badge variant="destructive">Canceled</Badge>""
        return <Badge variant="outline">{status}</Badge>""
        return <Badge variant="destructive">Canceled</Badge>,;""
        return <Badge variant="outline">{status}</Badge>;""
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>;""
      <div className="container mx-auto py-8">;"
</div>"
        <div className="flex justify-center items-center h-64">;"
</div>"
          <div className="text-center">;"
</div>"
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;"
            <p>Loading project details...</p>;
          </div>;
        </div>;
      </div>;"
      <div className="container mx-auto py-8">;"
</div>
        <Card>;
</Card>"
          <CardContent className="flex flex-col items-center justify-center py-10">;"
</CardContent>"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;"
</AlertCircle>"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;""
            <p className="text-muted-foreground mb-4">;"
</p>
            </p>;"
            <Button onClick={() => navigate("/dashboard")}>;"
</Button>"
        return <Badge className="bg - green - 100 text - green - 800">Offer Accepted</Badge>;""
        return <Badge variant="secondary">Changes Requested</Badge>;""
        return <Badge className="bg - blue - 100 text - blue - 800">In Progress</Badge>;""
        return <Badge variant="default">Completed</Badge>;""
        return <Badge variant="destructive">Canceled</Badge>,""
        return <Badge variant="outline">{status}</Badge>;""
      <div className="container mx - auto py - 8">;"
</div>"
        <div className="flex justify - center items - center h - 64">;"
</div>"
          <div className="text - center">;"
</div>"
            <div className="animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full mx - auto mb - 4"></div>;"
            <p > Loading project details...</p>;
          </div>;
        </div>;
      </div>);"
      <div className="container mx - auto py - 8">;"
</div>
        <Card>;
</Card>"
          <CardContent className="flex flex - col items - center justify - center py - 10">;"
</CardContent>"
            <AlertCircle className="h - 10 w - 10 text - muted - foreground mb - 4" />;"
</AlertCircle>"
            <h2 className="text - xl font - bold mb - 2">Project Not Found</h2>;""
            <p className="text - muted - foreground mb - 4">;"
</p>
            </p>;"
            <Button on_click={() => navigate ("/dashboard")}>;"
</Button>
            </Button>;
          </CardContent>;
        </Card>;"
      <div className="container mx-auto py-8">"
</div>
        <Card>
</Card>"
          <CardContent className="flex flex-col items-center justify-center py-10">"
</CardContent>"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />"
</AlertCircle>"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>""
            <p className="text-muted-foreground mb-4">"
</p>
            </p>"
            <Button onClick={() => navigate("/dashboard")}>"
</Button>
            </Button>
          </CardContent>
        </Card>
      </div>
    <>
      <SEO;"
        title={`Project: ${project.job?.title |'Project Details'} | Zion AI Marketplace`}''
        description="View and manage your project details and collaboration.""

      />
</SEO>
      <AppHeader />

</AppHeader>"
      <main className="container mx-auto px-4 py-8">"
</main>"
        <div className="mb-6">"
</div>"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">"
</div>
            <div>
</div>"
              <h1 className="text-3xl font-bold">{project.job?.title |"Project"}</h1>""
              <div className="flex items-center gap-2 mt-1">"
</div>"
                <span className="text-muted-foreground">"
</span>
                </span>
              </div>
            </div>"
            <div className="space-x-2">"
</div>
                <>
                  <AlertDialog>
</AlertDialog>
                    <AlertDialogTrigger asChild>
</AlertDialogTrigger>"
                      <Button variant="default">"
</Button>"
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;"
</CheckCircle2>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
</AlertDialogContent>
                      <AlertDialogHeader>
</AlertDialogHeader>
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>
                        <AlertDialogDescription>
</AlertDialogDescription>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
</AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>"
</AlertDialogAction>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>"
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>"
</Button>"
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;"
</MessageSquare>
                  </Button>
                </>
              )}"
              {(isClient |isTalent) && project.status === "in_progress" && ("
                <AlertDialog>
</AlertDialog>
                  <AlertDialogTrigger asChild>
</AlertDialogTrigger>"
                    <Button variant="default">"
</Button>"
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;"
</CheckCircle2>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
</AlertDialogContent>
                    <AlertDialogHeader>
</AlertDialogHeader>
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>
                      <AlertDialogDescription>
</AlertDialogDescription>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
</AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>)"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>"
</AlertDialogAction>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>"
                <Button variant="default" asChild>"
</Button>
                  <Link to={`/project/${project.id}/milestones`}>
</Link>"
                    <Layers className="mr-2 h-4 w-4" /> Milestones;"
</Layers>
                  </Link>
                </Button>"
                <Button variant="outline" asChild>"
</Button>
                  <Link to={`/project/${project.id}/room`}>
</Link>"
                    <Video className="mr-2 h-4 w-4" /> Project Room;"
</Video>
                  </Link>
                </Button>
                <Button;"
                  variant="outline""
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
</Button>"
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;"
</MessageSquare>

                </Button>
            </div>
          </div>

        </div>"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
</div>"
          <div className="order-2 lg:order-1 lg:col-span-2">"
</div>"
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>"
</Tabs>"
              <TabsList className="mb-6">"
</TabsList>"
                <TabsTrigger value="details">Project Details</TabsTrigger>""
                <TabsTrigger value="timeline">Timeline</TabsTrigger>""
                <TabsTrigger value="documents">Documents</TabsTrigger>""
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>""
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>"
              </TabsList>"
              <TabsContent value="details">"
</TabsContent>
                <Card>
</Card>
                  <CardHeader>
</CardHeader>
                    <CardTitle>Project Scope</CardTitle>
                    <CardDescription>
</CardDescription>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
</CardContent>"
                    <div className="space-y-4">"
</div>
                      <div>
</div>"
                        <h3 className="font-semibold mb-2">Project Description</h3>""
                        <div className="bg-muted/30 p-4 rounded-md">"
</div>"
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>"
                        </div>
                      </div>
                      <div>
</div>"
                        <h3 className="font-semibold mb-2">Payment Terms</h3>""
                        <Badge variant="outline" className="capitalize">"
</Badge>
                        </Badge>
                      </div>
                      <div>
</div>"
                        <h3 className="font-semibold mb-2">Job Details</h3>""
                        <div className="bg-muted/30 p-4 rounded-md">"
</div>"
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>"

                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </TabsContent>"
              <TabsContent value="timeline">"
</TabsContent>
                <Card>
</Card>
                  <CardHeader>
</CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                    <CardDescription>
</CardDescription>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
</CardContent>"
                    <div className="space-y-4">"
</div>"
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">"
</div>"
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />"
</Calendar>
                        <div>
</div>"
                          <h3 className="font-semibold">Start Date</h3>""
                          <p>{format(new Date(project.start_date), "PPP")}</p>"
                        </div>
                      </div>"
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">"
</div>"
                        <Clock className="h-5 w-5 text-primary mt-0.5" />"
</Clock>
                        <div>
</div>"
                          <h3 className="font-semibold">Project Status</h3>""
                          <div className="mt-1">"
</div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </TabsContent>"
              <TabsContent value="documents">"
</TabsContent>
                <Card>
</Card>
                  <CardHeader>
</CardHeader>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>
</CardDescription>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
</CardContent>"
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">"
</div>"
                        <div className="flex items-center gap-3">"
</div>"
                          <FileText className="h-5 w-5 text-primary" />"
</FileText>
                          <div>
</div>"
                            <h3 className="font-semibold">Project Agreement</h3>""
                            <p className="text-sm text-muted-foreground">"
</p>
                            </p>
                          </div>
                        </div>"
                        <Button variant="outline" size="sm" asChild>"
</Button>"
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">"
</a>
                          </a>
                          </Link>
                        </Button>
                      </div>"
                      <div className="text-center py-8">"
</div>"
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />"
</FileText>"
                        <h3 className="font-semibold">No Documents Yet</h3>""
                        <p className="text-sm text-muted-foreground">"
</p>

                        </p>
                      </div>
                  </CardContent>
                </Card>

              </TabsContent>"
              <TabsContent value="notes">"
</TabsContent>
                <Card>
</Card>
                  <CardHeader>
</CardHeader>
                    <CardTitle>Project Notes</CardTitle>
                    <CardDescription>
</CardDescription>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
</CardContent>"
                    <div className="space-y-4">"
</div>"
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">"
</div>
      </div>);
    <>;
      <SEO;"
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`}''
        description="View and manage your project details and collaboration.";"

      />;
</SEO>
      <AppHeader />;

</AppHeader>"
      <main className="container mx - auto px - 4 py - 8">;"
</main>"
        <div className="mb - 6">;"
</div>"
          <div className="flex flex - col md:flex - row justify - between md:items - center gap - 4 mb - 2">;"
</div>
            <div>;
</div>"
              <h1 className="text - 3xl font - bold">{project.job?.title || "Project"}</h1>;""
              <div className="flex items - center gap - 2 mt - 1">;"
</div>"
                <span className="text - muted - foreground">;"
</span>
                </span>;
              </div>;
            </div>;"
            <div className="space - x-2">;"
</div>
                <>;
                  <AlertDialog>;
</AlertDialog>
                    <AlertDialogTrigger as_child>;
</AlertDialogTrigger>"
                      <Button variant="default">;"
</Button>"
                        <CheckCircle2 className="mr - 2 h - 4 w - 4" /> Accept Offer;"
</CheckCircle2>
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
</AlertDialogContent>
                      <AlertDialogHeader>;
</AlertDialogHeader>
                        <AlertDialogTitle > Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
</AlertDialogDescription>
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
</AlertDialogFooter>
                        <AlertDialogCancel > Cancel</AlertDialogCancel>;"
                        <AlertDialogAction on_click={() => handleStatusChange ("offer_accepted")}>;"
</AlertDialogAction>

                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;

                <AlertDialog>;
</AlertDialog>
                  <AlertDialogTrigger as_child>;
</AlertDialogTrigger>"
                    <Button variant="default">;"
</Button>"
                      <CheckCircle2 className="mr - 2 h - 4 w - 4" /> Mark as Completed;"
</CheckCircle2>
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
</AlertDialogContent>
                    <AlertDialogHeader>;
</AlertDialogHeader>
                      <AlertDialogTitle > Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
</AlertDialogDescription>
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
</AlertDialogFooter>
                      <AlertDialogCancel > Cancel</AlertDialogCancel>;"
                      <AlertDialogAction on_click={() => handleStatusChange ("completed")}>;"
</AlertDialogAction>
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;"
                  <MessageSquare className="mr - 2 h - 4 w - 4" /> Message;"
</MessageSquare>
                </Button>)}
            </div>;
          </div>;
        </div>;"
                <TabsTrigger value="details">Project Details</TabsTrigger>;""
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;""
                <TabsTrigger value="documents">Documents</TabsTrigger>;""
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;""
              <TabsContent value="details">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle > Project Scope</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                    <div className="space - y-4">;"
</div>
                      <div>;
</div>
                      <div>;
</div>"
                        <h3 className="font - semibold mb - 2">Payment Terms</h3>;""
                        <Badge variant="outline" className="capitalize">;"
</Badge>

                        </Badge>;
                      </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;

              </TabsContent>;"
              <TabsContent value="timeline">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle > Project Timeline</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>

                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;

              </TabsContent>;"
              <TabsContent value="documents">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle > Project Documents</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>
                          <div>;
</div>"
                            <h3 className="font - semibold">Project Agreement</h3>;""
                            <p className="text - sm text - muted - foreground">;"
</p>
                            </p>;
                          </div>;
                        </div>;"
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;"
</a>

                          </a>;
                        </Button>;
                        </p>;
                      </div>)}
                  </CardContent>;
                </Card>;

              </TabsContent>;"
              <TabsContent value="notes">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle > Project Notes</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                            <div key={note.id} className="bg - muted / 30 p - 3 rounded - md">;"
</div>"
                              <div className="flex items - center gap - 2 mb - 2">;"
</div>"
                                <Avatar className="h - 6 w - 6">;"
</Avatar>
    <>;
      <SEO;"
        title={`Project: ${project && project.job?.title || 'Project Details'} | Zion AI Marketplace`}''
        description="View and manage your project details and collaboration.""
      />;
</SEO>
      <AppHeader />;
</AppHeader>"
      <main className="container mx-auto px-4 py-8">;"
</main>"
        <div className="mb-6">;"
</div>"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;"
</div>
            <div>;
</div>"
              <h1 className="text-3xl font-bold">{project && project.job?.title || "Project"}</h1>;""
              <div className="flex items-center gap-2 mt-1">;"
</div>"
                <span className="text-muted-foreground">;"
</span>
                </span>;
              </div>;
            </div>;"
            <div className="space-x-2">;"
</div>
                <>;
                  <AlertDialog>;
</AlertDialog>
                    <AlertDialogTrigger asChild>;
</AlertDialogTrigger>"
                      <Button variant="default">;"
</Button>"
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;"
</CheckCircle2>
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
</AlertDialogContent>
                      <AlertDialogHeader>;
</AlertDialogHeader>
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
</AlertDialogDescription>
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
</AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>;"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;"
</AlertDialogAction>
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;"
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;"
</Button>"
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;"
</MessageSquare>
                  </Button>;
                </>;
              )}
"
              {(isClient || isTalent) && project && project.status === "in_progress" && (;"
                <AlertDialog>;
</AlertDialog>
                  <AlertDialogTrigger asChild>;
</AlertDialogTrigger>"
                    <Button variant="default">;"
</Button>"
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;"
</CheckCircle2>
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
</AlertDialogContent>
                    <AlertDialogHeader>;
</AlertDialogHeader>
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
</AlertDialogDescription>
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
</AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;)"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;"
</AlertDialogAction>
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;"
                <Button variant="default" asChild>;"
</Button>
                  <Link to={`/project/${project && project.id}/milestones`}>;
</Link>"
                    <Layers className="mr-2 h-4 w-4" /> Milestones;"
</Layers>
                  </Link>;
                </Button>;"
                <Button variant="outline" asChild>;"
</Button>
                  <Link to={`/project/${project && project.id}/room`}>;
</Link>"
                    <Video className="mr-2 h-4 w-4" /> Project Room;"
</Video>
                  </Link>;
                </Button>;
                <Button;"
                  variant="outline""
                  onClick={() => navigate(`/messages?talentId=${project && project.talent_id}&clientId=${project && project.client_id}`)}
</Button>"
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;"
</MessageSquare>

                </Button>;
            </div>;
          </div>;

        </div>;"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
</div>"
          <div className="order-2 lg:order-1 lg:col-span-2">;"
</div>"
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>;"
</Tabs>"
              <TabsList className="mb-6">;"
</TabsList>"
                <TabsTrigger value="details">Project Details</TabsTrigger>;""
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;""
                <TabsTrigger value="documents">Documents</TabsTrigger>;""
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;""
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>;"
              </TabsList>;"
              <TabsContent value="details">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Project Scope</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                    <div className="space-y-4">;"
</div>
                      <div>;
</div>"
                        <h3 className="font-semibold mb-2">Project Description</h3>;""
                        <div className="bg-muted/30 p-4 rounded-md">;"
</div>"
                          <p className="whitespace-pre-wrap">{project && project.scope_summary}</p>;"
                        </div>;
                      </div>;
                      <div>;
</div>"
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;""
                        <Badge variant="outline" className="capitalize">;"
</Badge>
                        </Badge>;
                      </div>;
                      <div>;
</div>"
                        <h3 className="font-semibold mb-2">Job Details</h3>;""
                        <div className="bg-muted/30 p-4 rounded-md">;"
</div>"
                          <p className="whitespace-pre-wrap">{project && project.job?.description}</p>;"
                        </div>;

                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;

              </TabsContent>;"
              <TabsContent value="timeline">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Project Timeline</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                    <div className="space-y-4">;"
</div>"
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;"
</div>"
                        <Calendar className="h-5 w-5 text-primary mt-0 && 0.5" />;"
</Calendar>
                        <div>;
</div>"
                          <h3 className="font-semibold">Start Date</h3>;""
                          <p>{format(new Date(project && project.start_date), "PPP")}</p>;"
                        </div>;
                      </div>;"
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;"
</div>"
                        <Clock className="h-5 w-5 text-primary mt-0 && 0.5" />;"
</Clock>
                        <div>;
</div>"
                          <h3 className="font-semibold">Project Status</h3>;""
                          <div className="mt-1">;"
</div>
                          </div>;

                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;

              </TabsContent>;"
              <TabsContent value="documents">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;"
</div>"
                        <div className="flex items-center gap-3">;"
</div>"
                          <FileText className="h-5 w-5 text-primary" />;"
</FileText>
                          <div>;
</div>"
                            <h3 className="font-semibold">Project Agreement</h3>;""
                            <p className="text-sm text-muted-foreground">;"
</p>
                            </p>;
                          </div>;
                        </div>;"
                        <Button variant="outline" size="sm" asChild>;"
</Button>"
                          <a href={project && project.agreement_url} target="_blank" rel="noopener noreferrer">;"
</a>
                          </a>;
                        </Button>;
                      </div>;"
                      <div className="text-center py-8">;"
</div>"
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />;"
</FileText>"
                        <h3 className="font-semibold">No Documents Yet</h3>;""
                        <p className="text-sm text-muted-foreground">;"
</p>

                        </p>;
                      </div>;
                  </CardContent>;
                </Card>;

              </TabsContent>;"
              <TabsContent value="notes">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>;
</CardDescription>
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                    <div className="space-y-4">;"
</div>"
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">;"
</div>"
                            <div key={note && note.id} className="bg-muted/30 p-3 rounded-md">;"
</div>"
                              <div className="flex items-center gap-2 mb-2">;"
</div>"
                                <Avatar className="h-6 w-6">;"
</Avatar>
                                    <img;
                                      src={note && note.created_by_profile.avatar_url}
                                      alt={note && note.created_by_profile.display_name}
                                    />;
</img>"
                                    <User className="h-4 w-4" />;"
</User>
                                </Avatar>;"
                                <span className="font-medium text-sm">;"
</span>
                                </span>;"
                                <span className="text-xs text-muted-foreground">;"
</span>
                                </span>;
                              </div>;"
                              <p className="text-sm whitespace-pre-wrap">{note && note.content}</p>;"
                            </div>;"
                          <div className="text-center py-8">;"
</div>"
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />;"
</MessageSquare>"
                            <p className="text-muted-foreground">;"
</p>

                            </p>;
                          </div>;
                      </div>;

                        <div>;
</div>
"
                                    <User className="h-4 w-4" />;"
</User>
                          <Textarea;"
                            placeholder="Add a note or update to the project...""
                            value={newNote}
                            onChange={(e) => setNewNote(e && e.target.value)}
</Textarea>
                          <Button;
                            onClick={handleSubmitNote}

                            disabled={!newNote && newNote.trim() || isSubmittingNote}>;
</Button>
                          </Button>;
                        </div>;

                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />
                      ) : (
                        <User className=\"h-6 w-6\" />
                      )}
                    </Avatar>
                    <div />
                      <h3 className=\"font-semibold\" />
                        {project.talent_profile?.full_name |\"Talent\"}
                      </h3>
                      <p className=\"text-sm text-muted-foreground\" />
                        {project.talent_profile?.professional_title |\"Professional\"}
                      </p>
                      {isClient && (
                        <Button;
variant=\"outline\"
                          size=\"sm\"}
                          className=\"mt-2\"}
                          onClick={() = /> navigate(`/messages?talentId=${project.talent_id}`)}
                        >
                          <MessageSquare className=\"mr-1 h-3 w-3\" /> Message;

                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />
</img>"
                        <User className="h-6 w-6" />"
</User>
                    </Avatar>
                    <div>
</div>"
                      <h3 className="font-semibold">"
</h3>
                      </h3>"
                      <p className="text-sm text-muted-foreground">"
</p>
                      </p>
                        <Button;"
                          variant="outline"""
                          size="sm"""
                          className="mt-2""
                          onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
</Button>"
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;"
</MessageSquare>

                        </Button>
                    </div>

                  </div>"
                  <div className="flex items-start gap-4">"
</div>"
                    <Avatar className="h-10 w-10">"
</Avatar>
                        <img;
                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}
                        />
</img>"
                        <User className="h-6 w-6" />"
</User>
                    </Avatar>
                    <div>
</div>"
                      <h3 className="font-semibold">"
</h3>
                      </h3>"
                      <p className="text-sm text-muted-foreground">Project Owner</p>"
                        <Button;"
                          variant="outline"""
                          size="sm"""
                          className="mt-2""
                          onClick={() => navigate(`/messages?clientId=${project.client_id}`)}
</Button>"
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;"
</MessageSquare>
                        </Button>"
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>,;""
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,;""
        return <Badge variant="secondary">Changes Requested</Badge>,;""
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,;""
        return <Badge variant="default">Completed</Badge>,;""
        return <Badge variant="destructive">Canceled</Badge>,;""
        return <Badge variant="outline">{status}</Badge>;""
      <div className="container mx-auto py-8">;"
</div>"
        <div className="flex justify-center items-center h-64">;"
</div>"
          <div className="text-center">;"
</div>"
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;"
            <p>Loading project details...</p>;
          </div>;
        </div>;
      </div>;"
      <div className="container mx-auto py-8">;"
</div>
        <Card>;
</Card>"
          <CardContent className="flex flex-col items-center justify-center py-10">;"
</CardContent>"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;"
</AlertCircle>"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;""
            <p className="text-muted-foreground mb-4">;"
</p>
            </p>;"
            <Button onClick={() => navigate("/dashboard")}>;"
</Button>
            </Button>;
          </CardContent>;
        </Card>;
      </div>;
    <>;
      <SEO;"
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} ;''
        description="View and manage your project details and collaboration.";"
      />;
</SEO>
      <AppHeader />;
</AppHeader>"
      <main className="container mx-auto px-4 py-8">;"
</main>"
        <div className="mb-6">;"
</div>"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;"
</div>
            <div>;
</div>"
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>;""
              <div className="flex items-center gap-2 mt-1">;"
</div>"
                <span className="text-muted-foreground">"
</span>
                </span>;
              </div>;
            </div>;"
            <div className="space-x-2">;"
</div>
                <>;
                  <AlertDialog>;
</AlertDialog>
                    <AlertDialogTrigger asChild>;
</AlertDialogTrigger>"
                      <Button variant="default">;"
</Button>"
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;"
</CheckCircle2>
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
</AlertDialogContent>
                      <AlertDialogHeader>;
</AlertDialogHeader>
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
</AlertDialogDescription>
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
</AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>;"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;"
</AlertDialogAction>
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;"
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;"
</Button>"
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;"
</MessageSquare>
                  </Button>;
                </>;
              )}
;"
              {(isClient || isTalent) && project.status === "in_progress" && (;"
                <AlertDialog>;
</AlertDialog>
                  <AlertDialogTrigger asChild>;
</AlertDialogTrigger>"
                    <Button variant="default">;"
</Button>"
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;"
</CheckCircle2>
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
</AlertDialogContent>
                    <AlertDialogHeader>;
</AlertDialogHeader>
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
</AlertDialogDescription>
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
</AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;)"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;"
</AlertDialogAction>
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;"
                <Button variant="default" asChild>;"
</Button>
                  <Link to={`/project/${project.id}/milestones`}>;
</Link>"
                    <Layers className="mr-2 h-4 w-4" /> Milestones;"
</Layers>
                  </Link>;
                </Button>;"
              <TabsContent value="reviews">;"
</TabsContent>
                <ProjectReviewSection project={project} />;
</ProjectReviewSection>
              </TabsContent>;
            </Tabs>;
          </div>;"
          <div className="order-1 lg:order-2 lg:col-span-1">;"
</div>
            <Card>;
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle>Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <div className="space-y-6">;"
</div>"
                  <div className="flex items-start gap-4">;"
</div>"
                    <Avatar className="h-10 w-10">;"
</Avatar>
                        <img;
                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                        />;
</img>"
                        <User className="h-6 w-6" />;"
</User>
                    </Avatar>;
                    <div>;
</div>"
                      <h3 className="font-semibold">;"
</h3>
                      </h3>;"
                      <p className="text-sm text-muted-foreground">;"
</p>
                      </p>;
                        <Button;"
                          variant="outline"""
                          size="sm"""
                          className="mt-2""
                          onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
</Button>"
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;"
</MessageSquare>
                        </Button>;
                    </div>;
                  </div>;"
            <Card className="mt-6">"
</Card>
              <CardHeader>
</CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
</CardContent>"
                <div className="space-y-2">"
</div>"
                  <div className="flex justify-between items-center">"
</div>"
                    <span className="text-sm font-medium">Current Status:</span>"
                    <div>{getStatusBadge(project.status)}</div>
                  </div>"
                  <div className="flex justify-between items-center">"
</div>"
                    <span className="text-sm font-medium">Creation Date:</span>""
                    <span className="text-sm">"
</span>
                    </span>
                  </div>"
                  <div className="flex justify-between items-center">"
</div>"
                    <span className="text-sm font-medium">Start Date:</span>""
                    <span className="text-sm">"
</span>
                    </span>
                  </div>
                </div>
              </CardContent>"
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">"
</CardFooter>"
                  <p className="text-sm text-amber-600 flex items-center gap-1">"
</p>"
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer."
</AlertCircle>
                  </p>
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
                    </div>;
                  </div>;"
            <Card className="mt-6">;"
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle>Project Status</CardTitle>;
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <div className="space-y-2">;"
</div>"
                  <div className="flex justify-between items-center">;"
</div>"
                    <span className="text-sm font-medium">Current Status:</span>;"
                    <div>{getStatusBadge(project && project.status)}</div>;
                  </div>;"
                  <div className="flex justify-between items-center">;"
</div>"
                    <span className="text-sm font-medium">Creation Date:</span>;""
                    <span className="text-sm">;"
</span>
                    </span>;
                  </div>;"
                  <div className="flex justify-between items-center">;"
</div>"
                    <span className="text-sm font-medium">Start Date:</span>;""
                    <span className="text-sm">;"
</span>
                    </span>;
                  </div>;
                </div>;
              </CardContent>;"
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;"
</CardFooter>"
                  <p className="text-sm text-amber-600 flex items-center gap-1">;"
</p>"
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.;"
</AlertCircle>
                  </p>;
                  <Button;"
                    variant="outline""
                    onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
</Button>
                  <Button ;"
                    variant="outline";"
                    onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
</Button>
                        <img;
                          src={project && project.client_profile.avatar_url}
                          alt={project && project.client_profile.display_name}
                        />;
</img>"
                        <User className="h-6 w-6" />;"
</User>
                        <Button;"
                          variant="outline"""
                          size="sm"""
                          className="mt-2""
                          onClick={() => navigate(`/messages?clientId=${project && project.client_id}`)}
</Button>"
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;"
</MessageSquare>
                        </Button>;
                  <Button;"
                    variant="outline""
                    onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
</Button>"
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes;"
</MessageSquare>
                  </Button>;
                </CardFooter>;"
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;"
</CardFooter>"
                  <p className="text-sm text-muted-foreground">;"
</p>
                  </p>;
                </CardFooter>;
            </Card>;

          </div>;
        </div>;
      </main>;
      <Footer />;

</Footer>

    </>;
  );

}
    </>);

}
export default /**
 * ProjectDetails - Function description;
 */
function ProjectDetails() {
  return (

    <ProtectedRoute>;
</ProtectedRoute>
      <ProjectDetailsContent />;
</ProjectDetailsContent>)
    </ProtectedRoute>);
    </>;
  ),;
    </>;
  );
}
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
</Footer>
    </>;
  );
}
;
export default function ProjectDetails() {;
  return (;
    <ProtectedRoute>;
</ProtectedRoute>
      <ProjectDetailsContent />;
</ProjectDetailsContent>
    </ProtectedRoute>;)"

