
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center justify-between">;
          Generated Description;

            onClick={() => setIsEditing(!isEditing)}
            className="border-zion-blue-light text-zion-slate-light hover:text-white";
          >;
            {isEditing ? (;
              <>;
                <Check className="h-4 w-4 mr-1" />;
                Done;
              </>;

              <>;
                <Pencil className="h-4 w-4 mr-1" />;
                Edit;
              </>;
            )}

          </Button>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;

            Save Changes;
          </Button>;
        </CardFooter>;
      )}
    </Card>;

