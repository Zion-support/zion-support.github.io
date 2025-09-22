

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
function ProjectDetailsContent() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { projectId } = useParams() as { projectId?: string }

function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { projectId } = useParams() as { projectId?: string };
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

"
import { useState, useEffect } from "react","
import { useParams, useNavigate, Link } from "react-router-dom","
import { format } from "date-fns","
import { useAuth } from "@/hooks/useAuth","
import { useProjects } from "@/hooks/useProjects","
import { AppHeader } from "@/layout/AppHeader","
import { Footer } from "@/components/Footer","
import { SEO } from "@/components/SEO","
import { ProtectedRoute } from "@/components/ProtectedRoute","
import { Project, ProjectStatus } from "@/types/projects","
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


  const { projectId } = useParams() as { projectId?: string };  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();

  const { projectId } = useParams() as { projectId?: string };  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();

  const { projectId } = useParams() as { projectId?: string };
  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();

function ProjectDetailsContent() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { projectId } = useParams() as { projectId?: string }
  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<any[]>([]);
  const [newNote, setNewNote] = useState("");
  const [isSubmittingNote, setIsSubmittingNote] = useState(false);
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle} from "@/components/ui/card",
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from "@/components/ui/tabs",
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger} from "@/components/ui/alert-dialog",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection",
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  MessageSquare,
  Video,
  User,
  XCircle} from "lucide-react",

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

function ProjectDetailsContent() {
  // useParams may be untyped in this environment, so avoid passing a

function ProjectDetailsContent() {};
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.
const { projectId } = useParams() as { projectId?: string },
  const { user } = useAuth(),
  const navigate = useNavigate(),
  const { getProjectById, updateProjectStatus } = useProjects(),

  const [project, setProject] = useState<Project | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [notes, setNotes] = useState<any[]>([]),"
  const [newNote, setNewNote] = useState(""),
  const [isSubmittingNote, setIsSubmittingNote] = useState(false),"
  const [activeTab, setActiveTab] = useState("details"),
// Load project data
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return,

      setIsLoading(true),
      const projectData = await getProjectById(projectId),

      if (projectData) {
        setProject(projectData),

        // Now fetch notes

if (projectData) {        // Now fetch notes
      if (projectData) {
        setProject(projectData),

        // Now fetch notes
        fetchProjectNotes(projectId)
      } else {
        toast({
          title: "Project not found"
          description: "The requested project could not be found."
          variant: "destructive"})
        navigate("/dashboard")


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
CardHeader,;"
  CardTitle} from "@/components/ui/card",;
import {;
  Tabs,;
  TabsContent,;
TabsList,;"
  TabsTrigger} from "@/components/ui/tabs",;
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
AlertDialogTitle,;"
  AlertDialogTrigger} from "@/components/ui/alert-dialog",;"
import { Avatar } from "@/components/ui/avatar",;"
import { Badge } from "@/components/ui/badge",;"
import { Textarea } from "@/components/ui/textarea",;"
import { toast } from "@/hooks/use-toast",;"
import { supabase } from "@/integrations/supabase/client",;"
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
User,;"
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
  const fetchProjectNotes = async (project_id: string) => {
    try {
        navigate("/dashboard")    try {
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
const getStatusBadge = (status: ProjectStatus) =>: any {
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
    switch (status) {        // Now fetch notes;
    switch (status) {        // Now fetch notes;

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
    }
loadProject()
  }, [projectId]),

        .order("created_at", { ascending: false }),

      if (error) throw error,

      setNotes(data || [])
    } catch (err) {"
      console.error("Error fetching project notes:", err)
    }
  },

  const handleSubmitNote = async () => {}
    if (!newNote.trim() || !project || !user) return,

    setIsSubmittingNote(true),

    try {
      const { data, error } = await supabase
    try {}
      const { data, error } = await supabase"
        .from("project_notes")
        .insert({}
          project_id: project.id;
          user_id: user.id;
          content: newNote})

        .select(),

      if (error) throw error,

      // Refresh notes;
      fetchProjectNotes(project.id),"
      setNewNote(""),

      toast({
        title: "Note added"
      toast({"
        title: "Note added""
        description: "Your note has been added to the project."})
    } catch (err: any) {"
      console.error("Error adding note:", err),
      toast({"
        title: "Failed to add note""
        description: err.message |"An error occurred while adding your note.""
        variant: "destructive"})
    } finally {}
      setIsSubmittingNote(false)
    }

  },

  const handleStatusChange = async (newStatus: ProjectStatus) => {}
    if (!project) return,

    const success = await updateProjectStatus(project.id, newStatus),

    if (success) {}
      setProject({}
        ...project,
        status: newStatus}),

      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
        toast({
          title: "Offer Accepted! 🎉"
      // If offer was accepted, show a special toast"
      if (newStatus === "offer_accepted") {}
        toast({"
          title: "Offer Accepted! 🎉""
          description: "The project is now in progress. Congratulations!"})
      }
    }

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
  const getStatusBadge = (status: ProjectStatus) => {}
    switch (status) {"
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>,"
      case "offer_accepted":"
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,"
      case "changes_requested":"
        return <Badge variant="secondary">Changes Requested</Badge>,"
      case "in_progress":"
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,"
      case "completed":"
        return <Badge variant="default">Completed</Badge>,

"
      case "canceled":"
        return <Badge variant="destructive">Canceled</Badge>
      default:"
        return <Badge variant="outline">{status}</Badge>
    }

if (isLoading) {
  },

  if (isLoading) {}
"
      case "canceled":;"
        return <Badge variant="destructive">Canceled</Badge>,;
      default:;"
        return <Badge variant="outline">{status}</Badge>;

    loadProject();
  }, [projectId]);

  const fetchProjectNotes = async (projectId: string) => {;
    try {;
      const { data, error } = await supabase;"
        .from("project_notes");`
        .select(`;
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url);`
        `);"
        .eq("project_id", projectId);"
        .order("created_at", { ascending: false }),;

      if (error) throw error;

      setNotes(data || []);
    } catch (err) {;"
      console && console.error("Error fetching project notes:", err);
    }
  };
