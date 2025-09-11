



import {useState, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {format} from "date-fns";
import {useAuth} from "@/hooks/useAuth";
import {useProjects} from "@/hooks/useProjects";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {Project, ProjectStatus} from "@/types/projects";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog";
import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {ProjectReviewSection} from "@/components/projects/reviews/ProjectReviewSection";
import {AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle} from "lucide-react";

function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { projectId } = useParams() as { projectId?: string };
  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();



=======

function ProjectDetailsContent() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { projectId } = useParams() as { projectId?: string },
  const { user } = useAuth(),
  const navigate = useNavigate(),
  const { getProjectById, updateProjectStatus } = useProjects(),
  
  const [project, setProject] = useState<Project | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [notes, setNotes] = useState<any[]>([]),
  const [newNote, setNewNote] = useState(""),
  const [isSubmittingNote, setIsSubmittingNote] = useState(false),
  const [activeTab, setActiveTab] = useState("details"),
  
  // Load project data
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return,
      
      setIsLoading(true),
      const projectData = await getProjectById(projectId),
      
      if (projectData) {
        setProject(projectData),
        
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState, useEffect } from './react';
import { use_params, use_navigate, Link } from './react-router-dom';
import { format } from './date - fns';
import { use_auth } from '@/hooks / use_auth';
import { use_projects } from '@/hooks / use_projects';
import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { Project, ProjectStatus } from '@/types / projects';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components / ui / alert - dialog';
import { Avatar } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';
import { Textarea } from '@/components / ui / textarea';
import { toast } from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
import { ProjectReviewSection } from '@/components / projects / reviews / ProjectReviewSection';
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from './lucide-react';
;
/**
 * ProjectDetailsContent - Function description
 */
function ProjectDetailsContent() {
  // use_params may be untyped in this environment, so avoid passing a;

=======import { useState, useEffect } from "react",;
import { useParams, useNavigate, Link } from "react-router-dom",;
import { format } from "date-fns",;
import { useAuth } from "@/hooks/useAuth",;
import { useProjects } from "@/hooks/useProjects",;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { Project, ProjectStatus } from "@/types/projects",;
import { Button } from "@/components/ui/button",;
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle} from "@/components/ui/card",;
import {;
  Tabs,;
  TabsContent,;
  TabsList,;
  TabsTrigger} from "@/components/ui/tabs",;
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;
  AlertDialogTrigger} from "@/components/ui/alert-dialog",;
import { Avatar } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
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
  User,;
  XCircle} from "lucide-react",;
