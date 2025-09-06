
      try {;
        let query = supabase;
          .from("jobs");
          .select("*");

      <div className="text-center p-8 border rounded-md bg-muted/20">;
        <p className="text-lg text-muted-foreground">;
          {filter ;
            ? `No jobs with status "${filter}" found.` ;

          }
        </p>;
        <Button asChild className="mt-4">;
          <Link to="/post-job">Post Your First Job</Link>;
        </Button>;
      </div>;

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

}