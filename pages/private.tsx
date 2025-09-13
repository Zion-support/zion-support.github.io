import React from 'react';
import Head from 'next/head';
      <Head><title>private - Zion App</title><meta name="description" content="private page" /></Head><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">private</h1><p className="text-lg mb-4">This page is under construction.</p><div className="mt-4"><a href="/" className="text-blue-600 hover:underline">;
      <Head><title>private - Zion App</title><meta name="description" content="private page" /></Head><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">private</h1><p className="text-lg mb-4">This page is under construction.</p><div className="mt-4"><a href="/" className="text-blue-600 hover:underline">;

export default Private;
import { GetServerSideProps, GetServerSidePropsContext } from 'next / types';
import { createServerSideClient } from '../src / utils / supabase / server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Badge } from '@/components / ui / badge';
import { User, Mail, Calendar, Shield } from 'lucide-react';

import Link from 'next / link';
import Head from 'next / head';
import type { User as SupabaseUser } from '@supabase / supabase - js';



export default /**


      </Head>


        <Card>
          <CardHeader>
            <CardTitle className=&quot;flex items-center gap-2&quot;>
              <Shield className=&quot;h-5 w-5&quot; />
            </CardTitle>
          </CardHeader>
          <CardContent className=&quot;space-y-6&quot;>
                <User className=&quot;h-6 w-6 text-blue-600 dark:text-blue-400&quot; />
                    <Mail className=&quot;h-4 w-4 text-muted-foreground&quot; />
                    <Badge variant={user.email_confirmed_at ? &quot;default&quot; : &quot;secondary&quot;}>
                    </Badge>
                    <Calendar className=&quot;h-4 w-4 text-muted-foreground&quot; />








              <Button asChild>
                <Link href=&quot;/dashboard&quot;>
                </Link>
              </Button>
              <Button asChild variant=&quot;outline&quot;>
                <Link href=&quot;/&quot;>
                </Link>
              </Button>
          </CardContent>
        </Card>

      <Head>;
      </Head>;
        <Card>;
          <CardHeader>;
            <CardTitle className=&quot;flex items - center gap - 2&quot;>;
              <Shield className=&quot;h - 5 w - 5&quot; />;
            </CardTitle>;
          </CardHeader>;
          <CardContent className=&quot;space - y-6 & quot;>;
                <User className=&quot;h - 6 w - 6 text - blue - 600 dark:text - blue - 400 & quot; />;
                    <Mail className=&quot;h - 4 w - 4 text - muted - foreground & quot; />;
                    <Badge variant={user.email_confirmed_at ? &quot;default & quot; : &quot;secondary & quot;}>;
                    </Badge>;
                    <Calendar className=&quot;h - 4 w - 4 text - muted - foreground & quot; />;
              <Button as_child>;
                <Link href=&quot;/dashboard & quot;>;
                </Link>;
              </Button>;
              <Button as_child variant=&quot;outline & quot;>;
                <Link href=&quot;/&quot;>;
                </Link>;
              </Button>;
          </CardContent>;
        </Card>;
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
      <Head>
      </Head>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
                <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <Badge variant={user.email_confirmed_at ? "default" : "secondary"}>
                    </Badge>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
              <Button asChild>
                <Link href="/dashboard">
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">
                </Link>
              </Button>
          </CardContent>
        </Card>


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {;


