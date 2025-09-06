  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">;
              <div className="relative flex-1">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
                <Input
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery}
                              : 'outline'
                          }>;
                            {request && request.priority}
                          </Badge>;
                        </TableCell>;
                        <TableCell>{request && request.category}</TableCell>;
                        <TableCell>{new Date(request && request.createdAt).toLocaleDateString()}</TableCell>;
                        <TableCell>{new Date(request && request.lastUpdated).toLocaleDateString()}</TableCell>;
                        <TableCell>;
                          <Button variant="ghost" size="sm">View</Button>;
                          <Button variant="ghost" size="sm">Assign</Button>;
                        </TableCell>;
                      </TableRow>;
                    ))}
                  </TableBody>;
                </Table>;
              </CardContent>;
            </Card>;
          </TabsContent>;
                This tab will show support requests that have been escalated by agents or the system.;
              </p>;
            </div>;
          </TabsContent>;
                This tab shows issues that our AI system has identified as requiring human attention.;
              </p>;
            </div>;
          </TabsContent>;
                These support requests have been waiting for an agent response for over 24 hours.;
              </p>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </div>;
=======
    </AppLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
