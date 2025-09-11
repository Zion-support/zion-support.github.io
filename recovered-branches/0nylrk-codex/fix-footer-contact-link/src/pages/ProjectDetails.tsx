



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

<<<<<<< HEAD
<<<<<<< HEAD
function ProjectDetailsContent() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { projectId } = useParams() as { projectId?: string }
  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { projectId } = useParams() as { projectId?: string };
  const { user } = useAuth();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<any[]>([]);
  const [newNote, setNewNote] = useState("");
  const [isSubmittingNote, setIsSubmittingNote] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
<<<<<<< HEAD
<<<<<<< HEAD
  // Load project data
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return;
      setIsLoading(true);
      const projectData = await getProjectById(projectId);
      if (projectData) {
        setProject(projectData);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
        
<<<<<<< HEAD
<<<<<<< HEAD
        
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // Now fetch notes
        fetchProjectNotes(projectId)
      } else {
        toast({
          title: "Project not found"
          description: "The requested project could not be found."
          variant: "destructive"})
        navigate("/dashboard")
<<<<<<< HEAD
<<<<<<< HEAD
=======

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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from "react",;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    try {
      const { data, error } = await supabase;
        .from ("project_notes");
        .select (`;
          *;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          created_by_profile:profiles ! user_id (display_name, avatar_url);
        `);
        .eq ("project_id", project_id);
        .order ("created_at", { ascending: false }),
      // Check condition
if (throw error) {
  $2
}
      set_notes (data || []);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (err) {
      console.error ("Error fetching project notes:", err);
    }
  }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsSubmittingNote (false);
    }
  }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  const handleStatusChange = async (new_status: ProjectStatus) => {
    // Check condition
if (return, ) {
  $2
}
    const success = await updateProjectStatus (project.id, new_status);
;
    // Check condition
if ( {) {
  $2
}
      set_project ({
        ...project;
        status: new_status}),
      // If offer was accepted, show a special toast;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Offer Accepted! 🎉",
          description: "The project is now in progress. Congratulations!"});
      }
    }
  }
;
  const getStatusBadge = (status: ProjectStatus) =>: any {
<<<<<<< HEAD
    switch (status) {
=======

    switch (status) {
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Load project data;
  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return;
<<<<<<< HEAD
      setIsLoading(true);
      const projectData = await getProjectById(projectId);
      if (projectData) {;
        setProject(projectData);
<<<<<<< HEAD
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { projectId } = useParams() as { projectId?: string },;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const { getProjectById, updateProjectStatus } = useProjects(),;
  const [project, setProject] = useState<Project | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [notes, setNotes] = useState<any[]>([]),;
  const [newNote, setNewNote] = useState(""),;
  const [isSubmittingNote, setIsSubmittingNote] = useState(false),;
  const [activeTab, setActiveTab] = useState("details"),;
  // Load project data;
  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return,;
      setIsLoading(true),;
      const projectData = await getProjectById(projectId),;
      if (projectData) {;
        setProject(projectData),;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      setIsLoading(true);
      const projectData = await getProjectById(projectId);

      if (projectData) {;
        setProject(projectData);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // Now fetch notes;
        fetchProjectNotes(projectId);
      } else {;
        toast({;
          title: "Project not found",;
          description: "The requested project could not be found.",;
          variant: "destructive"}),;
        navigate("/dashboard");

<<<<<<< HEAD
<<<<<<< HEAD
      }
      setIsLoading(false)
    }
    loadProject()
  }, [projectId]);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }

      setIsLoading(false);
    }
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    loadProject()
  }, [projectId]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    
    loadProject()
  }, [projectId]),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const fetchProjectNotes = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .order("created_at", { ascending: false })
      if (error) throw error;
      setNotes(data |[])
    } catch (err) {
      console.error("Error fetching project notes:", err)
    }
  }
  const handleSubmitNote = async () => {
    if (!newNote.trim() |!project |!user) return;
    setIsSubmittingNote(true);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .insert({
          project_id: project.id
          user_id: user.id
          content: newNote})
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .select();
      if (error) throw error;
      // Refresh notes
      fetchProjectNotes(project.id);
      setNewNote("");
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .select(),
      
      if (error) throw error,
      
      // Refresh notes
      fetchProjectNotes(project.id),
      setNewNote(""),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return
    const success = await updateProjectStatus(project.id, newStatus);
    if (success) {
      setProject({
        ...project;
        status: newStatus})
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return,
    
    const success = await updateProjectStatus(project.id, newStatus),
    
    if (success) {
      setProject({
        ...project,
        status: newStatus}),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
        toast({
          title: "Offer Accepted! 🎉"
          description: "The project is now in progress. Congratulations!"})
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
  },
  

  }
  },
  
