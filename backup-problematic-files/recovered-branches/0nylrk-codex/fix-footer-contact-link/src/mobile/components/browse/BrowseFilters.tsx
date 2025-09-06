
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

                onClick={() => removeFilter(filter)} ;
              />;
            </Badge>;
          ))}
        </div>;
      </div>;
    </div>;

