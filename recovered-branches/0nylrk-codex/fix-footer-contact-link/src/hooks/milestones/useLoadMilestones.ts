




    } catch (err: any) {



          .eq('milestone_id', milestone.id);
          .order('created_at', { ascending: false }),;
        if (activitiesError) throw activitiesError,;
        activitiesMap[milestone.id] = activitiesData || [];

    } catch (err: any) {
      console.error("Error fetching milestones:", err),
      setError("Failed to fetch milestones: " + err.message),

      toast.error("Failed to fetch milestones")
    } finally {
      setIsLoading(false)
    }

  };


  // Fetch milestones when component mounts or projectId changes
  useEffect(() => {
    if (projectId) {
      fetchMilestones()
    }

  }, [projectId]);




  }
}
;



