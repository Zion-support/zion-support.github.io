    error;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;
  } = useWebhooks();
          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;
        </CardHeader>;
              ))}
            </div>;
            <div className="flex space-x-2">;
              <Select
                value={newWebhook && newWebhook.selectedEvent}
                onValueChange={(value) => setNewWebhook({...newWebhook, selectedEvent: value as WebhookEventType})}
              >;
                <SelectTrigger className="w-full">;
                  <SelectValue placeholder="Select event" />;
                </SelectTrigger>;
                <SelectContent>;
                  {eventOptions && eventOptions.map(option => (;
                    <SelectItem key={option && option.value} value={option && option.value}>;
                      {option && option.label}
                    </SelectItem>;
                  ))}
        {loading ? (
          <p > Loading webhooks...</p>) : error ? (
          <p className="text - red - 500">{error}</p>) : webhooks.length === 0 ? (
          <p > No webhooks configured yet. Create your first webhook above.</p>) : (
          <div className="space - y-4">;
            {webhooks.map (webhook => (
              <Card key={webhook.id}>;
                <CardHeader className="pb - 2">;
                  <div className="flex justify - between items - start">;
                    <div>;
                      <CardTitle className="text - lg">{webhook.name}</CardTitle>;
                      <CardDescription className="truncate max - w-md">;
                        {webhook.url}
                        </Button>;
                      </div>;
                    </div>;
                  </div>;
                </CardHeader>;
=======
                <CardContent className="py - 2">;
                  <div className="flex flex - col space - y-2">;
                    <div>;
                      <Label className="text - sm">Events</Label>;
                      <div className="flex flex - wrap gap - 2 mt - 1">;
                        {webhook.event_types.map (event => (
                          <ClickableBadge key={event} variant="secondary">;
                            {event_options.find (e => e.value === event)?.label || event}
                          </ClickableBadge>))}
                      </div>;
                    </div>;
                    <div className="text - xs text - muted - foreground">;
                      {webhook.last_triggered_at;
                        ? `Last triggered: ${new Date (webhook.last_triggered_at).toLocaleString ()}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                        : 'Never triggered'}
                    </div>;
                  </div>;
                </CardContent>;
                  >;
                    <SelectTrigger className="w-[180px]">;
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;
                      <SelectItem value="test_event">Test (generic)</SelectItem>;
                      ))}
                    </SelectContent>;
                  </Select>;
                </CardFooter>;
              </Card>;
            ))}
          </div>;
        )}
                  </pre>;
                </div>;
              </div>;
            </CardContent>;
=======
          </Card>)}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
