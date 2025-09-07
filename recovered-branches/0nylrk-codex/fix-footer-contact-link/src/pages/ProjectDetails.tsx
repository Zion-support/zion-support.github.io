
function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;

  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();


  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<any[]>([]);"
  const [newNote, setNewNote] = useState("");
  const [isSubmittingNote, setIsSubmittingNote] = useState(false);"
  const [activeTab, setActiveTab] = useState("details");

  // Load project data
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return;
      setIsLoading(true);
      const projectData = await getProjectById(projectId);
      if (projectData) {
        setProject(projectData);


import { useState, useEffect } from "react",
import { useParams, useNavigate, Link } from "react-router-dom",
import { format } from "date-fns",
import { useAuth } from "@/hooks/useAuth",
import { useProjects } from "@/hooks/useProjects",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { Project, ProjectStatus } from "@/types/projects",

import { Button } from "@/components/ui/button",
import {}
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,"
  CardTitle} from "@/components/ui/card",
import {}
  Tabs,
  TabsContent,
  TabsList,"
  TabsTrigger} from "@/components/ui/tabs",
import {}
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,"
  AlertDialogTrigger} from "@/components/ui/alert-dialog","
import { Avatar } from "@/components/ui/avatar","
import { Badge } from "@/components/ui/badge","
import { Textarea } from "@/components/ui/textarea","
import { toast } from "@/hooks/use-toast","
import { supabase } from "@/integrations/supabase/client","
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",
import {}
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  MessageSquare,
  Video,
  User,"
  XCircle} from "lucide-react",


function ProjectDetailsContent() {
  // useParams may be untyped in this environment, so avoid passing a

  // type argument and cast the result instead to prevent TS2347 errors.

      if (!projectId) return,

      setIsLoading(true),
      const projectData = await getProjectById(projectId),


        // Now fetch notes

        fetchProjectNotes(projectId)
      } else {
        toast({


import { useState, useEffect } from './react';'
import { use_params, use_navigate, Link } from './react-router-dom';'
import { format } from './date - fns';'
import { use_auth } from '@/hooks / use_auth';'
import { use_projects } from '@/hooks / use_projects';'
import { AppHeader } from '@/layout / AppHeader';'
import { Footer } from '@/components / Footer';'
import { SEO } from '@/components / SEO';'
import { ProtectedRoute } from '@/components / ProtectedRoute';'
import { Project, ProjectStatus } from '@/types / projects';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components / ui / alert - dialog';'
import { Avatar } from '@/components / ui / avatar';'
import { Badge } from '@/components / ui / badge';'
import { Textarea } from '@/components / ui / textarea';'
import { toast } from '@/hooks / use - toast';'
import { supabase } from '@/integrations / supabase / client';'
import { ProjectReviewSection } from '@/components / projects / reviews / ProjectReviewSection';'

import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from './lucide-react';
;
/**
 * ProjectDetailsContent - Function description;
 */
function ProjectDetailsContent() {}
  // use_params may be untyped in this environment, so avoid passing a;

"
import { useState, useEffect } from "react",;"
import { useParams, useNavigate, Link } from "react-router-dom",;"
import { format } from "date-fns",;"
import { useAuth } from "@/hooks/useAuth",;"
import { useProjects } from "@/hooks/useProjects",;"
import { AppHeader } from "@/layout/AppHeader",;"
import { Footer } from "@/components/Footer",;"
import { SEO } from "@/components/SEO",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { Project, ProjectStatus } from "@/types/projects",;"


import { Button } from "@/components/ui/button",;
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;

  CardTitle} from "@/components/ui/card",;
import {;
  Tabs,;
  TabsContent,;

  TabsTrigger} from "@/components/ui/tabs",;
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;

import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",;
import {;
  AlertCircle,;
  Calendar,;
  CheckCircle2,;
  Clock,;
  FileText,;
  Layers,;
  MessageSquare,;
  Video,;


  // type argument and cast the result instead to prevent TS2347 errors.;
  const { project_id } = use_params () as { project_id?: string }
  const { user } = use_auth ();
  const navigate = use_navigate ();
  const { getProjectById, updateProjectStatus } = use_projects ();
;
  const [project, set_project] = useState < Project | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [notes, set_notes] = useState < any[]>([]);
  const [new_note, setNewNote] = useState ("");
  const [isSubmittingNote, setIsSubmittingNote] = useState (false);
  const [active_tab, setActiveTab] = useState ("details");
;
  // Load project data;
  useEffect (() => {
    async /**
 * load_project - Function description
 */
function load_project() {
      // Check condition
if (return) {
  $2
}
      setIsLoading (true);
      const project_data = await getProjectById (project_id);
;
      // Check condition
if ( {) {
  $2
}
        set_project (project_data);
;
        // Now fetch notes;
        fetchProjectNotes (project_id);
      } else {
        toast ({
          title: "Project not found",
          description: "The requested project could not be found.",
          variant: "destructive"}),
        navigate ("/dashboard");
      }
      setIsLoading (false);
    }
    load_project ();
  }, [project_id]);
;
  const fetchProjectNotes = async (project_id: string) => {

    try {

      const { data, error } = await supabase;
        .from ("project_notes");
        .select (`;
          *;

          created_by_profile:profiles ! user_id (display_name, avatar_url);
        `);
        .eq ("project_id", project_id);
        .order ("created_at", { ascending: false }),
      // Check condition
if (throw error) {
  $2
}
      set_notes (data || []);

    } catch (err) {
      console.error ("Error fetching project notes:", err);
    }
  }

;
  const handleSubmitNote = async () => {
    if (|| !project || !user) return) {
  $2
}
    setIsSubmittingNote (true);
;
    try {
      const { data, error } = await supabase;
        .from ("project_notes");
        .insert ({
          project_id: project.id,
          user_id: user.id,
          content: new_note});
        .select ();
;
      // Check condition
if (throw error) {
  $2
}
      // Refresh notes;
      fetchProjectNotes (project.id);
      setNewNote ("");
;
      toast ({
        title: "Note added",
        description: "Your note has been added to the project."});
    } catch (err: any) {
      console.error ("Error adding note:", err);
      toast ({
        title: "Failed to add note",
        description: err.message || "An error occurred while adding your note.",
        variant: "destructive"});

    } finally {
      setIsSubmittingNote (false);
    }
  }


;
  const handleStatusChange = async (new_status: ProjectStatus) => {}
    // Check condition;
if (return, ) {}
  $2;
}
    const success = await updateProjectStatus (project.id, new_status);
;
    // Check condition;
if ( {) {}
  $2;
}
      set_project ({}
        ...project;
        status: new_status}),
      // If offer was accepted, show a special toast;
      // Check condition;
