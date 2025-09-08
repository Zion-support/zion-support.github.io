              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>

                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />

                </SelectTrigger>
                <SelectContent />
                  <SelectItem value=\"\" />All Statuses</SelectItem>
                  <SelectItem value=\"open\" />Open</SelectItem>
                  <SelectItem value=\"in-progress\" />In Progress</SelectItem>
                  <SelectItem value=\"resolved\" />Resolved</SelectItem>
                </SelectContent>
              </Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />

                </SelectTrigger>
                <SelectContent />
                  <SelectItem value=\"\" />All Priorities</SelectItem>
                  <SelectItem value=\"high\" />High</SelectItem>
                  <SelectItem value=\"medium\" />Medium</SelectItem>
                  <SelectItem value=\"low\" />Low</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>

                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />

                </SelectTrigger>
                <SelectContent />
                  <SelectItem value=\"\" />All Categories</SelectItem>
                  <SelectItem value=\"authentication\" />Authentication</SelectItem>
                  <SelectItem value=\"billing\" />Billing</SelectItem>
                  <SelectItem value=\"api\" />API</SelectItem>
                  <SelectItem value=\"disputes\" />Disputes</SelectItem>
                  <SelectItem value=\"verification\" />Verification</SelectItem>
                  <SelectItem value=\"profile\" />Profile</SelectItem>
                </SelectContent>
              </Select>
              <Button variant=\"outline\" onClick={resetFilters} className=\"md:w-auto\" />
                <Filter className=\"h-4 w-4 mr-2\" /> Reset Filters;
              </Button>
            </div>
            {/* Support Requests Table */}
            <Card />
              <CardContent className=\"p-0\" />
                <Table />
                  <TableHeader />
                    <TableRow />
                      <TableHead />ID</TableHead>
                      <TableHead />User</TableHead>
                      <TableHead />Issue</TableHead>
                      <TableHead />Status</TableHead>
                      <TableHead />Priority</TableHead>
                      <TableHead />Category</TableHead>
                      <TableHead />Created</TableHead>
                      <TableHead />Last Updated</TableHead>
                      <TableHead />Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody />
                    {filteredRequests.map((request) => (}
                      <TableRow key={request.id} />
                        <TableCell className=\"font-medium\" />{request.id}</TableCell>
                        <TableCell />{request.user}</TableCell>
                        <TableCell className=\"max-w-xs truncate\" />{request.issue}</TableCell>
                        <TableCell />
                          <Badge variant={
                            request.status === 'open'
                              ? 'default'
                              : request.status === 'in-progress'
