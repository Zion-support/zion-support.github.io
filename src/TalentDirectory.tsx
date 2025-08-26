
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TalentGrid } from "@/components/talent/TalentGrid";
import { FilterSidebar } from "@/components/talent/FilterSidebar";
import { TalentResults } from "@/components/talent/TalentResults";
import { TalentSkeleton } from "@/components/talent/TalentSkeleton";
import { ErrorBanner } from "@/components/talent/ErrorBanner";
import { useTalentDirectory } from "@/hooks/useTalentDirectory";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TalentProfile } from "@/types/talent";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function TalentDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Use our custom hook to manage state
  const {
    filteredTalents,
    isLoading,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    setPriceRange,
    experienceRange,
    setExperienceRange,
    sortOption,
    setSortOption,
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    error,
    isAuthenticated,
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
  } = useTalentDirectory();

  const locations = [
    'All Locations',
    'Remote',
    'United States',
    'Europe',
    'Asia',
    'Canada',
    'Australia'
  ];

  const featuredTalents = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior AI Engineer',
      category: 'AI & Machine Learning',
      location: 'Remote',
      experience: '8+ years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      rating: 4.9,
      reviews: 47,
      avatar: 'SC',
      hourlyRate: '$120-150',
      availability: 'Available',
      description: 'Expert in developing and deploying machine learning models for enterprise applications.'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Cybersecurity Specialist',
      category: 'Cybersecurity',
      location: 'United States',
      experience: '10+ years',
      skills: ['Penetration Testing', 'SOC2', 'ISO27001', 'Incident Response', 'Threat Hunting'],
      rating: 4.8,
      reviews: 32,
      avatar: 'MR',
      hourlyRate: '$100-130',
      availability: 'Available',
      description: 'Certified security professional with expertise in enterprise security and compliance.'
    },
    {
      id: 3,
      name: 'Dr. James Kim',
      title: 'Cloud Architect',
      category: 'Cloud & DevOps',
      location: 'Remote',
      experience: '12+ years',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
      rating: 4.9,
      reviews: 56,
      avatar: 'JK',
      hourlyRate: '$130-160',
      availability: 'Available',
      description: 'Senior cloud architect specializing in scalable infrastructure and DevOps automation.'
    },
    {
      id: 4,
      name: 'Emily Watson',
      title: 'Data Scientist',
      category: 'Data Science',
      location: 'Europe',
      experience: '6+ years',
      skills: ['Python', 'R', 'SQL', 'Tableau', 'Machine Learning', 'Statistics'],
      rating: 4.7,
      reviews: 28,
      avatar: 'EW',
      hourlyRate: '$90-120',
      availability: 'Available',
      description: 'Data scientist with expertise in predictive analytics and business intelligence.'
    },
    {
      id: 5,
      name: 'Alex Thompson',
      title: 'Full Stack Developer',
      category: 'Software Development',
      location: 'Remote',
      experience: '7+ years',
      skills: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'TypeScript'],
      rating: 4.8,
      reviews: 41,
      avatar: 'AT',
      hourlyRate: '$80-110',
      availability: 'Available',
      description: 'Versatile developer with experience in modern web technologies and cloud platforms.'
    },
    {
      id: 6,
      name: 'Lisa Park',
      title: 'UX/UI Designer',
      category: 'UI/UX Design',
      location: 'United States',
      experience: '5+ years',
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
      rating: 4.6,
      reviews: 23,
      avatar: 'LP',
      hourlyRate: '$70-100',
      availability: 'Available',
      description: 'Creative designer focused on user-centered design and digital product experiences.'
    }
  ];

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredTalents]);

  const totalPages = Math.ceil(filteredTalents.length / itemsPerPage);
  const paginatedTalents = filteredTalents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleBook = (talent: TalentProfile) => {
    setSelectedTalent(talent);
    setIsHireModalOpen(true);
  };
  
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`);
  };
  
  return (
    
      <div className="container mx-auto px-4 py-8">
        <TalentSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorBanner msg="Unable to load talent profiles." />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>
            <p className="text-zion-slate-light">
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.
            </p>
          </div>
          
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">
              <FilterSidebar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedSkills={selectedSkills}
                toggleSkill={toggleSkill}
                selectedAvailability={selectedAvailability}
                toggleAvailability={toggleAvailability}
                selectedRegions={selectedRegions}
                toggleRegion={toggleRegion}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                experienceRange={experienceRange}
                setExperienceRange={setExperienceRange}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                sortOption={sortOption}
                setSortOption={setSortOption}
                clearFilters={clearFilters}
              />
            </div>
            
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">
              <Button
                onClick={() => setIsMobileFilterOpen(true)}
                variant="outline"
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
              >
                Filter & Sort
              </Button>
            </div>
            
            {/* Results */}
            <TalentResults
              talents={paginatedTalents}
              totalCount={filteredTalents.length}
              isLoading={isLoading}
              viewProfile={viewProfile}
              handleRequestHire={handleRequestHire}
              isAuthenticated={isAuthenticated}
              activeFiltersProps={{
                selectedSkills,
                toggleSkill,
                selectedAvailability,
                toggleAvailability,
                selectedRegions,
                toggleRegion,
                priceRange,
                setPriceRange,
                experienceRange,
                setExperienceRange,
                clearFilters,
              }}
            />

  const messageTalent = (id: string) => {
    router.push(`/messages?talentId=${id}`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <TalentSkeleton />
      </div>
    );
  }

  if (
    !isLoading &&
    !error &&
    filteredTalents.length === 0 &&
    !searchTerm &&
    selectedSkills.length === 0 &&
    selectedAvailability.length === 0 &&
    selectedRegions.length === 0 &&
    priceRange[0] === 50 &&
    priceRange[1] === 200 &&
    experienceRange[0] === 0 &&
    experienceRange[1] === 15
  ) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Talent Directory Currently Empty
          </h2>
          <p className="text-zion-slate-light max-w-md mx-auto">
            No talent profiles are currently available. Please check back later.
          </p>
          <Link
            href="/signup?role=talent"
            className="inline-block mt-6 bg-zion-purple text-white px-4 py-2 rounded hover:bg-zion-purple-dark"
          >
            Become a Talent – Sign Up
          </Link>
        </div>
      </div>
    
  );
}