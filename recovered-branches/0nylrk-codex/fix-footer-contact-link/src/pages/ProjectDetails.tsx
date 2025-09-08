

function ProjectDetailsContent() {

      
      if (projectData) {
        setProject(projectData),
        


          title: "Project not found"
          description: "The requested project could not be found."
          variant: "destructive"})

  User,;
  XCircle} from "lucide-react",;
function ProjectDetailsContent() {;
  // useParams may be untyped in this environment, so avoid passing a;






        .order("created_at", { ascending: false }),
      
      if (error) throw error,
      
      setNotes(data || [])
    } catch (err) {"
      console.error("Error fetching project notes:", err)


      const { data, error } = await supabase

        .from("project_notes")
        .insert({}
          project_id: project.id;
          user_id: user.id;


    switch (status) {        // Now fetch notes;
        }
        fetchProjectNotes(projectId);

            <p > Loading project details...</p>;
          </div>;
        </div>;
      </div>);  }

  },
  
  const handleStatusChange = $2;
    const success = await updateProjectStatus($2);
    if (success) {
      setProject($2);
      // If offer was accepted, show a special toast
      if (newStatus = $2;
          description: "The project is now in progress. Congratulations!"})
      }
    }
  },
  
  const getStatusBadge = $2;
      case "offer_accepted":
        return <Badge className = $2;
      case "changes_requested":
        return <Badge variant = $2;
      case "in_progress":
        return <Badge className = $2;
      case "completed":
        return <Badge variant = $2;
      case "canceled":
        return <Badge variant = $2;
      default:
        return <Badge variant = $2;
  if (isLoading) {



                </span>
              </div>
            </div>
            {/* Action Buttons Based on Role and Status */}



              {isTalent && isOfferPending && (
                <>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>



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



                          Accept Offer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>



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



                        Mark as Completed




                  </Link>
                </Button>
              )}
              {isActiveProject && (



                </Button>
              )}
            </div>
          </div>



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

    switch (status) {



        // Now fetch notes;
        fetchProjectNotes(projectId);
      } else {;

        toast({;
          title: "Project not found",;
          description: "The requested project could not be found.",;
          variant: "destructive"}),;
        navigate("/dashboard");





    
    loadProject()
  }, [projectId]),
  




        `)
        .eq("project_id", projectId)

    


        .select(),
      if (error) throw error,

      
      // Refresh notes
      fetchProjectNotes(project.id),
      setNewNote(""),
      



      

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



    )
  }
  // Check if user is either the client or the talent



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




                <Card>
                  <CardHeader>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>
                      Agreements and relevant files;
                    </CardDescription>
                  </CardHeader>
                  <CardContent>



                              Uploaded when project was created
                            </p>
                          </div>
                        </div>


                            View

                        </Button>
                      </div>
                    ) : (








                        <AlertDialogCancel > Cancel</AlertDialogCancel>;"
                        <AlertDialogAction on_click={() => handleStatusChange ("offer_accepted")}>;




                      <AlertDialogCancel > Cancel</AlertDialogCancel>;"
                      <AlertDialogAction on_click={() => handleStatusChange ("completed")}>;




        </div>;"
                <TabsTrigger value="details">Project Details</TabsTrigger>;"
                <TabsTrigger value="timeline">Timeline</TabsTrigger>;"
                <TabsTrigger value="documents">Documents</TabsTrigger>;"
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>;"
              <TabsContent value="details">;



                        <Badge variant="outline" className="capitalize">;


              </TabsContent>;"
              <TabsContent value="timeline">;


              </TabsContent>;"
              <TabsContent value="documents">;




                        </div>;"
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">;


              </TabsContent>;"
              <TabsContent value="notes">;


                  <CardContent>;"
    navigate("/unauthorized");



                        <AlertDialogCancel>Cancel</AlertDialogCancel>;"
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>;



                      <AlertDialogCancel>Cancel</AlertDialogCancel>;"
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>;

              ;
              {isActiveProject && (;
                <Button variant="default" asChild>;
                  <Link to={`/project/${project.id}/milestones`}>;
                    <Layers className="mr-2 h-4 w-4" /> Milestones;
                  </Link>;

                <Button variant="outline" asChild>;
                  <Link to={`/project/${project.id}/room`}>;
                    <Video className="mr-2 h-4 w-4" /> Project Room;
                  </Link>;
                </Button>;
              )}
              ;
              {(isClient || isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project.status) && (;
                <Button ;
                  variant="outline" ;
                  onClick={() => navigate(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >;
                  <MessageSquare className="mr-2 h-4 w-4" /> Message;

                      <div>;

                        <h3 className="font-semibold mb-2">Job Details</h3>;
                        <div className="bg-muted/30 p-4 rounded-md">;
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>;

              ;
              <TabsContent value="timeline">;

                    <div className="space-y-4">;
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">;
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
                          </div>;

              ;
              <TabsContent value="documents">;
                    {project.agreement_url ? (;
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">;
                        <div className="flex items-center gap-3">;
                          <FileText className="h-5 w-5 text-primary" />;
                          <div>;
                            <h3 className="font-semibold">Project Agreement</h3>;
                            <p className="text-sm text-muted-foreground">;

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

                          <Textarea

                          />;







                        </Button>
                      )}
                    </div>
                  </div>



                      {project.client_profile?.avatar_url ? (
                        <img
                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}
                        />
                      ) : (



              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>



                        />;

                    </Avatar>;
                    <div>;
                      <h3 className="font-semibold">;
                      ) : (;

                        <User className="h-6 w-6" />;
                      )}



                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}









              {/* Conditional Footer Based on Status */}
              {project && project.status === "changes_requested" && isClient && (;


                  <Button
                    variant="outline"
                    onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}



              {project && project.status === "offer_sent" && isClient && (;





            </Card>;



    </>;
  );

}


}
;




