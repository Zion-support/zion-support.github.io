
<<<<<<< HEAD

interface PartnerProfile {
=======
import {useState, useEffect} from "react";
import {useAuth} from "@/hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {toast} from "@/hooks/use-toast";
import {Check, Flag, Search, Settings, X} from "lucide-react";
import {supabase} from "@/integrations/supabase/client";

import { useState, useEffect } from "react",
import { useAuth } from "@/hooks/useAuth",
import { useNavigate } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",
import { toast } from "@/hooks/use-toast",
import { Check, Flag, Search, Settings, X } from "lucide-react";

  social_media?: Record < string, string>;
  website?: string;
  bio?: string;
  payout_method?: string;
  fraud_flags?: number;
  commission_rate?: number;
}
  const [isLoading, setIsLoading] = useState(true);"
  const [searchQuery, setSearchQuery] = useState("");"

  const [isLoading, setIsLoading] = useState(true),
  const [searchQuery, setSearchQuery] = useState(""),
  const [activeTab, setActiveTab] = useState("pending"),
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),
  const [isDetailsOpen, setIsDetailsOpen] = useState(false),
  const [isSettingsOpen, setIsSettingsOpen] = useState(false),
  const [commissionRate, setCommissionRate] = useState(25),
  const { user, isAuthenticated } = useAuth(),
  const navigate = useNavigate(),
  const navigate = useNavigate();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
  useEffect(() => {;
    if (!isAuthenticated) {;
      navigate("/login");
      return
    }
      navigate("/login");
      return
    }
    fetchPartners()
  }, [isAuthenticated, navigate]);
  const fetchPartners = async () => {
    try {
      setIsLoading(true);
      // In a real application, check admin permissions here
      const { data, error } = await supabase
        .from('partner_profiles')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error;
      // If no data is returned, use mock data
      if (!data |data.length === 0) {
        const mockData: PartnerProfile[] = [
          {
            id: '1'
            user_id: 'user1'
            name: 'AI Bytes'
            status: 'pending'
            created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
            niche: 'AI Tutorials'
            audience_size: '10k-50k'
            social_media: { twitter: '@aibytes', youtube: 'AI Bytes' }
            website: 'aibytes.com'
            bio: 'We create AI tutorials and insights for developers.'
            payout_method: 'paypal'
            fraud_flags: 0
            commission_rate: 25
          }
          {
            id: '2'
            user_id: 'user2'
            name: 'ML Academy'
            status: 'approved'
            created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString()
            niche: 'Machine Learning Education'
            audience_size: 'over100k'
            social_media: { twitter: '@mlacademy', youtube: 'ML Academy' }
            website: 'mlacademy.edu'
            bio: 'Premiere online academy for machine learning enthusiasts.'
            payout_method: 'bank'
            fraud_flags: 0
            commission_rate: 30
          }
          {
            id: '3'
            user_id: 'user3'
            name: 'Tech Insights'
            status: 'rejected'
            created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
            niche: 'Technology News'
            audience_size: '1k-10k'
            social_media: { twitter: '@techinsights' }
            website: 'techinsights.io'
            bio: 'We share insights about the latest in tech.'
            payout_method: 'crypto'
            fraud_flags: 2
            commission_rate: 20
          }
          {
            id: '4'
            user_id: 'user4'
            name: 'CodeMaster'
            status: 'approved'
            created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
            niche: 'Coding Tutorials'
            audience_size: '50k-100k'
            social_media: { youtube: 'CodeMaster', linkedin: 'codemaster' }
            website: 'codemaster.dev'
            bio: 'Learn to code with our expert tutorials.'
            payout_method: 'paypal'
            fraud_flags: 0
            commission_rate: 25
          }
          {
            id: '5'
            user_id: 'user5'
            name: 'AI Daily'
            status: 'pending'
            created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
            niche: 'AI News'
            audience_size: '10k-50k'
            social_media: { twitter: '@aidaily', instagram: '@aidailynews' }
            website: 'aidaily.news'
            bio: 'Daily updates on the world of artificial intelligence.'
            payout_method: 'platform_credit'
            fraud_flags: 1
            commission_rate: 20
          }
        ];
        setPartners(mockData);
        filterPartners(mockData, activeTab, searchQuery)
      } else {
        setPartners(data as PartnerProfile[]);
        filterPartners(data as PartnerProfile[], activeTab, searchQuery)
export default function PartnerManager() {
  const [partners, setPartners] = useState<PartnerProfile[]>([]),
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [searchQuery, setSearchQuery] = useState(""),
  const [activeTab, setActiveTab] = useState("pending"),
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),
  const [isDetailsOpen, setIsDetailsOpen] = useState(false),
  const [isSettingsOpen, setIsSettingsOpen] = useState(false),
  const [commissionRate, setCommissionRate] = useState(25),
  const { user, isAuthenticated } = useAuth(),
  const navigate = useNavigate(),

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"),
      return
import { useState, useEffect } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { useNavigate } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { toast } from "@/hooks/use-toast",;
import { Check, Flag, Search, Settings, X } from "lucide-react",;
import { supabase } from "@/integrations/supabase/client",;
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
import React from 'react';

import {useState, useEffect} from "react";
import {useAuth} from "@/hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {toast} from "@/hooks/use-toast";
import {Check, Flag, Search, Settings, X} from "lucide-react";
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from "react",
import { useAuth } from "@/hooks/useAuth",
import { useNavigate } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",
import { toast } from "@/hooks/use-toast",
import { Check, Flag, Search, Settings, X } from "lucide-react";
interface PartnerProfile {;
  id: string,;
  user_id: string,;
  name: string,;
  status: 'pending' | 'approved' | 'rejected',;
  created_at: string,;
  niche: string,;
  audience_size: string,;

import { supabase } from "@/integrations/supabase/client";
interface PartnerProfile {}
  id: string;
  user_id: string;
  name: string;
  status: 'pending' | 'approved' | 'rejected'
  created_at: string;
  niche: string;
  audience_size: string;
  social_media?: Record<string, string>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

  id: string,
  user_id: string,
  name: string,'
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,

<<<<<<< HEAD



interface PartnerProfile {

  id: string,
  user_id: string,
  name: string,'
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  website?: string;
  bio?: string;
  payout_method?: string;
  fraud_flags?: number;
  commission_rate?: number;
}
  const [isLoading, setIsLoading] = useState(true);"
  const [searchQuery, setSearchQuery] = useState("");"
<<<<<<< HEAD

  const [activeTab, setActiveTab] = useState("pending");
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();
=======
  const [activeTab, setActiveTab] = useState("pending");"
const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),;


>>>>>>> origin/cursor/delete-old-data-records-6bba



  useEffect(() => {;
    if (!isAuthenticated) {;



      navigate("/login");
      return;
    }


<<<<<<< HEAD

=======
    fetchPartners();
  }, [isAuthenticated, navigate]);
  const fetchPartners = async () => {;
    try {;
      setIsLoading(true);
  social_media?: Record<string string>,;
  website?: string,;
  bio?: string,;
  payout_method?: string,;
  fraud_flags?: number,;
  commission_rate?: number;
}
;
export default function PartnerManager() {;
  const [partners, setPartners] = useState<PartnerProfile[]>([]),;
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [activeTab, setActiveTab] = useState("pending"),;
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),;
  const [isDetailsOpen, setIsDetailsOpen] = useState(false),;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false),;
  const [commissionRate, setCommissionRate] = useState(25),;
  const { user, isAuthenticated } = useAuth(),;
  const navigate = useNavigate(),;
  useEffect(() => {;
    if (!isAuthenticated) {;
      navigate("/login"),;
      return;
    }
;
    fetchPartners();
  }, [isAuthenticated, navigate]),;
  const fetchPartners = async () => {;
    try {;
      setIsLoading(true),;
      // In a real application, check admin permissions here;
      const { data, error } = await supabase;
        .from('partner_profiles');
        .select('*');
        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      // If no data is returned, use mock data;
      if (!data || data.length === 0) {;
        const mockData: PartnerProfile[] = [;
          {;
            id: '1',;
            user_id: 'user1',;
            name: 'AI Bytes',;
            status: 'pending',;
            created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),;
            niche: 'AI Tutorials',;
            audience_size: '10k-50k',;
            social_media: { twitter: '@aibytes', youtube: 'AI Bytes' },;
            website: 'aibytes.com',;
            bio: 'We create AI tutorials and insights for developers.',;
            payout_method: 'paypal',;
            fraud_flags: 0,;
            commission_rate: 25;
          },;
          {;
            id: '2',;
            user_id: 'user2',;
            name: 'ML Academy',;
            status: 'approved',;
            created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),;
            niche: 'Machine Learning Education',;
            audience_size: 'over100k',;
            social_media: { twitter: '@mlacademy', youtube: 'ML Academy' },;
            website: 'mlacademy.edu',;
            bio: 'Premiere online academy for machine learning enthusiasts.',;
            payout_method: 'bank',;
            fraud_flags: 0,;
            commission_rate: 30;
          },;
          {;
            id: '3',;
            user_id: 'user3',;
            name: 'Tech Insights',;
            status: 'rejected',;
            created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),;
            niche: 'Technology News',;
            audience_size: '1k-10k',;
            social_media: { twitter: '@techinsights' },;
            website: 'techinsights.io',;
            bio: 'We share insights about the latest in tech.',;
            payout_method: 'crypto',;
            fraud_flags: 2,;
            commission_rate: 20;
          },;
          {;
            id: '4',;
            user_id: 'user4',;
            name: 'CodeMaster',;
            status: 'approved',;
            created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),;
            niche: 'Coding Tutorials',;
            audience_size: '50k-100k',;
            social_media: { youtube: 'CodeMaster', linkedin: 'codemaster' },;
            website: 'codemaster.dev',;
            bio: 'Learn to code with our expert tutorials.',;
            payout_method: 'paypal',;
            fraud_flags: 0,;
            commission_rate: 25;
          },;
          {;
            id: '5',;
            user_id: 'user5',;
            name: 'AI Daily',;
            status: 'pending',;
            created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),;
            niche: 'AI News',;
            audience_size: '10k-50k',;
            social_media: { twitter: '@aidaily', instagram: '@aidailynews' },;
            website: 'aidaily.news',;
            bio: 'Daily updates on the world of artificial intelligence.',;
            payout_method: 'platform_credit',;
            fraud_flags: 1,;
            commission_rate: 20;
          }
>>>>>>> origin/cursor/delete-old-data-records-6bba

        setPartners(mockData);
        filterPartners(mockData, activeTab, searchQuery);
      } else {;
        setPartners(data as PartnerProfile[]);
        filterPartners(data as PartnerProfile[], activeTab, searchQuery);

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default /**
 * PartnerManager - Function description

 */
function PartnerManager() {}
  const [partners, set_partners] = useState < PartnerProfile[]>([]);
  const [filtered_partners, setFilteredPartners] = useState < PartnerProfile[]>([]);
  const [is_loading, setIsLoading] = useState (true);"
  const [search_query, setSearchQuery] = useState ("");"
  const [active_tab, setActiveTab] = useState ("pending");
  const [selected_partner, setSelectedPartner] = useState < PartnerProfile | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState (false);
  const [isSettingsOpen, setIsSettingsOpen] = useState (false);
  const [commission_rate, setCommissionRate] = useState (25);
  const { user, is_authenticated } = use_auth ();
  const navigate = use_navigate ();
;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}"
      navigate ("/login");
      return;
    }
    fetch_partners ();
  }, [is_authenticated, navigate]);
