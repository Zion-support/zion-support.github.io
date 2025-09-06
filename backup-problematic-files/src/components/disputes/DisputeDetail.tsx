
      }
    },;
    ;
    loadDisputeData(),;
  }, [disputeId, getDisputeById, getDisputeMessages, router]),;
;
  const handleStatusChange = async (status:DisputeStatus) => {;
    if (!disputeId) return,;
;
    const success = await updateDisputeStatus(disputeId, status),;
    if (success) {;
      // Update the dispute object with the new status;
      setDispute({ ...dispute!, status:status }),;
    } else {;
      toast.error("Failed to update dispute status"),;
    }

    }
  },;
;
  if (isLoading) {;
    return (;
      <div className="p-8 text-center">;
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;
        <p>Loading dispute details...</p>;
      </div>;
    ),;
  }

                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;

                <Card>;
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;

                  </CardContent>;
                </Card>;
              )}
            </TabsContent>;

                        });
                    )}
                  </div>;
                </CardContent>;
                <CardFooter>;

                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;

                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;

                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;

                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;

          <Card>;
            <CardHeader>;
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;

                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardHeader>;
              <CardTitle>Case Information</CardTitle>;
            </CardHeader>;

              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;

