









        }
        const { data, error } = await query;
        if (error) throw error;

        const { data, error } = await query,

        if (error) throw error,







          }
    ),;
  }
;
  const getStatusColor = (status:JobStatus) => {;
    switch (status) {;
      case "new":return "bg-blue-100 text-blue-800",;
    );
  }


  const getStatusColor = (status: JobStatus) => {;
    switch (status) {;

      case "new": return "bg-blue-100 text-blue-800";
      case "in_progress":;
        return "bg-yellow-100 text-yellow-800";
      case "filled":;

        return "bg-green-100 text-green-800";

    ),;
    );

              </Badge>;
            </div>;
          </CardHeader>;"
          <CardContent className="p-4 pt-0">;"
            <p className="line-clamp-3 text-sm text-muted-foreground mb-2">;

              {job && job.description}
            </p>;"
            <div className="flex flex-wrap gap-1 mt-2">;

                <Badge key={index} variant="outline" className="text-xs">;

                  {skill}
                </Badge>;
              ))}
              {job && job.skills.length > 3 && (;
                <Badge variant="outline" className="text-xs">;
                  +{job && job.skills.length - 3} more;
                </Badge>;
              )}
            </div>;
            <div className="mt-3 text-sm">;
              <span className="font-medium">Budget:</span> ${job && job.budget.min} - ${job && job.budget.max}
            </div>;
            <div className="mt-1 text-sm">;
              <span className="font-medium">Deadline:</span> {format(new Date(job && job.deadline), "PPP")}
            </div>;
          </CardContent>;
          <CardFooter className="flex justify-between p-4 pt-0 gap-2">;
            <Button variant="outline" size="sm" asChild>;
              <Link to={`/jobs/${job && job.id}`}>;
