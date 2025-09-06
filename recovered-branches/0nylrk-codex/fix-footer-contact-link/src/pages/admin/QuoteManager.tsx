
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAdminQuotes} from "@/hooks/useAdminQuotes";
import {useAuth} from "@/hooks/useAuth";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


import React, { useState } from "react";"
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {useAdminQuotes} from "@/hooks/useAdminQuotes";"
import {useAuth} from "@/hooks/useAuth";"
import {Card, CardContent} from "@/components/ui/card";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {Navigate} from "react-router-dom";


"
import type { QuoteRequest } from "@/types/quotes";
"
import {ProtectedRoute} from "@/components/ProtectedRoute";"
import {QuoteDetails} from "@/components/quotes/QuoteDetails";"
import {ExportToCSV} from "@/components/quotes/ExportToCSV";"
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";


export default function QuoteManager() { return null; }
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
import {Navigate} from "react-router-dom";

import type { QuoteRequest } from "@/types/quotes";

import {ProtectedRoute} from "@/components/ProtectedRoute";
import {QuoteDetails} from "@/components/quotes/QuoteDetails";
import {ExportToCSV} from "@/components/quotes/ExportToCSV";
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";


export default function QuoteManager() {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {;

<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
=======
import {Navigate} from "react-router-dom";import React, { useState } from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {Navigate} from "react-router-dom";import React, { useState } from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React, { useState } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAdminQuotes } from "@/hooks/useAdminQuotes";
import { useAuth } from "@/hooks/useAuth";
import {
  Card;
  CardContent
} from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Navigate } from "react-router-dom",
<<<<<<< HEAD

<<<<<<< HEAD
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),
    quotes;
=======
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);    quotes;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;
    date_range;
    setDateRange;
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import type { QuoteRequest } from "@/types/quotes";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { useAdminQuotes } from '@/hooks / useAdminQuotes';
import { use_auth } from '@/hooks / use_auth';
import { Card, CardContent } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Navigate } from './react-router-dom';
import type { QuoteRequest } from "@/types / quotes";
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { QuoteDetails } from '@/components / quotes / QuoteDetails';
import { ExportToCSV } from '@/components / quotes / ExportToCSV';
import { QuoteStatusCards, QuotesFilter, QuotesTable } from '@/components / admin / quotes';
;
export default /**
 * QuoteManager - Function description
 */
function QuoteManager() {
  const { user } = use_auth ();
  const is_admin = user?.user_type === 'admin';
;
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
    quotes;
    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;
    date_range;
    setDateRange;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",
=======
"
import React, { useState } from "react","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer",";
import { useAdminQuotes } from "@/hooks/useAdminQuotes";"
import { useAuth } from "@/hooks/useAuth";
import {};
  Card;
  CardContent"
} from "@/components/ui/card","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { Navigate } from "react-router-dom",";
import type { QuoteRequest } from "@/types/quotes";

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
"
import type { QuoteRequest } from "@/types/quotes","
import { ProtectedRoute } from "@/components/ProtectedRoute","
import { QuoteDetails } from "@/components/quotes/QuoteDetails","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ExportToCSV } from "@/components/quotes/ExportToCSV",
import {}
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable"
} from "@/components/admin/quotes",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


export default function QuoteManager() {}
  const { user } = useAuth(),'
=======

export default function QuoteManager() {
  const { user } = useAuth(),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const isAdmin = user?.userType === 'admin',
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const {
=======


  const {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    quotes,
    isLoading,
    error,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    searchQuery,
    setSearchQuery,
    dateRange,
    setDateRange,
<<<<<<< HEAD
    updateStatus,
    toggleArchive,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    deleteQuote
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    deleteQuote
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  } = useAdminQuotes(),



<<<<<<< HEAD
<<<<<<< HEAD
=======
  } = useAdminQuotes();
  } = useAdminQuotes(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Count quotes by status
  const statusCounts = {
    new: quotes.filter(q => q.status === 'new').length
    in_review: quotes.filter(q => q.status === 'in_review').length
    accepted: quotes.filter(q => q.status === 'accepted').length
    responded: quotes.filter(q => q.status === 'responded').length
    closed: quotes.filter(q => q.status === 'closed').length
<<<<<<< HEAD
<<<<<<< HEAD

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote)
    setShowDetails(true)

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleResetFilters = () => {
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined })
<<<<<<< HEAD
<<<<<<< HEAD

  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
