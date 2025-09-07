<>;
            <div className="grid gap-4 py-4">;
              <div className="space-y-4">;
                <h3 className="text-sm font-medium">Sync Settings</h3>;

                    }
                  />;
                  <Label htmlFor="pushNotes">Push notes and comments</Label>;
                </div>;

                    }
                  />;
                  <Label htmlFor="syncJobDetails">Sync job details</Label>;
                </div>;

                    }
                  />;
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;

                Disconnect;
              </Button>;
              <Button onClick={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>;

              <div className="space-y-4">;
                <h3 className="text-sm font-medium">What will be synced:</h3>;
                <ul className="list-disc pl-4 text-sm space-y-1">;
                  <li>Contact information</li>;
                  <li>Job details and descriptions</li>;
                  <li>Applicant data and status</li>;
                  <li>Activity logs and notes</li>;
                </ul>;
              </div>;
            </div>;

              </Button>;
            </DialogFooter>;
          </>;
        )}
      </DialogContent>;
    </Dialog>;

}