    } finally {
      setIsLoading (false);
    }
  }, [user]);
          user_id: user.id;
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
        })
        .select('id')
        .single();
      if (error) throw error;
      toast({
        title: "Project added"
        description: "Your project has been added to your portfolio"
      });
      await fetchProjects();
      return data && data.id
    } catch (e: any) {
      console && console.error('Error adding portfolio project:', e);
      setError(e && e.message);
      toast({
        variant: "destructive"
=======
          demo_url: project.demo_url,
          pdf_url: project.pdf_url;
        });
        .select ('id');
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Project added",
        description: "Your project has been added to your portfolio";
      });
;
      await fetch_projects ();
      return data.id;
    } catch (e: any) {
      console.error ('Error adding portfolio project:', e);
      set_error (e.message);
      toast ({
        title: "Error",
        description: `Could not add project: ${e.message}`;
        variant: "destructive";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      });
      return null;
    } finally {
      setIsLoading (false);
    }
  }
          title: project.title;
          description: project.description;
          technologies: project.technologies;
          image_url: project.image_url;
          github_url: project.github_url;
      if (error) throw error;
      toast({
        title: "Project updated"
        description: "Your portfolio project has been updated"
      });
      await fetchProjects();
      return true
    } catch (e: any) {
      console && console.error('Error updating portfolio project:', e);
      setError(e && e.message);
      toast({
        variant: "destructive"
=======
          demo_url: project.demo_url,
          pdf_url: project.pdf_url;
        });
        .eq ('id', project_id);
        .eq ('user_id', user.id);
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Project updated",
        description: "Your portfolio project has been updated";
      });
;
      await fetch_projects ();
      return true;
    } catch (e: any) {
      console.error ('Error updating portfolio project:', e);
      set_error (e.message);
      toast ({
        title: "Error",
        description: `Could not update project: ${e.message}`;
        variant: "destructive";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      });
      return false;
    } finally {
      setIsLoading (false);
    }
  }
      if (error) throw error;
      toast({
        title: "Project deleted"
        description: "Your portfolio project has been deleted"
      });
      return true
    } catch (e: any) {
      console && console.error('Error deleting portfolio project:', e);
      setError(e && e.message);
      toast({
        variant: "destructive"
=======
;
  const delete_project = async (project_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete a portfolio project'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('portfolio_projects');
        .delete ();
        .eq ('id', project_id);
        .eq ('user_id', user.id);
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Project deleted",
        description: "Your portfolio project has been deleted";
      });
;
      set_projects (projects.filter (p => p.id !== project_id));
      return true;
    } catch (e: any) {
      console.error ('Error deleting portfolio project:', e);
      set_error (e.message);
      toast ({
        title: "Error",
        description: `Could not delete project: ${e.message}`;
        variant: "destructive";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      });
      return false;
    } finally {
      setIsLoading (false);
    }
  }
  return {
    is_loading;
    error;
    projects;
  }
}