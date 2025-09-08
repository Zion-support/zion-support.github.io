

import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAdminQuotes} from "@/hooks/useAdminQuotes";
import {useAuth} from "@/hooks/useAuth";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {Navigate} from "react-router-dom";

export default function QuoteManager() {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';

import React, { useState } from "react",
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
import type { QuoteRequest } from "@/types/quotes";

import type { QuoteRequest } from "@/types/quotes";
"
import {ProtectedRoute} from "@/components/ProtectedRoute";"
import {QuoteDetails} from "@/components/quotes/QuoteDetails";"
import {ExportToCSV} from "@/components/quotes/ExportToCSV";"
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";



  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);


  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);



  } = useAdminQuotes(),



  // Count quotes by status;
  const statusCounts = {;
    new: quotes && quotes.filter(q => q && q.status === 'new').length,;
    in_review: quotes && quotes.filter(q => q && q.status === 'in_review').length,;
    accepted: quotes && quotes.filter(q => q && q.status === 'accepted').length,;
    responded: quotes && quotes.filter(q => q && q.status === 'responded').length,;
    closed: quotes && quotes.filter(q => q && q.status === 'closed').length;
  };
  const handleResetFilters = () => {;
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined });
  };
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" replace />;
  }
  return (
  }
  },

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

import { ExportToCSV } from "@/components/quotes/ExportToCSV",;
import {;

  const { user } = useAuth(),;

  const isAdmin = user?.userType === 'admin',;

  ;
;


;
  // Count quotes by status;
  const statusCounts = {;
    new:quotes.filter(q => q.status === 'new').length,;
    in_review:quotes.filter(q => q.status === 'in_review').length,;
    accepted:quotes.filter(q => q.status === 'accepted').length,;
    responded:quotes.filter(q => q.status === 'responded').length,;

  const handleResetFilters = () => {;
    setStatusFilter('all'),;
    setArchiveFilter('all'),;
    setSearchQuery(''),;
    setDateRange({ from: undefined, to: undefined });
  };
  if (!isAdmin) {;





            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;







                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable







        {/* Quote Details Modal */}






          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )




