<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client";
interface PartnerProfile {}
  id: string;
  user_id: string;
  name: string;
  status: 'pending' | 'approved' | 'rejected'
  created_at: string;
  niche: string;
  audience_size: string;
=======
import { supabase } from "@/integrations/supabase/client";
interface PartnerProfile {
<<<<<<< HEAD
=======

  id: string
  user_id: string
  name: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  niche: string
  audience_size: string
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  social_media?: Record<string, string>;

  website?: string;
  bio?: string;
  payout_method?: string;
<<<<<<< HEAD
  fraud_flags?: number;"
import { Check, Flag, Search, Settings, X } from "lucide-react","
import { supabase } from "@/integrations/supabase/client",
interface PartnerProfile {}
  id: string,
  user_id: string,
  name: string,'
=======
  fraud_flags?: number;
import { Check, Flag, Search, Settings, X } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
interface PartnerProfile {
>>>>>>> merged-prs-20250907-203621
  id: string,
  user_id: string,
  name: string,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  social_media?: Record<string, string>,
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  social_media?: Record<string string>,
>>>>>>> merged-prs-20250907-203621
  website?: string,
  bio?: string,
  payout_method?: string,
  fraud_flags?: number,
<<<<<<< HEAD
;
  commission_rate?: number;
}

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();
<<<<<<< HEAD
  const navigate = useNavigate();
  useEffect(() => {
    }
    if (!isAuthenticated) {
      }
      navigate("/login");"
      return;
    }
=======
>>>>>>> origin/chore/fix-lint-and-merge

interface PartnerProfile {

  id: string,
  user_id: string,
  name: string,'
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,

=======
  social_media?: Record < string, string>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  website?: string;
  bio?: string;
  payout_method?: string;
  fraud_flags?: number;
  commission_rate?: number;
}
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);"
  const [searchQuery, setSearchQuery] = useState("");"
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState("pending");"
const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),;
=======
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),

=======
  commission_rate?: number
}
export default function PartnerManager() {
  const [partners, setPartners] = useState<PartnerProfile[]>([]),
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([]),
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState($2);
  const [searchQuery, setSearchQuery] = useState($2);
  const [activeTab, setActiveTab] = useState($2);
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),
  const [isDetailsOpen, setIsDetailsOpen] = useState($2);
  const [isSettingsOpen, setIsSettingsOpen] = useState($2);
  const [commissionRate, setCommissionRate] = useState($2);
  const { user, isAuthenticated } = useAuth($2);
  const navigate = useNavigate($2);
=======
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),

export default function PartnerManager() {;
  const [partners, setPartners] = useState<PartnerProfile[]>([]);
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
        setPartners(mockData);
        filterPartners(mockData, activeTab, searchQuery);
      } else {;
        setPartners(data as PartnerProfile[]);
        filterPartners(data as PartnerProfile[], activeTab, searchQuery);

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
=======
      const { data, error } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
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

      }
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface PartnerProfile {;
  id: string,;
  user_id: string,;
  name: string,;
  status: 'pending' | 'approved' | 'rejected',;
  created_at: string,;
  niche: string,;
  audience_size: string,;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
  website?: string;
  bio?: string;
  payout_method?: string;
  fraud_flags?: number;"
import { Check, Flag, Search, Settings, X } from "lucide-react","
import { supabase } from "@/integrations/supabase/client",
interface PartnerProfile {}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState, useEffect } from './react';
import { use_auth } from '@/hooks / use_auth';
import { use_navigate } from './react-router-dom';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components / ui / alert';
import { toast } from '@/hooks / use - toast';
import { Check, Flag, Search, Settings, X } from './lucide-react';
import { supabase } from '@/integrations / supabase / client';
<<<<<<< HEAD


=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface PartnerProfile {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string,
  user_id: string,
  name: string,'
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,
<<<<<<< HEAD
  social_media?: Record<string string>,
  website?: string,
  bio?: string,
  payout_method?: string,
  fraud_flags?: number,
;
  commission_rate?: number;
}

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();
<<<<<<< HEAD
  const navigate = useNavigate();
>>>>>>> merged-prs-20250907-203621
  useEffect(() => {
    if (!isAuthenticated) {
      navigate($2);
      return
    }
=======
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
    fetchPartners()
  }, [isAuthenticated, navigate]),

  const fetchPartners = async () => {
    try {
      setIsLoading($2);
      // In a real application, check admin permissions here
      const { data, error } = await supabase
        .from('partner_profiles')
        .select('*')
        .order($2);
      if (error) throw error,
      
      // If no data is returned, use mock data
      if (!data || data.length = $2;
            user_id: 'user1',
            name: 'AI Bytes',
            status: 'pending',
            created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString($2);
            niche: 'AI Tutorials',
            audience_size: '10k-50k',
            social_media: { twitter: '@aibytes', youtube: 'AI Bytes' },
            website: 'aibytes.com',
            bio: 'We create AI tutorials and insights for developers.',
            payout_method: 'paypal',
            fraud_flags: 0,
            commission_rate: 25},
          {
            id: '2',
            user_id: 'user2',
            name: 'ML Academy',
            status: 'approved',
            created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString($2);
            niche: 'Machine Learning Education',
            audience_size: 'over100k',
            social_media: { twitter: '@mlacademy', youtube: 'ML Academy' },
            website: 'mlacademy.edu',
            bio: 'Premiere online academy for machine learning enthusiasts.',
            payout_method: 'bank',
            fraud_flags: 0,
            commission_rate: 30},
          {
            id: '3',
            user_id: 'user3',
            name: 'Tech Insights',
            status: 'rejected',
            created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString($2);
            niche: 'Technology News',
            audience_size: '1k-10k',
            social_media: { twitter: '@techinsights' },
            website: 'techinsights.io',
            bio: 'We share insights about the latest in tech.',
            payout_method: 'crypto',
            fraud_flags: 2,
            commission_rate: 20},
          {
            id: '4',
            user_id: 'user4',
            name: 'CodeMaster',
            status: 'approved',
            created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString($2);
            niche: 'Coding Tutorials',
            audience_size: '50k-100k',
            social_media: { youtube: 'CodeMaster', linkedin: 'codemaster' },
            website: 'codemaster.dev',
            bio: 'Learn to code with our expert tutorials.',
            payout_method: 'paypal',
            fraud_flags: 0,
            commission_rate: 25},
          {
            id: '5',
            user_id: 'user5',
            name: 'AI Daily',
            status: 'pending',
            created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString($2);
            niche: 'AI News',
            audience_size: '10k-50k',
            social_media: { twitter: '@aidaily', instagram: '@aidailynews' },
            website: 'aidaily.news',
            bio: 'Daily updates on the world of artificial intelligence.',
            payout_method: 'platform_credit',
            fraud_flags: 1,
            commission_rate: 20}
        ],
        
        setPartners($2);
        filterPartners(mockData, activeTab, searchQuery)
      } else {
        setPartners($2);
        filterPartners(data as PartnerProfile[], activeTab, searchQuery)
      }
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: "Failed to load partner data",
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }
  },

  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {
    let filtered = $2;
    // Filter by status
    if (status !== "all") {
      filtered = filtered.filter(p => p.status === status)
    }
    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase($2);
      filtered = $2;
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery($2);
    filterPartners(partners, activeTab, e.target.value)
  },

  const handleTabChange = (value: string) => {
    setActiveTab($2);
=======
interface PartnerProfile {

  id: string,
  user_id: string,
  name: string,'
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,

=======
  social_media?: Record < string, string>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  website?: string;
  bio?: string;
  payout_method?: string;
  fraud_flags?: number;
  commission_rate?: number;
}
  const [isLoading, setIsLoading] = useState(true);"
  const [searchQuery, setSearchQuery] = useState("");"
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState("pending");"
const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),;
=======
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD



=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  useEffect(() => {;
    if (!isAuthenticated) {;

<<<<<<< HEAD


=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      navigate("/login");
      return;
    }


<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        setPartners(mockData);
        filterPartners(mockData, activeTab, searchQuery);
      } else {;
        setPartners(data as PartnerProfile[]);
        filterPartners(data as PartnerProfile[], activeTab, searchQuery);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
      const { data, error } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    } finally {}
      setIsLoading (false);
    }
  }

<<<<<<< HEAD
=======
=======

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



<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {
    let filtered = partners
    // Filter by status
    if (status !== "all") {

      filtered = filtered.filter(p => p.status === status)

<<<<<<< HEAD
    } catch (error) {;
      console.error("Error fetching partners:", error),;
=======
<<<<<<< HEAD
    } catch (error) {;
      console.error("Error fetching partners:", error),;
=======


<<<<<<< HEAD
    } catch (error) {;
      console && console.error("Error fetching partners:", error);
    }
    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) |
        p.niche.toLowerCase().includes(lowerQuery) |
        p.bio?.toLowerCase().includes(lowerQuery) |
        p.website?.toLowerCase().includes(lowerQuery)
      )
    }
    setFilteredPartners(filtered)
  }
    } catch (error) {;
      console.error("Error fetching partners:", error),;
=======

=======
    } catch (error) {;
      console && console.error("Error fetching partners:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({;
        title: "Error",,
  description: "Failed to load partner data",;

        variant: "destructive"});
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
  };

  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {;
    let filtered = partners,;

    // Filter by status;"
    if (status !== "all") {;
      filtered = filtered && filtered.filter(p => p && p.status === status);
    }
=======
<<<<<<< HEAD
  },;
  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {;
    let filtered = partners,;
    // Filter by status;
    if (status !== "all") {;



    
    setFilteredPartners(filtered)
  },

      filtered = filtered.filter(p => p.status === status);
    }
