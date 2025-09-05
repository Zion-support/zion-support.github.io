

export function ITServicePricingTable() {_const [searchQuery, _setSearchQuery] = useState("");
  const [sortConfig, _setSortConfig] = useState<{
    key: keyof CountryPricing;
    direction: "ascending" | "descending";}>({_key: "country", _direction: "ascending"});

  const _sortedData = useMemo__(() => {_let _filteredData = [...onsiteServicePricing];
    
    // Filter by search query
    if (searchQuery) {
      filteredData = filteredData.filter(item => 
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
      );}
    
    // Sort data
    filteredData.sort(_(a, _b) => {_if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;}
      if (a[sortConfig.key] > b[sortConfig.key]) {_return sortConfig.direction === "ascending" ? 1 : -1;}
      return 0;
    });
    
    return filteredData;
  }, [onsiteServicePricing, searchQuery, sortConfig]);

  const _handleSort = (_key: keyof CountryPricing) => {_setSortConfig({
      key, _direction: 
        sortConfig.key === key && sortConfig.direction === "ascending" 
          ? "descending" 
          : "ascending"});
  };

  return (_<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
          <Input
            placeholder="Search by country..."
            value={_searchQuery}
            onChange={_(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white"
          />
        </div>
      </div>

      <div className="rounded-md border border-zion-blue-light overflow-hidden">
        <Table>
          <TableHeader className="bg-zion-blue">
            <TableRow>
              <TableHead className="text-zion-cyan font-medium">
                <Button 
                  variant="ghost" 
                  onClick={_() => handleSort("country")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light"
                >
                  <span>Country</span>
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right text-zion-cyan font-medium">
                <Button 
                  variant="ghost" 
                  onClick={_() => handleSort("pricePerIncident")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light"
                >
                  <span>Price Per Incident</span>
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-zion-blue-dark">
            {_sortedData.length > 0 ? (_sortedData.map((item) => (
                <TableRow key={item.country} className="border-b border-zion-blue-light hover:bg-zion-blue/50">
                  <TableCell className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-zion-purple" />
                    <span className="text-white">{_item.country}</span>
                  </TableCell>
                  <TableCell className="text-right font-medium text-white">${_item.pricePerIncident.toFixed(2)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={_2} className="text-center py-10 text-zion-slate-light">
                  No countries match your search
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
