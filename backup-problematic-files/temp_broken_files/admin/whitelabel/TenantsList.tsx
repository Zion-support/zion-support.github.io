
import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { ;
  Table,;
  TableBody, ;
  TableCell, ;
  TableHead, ;
  TableHeader, ;
  TableRow ;
} from '@/components/ui/table',;
import { Button } from '@/components/ui/button',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;

    <div className="space-y-4">;
      <div className="flex justify-between items-center">;
        <h2 className="text-xl font-semibold">White-Label Tenants</h2>;
        <Button onClick={loadTenants} variant="outline" size="sm">;
          <RefreshCcw className="mr-2 h-4 w-4" />;
          Refresh;
        </Button>;
      </div>;

      {isLoading ? (;
        <div className="flex justify-center p-8">;
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>;
        </div>;

        <div className="rounded-md border">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Brand</TableHead>;
                <TableHead>Subdomain</TableHead>;
                <TableHead>Custom Domain</TableHead>;
                <TableHead>Status</TableHead>;
                <TableHead>Created At</TableHead>;
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;

                        <ExternalLink className="ml-1 h-3 w-3" />;
                      </a>;
                    </TableCell>;
                    <TableCell>;

                              onClick={() => verifyDns(tenant)}
                              className="ml-1 h-6 w-6 p-0";
                            >;
                              <RefreshCcw className="h-3 w-3" />;
                              <span className="sr-only">Verify DNS</span>;
                            </Button>;
                          )}
                        </div>;

                    <TableCell className="text-right">;
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="sm">;
                            <MoreHorizontal className="h-4 w-4" />;
                            <span className="sr-only">Actions</span>;

                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                    </TableCell>;

}