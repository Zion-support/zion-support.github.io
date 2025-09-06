
      <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1">;
        <Flag className="h-3 w-3" />;
        {flags}
      </Badge>;

    <div className="container max-w-7xl py-10">;
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Management</h1>;
          <p className="text-zion-slate-light">Approve and manage affiliate partners</p>;
        </div>;
      </div>;

      <Card className="bg-zion-blue-dark border-zion-blue-light mb-8">;
        <CardHeader className="pb-3">;
          <CardTitle>Overview</CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className="grid gap-4 md:grid-cols-3">;
            <Card className="bg-zion-blue border-zion-blue-light">;
              <CardHeader className="pb-2">;
                <CardTitle className="text-sm font-medium text-zion-slate-light">;
                  Pending Applications;
                </CardTitle>;

                </div>;
              </CardHeader>;
              <CardContent className="pt-0">;
                <p className="text-xs text-zion-slate-light">;

                  Partners waiting for review and approval;
                </p>;
              </CardContent>;
            </Card>;

                  Currently approved and active partners;
                </p>;
              </CardContent>;
            </Card>;

                  Total potential fraud flags detected;
                </p>;
              </CardContent>;
            </Card>;
          </div>;
        </CardContent>;
      </Card>;

              />;
            </div>;
          </div>;
        </CardHeader>;
        <CardContent>;

              <TabsTrigger value="pending">Pending</TabsTrigger>;
              <TabsTrigger value="approved">Approved</TabsTrigger>;
              <TabsTrigger value="rejected">Rejected</TabsTrigger>;
              <TabsTrigger value="all">All</TabsTrigger>;
            </TabsList>;

                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />;
            </TabsContent>;

                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />;
            </TabsContent>;

                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />;
            </TabsContent>;

            <DialogDescription>;
              Review the details of the partner application;
            </DialogDescription>;
          </DialogHeader>;

                  </AlertTitle>;
                  <AlertDescription>;
                    This application has triggered our fraud detection system. Review carefully before approving.;
                  </AlertDescription>;

      {/* Partner Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>;
        <DialogContent className="bg-zion-blue border-zion-blue-light">;
          <DialogHeader>;
            <DialogTitle>Partner Settings</DialogTitle>;

            <DialogDescription>;
              Configure commission rates and other settings;
            </DialogDescription>;
          </DialogHeader>;

                />;
                <p className="text-xs text-zion-slate-light mt-1">;
                  Percentage of reward granted to this partner for successful referrals;
                </p>;
              </div>;

              <DialogFooter>;
                <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>;
                  Cancel;
                </Button>;
                <Button onClick={handleSaveSettings} className="bg-zion-purple hover:bg-zion-purple-dark">;
                  Save Changes;
                </Button>;
              </DialogFooter>;
            </div>;
          )}
        </DialogContent>;
      </Dialog>;
    </div>;

              </div>;
            </TableCell>;
            <TableCell>{partner.niche}</TableCell>;
            <TableCell>;

                      className="text-red-500 hover:text-red-600 hover:bg-red-900/20";
                    >;
                      <X className="h-4 w-4" />;
                      <span className="sr-only">Reject</span>;
                    </Button>;

                      className="text-green-500 hover:text-green-600 hover:bg-green-900/20";
                    >;
                      <Check className="h-4 w-4" />;
                      <span className="sr-only">Approve</span>;
                    </Button>;
                  </>;
                )}

                  onClick={() => onOpenSettings(partner)}
                  className="text-zion-slate-light hover:text-white";
                >;
                  <Settings className="h-4 w-4" />;
                  <span className="sr-only">Settings</span>;
                </Button>;

                >;
                  View;
                </Button>;
              </div>;
            </TableCell>;

}