;
    // Filter by search query;
    if (query) {;
      const lowerQuery = query.toLowerCase(),;
      filtered = filtered.filter(p =>;
        p.name.toLowerCase().includes(lowerQuery) ||;
        p.niche.toLowerCase().includes(lowerQuery) ||;
        p.bio?.toLowerCase().includes(lowerQuery) ||;
        p.website?.toLowerCase().includes(lowerQuery);
      );
    }
=======
  };

  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {;
    let filtered = partners,;

    // Filter by status;"
    if (status !== "all") {;
      filtered = filtered && filtered.filter(p => p && p.status === status);
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    setFilteredPartners(filtered)
  },

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {}
<<<<<<< HEAD
    setSearchQuery(e.target.value)
    filterPartners(partners, activeTab, e.target.value)

  const handleTabChange = (value: string) => {}
=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    
    setFilteredPartners(filtered)
  },

<<<<<<< HEAD

  },


  const handleTabChange = (value: string) => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    setActiveTab(value)
>>>>>>> merged-prs-20250907-203621
    filterPartners(partners, value, searchQuery)

<<<<<<< HEAD
  const handleViewDetails = (partner: PartnerProfile) => {}
    setSelectedPartner(partner)
    setIsDetailsOpen(true)
=======
  },

<<<<<<< HEAD
  const handleViewDetails = (partner: PartnerProfile) => {
    setSelectedPartner($2);
    setIsDetailsOpen(true)
  },

  const handleOpenSettings = (partner: PartnerProfile) => {
    setSelectedPartner($2);
    setCommissionRate($2);
    setIsSettingsOpen(true)
  },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {
    try {
      // In a real app, this would update the database
      setPartners(partners.map(p =>
        p.id === partnerId ? { ...p, status } : p
<<<<<<< HEAD

      toast({

        title: status === 'approved' ? "Partner Approved" : "Partner Rejected"
        description: `The partner has been ${status}.`'"
        variant: status === 'approved' ? "default" : "destructive"})
      // Close the dialog if open;
      if (isDetailsOpen && selectedPartner?.id === partnerId) {}
        setIsDetailsOpen(false)
      }
=======
      )),
      
      filterPartners($2);
        activeTab,
        searchQuery
      ),
      
      toast($2);
      // Close the dialog if open
      if (isDetailsOpen && selectedPartner?.id === partnerId) {
        setIsDetailsOpen(false)
      }
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: "Failed to update partner status",
        variant: "destructive"})
    }
=======

  const handleViewDetails = (partner: PartnerProfile) => {
    setSelectedPartner(partner)
    setIsDetailsOpen(true)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    filterPartners(partners, activeTab, e.target.value)
  }
  },

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    filterPartners(partners, value, searchQuery)
  }
  },

  const handleViewDetails = (partner: PartnerProfile) => {
    setSelectedPartner(partner)
    setIsDetailsOpen(true)
  }
  const handleOpenSettings = (partner: PartnerProfile) => {
    setSelectedPartner(partner);
    setCommissionRate(partner.commission_rate |25)
    setIsSettingsOpen(true)
  }
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setSearchQuery(e.target.value)
    filterPartners(partners, activeTab, e.target.value)

  const handleTabChange = (value: string) => {}
    setActiveTab(value)
    filterPartners(partners, value, searchQuery)

  const handleViewDetails = (partner: PartnerProfile) => {}
    setSelectedPartner(partner)
    setIsDetailsOpen(true)

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  },

  const handleOpenSettings = (partner: PartnerProfile) => {
    setSelectedPartner(partner),
    setCommissionRate(partner.commission_rate || 25),
    setIsSettingsOpen(true)
  },

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {
    try {
      // In a real app, this would update the database
      setPartners(partners.map(p =>
        p.id === partnerId ? { ...p, status } : p
<<<<<<< HEAD
      )),
      

      ));
      )),
      
=======

<<<<<<< HEAD
=======
      )),
      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      filterPartners(
        partners.map(p => p.id === partnerId ? { ...p, status } : p),
        activeTab,
        searchQuery
<<<<<<< HEAD
      ),
      

      );
      ),
      
=======

      ),
      

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({

        title: status === 'approved' ? "Partner Approved" : "Partner Rejected"
        description: `The partner has been ${status}.`'"
        variant: status === 'approved' ? "default" : "destructive"})
      // Close the dialog if open;
      if (isDetailsOpen && selectedPartner?.id === partnerId) {}
        setIsDetailsOpen(false)
      }
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    } catch (error) {"
      console.error("Error updating partner status:", error),
      toast({"
        title: "Error""
        description: "Failed to update partner status""
        variant: "destructive"})
<<<<<<< HEAD
=======
    }

=======
    } catch (error) {
<<<<<<< HEAD
      console.error("Error updating partner status:", error),
=======
      console.error("Error updating partner status:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Error"
        description: "Failed to update partner status"
        variant: "destructive"})
    }


<<<<<<< HEAD
  }
  const handleSaveSettings = async () => {
    if (!selectedPartner) return;
  }
  const handleSaveSettings = async () => {
    if (!selectedPartner) return;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

  const handleSaveSettings = async () => {
    if (!selectedPartner) return,
    
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      // Update commission rate
<<<<<<< HEAD
      setPartners(partners.map(p => 
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate} : p
      )),
      
      filterPartners($2);
=======
      setPartners(partners.map(p =>
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p

<<<<<<< HEAD
=======
<<<<<<< HEAD
    setFilteredPartners(filtered);
  };
  const handleSearch = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    setSearchQuery(e && e.target.value),;
    filterPartners(partners, activeTab, e && e.target.value);
  };
  const handleTabChange = (value: string) => {;
    setActiveTab(value),;
    filterPartners(partners, value, searchQuery);
  };
  const handleViewDetails = (partner: PartnerProfile) => {;
    setSelectedPartner(partner),;
    setIsDetailsOpen(true);
  };
  const handleOpenSettings = (partner: PartnerProfile) => {;
    setSelectedPartner(partner);
    setCommissionRate(partner && partner.commission_rate || 25),;
    setIsSettingsOpen(true);
  };
  const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {;
    try {;
      // In a real app, this would update the database;
      setPartners(partners && partners.map(p => ;
        p && p.id === partnerId ? { ...p, status } : p;
      ));
      filterPartners(;
        partners && partners.map(p => p && p.id === partnerId ? { ...p, status } : p);
        activeTab;
        searchQuery;
      );
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      )),
      
      filterPartners(
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p),
>>>>>>> merged-prs-20250907-203621
        activeTab,
        searchQuery
      ),
      
<<<<<<< HEAD
      toast($2);
      setIsSettingsOpen(false)
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: "Failed to update partner settings",
        variant: "destructive"})
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

<<<<<<< HEAD
    try {
      // Update commission rate
      setPartners(partners.map(p =>
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p

=======
  const getAudienceSizeLabel = (size: string) => {
    switch (size) {
      case 'under1k': return 'Under 1,000',
      case '1k-10k': return '1,000 - 10,000',
      case '10k-50k': return '10,000 - 50,000',
      case '50k-100k': return '50,000 - 100,000',
      case 'over100k': return 'Over 100,000',
      default: return size
    }
  },

  const getStatusBadge = $2;
      case 'approved':
        return <Badge variant = $2;
      case 'rejected':
        return <Badge variant = $2;
      default:
        return <Badge variant = $2;
  const getFraudFlagBadge = $2;
    return (
      <Badge variant = $2;
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({
        title: "Settings Updated"
        description: "Partner settings have been updated successfully."

        variant: "default"})
      setIsSettingsOpen(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    } catch (error) {"
      console.error("Error updating partner settings:", error),
      toast({"
        title: "Error""
        description: "Failed to update partner settings""
        variant: "destructive"})

  };

<<<<<<< HEAD
=======
=======
    } catch (error) {
<<<<<<< HEAD
      console.error("Error updating partner settings:", error),
=======
      console.error("Error updating partner settings:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Error"
        description: "Failed to update partner settings"
        variant: "destructive"})


<<<<<<< HEAD
  };

    }
  }
  const getAudienceSizeLabel = (size: string) => {
    switch (size) {
      case 'under1k': return 'Under 1,000';
      case '1k-10k': return '1,000 - 10,000';
      case '10k-50k': return '10,000 - 50,000';
      case '50k-100k': return '50,000 - 100,000';
      case 'over100k': return 'Over 100,000';
      default: return size
    }
  }
  };
=======
=======

  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

      case 'under1k': return 'Under 1,000';
      case '1k-10k': return '1,000 - 10,000';
      case '10k-50k': return '10,000 - 50,000';
      case '50k-100k': return '50,000 - 100,000';

      case 'over100k': return 'Over 100,000';
      default: return size;
    }
=======
<<<<<<< HEAD

=======
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
<<<<<<< HEAD
        activeTab;
        searchQuery;
      );
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({;
        title: "Settings Updated",;
        description: "Partner settings have been updated successfully.",;
        variant: "default"}),;
<<<<<<< HEAD
      setIsSettingsOpen(false);
    } catch (error) {;
      console.error("Error updating partner settings:", error),;
=======

      setIsSettingsOpen(false);
    } catch (error) {;
      console && console.error("Error updating partner settings:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({;
        title: "Error",;
        description: "Failed to update partner settings",;
        variant: "destructive"});
    }
