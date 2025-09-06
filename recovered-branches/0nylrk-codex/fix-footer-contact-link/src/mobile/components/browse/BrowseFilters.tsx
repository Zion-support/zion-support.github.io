interface BrowseFiltersProps {
  type: "jobs" | "talents";
}
                        className="my-4"
                      />;
                      <div className="flex justify-between text-xs text-muted-foreground">;
                        <span>0+ years</span>;
                        <span>20+ years</span>;
                      </div>;
                    </div>;
                  </>;
                )}
                  <Select>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select location" />;
                    </SelectTrigger>;
                    <SelectContent>;
                      <SelectItem value="remote">Remote</SelectItem>;
                      <SelectItem value="us">United States</SelectItem>;
                      <SelectItem value="europe">Europe</SelectItem>;
                      <SelectItem value="asia">Asia</SelectItem>;
                    </SelectContent>;
                  </Select>;
                </div>;
              <SelectValue placeholder="Sort By" />;
            </SelectTrigger>;
            <SelectContent>;
              <SelectItem value="newest">Newest</SelectItem>;
              <SelectItem value="relevance">Best Match</SelectItem>;
              <SelectItem value="salary">Highest Pay</SelectItem>;
            </SelectContent>;
          </Select>;
              variant="secondary"
              className="flex items-center gap-1">;
              {filter}
              <X
=======
          {active_filters.map ((filter) => (
            <Badge;
              key={filter}
              variant="secondary";
              className="flex items - center gap - 1";
            >;
              {filter}
              <X;
                className="h - 3 w - 3 cursor - pointer";
                on_click={() => remove_filter (filter)}
              />;
            </Badge>))}
        </div>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