function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
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
  const fetchProjectNotes = async (project_id: string) => {    try {
      const { data, error } = await supabase;
        .from ("project_notes");
        .select (`;
          *;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (err) {
      console.error ("Error fetching project notes:", err);
    }
  }
      setIsLoading(true);
      const projectData = await getProjectById(projectId);

      if (projectData) {;
        setProject(projectData);
        // Now fetch notes;
        fetchProjectNotes(projectId);
      } else {;
        toast({;
          title: "Project not found",;
          description: "The requested project could not be found.",;
          variant: "destructive"}),;
        navigate("/dashboard");

      }

      setIsLoading(false);
    }=======
    loadProject()
  }, [projectId]);    
    loadProject()
  }, [projectId]),
  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  const fetchProjectNotes = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======        .order("created_at", { ascending: false }),
      
      if (error) throw error,
      
      setNotes(data || [])
    } catch (err) {
      console.error("Error fetching project notes:", err)
    }
  },
  
  const handleSubmitNote = async () => {
    if (!newNote.trim() || !project || !user) return,
    
    setIsSubmittingNote(true),
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======    try {
      const { data, error } = await supabase
        .from("project_notes")
        .insert({
          project_id: project.id
          user_id: user.id
          content: newNote})
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======        .select(),
      
      if (error) throw error,
      
      // Refresh notes
      fetchProjectNotes(project.id),
      setNewNote(""),
      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      toast({
        title: "Note added"
        description: "Your note has been added to the project."})
    } catch (err: any) {
      console.error("Error adding note:", err),
      toast({
        title: "Failed to add note"
        description: err.message |"An error occurred while adding your note."
        variant: "destructive"})
    } finally {
      setIsSubmittingNote(false)
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  },
  
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return,
    
    const success = await updateProjectStatus(project.id, newStatus),
    
    if (success) {
      setProject({
        ...project,
        status: newStatus}),
      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
        toast({
          title: "Offer Accepted! 🎉"
          description: "The project is now in progress. Congratulations!"})
      }
    }
  }
  },
  
=======

  },
  
=======
  }
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>,
      case "offer_accepted":
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,
      case "changes_requested":
        return <Badge variant="secondary">Changes Requested</Badge>,
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,
      case "completed":
        return <Badge variant="default">Completed</Badge>,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      case "canceled":
        return <Badge variant="destructive">Canceled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


  if (isLoading) {
  if (isLoading) {;    return (
      <div className="container mx-auto py-8">;
        <div className="flex justify-center items-center h-64">;
          <div className="text-center">;
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;
            <p>Loading project details...</p>;
          </div>;
        </div>;
      </div>;
    );
  }


  if (!project) {;


  if (!isClient && !isTalent) {
=======
  // Check if user is either the client or the talent;
  const isClient = user?.id === project && project.client_id;
  const isTalent = user?.id === project && project.talent_id;
  if (!isClient && !isTalent) {;
    navigate("/unauthorized");
    return null;
  }
=======  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;
  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
  
  if (!isClient && !isTalent) {
    navigate("/unauthorized"),
    return null
  }
  const isOfferPending = project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status);
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  
  const isOfferPending = project.status === "offer_sent",
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status),
  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <SEO
        title={`Project: ${project.job?.title |'Project Details'} | Zion AI Marketplace`}
        description="View and manage your project details and collaboration."
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
            <div>
              <h1 className="text-3xl font-bold">{project.job?.title |"Project"}</h1>
              <div className="flex items-center gap-2 mt-1">
                {getStatusBadge(project.status)}
                <span className="text-muted-foreground">
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>
              </div>
            </div>
            {/* Action Buttons Based on Role and Status */}
            <div className="space-x-2">
              {isTalent && isOfferPending && (
                <>
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
                          By accepting this offer, you agree to the project terms and timeline.
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
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
                  </Button>
                </>
              )}
              {(isClient |isTalent) && project.status === "in_progress" && (
                <AlertDialog>
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
              {isActiveProject && (
                <Button variant="default" asChild>
                  <Link to={`/project/${project.id}/milestones`}>
                    <Layers className="mr-2 h-4 w-4" /> Milestones
                  </Link>
                </Button>
              )}
              {isActiveProject && (
                <Button variant="outline" asChild>
                  <Link to={`/project/${project.id}/room`}>
                    <Video className="mr-2 h-4 w-4" /> Project Room
                  </Link>
                </Button>
              )}
              {(isClient |isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project.status) && (
                <Button
                  variant="outline"
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Message
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="details">Project Details</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>
                {project.status === "completed" && (
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
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Payment Terms</h3>
                        <Badge variant="outline" className="capitalize">
                          {project.payment_terms} Payment
                        </Badge>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Job Details</h3>
                        <div className="bg-muted/30 p-4 rounded-md">
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>
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
                          <p>{format(new Date(project.start_date), "PPP")}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Project Status</h3>
                          <div className="mt-1">
                            {getStatusBadge(project.status)}
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
                    {project.agreement_url ? (
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

  const isOfferPending = project && project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project && project.status);
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project && project.status);
  return (
    <>;
      <SEO
        title={`Project: ${project && project.job?.title || 'Project Details'} | Zion AI Marketplace`} 
        description="View and manage your project details and collaboration."
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;
            <div>;
              <h1 className="text-3xl font-bold">{project && project.job?.title || "Project"}</h1>;
              <div className="flex items-center gap-2 mt-1">;
                {getStatusBadge(project && project.status)}
                <span className="text-muted-foreground">;
                  Started on {format(new Date(project && project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Action Buttons Based on Role and Status */}
            <div className="space-x-2">;
              {isTalent && isOfferPending && (;
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger asChild>;
                      <Button variant="default">;
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
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;
                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;
                      <div>;
                        <h3 className="font-semibold mb-2">Job Details</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project && project.job?.description}</p>;                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;              <TabsContent value="timeline">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Timeline</CardTitle>;
                    <CardDescription>;
                      Key dates and milestones;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-4">;
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
                        <Clock className="h-5 w-5 text-primary mt-0 && 0.5" />;
                        <div>;
                          <h3 className="font-semibold">Project Status</h3>;
                          <div className="mt-1">;
                            {getStatusBadge(project && project.status)}                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;              <TabsContent value="documents">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>;
                        </div>;
                      )}
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
=======
            {/* Project Status Card */}
            <Card className="mt-6">;
              <CardHeader>;
                <CardTitle>Project Status</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-2">;
                  <div className="flex justify-between items-center">;
                    <span className="text-sm font-medium">Current Status:</span>;
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
              {/* Conditional Footer Based on Status */}
              {project && project.status === "changes_requested" && isClient && (;                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;
                  <p className="text-sm text-amber-600 flex items-center gap-1">;
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.;
                  </p>;

              {project && project.status === "offer_sent" && isClient && (;=======


              {project && project.status === "offer_sent" && isClient && (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;
                  <p className="text-sm text-muted-foreground">;
                    Waiting for the talent to accept your offer.;
                  </p>;
                </CardFooter>;
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
=======            </Card>
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

=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
    </>;
  );

}
export default function ProjectDetails() {;
  return (
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>;
  );
}
    </>);
}
export default /**
 * ProjectDetails - Function description
 */
function ProjectDetails() {
  return (
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>);
}
;