=======
  if (!isAdmin) {
=======
    updateStatus,;
    toggleArchive,;
    deleteQuote;
  // Count quotes by status;
  const statusCounts = {'
    new: quotes.filter(q => q.status === 'new').length'
    in_review: quotes.filter(q => q.status === 'in_review').length'
    accepted: quotes.filter(q => q.status === 'accepted').length'
    responded: quotes.filter(q => q.status === 'responded').length'
    closed: quotes.filter(q => q.status === 'closed').length;
  const handleResetFilters = () => {'
    setStatusFilter('all');'
    setArchiveFilter('all');'
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined })
  if (!isAdmin) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return <Navigate to="/unauthorized" replace />

  // Count quotes by status;
  const statusCounts = {;'
    new: quotes && quotes.filter(q => q && q.status === 'new').length,;'
    in_review: quotes && quotes.filter(q => q && q.status === 'in_review').length,;'
    accepted: quotes && quotes.filter(q => q && q.status === 'accepted').length,;'
    responded: quotes && quotes.filter(q => q && q.status === 'responded').length,;'
=======
  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />

  // Count quotes by status;
  const statusCounts = {;
    new: quotes && quotes.filter(q => q && q.status === 'new').length,;
    in_review: quotes && quotes.filter(q => q && q.status === 'in_review').length,;
    accepted: quotes && quotes.filter(q => q && q.status === 'accepted').length,;
    responded: quotes && quotes.filter(q => q && q.status === 'responded').length,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    closed: quotes && quotes.filter(q => q && q.status === 'closed').length;
  };

  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  };

<<<<<<< HEAD
  const handleResetFilters = () => {;'
    setStatusFilter('all');'
    setArchiveFilter('all');'
=======
  const handleResetFilters = () => {;
    setStatusFilter('all');
    setArchiveFilter('all');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined });
  };

<<<<<<< HEAD
  if (!isAdmin) {;"
=======
  if (!isAdmin) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return <Navigate to="/unauthorized" replace />;
  }
  return (

<<<<<<< HEAD
<<<<<<< HEAD
  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote)
    setShowDetails(true)
  }
  },

  const handleResetFilters = () => {
    setStatusFilter('all'),
    setArchiveFilter('all'),
    setSearchQuery(''),
    setDateRange({ from: undefined, to: undefined })
  }
  },

  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  return (
    <ProtectedRoute adminOnly>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>
              </div>
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />
            </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


            


            
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",;
=======
    deleteQuote            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    deleteQuote            
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

            
            
import React, { useState } from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import { ;
=======
"
import React, { useState } from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;"
import { useAuth } from "@/hooks/useAuth",;


import { ;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {;
  Card,;
  CardContent;"
} from "@/components/ui/card",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Navigate } from "react-router-dom",;"
import type { QuoteRequest } from "@/types/quotes",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;"
import { ExportToCSV } from "@/components/quotes/ExportToCSV",;
import {;
  QuoteStatusCards,;
  QuotesFilter,;
  QuotesTable;"
} from "@/components/admin/quotes",;
export default function QuoteManager() { return null; }
  const { user } = useAuth(),;'
  const isAdmin = user?.userType === 'admin',;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function QuoteManager() {;
  const { user } = useAuth(),;
=======

;
export default function QuoteManager() { return null; }
  const { user } = useAuth(),;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const isAdmin = user?.userType === 'admin',;
  ;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const {;
    quotes,;
    isLoading,;
    error,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    searchQuery,;
    setSearchQuery,;
    dateRange,;
    setDateRange,;
    updateStatus,;
    toggleArchive,;
    deleteQuote;
  } = useAdminQuotes(),;
<<<<<<< HEAD
=======
  // Count quotes by status;
  const statusCounts = {;
    new: quotes.filter(q => q.status === 'new').length,;
    in_review: quotes.filter(q => q.status === 'in_review').length,;
    accepted: quotes.filter(q => q.status === 'accepted').length,;
    responded: quotes.filter(q => q.status === 'responded').length,;
    closed: quotes.filter(q => q.status === 'closed').length;
  },;
  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Count quotes by status;
  const statusCounts = {;'
    new: quotes.filter(q => q.status === 'new').length,;'
    in_review: quotes.filter(q => q.status === 'in_review').length,;'
    accepted: quotes.filter(q => q.status === 'accepted').length,;'
    responded: quotes.filter(q => q.status === 'responded').length,;'
    closed: quotes.filter(q => q.status === 'closed').length;
  },;
  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  // Count quotes by status;
  const statusCounts = {;'
    new:quotes.filter(q => q.status === 'new').length,;'
    in_review:quotes.filter(q => q.status === 'in_review').length,;'
    accepted:quotes.filter(q => q.status === 'accepted').length,;'
    responded:quotes.filter(q => q.status === 'responded').length,;'
    closed:quotes.filter(q => q.status === 'closed').length;
  },;
;
  const handleViewDetails = (quote:QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

  const handleResetFilters = () => {;'
    setStatusFilter('all'),;'
    setArchiveFilter('all'),;'
    setSearchQuery(''),;
    setDateRange({ from: undefined, to: undefined });
  };
  if (!isAdmin) {;"
=======
  const handleResetFilters = () => {;
    setStatusFilter('all'),;
    setArchiveFilter('all'),;
    setSearchQuery(''),;
    setDateRange({ from: undefined, to: undefined });
  };
  if (!isAdmin) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return <Navigate to="/unauthorized" replace />;
  }
;
  return (;

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <ProtectedRoute adminOnly>;
      <div>;
        <Header />;"
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
          <div className="container mx-auto">;"
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;
              <div>;"
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>;"
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>;
              </div>;"
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />;
            </div>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;

            ;
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;
            ;
            {/* Filters */}
            <QuotesFilter;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;

import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { useAdminQuotes } from '@/hooks / useAdminQuotes';
import { use_auth } from '@/hooks / use_auth';
import { Card, CardContent } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Navigate } from './react-router-dom';
import type { QuoteRequest } from "@/types / quotes";
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { QuoteDetails } from '@/components / quotes / QuoteDetails';
import { ExportToCSV } from '@/components / quotes / ExportToCSV';
=======
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;
'
import React, { useState } from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { useAdminQuotes } from '@/hooks / useAdminQuotes';'
import { use_auth } from '@/hooks / use_auth';'
import { Card, CardContent } from '@/components / ui / card';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { Navigate } from './react-router-dom';"
import type { QuoteRequest } from "@/types / quotes";'
import { ProtectedRoute } from '@/components / ProtectedRoute';'
import { QuoteDetails } from '@/components / quotes / QuoteDetails';'
import { ExportToCSV } from '@/components / quotes / ExportToCSV';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { QuoteStatusCards, QuotesFilter, QuotesTable } from '@/components / admin / quotes';
;
export default /**;
 * QuoteManager - Function description;
 */
function QuoteManager() {}
  const { user } = use_auth ();'
  const is_admin = user?.user_type === 'admin';
;
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {}
    quotes;
    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;
    date_range;
    setDateRange;
  }
<<<<<<< HEAD
<<<<<<< HEAD
  return (                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
<<<<<<< HEAD
<<<<<<< HEAD
                    onViewDetails={handleViewDetails}
                  />;
                </Card>;
              </TabsContent>;
              ;
              <TabsContent value="archived">;
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
                  <QuotesTable;
                    quotes={quotes.filter(quote => quote.is_archived)}                    isArchived={true}
            />
            {/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Quotes</TabsTrigger>
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable
                    quotes={quotes.filter(quote => !quote.is_archived)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  return (

            {/* Filters */}
            <QuotesFilter;
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
              dateRange={dateRange}
              setDateRange={setDateRange}
              onReset={handleResetFilters}

            {/* Tabs for Active/Archived */}"
            <Tabs defaultValue="active" className="mb-6">;"
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;"
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;"
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;
              </TabsList>;

                {/* Quotes Table */}"
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
                  <QuotesTable;
                    quotes={quotes && quotes.filter(quote => !quote && quote.is_archived)}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}

<<<<<<< HEAD
=======
  return (
            {/* Filters */}
            <QuotesFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
              dateRange={dateRange}
              setDateRange={setDateRange}
              onReset={handleResetFilters}

            />;

            {/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;
              </TabsList>;

              <TabsContent value="active">;

                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
                  <QuotesTable
                    quotes={quotes && quotes.filter(quote => !quote && quote.is_archived)}
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  />;
                </Card>;
              </TabsContent>;

              <TabsContent value="archived">;
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;

                  <QuotesTable
                    quotes={quotes && quotes.filter(quote => quote && quote.is_archived)}
                    isArchived={true}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                  />;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;


<<<<<<< HEAD



                  />;
                </Card>;
              </TabsContent>;
                  <QuotesTable;
=======
                  />;
                </Card>;
              </TabsContent>;
                  <QuotesTable
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    quotes={quotes && quotes.filter(quote => quote && quote.is_archived)}
                    isArchived={true}
                  />
                </Card>
<<<<<<< HEAD
              </TabsContent>"
              <TabsContent value="archived">"
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable;
=======
              </TabsContent>
              <TabsContent value="archived">
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    quotes={quotes.filter(quote => quote.is_archived)}
                    isArchived={true}
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}


            </Tabs>;
          </div>;
        </div>;
        ;
        {/* Quote Details Modal */}
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}


          onClose={() => {;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Quote Details Modal */}
=======
                    onViewDetails={handleViewDetails}        {/* Quote Details Modal */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    onViewDetails={handleViewDetails}        {/* Quote Details Modal */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        {/* Quote Details Modal */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
=======



        {/* Quote Details Modal */}
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
          onClose={() => {;
            setShowDetails(false);
    update_status;
    toggle_archive;
    delete_quote;
  } = useAdminQuotes ();
;
  // Count quotes by status;
<<<<<<< HEAD
  const status_counts = {'
    new: quotes.filter (q => q.status === 'new').length,'
    in_review: quotes.filter (q => q.status === 'in_review').length,'
    accepted: quotes.filter (q => q.status === 'accepted').length,'
    responded: quotes.filter (q => q.status === 'responded').length,'
    closed: quotes.filter (q => q.status === 'closed').length;
  }
;
  const handleViewDetails = (quote: QuoteRequest) =>: any {}
=======
  const status_counts = {
    new: quotes.filter (q => q.status === 'new').length,
    in_review: quotes.filter (q => q.status === 'in_review').length,
    accepted: quotes.filter (q => q.status === 'accepted').length,
    responded: quotes.filter (q => q.status === 'responded').length,
    closed: quotes.filter (q => q.status === 'closed').length;
  }
;
  const handleViewDetails = (quote: QuoteRequest) =>: any {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setSelectedQuote (quote),
    setShowDetails (true);
  }
;
<<<<<<< HEAD
  const handleResetFilters = () =>: any {'
    setStatusFilter ('all');'
    setArchiveFilter ('all');'
=======
  const handleResetFilters = () =>: any {
    setStatusFilter ('all');
    setArchiveFilter ('all');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setSearchQuery ('');
    setDateRange ({ from: undefined, to: undefined });
  }
;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}"
=======
  // Check condition
if ( {) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return <Navigate to="/unauthorized" replace />;
  }
  return (
    <ProtectedRoute admin_only>;
      <div>;
<<<<<<< HEAD
        <Header />;"
        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
          <div className="container mx - auto">;"
            <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 8">;
              <div>;"
                <h1 className="text - 3xl font - bold text - white mb - 2">Quote Request Manager</h1>;"
                <p className="text - zion - slate - light">Manage and respond to all talent hire requests</p>;
              </div>;"
=======
        <Header />;
        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;
          <div className="container mx - auto">;
            <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 8">;
              <div>;
                <h1 className="text - 3xl font - bold text - white mb - 2">Quote Request Manager</h1>;
                <p className="text - zion - slate - light">Manage and respond to all talent hire requests</p>;
              </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <ExportToCSV quotes={quotes} filename="zion - quote - requests" />;
            </div>;
            {/* Status Summary Cards */}
            <QuoteStatusCards status_counts={status_counts} />;
            {/* Filters */}
            <QuotesFilter;
              search_query={search_query}
              setSearchQuery={setSearchQuery}
              status_filter={status_filter}
              setStatusFilter={setStatusFilter}
              archive_filter={archive_filter}
              setArchiveFilter={setArchiveFilter}
              date_range={date_range}
              setDateRange={setDateRange}
              on_reset={handleResetFilters}
            />;
<<<<<<< HEAD
            {/* Tabs for Active / Archived */}"
            <Tabs default_value="active" className="mb - 6">;"
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;"
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;"
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;
              </TabsList>;"
              <TabsContent value="active">;
                {/* Quotes Table */}"
=======
            {/* Tabs for Active / Archived */}
            <Tabs default_value="active" className="mb - 6">;
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;
              </TabsList>;
              <TabsContent value="active">;
                {/* Quotes Table */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;
                  <QuotesTable;
                    quotes={quotes.filter (quote => !quote.is_archived)}
                    is_loading={is_loading}
                    update_status={update_status}
                    toggle_archive={toggle_archive}
                    delete_quote={delete_quote}
                    onViewDetails={handleViewDetails}
                  />;
                </Card>;
<<<<<<< HEAD
              </TabsContent>;"
              <TabsContent value="archived">;"
=======
              </TabsContent>;
              <TabsContent value="archived">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;
                  <QuotesTable;
                    quotes={quotes.filter (quote => quote.is_archived)}
                    is_archived={true}
                    is_loading={is_loading}
                    update_status={update_status}
                    toggle_archive={toggle_archive}
                    delete_quote={delete_quote}
                    onViewDetails={handleViewDetails}
                  />;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        {/* Quote Details Modal */}
        <QuoteDetails;
          quote={selected_quote}
          is_open={show_details}
<<<<<<< HEAD
          on_close={() => {}
=======
          on_close={() => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            setShowDetails (false);
            setSelectedQuote (null);
          }}
        />;
        <Footer />;
      </div>;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            setShowDetails(false),;
            setSelectedQuote(null),;
          }}
        />;
        ;
        <Footer />;
      </div>;
    </ProtectedRoute>;
  ),;}
 import {
  QuoteStatusCards;
QuotesFilter;
QuotesTable export default function QuoteManager () {
  const {
  user 
}= useAuth ();
const isAdmin = user?.userType === 'admin';
const [showDetails, setShowDetails] = useState (false);
}min-h-screen bg-zion-blue px-4 py-8"> <div className=" container mx-auto"> <div className=" flex flex-col md:flex-row justify-between items-start md:items-center mb-8"> <div> <h1 className=" text-3xl font-bold text-white mb-2">Quote Request Manager</h1> <p className=" text-zion-slate-light">Manage and respond to all talent hire requests</p> </div> </div> {
  /* Status Summary Cards */ 
}<QuoteStatusCards statusCounts= {
  statusCounts 
}/> {
  /* Filters */ 
}<QuotesFilter searchQuery= {
  searchQuery 
}setSearchQuery= {
  setSearchQuery 
}statusFilter= {
  statusFilter 
}setStatusFilter= {
  setStatusFilter 
}archiveFilter= {
  archiveFilter 
}setArchiveFilter= {
  setArchiveFilter 
}dateRange= {
  dateRange 
}setDateRange= {
  setDateRange 
}onReset= {
  handleResetFilters 
}/> <QuotesTable quotes= {
  quotes.filter (quote => !quote.is archived) 
}isLoading= {
  isLoading 
}updateStatus= {
  updateStatus 
}toggleArchive= {
  toggleArchive 
}deleteQuote= {
  deleteQuote 
}onViewDetails= {
  handleViewDetails 
}/> </Card> </TabsContent> <TabsContent value=" archived"> <Card className=" bg-zion-blue-dark border border-zion-blue-light overflow-hidden" > <QuotesTable quotes= {
  quotes.filter (quote => quote.is archived) 
}isArchived= {
  true 
}isLoading= {
  isLoading 
}updateStatus= {
  updateStatus 
}toggleArchive= {
  toggleArchive 
}deleteQuote= {
  deleteQuote 
}onViewDetails= {
  handleViewDetails 
}/> </Card> </TabsContent> </Tabs> </div> </div> {
  /* Quote Details Modal */ 
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>) 
}
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