<<<<<<< HEAD
  },;
  const getAudienceSizeLabel = (size: string) => {;
    switch (size) {;
      case 'under1k': return 'Under 1,000',;
      case '1k-10k': return '1,000 - 10,000',;
      case '10k-50k': return '10,000 - 50,000',;
      case '50k-100k': return '50,000 - 100,000',;
      case 'over100k': return 'Over 100,000',;
      default: return size;
    }
  },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
<<<<<<< HEAD
=======
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>,
      case 'approved':
        return <Badge variant="outline" className="bg-green-900/30 text-green-500 border-green-600">Approved</Badge>,
      case 'rejected':
        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }




  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
  };
  const getStatusBadge = (status: string) => {;
    switch (status) {;
      case 'pending':;
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>;
      case 'approved':;
        return <Badge variant="outline" className="bg-green-900/30 text-green-500 border-green-600">Approved</Badge>;
=======
  };

  const getAudienceSizeLabel = (size: string) => {;
    switch (size) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>;
      case 'approved':;
        return <Badge variant="outline" className="bg-green-900/30 text-green-500 border-green-600">Approved</Badge>;

<<<<<<< HEAD
=======
  },

  const getFraudFlagBadge = (flags: number = 0) => {
    if (flags === 0) return null
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      case 'rejected':;

        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>,;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
<<<<<<< HEAD
=======
  };
<<<<<<< HEAD
  const getFraudFlagBadge = (flags: number = 0) => {;
    if (flags === 0) return null,;
    return (
  },;
  const getStatusBadge = (status: string) => {;

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
;
interface PartnerProfile {;
  id:string,;
  user_id:string,;
  name:string,;
  status:'pending' | 'approved' | 'rejected',;
  created_at:string,;
  niche:string,;
  audience_size:string,;
  social_media?:Record<string string>,;
  website?:string,;
  bio?:string,;
  payout_method?:string,;
  fraud_flags?:number,;
  commission_rate?:number;
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
;
  useEffect(() => {;
    if (!isAuthenticated) {;
      navigate("/login"),;
      return,;
    }
;
    fetchPartners(),;
  }, [isAuthenticated, navigate]),;
;
  const fetchPartners = async () => {;
    try {;
      setIsLoading(true),;
      // In a real application, check admin permissions here;
      ;
      const { data, error } = await supabase;
        .from('partner_profiles');
        .select('*');
        .order('created_at', { ascending:false }),;
        ;
      if (error) throw error,;
      ;
      // If no data is returned, use mock data;
      if (!data || data.length === 0) {;
        const mockData:PartnerProfile[] = [;
          {;
            id:'1',;
            user_id:'user1',;
            name:'AI Bytes',;
            status:'pending',;
            created_at:new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),;
            niche:'AI Tutorials',;
            audience_size:'10k-50k',;
            social_media:{ twitter:'@aibytes', youtube:'AI Bytes' },;
            website:'aibytes.com',;
            bio:'We create AI tutorials and insights for developers.',;
            payout_method:'paypal',;
            fraud_flags:0,;
            commission_rate:25;
          },;
          {;
            id:'2',;
            user_id:'user2',;
            name:'ML Academy',;
            status:'approved',;
            created_at:new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),;
            niche:'Machine Learning Education',;
            audience_size:'over100k',;
            social_media:{ twitter:'@mlacademy', youtube:'ML Academy' },;
            website:'mlacademy.edu',;
            bio:'Premiere online academy for machine learning enthusiasts.',;
            payout_method:'bank',;
            fraud_flags:0,;
            commission_rate:30;
          },;
          {;
            id:'3',;
            user_id:'user3',;
            name:'Tech Insights',;
            status:'rejected',;
            created_at:new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),;
            niche:'Technology News',;
            audience_size:'1k-10k',;
            social_media:{ twitter:'@techinsights' },;
            website:'techinsights.io',;
            bio:'We share insights about the latest in tech.',;
            payout_method:'crypto',;
            fraud_flags:2,;
            commission_rate:20;
          },;
          {;
            id:'4',;
            user_id:'user4',;
            name:'CodeMaster',;
            status:'approved',;
            created_at:new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),;
            niche:'Coding Tutorials',;
            audience_size:'50k-100k',;
            social_media:{ youtube:'CodeMaster', linkedin:'codemaster' },;
            website:'codemaster.dev',;
            bio:'Learn to code with our expert tutorials.',;
            payout_method:'paypal',;
            fraud_flags:0,;
            commission_rate:25;
          },;
          {;
            id:'5',;
            user_id:'user5',;
            name:'AI Daily',;
            status:'pending',;
            created_at:new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),;
            niche:'AI News',;
            audience_size:'10k-50k',;
            social_media:{ twitter:'@aidaily', instagram:'@aidailynews' },;
            website:'aidaily.news',;
            bio:'Daily updates on the world of artificial intelligence.',;
            payout_method:'platform_credit',;
            fraud_flags:1,;
            commission_rate:20;
          }
        ],;
        ;
        setPartners(mockData),;
        filterPartners(mockData, activeTab, searchQuery),;
      } else {;
        setPartners(data as PartnerProfile[]),;
        filterPartners(data as PartnerProfile[], activeTab, searchQuery),;
      }
    } catch (error) {;
      console.error("Error fetching partners:", error),;
      toast({;
        title:"Error",;
        description:"Failed to load partner data",;
        variant:"destructive"}),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const filterPartners = (partners:PartnerProfile[], status:string, query:string) => {;
    let filtered = partners,;
    ;
    // Filter by status;
    if (status !== "all") {;
      filtered = filtered.filter(p => p.status === status);
    }
    ;
    // Filter by search query;
    if (query) {;
      const lowerQuery = query.toLowerCase(),;
      filtered = filtered.filter(p => ;
        p.name.toLowerCase().includes(lowerQuery) ||;
        p.niche.toLowerCase().includes(lowerQuery) ||;
        p.bio?.toLowerCase().includes(lowerQuery) ||;
        p.website?.toLowerCase().includes(lowerQuery);
      ),;
    }
    ;
    setFilteredPartners(filtered),;
  },;
;
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {;
    setSearchQuery(e.target.value),;
    filterPartners(partners, activeTab, e.target.value),;
  },;
;
  const handleTabChange = (value:string) => {;
    setActiveTab(value),;
    filterPartners(partners, value, searchQuery),;
  },;
;
  const handleViewDetails = (partner:PartnerProfile) => {;
    setSelectedPartner(partner),;
    setIsDetailsOpen(true);
  },;
;
  const handleOpenSettings = (partner:PartnerProfile) => {;
    setSelectedPartner(partner),;
    setCommissionRate(partner.commission_rate || 25),;
    setIsSettingsOpen(true);
  },;
;
  const handleUpdateStatus = async (partnerId:string, status:'approved' | 'rejected') => {;
    try {;
      // In a real app, this would update the database;
      setPartners(partners.map(p => ;
        p.id === partnerId ? { ...p, status } p;
      )),;
      ;
      filterPartners(;
        partners.map(p => p.id === partnerId ? { ...p, status } p),;
        activeTab,;
        searchQuery;
      ),;
      ;
      toast({;
        title:status === 'approved' ? "Partner Approved" :"Partner Rejected",;
        description:`The partner has been ${status}.`,;
        variant:status === 'approved' ? "default" :"destructive"}),;
      ;
      // Close the dialog if open;
      if (isDetailsOpen && selectedPartner?.id === partnerId) {;
        setIsDetailsOpen(false),;
      }
    } catch (error) {;
      console.error("Error updating partner status:", error),;
      toast({;
        title:"Error",;
        description:"Failed to update partner status",;
        variant:"destructive"}),;
    }
  },;
;
  const handleSaveSettings = async () => {;
    if (!selectedPartner) return,;
    ;
    try {;
      // Update commission rate;
      setPartners(partners.map(p => ;
        p.id === selectedPartner.id ? { ...p, commission_rate:commissionRate } p;
      )),;
      ;
      filterPartners(;
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate:commissionRate } p),;
        activeTab,;
        searchQuery;
      ),;
      ;
      toast({;
        title:"Settings Updated",;
        description:"Partner settings have been updated successfully.",;
        variant:"default"}),;
      ;
      setIsSettingsOpen(false),;
    } catch (error) {;
      console.error("Error updating partner settings:", error),;
      toast({;
        title:"Error",;
        description:"Failed to update partner settings",;
        variant:"destructive"}),;    }
  },;
;
  const getAudienceSizeLabel = (size:string) => {;
    switch (size) {;
      case 'under1k':return 'Under 1,000',;
      case '1k-10k':return '1,000 - 10,000',;
      case '10k-50k':return '10,000 - 50,000',;
      case '50k-100k':return '50,000 - 100,000',;
      case 'over100k':return 'Over 100,000',;
      default:return size;
    }
  },;
