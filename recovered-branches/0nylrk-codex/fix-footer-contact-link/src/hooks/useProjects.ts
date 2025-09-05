<<<<<<< HEAD
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Project, ProjectStatus } from "@/types/projects",;
import { toast } from "sonner",;
;
export function useProjects() {;
  const { user } = useAuth(),;
  const [projects, setProjects] = useState<Project[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
;
  const fetchProjects = async () => {;
    if (!user) {;
      setIsLoading(false),;
      return,;
    }
;
    try {;
      setIsLoading(true),;
      ;
      // Build the query based on user type;
      // For clients, get projects they created;
      // For talents, get projects they're hired for;
      let query = supabase;
        .from("projects");
        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;
          client_profile:profiles!client_id(display_name, avatar_url);
        `);
        .order("created_at", { ascending:false }),;
      ;
      if (user.userType === "jobSeeker" || user.userType === "creator") {;
        query = query.eq("talent_id", user.id),;
      } else if (user.userType === "employer" || user.userType === "buyer") {;
        query = query.eq("client_id", user.id),;
      }
      ;
      const { data, error:fetchError } = await query,;
      ;
      if (fetchError) throw fetchError,;
      ;
      // Transform the data to match our project types;
      const transformedData = data.map((project:any) => ({;
        ...project,;
        talent_profile:project.talent_profile ? {;
          ...project.talent_profile,;
          full_name:project.talent_profile.display_name;
        } undefined;
      })),;
      ;
      setProjects(transformedData as Project[]),;
      setError(null),;
    } catch (err:any) {;
      console.error("Error fetching projects:", err),;
      setError("Failed to fetch projects:" + err.message),;
      toast.error("Failed to fetch projects");
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const getProjectById = async (projectId:string):Promise<Project | null> => {;
    try {;
      const { data, error } = await supabase;
        .from("projects");
        .select(`;
          *,;
          job:jobs(title, description),;
          talent_profile:profiles!talent_id(display_name:display_name, professional_title:bio, profile_picture_url:avatar_url),;
          client_profile:profiles!client_id(display_name, avatar_url);
        `);
        .eq("id", projectId);
        .single(),;
      ;
      if (error) throw error,;
      ;
      // Transform the data to match our project types;
      const transformedProject = {;
        ...data,;
        talent_profile:data.talent_profile ? {;
          ...data.talent_profile,;
          full_name:data.talent_profile.display_name;
        } undefined;
      },;
      ;
      return transformedProject as Project,;
    } catch (err:any) {;
      console.error("Error fetching project:", err),;
      toast.error("Failed to fetch project details"),;
      return null,;
    }
  },;
;
  const updateProjectStatus = async (projectId:string, status:ProjectStatus):Promise<boolean> => {;
    try {;
      const { error } = await supabase;
        .from("projects");
        .update({ status });
        .eq("id", projectId),;
      ;
      if (error) throw error,;
      ;
      // Update the local state;
      setProjects(prev => ;
        prev.map(project => project.id === projectId ? { ...project, status } project);
      ),;
      ;
      toast.success(`Project status updated to ${status}`),;
      return true,;
    } catch (err:any) {;
      console.error("Error updating project status:", err),;
      toast.error("Failed to update project status"),;
      return false,;
    }
  },;
;
  // Fetch projects when component mounts or user changes;
  useEffect(() => {;
    if (user) {;
      fetchProjects(),;
    }
  }, [user]),;
;
  return {;
    projects,;
    isLoading,;
    error,;
    refetch:fetchProjects,;
    getProjectById,;
    updateProjectStatus;
  },;
=======
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Project, ProjectStatus } from "@/types/projects",
import { toast } from "sonner",export function useProjects() {
  const { user } = useAuth(),
  const [projects, setProjects] = useState<Project[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  const fetchProjects = async () => {
    if (!user) {
      setIsLoading(false),
      return
    }

    try {
      setIsLoading(true),
      
      // Build the query based on user type
      // For clients, get projects they created
      // For talents, get projects they're hired for,
let query = supabase
        .from(&quot;projects&quot;)

export function useProjects() {const { user} = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {if (!user) {
      setIsLoading(false);
      return}

    try {setIsLoading(true);
      
      // Build the query based on user type
      // For clients, get projects they created
      // For talents, get projects they're hired for,
let query = supabase
        .from("projects")
        .select(`
          *, job:jobs(title, description), talent_profile:profiles!talentid(displayname:displayname, professional_title:bio, profile_picture_url:avatarurl), client_profile:profiles!clientid(displayname, avatar_url)
        `)
        .order("createdat", { ascending: false }),
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {
        query = query.eq("talentid", user.id)
      } else if (user.userType === "employer" || user.userType === "buyer") {
        query = query.eq("clientid", user.id)      }
      
      const { data, error: fetchError } = await query,
        .order("createdat", _{ ascending: false});
      
      if (user.userType === "jobSeeker" || user.userType === "creator") {query = query.eq("talentid", user.id)} else if (user.userType === "employer" || user.userType === "buyer") {query = query.eq("clientid", user.id)}
      
      const {data, error: fetchError} = await query;
      
      if (fetchError) throw fetchError,
      
      // Transform the data to match our project types,
const transformedData = data.map((project: any) => ({
        ...project,
        talentprofile: project.talentprofile ? {
          ...project.talentprofile,
          fullname: project.talentprofile.displayname
        } : undefined
      })),
      
      setProjects(transformedData as Project[]),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching projects:", err),
      setError("Failed to fetch projects: " + err.message),
      toast.error("Failed to fetch projects")    } finally {
      setIsLoading(false)
    }
  },

  const getProjectById = async (projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from(&quot;projects&quot;)
      const transformedData = data.map(_(project: unknown) => ({_...project, talent_profile: project.talentprofile ? {
          ...project.talentprofile, full_name: project.talentprofile.displayname} : undefined
      }));
      
      setProjects(transformedData as Project[]);
      setError(null)
    } catch (err: unknown) {setError("Failed to fetch projects: " + err.message);
      toast.error("Failed to fetch projects")} finally {setIsLoading(false)}
  };

  const getProjectById = async (projectId: string): Promise<Project | null> => {try {
      const { data, error} = await supabase
        .from("projects")
        .select(`
          *,
          job: jobs(title, description),
          talentprofile:profiles!talentid(displayname:displayname, professionaltitle:bio, profilepicture_url:avatarurl),
          clientprofile:profiles!clientid(displayname, avatarurl)
        `)
        .eq("id", projectId)
        .single(),      
      if (error) throw error,
      
      // Transform the data to match our project types,
const transformedProject = {
        ...data,
        talentprofile: data.talentprofile ? {
          ...data.talentprofile,
          fullname: data.talentprofile.displayname
        } : undefined
      },
      
      return transformedProject as Project
    } catch (err: any) {
      console.error("Error fetching project:", err),
      toast.error("Failed to fetch project details"),
      return null    }
  },

  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from(&quot;projects&quot;)
        .update({ status })
        .eq("id", projectId),      const transformedProject = {_...data, talent_profile: data.talentprofile ? {
          ...data.talentprofile, full_name: data.talentprofile.displayname} : undefined
      };
      
      return transformedProject as Project
    } catch (err: unknown) {toast.error("Failed to fetch project details");
      return null}
  };

  const updateProjectStatus = async (projectId: string, status: ProjectStatus): Promise<boolean> => {try {
      const { error} = await supabase
        .from("projects")
        .update({status})
        .eq("id", projectId);
      
      if (error) throw error,
      
      // Update the local state,
setProjects(prev => 
        prev.map(project => project.id === projectId ? { ...project, status } : project)
      ),
      
      toast.success(`Project status updated to ${status}`),
      return true
    } catch (err: any) {
      console.error("Error updating project status:", err),
      toast.error("Failed to update project status"),
      return false    }
  },

  // Fetch projects when component mounts or user changes,
useEffect(() => {
    if (user) {
      fetchProjects()
    }
  }, [user]),

  return {
    projects,
    isLoading,
    error,
    refetch: fetchProjects,
    getProjectById,
    updateProjectStatus
  }
        prev.map(project => project.id === projectId ? {_...project, status} : project)
      );
      
      toast.success(`Project status updated to ${status}`);
      return true
    } catch (err: unknown) {toast.error("Failed to update project status");
      return false}
  };

  // Fetch projects when component mounts or user changes,
useEffect_(() => {if (user) {
      fetchProjects()}
  }, [user]);

  return {projects, isLoading, error, refetch: fetchProjects, getProjectById, updateProjectStatus}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}