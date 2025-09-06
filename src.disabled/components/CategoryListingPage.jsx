<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
' \' \' \' import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,\"listings\": \'initialListing\',s,\"sortOptions\": = [\'';\'";\";
" " " " import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,listings: "initialListing",s,sortOptions: = ["";"";";"""

=======
=======


=======
<<<<<<< HEAD:src.disabled/components/CategoryListingPage.jsx
<<<<<<< HEAD
' \' \' \' import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,\"listings\": \'initialListing\',s,\"sortOptions\": = [\'';\'";\";
" " " " import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,listings: "initialListing",s,sortOptions: = ["";"";";"""
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
' \' \' \' import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,\"listings\": \'initialListing\',s,\"sortOptions\": = [\'';\'";\";
" " " " import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,listings: "initialListing",s,sortOptions: = ["";"";";"""
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/components/CategoryListingPage.jsx
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
:src.disabled/components/CategoryListingPage.jsx
' \' \' \' import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,\"listings\": \'initialListing\',s,\"sortOptions\": = [\'';\'";\";
" " " " import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,listings: "initialListing",s,sortOptions: = ["";"";";"""
origin/cursor/integrate-build-improve-and-re-verify-c7b5
' \' \' \' import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,\"listings\": \'initialListing\',s,\"sortOptions\": = [\'';\'";\";
" " " " import { Search,Filter,ArrowDownAZ,ArrowUpZA,Loader2 export function CategoryListingPage ({ title,description,listings: "initialListing",s,sortOptions: = ["";"";";"""
:temp_exclude/src.disabled/components/CategoryListingPage.jsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
' ' ' ' ' "export": function CategoryListingPage ({ title,description,"listings": 'initialListing',s,"sortOptions": = [{ label: 'Newest: First,',"value": 'newest'},{ "label": 'Oldest: First,',"value": 'oldest'},{ "label": 'Highest: Rating,',"value": 'rating: - high'},{ "label": 'Highest: AI Match,',"value": 'ai: - match'},{ "label": 'A: - Z,',"value": 'a: - z'},{ "label": 'Z: - A,',"value": 'z: - a'}],filterOptions = [' { "label": 'All,',"value": 'all'},{ "label": 'Highly: Rated,',"value": 'high: - rating'},{ "label": 'Best: AI Match,',"value": 'best: - match'}] }) { ' const [searchQuery,setSearchQuery] = useState (') const [selectedSort,setSelectedSort] = useState ( () => localStorage.getItem ('category_selected_sort') || sortOptions[0].value) const [selectedFilter,setSelectedFilter] = useState ( () => localStorage.getItem ('category_selected_filter') || filterOptions[0].value) const [isLoading,setIsLoading] = useState (false) useEffect ( () => { localStorage.setItem ('category_selected_sort',selectedSort) },[selectedSort]) useEffect ( () => { localStorage.setItem ('category_selected_filter',selectedFilter) },[selectedFilter]) useEffect ( () => { setIsLoading (true) const timeout = setTimeout ( () => setIsLoading (false) ,300) return () => clearTimeout (timeout) },[searchQuery,selectedSort,selectedFilter]) ';"";""
