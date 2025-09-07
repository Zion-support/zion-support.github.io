// Initialize columns with applications based on their status;
  useEffect(() => {;
    if (applications) {;
      // Group applications by status;

          <Card key={i} className="h-[500px]">;
            <CardHeader>;
              <Skeleton className="h-8 w-24" />;
            </CardHeader>;
            <CardContent>;
              <Skeleton className="h-[400px] w-full" />;
            </CardContent>;
          </Card>;
        ))}
      </div>;

      <Card className="text-center py-16">;
        <CardContent>;
          <h3 className="text-lg font-semibold mb-2">No applications yet</h3>;
          <p className="text-muted-foreground mb-6">;
            You haven't received any applications for this job yet.;
          </p>;
        </CardContent>;
      </Card>;

          />;
        ))}
      </div>;
    </DragDropContext>;

}