"
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>;"
      case "offer_accepted":;
    return (
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

    return (
      setIsLoading(false);
    }    return (
      setIsLoading(false);
    }    return (
    return ("

      }

      setIsLoading(false);
    }

    loadProject()
  }, [projectId]),

  const fetchProjectNotes = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)

        .order("created_at", { ascending: false }),

      if (error) throw error,

      setNotes(data || [])
    } catch (err) {
      console.error("Error fetching project notes:", err)
    }
  },

  const handleSubmitNote = async () => {
    if (!newNote.trim() || !project || !user) return,

    setIsSubmittingNote(true),

    try {
      const { data, error } = await supabase
        .from("project_notes")
        .insert({
          project_id: project.id
          user_id: user.id
          content: newNote})

        .select(),

      if (error) throw error,

      // Refresh notes
      fetchProjectNotes(project.id),
      setNewNote(""),

      toast({
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

  },

  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return,

    const success = await updateProjectStatus(project.id, newStatus),

    if (success) {
      setProject({
        ...project,
        status: newStatus}),

      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
        toast({
          title: "Offer Accepted! 🎉"
          description: "The project is now in progress. Congratulations!"})
      }
    }

  },

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

      case "canceled":
        return <Badge variant="destructive">Canceled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }

  },

  if (isLoading) {
      case "canceled":;
        return <Badge variant="destructive">Canceled</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;

    loadProject();
  }, [projectId]);

  const fetchProjectNotes = async (projectId: string) => {;
    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .select(`;
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .eq("project_id", projectId);
        .order("created_at", { ascending: false }),;

      if (error) throw error;

      setNotes(data || []);
    } catch (err) {;
      console && console.error("Error fetching project notes:", err);
    }
  };

      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>;
      case "offer_accepted":;
    return (
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

    return (
      <div className="container mx-auto py-8">;
        <Card>;"
          <CardContent className="flex flex-col items-center justify-center py-10">;"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;"
            <p className="text-muted-foreground mb-4">;'
              The project you're looking for doesn't exist or you don't have access to it.;
</p>;
            <Button onClick={() => navigate("/dashboard")}>;
        return <Badge className="bg - green - 100 text - green - 800">Offer Accepted</Badge>;
      case "changes_requested":;
        return <Badge variant="secondary">Changes Requested</Badge>;
      case "in_progress":;
        return <Badge className="bg - blue - 100 text - blue - 800">In Progress</Badge>;
      case "completed":;
        return <Badge variant="default">Completed</Badge>;
      case "canceled":;
            </p>;"
            <Button onClick={() => navigate("/dashboard")}>;"
        return <Badge className="bg - green - 100 text - green - 800">Offer Accepted</Badge>;"
      case "changes_requested":;"
        return <Badge variant="secondary">Changes Requested</Badge>;"
      case "in_progress":;"
        return <Badge className="bg - blue - 100 text - blue - 800">In Progress</Badge>;"
      case "completed":;"
        return <Badge variant="default">Completed</Badge>;"
      case "canceled":;"
        return <Badge variant="destructive">Canceled</Badge>,
      default:;"
        return <Badge variant="outline">{status}</Badge>;
}
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="container mx - auto py - 8">;
        <div className="flex justify - center items - center h - 64">;
          <div className="text - center">;
            <div className="animate - spin h - 8 w - 8 border - 4 border - primary border - t-transparent rounded - full mx - auto mb - 4"></div>;
            <p > Loading project details...</p>;
          </div>;
        </div>;
</div>);  }
  },

  if (isLoading) {}
    return (
<div className="container mx - auto py-8">;
        <Card>;
          <CardContent className="flex flex - col items - center justify - center py - 10">;
            <AlertCircle className="h - 10 w - 10 text - muted - foreground mb - 4" />;
            <h2 className="text - xl font - bold mb - 2">Project Not Found</h2>;
            <p className="text - muted - foreground mb - 4">;
              The project you're looking for doesn't exist or you don't have access to it.;
            </p>;
            <Button on_click={() => navigate ("/dashboard")}>;
    }
  }
              Return to Dashboard;
            </Button>;
          </CardContent>;
        </Card>;

if (!project) {}
    return ("
      <div className="container mx-auto py-8">
        <Card>"
          <CardContent className="flex flex-col items-center justify-center py-10">"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>"
            <p className="text-muted-foreground mb-4">'
              The project you're looking for doesn't exist or you don't have access to it.
            </p>"
            <Button onClick={() => navigate("/dashboard")}>
              Return to Dashboard;
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
// Check if user is either the client or the talent
  // Check if user is either the client or the talent

  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,

  // Check if user is either the client or the talent;
  const isClient = user?.id === project && project.client_id;
  const isTalent = user?.id === project && project.talent_id;

  if (!isClient && !isTalent) {;
"
    navigate("/unauthorized");
    return null;
  }

if (!isClient && !isTalent) {
    navigate("/unauthorized"),
    return null
  }

    navigate("/unauthorized");
    return null;
  }
  const isOfferPending = project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status);
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status);

  }

  "
  const isOfferPending = project.status === "offer_sent","
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),"
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status),

            </Button>;
          </CardContent>;
        </Card>;
            </Button>;
          </CardContent>;
        </Card>;

  }

  const isOfferPending = project.status === "offer_sent",
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status),


  return (
    <>
      <SEO'`
        title={`Project: ${project.job?.title |'Project Details'} | Zion AI Marketplace`}"
        description="View and manage your project details and collaboration."
      />
      <AppHeader />"
      <main className="container mx-auto px-4 py-8">"
        <div className="mb-6">"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
            <div>"
              <h1 className="text-3xl font-bold">{project.job?.title |"Project"}</h1>"
              <div className="flex items-center gap-2 mt-1">
                {getStatusBadge(project.status)}"
                <span className="text-muted-foreground">"
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>
              </div>
            </div>
            {/* Action Buttons Based on Role and Status */}"
            <div className="space-x-2">
              {isTalent && isOfferPending && (
                <>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>"
                      <Button variant="default">"
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer;
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
                        <AlertDialogCancel>Cancel</AlertDialogCancel>"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>
                          Accept Offer;
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>"
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>"
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;
                  </Button>
                </>
              )}"
              {(isClient |isTalent) && project.status === "in_progress" && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>"
                    <Button variant="default">"
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;
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
                      <AlertDialogCancel>Cancel</AlertDialogCancel>"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>
                        Mark as Completed;
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              {isActiveProject && ("
                <Button variant="default" asChild>`
                  <Link to={`/project/${project.id}/milestones`}>"
                    <Layers className="mr-2 h-4 w-4" /> Milestones;
                  </Link>
                </Button>
              )}
              {isActiveProject && ("
                <Button variant="outline" asChild>`
                  <Link to={`/project/${project.id}/room`}>"
                    <Video className="mr-2 h-4 w-4" /> Project Room;
                  </Link>
                </Button>
              )}"
              {(isClient |isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project.status) && (
                <Button"
                  variant="outline"`
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >"
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;
                </Button>
              )}
            </div>
          </div>
        </div>"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
          <div className="order-2 lg:order-1 lg:col-span-2">"
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>"
              <TabsList className="mb-6">"
                <TabsTrigger value="details">Project Details</TabsTrigger>"
                <TabsTrigger value="timeline">Timeline</TabsTrigger>"
                <TabsTrigger value="documents">Documents</TabsTrigger>"
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>"
                {project.status === "completed" && ("
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                )}
              </TabsList>"
              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Scope</CardTitle>
                    <CardDescription>
                      Project details and expectations;
                    </CardDescription>
                  </CardHeader>
                  <CardContent>"
                    <div className="space-y-4">
                      <div>"
                        <h3 className="font-semibold mb-2">Project Description</h3>"
                        <div className="bg-muted/30 p-4 rounded-md">"
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>
                        </div>
                      </div>
                      <div>"
                        <h3 className="font-semibold mb-2">Payment Terms</h3>"
                        <Badge variant="outline" className="capitalize">
                          {project.payment_terms} Payment;
                        </Badge>
                      </div>
                      <div>"
                        <h3 className="font-semibold mb-2">Job Details</h3>"
                        <div className="bg-muted/30 p-4 rounded-md">"
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>

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
              <TabsContent value="timeline">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                    <CardDescription>
                      Key dates and milestones;
                    </CardDescription>
                  </CardHeader>
                  <CardContent>"
                    <div className="space-y-4">"
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">"
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>"
                          <h3 className="font-semibold">Start Date</h3>"
                          <p>{format(new Date(project.start_date), "PPP")}</p>
                        </div>
                      </div>"
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">"
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>"
                          <h3 className="font-semibold">Project Status</h3>"
                          <div className="mt-1">
                            {getStatusBadge(project.status)}

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
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>
                      Agreements and relevant files;
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
View
</Link>                          </Link>
                        </Button>
                      </div>
                    ) : ("
                      <div className="text-center py-8">"
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />"
                        <h3 className="font-semibold">No Documents Yet</h3>"
                        <p className="text-sm text-muted-foreground">
                          No documents have been uploaded to this project.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>"
              <TabsContent value="notes">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Notes</CardTitle>
                    <CardDescription>
                      Shared notes and updates;
                    </CardDescription>
                  </CardHeader>
                  <CardContent>"
                    <div className="space-y-4">"
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">

      </div>);
  }
  // Check if user is either the client or the talent;
  const is_client = user?.id === project.client_id;
  const is_talent = user?.id === project.talent_id;
;
  // Check condition;
if ( {) {}
  $2;
}"
    navigate ("/unauthorized");
    return null;
  }"
  const isOfferPending = project.status === "offer_sent";"
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes (project.status);"
  const isActiveProject = ["offer_accepted", "in_progress"].includes (project.status);
;
  return (
    <>;
      <SEO;'`
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`}"
        description="View and manage your project details and collaboration.";
      />;
<AppHeader />;
      <main className="container mx - auto px - 4 py-8">;
        <div className="mb-6">;
          <div className="flex flex - col md:flex - row justify - between md:items - center gap - 4 mb-2">;
            <div>;
              <h1 className="text - 3xl font-bold">{project.job?.title || "Project"}</h1>;
              <div className="flex items - center gap - 2 mt-1">;
                {getStatusBadge (project.status)}
                <span className="text - muted-foreground">;
                <span className="text - muted-foreground">;
                  Started on {format (new Date (project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;
{/* Action Buttons Based on Role and Status */}
            <div className="space-x-2">;
              {is_talent && isOfferPending && (
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger as_child>;
                      <Button variant="default">;
                        <CheckCircle2 className="mr - 2 h - 4 w-4" /> Accept Offer;
                        <CheckCircle2 className="mr - 2 h - 4 w-4" /> Accept Offer;
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
                        <AlertDialogCancel > Cancel</AlertDialogCancel>;"
                        <AlertDialogAction on_click={() => handleStatusChange ("offer_accepted")}>;
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
                    <Button variant="default">;
                      <CheckCircle2 className="mr - 2 h - 4 w-4" /> Mark as Completed;
                      <CheckCircle2 className="mr - 2 h - 4 w-4" /> Mark as Completed;
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
                      <AlertDialogCancel > Cancel</AlertDialogCancel>;"
                      <AlertDialogAction on_click={() => handleStatusChange ("completed")}>;
                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
>;
                  <MessageSquare className="mr - 2 h - 4 w-4" /> Message;
                  <MessageSquare className="mr - 2 h - 4 w-4" /> Message;
                </Button>)}
            </div>;
          </div>;
        </div>;"
                <TabsTrigger value="details">Project Details</TabsTrigger>;"
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;"
                <TabsTrigger value="documents">Documents</TabsTrigger>;"
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;"
              <TabsContent value="details">;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
<CardContent>;
                    <div className="space-y-4">;
                      <div>;
                      <div>;
                        <h3 className="font - semibold mb-2">Payment Terms</h3>;
                        <h3 className="font - semibold mb-2">Payment Terms</h3>;
                        <Badge variant="outline" className="capitalize">;
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
              </TabsContent>;"
              <TabsContent value="timeline">;
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
              </TabsContent>;"
              <TabsContent value="documents">;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
<div>;
                            <h3 className="font-semibold">Project Agreement</h3>;
                            <p className="text - sm text - muted-foreground">;
                            <h3 className="font-semibold">Project Agreement</h3>;
                            <p className="text - sm text - muted-foreground">;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;"
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;
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
              </TabsContent>;"
              <TabsContent value="notes">;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;"
    navigate("/unauthorized");
    return null;
  }
                        {notes.length > 0 ? (
notes.map ((note) => (
                            <div key={note.id} className="bg - muted / 30 p - 3 rounded-md">;
                              <div className="flex items - center gap - 2 mb-2">;
                                <Avatar className="h - 6 w-6">;
                                  {note.created_by_profile?.avatar_url ? (

  const isOfferPending = project && project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project && project.status);
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project && project.status);

  return (
    <>;
<SEO'`
        title={`Project: ${project && project.job?.title || 'Project Details'} | Zion AI Marketplace`} "
        description="View and manage your project details and collaboration."
      />;
      <AppHeader />;"
      <main className="container mx-auto px-4 py-8">;"
        <div className="mb-6">;"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;
            <div>;"
              <h1 className="text-3xl font-bold">{project && project.job?.title || "Project"}</h1>;"
              <div className="flex items-center gap-2 mt-1">;
                {getStatusBadge(project && project.status)}"
                <span className="text-muted-foreground">;"
                  Started on {format(new Date(project && project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;

            {/* Action Buttons Based on Role and Status */}
"
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
                        <AlertDialogCancel>Cancel</AlertDialogCancel>;"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;
                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;

                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;
"
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;"
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;
                  </Button>;
                </>;
              )}

{(isClient || isTalent) && project && project.status === "in_progress" && (;                <AlertDialog>;
                  <AlertDialogTrigger asChild>;
                    <Button variant="default">;
                <AlertDialog>;
                  <AlertDialogTrigger asChild>;"
                    <Button variant="default">;"
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
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;
                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;
              )}
{isActiveProject && (;
                <Button variant="default" asChild>;
                  <Link to={`/project/${project && project.id}/milestones`}>;
;
              {isActiveProject && (;
                <Button variant="default" asChild>;
                  <Link to={`/project/${project.id}/milestones`}>;
                    <Layers className="mr-2 h-4 w-4" /> Milestones;
                  <Link to={`/project/${project && project.id}/milestones`}>;                    <Layers className="mr-2 h-4 w-4" /> Milestones;
                  </Link>;
                </Button>;
              )}

              {isActiveProject && (;
                <Button variant="outline" asChild>;
<Link to={`/project/${project && project.id}/room`}>;                    <Video className="mr-2 h-4 w-4" /> Project Room;
                  </Link>;
                </Button>;
              )}

{(isClient || isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project && project.status) && (;
                <Button
                  variant="outline" 
onClick={() => navigate(`/messages?talentId=${project && project.talent_id}&clientId=${project && project.client_id}`)}                >;
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;
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


              <TabsContent value="details">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;"
                    <div className="space-y-4">;
                      <div>;"
                        <h3 className="font-semibold mb-2">Project Description</h3>;"
                        <div className="bg-muted/30 p-4 rounded-md">;
<p className="whitespace-pre-wrap">{project && project.scope_summary}</p>;
                        </div>;
                      </div>;

                      <div>;
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;
                        <Badge variant="outline" className="capitalize">;
                          {project && project.payment_terms} Payment;
                        </Badge>;
                      </div>;

                      <div>;
                        <h3 className="font-semibold mb-2">Job Details</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
<p className="whitespace-pre-wrap">{project && project.job?.description}</p>;                        </div>;
                      </div>;
                      <div>;
</div>"
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;""
                        <Badge variant="outline" className="capitalize">;"
</Badge>
                        </Badge>;
                      </div>;
                      <div>;
                        <h3 className="font-semibold mb-2">Job Details</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>;
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

              <TabsContent value="timeline">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Timeline</CardTitle>;
                    <CardDescription>;
                      Key dates and milestones;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;"
                    <div className="space-y-4">;"
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
<Calendar className="h-5 w-5 text-primary mt-0 && 0.5" />;
                        <div>;
                          <h3 className="font-semibold">Start Date</h3>;
                          <p>{format(new Date(project && project.start_date), "PPP")}</p>;
                        </div>;
                      </div>;

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
              </TabsContent>;

              <TabsContent value="documents">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
{project && project.agreement_url ? (;                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;
                        <div className="flex items-center gap-3">;
"
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;"
                        <div className="flex items-center gap-3">;"
                          <FileText className="h-5 w-5 text-primary" />;
                          <div>;"
                            <h3 className="font-semibold">Project Agreement</h3>;"
                            <p className="text-sm text-muted-foreground">;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;"
                        <Button variant="outline" size="sm" asChild>;
<a href={project && project.agreement_url} target="_blank" rel="noopener noreferrer">;                            View;
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

              <TabsContent value="notes">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;"
                    <div className="space-y-4">;"
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">;
{notes && notes.length > 0 ? (;
                          notes && notes.map((note) => (;
                            <div key={note && note.id} className="bg-muted/30 p-3 rounded-md">;
                              <div className="flex items-center gap-2 mb-2">;
                                <Avatar className="h-6 w-6">;
                                  {note && note.created_by_profile?.avatar_url ? (;

                                    <img
                                      src={note && note.created_by_profile.avatar_url}
                                      alt={note && note.created_by_profile.display_name}
                                    />;
                                  ) : (;
<User className="h-4 w-4" />;
                                  )}

                                </Avatar>;
                                <span className="font-medium text-sm">;
                                  {note && note.created_by_profile?.display_name || "User"}
                                </span>;
                                <span className="text-xs text-muted-foreground">;
                                  {format(new Date(note && note.created_at), "PPp")}
                                </span>;
                              </div>;
                              <p className="text-sm whitespace-pre-wrap">{note && note.content}</p>;
                            </div>;
                          ));
                        ) : (;
{notes.length > 0 ? (;
                          notes.map((note) => (;
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">;
                              <div className="flex items-center gap-2 mb-2">;
                                <Avatar className="h-6 w-6">;
                                  {note.created_by_profile?.avatar_url ? (;
                                    <img;
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                    />;
                                  ) :(;
                                    <User className="h-4 w-4" />;
                                  )}
                                </Avatar>;
                                <span className="font-medium text-sm">;
                                  {note.created_by_profile?.display_name || "User"}
                                </span>;
                                <span className="text-xs text-muted-foreground">;
                                  {format(new Date(note.created_at), "PPp")}
                                </span>;
                              </div>;
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>;
                            </div>;
                          ));
                        ) :(;
                          <div className="text-center py-8">;
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />;
                            <p className="text-muted-foreground">;
                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>;
                        )}
                      </div>;

{isOfferAccepted && (;
                        <div>;

                                    <User className="h-4 w-4" />;
                                  )}
                          <Textarea
                            placeholder="Add a note or update to the project..."
                            value={newNote}
                            onChange={(e) => setNewNote(e && e.target.value)}
                            className="min-h-[100px] mb-2";
                          />;
                          <Button
                            onClick={handleSubmitNote}

                            disabled={!newNote && newNote.trim() || isSubmittingNote}>;
{isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>;
                        </div>;
                      )}

                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
                          notes.map((note) => (
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">
                              <div className="flex items-center gap-2 mb-2">
                                <Avatar className="h-6 w-6">
                                  {note.created_by_profile?.avatar_url ? (
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                    />
                                  ) : (
                                    <User className="h-4 w-4" />
                                  )}
                                </Avatar>
                                <span className="font-medium text-sm">
                                  {note.created_by_profile?.display_name |"User"}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {format(new Date(note.created_at), "PPp")}
                                </span>
                              </div>
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>
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
                      {isOfferAccepted && (
                        <div>
                          <Textarea
                            placeholder="Add a note or update to the project..."
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="min-h-[100px] mb-2"
                          />
                          <Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() |isSubmittingNote}
                          >
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews">
                <ProjectReviewSection project={project} />
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
                      {project.talent_profile?.profile_picture_url ? (
                        <img

                        <img;
                        <img
                          src={project.talent_profile.profile_picture_url}
src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />
) : ("
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>"
                      <h3 className="font-semibold">"
                        {project.talent_profile?.full_name |"Talent"}
                      </h3>"
                      <p className="text-sm text-muted-foreground">"
                        {project.talent_profile?.professional_title |"Professional"}
                      </p>
                      {isClient && (
                        <Button"
                          variant="outline""
                          size="sm""
                          className="mt-2"`
                          onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
                        >"
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>
                      )}
                    </div>
                  </div>"
                  <div className="flex items-start gap-4">"
                    <Avatar className="h-10 w-10">
                      {project.client_profile?.avatar_url ? (
                        <img;
                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}
                        />
                      ) : ("
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>"
                      <h3 className="font-semibold">"
                        {project.client_profile?.display_name |"Client"}
                      </h3>"
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {isTalent && (
<Button
                          variant="outline"
                          size="sm"
                          className="mt-2"

;
    loadProject();
  }, [projectId]),;
  const fetchProjectNotes = async (projectId: string) => {;
    try {;
      const { data, error } = await supabase;"
        .from("project_notes");`
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);`
        `);"
        .eq("project_id", projectId);"
        .order("created_at", { ascending: false }),;
      if (error) throw error,;
      setNotes(data || []);
    } catch (err) {;"
      console.error("Error fetching project notes:", err);
    }
  },;
  const handleSubmitNote = async () => {;
    if (!newNote.trim() || !project || !user) return,;
    setIsSubmittingNote(true),;
    try {;
      const { data, error } = await supabase;"
        .from("project_notes");
        .insert({;
          project_id: project.id,;
          user_id: user.id,;
          content: newNote});
        .select(),;
      if (error) throw error,;
      // Refresh notes;
      fetchProjectNotes(project.id),;"
      setNewNote(""),;
      toast({;"
        title: "Note added",;"
        description: "Your note has been added to the project."});
    } catch (err: any) {;"
      console.error("Error adding note:", err),;
      toast({;"
        title: "Failed to add note",;"
        description: err.message || "An error occurred while adding your note.",;"
        variant: "destructive"});
    } finally {;
      setIsSubmittingNote(false);
    }
  },;
  const handleStatusChange = async (newStatus: ProjectStatus) => {;
    if (!project) return,;
    const success = await updateProjectStatus(project.id, newStatus),;
    if (success) {;
      setProject({;
        ...project,;
        status: newStatus}),;
      // If offer was accepted, show a special toast;"
      if (newStatus === "offer_accepted") {;
        toast({;"
          title: "Offer Accepted! 🎉",;"
          description: "The project is now in progress. Congratulations!"});
      }
    }
  },;
  const getStatusBadge = (status: ProjectStatus) => {;
    switch (status) {;"
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>,;"
      case "offer_accepted":;"
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>,;"
      case "changes_requested":;"
        return <Badge variant="secondary">Changes Requested</Badge>,;"
      case "in_progress":;"
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>,;"
      case "completed":;"
        return <Badge variant="default">Completed</Badge>,;"
      case "canceled":;"
        return <Badge variant="destructive">Canceled</Badge>,;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  },;
  if (isLoading) {;
    return (;"
      <div className="container mx-auto py-8">;"
        <div className="flex justify-center items-center h-64">;"
          <div className="text-center">;"
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>;
            <p>Loading project details...</p>;
          </div>;
        </div>;
      </div>;
    );
  }
;
  if (!project) {;
    return (;"
      <div className="container mx-auto py-8">;
        <Card>;"
          <CardContent className="flex flex-col items-center justify-center py-10">;"
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;"
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;"
            <p className="text-muted-foreground mb-4">;'
              The project you're looking for doesn't exist or you don't have access to it.;
            </p>;"
            <Button onClick={() => navigate("/dashboard")}>;
              Return to Dashboard;
            </Button>;
          </CardContent>;
        </Card>;
      </div>;
    );
  }
;
  // Check if user is either the client or the talent;
  const isClient = user?.id === project.client_id,;
  const isTalent = user?.id === project.talent_id,;
  if (!isClient && !isTalent) {;"
    navigate("/unauthorized"),;
    return null;
  }
;"
  const isOfferPending = project.status === "offer_sent",;"
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),;"
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status);
  return (;
    <>;
      <SEO;'`
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} ;"
        description="View and manage your project details and collaboration.";
      />;
      <AppHeader />;"
      <main className="container mx-auto px-4 py-8">;"
        <div className="mb-6">;"
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;
            <div>;"
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>;"
              <div className="flex items-center gap-2 mt-1">;
                {getStatusBadge(project.status)}"
                <span className="text-muted-foreground">"
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;
            {/* Action Buttons Based on Role and Status */}"
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
                          By accepting this offer, you agree to the project terms and timeline.;
                          This will initiate the contract and start the project.;
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
                        <AlertDialogCancel>Cancel</AlertDialogCancel>;"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;
                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;"
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;"
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;
                  </Button>;
                </>;
              )}
;"
              {(isClient || isTalent) && project.status === "in_progress" && (;
                <AlertDialog>;
                  <AlertDialogTrigger asChild>;"
                    <Button variant="default">;"
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
                        This will finalize the project and mark it as complete.;
                        Make sure all deliverables have been provided and approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;
                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;
              )}
;
              {isActiveProject && (;"
                <Button variant="default" asChild>;`
                  <Link to={`/project/${project.id}/milestones`}>;"
                    <Layers className="mr-2 h-4 w-4" /> Milestones;
                  </Link>;
                </Button>;
              )}

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
                      {project && project.talent_profile?.profile_picture_url ? (;
                        <img
                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                        />;
                      ) : (;"
                        <User className="h-6 w-6" />;
                      )}

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
>;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
                          className="mt-2"                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          className="mt-2"                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
                        </Button>

)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
;
    loadProject();
  }, [projectId]),;
  const fetchProjectNotes = async (projectId: string) => {;
    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .eq("project_id", projectId);
        .order("created_at", { ascending: false }),;
      if (error) throw error,;
      setNotes(data || []);
    } catch (err) {;
      console.error("Error fetching project notes:", err);
    }
  },;
  const handleSubmitNote = async () => {;
    if (!newNote.trim() || !project || !user) return,;
    setIsSubmittingNote(true),;
    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .insert({;
          project_id: project.id,;
          user_id: user.id,;
          content: newNote});
        .select(),;
      if (error) throw error,;
      // Refresh notes;
      fetchProjectNotes(project.id),;
      setNewNote(""),;
      toast({;
        title: "Note added",;
        description: "Your note has been added to the project."});
    } catch (err: any) {;
      console.error("Error adding note:", err),;
      toast({;
        title: "Failed to add note",;
        description: err.message || "An error occurred while adding your note.",;
        variant: "destructive"});
    } finally {;
      setIsSubmittingNote(false);
    }
  },;
  const handleStatusChange = async (newStatus: ProjectStatus) => {;
    if (!project) return,;
    const success = await updateProjectStatus(project.id, newStatus),;
    if (success) {;
      setProject({;
        ...project,;
        status: newStatus}),;
      // If offer was accepted, show a special toast;
      if (newStatus === "offer_accepted") {;
        toast({;
          title: "Offer Accepted! 🎉",;
          description: "The project is now in progress. Congratulations!"});
      }
    }
  },;
  const getStatusBadge = (status: ProjectStatus) => {;
    switch (status) {;
      case "offer_sent": return <Badge variant="outline">Offer Sent</Badge>,;
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
        return <Badge variant="outline">{status}</Badge>;
    }
  },;
  if (isLoading) {;
    return (;
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
;
  if (!project) {;
    return (;
      <div className="container mx-auto py-8">;
        <Card>;
          <CardContent className="flex flex-col items-center justify-center py-10">;
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;
            <p className="text-muted-foreground mb-4">;
              The project you're looking for doesn't exist or you don't have access to it.;
            </p>;
            <Button onClick={() => navigate("/dashboard")}>;
              Return to Dashboard;
            </Button>;
          </CardContent>;
        </Card>;
      </div>;
    );
  }
;
  // Check if user is either the client or the talent;
  const isClient = user?.id === project.client_id,;
  const isTalent = user?.id === project.talent_id,;
  if (!isClient && !isTalent) {;
    navigate("/unauthorized"),;
    return null;
  }
;
  const isOfferPending = project.status === "offer_sent",;
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),;
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status);
  return (;
    <>;
      <SEO;
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} ;
        description="View and manage your project details and collaboration.";
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">;
            <div>;
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>;
              <div className="flex items-center gap-2 mt-1">;
                {getStatusBadge(project.status)}
                <span className="text-muted-foreground">
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;
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
                          By accepting this offer, you agree to the project terms and timeline.;
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
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;
                  </Button>;
                </>;
              )}
;
              {(isClient || isTalent) && project.status === "in_progress" && (;
                <AlertDialog>;
                  <AlertDialogTrigger asChild>;
                    <Button variant="default">;
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed;
                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
                        This will finalize the project and mark it as complete.;
                        Make sure all deliverables have been provided and approved.;
                      </AlertDialogDescription>;
                    </AlertDialogHeader>;
                    <AlertDialogFooter>;
                      <AlertDialogCancel>Cancel</AlertDialogCancel>;
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;
                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>;
              )}
;
              {isActiveProject && (;
                <Button variant="default" asChild>;
                  <Link to={`/project/${project.id}/milestones`}>;
                    <Layers className="mr-2 h-4 w-4" /> Milestones;
                  </Link>;
                </Button>;
              )}

;
              {isActiveProject && (
                <Button variant="outline" asChild>
                  <Link to={`/project/${project.id}/room`}>
                    <Video className="mr-2 h-4 w-4" /> Project Room
                  </Link>
                </Button>
              )}
;
              {(isClient || isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project.status) && (;
                <Button;
                  variant="outline";
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Message
                </Button>
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
                {project.status === "completed" && (;
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>;
                )}
              </TabsList>;
              <TabsContent value="details">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-4">;
                      <div>;
                        <h3 className="font-semibold mb-2">Project Description</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>;
                        </div>;
                      </div>;
                      <div>;
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;
                        <Badge variant="outline" className="capitalize">;
                          {project.payment_terms} Payment;
                        </Badge>;
                      </div>;
                      <div>;
                        <h3 className="font-semibold mb-2">Job Details</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="timeline">;
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
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />;
                        <div>;
                          <h3 className="font-semibold">Start Date</h3>;
                          <p>{format(new Date(project.start_date), "PPP")}</p>;
                        </div>;
                      </div>;
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
                        <Clock className="h-5 w-5 text-primary mt-0.5" />;
                        <div>;
                          <h3 className="font-semibold">Project Status</h3>;
                          <div className="mt-1">;
                            {getStatusBadge(project.status)}
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="documents">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    {project.agreement_url ? (;
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;
                        <div className="flex items-center gap-3">;
                          <FileText className="h-5 w-5 text-primary" />;
                          <div>;
                            <h3 className="font-semibold">Project Agreement</h3>;
                            <p className="text-sm text-muted-foreground">;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;
                        <Button variant="outline" size="sm" asChild>;
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;
                            View;
                          </a>;
                        </Button>;
                      </div>;
                    ) : (;
                      <div className="text-center py-8">;
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
              <TabsContent value="notes">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space-y-4">;
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">;
                        {notes.length > 0 ? (;
                          notes.map((note) => (;
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">;
                              <div className="flex items-center gap-2 mb-2">;
                                <Avatar className="h-6 w-6">;
                                  {note.created_by_profile?.avatar_url ? (;
                                    <img;
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                    />;
                                  ) : (;
                                    <User className="h-4 w-4" />;
                                  )}
                                </Avatar>
                                <span className="font-medium text-sm">
                                  {note.created_by_profile?.display_name || "User"}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {format(new Date(note.created_at), "PPp")}
                                </span>;
                              </div>;
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>;
                            </div>;
                          ));
                        ) : (;
                          <div className="text-center py-8">;
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />;
                            <p className="text-muted-foreground">;
                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>;
                        )}
                      </div>;
                      {isOfferAccepted && (;
                        <div>;
                          <Textarea;
                            placeholder="Add a note or update to the project...";
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="min-h-[100px] mb-2"
                          />
                          <Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >;
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>;
                        </div>;
                      )}
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="reviews">;
                <ProjectReviewSection project={project} />;
              </TabsContent>;
            </Tabs>;
          </div>;

;
          <div className="order-1 lg:order-2 lg:col-span-1">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-6">;
                  <div className="flex items-start gap-4">;
                    <Avatar className="h-10 w-10">;
                      {project && project.talent_profile?.profile_picture_url ? (;
                        <img
                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                        />;
                      ) : (;
                        <User className="h-6 w-6" />;
                      )}

                    </Avatar>;
                    <div>;
                      <h3 className="font-semibold">;
                        {project && project.talent_profile?.full_name || "Talent"}
                      </h3>;
                      <p className="text-sm text-muted-foreground">;
                        {project && project.talent_profile?.professional_title || "Professional"}
                      </p>;
                      {isClient && (;

{project.talent_profile?.profile_picture_url ? (;
                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />;
                    </Avatar>;
                    <div>;
                      <h3 className="font-semibold">;
                      ) : (;
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
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
                        >;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}

                    </div>;
                  </div>;

            {/* Project Status Card */}

            {/* Project Status Card */}"
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
              {/* Conditional Footer Based on Status */}"
              {project.status === "changes_requested" && isClient && ("
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">"
                  <p className="text-sm text-amber-600 flex items-center gap-1">"
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
</p>                    </div>;
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

              ;
              {project.status === "offer_sent" && isClient && (;
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
                  </p>

                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;

                    </div>;
                  </div>;

            {/* Project Status Card */}"
            <Card className="mt-6">;
              <CardHeader>;
                <CardTitle>Project Status</CardTitle>;
              </CardHeader>;
              <CardContent>;"
                <div className="space-y-2">;"
                  <div className="flex justify-between items-center">;"
                    <span className="text-sm font-medium">Current Status:</span>;

                    </span>;
                  </div>;
                </div>;
              </CardContent>;

"
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;"
                  <p className="text-sm text-amber-600 flex items-center gap-1">;"
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.;
                  </p>;

                        <img;
                          src={project && project.client_profile.avatar_url}
                          alt={project && project.client_profile.display_name}
                        />;
                      ) : (;"
                        <User className="h-6 w-6" />;
                      )}
                        <Button"
                          variant="outline""
                          size="sm""
                          className="mt-2"`
                          onClick={() => navigate(`/messages?clientId=${project && project.client_id}`)}
                        >;"
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}
                  <Button"
                    variant="outline"`
                    onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
"
                    className="w-full";
                  >;"
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes;
                  </Button>;
                </CardFooter>;
              )}

            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;

    </>);
}    </>);
}    </>);
}
export default /**;
 * ProjectDetails - Function description;
 */
function ProjectDetails() {}
  return (
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>);
}
;
;

    </>;
  ),;
    </>;
  );
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

  );

    </>);
export default /**
 * ProjectDetails - Function description;
}
;
export default function ProjectDetails() { return null; }
}
;
}
}

'"`
    </>);

}
export default /**
 * ProjectDetails - Function description;
 */
function ProjectDetails() {
  return (

    <ProtectedRoute>;

      <ProjectDetailsContent />;
</ProtectedRoute>
      <ProjectDetailsContent />;
</ProjectDetailsContent>)
    </ProtectedRoute>);
    </>;
  ),;

export default function ProjectDetails() {;
  return (;

    ;)"`;
pr-12325
    <ProtectedRoute>;
</ProtectedRoute>
      <ProjectDetailsContent />;
    </ProtectedRoute>;
  );
}
;
