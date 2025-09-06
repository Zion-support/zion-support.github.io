
          </CardHeader>;
          <CardContent>;
            <div className="space-y-6">;
              {/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-4">;
                <div className="relative flex-1">;

                  value={selectedNamespace}
                  onValueChange={(value) => setSelectedNamespace(value)}
                  className="w-full sm:w-auto";
                >;
                  <TabsList>;
                    <TabsTrigger value="translation">General</TabsTrigger>;
                    <TabsTrigger value="admin">Admin</TabsTrigger>;
                  </TabsList>;
                </Tabs>;
              </div>;

                      <div key={key} className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_auto]">;
                        <div className="p-3 break-words">{key}</div>;
                        {editingKey === key ? (;
                          <div className="p-3">;
                            <div className="space-y-4">;

                                </div>;
                              ))}
                            </div>;
                            <div className="flex gap-2 mt-4">;

                                onClick={() => handleSave(key)}
                                disabled={isSaving}
                              >;
                                {isSaving ? (;
                                  <>;
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

                                onClick={() => handleTranslateKey(key)}
                                disabled={isTranslating}
                              >;
                                {isTranslating ? (;
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

                                  </span>;
                                </div>;
                              ))}
                              {getMissingLanguages(key).length > 0 && (;
                                <div className="flex items-center gap-2 text-sm text-zion-purple">;
                                  <AlertTriangle className="h-4 w-4" />;

                            </div>;
                          </div>;
                        )}
                        <div className="p-3 flex items-center justify-end">;

                            </Button>;
                          )}
                        </div>;
                      </div>;
                    ))}
                  </div>;
                )}

              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </main>;
      <Footer />;

}