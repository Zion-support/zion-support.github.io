import React from 'react';
import Head from 'next/head';
      <Head><title>admin/logs - Zion App</title><meta name="description" content="admin/logs page" /></Head><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">admin/logs</h1><p className="text-lg mb-4">This page is under construction.</p><div className="mt-4"><a href="/" className="text-blue-600 hover:underline">;
      <Head><title>admin/logs - Zion App</title><meta name="description" content="admin/logs page" /></Head><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">admin/logs</h1><p className="text-lg mb-4">This page is under construction.</p><div className="mt-4"><a href="/" className="text-blue-600 hover:underline">;

export default Logs;


import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import {useState, useEffect} from 'react';
import {GetServerSideProps} from 'next';
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';


import fs from 'fs';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Input } from '@/components/ui/input';


} from '@/components/ui/select';
import {;


import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Input } from '@/components / ui / input';
import {
} from '@/components / ui / select';
import {


import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import {useState, useEffect} from 'react';
import {GetServerSideProps} from 'next';
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Input } from '@/components/ui/input';
} from '@/components/ui/select';
import {

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Info, AlertCircle, XCircle, Search, Download, RefreshCw } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';


  component?: string;












      return <Info className="h-4 w-4 text-blue-500" />,
      return <Info className="h-4 w-4 text-green-500" />,
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />,
      return <AlertCircle className="h-4 w-4 text-red-500" />,


}: LogsPageProps) {  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
      return <XCircle className="h-4 w-4 text-red-700" />,
    default: return <Info className="h-4 w-4 text-gray-500" />
      return <Info className="h-4 w-4 text-blue-500" />;
      return <Info className="h-4 w-4 text-green-500" />;
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      return <AlertCircle className="h-4 w-4 text-red-500" />;
      return <XCircle className="h-4 w-4 text-red-700" />,;
    default: return <Info className="h-4 w-4 text-gray-500" />;
  return <Badge className={colors[level]}>{level && level.toUpperCase()}</Badge>;
  return <Badge className={colors[level]}>{level && level.toUpperCase()}</Badge>;
export default function LogsPage(): any ({;
}: LogsPageProps) {  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);

      return <Info className="h-4 w-4 text-blue-500" />;
      return <Info className="h-4 w-4 text-green-500" />;
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      return <AlertCircle className="h-4 w-4 text-red-500" />;
      return <XCircle className="h-4 w-4 text-red-700" />;
    default: return <Info className="h-4 w-4 text-gray-500" />
    <Badge className={colors[level]}>
    </Badge>

export default function LogsPage({ logs: initialLogs, errorCount, warningCount, totalCount, lastUpdated }: LogsPageProps) {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);



  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>(initialLogs);












          (log && log.component &&;
            log && log.component.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));








  const exportLogs = () => {;

    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`;



        (log.component && log.component.toLowerCase().includes(searchTerm.toLowerCase()));
  const exportLogs = () => {;



    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`,;
    linkElement.setAttribute('download', exportFileDefaultName);


    linkElement && linkElement.setAttribute('download', exportFileDefaultName);








          <Button onClick={refreshLogs} disabled={isLoading} variant='outline'>;
            <RefreshCw

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Logs</CardTitle>
            <CardTitle className='text-sm font-medium'>Total Logs</CardTitle>
            <Info className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <p className='text-xs text-muted-foreground'>All log entries</p>          </CardContent>

        (log.component && log.component.toLowerCase().includes(searchTerm.toLowerCase()));
  const exportLogs = () => {;
    const exportFileDefaultName = `logs-${new Date().toISOString().slice(0, 10)}.json`,;
    linkElement.setAttribute('download', exportFileDefaultName);



          <Button onClick={refreshLogs} disabled={isLoading} variant="outline">
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
          <Button onClick={exportLogs} variant="outline">
          <Button onClick={exportLogs} variant="outline">
            <Download className="h-4 w-4 mr-2" />
          </Button>






        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
            <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>
        <Card>

          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Errors</CardTitle>
            <CardTitle className="text-sm font-medium">Errors</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
          </CardContent>

        </Card>
        <Card>

          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
          </CardContent>

        </Card>
        <Card>

          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
          </CardContent>

        </Card>

          </Button>;
          <Button onClick={exportLogs} variant='outline'>;
          <Button onClick={exportLogs} variant='outline'>;
            <Download className='h-4 w-4 mr-2' />;
          </Button>;

        <Card>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>Total Logs</CardTitle>;
            <CardTitle className='text-sm font-medium'>Total Logs</CardTitle>;
            <Info className='h-4 w-4 text-muted-foreground' />;
          </CardHeader>;
          <CardContent>;
            <p className='text-xs text-muted-foreground'>All log entries</p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>Errors</CardTitle>;
            <CardTitle className='text-sm font-medium'>Errors</CardTitle>;
            <XCircle className='h-4 w-4 text-red-500' />;
          </CardHeader>;
          <CardContent>;
            </p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>Warnings</CardTitle>;
            <CardTitle className='text-sm font-medium'>Warnings</CardTitle>;
            <AlertTriangle className='h-4 w-4 text-yellow-500' />;
          </CardHeader>;
          <CardContent>;
            <p className='text-xs text-muted-foreground'>Warning logs</p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>Last Updated</CardTitle>;
            <CardTitle className='text-sm font-medium'>Last Updated</CardTitle>;
            <RefreshCw className='h-4 w-4 text-muted-foreground' />;
          </CardHeader>;
          <CardContent>;
            <p className='text-xs text-muted-foreground'>Data freshness</p>          </CardContent>;
        </Card>;




      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All levels" />
              </SelectTrigger>
              <SelectContent>



                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>

            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>


              <SelectTrigger>
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                  <SelectItem key={category} value={category}>{category}</SelectItem>
              </SelectContent>
            </Select>
<Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>

                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="all">All Sources</SelectItem>

      return <Info className='h - 4 w - 4 text - blue - 500' />;
      return <Info className='h - 4 w - 4 text - green - 500' />;
      return <AlertTriangle className='h - 4 w - 4 text - yellow - 500' />;
      return <AlertCircle className='h - 4 w - 4 text - red - 500' />;
      return <XCircle className='h - 4 w - 4 text - red - 700' />;
      return <Info className='h - 4 w - 4 text - gray - 500' />;
  return <Badge className={colors[level]}>{level.toUpperCase ()}</Badge>;
  return <Badge className={colors[level]}>{level.toUpperCase ()}</Badge>;
export default /**
          (log.component &&;
            log.component.toLowerCase ().includes (search_term.toLowerCase ())));
  const export_logs = () =>: any {
    const exportFileDefaultName = `logs-${new Date ().toISOString ().slice (0, 10)}.json`;
    link_element.set_attribute ('download', exportFileDefaultName);
          <Button on_click={refresh_logs} disabled={is_loading} variant='outline'>;
            <RefreshCw;
          </Button>;
          <Button on_click={export_logs} variant='outline'>;
          <Button on_click={export_logs} variant='outline'>;
            <Download className='h - 4 w - 4 mr - 2' />;
          </Button>;
        <Card>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>Total Logs</CardTitle>;
            <CardTitle className='text - sm font - medium'>Total Logs</CardTitle>;
            <Info className='h - 4 w - 4 text - muted - foreground' />;
          </CardHeader>;
          <CardContent>;
            <p className='text - xs text - muted - foreground'>All log entries</p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>Errors</CardTitle>;
            <CardTitle className='text - sm font - medium'>Errors</CardTitle>;
            <XCircle className='h - 4 w - 4 text - red - 500' />;
          </CardHeader>;
          <CardContent>;
            </p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>Warnings</CardTitle>;
            <CardTitle className='text - sm font - medium'>Warnings</CardTitle>;
            <AlertTriangle className='h - 4 w - 4 text - yellow - 500' />;
          </CardHeader>;
          <CardContent>;
            <p className='text - xs text - muted - foreground'>Warning logs</p>          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>Last Updated</CardTitle>;
            <CardTitle className='text - sm font - medium'>Last Updated</CardTitle>;
            <RefreshCw className='h - 4 w - 4 text - muted - foreground' />;
          </CardHeader>;
          <CardContent>;
            <p className='text - xs text - muted - foreground'>Data freshness</p>          </CardContent>;
        </Card>;
      <Card>;
        <CardHeader>;
          <CardTitle > Filters</CardTitle>;
          <CardTitle > Filters</CardTitle>;
        </CardHeader>;
        <CardContent>;
              <Search className='absolute left - 2 top - 2.5 h - 4 w - 4 text - muted - foreground' />;
              <Input;
            <Select value={level_filter} onValueChange={setLevelFilter}>;
              <SelectTrigger>;
                <SelectValue placeholder='All levels' />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value='all'>All Levels</SelectItem>;
                <SelectItem value='all'>All Levels</SelectItem>;
                <SelectItem value='debug'>Debug</SelectItem>;
                <SelectItem value='debug'>Debug</SelectItem>;
                <SelectItem value='info'>Info</SelectItem>;
                <SelectItem value='info'>Info</SelectItem>;
                <SelectItem value='warn'>Warning</SelectItem>;
                <SelectItem value='warn'>Warning</SelectItem>;
                <SelectItem value='error'>Error</SelectItem>;
                <SelectItem value='error'>Error</SelectItem>;
                <SelectItem value='critical'>Critical</SelectItem>              </SelectContent>;
                <SelectItem value='critical'>Critical</SelectItem>              </SelectContent>;
            </Select>;
            <Select value={category_filter} onValueChange={setCategoryFilter}>;
              <SelectTrigger>;
                <SelectValue placeholder='All categories' />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value='all'>All Categories</SelectItem>;
                <SelectItem value='all'>All Categories</SelectItem>;
                  <SelectItem key={category} value={category}>;
                  </SelectItem>                ))}
              </SelectContent>;
            </Select>;
            <Select value={source_filter} onValueChange={setSourceFilter}>;
              <SelectTrigger>;
                <SelectValue placeholder='All sources' />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value='all'>All Sources</SelectItem>;
                <SelectItem value='all'>All Sources</SelectItem>;

                  <SelectItem key={source} value={source}>;

                  </SelectItem>                ))}
              </SelectContent>;
            </Select>;

      <Card>;
        <CardHeader>;
          <CardTitle > Log Entries ({filtered_logs.length})</CardTitle>;
          <CardTitle > Log Entries ({filtered_logs.length})</CardTitle>;
        </CardHeader>;
        <CardContent>;
                      <LogLevelIcon level={log.level} />;
                      <LogLevelBadge level={log.level} />;
                      <Badge variant='outline'>{log.category}</Badge>;
                      <Badge variant='outline'>{log.category}</Badge>;
                      <Badge variant='secondary'>{log.source}</Badge>;
                      <Badge variant='secondary'>{log.source}</Badge>;
                      {log.component && (
                        <Badge variant='outline'>{log.component}</Badge>)}
                        <Badge variant='outline'>{log.component}</Badge>)}
                        <Badge variant='outline'>{log.component}</Badge>)}



      <Card>
        <CardHeader>
          <CardTitle>Log Entries ({filteredLogs.length})</CardTitle>
          <CardTitle>Log Entries ({filteredLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
                      <LogLevelIcon level={log.level} />
                      <LogLevelBadge level={log.level} />
                      <Badge variant="outline">{log.category}</Badge>
                      <Badge variant="outline">{log.category}</Badge>
                      <Badge variant="secondary">{log.source}</Badge>
                      <Badge variant="secondary">{log.source}</Badge>
                      {log.component && (
                        <Badge variant="outline">{log.component}</Badge>
                        <Badge variant="outline">{log.component}</Badge>
                        <Badge variant="outline">{log.component}</Badge>










        </CardContent>;
      </Card>;
export const getServerSideProps: GetServerSideProps = async () => {;