;
  const fetch_partners = async () => {}
    try {}
      setIsLoading (true);
      // In a real application, check admin permissions here;
<<<<<<< HEAD

      const { data, error } = await supabase;'

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .from ('partner_profiles');'
        .select ('*');'
        .order ('created_at', { ascending: false }),
      // Check condition;
if (throw error) {}
  $2;
}
      // If no data is returned, use mock data;
      // Check condition;
if ( {) {}
  $2;
}
        const mock_data: PartnerProfile[] = [;
          {'
            id: '1','
            user_id: 'user1','
            name: 'AI Bytes','
            status: 'pending',
            created_at: new Date (Date.now () - 2 * 24 * 60 * 60 * 1000).toISOString (),'
            niche: 'AI Tutorials','
            audience_size: '10k - 50k','
            social_media: { twitter: '@aibytes', youtube: 'AI Bytes' },'
            website: 'aibytes.com','
            bio: 'We create AI tutorials and insights for developers.','
            payout_method: 'paypal',
            fraud_flags: 0,
            commission_rate: 25;
          }
          {'
            id: '2','
            user_id: 'user2','
            name: 'ML Academy','
            status: 'approved',
            created_at: new Date (Date.now () - 15 * 24 * 60 * 60 * 1000).toISOString (),'
            niche: 'Machine Learning Education','
            audience_size: 'over100k','
            social_media: { twitter: '@mlacademy', youtube: 'ML Academy' },'
            website: 'mlacademy.edu','
            bio: 'Premiere online academy for machine learning enthusiasts.','
            payout_method: 'bank',
            fraud_flags: 0,
            commission_rate: 30;
          }
          {'
            id: '3','
            user_id: 'user3','
            name: 'Tech Insights','
            status: 'rejected',
            created_at: new Date (Date.now () - 5 * 24 * 60 * 60 * 1000).toISOString (),'
            niche: 'Technology News','
            audience_size: '1k - 10k','
            social_media: { twitter: '@techinsights' },'
            website: 'techinsights.io','
            bio: 'We share insights about the latest in tech.','
            payout_method: 'crypto',
            fraud_flags: 2,
            commission_rate: 20;
          }
          {'
            id: '4','
            user_id: 'user4','
            name: 'CodeMaster','
            status: 'approved',
            created_at: new Date (Date.now () - 30 * 24 * 60 * 60 * 1000).toISOString (),'
            niche: 'Coding Tutorials','
            audience_size: '50k - 100k','
            social_media: { youtube: 'CodeMaster', linkedin: 'codemaster' },'
            website: 'codemaster.dev','
            bio: 'Learn to code with our expert tutorials.','
            payout_method: 'paypal',
            fraud_flags: 0,
            commission_rate: 25;
          }
          {'
            id: '5','
            user_id: 'user5','
            name: 'AI Daily','
            status: 'pending',
            created_at: new Date (Date.now () - 1 * 24 * 60 * 60 * 1000).toISOString (),'
            niche: 'AI News','
            audience_size: '10k - 50k','
            social_media: { twitter: '@aidaily', instagram: '@aidailynews' },'
            website: 'aidaily.news','
            bio: 'Daily updates on the world of artificial intelligence.','
            payout_method: 'platform_credit',
            fraud_flags: 1,
            commission_rate: 20;
          }
        ];
;
        set_partners (mock_data);
        filter_partners (mock_data, active_tab, search_query);
      } else {}
        set_partners (data as PartnerProfile[]);
        filter_partners (data as PartnerProfile[], active_tab, search_query);


<<<<<<< HEAD

      }

      }
      console.error ("Error fetching partners:", error);
      toast ({
        title: "Error",
        description: "Failed to load partner data",
        variant: "destructive"});
    } finally {
      setIsLoading (false);
    }
  }
        ],;
        setPartners(mockData),;
        filterPartners(mockData, activeTab, searchQuery);
      } else {;
        setPartners(data as PartnerProfile[]),;
        filterPartners(data as PartnerProfile[], activeTab, searchQuery);
      }
    } catch (error) {
      console.error("Error fetching partners:", error),
      toast({
        title: "Error"
        description: "Failed to load partner data"
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }

  },




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {
    let filtered = partners
    // Filter by status
    if (status !== "all") {

      filtered = filtered.filter(p => p.status === status)

    } catch (error) {;
      console.error("Error fetching partners:", error),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast({;
        title: "Error",,
  description: "Failed to load partner data",;
        variant: "destructive"});
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  };

  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {;
    let filtered = partners,;

    // Filter by status;"
    if (status !== "all") {;
      filtered = filtered && filtered.filter(p => p && p.status === status);
    }

    // Filter by search query;
    if (query) {;
      const lowerQuery = query && query.toLowerCase();
      filtered = filtered && filtered.filter(p => ;
        p && p.name.toLowerCase().includes(lowerQuery) ||;
        p && p.niche.toLowerCase().includes(lowerQuery) ||;
        p && p.bio?.toLowerCase().includes(lowerQuery) ||;
        p && p.website?.toLowerCase().includes(lowerQuery);
      );
    }

    
    setFilteredPartners(filtered)
  },

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {}

>>>>>>> origin/cursor/delete-old-data-records-6bba
    setSearchQuery(e.target.value)
    filterPartners(partners, activeTab, e.target.value)

  const handleTabChange = (value: string) => {}
    setActiveTab(value)
    filterPartners(partners, value, searchQuery)

  const handleViewDetails = (partner: PartnerProfile) => {}
    setSelectedPartner(partner)
    setIsDetailsOpen(true)

<<<<<<< HEAD



  },

  const handleOpenSettings = (partner: PartnerProfile) => {
    setSelectedPartner(partner),
    setCommissionRate(partner.commission_rate || 25),
    setIsSettingsOpen(true)
  },





=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {
    try {
      // In a real app, this would update the database
      setPartners(partners.map(p =>
        p.id === partnerId ? { ...p, status } : p
<<<<<<< HEAD




=======
      )),
      

      ));
      )),
      
      filterPartners(
        partners.map(p => p.id === partnerId ? { ...p, status } : p),
        activeTab,
        searchQuery
      ),
      

      );
      ),
      
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast({

        title: status === 'approved' ? "Partner Approved" : "Partner Rejected"
        description: `The partner has been ${status}.`'"
        variant: status === 'approved' ? "default" : "destructive"})
      // Close the dialog if open;
      if (isDetailsOpen && selectedPartner?.id === partnerId) {}
        setIsDetailsOpen(false)
      }