=======

  },
  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case "canceled":
        return <Badge variant="destructive">Canceled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


  if (isLoading) {
<<<<<<< HEAD
    loadProject();
  }, [projectId]);
  const fetchProjectNotes = async (projectId: string) => {;
import { useState, useEffect } from "react",;
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
;
function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { projectId } = useParams() as { projectId?:string },;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const { getProjectById, updateProjectStatus } = useProjects(),;
  ;
  const [project, setProject] = useState<Project | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
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
          title:"Project not found",;
          description:"The requested project could not be found.",;
          variant:"destructive"}),;
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
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .eq("project_id", projectId);
        .order("created_at", { ascending:false }),;
      ;
      if (error) throw error,;
      ;
      setNotes(data || []),;
    } catch (err) {;
      console.error("Error fetching project notes:", err),;
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
  if (!project) {;
=======
=======
  }
  },
  
  if (isLoading) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
      case "canceled":;
        return <Badge variant="destructive">Canceled</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <div className="container mx-auto py-8">;
        <Card>;
          <CardContent className="flex flex-col items-center justify-center py-10">;
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />;
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>;
            <p className="text-muted-foreground mb-4">;
              The project you're looking for doesn't exist or you don't have access to it.;
            </p>;
            <Button onClick={() => navigate("/dashboard")}>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return <Badge className="bg - green - 100 text - green - 800">Offer Accepted</Badge>;
      case "changes_requested":;
        return <Badge variant="secondary">Changes Requested</Badge>;
      case "in_progress":;
        return <Badge className="bg - blue - 100 text - blue - 800">In Progress</Badge>;
      case "completed":;
        return <Badge variant="default">Completed</Badge>;
      case "canceled":;
        return <Badge variant="destructive">Canceled</Badge>,
      default:;
        return <Badge variant="outline">{status}</Badge>;
<<<<<<< HEAD
<<<<<<< HEAD
          project_id:project.id,;
          user_id:user.id,;
          content:newNote});
        .select(),;
      ;
      if (error) throw error,;
      ;
      // Refresh notes;
      fetchProjectNotes(project.id),;
      setNewNote(""),;
      ;
      toast({;
        title:"Note added",;
        description:"Your note has been added to the project."}),;
    } catch (err:any) {;
      console.error("Error adding note:", err),;
      toast({;
        title:"Failed to add note",;
        description:err.message || "An error occurred while adding your note.",;
        variant:"destructive"}),;
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
        status:newStatus}),;
      ;
      // If offer was accepted, show a special toast;
      if (newStatus === "offer_accepted") {;
        toast({;
          title:"Offer Accepted! 🎉",;
          description:"The project is now in progress. Congratulations!"}),;
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
            <p>Loading project details...</p>;
          </div>;
        </div>;
      </div>;
    ),;
  }
  }
  },
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading project details...</p>
          </div>
        </div>
      </div>
    )
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="container mx - auto py - 8">;
        <Card>;
          <CardContent className="flex flex - col items - center justify - center py - 10">;
            <AlertCircle className="h - 10 w - 10 text - muted - foreground mb - 4" />;
            <h2 className="text - xl font - bold mb - 2">Project Not Found</h2>;
            <p className="text - muted - foreground mb - 4">;
              The project you're looking for doesn't exist or you don't have access to it.;
            </p>;
            <Button on_click={() => navigate ("/dashboard")}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              Return to Dashboard;
            </Button>;
          </CardContent>;
        </Card>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!project) {
    return (
      <div className="container mx-auto py-8">
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
    )
  }
  // Check if user is either the client or the talent
<<<<<<< HEAD
<<<<<<< HEAD
  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
  
=======

  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
  


  if (!isClient && !isTalent) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  // Check if user is either the client or the talent;
  const isClient = user?.id === project && project.client_id;
  const isTalent = user?.id === project && project.talent_id;
  if (!isClient && !isTalent) {;
    navigate("/unauthorized");
    return null;
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const isClient = user?.id === project.client_id;
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

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
  const isOfferPending = project.status === "offer_sent",
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
                          </Link>
=======
                          </a>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>);
  }
  // Check if user is either the client or the talent;
  const is_client = user?.id === project.client_id;
  const is_talent = user?.id === project.talent_id;