;
  const getStatusBadge = (status:string) => {;
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

  const getFraudFlagBadge = (flags: number = 0) => {
    if (flags === 0) return null
<<<<<<< HEAD
      case 'rejected':;

        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>,;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
=======
    return (
      <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1">
        <Flag className="h-3 w-3" />
        {flags}
      </Badge>
    )
  }
>>>>>>> merged-prs-20250907-203621
  return (
    <div className="container max-w-7xl py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Management</h1>
          <p className="text-zion-slate-light">Approve and manage affiliate partners</p>
        </div>
      </div>
      <Card className="bg-zion-blue-dark border-zion-blue-light mb-8">
        <CardHeader className="pb-3">
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Pending Applications
                </CardTitle>
                <div className="text-2xl font-bold text-white">
<<<<<<< HEAD
                  {partners.filter(p => p.status === 'pending').length}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    return (
"
      <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1">"
        <Flag className="h-3 w-3" />

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

                </div>
=======
<<<<<<< HEAD

=======
                </CardTitle>;
                <div className="text-2xl font-bold text-white">;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-zion-slate-light">
<<<<<<< HEAD
                  Partners waiting for review and approval
=======
                  Currently approved and active partners
>>>>>>> merged-prs-20250907-203621
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zion-slate-light">
<<<<<<< HEAD
                  Active Partners
                </CardTitle>
                <div className="text-2xl font-bold text-white">
                  {partners.filter(p => p.status === 'approved').length}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-zion-slate-light">
                  Currently approved and active partners
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Fraud Flags
                </CardTitle>
                <div className="text-2xl font-bold text-white">
                  {partners.reduce((total, p) => total + (p.fraud_flags |0), 0)}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-zion-slate-light">
=======
                  Fraud Flags
                </CardTitle>
                <div className="text-2xl font-bold text-white">
                  {partners.reduce((total, p) => total + (p.fraud_flags |0), 0)}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </div>;
              </CardHeader>;
              <CardContent className="pt-0">;
                <p className="text-xs text-zion-slate-light">;
                  Currently approved and active partners;
                </p>;
              </CardContent>;
            </Card>;
            <Card className="bg-zion-blue border-zion-blue-light">;
              <CardHeader className="pb-2">;
                <CardTitle className="text-sm font-medium text-zion-slate-light">;
                  Fraud Flags;
                </CardTitle>;
                <div className="text-2xl font-bold text-white">;
                  {partners.reduce((total, p) => total + (p.fraud_flags || 0), 0)}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </CardHeader>"
              <CardContent className="pt-0">"
                <p className="text-xs text-zion-slate-light">

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      </Card>
      <Card className="bg-zion-blue-dark border-zion-blue-light">
=======
      </Card>"
      <Card className="bg-zion-blue-dark border-zion-blue-light">"
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <CardHeader className="pb-3 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <CardTitle>Partners</CardTitle>
            <CardDescription>Manage partnership applications and settings</CardDescription>
<<<<<<< HEAD
=======
<<<<<<< HEAD
          </div>
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light" />
              <Input
                placeholder="Search partners..."
                className="pl-8"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="space-y-4">
              <PartnerTable
                partners={filteredPartners}
                isLoading={isLoading}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>"
          <div className="w-full md:w-80">"
            <div className="relative">"
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light" />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Input
                placeholder="Search partners..."
                className="pl-8"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="space-y-4">
        return <Badge variant="outline">{status}</Badge>,;
    }
  },;
;
  const getFraudFlagBadge = (flags:number = 0) => {;
    if (flags === 0) return null,;
    ;
    return (;
      <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1">;
        <Flag className="h-3 w-3" />;
        {flags}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </Badge>;
    ),;
  },;
;
  return (;
    <div className="container max-w-7xl py-10">;
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Management</h1>;
          <p className="text-zion-slate-light">Approve and manage affiliate partners</p>;
        </div>;
      </div>;
;
      <Card className="bg-zion-blue-dark border-zion-blue-light mb-8">;
        <CardHeader className="pb-3">;
          <CardTitle>Overview</CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className="grid gap-4 md:grid-cols-3">;
            <Card className="bg-zion-blue border-zion-blue-light">;
              <CardHeader className="pb-2">;
                <CardTitle className="text-sm font-medium text-zion-slate-light">;
                  Pending Applications;
                </CardTitle>;
                <div className="text-2xl font-bold text-white">;                  {partners.filter(p => p.status === 'pending').length}
                </div>;
              </CardHeader>;
              <CardContent className="pt-0">;
                <p className="text-xs text-zion-slate-light">;
                  Partners waiting for review and approval;
                </p>;
              </CardContent>;
            </Card>;
            ;
            <Card className="bg-zion-blue border-zion-blue-light">;
              <CardHeader className="pb-2">;
                <CardTitle className="text-sm font-medium text-zion-slate-light">;
                  Active Partners;
                </CardTitle>;
                <div className="text-2xl font-bold text-white">;
                  {partners.filter(p => p.status === 'approved').length}
                </div>;
              </CardHeader>;
              <CardContent className="pt-0">;
                <p className="text-xs text-zion-slate-light">;
                  Currently approved and active partners;
                </p>;
              </CardContent>;
            </Card>;
            ;
            <Card className="bg-zion-blue border-zion-blue-light">;
              <CardHeader className="pb-2">;
                <CardTitle className="text-sm font-medium text-zion-slate-light">;
                  Fraud Flags;
                </CardTitle>;
                <div className="text-2xl font-bold text-white">;
                  {partners.reduce((total, p) => total + (p.fraud_flags || 0), 0)}
                </div>;
              </CardHeader>;
              <CardContent className="pt-0">;
                <p className="text-xs text-zion-slate-light">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  Total potential fraud flags detected;
                </p>;
              </CardContent>;
            </Card>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <Input"
                placeholder="Search partners...""
                className="pl-8"
                value={searchQuery}
                onChange={handleSearch}

              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}

<<<<<<< HEAD
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}

                isLoading={isLoading}
              />;

=======
=======
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
<<<<<<< HEAD
=======
=======
            <TabsContent value="pending" className="space - y-4">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
<<<<<<< HEAD

                isLoading={isLoading}
              />;

                isLoading={isLoading}

                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
              />;
            </TabsContent>;

              <PartnerTable 
                partners={filteredPartners} 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                isLoading={isLoading}
              />;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            ;
            <TabsContent value="approved" className="space-y-4">;
              <PartnerTable ;
                partners={filteredPartners} ;                isLoading={isLoading}
>>>>>>> merged-prs-20250907-203621
              />
            </TabsContent>
            <TabsContent value="approved" className="space-y-4">
              <PartnerTable
                partners={filteredPartners}
<<<<<<< HEAD
                isLoading={isLoading}
=======
              <PartnerTable 
                partners={filteredPartners} 
                isLoading={isLoading}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
<<<<<<< HEAD

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
=======
                getFraudFlagBadge={getFraudFlagBadge}
<<<<<<< HEAD
=======

                isLoading={isLoading}
              />;

<<<<<<< HEAD
                isLoading={isLoading}

=======
              <PartnerTable 

                partners={filteredPartners} 
                isLoading={isLoading}
              />;
            </TabsContent>;
            <TabsContent value="rejected" className="space - y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
              />
            </TabsContent>
            <TabsContent value="rejected" className="space-y-4">
              <PartnerTable
                partners={filteredPartners}
<<<<<<< HEAD
                isLoading={isLoading}
=======
              <PartnerTable 
                partners={filteredPartners} 
                isLoading={isLoading}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
=======

                isLoading={isLoading}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
<<<<<<< HEAD
                getFraudFlagBadge={getFraudFlagBadge}
=======
<<<<<<< HEAD

              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
=======
                getFraudFlagBadge={getFraudFlagBadge}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              />;
            </TabsContent>;
                isLoading={isLoading}
              />;
            </TabsContent>;
            <TabsContent value="all" className="space - y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
              />
            </TabsContent>
            <TabsContent value="all" className="space-y-4">
              <PartnerTable
                partners={filteredPartners}
                isLoading={isLoading}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
