
export function ITServicePricingTable() { const [searchQuery, setSearchQuery] = useState("); const [sortConfig, setSortConfig] = useState<{ key: keyof CountryPricing; direction: "ascending" | "descending"; }>({ key: "country", direction: "ascending"}); const sortedData = useMemo(() => { let filteredData = [...onsiteServicePricing];"""";

export function ITServicePricingTable() { const [searchQuery, setSearchQuery] = useState("); const [sortConfig, setSortConfig] = useState<{ key: keyof CountryPricing; direction: "ascending" | "descending";  }>({ key: "country", direction: "ascending"}); const sortedData = useMemo(() => { let filteredData = [...onsiteServicePricing];
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