<<<<<<< HEAD

    } catch (error) {

    try {
      // Update commission rate

      setPartners(partners.map(p =>
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p


=======

    }

    try {
      // Update commission rate
      setPartners(partners.map(p => 
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate} : p
      )),
      
      filterPartners($2);
      toast({;
        title: status === 'approved' ? "Partner Approved" : "Partner Rejected",;
        description: `The partner has been ${status}.`,;
        variant: status === 'approved' ? "default" : "destructive"}),;
      // Close the dialog if open;
      if (isDetailsOpen && selectedPartner?.id === partnerId) {;
        setIsDetailsOpen(false);
      }
    } catch (error) {;
      console && console.error("Error updating partner status:", error);
      toast({;
        title: "Error",;
        description: "Failed to update partner status",;
        variant: "destructive"});
    }
  };
  const handleSaveSettings = async () => {;
    if (!selectedPartner) return;
    try {;
      // Update commission rate;
      setPartners(partners && partners.map(p => ;
        p && p.id === selectedPartner && selectedPartner.id ? { ...p, commission_rate: commissionRate } : p;
      ));
      filterPartners(;
        partners && partners.map(p => p && p.id === selectedPartner && selectedPartner.id ? { ...p, commission_rate: commissionRate } : p),;
      ));
      filterPartners(
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p)
        activeTab;
        searchQuery
      );
      )),
      
      filterPartners(
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p),
>>>>>>> origin/cursor/delete-old-data-records-6bba
        activeTab,
        searchQuery
      ),
      
