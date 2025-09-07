}
    },;
;
    fetchJobs(),;
  }, [user, filter]),;
;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    ),;
  }
;
  if (jobs.length === 0) {;
    return (;
      <div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter ;
            ? `No jobs with status "${filter}" found.` ;
            :"You haven't posted any jobs yet.";
          }
        </p>;
        <Button asChild className="mt-4">;
          <Link href="/post-job">Post Your First Job</Link>;
        </Button>;
      </div>;
    ),;
  }
;
  const getStatusColor = (status:JobStatus) => {;
    switch (status) {;
      case "new":return "bg-blue-100 text-blue-800",;
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800",;
      case "filled":;
        return "bg-green-100 text-green-800",;
      case "closed":;
        return "bg-gray-100 text-gray-800",;
      default:;
        return "bg-gray-100 text-gray-800";
    }

        >;
          <CardHeader className="p-4">;
            <div className="flex justify-between items-start">;
              <div>;

              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent className="p-4 pt-0">;
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">;

            </div>;
          </CardContent>;
          <CardFooter className="flex justify-between p-4 pt-0 gap-2">;
            <Button variant="outline" size="sm" asChild>;

                <Eye className="h-4 w-4 mr-1" /> View Details;
              </Link>;
            </Button>;
            <div className="flex gap-2">;
              <Button variant="outline" size="sm" asChild>;

                  <Edit className="h-4 w-4" />;
                </Link>;
              </Button>;
              <Button variant="outline" size="sm">;
                <X className="h-4 w-4" />;
              </Button>;
            </div>;
          </CardFooter>;
        </Card>;
      ))}
    </div>;