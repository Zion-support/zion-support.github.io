  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false);
  const [webhookName, setWebhookName] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookSecret, setWebhookSecret] = useState("");

  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application');

  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
  }, []);

                  <Input
                    id="webhook-secret"
                    type="password"
                    value={webhookSecret}
                        <Label
                          htmlFor={event && event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;
                          {event && event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;
                        </Label>;
                      </div>;
                    ))}
        {/* Webhooks List */}
        <div className="space - y-4">;
          {loading ? (
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus (webhook.id, webhook.is_active)}
                      />;
                      <span className="ml - 2 text - sm">;
                        {webhook.is_active ? "Active" : "Inactive"}
                        <Button variant="ghost" size="icon">;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
                        <DropdownMenuItem
                          onClick={() => setShowTestDialog(webhook && webhook.id)}
                          className="cursor-pointer";
                        >;
                          <PlayCircle size={14} className="mr-2" /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem
                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">;
                      {event}
                    </Badge>;
                  ))}
                  )}
                </div>;
              </div>;
            ));
          )}
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {;
              setShowTestResult(false);
              clearTestResult();
            }
          }
        }}
                  <Select
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                  >;
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">;
                      <SelectValue placeholder="Select an event type" />;
                    </SelectTrigger>;
                    <SelectContent className="bg-zinc-900 border-zinc-800">;
                      {eventOptions && eventOptions.map((option) => (;
                        <SelectItem key={option && option.value} value={option && option.value}>;
                          {option && option.label}
                        </SelectItem>;
                      ))}
                    The event type will determine the structure of the test payload.;
                  </p>;
                </div>;
              </div>;
                    <Badge
                      className={
                        testResult && testResult.status>= 200 && testResult.status < 300;
                          ? "bg-green-700";
                          : "bg-red-700";
                      }
                    >;
                      {testResult?.status} {testResult?.statusText}
                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;
                  setShowTestDialog(null);
                  setShowTestResult(false);
                  clearTestResult();
                }}>;
                  Close;
                </Button>;
                <Button variant="outline" onClick={() => {;
                  setShowTestResult(false);
              This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