<<<<<<< HEAD
=======
      toast($2);
      setIsSettingsOpen(false)
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: "Failed to update partner settings",
        variant: "destructive"})
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba


      toast({
        title: "Settings Updated"
        description: "Partner settings have been updated successfully."

        variant: "default"})
      setIsSettingsOpen(false)
<<<<<<< HEAD

    } catch (error) {
=======

    } catch (error) {"
      console.error("Error updating partner settings:", error),
      toast({"
        title: "Error""
        description: "Failed to update partner settings""
        variant: "destructive"})

  };

>>>>>>> origin/cursor/delete-old-data-records-6bba

;
    setFilteredPartners(filtered);
  },;
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {;
    setSearchQuery(e.target.value),;
    filterPartners(partners, activeTab, e.target.value);
  },;
  const handleTabChange = (value: string) => {;
    setActiveTab(value),;
    filterPartners(partners, value, searchQuery);
  },;
  const handleViewDetails = (partner: PartnerProfile) => {;
    setSelectedPartner(partner),;
    setIsDetailsOpen(true);
  },;
  const handleOpenSettings = (partner: PartnerProfile) => {;
    setSelectedPartner(partner),;
    setCommissionRate(partner.commission_rate || 25),;
    setIsSettingsOpen(true);
  },;'
  const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {;
    try {;
      // In a real app, this would update the database;
      setPartners(partners.map(p =>;
        p.id === partnerId ? { ...p, status } : p;
      )),;
      filterPartners(;
        partners.map(p => p.id === partnerId ? { ...p, status } : p),;
        activeTab,;
        activeTab;
        searchQuery;

<<<<<<< HEAD
      ),;
      toast({;
        title: status === 'approved' ? "Partner Approved" : "Partner Rejected",;
        description: `The partner has been ${status}.`,;
        variant: status === 'approved' ? "default" : "destructive"}),;
      // Close the dialog if open;
      if (isDetailsOpen && selectedPartner?.id === partnerId) {;
        setIsDetailsOpen(false);
      }
    } catch (error) {;
      console.error("Error updating partner status:", error),;
      toast({;
        title: "Error",;
        description: "Failed to update partner status",;
        variant: "destructive"});
    }
  },;
  const handleSaveSettings = async () => {;
    if (!selectedPartner) return,;
    try {;
      // Update commission rate;
      setPartners(partners.map(p =>;
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p;
      )),;
      filterPartners(;
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p),;
        activeTab,;
        searchQuery;
      ),;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      case 'under1k': return 'Under 1,000';
      case '1k-10k': return '1,000 - 10,000';
      case '10k-50k': return '10,000 - 50,000';
      case '50k-100k': return '50,000 - 100,000';

      case 'over100k': return 'Over 100,000';
      default: return size;
    }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>;
      case 'approved':;
        return <Badge variant="outline" className="bg-green-900/30 text-green-500 border-green-600">Approved</Badge>;

<<<<<<< HEAD
  },

  const getFraudFlagBadge = (flags: number = 0) => {
    if (flags === 0) return null


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      case 'rejected':;

        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>,;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
<<<<<<< HEAD

  };

