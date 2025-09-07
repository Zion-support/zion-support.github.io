<CardContent className="p-4">;
            <div className="flex items-center justify-between">;
              <div className="space-y-1">;
                <div className="flex items-center gap-2">;

                  aria-label="Edit template";
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;

                          aria-label="Set as default";
                        >;
                          <Star className="h-4 w-4" />;
                        </Button>;
                      </TooltipTrigger>;
                      {!user && (;
                        <TooltipContent>;
                          Please log in to use this feature;
                        </TooltipContent>;
                      )}
                    </Tooltip>;
                  </TooltipProvider>;

                  <Button variant="ghost" size="icon" disabled aria-label="Default template">;
                    <StarOff className="h-4 w-4" />;
                  </Button>;
                )}

                  aria-label="Delete template";
                >;
                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;

              variant="outline" ;
              className="w-full";
            >;
              Use This Template;
            </Button>;
          </CardContent>;
        </Card>;
      ))}

      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Template</AlertDialogTitle>;
            <AlertDialogDescription>;
              Are you sure you want to delete this template? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;

              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>;

}aria-label="Set as default" > <Star className="h-4 w-4" /> </Button> </TooltipTrigger> {;
  !user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria-label="Default template"> <StarOff className="h-4 w-4" /> </Button>) ";
}<Button > <Trash className="h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3" /> <Button className="w-full" > Use This Template </Button> </CardContent> </Card>) ) ;