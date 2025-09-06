
                          checked={selectedScopes.includes(scope.value)}
                          onCheckedChange={() => toggleScope(scope.value)}
                        />;
                        <Label;
                          htmlFor={scope.value}

                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;
            <div className="flex justify-between items-start mb-2">;
              <span className="font-medium flex items-center">;
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;
              </span>;

              >;
                <X size={14} />;
              </Button>;
            </div>;

              This key will only be displayed once. Please save it securely.;
            </p>;
            <CodeBlock code={newApiKey} className="mb-3" />;
            <div className="text-sm text-zinc-400">;
              <span className="font-medium">Example usage:</span>;
            </div>;
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />;
          </div>;
        )}

        {/* API Keys List */}
        <div className="space-y-4">;
          {loading ? (;
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>;

            <div className="text-center py-8 text-zinc-500">;
              <Key className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No API keys found.</p>;
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;
            </div>;

                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
                        )}
                      </div>;
                    </div>;
                  </div>;

                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;

                </div>;
              </div>;
            ));
          )}

      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;

            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

            >;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

