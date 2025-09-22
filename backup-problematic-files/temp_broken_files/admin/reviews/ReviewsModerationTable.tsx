
    }) => {;
      const { error } = await supabase;
        .from("reviews");
        .update({ status });

      case "rejected":;
        return "bg-red-100 text-red-800 hover:bg-red-200",;
      default:;
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    }

    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase();

      <div className="space-y-4">;
        <div className="h-12 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
      </div>;

      <div className="py-10 text-center">;
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>;
        <p className="text-muted-foreground">;
          All reviews have been processed. Check back later for new submissions.;
        </p>;
      </div>;

    <>;
      <Table>;
        <TableHeader>;
          <TableRow>;

                      </AvatarFallback>;
                    )}
                  </Avatar>;
                  <div>;

                      </span>;
                    )}
                  </div>;
                </div>;
              </TableCell>;

                  "None";
                )}
              </TableCell>;
              <TableCell className="text-right">;
                <div className="flex justify-end gap-2">;

                        disabled={isPending}
                      >;
                        <Check className="h-4 w-4 text-green-500" />;
                      </Button>;

                        disabled={isPending}
                      >;
                        <X className="h-4 w-4 text-red-500" />;
                      </Button>;
                    </>;
                  )}
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;

                        <MoreHorizontal className="h-4 w-4" />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent align="end">;
                      <DropdownMenuItem onClick={() => handleViewDetails(review)}>;
                        View details;
                      </DropdownMenuItem>;

                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;

      {selectedReview && (;
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>;
          <DialogContent className="max-w-lg">;
            <DialogHeader>;
              <DialogTitle>Review Details</DialogTitle>;
              <DialogDescription>;
                Review submitted on{" "}

            <div className="space-y-4">;
              <div className="flex items-center justify-between">;
                <div className="flex items-center gap-2">;
                  <Avatar>;

                      </AvatarFallback>;
                    )}
                  </Avatar>;
                  <div>;
                    <div className="font-medium">;

                    </Badge>;
                  )}
                </div>;
              </div>;

                  <p className="text-sm text-red-700">;
                    This review has been reported by users and may need investigation.;
                  </p>;
                </div>;
              )}
            </div>;

                    disabled={isPending}
                  >;
                    Reject;
                  </Button>;

                  >;
                    Approve;
                  </Button>;
                </>;
              )}

                  disabled={isPending}
                >;
                  Mark as Rejected;
                </Button>;
              )}

            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      )}
    </>;

}