<<<<<<< HEAD
=======
                getFraudFlagBadge={getFraudFlagBadge}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      {/* Partner Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-lg bg-zion-blue border-zion-blue-light">
          <DialogHeader>
            <DialogTitle>Partner Details</DialogTitle>
            <DialogDescription>
              Review the details of the partner application
            </DialogDescription>
          </DialogHeader>
          {selectedPartner && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Name</p>
                  <p className="font-medium text-white">{selectedPartner.name}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Status</p>
                  <div>{getStatusBadge(selectedPartner.status)}</div>
<<<<<<< HEAD
                </div>
              </div>
              <div>
                <p className="text-xs text-zion-slate-light">Bio</p>
                <p className="text-white">{selectedPartner.bio |"No bio provided"}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Niche</p>
                  <p className="text-white">{selectedPartner.niche}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Audience Size</p>
                  <p className="text-white">{getAudienceSizeLabel(selectedPartner.audience_size)}</p>
                </div>
              </div>
              {selectedPartner.website && (
                <div>
                  <p className="text-xs text-zion-slate-light">Website</p>
                  <p className="text-zion-cyan">{selectedPartner.website}</p>
                </div>
              )}
              {selectedPartner.social_media && Object.keys(selectedPartner.social_media).length > 0 && (
                <div>
                  <p className="text-xs text-zion-slate-light">Social Media</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedPartner.social_media).map(([platform, handle]) => (
                      <p key={platform} className="text-white">
                        <span className="font-medium">{platform}: </span>
                        {handle}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Payout Method</p>
                  <p className="text-white capitalize">{selectedPartner.payout_method |"Not specified"}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Commission Rate</p>
                  <p className="text-white">{selectedPartner.commission_rate |25}%</p>
                </div>
              </div>
              {selectedPartner.fraud_flags && selectedPartner.fraud_flags > 0 && (
                <Alert className="bg-red-900/20 border-red-900/50 text-red-500">
                  <AlertTitle className="flex items-center gap-2">
=======
                </div>
              </div>
              <div>
                <p className="text-xs text-zion-slate-light">Bio</p>
                <p className="text-white">{selectedPartner.bio |"No bio provided"}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Niche</p>
                  <p className="text-white">{selectedPartner.niche}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Audience Size</p>
                  <p className="text-white">{getAudienceSizeLabel(selectedPartner.audience_size)}</p>
                </div>
              </div>
              {selectedPartner.website && (
                <div>
                  <p className="text-xs text-zion-slate-light">Website</p>
                  <p className="text-zion-cyan">{selectedPartner.website}</p>
                </div>
              )}
              {selectedPartner.social_media && Object.keys(selectedPartner.social_media).length > 0 && (
                <div>
                  <p className="text-xs text-zion-slate-light">Social Media</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedPartner.social_media).map(([platform, handle]) => (
                      <p key={platform} className="text-white">
                        <span className="font-medium">{platform}: </span>
                        {handle}
                      </p>
                    ))}
                  </div>
                </div>
              )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


              />;
            </TabsContent>;
          </Tabs>;
        </CardContent>;
      </Card>;
      {/* Partner Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>;
        <DialogContent className="sm:max - w-lg bg - zion - blue border - zion - blue - light">;
          <DialogHeader>;
            <DialogTitle > Partner Details</DialogTitle>;
          </Tabs>;
        </CardContent>;
      </Card>;
      ;
      {/* Partner Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>;
        <DialogContent className="sm:max-w-lg bg-zion-blue border-zion-blue-light">;
          <DialogHeader>;
            <DialogTitle>Partner Details</DialogTitle>;
            <DialogDescription>;
              Review the details of the partner application;
            </DialogDescription>;
          </DialogHeader>;
              
<<<<<<< HEAD
              
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <Flag className="h-4 w-4" />
                    Potential Fraud Detected ({selectedPartner.fraud_flags})
                  </AlertTitle>
                  <AlertDescription>
                    This application has triggered our fraud detection system. Review carefully before approving.
                  </AlertDescription>
                </Alert>
<<<<<<< HEAD
              )}'
              {selectedPartner.status === 'pending' && ("
                <div className="flex justify-end gap-2 mt-4">

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
=======
<<<<<<< HEAD
              )}
              {selectedPartner.status === 'pending' && (
                <div className="flex justify-end gap-2 mt-4">
=======
              )}'
              {selectedPartner.status === 'pending' && ("
                <div className="flex justify-end gap-2 mt-4">
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                    <Check className = $2;
  isLoading: boolean,
  onViewDetails: (partner: PartnerProfile) => void,
  onUpdateStatus: (partnerId: string, status: 'approved' | 'rejected') => void,
  onOpenSettings: (partner: PartnerProfile) => void,
  getStatusBadge: (status: string) => JSX.Element,
  getFraudFlagBadge: (flags?: number) => JSX.Element | null
}
=======
                    <Check className="h-4 w-4 mr-1" />
                    Approve
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </Button>
                </div>
              )}
            </div>
<<<<<<< HEAD
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
=======

          ;
          {selectedPartner && (;
            <div className="space-y-4">;
              <div className="grid grid-cols-2 gap-2">;
                <div>;
                  <p className="text-xs text-zion-slate-light">Name</p>;
                  <p className="font-medium text-white">{selectedPartner.name}</p>;
                </div>;
                <div>;
                  <p className="text-xs text-zion-slate-light">Status</p>;
                  <div>{getStatusBadge(selectedPartner.status)}</div>;
                </div>;
              </div>;
              ;
              <div>;
                <p className="text-xs text-zion-slate-light">Bio</p>;
                <p className="text-white">{selectedPartner.bio || "No bio provided"}</p>;
              </div>;
              ;
              <div className="grid grid-cols-2 gap-2">;
                <div>;
                  <p className="text-xs text-zion-slate-light">Niche</p>;
                  <p className="text-white">{selectedPartner.niche}</p>;
                </div>;
                <div>;
                  <p className="text-xs text-zion-slate-light">Audience Size</p>;
                  <p className="text-white">{getAudienceSizeLabel(selectedPartner.audience_size)}</p>;
                </div>;
              </div>;
              ;
              {selectedPartner.website && (;
                <div>;
                  <p className="text-xs text-zion-slate-light">Website</p>;
                  <p className="text-zion-cyan">{selectedPartner.website}</p>;
                </div>;
              )}
              ;
              {selectedPartner.social_media && Object.keys(selectedPartner.social_media).length > 0 && (;
                <div>;
                  <p className="text-xs text-zion-slate-light">Social Media</p>;
                  <div className="grid grid-cols-2 gap-2">;
                    {Object.entries(selectedPartner.social_media).map(([platform, handle]) => (;
                      <p key={platform} className="text-white">;
                        <span className="font-medium">{platform} </span>;                        {handle}
                      </p>;
                    ))}
                  </div>;
                </div>;
              )}
              ;
              <div className="grid grid-cols-2 gap-2">;
                <div>;
                  <p className="text-xs text-zion-slate-light">Payout Method</p>;
                  <p className="text-white capitalize">{selectedPartner.payout_method || "Not specified"}</p>;
                </div>;
                <div>;
                  <p className="text-xs text-zion-slate-light">Commission Rate</p>;
                  <p className="text-white">{selectedPartner.commission_rate || 25}%</p>;
                </div>;
              </div>;
              ;
              {selectedPartner.fraud_flags && selectedPartner.fraud_flags > 0 && (;
                <Alert className="bg-red-900/20 border-red-900/50 text-red-500">;
                  <AlertTitle className="flex items-center gap-2">;
                    <Flag className="h-4 w-4" />;
                    Potential Fraud Detected ({selectedPartner.fraud_flags});
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              {selectedPartner && selectedPartner.fraud_flags && selectedPartner && selectedPartner.fraud_flags > 0 && (;"
                <Alert className="bg-red-900/20 border-red-900/50 text-red-500">;"
                  <AlertTitle className="flex items-center gap-2">;"
                    <Flag className="h-4 w-4" />;
                    Potential Fraud Detected ({selectedPartner && selectedPartner.fraud_flags});

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </AlertTitle>;
                  <AlertDescription>;
                    This application has triggered our fraud detection system. Review carefully before approving.;
                  </AlertDescription>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
                </Alert>;
              )}
              ;
              {selectedPartner.status === 'pending' && (;
                <div className="flex justify-end gap-2 mt-4">;
                  <Button ;
                    variant="destructive" ;
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'rejected')}
                  <Button 
                    variant="destructive" 
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'rejected')}
                  >;
                    <X className="h-4 w-4 mr-1" />;
                    Reject;
                  </Button>;
                  <Button;
                    className="bg-green-600 hover:bg-green-700";
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'approved')}
                  >;
                    <Check className="h-4 w-4 mr-1" />;
=======




          )}

        </DialogContent>;
      </Dialog>;

      {/* Partner Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>;
        <DialogContent className="bg-zion-blue border-zion-blue-light">;
          <DialogHeader>;
            <DialogTitle>Partner Settings</DialogTitle>;
=======
                </Alert>)}
              {selected_partner.status === 'pending' && (
                <div className="flex justify - end gap - 2 mt - 4">;
                  <Button;
                    variant="destructive";
                    on_click={() => handleUpdateStatus (selected_partner.id, 'rejected')}
                  >;
                    <X className="h - 4 w - 4 mr - 1" />;
                    Reject;
                  </Button>;
                  <Button;
                    className="bg - green - 600 hover:bg - green - 700";
                    on_click={() => handleUpdateStatus (selected_partner.id, 'approved')}
                  >;
                    <Check className="h - 4 w - 4 mr - 1" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    Approve;
                  </Button>;
                </div>)}
            </div>)}
        </DialogContent>;
      </Dialog>;
      {/* Partner Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>;
        <DialogContent className="bg - zion - blue border - zion - blue - light">;
          <DialogHeader>;
            <DialogTitle > Partner Settings</DialogTitle>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <DialogDescription>;
              Configure commission rates and other settings;
            </DialogDescription>;
          </DialogHeader>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          ;
          {selectedPartner && (;
            <div className="space-y-4">;
              <div>;
                <label className="text-sm font-medium text-white">Partner Name</label>;
                <p className="text-zion-slate-light">{selectedPartner.name}</p>;
              </div>;
              ;
              <div>;
                <label className="text-sm font-medium text-white" htmlFor="commission-rate">;
                  Commission Rate (%);
                </label>;
                <Input;
                  id="commission-rate";
                  type="number";
                  min="1";
                  max="50";
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(parseInt(e.target.value))}
=======

                  onChange={(e) => setCommissionRate(parseInt(e && e.target.value))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                />;
                <p className="text-xs text-zion-slate-light mt-1">;
                  Percentage of reward granted to this partner for successful referrals;
                </p>;
              </div>;
<<<<<<< HEAD
              ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <DialogFooter>;
                <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>;
                  Cancel;
                </Button>;
                <Button onClick={handleSaveSettings} className="bg-zion-purple hover:bg-zion-purple-dark">;
                  Save Changes;
                </Button>;
              </DialogFooter>;
            </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          )}
        </DialogContent>;
      </Dialog>;
    </div>;
<<<<<<< HEAD

interface PartnerTableProps {
  partners: PartnerProfile[]
  isLoading: boolean
  onViewDetails: (partner: PartnerProfile) => void
  onUpdateStatus: (partnerId: string, status: 'approved' | 'rejected') => void
  onOpenSettings: (partner: PartnerProfile) => void
  getStatusBadge: (status: string) => JSX.Element
  getFraudFlagBadge: (flags?: number) => JSX.Element | null
}

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
                </div>;
              )}
            </div>;
          )}
        </DialogContent>
      </Dialog>
      {/* Partner Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent className="bg-zion-blue border-zion-blue-light">
          <DialogHeader>
            <DialogTitle>Partner Settings</DialogTitle>
            <DialogDescription>
              Configure commission rates and other settings
            </DialogDescription>
          </DialogHeader>
          {selectedPartner && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-white">Partner Name</label>
                <p className="text-zion-slate-light">{selectedPartner.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-white" htmlFor="commission-rate">
                  Commission Rate (%)
                </label>
                <Input
                  id="commission-rate"
                  type="number"
                  min="1"
                  max="50"
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(parseInt(e.target.value))}
                />
                <p className="text-xs text-zion-slate-light mt-1">
                  Percentage of reward granted to this partner for successful referrals
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveSettings} className="bg-zion-purple hover:bg-zion-purple-dark">
                  Save Changes
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface PartnerTableProps {
  partners: PartnerProfile[]
  isLoading: boolean
  onViewDetails: (partner: PartnerProfile) => void
  onUpdateStatus: (partnerId: string, status: 'approved' | 'rejected') => void
  onOpenSettings: (partner: PartnerProfile) => void
  getStatusBadge: (status: string) => JSX.Element
  getFraudFlagBadge: (flags?: number) => JSX.Element | null
<<<<<<< HEAD
}

=======
}



>>>>>>> merged-prs-20250907-203621
function PartnerTable({
  partners
  isLoading
  onViewDetails
<<<<<<< HEAD
=======
=======
  );
}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
function PartnerTable({ 

  partners, 
  isLoading, 
  onViewDetails, 
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onUpdateStatus;
  onOpenSettings;
  getStatusBadge;

<<<<<<< HEAD
=======
<<<<<<< HEAD
  getFraudFlagBadge
}: PartnerTableProps) {
  if (isLoading) {
=======
<<<<<<< HEAD
=======
  getFraudFlagBadge
}: PartnerTableProps) {
  if (isLoading) {
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    return (
      <div className="text-center py-8">
        <p className="text-zion-slate-light">Loading partner data...</p>
      </div>
    )
<<<<<<< HEAD
  }
  if (partners.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-zion-slate-light">No partners found.</p>
      </div>
    )
  }
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Name</TableHead>
          <TableHead>Niche</TableHead>
          <TableHead>Audience</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {partners.map((partner) => (
          <TableRow key={partner.id} className="border-zion-blue-light hover:bg-zion-blue-light/10">
            <TableCell className="font-medium text-white">
              <div className="flex items-center gap-2">
                {partner.name}
                {getFraudFlagBadge(partner.fraud_flags)}
              </div>
            </TableCell>
            <TableCell>{partner.niche}</TableCell>
            <TableCell>
              {partner.audience_size.replace('k,000').replace('- - ').replace('overOver ')}
            </TableCell>
            <TableCell>{getStatusBadge(partner.status)}</TableCell>
            <TableCell>
              {new Date(partner.created_at).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                {partner.status === 'pending' && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner.id, 'rejected')}
                      className="text-red-500 hover:text-red-600 hover:bg-red-900/20"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Reject</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner.id, 'approved')}
                      className="text-green-500 hover:text-green-600 hover:bg-green-900/20"
                    >
                      <Check className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                  </>
                )}
=======
;
function PartnerTable({;
  partners,;
  isLoading,;
  onViewDetails,;
  onUpdateStatus,;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface PartnerTableProps {;
  partners: PartnerProfile[],;
  isLoading: boolean,;
  onViewDetails: (partner: PartnerProfile) => void,;
  onUpdateStatus: (partnerId: string, status: 'approved' | 'rejected') => void,;
  onOpenSettings: (partner: PartnerProfile) => void,;
  getStatusBadge: (status: string) => JSX && JSX.Element,;
  getFraudFlagBadge: (flags?: number) => JSX && JSX.Element | null;
}
function PartnerTable(): any ({ ;
  partners, ;
  isLoading, ;
  onViewDetails, ;
  onUpdateStatus;
  onOpenSettings;
  getStatusBadge;
  getFraudFlagBadge;
}: PartnerTableProps) {;
  if (isLoading) {;
<<<<<<< HEAD
    return (;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="text-center py-8">;

        <p className="text-zion-slate-light">Loading partner data...</p>;
      </div>;
    );

<<<<<<< HEAD
  }

=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
  }
  if (partners.length === 0) {

  }
  if (partners && partners.length === 0) {;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }

<<<<<<< HEAD
=======
  if (partners && partners.length === 0) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (

        <p className="text-zion-slate-light">No partners found.</p>;

      </div>;
    );
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {selected_partner && (
            <div className="space - y-4">;
              <div>;
                <label className="text - sm font - medium text - white">Partner Name</label>;
                <p className="text - zion - slate - light">{selected_partner.name}</p>;
              </div>;
              <div>;
                <label className="text - sm font - medium text - white" html_for="commission - rate">;
                  Commission Rate (%);
                </label>;
                <Input;
                  id="commission - rate";
                  type="number";
                  min="1";
                  max="50";
                  value={commission_rate}
                  on_change={(e) => setCommissionRate (parse_int (e.target.value))}
                />;
                <p className="text - xs text - zion - slate - light mt - 1">;
                  Percentage of reward granted to this partner for successful referrals;
                </p>;
              </div>;
              <DialogFooter>;
                <Button variant="outline" on_click={() => setIsSettingsOpen (false)}>;
                  Cancel;
                </Button>;
                <Button on_click={handleSaveSettings} className="bg - zion - purple hover:bg - zion - purple - dark">;
                  Save Changes;
                </Button>;
              </DialogFooter>;
            </div>)}
        </DialogContent>;
      </Dialog>;
    </div>);
}
interface PartnerTableProps {
  partners: PartnerProfile[],
  is_loading: boolean,
  onViewDetails: (partner: PartnerProfile) => void,
  onUpdateStatus: (partner_id: string, status: 'approved' | 'rejected') => void,
  onOpenSettings: (partner: PartnerProfile) => void,
  getStatusBadge: (status: string) => JSX.Element,
  getFraudFlagBadge: (flags?: number) => JSX.Element | null;
}
/**
 * PartnerTable - Function description
 */
function PartnerTable() {
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="text - center py - 8">;
        <p className="text - zion - slate - light">Loading partner data...</p>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="text - center py - 8">;
        <p className="text - zion - slate - light">No partners found.</p>;
      </div>);
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

          <TableHead > Name</TableHead>;
          <TableHead > Niche</TableHead>;
          <TableHead > Audience</TableHead>;
          <TableHead > Status</TableHead>;

<<<<<<< HEAD
=======
                {partner.name}
                {getFraudFlagBadge (partner.fraud_flags)}
<<<<<<< HEAD
  ),;}
