
    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase();

            <Avatar>;
              <AvatarFallback className="bg-muted">;
                <User className="h-4 w-4" />;
              </AvatarFallback>;
            </Avatar>;

      <div className="mt-3 flex justify-end">;
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>;
          <DialogTrigger asChild>;
            <Button variant="ghost" size="sm" className="text-muted-foreground">;
              <Flag className="h-3 w-3 mr-1" />;

              Report;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;

              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;

}