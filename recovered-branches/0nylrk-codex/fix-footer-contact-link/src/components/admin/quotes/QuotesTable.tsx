  quotes;

  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
                  {quote.requester_name}
                </TableCell>;
                <TableCell className="text - white">;
                  <div className="font - medium">{quote.project_name}</div>;
                  <div className="text - sm text - zion - slate - light truncate max - w-[200px]">;
                    {quote.project_summary}
                          size="icon"
                          className="text-red-500"
                          onClick={() => {;
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
                            }
                          }}
                              }
                            }}
                            className="text-red-500";
                          >;
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ));
          )}
=======
                  </div>;
                </TableCell>;
                <TableCell className="text - white">;
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;
                    ? `$${quote.budget_min}`;
                    : 'Not specified')}
                </TableCell>;
                <TableCell className="text - white">;
                  {format_date (quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
                <TableCell>;
                  <div className="flex items - center gap - 2">;
                    <Button;
                      variant="ghost";
                      size="icon";
                      on_click={() => onViewDetails (quote)}
                    >;
                      <Eye className="h - 4 w - 4" />;
                      <span className="sr - only">View Details</span>;
                    </Button>;
                    {is_archived ? (
                      <>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          on_click={() => toggle_archive (quote.id, false)}
                        >;
                          <Archive className="h - 4 w - 4" />;
                          <span className="sr - only">Unarchive</span>;
                        </Button>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          className="text - red - 500";
                          on_click={() => {
                            if () {) {
  $2
}
                              delete_quote (quote.id);
                            }
                          }}
                        >;
                          <Trash2 className="h - 4 w - 4" />;
                          <span className="sr - only">Delete</span>;
                        </Button>;
                      </>) : (
                      <DropdownMenu>;
                        <DropdownMenuTrigger as_child>;
                          <Button variant="ghost" size="icon">;
                            <MoreHorizontal className="h - 4 w - 4" />;
                            <span className="sr - only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'in_review')}>;
                            Mark as In Review;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'responded')}>;
                            Mark as Responded;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'closed')}>;
                            Mark as Closed;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;
                            <Archive className="h - 4 w - 4 mr - 2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
                            on_click={() => {
                              if () {) {
  $2
}
                                delete_quote (quote.id);
                              }
                            }}
                            className="text - red - 500";
                          >;
                            <Trash2 className="h - 4 w - 4 mr - 2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>)}
                  </div>;
                </TableCell>;
              </TableRow>)))}
        </TableBody>;
      </Table>;
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