;
interface PartnerTableProps {;
  partners:PartnerProfile[],;
  isLoading:boolean,;
  onViewDetails:(partner:PartnerProfile) => void,;
  onUpdateStatus:(partnerId:string, status:'approved' | 'rejected') => void,;
  onOpenSettings:(partner:PartnerProfile) => void,;
  getStatusBadge:(status:string) => JSX.Element,;
  getFraudFlagBadge:(flags?:number) => JSX.Element | null;
}
;
function PartnerTable({ ;
  partners, ;
  isLoading, ;
  onViewDetails, ;
  onUpdateStatus,;
  onOpenSettings,;
  getStatusBadge,;
  getFraudFlagBadge;
} PartnerTableProps) {;
  if (isLoading) {;
    return (;
      <div className="text-center py-8">;
        <p className="text-zion-slate-light">Loading partner data...</p>;
      </div>;
    ),;
  }
  ;
  if (partners.length === 0) {;
    return (;
      <div className="text-center py-8">;
        <p className="text-zion-slate-light">No partners found.</p>;
      </div>;
    ),;
  }
  ;
  return (;
    <Table>;
      <TableHeader>;
        <TableRow className="hover:bg-transparent">;
          <TableHead>Name</TableHead>;
          <TableHead>Niche</TableHead>;
          <TableHead>Audience</TableHead>;
          <TableHead>Status</TableHead>;
          <TableHead>Date</TableHead>;
          <TableHead className="text-right">Actions</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;
        {partners.map((partner) => (;
          <TableRow key={partner.id} className="border-zion-blue-light hover:bg-zion-blue-light/10">;
            <TableCell className="font-medium text-white">;
              <div className="flex items-center gap-2">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {partner.name}
                {getFraudFlagBadge(partner.fraud_flags)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>;
            </TableCell>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
            <TableCell>{partner.niche}</TableCell>;
            <TableCell>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {partner.audience_size.replace ('k, 000').replace ('- - ').replace ('over_over ')}
            </TableCell>;
            <TableCell />{getStatusBadge (partner.status)}</TableCell>;
            <TableCell />;
              {new Date (partner.created_at).toLocaleDateString ()}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            </TableCell>;
            <TableCell className="text - right">;
              <div className="flex justify - end gap - 2">;
                {partner.status === 'pending' && (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <Table>;
      <TableHeader>;
        <TableRow className="hover:bg-transparent">;
          <TableHead>Name</TableHead>;
          <TableHead>Niche</TableHead>;
          <TableHead>Audience</TableHead>;
          <TableHead>Status</TableHead>;
          <TableHead>Date</TableHead>;
          <TableHead className="text-right">Actions</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;
        {partners && partners.map((partner) => (;
          <TableRow key={partner && partner.id} className="border-zion-blue-light hover:bg-zion-blue-light/10">;
            <TableCell className="font-medium text-white">;
              <div className="flex items-center gap-2">;
                {partner && partner.name}
                {getFraudFlagBadge(partner && partner.fraud_flags)}
              </div>;
            </TableCell>;
            <TableCell>{partner && partner.niche}</TableCell>;
            <TableCell>;
              {partner && partner.audience_size.replace('k,000').replace('- - ').replace('overOver ')}
            </TableCell>;
            <TableCell>{getStatusBadge(partner && partner.status)}</TableCell>;
            <TableCell>;
              {new Date(partner && partner.created_at).toLocaleDateString()}
            </TableCell>;
            <TableCell className="text-right">;
              <div className="flex justify-end gap-2">;
                {partner && partner.status === 'pending' && (;
                  <>;
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner && partner.id, 'rejected')}
<<<<<<< HEAD
              {partner.audience_size.replace('k,000').replace('- - ').replace('overOver ')}
            </TableCell>;
            <TableCell>{getStatusBadge(partner.status)}</TableCell>;
            <TableCell>;
              {new Date(partner.created_at).toLocaleDateString()}
            </TableCell>;
            <TableCell className="text-right">;
              <div className="flex justify-end gap-2">;
                {partner.status === 'pending' && (;
                  <>;
                    <Button ;
                      variant="ghost";
                      size="sm";
                      onClick={() => onUpdateStatus(partner.id, 'rejected')}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className="text-red-500 hover:text-red-600 hover:bg-red-900/20";
                    >;
                      <X className="h-4 w-4" />;
                      <span className="sr-only">Reject</span>;
                    </Button>;
<<<<<<< HEAD
                    <Button ;
                      variant="ghost";
                      size="sm";
                      onClick={() => onUpdateStatus(partner.id, 'approved')}
=======

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner && partner.id, 'approved')}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className="text-green-500 hover:text-green-600 hover:bg-green-900/20";
                    >;
                      <Check className="h-4 w-4" />;
                      <span className="sr-only">Approve</span>;
                    </Button>;
                  </>;
                )}
<<<<<<< HEAD
                ;
                <Button ;
                  variant="ghost" ;
                  size="sm";
                  onClick={() => onOpenSettings(partner)}
  }
  if (partners.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-zion-slate-light">No partners found.</p>
      </div>
    )
  }
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Name</TableHead>
          <TableHead>Niche</TableHead>
          <TableHead>Audience</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {partners.map((partner) => (
          <TableRow key={partner.id} className="border-zion-blue-light hover:bg-zion-blue-light/10">
            <TableCell className="font-medium text-white">
              <div className="flex items-center gap-2">
                {partner.name}
                {getFraudFlagBadge(partner.fraud_flags)}
              </div>
            </TableCell>
            <TableCell>{partner.niche}</TableCell>
            <TableCell>
              {partner.audience_size.replace('k,000').replace('- - ').replace('overOver ')}
            </TableCell>
            <TableCell>{getStatusBadge(partner.status)}</TableCell>
            <TableCell>
              {new Date(partner.created_at).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                {partner.status === 'pending' && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner.id, 'rejected')}
                      className="text-red-500 hover:text-red-600 hover:bg-red-900/20"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Reject</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner.id, 'approved')}
                      className="text-green-500 hover:text-green-600 hover:bg-green-900/20"
                    >
                      <Check className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                  </>
                )}
>>>>>>> merged-prs-20250907-203621
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onOpenSettings(partner)}
                  className="text-zion-slate-light hover:text-white"
                >
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Button>
<<<<<<< HEAD
                <Button
                  variant="outline"
=======
=======


                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => onOpenSettings(partner)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className="text-zion-slate-light hover:text-white";
                >;
                  <Settings className="h-4 w-4" />;
                  <span className="sr-only">Settings</span>;
                </Button>;

<<<<<<< HEAD
                
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                <Button 

                  variant="outline" 
<<<<<<< HEAD

                  size="sm"
                  onClick={() => onViewDetails(partner)}

=======
                <Button
                  variant="outline"
                
>>>>>>> merged-prs-20250907-203621
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onViewDetails(partner)}
                >
                  View
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
<<<<<<< HEAD
=======
=======
                <Button
=======

                
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                <Button 

                  variant="outline" 
<<<<<<< HEAD

                  size="sm"
                  onClick={() => onViewDetails(partner)}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  size="sm"
                  onClick={() => onViewDetails(partner)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <>;
                    <Button;
                      variant=\"ghost\";
                      size=\"sm\";
                      on_click={() = /> onUpdateStatus (partner.id, 'rejected')}
                      className=\"text - red - 500 hover:text - red - 600 hover:bg - red-900 / 20\";
                    >;
                      <X className=\"h - 4 w-4\" />;
                      <span className=\"sr-only\" />Reject</span>;
                    </Button>;
                    <Button;
                      variant=\"ghost\";
                      size=\"sm\";
                      on_click={() = /> onUpdateStatus (partner.id, 'approved')}
                      className=\"text - green - 500 hover:text - green - 600 hover:bg - green-900 / 20\";
                    >;

                    </Button>;
                  </>)}
                <Button;"
                  variant="ghost";"
                  size="sm";

                </Button>;
                <Button;"
                  variant="outline";"
                  size="sm";
                  on_click={() => onViewDetails (partner)}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                ;
                <Button ;
                  variant="outline" ;
                  size="sm";
                  onClick={() => onViewDetails(partner)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                >;
                  View;
                </Button>;
              </div>;
            </TableCell>;
<<<<<<< HEAD
          </TableRow>))}
      </TableBody>;
<<<<<<< HEAD
    </Table>);
