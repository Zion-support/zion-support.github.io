import { useState, useEffect } from "react";
import { FuturisticFooter } from "@/components/FuturisticFooter";
import { GradientHeading } from "@/components/GradientHeading";
import { ListingScoreCard } from "@/components/ListingScoreCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Search, Filter, ArrowDownAZ, ArrowUpZA, Loader2 } from "lucide-react";
export function CategoryListingPage({ title, description, listings: initialListings, sortOptions = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
    { label: 'Highest Rating', value: 'rating-high' },
    { label: 'Highest AI Match', value: 'ai-match' },
    { label: 'A-Z', value: 'a-z' },
    { label: 'Z-A', value: 'z-a' },
], filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Highly Rated', value: 'high-rating' },
    { label: 'Best AI Match', value: 'best-match' },
] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSort, setSelectedSort] = useState(() => localStorage.getItem('category_selected_sort') || sortOptions[0].value);
    const [selectedFilter, setSelectedFilter] = useState(() => localStorage.getItem('category_selected_filter') || filterOptions[0].value);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        localStorage.setItem('category_selected_sort', selectedSort);
    }, [selectedSort]);
    useEffect(() => {
        localStorage.setItem('category_selected_filter', selectedFilter);
    }, [selectedFilter]);
    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timeout);
    }, [searchQuery, selectedSort, selectedFilter]);
    // Process listings based on filters and search
    const processedListings = initialListings
        .filter(listing => {
        // Apply search filter
        const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (listing.tags && listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        // Apply category filters
        if (selectedFilter === 'all')
            return matchesSearch;
        if (selectedFilter === 'high-rating')
            return matchesSearch && (listing.rating || 0) >= 4;
        if (selectedFilter === 'best-match')
            return matchesSearch && (listing.aiScore || 0) >= 85;
        return matchesSearch;
    })
        .sort((a, b) => {
        // Apply sorting
        switch (selectedSort) {
            case 'newest':
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            case 'oldest':
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            case 'rating-high':
                return (b.rating || 0) - (a.rating || 0);
            case 'ai-match':
                return (b.aiScore || 0) - (a.aiScore || 0);
            case 'a-z':
                return a.title.localeCompare(b.title);
            case 'z-a':
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });
    return (<>
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>{title}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              {description}
            </p>
          </div>

}
""