=======


    return (
"
      <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1">"
        <Flag className="h-3 w-3" />

>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  const getStatusBadge = (status: string) => {;
    switch (status) {;'
      case 'pending':;"
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>,;'
      case 'approved':;"
        return <Badge variant="outline" className="bg-green-900/30 text-green-500 border-green-600">Approved</Badge>,;'
      case 'rejected':;"
        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>,;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  },;
  const getFraudFlagBadge = (flags: number = 0) => {;
    if (flags === 0) return null,;
    return (;"
      <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1">;"
        <Flag className="h-3 w-3" />;
        {flags}
      </Badge>;
    );
  },;
  return (;"
    <div className="container max-w-7xl py-10">;"
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
        <div>;"
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Management</h1>;"
          <p className="text-zion-slate-light">Approve and manage affiliate partners</p>;
        </div>;
      </div>;"
      <Card className="bg-zion-blue-dark border-zion-blue-light mb-8">;"
        <CardHeader className="pb-3">;
          <CardTitle>Overview</CardTitle>;
        </CardHeader>;
        <CardContent>;"
          <div className="grid gap-4 md:grid-cols-3">;"
            <Card className="bg-zion-blue border-zion-blue-light">;"
              <CardHeader className="pb-2">;"
                <CardTitle className="text-sm font-medium text-zion-slate-light">;
                  Pending Applications;

<<<<<<< HEAD
                </CardTitle>;
                <div className="text-2xl font-bold text-white">;


                  {partners.filter(p => p.status === 'pending').length}
                </div>
              </CardHeader>"
              <CardContent className="pt-0">"
                <p className="text-xs text-zion-slate-light">
                  Partners waiting for review and approval;
                </p>
              </CardContent>
            </Card>"
            <Card className="bg-zion-blue border-zion-blue-light">"
              <CardHeader className="pb-2">"
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Active Partners;
                </CardTitle>"
                <div className="text-2xl font-bold text-white">'
                  {partners.filter(p => p.status === 'approved').length}



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>
              </CardHeader>"
              <CardContent className="pt-0">"
                <p className="text-xs text-zion-slate-light">

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  Total potential fraud flags detected

                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
<<<<<<< HEAD

      </Card>"
      <Card className="bg-zion-blue-dark border-zion-blue-light">"

=======
      </Card>"
      <Card className="bg-zion-blue-dark border-zion-blue-light">"
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <CardHeader className="pb-3 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <CardTitle>Partners</CardTitle>
            <CardDescription>Manage partnership applications and settings</CardDescription>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>"
          <div className="w-full md:w-80">"
            <div className="relative">"
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light" />

                  Total potential fraud flags detected;
                </p>;
              </CardContent>;
            </Card>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD

;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader className="pb-3 flex flex-col md:flex-row justify-between md:items-center gap-4">;
          <div>;
            <CardTitle>Partners</CardTitle>;
            <CardDescription>Manage partnership applications and settings</CardDescription>;
          </div>;
          <div className="w-full md:w-80">;
            <div className="relative">;
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light" />;
              <Input;
                placeholder="Search partners...";
                className="pl-8";
                value={searchQuery}
                onChange={handleSearch}
              />;
            </div>;
          </div>;
        </CardHeader>;
        <CardContent>;
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">;
            <TabsList className="grid grid-cols-4 w-full md:w-auto">;
              <TabsTrigger value="pending">Pending</TabsTrigger>;
              <TabsTrigger value="approved">Approved</TabsTrigger>;
              <TabsTrigger value="rejected">Rejected</TabsTrigger>;
              <TabsTrigger value="all">All</TabsTrigger>;
            </TabsList>;
            ;
            <TabsContent value="pending" className="space-y-4">;
              <PartnerTable ;
                partners={filteredPartners} ;                isLoading={isLoading}
              <PartnerTable
                partners={filteredPartners}
              <PartnerTable 
                partners={filteredPartners} 
                isLoading={isLoading}
            <TabsContent value="pending" className="space-y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
>>>>>>> origin/cursor/delete-old-data-records-6bba


                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
<<<<<<< HEAD
                getFraudFlagBadge={getFraudFlagBadge}





                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}


                isLoading={isLoading}
              />;
            </TabsContent>;
            <TabsContent value="approved" className="space-y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
                isLoading={isLoading}
              />;
            </TabsContent>;
            <TabsContent value="rejected" className="space-y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
            <TabsContent value="all" className="space-y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              <div className="grid grid-cols-2 gap-2">
                <div>"
                  <p className="text-xs text-zion-slate-light">Payout Method</p>"
                  <p className="text-white capitalize">{selectedPartner.payout_method |"Not specified"}</p>
                </div>
                <div>"
                  <p className="text-xs text-zion-slate-light">Commission Rate</p>"
                  <p className="text-white">{selectedPartner.commission_rate |25}%</p>
                </div>
              </div>
              {selectedPartner.fraud_flags && selectedPartner.fraud_flags > 0 && ("
                <Alert className="bg-red-900/20 border-red-900/50 text-red-500">"
                  <AlertTitle className="flex items-center gap-2">"
              />
            </TabsContent>
            <TabsContent value="rejected" className="space-y-4">
              <PartnerTable
                partners={filteredPartners}
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus} 
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
            <TabsContent value="all" className="space-y-4">
              <PartnerTable 
                partners={filteredPartners} 
            ;
            <TabsContent value="rejected" className="space-y-4">;
              <PartnerTable ;
                partners={filteredPartners} ;                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus} ;
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />;
            </TabsContent>;
            ;
            <TabsContent value="all" className="space-y-4">;
              <PartnerTable ;
                partners={filteredPartners} ;                isLoading={isLoading}
                isLoading={isLoading}
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}


<<<<<<< HEAD

=======
                isLoading={isLoading}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
<<<<<<< HEAD

                getFraudFlagBadge={getFraudFlagBadge}

=======


              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}