=======
    </Table>);
=======
>>>>>>> merged-prs-20250907-203621
      </TableBody>
    </Table>
  )
}
<<<<<<< HEAD
=======
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

<<<<<<< HEAD
}, [isAuthenticated, navigate]);
const {
  data, error 
}= await supabase .from ('partner profiles') .select ('*') if (error) throw error;
//If no data is returned, use mock data if (!data || data.length === 0) {
  const mockData: PartnerProfile[] = [ {
  id: '1', user id: 'user1', name: 'AI Bytes', status: 'pending', created at: new Date (Date.now () - 2 * 24 * 60 * 60 * 1000) .toISOString (), niche: 'AI Tutorials', audience size: '10k-50k', social media: {
  twitter: '@aibytes', youtube: 'AI Bytes' 
};
website: 'aibytes.com';
bio: 'We create AI tutorials and insights for developers.';
payout method: 'paypal';
fraud flags: 0;
commission rate: 25 
};
{
  id: '2', user id: 'user2', name: 'ML Academy', status: 'approved', created at: new Date (Date.now () - 15 * 24 * 60 * 60 * 1000) .toISOString (), niche: 'Machine Learning Education', audience size: 'over100k', social media: {
  twitter: '@mlacademy', youtube: 'ML Academy' 
};
website: 'mlacademy.edu';
bio: 'Premiere online academy for machine learning enthusiasts.';
payout method: 'bank';
fraud flags: 0;
commission rate: 30 
};
{
  id: '3', user id: 'user3', name: 'Tech Insights', status: 'rejected', created at: new Date (Date.now () - 5 * 24 * 60 * 60 * 1000) .toISOString (), niche: 'Technology News', audience size: '1k-10k', social media: {
  twitter: '@techinsights' 
};
website: 'techinsights.io';
bio: 'We share insights about the latest in tech.';
payout method: 'window.crypto';
fraud flags: 2;
commission rate: 20 
};
{
  id: '4', user id: 'user4', name: 'CodeMaster', status: 'approved', created at: new Date (Date.now () - 30 * 24 * 60 * 60 * 1000) .toISOString (), niche: 'Coding Tutorials', audience size: '50k-100k', social media: {
  youtube: 'CodeMaster', linkedin: 'codemaster' 
};
website: 'codemaster.dev';
bio: 'Learn to code with our expert tutorials.';
payout method: 'paypal';
fraud flags: 0;
commission rate: 25 
};
{
  id: '5', user id: 'user5', name: 'AI Daily', status: 'pending', created at: new Date (Date.now () - 1 * 24 * 60 * 60 * 1000) .toISOString (), niche: 'AI News', audience size: '10k-50k', social media: {
  twitter: '@aidaily', instagram: '@aidailynews' 
};
website: 'aidaily.news';
bio: 'Daily updates on the world of artificial intelligence.';
payout method: 'platform credit';
fraud flags: 1;
commission rate: 20 
}];
}finally {
  setIsLoading (false) 
}
};
const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {
  let filtered = partners;
}//Filter by search query if (query) {
  const lowerQuery = query.toLowerCase ();
};
const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {
  try {
  //In a real app, this would update the database setPartners (partners.map (p => filterPartners (partners.map (p => p.id === partnerId ? {
  ...p, status 
}: p);
activeTab;
searchQuery);
//Close the dialog if open if (isDetailsOpen && selectedPartner?.id === partnerId) {
  setIsDetailsOpen (false) 
}
}catch (error) {
  
}
};
try {
  //Update commission rate setPartners (partners.map (p => filterPartners (partners.map (p => p.id === selectedPartner.id ? {
  ...p, commission rate: commissionRate 
}: p);
activeTab;
searchQuery);
setIsSettingsOpen (false) 
}catch (error) {
  
}
};
const getStatusBadge = (status: string) => {
  switch (status) {
  case 'pending': 
}
};
return (<Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1"> <Flag className="h-3 w-3" /> {
  flags 
}</Badge>) 
};
return (<div className="container max-w-7xl py-10"> <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"> <div> <h1 className="text-3xl font-bold tracking-tight text-white">Partner Management</h1> <p className="text-zion-slate-light">Approve and manage affiliate partners</p> </div> </div> <Card className="bg-zion-blue-dark border-zion-blue-light mb-8"> <CardHeader className="pb-3"> <CardTitle>Overview</CardTitle> </CardHeader> <CardContent> <div className="grid gap-4 md:grid-cols-3"> <Card className="bg-zion-blue border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-sm font-medium text-zion-slate-light"> Pending Applications </CardTitle> <div className="text-2xl font-bold text-white"> {
  partners.filter (p => p.status === 'pending') .length 
}</div> </CardHeader> <CardContent className="pt-0"> <p className="text-xs text-zion-slate-light"> Partners waiting for review and approval </p> </CardContent> </Card> <Card className="bg-zion-blue border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-sm font-medium text-zion-slate-light"> Active Partners </CardTitle> <div className="text-2xl font-bold text-white"> {
  partners.filter (p => p.status === 'approved') .length 
}</div> </CardHeader> <CardContent className="pt-0"> <p className="text-xs text-zion-slate-light"> Currently approved and active partners </p> </CardContent> </Card> <Card className="bg-zion-blue border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-sm font-medium text-zion-slate-light"> Fraud Flags </CardTitle> <div className="text-2xl font-bold text-white"> {
  partners.reduce ( (total, p) => total + (p.fraud flags || 0), 0) 
}</div> </CardHeader> <CardContent className="pt-0"> <p className="text-xs text-zion-slate-light"> Total potential fraud flags detected </p> </CardContent> </Card> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader className="pb-3 flex flex-col md:flex-row justify-between md:items-center gap-4"> <div> <CardTitle>Partners</CardTitle> <CardDescription>Manage partnership applications and settings</CardDescription> </div> <div className="w-full md:w-80"> <div className="relative"> <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light" /> <Input placeholder="Search partners..." className="pl-8" value= {
  searchQuery 
}onChange= {
  handleSearch 
}/> </div> </div> </CardHeader> <CardContent> </TabsList> <TabsContent value="pending" className="space-y-4" > <PartnerTable partners= {
  filteredPartners 
}isLoading= {
  isLoading 
}onViewDetails= {
  handleViewDetails 
}onUpdateStatus= {
  handleUpdateStatus 
}onOpenSettings= {
  handleOpenSettings 
}getStatusBadge= {
  getStatusBadge 
}getFraudFlagBadge= {
  getFraudFlagBadge 
}/> </TabsContent> <TabsContent value="approved" className="space-y-4" > <PartnerTable partners= {
  filteredPartners 
}isLoading= {
  isLoading 
}onViewDetails= {
  handleViewDetails 
}onUpdateStatus= {
  handleUpdateStatus 
}onOpenSettings= {
  handleOpenSettings 
}getStatusBadge= {
  getStatusBadge 
}getFraudFlagBadge= {
  getFraudFlagBadge 
}/> </TabsContent> <TabsContent value="rejected" className="space-y-4" > <PartnerTable partners= {
  filteredPartners 
}isLoading= {
  isLoading 
}onViewDetails= {
  handleViewDetails 
}onUpdateStatus= {
  handleUpdateStatus 
}onOpenSettings= {
  handleOpenSettings 
}getStatusBadge= {
  getStatusBadge 
}getFraudFlagBadge= {
  getFraudFlagBadge 
}/> </TabsContent> <TabsContent value="all" className="space-y-4"> <PartnerTable partners= {
  filteredPartners 
}isLoading= {
  isLoading 
}onViewDetails= {
  handleViewDetails 
}onUpdateStatus= {
  handleUpdateStatus 
}onOpenSettings= {
  handleOpenSettings 
}getStatusBadge= {
  getStatusBadge 
}getFraudFlagBadge= {
  getFraudFlagBadge 
}/> </TabsContent> </Tabs> </CardContent> </Card> {
  /* Partner Details Dialog */ 
}<Dialog open= {
  isDetailsOpen 
}onOpenChange= {
  setIsDetailsOpen 
}> <DialogContent className="sm:max-w-lg bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Partner Details</DialogTitle> <DialogDescription> Review the details of the partner application </DialogDescription> </DialogHeader> {
  selectedPartner && (<div className="space-y-4"> <div className="grid grid-cols-2 gap-2"> <div> <p className="text-xs text-zion-slate-light">Name</p> <p className="font-medium text-white"> {
  selectedPartner.name 
}</p> </div> <div> <p className="text-xs text-zion-slate-light">Status</p> <div> {
  getStatusBadge (selectedPartner.status) 
}</div> </div> </div> <div> <p className="text-xs text-zion-slate-light">Bio</p> </div> <div className="grid grid-cols-2 gap-2"> <div> <p className="text-xs text-zion-slate-light">Niche</p> <p className="text-white"> {
  selectedPartner.niche 
}</p> </div> <div> <p className="text-xs text-zion-slate-light">Audience Size</p> <p className="text-white"> {
  getAudienceSizeLabel (selectedPartner.audience size) 
}</p> </div> </div> {
  selectedPartner.website && (<div> <p className="text-xs text-zion-slate-light">Website</p> <p className="text-zion-cyan"> {
  selectedPartner.website 
}</p> </div>) 
}{
  selectedPartner.social media && Object.keys (selectedPartner.social media) .length > 0 && (<div> <p className="text-xs text-zion-slate-light">Social Media</p> <div className="grid grid-cols-2 gap-2"> {
  Object.entries (selectedPartner.social media) .map ( ([platform, handle]) => (<p key= {
  platform 
}className="text-white"> <span className="font-medium"> {
  platform 
}: </span> {
  handle 
}</p>) ) 
}</div> </div>) 
}<div className="grid grid-cols-2 gap-2"> <div> <p className="text-xs text-zion-slate-light">Payout Method</p> </div> <div> <p className="text-xs text-zion-slate-light">Commission Rate</p> <p className="text-white"> {
  selectedPartner.commission rate || 25 
}%</p> </div> </div> {
  selectedPartner.fraud flags && selectedPartner.fraud flags > 0 && (<Alert className="bg-red-900/20 border-red-900/50 text-red-500"> <AlertTitle className="flex items-center gap-2"> <Flag className="h-4 w-4" /> Potential Fraud Detected ({
  selectedPartner.fraud flags 
}) </AlertTitle> <AlertDescription> This application has triggered our fraud detection system. Review carefully before approving. </AlertDescription> </Alert>) 
}> <X className="h-4 w-4 mr-1" /> Reject </Button> <Button className="bg-green-600 hover:bg-green-700" onClick= {
  () => handleUpdateStatus (selectedPartner.id, 'approved') 
}> <Check className="h-4 w-4 mr-1" /> Approve </Button> </div>) 
}</div>) 
}</DialogContent> </Dialog> {
  /* Partner Settings Dialog */ 
}<Dialog open= {
  isSettingsOpen 
}onOpenChange= {
  setIsSettingsOpen 
}> <DialogContent className="bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Partner Settings</DialogTitle> <DialogDescription> Configure commission rates and other settings </DialogDescription> </DialogHeader> {
  selectedPartner && (<div className="space-y-4"> <div> <label className="text-sm font-medium text-white">Partner Name</label> <p className="text-zion-slate-light"> {
  selectedPartner.name 
}</p> </div> <div> <label className="text-sm font-medium text-white" htmlFor="commission-rate" > Commission Rate (%) </label> <Input /> <p className="text-xs text-zion-slate-light mt-1" > Percentage of reward granted to this partner for successful referrals </p> </div> <DialogFooter> Cancel </Button> <Button onClick= {
  handleSaveSettings 
}className="bg-zion-purple hover:bg-zion-purple-dark"> Save Changes </Button> </DialogFooter> </div>) 
}</DialogContent> </Dialog> </div>) 
}function PartnerTable ({
  partners, isLoading, onViewDetails, onUpdateStatus, onOpenSettings, getStatusBadge, getFraudFlagBadge 
}: PartnerTableProps) {
  if (isLoading) {
  return (<div className="text-center py-8"> <p className="text-zion-slate-light">Loading partner data...</p> </div> if (partners.length === 0) {
  return (<div className="text-center py-8"> <p className="text-zion-slate-light">No partners found.</p> </div> return (<Table> <TableHeader> <TableRow className="hover:bg-transparent"> <TableHead>Name</TableHead> <TableHead>Niche</TableHead> <TableHead>Audience</TableHead> <TableHead>Status</TableHead> <TableHead>Date</TableHead> <TableHead className="text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  partners.map ( (partner) => (<TableRow key= {
  partner.id 
}className="border-zion-blue-light hover:bg-zion-blue-light/10"> <TableCell className="font-medium text-white"> <div className="flex items-center gap-2"> {
  partner.name 
}{
  getFraudFlagBadge (partner.fraud flags) 
}</div> </TableCell> <TableCell> {
  partner.niche 
}</TableCell> <TableCell> </TableCell> <TableCell> {
  getStatusBadge (partner.status) 
}</TableCell> <TableCell> {
  new Date (partner.created at) .toLocaleDateString () 
}</TableCell> <TableCell className="text-right"> className="text-red-500 hover:text-red-600 hover:bg-red-900/20" > <X className="h-4 w-4" /> <span className="sr-only" >Reject</span> </Button> <Button className="text-green-500 hover:text-green-600 hover:bg-green-900/20" > <Check className="h-4 w-4" /> <span className="sr-only" >Approve</span> </Button> </>) 
}<Button className="text-zion-slate-light hover:text-white" > <Settings className="h-4 w-4" /> <span className="sr-only" >Settings</span> </Button> <Button > View </Button> </div> </TableCell> </TableRow>) ) 
}</TableBody> </Table>) 
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
