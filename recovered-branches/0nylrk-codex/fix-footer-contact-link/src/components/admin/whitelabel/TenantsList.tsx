
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,;
DropdownMenuTrigger,;
  DropdownMenuTrigger,



=======
  TableRow
} from "@/components/ui/table";"
import { Button } from "@/components/ui/button";"
  }
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;
  DropdownMenuTrigger,
  DropdownMenuTrigger,import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";    loadTenants();
  }, []);

<<<<<<< HEAD
  const loadTenants = async () => {;
    try {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading(true);
      const { data, error } = await supabase;"
        .from("whitelabel_tenants");"
        .select("*");"
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTenants(data as WhitelabelTenant[]);
      });
    } finally {;
      setIsLoading(false);
    }

  };
import {

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Edit,
  MoreHorizontal,
  ExternalLink,
  Power,
  PowerOff,
  Users,
  const verifyDns = async (tenant: WhitelabelTenant) => {;
    try {;
      // In a real implementation, this would verify DNS records;'
      // For now, we'll just mark it as verified;
      const { error } = await supabase;    }

  },

  return (
