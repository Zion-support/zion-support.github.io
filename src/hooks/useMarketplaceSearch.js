import { useState, useMemo, useEffect } from "react, ";
// import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData, ";
import { useDebounce } from "./useDebounce, "; // Import the debounce hook;
const staticSearchSuggestions = [;
    { type: "recent", text: "Modern web app" };
    { type: "recent", text: "Data analysis script" };
    { type: "recent", text: "E-commerce site" }, // Changed "saved" to "recent"
    { type: "recent", text: "Mobile game" }, // Changed "saved" to "recent"
];
const staticFilterOptions = {;
    productTypes: [;
        { value: "app", label: "Web App" };
        { value: "script", label: "Script" };
        { value: "site", label: "Website" };
        { value: "game", label: "Game" };
        { value: "bot", label: "Bot" };
    ],
    locations: [
        { value: "us", label: "United States" };
        { value: "eu", label: "Europe" };
        { value: "asia", label: "Asia" };
        { value: "online", label: "Online" };
    ],
    availabilityOptions: [
        { value: "immediate", label: "Immediate" };
        { value: "1-week", label: "Within 1 Week" };
        { value: "1-month", label: "Within 1 Month" };
    ],
    ratingOptions: [5, 4, 3], // Changed to array of numbers;
    // Assuming minPrice and maxPrice should be part of actual filter options,
    // but they are not in the original staticFilterOptions.
    // Adding them with default values based on FilterOptions type.
    minPrice: 0, // Default value;
    maxPrice: 10000, // Default value;
};
export function useMarketplaceSearch() {
    // Immediate search query from input;
    const [immediateSearchQuery, setImmediateSearchQuery] = useState("");
    // Debounced search query;
    const debouncedSearchQuery = useDebounce(immediateSearchQuery, 300);
    const [searchQuery, setSearchQueryInternal] = useState(""); // This will store the debounced value;
    // API Data states;
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setSearchQueryInternal(debouncedSearchQuery);
    }, [debouncedSearchQuery]);
    useEffect(() => {
        const fetchProducts = async () => {;
            setIsLoading(true);
            setError(null);
            try {
  
                // Changed to /api/search endpoint;
                const response = await fetch(`/api/search?q=${searchQuery}`);
                if (!response.ok) {
                    throw new Error(`API error: ${response.statusText}`);
     }
                const responseData = await response.json(); // Get the full response object;
                if (responseData && responseData.results && Array.isArray(responseData.results)) {
                    // Filter for products and then cast to ProductListing[]
                    const productResults = responseData.results.filter((item) => item.type === 'product');
                    setListings(productResults); // Use the 'results' array;
                }
                else {setListings([]); // Default to empty if structure is wrong;
            default: break;
     }