if ( {) {}
  $2;
}
        toast ({"
          title: "Offer Accepted! 🎉","

          description: "The project is now in progress. Congratulations!"});
      }
    }
  }
;

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
        toast({;
          title: "Project not found",
          description: "The requested project could not be found.",;
          variant: "destructive"}),;
        navigate("/dashboard");

      }

      setIsLoading(false);
    }

    loadProject()
  }, [projectId]),
  
  const fetchProjectNotes = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from("project_notes)
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .eq(project_id", projectId)
        .order($2);
      if (error) throw error,
      
      setNotes(data || [])
    } catch (err) {
      console.error("Error fetching project notes:, err)
    }
  },
  
  const handleSubmitNote = async () => {}
    if (!newNote.trim() || !project || !user) return,
    
    setIsSubmittingNote(true),

    try {
        .from(project_notes")
        .insert({
          project_id: project.id
          user_id: user.id
          content: newNote})

        .select(),
      
      if (error) throw error,
      
      // Refresh notes;
      fetchProjectNotes(project.id),"
      setNewNote(""),

      toast({
        title: "Note added,
        description: Your note has been added to the project."})
    } catch (err: any) {
      console.error($2);
      toast({
        title: "Failed to add note,
        description: err.message || An error occurred while adding your note.",
        variant: "destructive})
    } finally {
      setIsSubmittingNote(false)
    }

                      <AlertDialogCancel>Cancel</AlertDialogCancel>"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>
                        Mark as Completed;
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              {isActiveProject && (

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
        // Now fetch notes;
        fetchProjectNotes(projectId);
      } else {;

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
        .select(),
      if (error) throw error,

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
  

  }
  },
  
  const getStatusBadge = (status: ProjectStatus) => {

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
              </TabsContent>

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
              </TabsContent>

                          </Link>
                          </Link>                          </Link>
                          </Link>
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


                </span>;
              </div>;
            </div>;
            {/* Action Buttons Based on Role and Status */}

              {is_talent && isOfferPending && (
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger as_child>;
                    {project.agreement_url ? ("
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">"
                        <div className="flex items-center gap-3">"
                          <FileText className="h-5 w-5 text-primary" />
                          <div>"
                            <h3 className="font-semibold">Project Agreement</h3>"
                            <p className="text-sm text-muted-foreground">
                              Uploaded when project was created;
                            </p>
                          </div>
                        </div>"
                        <Button variant="outline" size="sm" asChild>"
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">

                  Started on {format (new Date (project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;

                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
                      <AlertDialogHeader>;
                        <AlertDialogTitle > Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
                          By accepting this offer, you agree to the project terms and timeline.;
                          This will initiate the contract and start the project.;
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
                        <AlertDialogCancel > Cancel</AlertDialogCancel>;

                          Accept Offer;

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
                  <AlertDialogTrigger as_child>;

                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle > Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
                        This will finalize the project and mark it as complete.;
                        Make sure all deliverables have been provided and approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
                      <AlertDialogCancel > Cancel</AlertDialogCancel>;

                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                >;

                </Button>)}
            </div>;
          </div>;
        </div>;

                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;

                          {project.payment_terms} Payment;
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
              </TabsContent>;

                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Timeline</CardTitle>;
                    <CardDescription>;
                      Key dates and milestones;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;

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
              </TabsContent>;

                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                          <div>;

                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;

                            View;
                          </a>;
                        </Button>;
                          No documents have been uploaded to this project.;

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
              </TabsContent>;

                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;

                  <CardContent>;"
    navigate("/unauthorized");
    return null;
  }

                        {notes.length > 0 ? (
                          }
                          notes.map ((note) => (

              {isTalent && isOfferPending && (;
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger asChild>;

  const isOfferPending = project && project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project && project.status);

  const isActiveProject = ["offer_accepted", "in_progress"].includes(project && project.status);

  return (
    <>;

                  Started on {format(new Date(project && project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;

            {/* Action Buttons Based on Role and Status */}

            <div className="space-x-2">;
              {isTalent && isOfferPending && (;
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger asChild>;"
                      <Button variant="default">;"
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;
                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
                      <AlertDialogHeader>;
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
                          By accepting this offer, you agree to the project terms and timeline. ;
                          This will initiate the contract and start the project.;
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
                        <AlertDialogCancel>Cancel</AlertDialogCancel>;

                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;


                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;

                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;
                  </Button>;
                </>;
              )}


                  <AlertDialogTrigger asChild>;
                    <Button variant="default">;

                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
                        This will finalize the project and mark it as complete. ;
                        Make sure all deliverables have been provided and approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;

                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;
              )}

                </Button>;
              )}
;
              {isActiveProject && (;


                </Button>;
              )}
            </div>;
          </div>;
        </div>;

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          <div className="order-2 lg:order-1 lg:col-span-2">;
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="details">Project Details</TabsTrigger>;
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;
                <TabsTrigger value="documents">Documents</TabsTrigger>;
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;
                {project && project.status === "completed" && (;
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>;
                )}
              </TabsList>;

                      </div>;
                      <div>;

                          {project && project.payment_terms} Payment;
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
              </TabsContent>;


                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Timeline</CardTitle>;
                    <CardDescription>;
                      Key dates and milestones;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;


                            {getStatusBadge(project && project.status)}                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;


                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;


                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;

                        <div className="flex items-center gap-3">;

                          <FileText className="h-5 w-5 text-primary" />;
                          <div>;"
                            <h3 className="font-semibold">Project Agreement</h3>;"
                            <p className="text-sm text-muted-foreground">;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;"
                        <Button variant="outline" size="sm" asChild>;


                          </a>;
                        </Button>;
                      </div>;
                    ) : (;
) :(;

                      <div className="text-center py-8">;
                          <a href={project && project.agreement_url} target="_blank" rel="noopener noreferrer">;                            View;
                          </a>;
                        </Button>;
                      </div>;
                    ) : (;                      <div className="text-center py-8">;
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />;
                        <h3 className="font-semibold">No Documents Yet</h3>;

                        <p className="text-sm text-muted-foreground">;
                          No documents have been uploaded to this project.;
                        </p>;
                      </div>;
                    )}
                  </CardContent>;
                </Card>;
              </TabsContent>;

              ;
              <TabsContent value="notes">;

                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;

                                    <img
}
src={note && note.created_by_profile.avatar_url}
                                      alt={note && note.created_by_profile.display_name} />;
                                  ) : (;


                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>;
                        )}
                      </div>;



                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;


                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />
                      ) : (

"
              <TabsContent value="reviews">;
                <ProjectReviewSection project={project} />;
              </TabsContent>;
            </Tabs>;
          </div>;

"
          <div className="order-1 lg:order-2 lg:col-span-1">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;"
                <div className="space-y-6">;"
                  <div className="flex items-start gap-4">;"
                    <Avatar className="h-10 w-10">;


                        <img

                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                        />;
                      ) : (;"
                        <User className="h-6 w-6" />;
                      )}

                        />;

                      ) : (;"
                        <User className="h-6 w-6" />;
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>
                      {isClient && (
                        <Button"
                          variant="outline""
                          size="sm""
                          className="mt-2"
`
                          onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
                        >;"

                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;

                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
                        </Button>
                      )}
                    </div>;
                  </div>;
                  <div className="flex items-start gap-4">;
                    <Avatar className="h-10 w-10">;
                      {project.client_profile?.avatar_url ? (;
                        <img;
                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}
                        />;
                      ) : (;
                        <User className="h-6 w-6" />;
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {project.client_profile?.display_name || "Client"}
                      </h3>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {isTalent && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => navigate(`/messages?clientId=${project.client_id}`)}


            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>"
                <div className="space-y-2">"
                  <div className="flex justify-between items-center">"
                    <span className="text-sm font-medium">Current Status:</span>
                    <div>{getStatusBadge(project.status)}</div>
                  </div>"
                  <div className="flex justify-between items-center">"
                    <span className="text-sm font-medium">Creation Date:</span>"
                    <span className="text-sm">"
                      {format(new Date(project.created_at), "PPP")}
                    </span>
                  </div>"
                  <div className="flex justify-between items-center">"
                    <span className="text-sm font-medium">Start Date:</span>"
                    <span className="text-sm">"
                      {format(new Date(project.start_date), "PPP")}
                    </span>
                  </div>
                </div>
              </CardContent>
              {/* Conditional Footer Based on Status */}

              {/* Conditional Footer Based on Status */}"
              {project.status === "changes_requested" && isClient && ("
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">"
                  <p className="text-sm text-amber-600 flex items-center gap-1">"
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.

              {project.status === "changes_requested" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
                  </p>
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;

;
                    </div>;
                  </div>;

            {/* Project Status Card */}
            <Card className="mt-6">;
              <CardHeader>;
                <CardTitle>Project Status</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-2">;
                  <div className="flex justify-between items-center">;
                    <span className="text-sm font-medium">Current Status:</span>;
                    <div>{getStatusBadge(project && project.status)}</div>;
                  </div>;

                  <div className="flex justify-between items-center">;
                    <span className="text-sm font-medium">Creation Date:</span>;
                    <span className="text-sm">;
                      {format(new Date(project && project.created_at), "PPP")}
                    </span>;
                  </div>;

                  <div className="flex justify-between items-center">;
                    <span className="text-sm font-medium">Start Date:</span>;
                    <span className="text-sm">;
                      {format(new Date(project && project.start_date), "PPP")}

<div>{getStatusBadge(project.status)}</div>;
                  </div>;
                  ;
                  <div className="flex justify-between items-center">;
                    <span className="text-sm font-medium">Creation Date:</span>;
                    <span className="text-sm">;
                      {format(new Date(project.created_at), "PPP")}
                    </span>;
                  </div>;
                  ;
                  <div className="flex justify-between items-center">;
                    <span className="text-sm font-medium">Start Date:</span>;
                    <span className="text-sm">;
                      {format(new Date(project.start_date), "PPP")}

                    </span>;
                  </div>;
                </div>;
              </CardContent>;

              {/* Conditional Footer Based on Status */}
              {project && project.status === "changes_requested" && isClient && (;
;
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested" && isClient && (;
;
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested" && isClient && (;
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;
                  <p className="text-sm text-amber-600 flex items-center gap-1">;
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.;
                  </p>;

                  <Button
                    variant="outline"
                    onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
<Button ;
                    variant="outline";
                    onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
                        <img
                          src={project && project.client_profile.avatar_url}
                          alt={project && project.client_profile.display_name}
                        />;
                      ) : (;
                        <User className="h-6 w-6" />;
                      )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => navigate(`/messages?clientId=${project && project.client_id}`)}
                        >;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}

                  <Button
                    variant="outline"
                    onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
                    className="w-full";
                  >;
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes;
                  </Button>;
                </CardFooter>;
              )}

              {project && project.status === "offer_sent" && isClient && (;
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;
                  <p className="text-sm text-muted-foreground">;
                    Waiting for the talent to accept your offer.;
                  </p>;
                </CardFooter>;
              )}

                  <Button
                    variant="outline"
                    onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
                    className="w-full"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes
                  </Button>
                </CardFooter>
              )}
              {project.status === "offer_sent" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-muted-foreground">
                    Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}
              {project.status === "completed" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> This project has been completed.
                  </p>
                </CardFooter>
              )}
              {project.status === "canceled" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <XCircle className="h-4 w-4" /> This project has been canceled.
                  </p>
                </CardFooter>
              )}


              {project && project.status === "completed" && (;
              ;
              {project.status === "completed" && (;
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;
                  <p className="text-sm text-green-600 flex items-center gap-1">;
                    <CheckCircle2 className="h-4 w-4" /> This project has been completed.;
                  </p>;
                </CardFooter>;
              )}
              ;
              {project.status === "canceled" && (;
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;
                  <p className="text-sm text-red-600 flex items-center gap-1">;
                    <XCircle className="h-4 w-4" /> This project has been canceled.;
                  </p>;
                </CardFooter>;
              )}
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default function ProjectDetails() {
  return (
    <ProtectedRoute>
      <ProjectDetailsContent />
    </ProtectedRoute>
  )
};
;


            </Card>;
                  </p>                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;


    </>);

}
export default /**;
 * ProjectDetails - Function description;
 */
function ProjectDetails() {}
  return (
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>);


;
;


}
;

    </>;
  ),;
    </>;
  );

;