;
  // Check condition
if ( {) {
  $2
}
    navigate ("/unauthorized");
    return null;
  }
  const isOfferPending = project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes (project.status);
  const isActiveProject = ["offer_accepted", "in_progress"].includes (project.status);
;
  return (
    <>;
      <SEO;
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`}
        description="View and manage your project details and collaboration.";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py - 8">;
        <div className="mb - 6">;
          <div className="flex flex - col md:flex - row justify - between md:items - center gap - 4 mb - 2">;
            <div>;
              <h1 className="text - 3xl font - bold">{project.job?.title || "Project"}</h1>;
              <div className="flex items - center gap - 2 mt - 1">;
                {getStatusBadge (project.status)}
                <span className="text - muted - foreground">;
                  Started on {format (new Date (project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;
            {/* Action Buttons Based on Role and Status */}
            <div className="space - x-2">;
              {is_talent && isOfferPending && (
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger as_child>;
                      <Button variant="default">;
                        <CheckCircle2 className="mr - 2 h - 4 w - 4" /> Accept Offer;
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
                        <AlertDialogAction on_click={() => handleStatusChange ("offer_accepted")}>;
                          Accept Offer;
                        </AlertDialogAction>;
                      </AlertDialogFooter>;
                    </AlertDialogContent>;
                  </AlertDialog>;
                  <Button variant="outline" on_click={() => handleStatusChange ("changes_requested")}>;
                    <MessageSquare className="mr - 2 h - 4 w - 4" /> Request Changes;
                  </Button>;
                </>)}
              {(is_client || is_talent) && project.status === "in_progress" && (
                <AlertDialog>;
                  <AlertDialogTrigger as_child>;
                    <Button variant="default">;
                      <CheckCircle2 className="mr - 2 h - 4 w - 4" /> Mark as Completed;
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
                      <AlertDialogAction on_click={() => handleStatusChange ("completed")}>;
                        Mark as Completed;
                      </AlertDialogAction>;
                    </AlertDialogFooter>;
                  </AlertDialogContent>;
                </AlertDialog>)}
              {isActiveProject && (
                <Button variant="default" as_child>;
                  <Link to={`/project/${project.id}/milestones`}>;
                    <Layers className="mr - 2 h - 4 w - 4" /> Milestones;
                  </Link>;
                </Button>)}
              {isActiveProject && (
                <Button variant="outline" as_child>;
                  <Link to={`/project/${project.id}/room`}>;
                    <Video className="mr - 2 h - 4 w - 4" /> Project Room;
                  </Link>;
                </Button>)}
              {(is_client || is_talent) && ["offer_sent", "offer_accepted", "in_progress"].includes (project.status) && (
                <Button;
                  variant="outline";
                  on_click={() => navigate (`/messages?talent_id=${project.talent_id}&client_id=${project.client_id}`)}
                >;
                  <MessageSquare className="mr - 2 h - 4 w - 4" /> Message;
                </Button>)}
            </div>;
          </div>;
        </div>;
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
          <div className="order - 2 lg:order - 1 lg:col - span - 2">;
            <Tabs default_value="details" value={active_tab} onValueChange={setActiveTab}>;
              <TabsList className="mb - 6">;
                <TabsTrigger value="details">Project Details</TabsTrigger>;
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;
                <TabsTrigger value="documents">Documents</TabsTrigger>;
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;
                {project.status === "completed" && (
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>)}
              </TabsList>;
              <TabsContent value="details">;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space - y-4">;
                      <div>;
                        <h3 className="font - semibold mb - 2">Project Description</h3>;
                        <div className="bg - muted / 30 p - 4 rounded - md">;
                          <p className="whitespace - pre - wrap">{project.scope_summary}</p>;
                        </div>;
                      </div>;
                      <div>;
                        <h3 className="font - semibold mb - 2">Payment Terms</h3>;
                        <Badge variant="outline" className="capitalize">;
                          {project.payment_terms} Payment;
                        </Badge>;
                      </div>;
                      <div>;
                        <h3 className="font - semibold mb - 2">Job Details</h3>;
                        <div className="bg - muted / 30 p - 4 rounded - md">;
                          <p className="whitespace - pre - wrap">{project.job?.description}</p>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="timeline">;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Timeline</CardTitle>;
                    <CardDescription>;
                      Key dates and milestones;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space - y-4">;
                      <div className="flex items - start gap - 3 p - 3 bg - muted / 30 rounded - md">;
                        <Calendar className="h - 5 w - 5 text - primary mt - 0.5" />;
                        <div>;
                          <h3 className="font - semibold">Start Date</h3>;
                          <p>{format (new Date (project.start_date), "PPP")}</p>;
                        </div>;
                      </div>;
                      <div className="flex items - start gap - 3 p - 3 bg - muted / 30 rounded - md">;
                        <Clock className="h - 5 w - 5 text - primary mt - 0.5" />;
                        <div>;
                          <h3 className="font - semibold">Project Status</h3>;
                          <div className="mt - 1">;
                            {getStatusBadge (project.status)}
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
                    <CardTitle > Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    {project.agreement_url ? (
                      <div className="flex items - center justify - between bg - muted / 30 p - 4 rounded - md">;
                        <div className="flex items - center gap - 3">;
                          <FileText className="h - 5 w - 5 text - primary" />;
                          <div>;
                            <h3 className="font - semibold">Project Agreement</h3>;
                            <p className="text - sm text - muted - foreground">;
                              Uploaded when project was created;
                            </p>;
                          </div>;
                        </div>;
                        <Button variant="outline" size="sm" as_child>;
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;
                            View;
                          </a>;
                        </Button>;
                      </div>) : (
                      <div className="text - center py - 8">;
                        <FileText className="h - 10 w - 10 text - muted - foreground mx - auto mb - 2" />;
                        <h3 className="font - semibold">No Documents Yet</h3>;
                        <p className="text - sm text - muted - foreground">;
                          No documents have been uploaded to this project.;
                        </p>;
                      </div>)}
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="notes">;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <div className="space - y-4">;
                      <div className="space - y-4 max - h-[400px] overflow - y-auto mb - 4">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {notes.length > 0 ? (
                          notes.map ((note) => (
                            <div key={note.id} className="bg - muted / 30 p - 3 rounded - md">;
                              <div className="flex items - center gap - 2 mb - 2">;
                                <Avatar className="h - 6 w - 6">;
                                  {note.created_by_profile?.avatar_url ? (
<<<<<<< HEAD
  const isOfferPending = project && project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project && project.status);
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project && project.status);
=======


  const isOfferPending = project && project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project && project.status);
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project && project.status);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            {/* Action Buttons Based on Role and Status */}
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
    ),;
  }
  ;
  // Check if user is either the client or the talent;
  const isClient = user?.id === project.client_id,;
  const isTalent = user?.id === project.talent_id,;
  ;
  if (!isClient && !isTalent) {;
    navigate("/unauthorized"),;
    return null,;
  }
  ;
  const isOfferPending = project.status === "offer_sent",;
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status),;
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status),;
  ;
  return (;
    <>;
      <SEO ;
        title={`Project:${project.job?.title || 'Project Details'} | Zion AI Marketplace`} ;
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
                <span className="text-muted-foreground">;
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>;
              </div>;
            </div>;
            ;
=======

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
<<<<<<< HEAD
                  ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>;
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes;
                  </Button>;
                </>;
              )}
<<<<<<< HEAD
              ;
              {(isClient || isTalent) && project.status === "in_progress" && (;
=======

              {(isClient || isTalent) && project && project.status === "in_progress" && (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                        This will finalize the project and mark it as complete. ;
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
<<<<<<< HEAD
              ;
              {isActiveProject && (;
                <Button variant="default" asChild>;
                  <Link to={`/project/${project.id}/milestones`}>;
=======

              {isActiveProject && (;
                <Button variant="default" asChild>;
                  <Link to={`/project/${project && project.id}/milestones`}>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Layers className="mr-2 h-4 w-4" /> Milestones;
                  </Link>;
                </Button>;
              )}
<<<<<<< HEAD
;
              {isActiveProject && (;
                <Button variant="outline" asChild>;
                  <Link to={`/project/${project.id}/room`}>;
=======

              {isActiveProject && (;
                <Button variant="outline" asChild>;
                  <Link to={`/project/${project && project.id}/room`}>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Video className="mr-2 h-4 w-4" /> Project Room;
                  </Link>;
                </Button>;
              )}
<<<<<<< HEAD
              ;
              {(isClient || isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project.status) && (;
                <Button ;
                  variant="outline" ;
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
=======

              {(isClient || isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project && project.status) && (;
                <Button
                  variant="outline" 
                  onClick={() => navigate(`/messages?talentId=${project && project.talent_id}&clientId=${project && project.client_id}`)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >;
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;
                </Button>;
              )}
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
        ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
          <div className="order-2 lg:order-1 lg:col-span-2">;
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="details">Project Details</TabsTrigger>;
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;
                <TabsTrigger value="documents">Documents</TabsTrigger>;
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;
<<<<<<< HEAD
                {project.status === "completed" && (;
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>;
                )}
              </TabsList>;
              ;
=======
                {project && project.status === "completed" && (;
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>;
                )}
              </TabsList>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>;
                        </div>;
                      </div>;
                      ;
                      <div>;
                        <h3 className="font-semibold mb-2">Payment Terms</h3>;
                        <Badge variant="outline" className="capitalize">;
                          {project.payment_terms} Payment;
                        </Badge>;
                      </div>;
                      ;
                      <div>;
                        <h3 className="font-semibold mb-2">Job Details</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>;
=======
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
                          <p className="whitespace-pre-wrap">{project && project.job?.description}</p>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
<<<<<<< HEAD
              ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />;
                        <div>;
                          <h3 className="font-semibold">Start Date</h3>;
                          <p>{format(new Date(project.start_date), "PPP")}</p>;
                        </div>;
                      </div>;
                      ;
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
                        <Clock className="h-5 w-5 text-primary mt-0.5" />;
                        <div>;
                          <h3 className="font-semibold">Project Status</h3>;
                          <div className="mt-1">;
                            {getStatusBadge(project.status)}
=======
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
                            {getStatusBadge(project && project.status)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
<<<<<<< HEAD
              ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <TabsContent value="documents">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Documents</CardTitle>;
                    <CardDescription>;
                      Agreements and relevant files;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
<<<<<<< HEAD
                    {project.agreement_url ? (;
=======
                    {project && project.agreement_url ? (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;
=======
                          <a href={project && project.agreement_url} target="_blank" rel="noopener noreferrer">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            View;
                          </a>;
                        </Button>;
                      </div>;
<<<<<<< HEAD
                    ) :(;
=======
                    ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
                        {notes && notes.length > 0 ? (;
                          notes && notes.map((note) => (;
                            <div key={note && note.id} className="bg-muted/30 p-3 rounded-md">;
                              <div className="flex items-center gap-2 mb-2">;
                                <Avatar className="h-6 w-6">;
                                  {note && note.created_by_profile?.avatar_url ? (;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                    <img
                                      src={note && note.created_by_profile.avatar_url}
                                      alt={note && note.created_by_profile.display_name}
                                    />;
                                  ) : (;
<<<<<<< HEAD
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
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className="text-center py-8">;
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />;
                            <p className="text-muted-foreground">;
                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>;
                        )}
                      </div>;
<<<<<<< HEAD
=======

                      {isOfferAccepted && (;
                        <div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <Textarea
                            placeholder="Add a note or update to the project..."
                            value={newNote}
                            onChange={(e) => setNewNote(e && e.target.value)}
                            className="min-h-[100px] mb-2";
                          />;
                          <Button
                            onClick={handleSubmitNote}
<<<<<<< HEAD
                            disabled={!newNote && newNote.trim() || isSubmittingNote}>;
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                      ;
                      {isOfferAccepted && (;
                        <div>;
                          <Textarea;
                            placeholder="Add a note or update to the project...";
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="min-h-[100px] mb-2";
                          />;
                          <Button;
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >;
                            {isSubmittingNote ? "Posting..." :"Post Note"}
                          </Button>;
                        </div>;
                      )}
=======

                            disabled={!newNote && newNote.trim() || isSubmittingNote}>;

                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>;
                        </div>;
                      )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
<<<<<<< HEAD
<<<<<<< HEAD
                        {notes.length > 0 ? (
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name |"Talent"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.talent_profile?.professional_title |"Professional"}
                      </p>
                      {isClient && (
                        <Button
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
                      {project.client_profile?.avatar_url ? (
                        <img
                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}
                        />
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {project.client_profile?.display_name |"Client"}
                      </h3>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {isTalent && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => navigate(`/messages?clientId=${project.client_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
                        </Button>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <TabsContent value="reviews">;
                <ProjectReviewSection project={project} />;
              </TabsContent>;
            </Tabs>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="order-1 lg:order-2 lg:col-span-1">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-6">;
                  <div className="flex items-start gap-4">;
                    <Avatar className="h-10 w-10">;
<<<<<<< HEAD
<<<<<<< HEAD
                      {project.talent_profile?.profile_picture_url ? (;
                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {project && project.talent_profile?.profile_picture_url ? (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                        <img
                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        />;
                    </Avatar>;
                    <div>;
                      <h3 className="font-semibold">;
                      ) : (;
                        <User className="h-6 w-6" />;
                      )}
<<<<<<< HEAD
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>
                      {isClient && (
=======
=======
                        />;
                      ) : (;
                        <User className="h-6 w-6" />;
                      )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    </Avatar>;
                    <div>;
                      <h3 className="font-semibold">;
                        {project && project.talent_profile?.full_name || "Talent"}
                      </h3>;
                      <p className="text-sm text-muted-foreground">;
                        {project && project.talent_profile?.professional_title || "Professional"}
                      </p>;
                      {isClient && (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
<<<<<<< HEAD
<<<<<<< HEAD
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>;
                      <p className="text-sm text-muted-foreground">;
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>;
                      {isClient && (;
                        <Button;
                          variant="outline";
                          size="sm";
                          className="mt-2";
                          onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
                          onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
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
=======
                          onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        >;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}
<<<<<<< HEAD
<<<<<<< HEAD
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    </div>;
                  </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Project Status Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Current Status:</span>
                    <div>{getStatusBadge(project.status)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Creation Date:</span>
                    <span className="text-sm">
                      {format(new Date(project.created_at), "PPP")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Start Date:</span>
                    <span className="text-sm">
                      {format(new Date(project.start_date), "PPP")}
                    </span>
                  </div>
                </div>
              </CardContent>
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
                  </p>
<<<<<<< HEAD
<<<<<<< HEAD
                    </div>;
                  </div>;
                  ;
                  <div className="flex items-start gap-4">;
                    <Avatar className="h-10 w-10">;
                      {project.client_profile?.avatar_url ? (;
                        <img;
                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}
                        />;
                      ) :(;
                        <User className="h-6 w-6" />;
                      )}
                    </Avatar>;
                    <div>;
                      <h3 className="font-semibold">;
                        {project.client_profile?.display_name || "Client"}
                      </h3>;
                      <p className="text-sm text-muted-foreground">Project Owner</p>;
                      {isTalent && (;
                        <Button;
                          variant="outline";
                          size="sm";
                          className="mt-2";
                          onClick={() => navigate(`/messages?clientId=${project.client_id}`)}
                        >;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;                      )}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
            ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Project Status Card */}
            <Card className="mt-6">;
              <CardHeader>;
                <CardTitle>Project Status</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-2">;
                  <div className="flex justify-between items-center">;
                    <span className="text-sm font-medium">Current Status:</span>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </span>;
                  </div>;
                </div>;
              </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
              ;
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested" && isClient && (;
=======

              {/* Conditional Footer Based on Status */}
              {project && project.status === "changes_requested" && isClient && (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              {/* Conditional Footer Based on Status */}
              {project && project.status === "changes_requested" && isClient && (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;
                  <p className="text-sm text-amber-600 flex items-center gap-1">;
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.;
                  </p>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Button ;
                    variant="outline";
                    onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="w-full";
                  >;
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes;
                  </Button>;
                </CardFooter>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
              ;
              {project.status === "offer_sent" && isClient && (;
=======


              {project && project.status === "offer_sent" && isClient && (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


              {project && project.status === "offer_sent" && isClient && (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">;
                  <p className="text-sm text-muted-foreground">;
                    Waiting for the talent to accept your offer.;
                  </p>;
                </CardFooter>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </>;
  );

}
<<<<<<< HEAD
=======

export default function ProjectDetails() {;
  return (
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>;
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

<<<<<<< HEAD
    </>;
  ),;
    </>;
  );
}
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
;
export default function ProjectDetails() {;
<<<<<<< HEAD
  return (;
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>;
  );
}
;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
