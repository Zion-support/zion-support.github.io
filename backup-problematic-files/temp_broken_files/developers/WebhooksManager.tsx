await createWebhook(;
      webhookName, ;
      webhookUrl, ;
      selectedEvents, ;

    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant="default">;
                <Plus size={16} className="mr-1" /> Add Webhook;
              </Button>;
            </DialogTrigger>;
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
              <DialogHeader>;
                <DialogTitle>Create Webhook</DialogTitle>;
                <DialogDescription className="text-zinc-400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;

                    className="bg-zinc-800 border-zinc-700";
                  />;
                  <p className="text-xs text-zinc-500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;

                    placeholder="••••••••••••••••";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                  <p className="text-xs text-zinc-500">;
                    Used to verify webhook payload signatures. Keep it secret and secure.;
                  </p>;
                </div>;

                }>;
                  Create Webhook;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

                        <Button variant="ghost" size="icon">;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;

                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;

                </div>;
              </div>;
            ));
          )}
        </div>;
      </CardContent>;

      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>;
          <RefreshCw size={14} className="mr-1" /> Refresh;
        </Button>;
      </CardFooter>;

            }
          }
        }}
      >;
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <DialogHeader>;
            <DialogTitle>Test Webhook</DialogTitle>;
            <DialogDescription className="text-zinc-400">;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;

          {!showTestResult ? (;
            <>;
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <Label htmlFor="test-event-type">Event Type</Label>;

                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                  >;
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">;
                      <SelectValue placeholder="Select an event type" />;
                    </SelectTrigger>;
                    <SelectContent className="bg-zinc-900 border-zinc-800">;

                        </SelectItem>;
                      ))}
                    </SelectContent>;
                  </Select>;
                  <p className="text-xs text-zinc-500">;

                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;

                }}>;
                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;
          )}
        </DialogContent>;
      </Dialog>;

        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;

            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

}