  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<any[]>([]);
  const [newNote, setNewNote] = useState("");
  const [isSubmittingNote, setIsSubmittingNote] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
    try {
      const { data, error } = await supabase;
        .from ("project_notes");
        .select (`;
          *;
    } catch (err) {
      console.error ("Error fetching project notes:", err);
    }
  }
    } finally {
      setIsSubmittingNote (false);
    }
  }
    switch (status) {
=======

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
          title: "Project not found",;
          description: "The requested project could not be found.",;
          variant: "destructive"}),;
        navigate("/dashboard");
      }

      setIsLoading(false);
    }

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

  const handleSubmitNote = async () => {;
    if (!newNote && newNote.trim() || !project || !user) return;

    setIsSubmittingNote(true);

    try {;
      const { data, error } = await supabase;
        .from("project_notes");
        .insert({;
          project_id: project && project.id,;
          user_id: user && user.id,;
          content: newNote});
        .select();

      if (error) throw error;

      // Refresh notes;
      fetchProjectNotes(project && project.id);
      setNewNote("");

      toast({;
        title: "Note added",;
        description: "Your note has been added to the project."});
    } catch (err: any) {;
      console && console.error("Error adding note:", err);
      toast({;
        title: "Failed to add note",;
        description: err && err.message || "An error occurred while adding your note.",;
        variant: "destructive"});
    } finally {;
      setIsSubmittingNote(false);
    }
  };

  const handleStatusChange = async (newStatus: ProjectStatus) => {;
    if (!project) return,;

    const success = await updateProjectStatus(project && project.id, newStatus);

    if (success) {;
      setProject({;
        ...project;
        status: newStatus}),;

      // If offer was accepted, show a special toast;
      if (newStatus === "offer_accepted") {;
        toast({;
          title: "Offer Accepted! 🎉",;
          description: "The project is now in progress. Congratulations!"});
      }
    }
  };

  const getStatusBadge = (status: ProjectStatus) => {;
    switch (status) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======
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
    navigate("/unauthorized");
    return null;
  }
                        {notes.length > 0 ? (
                          notes.map ((note) => (
                            <div key={note.id} className="bg - muted / 30 p - 3 rounded - md">;
                              <div className="flex items - center gap - 2 mb - 2">;
                                <Avatar className="h - 6 w - 6">;
                                  {note.created_by_profile?.avatar_url ? (
                                    <img
                                      src={note && note.created_by_profile.avatar_url}
                                      alt={note && note.created_by_profile.display_name}
                                    />;
                                  ) : (;
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
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>;
                        </div>;
                      )}
                        <img
                          src={project && project.talent_profile.profile_picture_url}
                          alt={project && project.talent_profile.full_name}
                        />;
                      ) : (;
                        <User className="h-6 w-6" />;
                      )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => navigate(`/messages?talentId=${project && project.talent_id}`)}
                        >;
                          <MessageSquare className="mr-1 h-3 w-3" /> Message;
                        </Button>;
                      )}
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
              )}
=======
                                    <img;
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                    />) : (
                                    <User className="h - 4 w - 4" />)}
                                </Avatar>;
                                <span className="font - medium text - sm">;
                                  {note.created_by_profile?.display_name || "User"}
                                </span>;
                                <span className="text - xs text - muted - foreground">;
                                  {format (new Date (note.created_at), "PPp")}
                                </span>;
                              </div>;
                              <p className="text - sm whitespace - pre - wrap">{note.content}</p>;
                            </div>))) : (
                          <div className="text - center py - 8">;
                            <MessageSquare className="h - 8 w - 8 text - muted - foreground mx - auto mb - 2" />;
                            <p className="text - muted - foreground">;
                              No notes yet. Add the first note to this project.;
                            </p>;
                          </div>)}
                      </div>;
                      {isOfferAccepted && (
                        <div>;
                          <Textarea;
                            placeholder="Add a note or update to the project...";
                            value={new_note}
                            on_change={(e) => setNewNote (e.target.value)}
                            className="min - h-[100px] mb - 2";
                          />;
                          <Button;
                            on_click={handleSubmitNote}
                            disabled={!new_note.trim () || isSubmittingNote}
                          >;
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>;
                        </div>)}
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
              <TabsContent value="reviews">;
                <ProjectReviewSection project={project} />;
              </TabsContent>;
            </Tabs>;
          </div>;
          <div className="order - 1 lg:order - 2 lg:col - span - 1">;
            <Card>;
              <CardHeader>;
                <CardTitle > Project Participants</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space - y-6">;
                  <div className="flex items - start gap - 4">;
                    <Avatar className="h - 10 w - 10">;
                      {project.talent_profile?.profile_picture_url ? (
                        <img;
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />) : (
                        <User className="h - 6 w - 6" />)}
                    </Avatar>;
                    <div>;
                      <h3 className="font - semibold">;
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>;
                      <p className="text - sm text - muted - foreground">;
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>;
                      {is_client && (
                        <Button;
                          variant="outline";
                          size="sm";
                          className="mt - 2";
                          on_click={() => navigate (`/messages?talent_id=${project.talent_id}`)}
                        >;
                          <MessageSquare className="mr - 1 h - 3 w - 3" /> Message;
                        </Button>)}
                    </div>;
                  </div>;
                  <div className="flex items - start gap - 4">;
                    <Avatar className="h - 10 w - 10">;
                      {project.client_profile?.avatar_url ? (
                        <img;
                          src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name}
                        />) : (
                        <User className="h - 6 w - 6" />)}
                    </Avatar>;
                    <div>;
                      <h3 className="font - semibold">;
                        {project.client_profile?.display_name || "Client"}
                      </h3>;
                      <p className="text - sm text - muted - foreground">Project Owner</p>;
                      {is_talent && (
                        <Button;
                          variant="outline";
                          size="sm";
                          className="mt - 2";
                          on_click={() => navigate (`/messages?client_id=${project.client_id}`)}
                        >;
                          <MessageSquare className="mr - 1 h - 3 w - 3" /> Message;
                        </Button>)}
                    </div>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            {/* Project Status Card */}
            <Card className="mt - 6">;
              <CardHeader>;
                <CardTitle > Project Status</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space - y-2">;
                  <div className="flex justify - between items - center">;
                    <span className="text - sm font - medium">Current Status:</span>;
                    <div>{getStatusBadge (project.status)}</div>;
                  </div>;
                  <div className="flex justify - between items - center">;
                    <span className="text - sm font - medium">Creation Date:</span>;
                    <span className="text - sm">;
                      {format (new Date (project.created_at), "PPP")}
                    </span>;
                  </div>;
                  <div className="flex justify - between items - center">;
                    <span className="text - sm font - medium">Start Date:</span>;
                    <span className="text - sm">;
                      {format (new Date (project.start_date), "PPP")}
                    </span>;
                  </div>;
                </div>;
              </CardContent>;
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested" && is_client && (
                <CardFooter className="flex - col items - start gap - 2 border - t pt - 6">;
                  <p className="text - sm text - amber - 600 flex items - center gap - 1">;
                    <AlertCircle className="h - 4 w - 4" /> The talent has requested changes to this offer.;
                  </p>;
                  <Button;
                    variant="outline";
                    on_click={() => navigate (`/messages?talent_id=${project.talent_id}`)}
                    className="w - full";
                  >;
                    <MessageSquare className="mr - 2 h - 4 w - 4" /> Discuss Changes;
                  </Button>;
                </CardFooter>)}
              {project.status === "offer_sent" && is_client && (
                <CardFooter className="flex - col items - start gap - 2 border - t pt - 6">;
                  <p className="text - sm text - muted - foreground">;
                    Waiting for the talent to accept your offer.;
                  </p>;
                </CardFooter>)}
              {project.status === "completed" && (
                <CardFooter className="flex - col items - start gap - 2 border - t pt - 6">;
                  <p className="text - sm text - green - 600 flex items - center gap - 1">;
                    <CheckCircle2 className="h - 4 w - 4" /> This project has been completed.;
                  </p>;
                </CardFooter>)}
              {project.status === "canceled" && (
                <CardFooter className="flex - col items - start gap - 2 border - t pt - 6">;
                  <p className="text - sm text - red - 600 flex items - center gap - 1">;
                    <XCircle className="h - 4 w - 4" /> This project has been canceled.;
                  </p>;
                </CardFooter>)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