>>>>>>> origin/cursor/delete-old-data-records-6bba
              <div className="grid grid-cols-2 gap-2">
                <div>"
                  <p className="text-xs text-zion-slate-light">Payout Method</p>"
                  <p className="text-white capitalize">{selectedPartner.payout_method |"Not specified"}</p>
                </div>
                <div>"
                  <p className="text-xs text-zion-slate-light">Commission Rate</p>"
                  <p className="text-white">{selectedPartner.commission_rate |25}%</p>
                </div>
              </div>
              {selectedPartner.fraud_flags && selectedPartner.fraud_flags > 0 && ("
                <Alert className="bg-red-900/20 border-red-900/50 text-red-500">"
                  <AlertTitle className="flex items-center gap-2">"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <Flag className="h-4 w-4" />
                    Potential Fraud Detected ({selectedPartner.fraud_flags})
                  </AlertTitle>
                  <AlertDescription>
                    This application has triggered our fraud detection system. Review carefully before approving.
                  </AlertDescription>
                </Alert>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              )}'
              {selectedPartner.status === 'pending' && ("
                <div className="flex justify-end gap-2 mt-4">

<<<<<<< HEAD
=======
                  >

                    <X className="h-4 w-4 mr-1" />
                    Reject;
                  </Button>
                  <Button"
                    className="bg-green-600 hover:bg-green-700"'
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'approved')}
                  >"
                    <Check className="h-4 w-4 mr-1" />
                    Approve;
                  <Button
                    variant="destructive"
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'rejected')}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                  <Button
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'approved')}
                  >
                    <Check className = $2;
  isLoading: boolean,
  onViewDetails: (partner: PartnerProfile) => void,
  onUpdateStatus: (partnerId: string, status: 'approved' | 'rejected') => void,
  onOpenSettings: (partner: PartnerProfile) => void,
  getStatusBadge: (status: string) => JSX.Element,
  getFraudFlagBadge: (flags?: number) => JSX.Element | null
}
                  </Button>
                </div>
              )}
            </div>
                  <Button "
                    variant="destructive" '
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'rejected')}

              <div className="grid grid-cols-2 gap-2">;
                <div>;"
                  <p className="text-xs text-zion-slate-light">Payout Method</p>;"
                  <p className="text-white capitalize">{selectedPartner && selectedPartner.payout_method || "Not specified"}</p>;
                </div>;
                <div>;"
                  <p className="text-xs text-zion-slate-light">Commission Rate</p>;"
                  <p className="text-white">{selectedPartner && selectedPartner.commission_rate || 25}%</p>;
                </div>;
              </div>;

              {selectedPartner && selectedPartner.fraud_flags && selectedPartner && selectedPartner.fraud_flags > 0 && (;"
                <Alert className="bg-red-900/20 border-red-900/50 text-red-500">;"
                  <AlertTitle className="flex items-center gap-2">;"
                    <Flag className="h-4 w-4" />;
                    Potential Fraud Detected ({selectedPartner && selectedPartner.fraud_flags});
          {selected_partner && (
            <div className="space-y-4">;
              <div className="grid grid - cols - 2 gap-2">;
                <div>;
                  <p className="text - xs text - zion - slate-light">Name</p>;
                  <p className="font - medium text-white">{selected_partner.name}</p>;
                </div>;
                <div>;
                  <p className="text - xs text - zion - slate-light">Status</p>;
                  <div>{getStatusBadge (selected_partner.status)}</div>;
                </div>;
              </div>;
              <div>;
                <p className="text - xs text - zion - slate-light">Bio</p>;
                <p className="text-white">{selected_partner.bio || "No bio provided"}</p>;
              </div>;
              <div className="grid grid - cols - 2 gap-2">;
                <div>;
                  <p className="text - xs text - zion - slate-light">Niche</p>;
                  <p className="text-white">{selected_partner.niche}</p>;
                </div>;
                <div>;
                  <p className="text - xs text - zion - slate-light">Audience Size</p>;
                  <p className="text-white">{getAudienceSizeLabel (selected_partner.audience_size)}</p>;
                </div>;
              </div>;
              {selected_partner.website && (
                <div>;
                  <p className="text - xs text - zion - slate-light">Website</p>;
                  <p className="text - zion-cyan">{selected_partner.website}</p>;
                </div>)}
              {selected_partner.social_media && Object.keys (selected_partner.social_media).length > 0 && (
                <div>;
                  <p className="text - xs text - zion - slate-light">Social Media</p>;
                  <div className="grid grid - cols - 2 gap-2">;
                    {Object.entries (selected_partner.social_media).map (([platform, handle]) => (
                      <p key={platform} className="text-white">;
                        <span className="font-medium">{platform}: </span>;
              />;
            </TabsContent>;
          </Tabs>;
        </CardContent>;
      </Card>;
            <DialogDescription>;
              Review the details of the partner application;
            </DialogDescription>;
          </DialogHeader>;
                        {handle}
                      </p>;
                    ))}
                  </div>;
                </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </AlertTitle>;
                  <AlertDescription>;
                    This application has triggered our fraud detection system. Review carefully before approving.;
                  </AlertDescription>;
<<<<<<< HEAD
=======

                  <Button"
                    className="bg-green-600 hover:bg-green-700"'
                    onClick={() => handleUpdateStatus(selectedPartner && selectedPartner.id, 'approved')}

                    <Check className="h-4 w-4 mr-1" />;
                    Approve;
                  </Button>;
                </div>;
              )}
            </div>;
          )}
>>>>>>> origin/cursor/delete-old-data-records-6bba


            <DialogDescription>;
              Configure commission rates and other settings;
            </DialogDescription>;
          </DialogHeader>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          )}
        </DialogContent>;
      </Dialog>;
    </div>;


