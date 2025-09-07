
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();

  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
}
const { projectId } = useParams() as { projectId?: string },;
const { user } = useAuth(),;
const navigate = useNavigate(),;
const { getProjectById, updateProjectStatus } = useProjects(),;
const [project, setProject] = useState<Project | null>(null),;
const [isLoading, setIsLoading] = useState(true),;
const [notes, setNotes] = useState<any[]>([]),;
const [newNote, setNewNote] = useState(""),;"
const [isSubmittingNote, setIsSubmittingNote] = useState(false),;
const [activeTab, setActiveTab] = useState("details"),;"
  // Load project data,
useEffect(() => {
    }
    async function loadProject() {
      }
      if (!projectId) return,
      setIsLoading(true),
const projectData = await getProjectById(projectId),;
      if (projectData) {        // Now fetch notes
}
fetchProjectNotes(projectId)
      } else {
        }
        toast({

    }
  }
    } finally {
      }
      setIsSubmittingNote (false);
    }
  }
      setIsLoading($2);
      const projectData = await getProjectById($2);
      if (projectData) {
        setProject($2);
        // Now fetch notes
        fetchProjectNotes(projectId)
      } else {
        toast($2);
        navigate(/dashboard")
      }
      
      setIsLoading(false)
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
  
  const handleSubmitNote = $2;
    setIsSubmittingNote($2);
    try {
        .from(project_notes")
        .insert({
          project_id: project.id
          user_id: user.id
          content: newNote})
        .select($2);
      if (error) throw error,
      
      // Refresh notes
      fetchProjectNotes($2);
      setNewNote($2);
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
    switch (status) {        // Now fetch notes;
        }
        fetchProjectNotes(projectId);

            <p > Loading project details...</p>;
          </div>;
        </div>;
      </div>);  }
  },
  
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
                          }
                          By accepting this offer, you agree to the project terms and timeline.
                          This will initiate the contract and start the project.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>

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
                        }
                        This will finalize the project and mark it as complete.
                        Make sure all deliverables have been provided and approved.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                        Mark as Completed
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              {isActiveProject && (

                  </Link>
                </Button>
              )}
              {isActiveProject && (

                </Button>
              )}
            </div>
          </div>
        </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Project Scope</CardTitle>
                    <CardDescription>
                      Project details and expectations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>

                          {project.payment_terms} Payment
                        </Badge>
                      </div>
                      <div>

                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

                <Card>
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                    <CardDescription>
                      Key dates and milestones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>

                            {getStatusBadge(project.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

                <Card>
                  <CardHeader>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>
                      Agreements and relevant files
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.agreement_url ? (

                              Uploaded when project was created
                            </p>
                          </div>
                        </div>

                            View
                          </Link>                          </Link>
                          </Link>
                        </Button>
                      </div>
                    ) : (

                          No documents have been uploaded to this project.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

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

                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
                      <AlertDialogHeader>;
                        <AlertDialogTitle > Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
                          }
                          By accepting this offer, you agree to the project terms and timeline.;
                          This will initiate the contract and start the project.;
                        </AlertDialogDescription>;
                      </AlertDialogHeader>;
                      <AlertDialogFooter>;
                        <AlertDialogCancel > Cancel</AlertDialogCancel>;

                          Accept Offer;
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

    return null;
  }
                        {notes.length > 0 ? (
                          }
                          notes.map ((note) => (

              {isTalent && isOfferPending && (;
                <>;
                  <AlertDialog>;
                    <AlertDialogTrigger asChild>;

                      </Button>;
                    </AlertDialogTrigger>;
                    <AlertDialogContent>;
                      <AlertDialogHeader>;
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>;
                        <AlertDialogDescription>;
                          }
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

                    </Button>;
                  </AlertDialogTrigger>;
                  <AlertDialogContent>;
                    <AlertDialogHeader>;
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>;
                      <AlertDialogDescription>;
                        }
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

              {isActiveProject && (;

                </Button>;
              )}

              {isActiveProject && (;

                </Button>;
              )}
            </div>;
          </div>;
        </div>;

                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Scope</CardTitle>;
                    <CardDescription>;
                      Project details and expectations;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;

                        </div>;
                      </div>;

                      <div>;

                          {project && project.payment_terms} Payment;
                        </Badge>;
                      </div>;

                      <div>;

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

                          No documents have been uploaded to this project.;
                        </p>;
                      </div>;
                    )}
                  </CardContent>;
                </Card>;
              </TabsContent>;

                <Card>;
                  <CardHeader>;
                    <CardTitle>Project Notes</CardTitle>;
                    <CardDescription>;
                      Shared notes and updates;
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;

                        {notes && notes.length > 0 ? (;
                          }
                          notes && notes.map((note) => (;

                                  {note && note.created_by_profile?.avatar_url ? (;
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

                      {isOfferAccepted && (;
                        <div>;
                          <Textarea

                          />;
                          <Button,
onClick={handleSubmitNote}
                            disabled={!newNote && newNote.trim() || isSubmittingNote}>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;

                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                        />
                      ) : (

                        </Button>
                      )}
                    </div>
                  </div>

                      {project.client_profile?.avatar_url ? (
                        <img
}
src={project.client_profile.avatar_url}
                          alt={project.client_profile.display_name} />
                      ) : (

              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>

                    </span>
                  </div>
                </div>
              </CardContent>
              {/* Conditional Footer Based on Status */}

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

}    </>);
}
export default /**
 * ProjectDetails - Function description
 */
function ProjectDetails() {
}
return (;
    <ProtectedRoute>;
      <ProjectDetailsContent />;
    </ProtectedRoute>);
}
                  </p>
                  <Button
                    variant=outline"
                    onClick={() => navigate(`/messages?talentId=${project.talent_id}`)}
                    className="w-full
                  >
                    <MessageSquare className=mr-2 h-4 w-4" /> Discuss Changes
                  </Button>
                </CardFooter>
              )}
              {project.status === "offer_sent && isClient && (
                <CardFooter className=flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-muted-foreground>
                    Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}
              {project.status === completed" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6>
                  <p className=text-sm text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 /> This project has been completed.
                  </p>
                </CardFooter>
              )}
              {project.status === canceled" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6>
                  <p className=text-sm text-red-600 flex items-center gap-1">
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
}
