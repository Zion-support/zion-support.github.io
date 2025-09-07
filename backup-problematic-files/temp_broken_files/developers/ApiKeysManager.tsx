<Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <Key className="mr-2" size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant="default">Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
              <DialogHeader>;
                <DialogTitle>Create API Key</DialogTitle>;
                <DialogDescription className="text-zinc-400">;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;

                        </Label>;
                      </div>;
                    ))}
                  </div>;
                </div>;
              </div>;

                  Create Key;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

              </span>;
              <Button;
                variant="ghost";
                size="icon";

              >;
                <X size={14} />;
              </Button>;
            </div>;

                      <Button variant="ghost" size="icon">;
                        <MoreVertical size={16} />;
                      </Button>;
                    </DropdownMenuTrigger>;

                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;

                    </PopoverTrigger>;
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;
                      <p className="text-sm mb-1">Last Used</p>;
                      <p className="text-xs text-zinc-400">;

      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;
          Refresh;
        </Button>;
      </CardFooter>;

        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
              This action will invalidate the existing key and generate a new one.;
              Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;

              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700";
            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;

            >;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;