<<<<<<< HEAD
=======
interface PartnerTableProps {
  partners: PartnerProfile[]
  isLoading: boolean
  onViewDetails: (partner: PartnerProfile) => void
  onUpdateStatus: (partnerId: string, status: 'approved' | 'rejected') => void
  onOpenSettings: (partner: PartnerProfile) => void
  getStatusBadge: (status: string) => JSX.Element
  getFraudFlagBadge: (flags?: number) => JSX.Element | null

}

>>>>>>> origin/cursor/delete-old-data-records-6bba
function PartnerTable({ 

  partners, 
  isLoading, 
  onViewDetails, 

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onUpdateStatus;
  onOpenSettings;
  getStatusBadge;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="text-center py-8">;

        <p className="text-zion-slate-light">Loading partner data...</p>;
      </div>;
    );

  }

>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (

        <p className="text-zion-slate-light">No partners found.</p>;

      </div>;
    );
  }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <Table>;
      <TableHeader>;
        <TableRow className="hover:bg-transparent">;
          <TableHead > Name</TableHead>;
          <TableHead > Niche</TableHead>;
          <TableHead > Audience</TableHead>;
          <TableHead > Status</TableHead>;
          <TableHead > Date</TableHead>;
          <TableHead className="text-right">Actions</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;
        {partners.map ((partner) => (
          <TableRow key={partner.id} className="border - zion - blue - light hover:bg - zion - blue-light / 10">;
            <TableCell className="font - medium text-white">;
              <div className="flex items - center gap-2">;
                {partner.name}
<<<<<<< HEAD
                {getFraudFlagBadge (partner.fraud_flags)}


              </div>;
            </TableCell>;

            <TableCell>{partner.niche}</TableCell>;
            <TableCell>;

                  size="sm"
                  onClick={() => onViewDetails(partner)}
=======
                {getFraudFlagBadge(partner.fraud_flags)}
              </div>;
            </TableCell>;


              {partner.audience_size.replace ('k, 000').replace ('- - ').replace ('over_over ')}
            </TableCell>;
            <TableCell />{getStatusBadge (partner.status)}</TableCell>;
            <TableCell />;
              {new Date (partner.created_at).toLocaleDateString ()}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  <>;
                    <Button;
                      variant="ghost";
                      size="sm";
                      on_click={() => onUpdateStatus (partner.id, 'rejected')}
                      className="text - red - 500 hover:text - red - 600 hover:bg - red-900 / 20";
                    >;
                      <X className="h - 4 w-4" />;
                      <span className="sr-only">Reject</span>;
                    </Button>;
                    <Button;
                      variant="ghost";
                      size="sm";
                      on_click={() => onUpdateStatus (partner.id, 'approved')}
                      className="text - green - 500 hover:text - green - 600 hover:bg - green-900 / 20";
                    >;
                      <Check className="h - 4 w-4" />;
                      <span className="sr-only">Approve</span>;
                    </Button>;
                  </>)}
                <Button;"
                  variant="ghost";"
                  size="sm";
                  on_click={() => onOpenSettings (partner)}
                  className="text - zion - slate - light hover:text-white";
                >;
                  <Settings className="h - 4 w-4" />;
                  <span className="sr-only">Settings</span>;
                </Button>;
                <Button;"
                  variant="outline";"
                  size="sm";
                  on_click={() => onViewDetails (partner)}

<<<<<<< HEAD
                ;
                <Button ;
                  variant="outline" ;
                  size="sm";
                  onClick={() => onViewDetails(partner)}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                >;
                  View;
                </Button>;
              </div>;
            </TableCell>;

<<<<<<< HEAD

      </TableBody>
    </Table>
  )
}

      </TableBody>;
    </Table>;
  );
}
          </TableRow>;
        ))}
      </TableBody>;
    </Table>;
  ),; interface PartnerProfile {
  id: string;
user id: string;
name: string;
status: 'pending' | 'approved' | 'rejected';
created at: string;
niche: string;
audience size: string;
social media?: Record<string string>;
website?: string;
bio?: string;
payout method?: string;
fraud flags?: number;
commission rate?: number 
}export default function PartnerManager () {
  
}
;




=======
          </TableRow>))}
      </TableBody>;
    </Table>);
>>>>>>> origin/cursor/delete-old-data-records-6bba
